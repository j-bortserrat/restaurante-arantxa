"""Generate a clean, branded PDF of Arantxa's menu.

Pulls Cinzel and Playfair Display TTFs from Google Fonts at runtime so the PDF
matches the website typography. Output: assets/carta-arantxa.pdf
"""
import os
import urllib.request
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader

# ---------- Paths ----------
ROOT = "/Users/javierbortserrat/Projects/arantxa"
OUT_PDF_ES = os.path.join(ROOT, "assets", "carta-arantxa.pdf")
OUT_PDF_EN = os.path.join(ROOT, "assets", "carta-arantxa-en.pdf")
LOGO_DARK = os.path.join(ROOT, "assets", "img", "logo-dark-plate.png")
LOGO_PNG = os.path.join(ROOT, "assets", "img", "logo.png")

# ---------- Brand palette ----------
NAVY = HexColor("#0d0d0d")
GOLD = HexColor("#a8842f")
GOLD_BRIGHT = HexColor("#d4a857")
CREAM = HexColor("#faf5ea")
CREAM_PAGE = HexColor("#f5ede0")
INK = HexColor("#211c14")
MUTED = HexColor("#7a7268")
LINE = HexColor("#d8c89a")

# ---------- Fonts ----------
FONT_URLS = {
    "Cinzel":          "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf",
    "Cinzel-Bold":     "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf",
    "Playfair":        "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf",
    "Playfair-Italic": "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay-Italic%5Bwght%5D.ttf",
}
FONT_DIR = "/tmp/arantxa-fonts"
os.makedirs(FONT_DIR, exist_ok=True)


def ensure_font(name, url):
    path = os.path.join(FONT_DIR, name + ".ttf")
    if not os.path.exists(path):
        print(f"  downloading {name}…")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as r, open(path, "wb") as f:
            f.write(r.read())
    pdfmetrics.registerFont(TTFont(name, path))


print("Loading fonts…")
for name, url in FONT_URLS.items():
    ensure_font(name, url)


