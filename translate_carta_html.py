"""Inject data-i18n attributes into every dish row in carta.html and emit
the JavaScript dictionary fragment to drop into assets/app.js.

We reuse the ES→EN map already defined in generate_carta_pdf.py."""
import re
import sys
import importlib.util
import os

ROOT = "/Users/javierbortserrat/Projects/arantxa"
HTML_PATH = os.path.join(ROOT, "carta.html")

# Load the TRANS dict from generate_carta_pdf.py
spec = importlib.util.spec_from_file_location(
    "gen_pdf", os.path.join(ROOT, "generate_carta_pdf.py")
)
gen = importlib.util.module_from_spec(spec)
# Avoid running cover_page side-effects: spec.loader.exec_module would download fonts.
# Instead, parse TRANS via simple read.
TRANS = {}
in_trans = False
brace_depth = 0
with open(os.path.join(ROOT, "generate_carta_pdf.py"), "r", encoding="utf-8") as f:
    src = f.read()
# Extract TRANS dict literal via regex
m = re.search(r"TRANS\s*=\s*\{(.*?)\n\}\n", src, re.DOTALL)
if not m:
    sys.exit("Could not find TRANS dict")
body = m.group(1)
# Parse "ES": "EN", entries — supports both single-line and multi-line layouts.
# Strategy: find every pair of double-quoted strings separated by a colon.
pair_re = re.compile(r'"((?:[^"\\]|\\.)+)"\s*:\s*"((?:[^"\\]|\\.)+)"', re.DOTALL)
for m2 in pair_re.finditer(body):
    TRANS[m2.group(1)] = m2.group(2)

print(f"Loaded {len(TRANS)} translations from TRANS")

# Read carta.html
with open(HTML_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# Find all dish rows: <div class="carta-row"><div class="carta-row-main">
#   <h4>Name</h4><p>Description</p></div><span class="carta-row-price">Price</span></div>
# h4 may already have data-i18n; skip those.

# Pattern: <h4>NAME</h4> (no existing data-i18n)
h4_pat = re.compile(r'<h4>([^<]+)</h4>')
p_pat  = re.compile(r'<p>([^<]+)</p>')

# Limit scope to carta-row entries: process the carta-row blocks only.
# A simpler approach: process h4 and p within carta-row-main divs only.

def slugify(s):
    s = s.lower()
    s = re.sub(r"[áàâä]", "a", s)
    s = re.sub(r"[éèêë]", "e", s)
    s = re.sub(r"[íìîï]", "i", s)
    s = re.sub(r"[óòôö]", "o", s)
    s = re.sub(r"[úùûü]", "u", s)
    s = re.sub(r"[ñ]", "n", s)
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s[:50] or "x"

# Collect keys to inject in i18n
new_keys = {}  # slug -> (es, en)

def replace_h4_p_in_row(match):
    block = match.group(0)
    # Inside this block, look for h4 and p without data-i18n
    inner = match.group(1)

    def fix_h4(m):
        text = m.group(1).strip()
        slug = slugify(text)
        key = f"d.{slug}.n"
        new_keys[key] = (text, TRANS.get(text, text))
        return f'<h4 data-i18n="{key}">{text}</h4>'

    def fix_p(m):
        text = m.group(1).strip()
        # Skip empty paragraphs or those that contain HTML
        if not text:
            return m.group(0)
        slug = slugify(text)
        key = f"d.{slug}.d"
        # If the description text is too long for slug, use a hash-like shorter
        if len(slug) > 48:
            import hashlib
            short = hashlib.sha1(text.encode()).hexdigest()[:10]
            key = f"d.d.{short}"
        new_keys[key] = (text, TRANS.get(text, text))
        return f'<p data-i18n="{key}">{text}</p>'

    # Replace only inside the carta-row-main
    inner = re.sub(r'<h4>([^<]+)</h4>', fix_h4, inner)
    inner = re.sub(r'<p>([^<]+)</p>', fix_p, inner)
    # Also re-scan elements that ALREADY have data-i18n so we re-emit the
    # I18N dictionaries based on the current carta.html content.
    re.sub(r'<h4 data-i18n="([^"]+)">([^<]+)</h4>',
           lambda mm: new_keys.setdefault(mm.group(1), (mm.group(2).strip(),
                                                          TRANS.get(mm.group(2).strip(), mm.group(2).strip()))) and "",
           inner)
    re.sub(r'<p data-i18n="([^"]+)">([^<]+)</p>',
           lambda mm: new_keys.setdefault(mm.group(1), (mm.group(2).strip(),
                                                          TRANS.get(mm.group(2).strip(), mm.group(2).strip()))) and "",
           inner)
    return block.replace(match.group(1), inner)

# Match carta-row blocks
row_pat = re.compile(
    r'(<div class="carta-row-main">.*?</div>)',
    re.DOTALL
)
new_html = row_pat.sub(replace_h4_p_in_row, html)

# Write back
with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(new_html)
print(f"Wrote {HTML_PATH} with {len(new_keys)} dishes tagged")

# Emit JS dict fragments
out_dir = "/tmp"
es_lines = []
en_lines = []
for key, (es, en) in sorted(new_keys.items()):
    es_safe = es.replace("'", "\\'")
    en_safe = en.replace("'", "\\'")
    es_lines.append(f"      '{key}': '{es_safe}',")
    en_lines.append(f"      '{key}': '{en_safe}',")
es_out = "\n".join(es_lines)
en_out = "\n".join(en_lines)
with open(os.path.join(out_dir, "i18n_es.js"), "w", encoding="utf-8") as f:
    f.write(es_out)
with open(os.path.join(out_dir, "i18n_en.js"), "w", encoding="utf-8") as f:
    f.write(en_out)
print(f"Wrote /tmp/i18n_es.js and /tmp/i18n_en.js ({len(new_keys)} entries each)")
print("\nMissing EN translations (kept as ES):")
missing = [k for k, v in new_keys.items() if v[0] == v[1]]
print(f"  {len(missing)} entries")
for k in missing[:10]:
    print(f"    {k}: {new_keys[k][0]!r}")
