"""Extract clean logo variants from the wall-sign photo.

Outputs three files:
  logo-mark.png       — icon only (A + crown + cutlery), transparent bg
  logo-full.png       — icon + ARANTXA wordmark, transparent bg
  logo-dark-plate.png — icon + wordmark on a black plate (for favicons/socials)
"""
from PIL import Image, ImageFilter
import os

SRC = "/Users/javierbortserrat/Projects/arantxa/assets/img/logo.jpg"
OUT_DIR = "/Users/javierbortserrat/Projects/arantxa/assets/img"

src = Image.open(SRC).convert("RGB")
W, H = src.size
print("Source:", W, "x", H)


def extract(region, lum_min=155, warm_min=18, lum_offset=120, alpha_mul=1.9):
    """Crop `region` (l,t,r,b in 0..1), threshold warm-lit pixels, return RGBA."""
    l, t, r, b = region
    crop = src.crop((int(W * l), int(H * t), int(W * r), int(H * b)))
    rgba = crop.convert("RGBA")
    px = rgba.load()
    cw, ch = rgba.size
    for y in range(ch):
        for x in range(cw):
            r2, g2, b2, _ = px[x, y]
            lum = 0.299 * r2 + 0.587 * g2 + 0.114 * b2
            warm = (r2 + g2) / 2 - b2
            if lum >= lum_min and warm >= warm_min:
                alpha = max(0, min(255, int((lum - lum_offset) * alpha_mul)))
                # tiny warm boost
                nr = min(255, int(r2 * 1.05))
                ng = min(255, int(g2 * 1.02))
                px[x, y] = (nr, ng, b2, alpha)
            else:
                px[x, y] = (0, 0, 0, 0)
    bbox = rgba.getbbox()
    if bbox:
        rgba = rgba.crop(bbox)
    return rgba.filter(ImageFilter.SMOOTH)


# 1) Icon mark only — tight crop excludes the "ARANTXA" wordmark
mark = extract((0.18, 0.18, 0.92, 0.62))
mark.save(os.path.join(OUT_DIR, "logo-mark.png"), "PNG", optimize=True)
print("logo-mark.png", mark.size)

# 2) logo.png is the icon mark — pair it with Cinzel typography for the wordmark
mark.save(os.path.join(OUT_DIR, "logo.png"), "PNG", optimize=True)
print("logo.png", mark.size)

# 3) Dark-plate version with just the icon on a black square (favicon/og-image)
fw, fh = mark.size
pad = int(max(fw, fh) * 0.14)
side = max(fw, fh) + pad * 2
plate = Image.new("RGB", (side, side), (13, 13, 13))
off_x = (side - fw) // 2
off_y = (side - fh) // 2
plate.paste(mark, (off_x, off_y), mark)
plate.save(os.path.join(OUT_DIR, "logo-dark-plate.png"), "PNG", optimize=True)
print("logo-dark-plate.png", plate.size)