# ---------- Translations (ES → EN) for section/intro/labels ----------
# Dish names + descriptions stay in Spanish (cultural authenticity).
TRANS = {
    # Section names
    "Entrantes para compartir": "Starters to share",
    "Nuestras ensaladas de tomate rosa del Perelló": "Pink tomato salads from Perelló",
    "Nuestras tostas": "Our tostas (sourdough toasts)",
    "Del mar a la mesa": "From the sea",
    "Carnes": "Meats",
    "Especialidad semanal": "Weekly special",
    "Menú degustación": "Tasting menu",
    "Postres": "Desserts",
    "Bebidas · Refrescos": "Drinks · Soft drinks",
    "Cervezas": "Beers",
    "Cafés e infusiones": "Coffees & teas",
    "Bodega · Tintos": "Cellar · Reds",
    "Bodega · Blancos, rosados y cavas": "Cellar · Whites, rosés & cavas",
    "Vinos por copa": "Wines by the glass",
    "Licores y copas": "Liqueurs & cocktails",
    "Combinados premium": "Premium combinations",

    # Intros
    "El tomate más dulce del Mediterráneo, en su mejor versión.":
        "The sweetest tomato of the Mediterranean, at its best.",
    "Sobre pan de masa madre, tostado al momento.":
        "On sourdough bread, toasted to order.",
    "Pescado fresco y mariscos seleccionados a diario.":
        "Fresh fish and seafood selected daily.",
    "A la brasa, en su punto, producto seleccionado.":
        "Grilled to perfection, selected produce.",
    "Siete pases para descubrirnos. Mínimo 2 personas. No incluye bebida ni café.":
        "Seven courses to get to know us. Minimum 2 people. Drinks and coffee not included.",
    "Hechos en casa cada día.": "Made in-house every day.",
    "Selección de denominaciones de origen españolas.":
        "Selection of Spanish denominations of origin.",

    # Highlight label
    "POR PERSONA": "PER PERSON",

    # Cover strings
    "R E S T A U R A N T E": "R E S T A U R A N T",
    "ARANTXA": "ARANTXA",
    "Cocina con alma · València": "Cooking with soul · Valencia",
    "C A R T A": "M E N U",

    # Allergen note
    "INFORMACIÓN SOBRE ALÉRGENOS": "ALLERGEN INFORMATION",
    "Disponemos de información sobre alérgenos. Consulte a nuestro personal.":
        "Allergen information is available. Please ask our staff.",

    # Hours table
    "Domingo": "Sunday", "Lunes": "Monday", "Martes": "Tuesday",
    "Miércoles": "Wednesday", "Jueves": "Thursday", "Viernes": "Friday",
    "Sábado": "Saturday", "Cerrado": "Closed",
    "HORARIO": "OPENING HOURS",

    # Top band
    "VALÈNCIA · CARTA": "VALENCIA · MENU",
    "Pág. {n}": "Page {n}",

    # ---------- Dish names ----------
    "Patatas bravas estilo Arantxa": "Bravas potatoes, Arantxa style",
    "Gambitas al ajillo": "Garlic prawns",
    "Calamarcitos a la andaluza": "Andalusian-style baby squid",
    "Mi cuit de foie casero": "House mi-cuit foie",
    "Alcachofas a baja temperatura": "Slow-cooked artichokes",
    "Tabla de quesos variados": "Selection of cheeses",
    "Tabla de jamón ibérico": "Iberian ham platter",
    "Tomate rosa con burrata, pesto y rúcula": "Pink tomato with burrata, pesto & rocket",
    "Tomate rosa con ventresca y aguacate": "Pink tomato with tuna belly & avocado",
    "Tosta de sardina ahumada": "Smoked sardine tosta",
    "Tosta de jamón ibérico con foie fresco": "Iberian ham tosta with fresh foie",
    "Tartar de atún": "Tuna tartare",
    "Tartar de salmón": "Salmon tartare",
    "Carpaccio de salmón ahumado": "Smoked salmon carpaccio",
    "Entraña a la plancha con chimichurri": "Grilled skirt steak with chimichurri",
    "Carrilleras de cerdo en salsa": "Pork cheeks in sauce",
    "Carpaccio de lomo de vaca": "Beef carpaccio",
    "Chuletón de cerdo gallego madurado 21 días": "Galician pork chop, 21-day aged",
    "Steak tartar de solomillo de ternera": "Beef tenderloin steak tartare",
    "Tataky de lomo bajo": "Striploin tataki",
    "Cachopo asturiano": "Asturian cachopo",
    "Cocido madrileño · todos los viernes": "Traditional Madrid stew · every Friday",
    "Lemon pie": "Lemon pie",
    "Tarta de queso": "Cheesecake",
    "Tarta de coco con dulce de leche": "Coconut & dulce de leche tart",
    "Copa de helado de vainilla": "Vanilla ice-cream sundae",
    "Sorbete de limón al cava": "Lemon & cava sorbet",
    "Helado de limón": "Lemon ice cream",
    "Helado de turrón": "Nougat ice cream",
    "Helado de vainilla": "Vanilla ice cream",

    # Tasting menu courses
    "1 · Pan con tomate y alioli": "1 · Bread with tomato & alioli",
    "2 · Patatas bravas estilo Arantxa": "2 · Bravas potatoes Arantxa style",
    "3 · Tomate rosa del Perelló con ventresca y aguacate": "3 · Pink tomato from Perelló with tuna belly & avocado",
    "4 · Calamarcitos a la andaluza": "4 · Andalusian-style baby squid",
    "5 · Entraña con chimichurri y papitas baby": "5 · Skirt steak with chimichurri & baby potatoes",
    "6 · Postre del día": "6 · Dessert of the day",
    "7 · Chupito de la casa": "7 · House liqueur shot",

    # Drinks
    "Coca-Cola Zero": "Coca-Cola Zero",
    "Coca-Cola normal": "Coca-Cola Classic",
    "Fanta de naranja": "Orange Fanta",
    "Fanta de limón": "Lemon Fanta",
    "Bitter Kas sin alcohol": "Bitter Kas (non-alcoholic)",
    "Aquarius": "Aquarius",
    "Tónica · Tónica zero": "Tonic · Tonic zero",
    "Agua Lanjarón · Agua con gas": "Still water · Sparkling water",
    "Zumo de piña": "Pineapple juice",
    "Zumo de melocotón": "Peach juice",
    "Águila 1900 Doble · barril": "Águila 1900 Doble · on tap",
    "Amstel · Heineken · La rubia · Radler": "Amstel · Heineken · La rubia · Radler",
    "Amstel Oro · Amstel Oro 0,0": "Amstel Oro · Amstel Oro 0.0",
    "Café solo": "Espresso",
    "Café cortado": "Cortado",
    "Café con leche": "Café au lait",
    "Carajillo": "Carajillo (spiked coffee)",
    "Cremaet": "Cremaet",
    "Infusiones": "Herbal teas",
    "Té": "Tea",
    "Vermut blanco / tinto": "Vermouth white / red",
    "Licor de hierbas": "Herb liqueur",
    "Crema de orujo": "Orujo cream",
    "Crema de arroz": "Rice cream",
    "Limoncello": "Limoncello",
    "Aperol Spritz": "Aperol Spritz",
    "Chupitos (varios)": "Shots (various)",

    # Wines (DO names kept as proper nouns)
    "Excellens Cuvée Crianza · D.O. Rioja": "Excellens Cuvée Crianza · D.O. Rioja",
    "Baigorri Crianza · D.O. Rioja": "Baigorri Crianza · D.O. Rioja",
    "Valdehermoso Crianza · D.O. Ribera del Duero": "Valdehermoso Crianza · D.O. Ribera del Duero",
    "Carmelo Rodero 9 meses · D.O. Ribera del Duero": "Carmelo Rodero 9 months · D.O. Ribera del Duero",
    "Lía · D.O. Ribera del Duero": "Lía · D.O. Ribera del Duero",
    "Tarima Hill · D.O. Alicante": "Tarima Hill · D.O. Alicante",
    "Bobal en Calma · D.O. Utiel-Requena": "Bobal en Calma · D.O. Utiel-Requena",
    "Venta del Puerto Nº12 · D.O. Valencia": "Venta del Puerto No.12 · D.O. Valencia",
    "Excellens Verdejo · D.O. Rueda": "Excellens Verdejo · D.O. Rueda",
    "Javier Sanz Verdejo · D.O. Rueda": "Javier Sanz Verdejo · D.O. Rueda",
    "Triay · D.O. Monterrei": "Triay · D.O. Monterrei",
    "N 12 · D.O. Monterrei": "N 12 · D.O. Monterrei",
    "Bocabadat · D.O. Alicante": "Bocabadat · D.O. Alicante",
    "Rosado de la casa": "House rosé",
    "Dominio de la Vega Vintage · Cava": "Dominio de la Vega Vintage · Cava",
    "D.O. Rioja": "D.O. Rioja",
    "D.O. Ribera del Duero": "D.O. Ribera del Duero",
    "D.O. Rueda Verdejo": "D.O. Rueda Verdejo",
    "Vino valenciano": "Valencian wine",

    # Combinados (premium spirits)
    "Ginebra · Nordés": "Gin · Nordés",
    "Ginebra · Beefeater": "Gin · Beefeater",
    "Ginebra · Martin Miller's": "Gin · Martin Miller's",
    "Ginebra · Puerto de Indias": "Gin · Puerto de Indias",
    "Ron · Havana 7": "Rum · Havana 7",
    "Ron · Brugal": "Rum · Brugal",
    "Ron · Barceló": "Rum · Barceló",
    "Whisky · Johnnie Walker": "Whisky · Johnnie Walker",
    "Whisky · Cutty Sark": "Whisky · Cutty Sark",
    "Whisky · Ballantine's": "Whisky · Ballantine's",

    # Descriptions
    "Crujientes por fuera, melosas por dentro, con nuestra salsa brava de la casa.":
        "Crispy outside, soft inside, with our signature brava sauce.",
    "En cazuela de barro, con guindilla y aceite de oliva virgen extra.":
        "In an earthen pot, with chilli and extra virgin olive oil.",
    "Calamares pequeños rebozados con fritura ligera. Con limón.":
        "Small squid in a light batter, served with lemon.",
    "Elaboración propia con pan tostado y compota de fruta.":
        "House-made, with toasted bread and fruit compote.",
    "Con jamón ibérico y huevos de codorniz.":
        "With Iberian ham and quail eggs.",
    "Selección del maestro quesero, con dulce y frutos secos.":
        "Cheesemonger's selection, with quince paste and nuts.",
    "Cortado a cuchillo, con pan de cristal.":
        "Hand-carved, with cristal bread.",
    "Burrata fresca, pesto casero y rúcula sobre tomate del Perelló.":
        "Fresh burrata, house-made pesto and rocket on Perelló tomato.",
    "Ventresca de bonito en AOVE y aguacate maduro.":
        "Bonito belly in EVOO and ripe avocado.",
    "Con tomate y ralladura de lima.":
        "With tomato and lime zest.",
    "Con foie fresco y mermelada de cebolla.":
        "With fresh foie and onion marmalade.",
    "Aguacate, trufa, mostaza, yema pasteurizada, soja y sésamo.":
        "Avocado, truffle, mustard, pasteurised yolk, soy and sesame.",
    "Con mahonesa de soja, alcaparras y cebolla tierna.":
        "With soy mayo, capers and tender onion.",
    "Con papitas baby y chimichurri casero.":
        "With baby potatoes and house chimichurri.",
    "Estofadas durante horas, melosas, con su jugo.":
        "Slow-braised, tender, in their own jus.",
    "Champiñones laminados, parmesano, trufa blanca y rúcula.":
        "Sliced mushrooms, parmesan, white truffle and rocket.",
    "300 g, a la brasa.":
        "300 g, grilled.",
    "200 g, preparación clásica al momento.":
        "200 g, classic preparation, prepared to order.",
    "Con queso raclette fundido y salsa de trufa blanca y setas.":
        "With melted raclette and white truffle & mushroom sauce.",
    "Con patatas fritas y pimientos del piquillo.":
        "With chips and piquillo peppers.",
    "Tres vuelcos clásicos. Incluye una bebida y postre o café.":
        "Three classic servings. Includes one drink and dessert or coffee.",
    "Tarta de limón con merengue tostado.":
        "Lemon pie with toasted meringue.",
    "Cremosa, al horno, sin base. Estilo La Viña.":
        "Creamy, baked, crustless. La Viña style.",
    "Capas de coco rallado y dulce de leche.":
        "Layers of grated coconut and dulce de leche.",
    "Con nata, nueces, Frangelico y sirope de chocolate.":
        "With cream, walnuts, Frangelico and chocolate syrup.",
    "Refresca el final del menú.":
        "Refreshes the end of the meal.",
    "Tempranillo, 14 meses en barrica.":
        "Tempranillo, 14 months in oak.",
    "Tinta del País, 18 meses en barrica.":
        "Tinta del País, 18 months in oak.",
    "Tinta fina, 9 meses.":
        "Tinta fina, 9 months.",
    "Tinta fina.":
        "Tinta fina.",
    "Monastrell, 14 meses.":
        "Monastrell, 14 months.",
    "Bobal, 9 meses.":
        "Bobal, 9 months.",
    "Coupage, 12 meses.":
        "Blend, 12 months.",
    "Verdejo.":
        "Verdejo.",
    "Godello, Treixadura.":
        "Godello, Treixadura.",
    "Macabeo.":
        "Macabeo.",
    "Brut Nature, Macabeo.":
        "Brut Nature, Macabeo.",
    "Tercio.":
        "33 cl bottle.",

    # Carta.html specific descriptions (slightly different wording from PDF originals)
    "De elaboración propia, con pan tostado y compota de fruta.":
        "House-made, with toasted bread and fruit compote.",
    "Con jamón ibérico y huevos de codorniz. Producto fresco de la huerta.":
        "With Iberian ham and quail eggs. Fresh produce from the garden.",
    "Selección del maestro quesero, con dulce de membrillo y frutos secos.":
        "Cheesemonger's selection, with quince paste and nuts.",
    "Cortado a cuchillo, con pan de cristal y tomate.":
        "Hand-carved, with cristal bread and tomato.",
    "Burrata fresca, pesto casero y rúcula sobre tomate del Perelló.":
        "Fresh burrata, house pesto and rocket over Perelló tomato.",
    "Ventresca de bonito en aceite de oliva virgen extra y aguacate maduro.":
        "Bonito belly in extra virgin olive oil and ripe avocado.",
    "Con tomate y ralladura de lima.":
        "With tomato and lime zest.",
    "Foie fresco a la plancha y mermelada de cebolla caramelizada.":
        "Pan-seared fresh foie and caramelised onion jam.",
    "Aguacate, trufa, mostaza, yema pasteurizada, soja y sésamo.":
        "Avocado, truffle, mustard, pasteurised yolk, soy and sesame.",
    "Con mahonesa de soja, alcaparras y cebolla tierna.":
        "With soy mayo, capers and tender onion.",
    "Entraña argentina, chimichurri casero y papitas baby crujientes.":
        "Argentine skirt steak, house chimichurri and crispy baby potatoes.",
    "Estofadas durante horas, melosas, en su propia salsa.":
        "Slow-braised for hours, tender, in their own sauce.",
    "Champiñones laminados, parmesano, trufa blanca y rúcula.":
        "Sliced mushrooms, parmesan, white truffle and rocket.",
    "300 g, a la brasa, en su punto.":
        "300 g, grilled to perfection.",
    "200 g, preparación clásica al momento.":
        "200 g, classic preparation, prepared to order.",
    "Con queso raclette fundido y salsa de trufa blanca y setas.":
        "With melted raclette and white truffle & mushroom sauce.",
    "Relleno de jamón y queso, con patatas fritas y pimientos del piquillo.":
        "Filled with ham and cheese, with chips and piquillo peppers.",
    "Tarta de limón con merengue tostado.":
        "Lemon tart with toasted meringue.",
    "Capas de coco rallado y dulce de leche.":
        "Layers of grated coconut and dulce de leche.",
    "Con nata, nueces, Frangelico y sirope de chocolate.":
        "With cream, walnuts, Frangelico and chocolate syrup.",
    "Refresca y rebaja el final del menú.":
        "Refreshes the end of the meal.",
    "Cremosa, al horno, sin base. Estilo La Viña.":
        "Creamy, baked, crustless. La Viña style.",

    # Wine names + descriptions used in carta.html (some differ from PDF)
    "Excellens Cuvée Crianza": "Excellens Cuvée Crianza",
    "Baigorri Crianza": "Baigorri Crianza",
    "Valdehermoso Crianza": "Valdehermoso Crianza",
    "Carmelo Rodero 9 meses": "Carmelo Rodero 9 months",
    "Lía": "Lía",
    "Tarima Hill": "Tarima Hill",
    "Bobal en Calma": "Bobal en Calma",
    "Venta del Puerto Nº12": "Venta del Puerto No.12",
    "Excellens Verdejo": "Excellens Verdejo",
    "Javier Sanz Verdejo": "Javier Sanz Verdejo",
    "Triay": "Triay",
    "N 12": "N 12",
    "Bocabadat": "Bocabadat",
    "Dominio de la Vega Vintage": "Dominio de la Vega Vintage",
    "D.O. Rioja · Tempranillo · 14 meses barrica.":
        "D.O. Rioja · Tempranillo · 14 months in oak.",
    "D.O. Ribera del Duero · Tinta del País · 18 meses.":
        "D.O. Ribera del Duero · Tinta del País · 18 months.",
    "D.O. Ribera del Duero · Tinta fina · 9 meses.":
        "D.O. Ribera del Duero · Tinta fina · 9 months.",
    "D.O. Ribera del Duero · Tinta fina.":
        "D.O. Ribera del Duero · Tinta fina.",
    "D.O. Alicante · Monastrell · 14 meses barrica.":
        "D.O. Alicante · Monastrell · 14 months in oak.",
    "D.O. Utiel-Requena · Bobal · 9 meses barrica.":
        "D.O. Utiel-Requena · Bobal · 9 months in oak.",
    "D.O. Valencia · Tempranillo, Cabernet, Merlot, Syrah · 12 meses.":
        "D.O. Valencia · Tempranillo, Cabernet, Merlot, Syrah · 12 months.",
    "D.O. Rueda · Verdejo.": "D.O. Rueda · Verdejo.",
    "D.O. Monterrei · Godello, Treixadura.": "D.O. Monterrei · Godello, Treixadura.",
    "D.O. Monterrei.": "D.O. Monterrei.",
    "D.O. Alicante · Macabeo.": "D.O. Alicante · Macabeo.",
    "Cava · Brut Nature · Macabeo.": "Cava · Brut Nature · Macabeo.",
    "D.O. Rioja": "D.O. Rioja",
    "D.O. Ribera del Duero": "D.O. Ribera del Duero",
    "D.O. Rueda Verdejo": "D.O. Rueda Verdejo",

    # Drinks variants used in carta.html (different from PDF)
    "Coca-Cola Zero / normal": "Coca-Cola Zero / Classic",
    "Fanta de naranja / limón": "Orange / Lemon Fanta",
    "Tónica · Tónica zero": "Tonic · Tonic zero",
    "Agua Lanjarón · Agua con gas": "Still water · Sparkling water",
    "Zumo de piña / melocotón": "Pineapple / peach juice",
    "Águila 1900 doble · barril": "Águila 1900 doble · on tap",
    "Tercio.": "33 cl bottle.",
    "Café solo": "Espresso",
    "Café cortado": "Cortado",
    "Café con leche": "Café au lait",
    "Carajillo": "Carajillo (spiked coffee)",
    "Cremaet": "Cremaet",
    "Infusiones": "Herbal teas",
    "Té": "Tea",
    "Aperol Spritz": "Aperol Spritz",
    "Chupitos (varios)": "Shots (various)",
    "Aquarius": "Aquarius",
    "Bitter Kas sin alcohol": "Bitter Kas (non-alcoholic)",
    "Limoncello": "Limoncello",
    "Crema de orujo": "Orujo cream",
    "Crema de arroz": "Rice cream",
    "Licor de hierbas": "Herb liqueur",
    "Vermut blanco / tinto": "Vermouth white / red",

    # Spirits
    "Nordés": "Nordés",
    "Beefeater": "Beefeater",
    "Martin Miller's": "Martin Miller's",
    "Puerto de Indias": "Puerto de Indias",
    "Havana 7": "Havana 7",
    "Brugal": "Brugal",
    "Barceló": "Barceló",
    "Johnnie Walker": "Johnnie Walker",
    "Cutty Sark": "Cutty Sark",
    "Ballantine's": "Ballantine's",

    # Menu degustación numbered items (kept Spanish dish names as authentic)
    "1 · Pan con tomate y alioli": "1 · Bread with tomato & alioli",
    "2 · Patatas bravas estilo Arantxa": "2 · Bravas potatoes, Arantxa style",
    "3 · Tomate rosa del Perelló con ventresca y aguacate": "3 · Pink tomato from Perelló with tuna belly & avocado",
    "4 · Calamarcitos a la andaluza": "4 · Andalusian-style baby squid",
    "5 · Entraña con chimichurri y papitas baby": "5 · Skirt steak with chimichurri & baby potatoes",
    "6 · Postre del día": "6 · Dessert of the day",
    "7 · Chupito de la casa": "7 · House liqueur shot",

    # Various dish names + ice creams
    "Sorbete de limón al cava": "Lemon & cava sorbet",
    "Helado de limón": "Lemon ice cream",
    "Helado de turrón": "Nougat ice cream",
    "Tabla de jamón ibérico": "Iberian ham platter",
    "Carpaccio de salmón ahumado": "Smoked salmon carpaccio",
    "Tartar de atún": "Tuna tartare",
    "Tartar de salmón": "Salmon tartare",
    "Entraña a la plancha con chimichurri": "Grilled skirt steak with chimichurri",
    "Chuletón de cerdo gallego madurado 21 días": "Galician pork chop, 21-day aged",
    "Tomate rosa con burrata, pesto y rúcula": "Pink tomato with burrata, pesto & rocket",
    "Tosta de jamón ibérico con foie fresco": "Iberian ham tosta with fresh foie",
    "Rosado de la casa": "House rosé",
    "Vino valenciano": "Valencian wine",
}

# Cover lead text — translate as a block since it's multi-line
COVER_LEAD = {
    "es": [
        "Producto fresco, recetas de toda la vida.",
        "Tapas, ensaladas de tomate rosa del Perelló, mariscos,",
        "carnes a la brasa y, los viernes, cocido madrileño completo.",
    ],
    "en": [
        "Fresh ingredients, timeless recipes.",
        "Tapas, pink tomato salads from Perelló, seafood,",
        "grilled meats and, on Fridays, Traditional Madrid stew.",
    ],
}


def t(s, lang):
    """Translate ES string to EN if lang == 'en' and a translation exists."""
    if lang != "en":
        return s
    return TRANS.get(s, s)


# ---------- Menu data (OCR + cross-checked with photos) ----------
# Sections rendered in this order. `page_break_before: True` forces a new page.
MENU = [
    # ============== PAGE 2 — COMIDA ==============
    {
        "name": "Entrantes para compartir",
        "items": [
            ("Patatas bravas estilo Arantxa", "Crujientes por fuera, melosas por dentro, con nuestra salsa brava de la casa.", "8 €"),
            ("Gambitas al ajillo", "En cazuela de barro, con guindilla y aceite de oliva virgen extra.", "14 €"),
            ("Calamarcitos a la andaluza", "Calamares pequeños rebozados con fritura ligera. Con limón.", "15 €"),
            ("Micuit de foie casero", "Elaboración propia con pan tostado y compota de fruta.", "17 €"),
            ("Alcachofas a baja temperatura", "Con jamón ibérico y huevos de codorniz.", "16 €"),
            ("Tabla de quesos variados", "Selección del maestro quesero, con dulce y frutos secos.", "16 €"),
            ("Tabla de jamón ibérico", "Cortado a cuchillo, con pan de cristal.", "22 €"),
        ],
    },
    {
        "name": "Nuestras ensaladas de tomate rosa del Perelló",
        "intro": "El tomate más dulce del Mediterráneo, en su mejor versión.",
        "items": [
            ("Tomate rosa con burrata, pesto y rúcula", "Burrata fresca, pesto casero y rúcula sobre tomate del Perelló.", "16 €"),
            ("Tomate rosa con ventresca y aguacate", "Ventresca de bonito en AOVE y aguacate maduro.", "16 €"),
        ],
    },
    {
        "name": "Nuestras tostas",
        "intro": "Sobre pan de masa madre, tostado al momento.",
        "items": [
            ("Tosta de sardina ahumada", "Con tomate y ralladura de lima.", "7 €"),
            ("Tosta de jamón ibérico con foie fresco", "Con foie fresco y mermelada de cebolla.", "9 €"),
        ],
    },
    {
        "name": "Del mar a la mesa",
        "intro": "Pescado fresco y mariscos seleccionados a diario.",
        "items": [
            ("Tartar de atún", "Aguacate, trufa, mostaza, yema pasteurizada, soja y sésamo.", "18 €"),
            ("Tartar de salmón", "Aguacate, trufa, mostaza, yema pasteurizada, soja y sésamo.", "18 €"),
            ("Carpaccio de salmón ahumado", "Con mahonesa de soja, alcaparras y cebolla tierna.", "18 €"),
        ],
    },
    {
        "name": "Carnes",
        "intro": "A la brasa, en su punto, producto seleccionado.",
        "items": [
            ("Entraña a la plancha con chimichurri", "Con papitas baby y chimichurri casero.", "18 €"),
            ("Carrilleras de cerdo en salsa", "Estofadas durante horas, melosas, con su jugo.", "20 €"),
            ("Carpaccio de lomo de vaca", "Champiñones laminados, parmesano, trufa blanca y rúcula.", "16 €"),
            ("Chuletón de cerdo gallego madurado 21 días", "300 g, a la brasa.", "18 €"),
            ("Steak tartar de solomillo de ternera", "200 g, preparación clásica al momento.", "20 €"),
            ("Tataky de lomo bajo", "Con queso raclette fundido y salsa de trufa blanca y setas.", "25 €"),
            ("Cachopo asturiano", "Con patatas fritas y pimientos del piquillo.", "26 €"),
        ],
    },
    {
        "name": "Especialidad semanal",
        "items": [
            ("Cocido madrileño · todos los viernes", "Tres vuelcos clásicos. Incluye una bebida y postre o café.", "25 € / pax"),
        ],
    },
    {
        "name": "Menú degustación",
        "intro": "Siete pases para descubrirnos. Mínimo 2 personas. No incluye bebida ni café.",
        "highlight_price": "27,90 €",
        "highlight_label": "POR PERSONA",
        "gap_before": 22,
        "items": [
            ("1 · Pan con tomate y alioli", "", ""),
            ("2 · Patatas bravas estilo Arantxa", "", ""),
            ("3 · Tomate rosa del Perelló con ventresca y aguacate", "", ""),
            ("4 · Calamarcitos a la andaluza", "", ""),
            ("5 · Entraña con chimichurri y papitas baby", "", ""),
            ("6 · Postre del día", "", ""),
            ("7 · Chupito de la casa", "", ""),
        ],
    },

    # ============== PAGE 3 — POSTRES ==============
    {
        "name": "Postres",
        "intro": "Hechos en casa cada día.",
        "page_break_before": True,
        "items": [
            ("Lemon pie", "Tarta de limón con merengue tostado.", "6 €"),
            ("Tarta de queso", "Cremosa, al horno, sin base. Estilo La Viña.", "6 €"),
            ("Tarta de coco con dulce de leche", "Capas de coco rallado y dulce de leche.", "6 €"),
            ("Copa de helado de vainilla", "Con nata, nueces, Frangelico y sirope de chocolate.", "6 €"),
            ("Sorbete de limón al cava", "Refresca el final del menú.", "5 €"),
            ("Helado de limón", "", "3,50 €"),
            ("Helado de turrón", "", "3,50 €"),
            ("Helado de vainilla", "", "3,50 €"),
        ],
    },

    # ============== PAGE 5 — BEBIDAS + BODEGA ==============
    {
        "name": "Bebidas · Refrescos",
        "page_break_before": True,
        "items": [
            ("Coca-Cola Zero", "", "2,80 €"),
            ("Coca-Cola normal", "", "2,80 €"),
            ("Fanta de naranja", "", "2,80 €"),
            ("Fanta de limón", "", "2,80 €"),
            ("Bitter Kas sin alcohol", "", "2,80 €"),
            ("Aquarius", "", "2,80 €"),
            ("Tónica · Tónica zero", "", "2,80 €"),
            ("Agua Lanjarón · Agua con gas", "", "2,80 €"),
            ("Zumo de piña", "", "2,20 €"),
            ("Zumo de melocotón", "", "2,20 €"),
        ],
    },
    {
        "name": "Cervezas",
        "items": [
            ("Águila 1900 Doble · barril", "", "3,00 €"),
            ("Amstel · Heineken · La rubia · Radler", "Tercio.", "3,00 €"),
            ("Amstel Oro · Amstel Oro 0,0", "Tercio.", "3,20 €"),
        ],
    },
    {
        "name": "Cafés e infusiones",
        "items": [
            ("Café solo", "", "1,30 €"),
            ("Café cortado", "", "1,50 €"),
            ("Café con leche", "", "1,80 €"),
            ("Carajillo", "", "2,50 €"),
            ("Cremaet", "", "2,80 €"),
            ("Infusiones", "", "2,00 €"),
            ("Té", "", "3,50 €"),
        ],
    },
    {
        "name": "Bodega · Tintos",
        "intro": "Selección de denominaciones de origen españolas.",
        "items": [
            ("Excellens Cuvée Crianza · D.O. Rioja", "Tempranillo, 14 meses en barrica.", "20 €"),
            ("Baigorri Crianza · D.O. Rioja", "Tempranillo, 14 meses en barrica.", "22 €"),
            ("Valdehermoso Crianza · D.O. Ribera del Duero", "Tinta del País, 18 meses en barrica.", "23 €"),
            ("Carmelo Rodero 9 meses · D.O. Ribera del Duero", "Tinta fina, 9 meses.", "24 €"),
            ("Lía · D.O. Ribera del Duero", "Tinta fina.", "19 €"),
            ("Tarima Hill · D.O. Alicante", "Monastrell, 14 meses.", "21 €"),
            ("Bobal en Calma · D.O. Utiel-Requena", "Bobal, 9 meses.", "19 €"),
            ("Venta del Puerto Nº12 · D.O. Valencia", "Coupage, 12 meses.", "21 €"),
        ],
    },
    {
        "name": "Bodega · Blancos, rosados y cavas",
        "items": [
            ("Excellens Verdejo · D.O. Rueda", "Verdejo.", "18 €"),
            ("Javier Sanz Verdejo · D.O. Rueda", "Verdejo.", "21 €"),
            ("Triay · D.O. Monterrei", "Godello, Treixadura.", "19 €"),
            ("N 12 · D.O. Monterrei", "", "20 €"),
            ("Bocabadat · D.O. Alicante", "Macabeo.", "17 €"),
            ("Rosado de la casa", "", "24 €"),
            ("Dominio de la Vega Vintage · Cava", "Brut Nature, Macabeo.", "19 €"),
        ],
    },
    {
        "name": "Vinos por copa",
        "items": [
            ("D.O. Rioja", "", "3,50 €"),
            ("D.O. Ribera del Duero", "", "4,00 €"),
            ("D.O. Rueda Verdejo", "", "3,50 €"),
            ("Vino valenciano", "", "3,50 €"),
        ],
    },
    {
        "name": "Licores y copas",
        "items": [
            ("Vermut blanco / tinto", "", "3,80 €"),
            ("Licor de hierbas", "", "4,00 €"),
            ("Crema de orujo", "", "4,00 €"),
            ("Crema de arroz", "", "4,00 €"),
            ("Limoncello", "", "4,00 €"),
            ("Aperol Spritz", "", "6,00 €"),
            ("Chupitos (varios)", "", "2,50 €"),
        ],
    },
    {
        "name": "Combinados premium",
        "items": [
            ("Ginebra · Nordés", "", "9,00 €"),
            ("Ginebra · Beefeater", "", "7,00 €"),
            ("Ginebra · Martin Miller's", "", "9,00 €"),
            ("Ginebra · Puerto de Indias", "", "7,00 €"),
            ("Ron · Havana 7", "", "8,00 €"),
            ("Ron · Brugal", "", "7,00 €"),
            ("Ron · Barceló", "", "8,00 €"),
            ("Whisky · Johnnie Walker", "", "7,00 €"),
            ("Whisky · Cutty Sark", "", "7,00 €"),
            ("Whisky · Ballantine's", "", "7,00 €"),
        ],
    },
]


# ---------- Layout helpers ----------
PAGE_W, PAGE_H = A4
MARGIN_X = 56
MARGIN_TOP = 72
MARGIN_BOTTOM = 72


def draw_background(c):
    c.setFillColor(CREAM_PAGE)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def draw_top_band(c, lang="es"):
    # Subtle dark band at top with brand mark
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 26, PAGE_W, 26, fill=1, stroke=0)
    c.setFont("Cinzel-Bold", 9)
    c.setFillColor(GOLD_BRIGHT)
    c.drawString(MARGIN_X, PAGE_H - 18, "RESTAURANTE ARANTXA")
    c.setFillColor(HexColor("#a89880"))
    c.setFont("Cinzel", 8)
    c.drawRightString(PAGE_W - MARGIN_X, PAGE_H - 18, t("VALÈNCIA · CARTA", lang))


def draw_footer(c, page_num, lang="es"):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.4)
    c.line(MARGIN_X, MARGIN_BOTTOM - 18, PAGE_W - MARGIN_X, MARGIN_BOTTOM - 18)
    c.setFont("Cinzel", 7.5)
    c.setFillColor(MUTED)
    c.drawString(MARGIN_X, MARGIN_BOTTOM - 32, "JOAQUÍN COSTA 50 · 46005 VALÈNCIA · +34 663 209 793")
    page_label = "Page" if lang == "en" else "Pág."
    c.drawRightString(PAGE_W - MARGIN_X, MARGIN_BOTTOM - 32, f"{page_label} {page_num}")


def cover_page(c, lang="es"):
    """Classic menu cover: cream paper, gold inset borders, centered dark plate logo
    badge, layered typography. No top/bottom bands — the page feels like a menu, not
    a magazine cover."""
    draw_background(c)

    cx = PAGE_W / 2  # horizontal centre

    # ---- Decorative double border (gold), insetted ----
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.4)
    c.rect(28, 28, PAGE_W - 56, PAGE_H - 56, fill=0, stroke=1)
    c.setLineWidth(0.4)
    c.rect(34, 34, PAGE_W - 68, PAGE_H - 68, fill=0, stroke=1)

    # ---- Tiny corner ornaments ----
    def corner(x, y, sign_x, sign_y):
        c.setStrokeColor(GOLD)
        c.setLineWidth(0.6)
        for i, length in [(0, 14), (4, 9)]:
            c.line(x + sign_x * i, y, x + sign_x * (i + length), y)
            c.line(x, y + sign_y * i, x, y + sign_y * (i + length))

    corner(46, PAGE_H - 46, 1, -1)            # top-left
    corner(PAGE_W - 46, PAGE_H - 46, -1, -1)  # top-right
    corner(46, 46, 1, 1)                       # bottom-left
    corner(PAGE_W - 46, 46, -1, 1)             # bottom-right

    # ---- Top eyebrow ----
    c.setFont("Cinzel", 10)
    c.setFillColor(GOLD_DEEP_PDF := HexColor("#a8842f"))
    c.drawCentredString(cx, PAGE_H - 110, t("R E S T A U R A N T E", lang))

    # ---- Brand name ----
    c.setFont("Cinzel-Bold", 46)
    c.setFillColor(NAVY)
    c.drawCentredString(cx, PAGE_H - 160, "ARANTXA")

    # ---- Subtle divider under brand ----
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.6)
    c.line(cx - 80, PAGE_H - 178, cx + 80, PAGE_H - 178)

    # ---- Tagline ----
    c.setFont("Playfair-Italic", 13)
    c.setFillColor(INK)
    c.drawCentredString(cx, PAGE_H - 200, t("Cocina con alma · València", lang))

    # ---- Logo badge (dark plate, square, centered) ----
    BADGE_SIZE = 150
    badge_y = PAGE_H - 200 - 40 - BADGE_SIZE  # below tagline
    badge_x = cx - BADGE_SIZE / 2

    # Soft drop shadow behind badge
    c.setFillColor(HexColor("#d4c8a8"))
    c.circle(cx + 2, badge_y + BADGE_SIZE / 2 - 2, BADGE_SIZE / 2 + 2, fill=1, stroke=0)
    # Dark plate (circle for elegance)
    c.setFillColor(NAVY)
    c.circle(cx, badge_y + BADGE_SIZE / 2, BADGE_SIZE / 2, fill=1, stroke=0)
    # Gold ring
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.8)
    c.circle(cx, badge_y + BADGE_SIZE / 2, BADGE_SIZE / 2, fill=0, stroke=1)
    c.setLineWidth(0.3)
    c.circle(cx, badge_y + BADGE_SIZE / 2, BADGE_SIZE / 2 - 6, fill=0, stroke=1)

    # Logo icon centered inside the badge (using transparent PNG)
    if os.path.exists(LOGO_PNG):
        img = ImageReader(LOGO_PNG)
        iw, ih = img.getSize()
        max_inner = BADGE_SIZE - 36
        scale = min(max_inner / iw, max_inner / ih)
        lw, lh = iw * scale, ih * scale
        c.drawImage(LOGO_PNG,
                    cx - lw / 2,
                    badge_y + BADGE_SIZE / 2 - lh / 2,
                    width=lw, height=lh, mask='auto')

    # ---- "CARTA" label below badge ----
    label_y = badge_y - 36
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.4)
    c.line(cx - 90, label_y + 10, cx - 22, label_y + 10)
    c.line(cx + 22, label_y + 10, cx + 90, label_y + 10)
    c.setFont("Cinzel-Bold", 14)
    c.setFillColor(GOLD_DEEP_PDF)
    c.drawCentredString(cx, label_y, t("C A R T A", lang))

    # ---- Lead paragraph ----
    c.setFont("Playfair", 10.5)
    c.setFillColor(INK)
    y = label_y - 30
    for line in COVER_LEAD[lang if lang in COVER_LEAD else "es"]:
        c.drawCentredString(cx, y, line)
        y -= 16

    # ---- Allergen note (in the lower half of the cover) ----
    note_y = 200
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.4)
    c.line(cx - 80, note_y + 20, cx + 80, note_y + 20)
    c.setFont("Cinzel-Bold", 9)
    c.setFillColor(GOLD_DEEP_PDF)
    c.drawCentredString(cx, note_y, t("INFORMACIÓN SOBRE ALÉRGENOS", lang))
    c.setFont("Playfair-Italic", 9.5)
    c.setFillColor(MUTED)
    if lang == "en":
        c.drawCentredString(cx, note_y - 16, "Allergen information is available.")
        c.drawCentredString(cx, note_y - 30, "Please ask our staff.")
    else:
        c.drawCentredString(cx, note_y - 16, "Disponemos de información sobre alérgenos.")
        c.drawCentredString(cx, note_y - 30, "Consulte a nuestro personal.")
    c.setLineWidth(0.4)
    c.line(cx - 80, note_y - 44, cx + 80, note_y - 44)

    # ---- Bottom decorative ornament + address (no bands; clean) ----
    foot_y = 88
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.5)
    c.line(cx - 100, foot_y + 32, cx - 14, foot_y + 32)
    c.line(cx + 14, foot_y + 32, cx + 100, foot_y + 32)
    c.setFont("Cinzel", 9)
    c.setFillColor(GOLD)
    c.drawCentredString(cx, foot_y + 28, "·")

    c.setFont("Cinzel-Bold", 9)
    c.setFillColor(NAVY)
    c.drawCentredString(cx, foot_y + 10, "JOAQUÍN COSTA 50 · 46005 VALÈNCIA")
    c.setFont("Playfair-Italic", 9)
    c.setFillColor(MUTED)
    c.drawCentredString(cx, foot_y - 6, "+34 663 209 793  ·  info@restaurantearantxa.com")

    c.showPage()


def wrap_text(c, text, font, size, max_width):
    """Crude word-wrap returning list of lines that fit max_width."""
    c.setFont(font, size)
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if c.stringWidth(test, font, size) <= max_width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_section_header(c, title, intro, y):
    c.setFont("Cinzel-Bold", 16)
    c.setFillColor(NAVY)
    c.drawString(MARGIN_X, y, title.upper())
    y -= 8
    # Gold underline
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.4)
    c.line(MARGIN_X, y, MARGIN_X + 50, y)
    y -= 14
    if intro:
        c.setFont("Playfair-Italic", 9.5)
        c.setFillColor(MUTED)
        for line in wrap_text(c, intro, "Playfair-Italic", 9.5, PAGE_W - 2 * MARGIN_X):
            c.drawString(MARGIN_X, y, line)
            y -= 12
        y -= 4
    return y


def draw_item(c, name, desc, price, y):
    """Draw one item: name in serif, desc italic small, price right with dotted leader."""
    avail_w = PAGE_W - 2 * MARGIN_X
    price_w = c.stringWidth(price, "Cinzel-Bold", 11) if price else 0
    name_x = MARGIN_X
    name_size = 11
    desc_size = 9
    leader_gap = 8

    # Name (truncate by wrapping if very long; here we trust short names)
    c.setFont("Playfair", name_size)
    c.setFillColor(INK)
    name_w = c.stringWidth(name, "Playfair", name_size)
    c.drawString(name_x, y, name)

    # Dotted leader between name and price
    if price:
        leader_start = name_x + name_w + leader_gap
        leader_end = MARGIN_X + avail_w - price_w - leader_gap
        if leader_end > leader_start:
            c.setFillColor(LINE)
            dx = leader_start
            while dx < leader_end:
                c.circle(dx, y + 3, 0.6, stroke=0, fill=1)
                dx += 4

        c.setFont("Cinzel-Bold", 11)
        c.setFillColor(GOLD)
        c.drawRightString(MARGIN_X + avail_w, y, price)

    y -= 13
    if desc:
        c.setFont("Playfair-Italic", desc_size)
        c.setFillColor(MUTED)
        for line in wrap_text(c, desc, "Playfair-Italic", desc_size, avail_w - 40):
            c.drawString(name_x, y, line)
            y -= 11
    y -= 6
    return y


def draw_highlight_price(c, price, label, y):
    """Elegant centered price treatment: serif numerals flanked by thin gold rules
    and a small caps label below. No box."""
    cx = PAGE_W / 2

    # Measure the price width so the side rules don't crash into it
    price_size = 26
    c.setFont("Playfair", price_size)
    price_w = c.stringWidth(price, "Playfair", price_size)
    rule_gap = 16
    rule_outer = 150  # half-width of full rule span from centre

    # Centre Y for the price text
    price_baseline = y - 30

    # Side rules
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.5)
    rule_y = price_baseline + 7
    c.line(cx - rule_outer, rule_y, cx - price_w / 2 - rule_gap, rule_y)
    c.line(cx + price_w / 2 + rule_gap, rule_y, cx + rule_outer, rule_y)

    # Price
    c.setFillColor(HexColor("#a8842f"))  # gold-deep, more refined than bright
    c.drawCentredString(cx, price_baseline, price)

    # Small caps label below
    if label:
        c.setFont("Cinzel", 8.5)
        c.setFillColor(MUTED)
        c.drawCentredString(cx, price_baseline - 18, " ".join(label.upper()))

    return price_baseline - 38


def start_page(c, page_num, lang="es"):
    """Initialise a fresh page with brand chrome."""
    draw_background(c)
    draw_top_band(c, lang)
    draw_footer(c, page_num, lang)
    return PAGE_H - MARGIN_TOP


def build_pdf(path, lang="es"):
    c = canvas.Canvas(path, pagesize=A4)
    title = "Menu · Restaurante Arantxa" if lang == "en" else "Carta · Restaurante Arantxa"
    subject = "Food, drinks and wine menu" if lang == "en" else "Carta de comida, bebidas y vinos"
    c.setTitle(title)
    c.setAuthor("Restaurante Arantxa")
    c.setSubject(subject)

    cover_page(c, lang)

    page_num = 2
    y = start_page(c, page_num, lang)
    first_section_on_page = True

    for section in MENU:
        wants_new_page = section.get("page_break_before") and not first_section_on_page
        approx_h = 60 + 28 * len(section["items"])
        runs_out = y - approx_h < MARGIN_BOTTOM and not first_section_on_page

        if wants_new_page or runs_out:
            c.showPage()
            page_num += 1
            y = start_page(c, page_num, lang)
            first_section_on_page = True
        else:
            y -= section.get("gap_before", 0)

        section_name = t(section["name"], lang)
        section_intro = t(section.get("intro", ""), lang) if section.get("intro") else ""
        y = draw_section_header(c, section_name, section_intro, y)
        if section.get("highlight_price"):
            label = t(section.get("highlight_label", ""), lang)
            y = draw_highlight_price(c, section["highlight_price"], label, y)

        for name, desc, price in section["items"]:
            if y < MARGIN_BOTTOM + 50:
                c.showPage()
                page_num += 1
                y = start_page(c, page_num, lang)
                cont_label = " (cont.)"
                y = draw_section_header(c, section_name + cont_label, "", y)
            y = draw_item(c, t(name, lang), t(desc, lang) if desc else desc, price, y)
        y -= 14
        first_section_on_page = False

    # Allergen note
    if y < MARGIN_BOTTOM + 80:
        c.showPage()
        page_num += 1
        y = start_page(c, page_num, lang)

    c.setStrokeColor(LINE)
    c.setLineWidth(0.4)
    c.line(MARGIN_X, y, PAGE_W - MARGIN_X, y)
    y -= 18
    c.setFont("Cinzel-Bold", 10)
    c.setFillColor(GOLD)
    c.drawString(MARGIN_X, y, t("INFORMACIÓN SOBRE ALÉRGENOS", lang))
    y -= 16
    c.setFont("Playfair", 9.5)
    c.setFillColor(INK)
    notice = ("Allergen information is available. Please ask our staff."
              if lang == "en"
              else "Disponemos de información sobre alérgenos. Consulte a nuestro personal.")
    for line in wrap_text(c, notice, "Playfair", 9.5, PAGE_W - 2 * MARGIN_X):
        c.drawString(MARGIN_X, y, line)
        y -= 12

    c.save()
    return page_num


if __name__ == "__main__":
    for lang, out in [("es", OUT_PDF_ES), ("en", OUT_PDF_EN)]:
        pages = build_pdf(out, lang)
        size_kb = os.path.getsize(out) / 1024
        print(f"\n✓ PDF ({lang.upper()}) generated: {out}")
        print(f"  Pages: {pages}")
        print(f"  Size:  {size_kb:.1f} KB")
