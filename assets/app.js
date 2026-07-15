/* ============================================================
   RESTAURANTE ARANTXA · App JS compartido
   ============================================================ */
(function () {
  'use strict';

  // ---------- I18N ----------
  const I18N = {
    es: {
      'nav.inicio': 'Inicio',
      'nav.carta': 'Carta',
      'nav.reservar': 'Reservar',
      'nav.donde': 'Dónde estamos',
      'nav.cta': 'Reservar',

      'hero.tagline': 'Cocina con alma · València',
      'hero.title': 'Producto fresco,\nrecetas <em>de toda la vida</em>',
      'hero.sub': 'Tapas, ensaladas de tomate rosa del Perelló, mariscos, carnes y, los viernes, cocido madrileño. En pleno corazón de L\'Eixample.',
      'hero.cta1': 'Reservar',
      'hero.cta2': 'Ver la carta',

      'about.eyebrow': 'El local',
      'about.title': 'Un rincón familiar en València',
      'about.p1': 'Arantxa es un restaurante de barrio donde se seleccionan los productos manualmente cada día: tomate rosa del Perelló, jamón ibérico, pescado fresco y carnes seleccionadas. Recetas tradicionales, raciones generosas y un ambiente que te hace sentir como en casa.',
      'about.p2': 'Una carta corta y honesta con tapas para compartir, mariscos y carnes a la brasa —no te vayas sin probar nuestros cachopos—, y una bodega de vinos de denominaciones de origen españolas. Los viernes a mediodía, nuestro cocido madrileño completo por 25 € (solo en temporada). Eso es Arantxa.',
      'about.stat1.num': '4,9',
      'about.stat1.lbl': 'Valoración TripAdvisor',
      'about.stat2.num': '42+',
      'about.stat2.lbl': 'Reseñas reales',
      'about.stat3.num': '100%',
      'about.stat3.lbl': 'Producto fresco diario',

      'carta.eyebrow': 'La carta',
      'carta.title': 'Nuestra selección',
      'carta.sub': 'Un anticipo de lo que cocinamos cada día. La carta completa está en la página dedicada.',
      'carta.cta': 'Ver carta completa',

      'cocido.eyebrow': 'Todos los viernes',
      'cocido.title': 'Cocido <em>madrileño</em>',
      'cocido.desc': 'Tres vuelcos, garbanzos, verduras, carnes y compango como mandan los cánones. Incluye una bebida y postre o café.',
      'cocido.cta': 'Reservar viernes',

      'reservas.eyebrow': 'Reservar',
      'reservas.title': 'Tu mesa, a un mensaje',
      'reservas.sub': 'De momento gestionamos las reservas por WhatsApp y teléfono. Te respondemos en minutos durante nuestro horario de servicio.',
      'channel.wa.title': 'WhatsApp Business',
      'channel.wa.desc': 'La forma más rápida. Te confirmamos en minutos.',
      'channel.tel.title': 'Llámanos',
      'channel.tel.desc': 'Si prefieres voz, marca y reservamos al momento.',
      'channel.mail.title': 'Email',
      'channel.mail.desc': 'Para grupos, eventos privados o consultas largas.',

      'reviews.eyebrow': 'Lo que dicen',
      'reviews.title': 'Reseñas reales',
      'reviews.sub': 'Selección extraída de Google (5 ★ sobre 5 con 57 opiniones).',
      'reviews.foot.stars': '5,0 ★',
      'reviews.foot.label': 'Media en Google Maps · 57 reseñas verificadas',

      'where.eyebrow': 'Visítanos',
      'where.title': 'Dónde estamos',
      'where.sub': 'En el centro de L\'Eixample, a pocos minutos de la Estación del Norte y la Plaza de Toros.',
      'where.cta': 'Cómo llegar',

      'footer.tagline': 'Cocina española tradicional. Reservas por WhatsApp y teléfono.',
      'faq.eyebrow': 'Preguntas frecuentes',
      'faq.title': 'Todo lo que necesitas saber',
      'faq.q1': '¿Cuál es el horario de Restaurante Arantxa?',
      'faq.a1': 'De lunes a viernes abrimos por la noche, de 19:00 a 00:30. Los sábados, de 13:00 a 17:00 y de 19:00 a 00:00. Domingos cerrado. El mediodía de lunes a viernes abrimos solo con reserva previa por WhatsApp.',
      'faq.q2': '¿Cómo se reserva mesa?',
      'faq.a2': 'Puedes reservar por WhatsApp o teléfono en el +34 663 209 793, o desde la página de reservas de la web.',
      'faq.q3': '¿Dónde está Arantxa?',
      'faq.a3': 'En Carrer de Joaquín Costa, 50, L\'Eixample, 46005 València, a 5 minutos del Mercado de Colón (metro Xàtiva y Colón).',
      'faq.q4': '¿Tienen menú para grupos o menú degustación?',
      'faq.a4': 'Sí. Menú para grupos por 40 € por persona y menú degustación por 27,90 € por persona (mínimo 2 personas). Ambos se sirven para toda la mesa.',
      'faq.q5': '¿Hacen cocido madrileño?',
      'faq.a5': 'Sí, servimos cocido madrileño completo los viernes (solo en temporada) por 25 €. Consulta disponibilidad por WhatsApp.',
      'faq.q6': '¿Tienen información de alérgenos?',
      'faq.a6': 'Sí. Contamos con la información de los 14 alérgenos de declaración obligatoria; pregunta a nuestro personal por cada plato.',
      'footer.col1': 'Navegación',
      'footer.col2': 'Contacto',
      'footer.col3': 'Legal',
      'footer.privacy': 'Política de privacidad',
      'footer.cookies': 'Política de cookies',
      'footer.manage': 'Administrar cookies',
      'footer.legal': 'Aviso legal',
      'footer.rights': 'Todos los derechos reservados',

      'cookie.text': 'Usamos cookies técnicas y de Google Maps para mostrar el mapa. No usamos cookies de marketing.',
      'cookie.accept': 'Aceptar',
      'cookie.reject': 'Solo técnicas',

      'crumb.home': 'Inicio',
      'crumb.carta': 'Carta',
      'crumb.reservar': 'Reservar',
      'crumb.donde': 'Dónde estamos',

      // Reservar page
      'reservar.tagline': 'Reservar',
      'reservar.h1': 'Tu mesa, <em>a un mensaje</em>',
      'reservar.sub': 'De momento gestionamos las reservas por WhatsApp y teléfono. Respondemos en minutos durante nuestro horario de servicio.',
      'form.eyebrow': 'Reservar mesa',
      'form.title': 'Tu reserva en 1 minuto',
      'form.sub': 'Rellena los datos y te abrimos WhatsApp con el resumen listo para enviar. Te confirmamos en minutos.',
      'form.label.date': 'Fecha',
      'form.label.guests': 'Comensales',
      'form.label.time': 'Hora',
      'form.label.allergies': 'Alergias o intolerancias',
      'form.label.comments': 'Otros comentarios',
      'form.label.name': 'Nombre y apellido',
      'form.date.placeholder': 'Selecciona una fecha',
      'form.time.placeholder': '— Elige la fecha primero —',
      'form.guests.placeholder': '— Selecciona —',
      'form.guests.1': '1 persona',
      'form.guests.2': '2 personas',
      'form.guests.3': '3 personas',
      'form.guests.4': '4 personas',
      'form.guests.5': '5 personas',
      'form.guests.6': '6 personas',
      'form.guests.7': '7 personas',
      'form.guests.8': '8 personas',
      'form.guests.9': '9 personas',
      'form.guests.10': '10 personas',
      'form.guests.group': 'Más de 10 (grupo)',
      'form.cocido.title': '🍲 Especialidad · Cocido madrileño completo · 25 €/pax',
      'form.cocido.desc': 'Tres vuelcos clásicos. Incluye una bebida y postre o café. Se agota, conviene reservarlo.',
      'form.cocido.unavail': ' — pregúntanos por disponibilidad',
      'form.deg.title': '🍽 Menú degustación · 27,90 €/pax',
      'form.deg.desc': 'Cuatro pases principales. Mínimo 2 personas. No incluye bebida ni café.',
      'form.deg.note': 'ℹ️ El menú degustación se sirve para toda la mesa.',
      'form.grupal.title': '👥 Menú grupal · 40 €/pax',
      'form.grupal.desc': 'Para celebraciones y grupos. Incluye bebida de bienvenida, una botella de vino cada 2 personas, café y chupito.',
      'form.grupal.note': 'ℹ️ El menú grupal se sirve para toda la mesa.',
      'form.menu.label': 'Elige tu opción',
      'form.carta.title': '🍴 A la carta',
      'form.carta.desc': 'Pides libremente de nuestra carta.',
      'form.allergies.placeholder': 'Ej: alergia a frutos secos, sin gluten, vegetariano, sin lactosa…',
      'form.comments.placeholder': 'Cumpleaños, trona para niño, mesa tranquila, llegada con retraso…',
      'form.name.title': 'Indica nombre y apellido (mínimo dos palabras).',
      'form.name.error': 'Indica nombre y apellido (mínimo dos palabras).',
      'form.submit': 'Enviar reserva por WhatsApp',
      'form.foot': 'Te abrimos WhatsApp con el mensaje pre-rellenado. Confirmas pulsando enviar.',
      'cal.mon': 'L', 'cal.tue': 'M', 'cal.wed': 'X', 'cal.thu': 'J', 'cal.fri': 'V', 'cal.sat': 'S', 'cal.sun': 'D',
      'cal.foot': 'Cerramos los lunes.',
      'alt.eyebrow': '¿Prefieres otra vía?',
      'alt.title': 'Llámanos o escríbenos',
      'channel.mail.title': 'Email',
      'alt.mail.desc': 'Para grupos grandes, eventos privados o consultas largas.',

      // Carta page hero
      'cartaPage.tagline': 'La carta',
      'cartaPage.h1': 'Cocina <em>tradicional</em>, producto fresco',
      'cartaPage.sub': 'Tapas, ensaladas con tomate rosa del Perelló, mariscos, carnes a la brasa, menú degustación y, los viernes, cocido madrileño.',

      // Cocido strip + buttons
      'cocidoStrip.eyebrow': 'Todos los viernes',
      'cocidoStrip.title': 'Cocido <em>madrileño</em> completo',
      'cocidoStrip.desc': 'Tres vuelcos · Incluye bebida y postre o café · Se agota, mejor reservar.',
      'cocidoStrip.unit': 'persona',
      'cocidoStrip.cta': 'Reservar',
      'cta.bookTable': 'Reservar mesa',

      // Carta tabs
      'tab.entrantes': 'Entrantes',
      'tab.ensaladas': 'Ensaladas',
      'tab.tostas': 'Tostas',
      'tab.mar': 'Del mar',
      'tab.carnes': 'Carnes',
      'tab.degustacion': 'Degustación',
      'tab.postres': 'Postres',
      'tab.bebidas': 'Bebidas',
      'tab.vinos': 'Vinos',
      'tab.almuerzos': 'Almuerzos',
      'tab.aperitivo': 'Aperitivo',
      'tab.grupos': 'Grupos',

      // Nombres de plato (carta oficial)
      'm.bravas': 'Patatas bravas estilo Arantxa',
      'm.ensaladilla': 'Ensaladilla rusa',
      'm.gambas': 'Gambitas al ajillo',
      'm.anchoas': 'Ración de anchoas con tostaditas y tomate (6 unidades)',
      'm.calamarcitos': 'Calamarcitos a la andaluza',
      'm.micuit': 'Micuit de foie casero',
      'm.alcachofas': 'Alcachofas a baja temperatura con jamón ibérico y huevos de codorniz',
      'm.tabla': 'Tabla mixta de jamón ibérico y queso curado',
      'm.huevos': 'Huevos rotos con jamón ibérico',
      'm.croquetas': 'Croquetas caseras de cocido (6 unidades)',
      'm.cecina': 'Cecina de León con burrata de pistacho, pesto y rúcula',
      'm.ens1': 'Tomate rosa del Perelló con burrata, pesto y rúcula',
      'm.ens2': 'Tomate rosa del Perelló con ventresca y aguacate',
      'm.tos1': 'Tosta de sardina ahumada con tomate y ralladura de lima',
      'm.tos2': 'Tosta de jamón ibérico con foie y mermelada de cebolla',
      'm.entrana': 'Entraña a la plancha con chimichurri y papitas baby',
      'm.abanico': 'Abanico ibérico con patatas, huevo y padrón',
      'm.cachopo': 'Cachopo con patatas fritas y pimientos del piquillo',
      'm.steak': 'Steak tartar de solomillo de ternera (200 g)',
      'm.lemonpie': 'Lemon pie',
      'm.coco': 'Tarta de coco con dulce de leche',
      'm.copa': 'Copa de helado de vainilla, nata, nueces, Frangelico y sirope de chocolate',
      'm.sorbete': 'Sorbete de limón al cava',
      'm.hlimon': 'Helado de limón',
      'm.hturron': 'Helado de turrón',
      'm.hvainilla': 'Helado de vainilla',
      'm.hdubai': 'Helado de chocolate Dubái',
      'm.hmoka': 'Helado de Moka y Mascarpone',

      // Almuerzos / Aperitivo / Grupos
      'cat.almuerzos.title': 'Desayunos y almuerzos',
      'cat.almuerzos.intro': 'Para empezar el día o a media mañana.',
      'cat.almuerzos.sub1': 'Desayunos',
      'cat.almuerzos.sub2': 'Almuerzos',
      'alm.tostada.n': 'Tostada + café',
      'alm.tostada.d': 'A elegir: aceite de oliva · tomate y aceite · mantequilla y mermelada.',
      'alm.mollete.n': 'Tosta de mollete + cacaos + bebida + café',
      'alm.mollete.d': 'Mollete a elegir: atún, pimiento verde y aceituna de anchoa · salmón ahumado, aguacate y huevo poché · jamón ibérico · queso curado con tomate.',
      'alm.bocadillo.n': 'Bocadillo + cacaos + bebida + café',
      'alm.bocadillo.d': 'A elegir: tortilla de patata · tortilla francesa · lomo con patatas y pimiento verde · beicon con queso · pechuga de pollo al gusto · jamón · queso curado.',
      'cat.aperitivo.title': 'La hora del aperitivo',
      'cat.aperitivo.intro': 'Fría, bien tirada y muy necesaria. Cada combo con caña, 6 €.',
      'cat.aperitivo.note': 'Con vino o vermut, suplemento de 2 €.',
      'ap.bravas.n': 'Caña + bravas',
      'ap.ensaladilla.n': 'Caña + ensaladilla',
      'ap.queso.n': 'Caña + queso curado',
      'ap.boqueron.n': 'Caña + papas con boquerón',
      'ap.mejillones.n': 'Caña + lata de mejillones',
      'ap.berberechos.n': 'Caña + lata de berberechos',
      'cat.grupos.title': 'Menú para grupos',
      'cat.grupos.intro': 'Ideal para celebraciones y comidas de empresa.',
      'cat.grupos.incluye': 'Incluye bebida de bienvenida, una botella de vino cada 2 personas, café y chupito.',
      'gr.pan.n': 'Pan con tomate y alioli',
      'gr.bravas.n': 'Patatas bravas',
      'gr.tomate.n': 'Tomate rosa del Perelló con burrata',
      'gr.croquetas.n': 'Croquetas de jamón',
      'gr.calamarcitos.n': 'Calamarcitos a la andaluza',
      'gr.entrecot.n': 'Entrecot trinchado',
      'gr.postres.n': 'Postres',

      // Tab section heads + intros
      'cat.entrantes.title': 'Entrantes para compartir',
      'cat.entrantes.intro': 'Para empezar, picar, brindar.',
      'cat.ensaladas.title': 'Ensaladas de tomate rosa del Perelló',
      'cat.ensaladas.intro': 'El tomate más dulce del Mediterráneo, en su mejor versión.',
      'cat.tostas.title': 'Nuestras tostas',
      'cat.tostas.intro': 'Sobre pan de masa madre, tostado al momento.',
      'cat.mar.title': 'Del mar a la mesa',
      'cat.mar.intro': 'Pescado fresco y mariscos seleccionados a diario.',
      'cat.carnes.title': 'Carnes',
      'cat.carnes.intro': 'A la brasa, en su punto, producto seleccionado.',
      'cat.degustacion.title': 'Menú degustación',
      'cat.degustacion.intro': 'Mínimo 2 personas.',
      'deg.p1': '1 · Patatas bravas estilo Arantxa',
      'deg.p2': '2 · Tomate rosa del Perelló con ventresca y aguacate',
      'deg.p3': '3 · Calamarcitos a la andaluza',
      'deg.p4': '4 · Entraña con chimichurri y papitas baby',
      'deg.extra': 'Se abre con pan con tomate y alioli, y se cierra con postre y chupito de la casa.',
      'cat.postres.title': 'Postres',
      'cat.postres.intro': 'Hechos en casa cada día.',
      'cat.bebidas.title': 'Bebidas',
      'cat.bebidas.intro': 'Refrescos, cervezas y cafés.',
      'tab.licores': 'Licores',
      'cat.licores.title': 'Licores y digestivos',
      'cat.licores.intro': 'Vermuts, licores, copas y digestivos en copa de balón, con mucho hielo.',
      'cat.vinos.title': 'Bodega',
      'cat.vinos.intro': 'Selección de denominaciones de origen españolas.',

      // Sugerencias + allergen
      'sugerencias.title': 'Sugerencias del día',
      'sugerencias.desc': 'Cada día preparamos platos fuera de carta según producto de mercado. Pregunta a nuestro equipo.',
      'allergen.title': 'Información sobre alérgenos',
      'allergen.desc': 'Contamos con información de los 14 alérgenos de declaración obligatoria. Pregunta a nuestro personal por los alérgenos de cada plato.',

      // Dónde estamos page hero
      'dondePage.tagline': 'Dónde estamos',
      'dondePage.h1': 'En el corazón de <em>L\'Eixample</em>',
      'dondePage.sub': 'Carrer de Joaquín Costa, 50 · 46005 València · A 5 minutos del Mercado de Colón y la Estación del Norte.',

      // Donde-estamos contact + hours table
      'map.loading': 'Cargando mapa…',
      'contact.address': 'Dirección',
      'contact.waphone': 'WhatsApp / Teléfono',
      'contact.phonewa': 'Teléfono · WhatsApp',
      'contact.subtitle': 'Reserva online o llámanos.',
      'contact.email': 'Email',
      'contact.hours': 'Horario',
      'day.sun': 'Domingo', 'day.mon': 'Lunes', 'day.tue': 'Martes',
      'day.wed': 'Miércoles', 'day.thu': 'Jueves', 'day.fri': 'Viernes',
      'day.sat': 'Sábado', 'day.closed': 'Cerrado',
      'hours.midday': 'Mediodía de lunes a viernes: abrimos solo con reserva previa. Escríbenos por WhatsApp.',

      // Cómo llegar
      'how.eyebrow': 'Cómo llegar',
      'how.title': 'Bien comunicados',
      'how.sub': 'Estamos en L\'Eixample, junto a la Gran Via Marqués del Túria y muy cerca de la Estación del Norte.',
      'how.metro.title': 'Metro',
      'how.metro.desc': '<strong>Xàtiva</strong> (L3, L5, L7, L9) a 5 min andando.<br><strong>Colón</strong> (L3, L5, L7, L9) a 7 min.',
      'how.bus.title': 'Autobús EMT',
      'how.bus.desc': 'Líneas <strong>10, 13, 27 y 89</strong> con paradas a menos de 5 min en Gran Via Marqués del Túria.',
      'how.walk.title': 'A pie',
      'how.walk.desc': '10 min desde el <strong>Mercado de Colón</strong>.<br>12 min desde la <strong>Plaza del Ayuntamiento</strong>.',
      'how.car.title': 'En coche',
      'how.car.desc': 'Parking <strong>Mercado de Colón</strong> o <strong>Colón 60</strong>, ambos a unos 5 min a pie. En la propia calle Joaquín Costa: <strong>zona azul (ORA) y zona blanca</strong>.',

      // Aparcamiento
      'park.eyebrow': 'Aparcamiento',
      'park.title': 'Dónde aparcar',
      'park.1.title': 'Aparcamiento Norte Estación',
      'park.1.desc': 'C/ Xàtiva (junto a la estación). 5 minutos a pie.',
      'park.2.title': 'Aparcamiento Bailén',
      'park.2.desc': 'C/ Bailén, frente a la estación. 4 minutos a pie.',
      'park.3.title': 'Aparcamiento Mercado de Colón',
      'park.3.desc': 'Bajo el mercado modernista. 8 minutos a pie.',
      'park.4.title': 'Zona azul ORA',
      'park.4.desc': 'Aparcamiento regulado en la propia calle Joaquín Costa y alrededores.',
      'park.note': 'Si vienes en coche, te recomendamos llamar antes para confirmar disponibilidad de zona.',
      'park.cta': 'Abrir en Google Maps',

      // Index — carta teaser (5 platos)
      'teaser.micuit.name': 'Micuit de foie casero',
      'teaser.micuit.desc': 'Elaboración propia, con pan tostado y compota de fruta. Suave y goloso.',
      'teaser.tomate.name': 'Tomate rosa con burrata',
      'teaser.tomate.desc': 'Tomate rosa del Perelló con burrata, pesto y rúcula. Joya de temporada.',
      'teaser.alcachofas.name': 'Alcachofas a baja temperatura',
      'teaser.alcachofas.desc': 'Con jamón ibérico y huevos de codorniz. Producto fresco de la huerta.',
      'teaser.cecina.name': 'Cecina de León con burrata',
      'teaser.cecina.desc': 'Con burrata de pistacho, pesto y rúcula.',
      'teaser.jamon.name': 'Jamón ibérico',
      'teaser.jamon.desc': 'Cortado a cuchillo. En tabla mixta con queso curado.',
      'teaser.entrecot.name': 'Entrecot trinchado',
      'teaser.entrecot.desc': 'A la brasa y trinchado, con patatas y pimientos de padrón.',
      'teaser.tag.entrantes': 'Entrantes',
      'teaser.tag.ensaladas': 'Ensaladas',
      'teaser.tag.verduras': 'Verduras',
      'teaser.tag.carnes': 'Carnes',

      // ─── Dish names + descriptions (auto-generated from carta.html) ───
      'd.1-pan-con-tomate-y-alioli.n': '1 · Pan con tomate y alioli',
      'd.2-patatas-bravas-estilo-arantxa.n': '2 · Patatas bravas estilo Arantxa',
      'd.200-g-preparacion-clasica-al-momento.d': '200 g, preparación clásica al momento.',
      'd.3-tomate-rosa-del-perello-con-ventresca-y-aguacate.n': '3 · Tomate rosa del Perelló con ventresca y aguacate',
      'd.300-g-a-la-brasa-en-su-punto.d': '300 g, a la brasa, en su punto.',
      'd.4-calamarcitos-a-la-andaluza.n': '4 · Calamarcitos a la andaluza',
      'd.5-entrana-con-chimichurri-y-papitas-baby.n': '5 · Entraña con chimichurri y papitas baby',
      'd.6-postre-del-dia.n': '6 · Postre del día',
      'd.7-chupito-de-la-casa.n': '7 · Chupito de la casa',
      'd.agua-lanjaron-agua-con-gas.n': 'Agua Lanjarón · Agua con gas',
      'd.aguila-1900-doble-barril.n': 'Águila 1900 doble · barril',
      'd.alcachofas-a-baja-temperatura.n': 'Alcachofas a baja temperatura',
      'd.amstel-heineken-la-rubia-radler.n': 'Amstel · Heineken · La rubia · Radler',
      'd.amstel-oro-amstel-oro-0-0.n': 'Amstel Oro · Amstel Oro 0,0',
      'd.aperol-spritz.n': 'Aperol Spritz',
      'd.aquarius.n': 'Aquarius',
      'd.baigorri-crianza.n': 'Baigorri Crianza',
      'd.ballantine-s.n': 'Ballantine\'s',
      'd.barcelo.n': 'Barceló',
      'd.beefeater.n': 'Beefeater',
      'd.bitter-kas-sin-alcohol.n': 'Bitter Kas sin alcohol',
      'd.bobal-en-calma.n': 'Bobal en Calma',
      'd.bocabadat.n': 'Bocabadat',
      'd.brugal.n': 'Brugal',
      'd.cachopo-asturiano.n': 'Cachopo asturiano',
      'd.cafe-con-leche.n': 'Café con leche',
      'd.cafe-cortado.n': 'Café cortado',
      'd.cafe-solo.n': 'Café solo',
      'd.calamarcitos-a-la-andaluza.n': 'Calamarcitos a la andaluza',
      'd.capas-de-coco-rallado-y-dulce-de-leche.d': 'Capas de coco rallado y dulce de leche.',
      'd.carajillo.n': 'Carajillo',
      'd.carmelo-rodero-9-meses.n': 'Carmelo Rodero 9 meses',
      'd.carpaccio-de-lomo-de-vaca.n': 'Carpaccio de lomo de vaca',
      'd.carpaccio-de-salmon-ahumado.n': 'Carpaccio de salmón ahumado',
      'd.carrilleras-de-cerdo-en-salsa.n': 'Carrilleras de cerdo en salsa',
      'd.cava-brut-nature-macabeo.d': 'Cava · Brut Nature · Macabeo.',
      'd.chuleton-de-cerdo-gallego-madurado-21-dias.n': 'Chuletón de cerdo gallego madurado 21 días',
      'd.chupitos-varios.n': 'Chupitos (varios)',
      'd.coca-cola-zero-normal.n': 'Coca-Cola Zero / normal',
      'd.con-mahonesa-de-soja-alcaparras-y-cebolla-tierna.d': 'Con mahonesa de soja, alcaparras y cebolla tierna.',
      'd.con-nata-nueces-frangelico-y-sirope-de-chocolate.d': 'Con nata, nueces, Frangelico y sirope de chocolate.',
      'd.con-tomate-y-ralladura-de-lima.d': 'Con tomate y ralladura de lima.',
      'd.copa-de-helado-de-vainilla.n': 'Copa de helado de vainilla',
      'd.cortado-a-cuchillo-con-pan-de-cristal-y-tomate.d': 'Cortado a cuchillo, con pan de cristal y tomate.',
      'd.crema-de-arroz.n': 'Crema de arroz',
      'd.crema-de-orujo.n': 'Crema de orujo',
      'd.cremaet.n': 'Cremaet',
      'd.cremosa-al-horno-sin-base-estilo-la-vina.d': 'Cremosa, al horno, sin base. Estilo La Viña.',
      'd.cutty-sark.n': 'Cutty Sark',
      'd.d-o-alicante-macabeo.d': 'D.O. Alicante · Macabeo.',
      'd.d-o-alicante-monastrell-14-meses-barrica.d': 'D.O. Alicante · Monastrell · 14 meses barrica.',
      'd.d-o-monterrei-godello-treixadura.d': 'D.O. Monterrei · Godello, Treixadura.',
      'd.d-o-monterrei.d': 'D.O. Monterrei.',
      'd.d-o-ribera-del-duero-tinta-del-pais-18-meses.d': 'D.O. Ribera del Duero · Tinta del País · 18 meses.',
      'd.d-o-ribera-del-duero-tinta-fina-9-meses.d': 'D.O. Ribera del Duero · Tinta fina · 9 meses.',
      'd.d-o-ribera-del-duero-tinta-fina.d': 'D.O. Ribera del Duero · Tinta fina.',
      'd.d-o-ribera-del-duero.n': 'D.O. Ribera del Duero',
      'd.d-o-rioja-tempranillo-14-meses-barrica.d': 'D.O. Rioja · Tempranillo · 14 meses barrica.',
      'd.d-o-rioja.n': 'D.O. Rioja',
      'd.d-o-rueda-verdejo.d': 'D.O. Rueda · Verdejo.',
      'd.d-o-rueda-verdejo.n': 'D.O. Rueda Verdejo',
      'd.d-o-utiel-requena-bobal-9-meses-barrica.d': 'D.O. Utiel-Requena · Bobal · 9 meses barrica.',
      'd.d.0a413c6ca6': 'Estofadas durante horas, melosas, en su propia salsa.',
      'd.d.1490f1002b': 'Relleno de jamón y queso, con patatas fritas y pimientos del piquillo.',
      'd.d.2c32a64d4e': 'De elaboración propia, con pan tostado y compota de fruta.',
      'd.d.365834d5d6': 'D.O. Valencia · Tempranillo, Cabernet, Merlot, Syrah · 12 meses.',
      'd.d.4ae7faefc3': 'Selección del maestro quesero, con dulce de membrillo y frutos secos.',
      'd.d.4f8fe6a2e1': 'Con queso raclette fundido y salsa de trufa blanca y setas.',
      'd.d.5a077f3bbd': 'Ventresca de bonito en aceite de oliva virgen extra y aguacate maduro.',
      'd.d.9286b6315b': 'Foie fresco a la plancha y mermelada de cebolla caramelizada.',
      'd.d.b1165e641d': 'Burrata fresca, pesto casero y rúcula sobre tomate del Perelló.',
      'd.d.be7f2047f8': 'Aguacate, trufa, mostaza, yema pasteurizada, soja y sésamo.',
      'd.d.dc4413f4ec': 'Con jamón ibérico y huevos de codorniz. Producto fresco de la huerta.',
      'd.d.e503b10df3': 'En cazuela de barro, con guindilla y aceite de oliva virgen extra.',
      'd.d.ef137f56ce': 'Champiñones laminados, parmesano, trufa blanca y rúcula.',
      'd.d.f5752ee88f': 'Calamares pequeños rebozados con fritura ligera y limón.',
      'd.d.f69c22eb7b': 'Entraña argentina, chimichurri casero y papitas baby crujientes.',
      'd.d.fce890eb8f': 'Crujientes por fuera, melosas por dentro, con nuestra salsa brava de la casa.',
      'd.dominio-de-la-vega-vintage.n': 'Dominio de la Vega Vintage',
      'd.entrana-a-la-plancha-con-chimichurri.n': 'Entraña a la plancha con chimichurri',
      'd.excellens-cuvee-crianza.n': 'Excellens Cuvée Crianza',
      'd.excellens-verdejo.n': 'Excellens Verdejo',
      'd.fanta-de-naranja-limon.n': 'Fanta de naranja / limón',
      'd.gambitas-al-ajillo.n': 'Gambitas al ajillo',
      'd.havana-7.n': 'Havana 7',
      'd.helado-de-limon.n': 'Helado de limón',
      'd.helado-de-turron.n': 'Helado de turrón',
      'd.helado-de-vainilla.n': 'Helado de vainilla',
      'd.infusiones.n': 'Infusiones',
      'd.javier-sanz-verdejo.n': 'Javier Sanz Verdejo',
      'd.johnnie-walker.n': 'Johnnie Walker',
      'd.lemon-pie.n': 'Lemon pie',
      'd.lia.n': 'Lía',
      'd.licor-de-hierbas.n': 'Licor de hierbas',
      'd.limoncello.n': 'Limoncello',
      'd.martin-miller-s.n': 'Martin Miller\'s',
      'd.mi-cuit-de-foie-casero.n': 'Mi cuit de foie casero',
      'd.n-12.n': 'N 12',
      'd.nordes.n': 'Nordés',
      'd.patatas-bravas-estilo-arantxa.n': 'Patatas bravas estilo Arantxa',
      'd.puerto-de-indias.n': 'Puerto de Indias',
      'd.refresca-y-rebaja-el-final-del-menu.d': 'Refresca y rebaja el final del menú.',
      'd.rosado-de-la-casa.n': 'Rosado de la casa',
      'd.sorbete-de-limon-al-cava.n': 'Sorbete de limón al cava',
      'd.steak-tartar-de-solomillo-de-ternera.n': 'Steak tartar de solomillo de ternera',
      'd.tabla-de-jamon-iberico.n': 'Tabla de jamón ibérico',
      'd.tabla-de-quesos-variados.n': 'Tabla de quesos variados',
      'd.tarima-hill.n': 'Tarima Hill',
      'd.tarta-de-coco-con-dulce-de-leche.n': 'Tarta de coco con dulce de leche',
      'd.tarta-de-limon-con-merengue-tostado.d': 'Tarta de limón con merengue tostado.',
      'd.tarta-de-queso.n': 'Tarta de queso',
      'd.tartar-de-atun.n': 'Tartar de atún',
      'd.tartar-de-salmon.n': 'Tartar de salmón',
      'd.tataky-de-lomo-bajo.n': 'Tataky de lomo bajo',
      'd.te.n': 'Té',
      'd.tercio.d': 'Tercio.',
      'd.tomate-rosa-con-burrata-pesto-y-rucula.n': 'Tomate rosa con burrata, pesto y rúcula',
      'd.tomate-rosa-con-ventresca-y-aguacate.n': 'Tomate rosa con ventresca y aguacate',
      'd.tonica-tonica-zero.n': 'Tónica · Tónica zero',
      'd.tosta-de-jamon-iberico-con-foie-fresco.n': 'Tosta de jamón ibérico con foie fresco',
      'd.tosta-de-sardina-ahumada.n': 'Tosta de sardina ahumada',
      'd.triay.n': 'Triay',
      'd.valdehermoso-crianza.n': 'Valdehermoso Crianza',
      'd.venta-del-puerto-n-12.n': 'Venta del Puerto Nº12',
      'd.vermut-blanco-tinto.n': 'Vermut blanco / tinto',
      'd.vino-valenciano.n': 'Vino valenciano',
      'd.zumo-de-pina-melocoton.n': 'Zumo de piña / melocotón'
    },
    en: {
      'nav.inicio': 'Home',
      'nav.carta': 'Menu',
      'nav.reservar': 'Book',
      'nav.donde': 'Find us',
      'nav.cta': 'Book a table',

      'hero.tagline': 'Cooking with soul · Valencia',
      'hero.title': 'Fresh ingredients,\n<em>timeless</em> recipes',
      'hero.sub': 'Tapas, pink tomato from Perelló salads, seafood, grilled meats and, on Fridays, Traditional Madrid stew. Right in the heart of L\'Eixample.',
      'hero.cta1': 'Book',
      'hero.cta2': 'See the menu',

      'about.eyebrow': 'The place',
      'about.title': 'A family corner in Valencia',
      'about.p1': 'Arantxa is a neighborhood restaurant where ingredients are hand-picked every day: pink tomato from Perelló, Iberian ham, fresh fish and selected meats. Traditional recipes, generous portions and an atmosphere that makes you feel right at home.',
      'about.p2': 'A short, honest menu with tapas to share, seafood and grilled meats —don\'t leave without trying our cachopos—, and a cellar of Spanish DO wines. On Friday lunchtimes, our full cocido madrileño for €25 (seasonal). That\'s Arantxa.',
      'about.stat1.num': '4.9',
      'about.stat1.lbl': 'TripAdvisor rating',
      'about.stat2.num': '42+',
      'about.stat2.lbl': 'Real reviews',
      'about.stat3.num': '100%',
      'about.stat3.lbl': 'Daily fresh product',

      'carta.eyebrow': 'The menu',
      'carta.title': 'Our selection',
      'carta.sub': 'A taste of what we cook every day. The complete menu lives on its own page.',
      'carta.cta': 'See the full menu',

      'cocido.eyebrow': 'Every Friday',
      'cocido.title': 'Traditional Madrid <em>stew</em>',
      'cocido.desc': 'Three servings: chickpeas, vegetables, meats and pork cuts, as tradition demands. Includes one drink plus dessert or coffee.',
      'cocido.cta': 'Book for Friday',

      'reservas.eyebrow': 'Booking',
      'reservas.title': 'Your table, one message away',
      'reservas.sub': 'For now we handle bookings via WhatsApp and phone. We reply within minutes during service hours.',
      'channel.wa.title': 'WhatsApp Business',
      'channel.wa.desc': 'The fastest way. We confirm within minutes.',
      'channel.tel.title': 'Call us',
      'channel.tel.desc': 'Prefer to speak? We book you right away.',
      'channel.mail.title': 'Email',
      'channel.mail.desc': 'For groups, private events or longer enquiries.',

      'reviews.eyebrow': 'What guests say',
      'reviews.title': 'Real reviews',
      'reviews.sub': 'Selection from Google (5 ★ out of 5 across 57 reviews).',
      'reviews.foot.stars': '5.0 ★',
      'reviews.foot.label': 'Average on Google Maps · 57 verified reviews',

      'where.eyebrow': 'Visit us',
      'where.title': 'Find us',
      'where.sub': 'In the heart of L\'Eixample, minutes from Estación del Norte and the bullring.',
      'where.cta': 'Get directions',

      'footer.tagline': 'Traditional Spanish cooking. Bookings by WhatsApp and phone.',
      'faq.eyebrow': 'Frequently asked questions',
      'faq.title': 'Everything you need to know',
      'faq.q1': 'What are Restaurante Arantxa\'s opening hours?',
      'faq.a1': 'Monday to Friday we open for dinner, 7:00 pm to 0:30 am. Saturdays, 1:00–5:00 pm and 7:00 pm to midnight. Closed on Sundays. Weekday lunch is by prior booking on WhatsApp only.',
      'faq.q2': 'How do I book a table?',
      'faq.a2': 'Book via WhatsApp or phone at +34 663 209 793, or from the booking page on the website.',
      'faq.q3': 'Where is Arantxa?',
      'faq.a3': 'At Carrer de Joaquín Costa, 50, L\'Eixample, 46005 València, 5 minutes from Mercado de Colón (Xàtiva and Colón metro).',
      'faq.q4': 'Do you have a group or tasting menu?',
      'faq.a4': 'Yes. A group menu at €40 per person and a tasting menu at €27.90 per person (minimum 2 people). Both are served for the whole table.',
      'faq.q5': 'Do you serve cocido madrileño?',
      'faq.a5': 'Yes, we serve full cocido madrileño on Fridays (seasonal) for €25. Ask about availability on WhatsApp.',
      'faq.q6': 'Do you have allergen information?',
      'faq.a6': 'Yes. We hold information on the 14 major allergens; ask our staff about each dish.',
      'footer.col1': 'Navigation',
      'footer.col2': 'Contact',
      'footer.col3': 'Legal',
      'footer.privacy': 'Privacy policy',
      'footer.cookies': 'Cookie policy',
      'footer.manage': 'Manage cookies',
      'footer.legal': 'Legal notice',
      'footer.rights': 'All rights reserved',

      'cookie.text': 'We use technical cookies and Google Maps cookies to show the map. No marketing cookies.',
      'cookie.accept': 'Accept',
      'cookie.reject': 'Technical only',

      'crumb.home': 'Home',
      'crumb.carta': 'Menu',
      'crumb.reservar': 'Book',
      'crumb.donde': 'Find us',

      // Booking page
      'reservar.tagline': 'Book a table',
      'reservar.h1': 'Your table, <em>one message away</em>',
      'reservar.sub': 'For now we handle bookings via WhatsApp and phone. We reply within minutes during service hours.',
      'form.eyebrow': 'Book a table',
      'form.title': 'Your booking in 1 minute',
      'form.sub': 'Fill in the form and we will open WhatsApp with your ready-to-send request. We confirm within minutes.',
      'form.label.date': 'Date',
      'form.label.guests': 'Guests',
      'form.label.time': 'Time',
      'form.label.allergies': 'Allergies or intolerances',
      'form.label.comments': 'Other comments',
      'form.label.name': 'First name & surname',
      'form.date.placeholder': 'Pick a date',
      'form.time.placeholder': '— Pick a date first —',
      'form.guests.placeholder': '— Select —',
      'form.guests.1': '1 guest',
      'form.guests.2': '2 guests',
      'form.guests.3': '3 guests',
      'form.guests.4': '4 guests',
      'form.guests.5': '5 guests',
      'form.guests.6': '6 guests',
      'form.guests.7': '7 guests',
      'form.guests.8': '8 guests',
      'form.guests.9': '9 guests',
      'form.guests.10': '10 guests',
      'form.guests.group': 'More than 10 (group)',
      'form.cocido.title': '🍲 Special · Traditional Madrid stew · €25/pax',
      'form.cocido.desc': 'Three classic servings. Includes one drink plus dessert or coffee. Sells out — booking recommended.',
      'form.cocido.unavail': ' — ask us about availability',
      'form.deg.title': '🍽 Tasting menu · €27.90/pax',
      'form.deg.desc': 'Four main courses. Minimum 2 people. Drinks and coffee not included.',
      'form.deg.note': 'ℹ️ The tasting menu is served for the whole table.',
      'form.grupal.title': '👥 Group menu · €40/pax',
      'form.grupal.desc': 'For celebrations and groups. Includes a welcome drink, one bottle of wine per 2 guests, coffee and a shot.',
      'form.grupal.note': 'ℹ️ The group menu is served for the whole table.',
      'form.menu.label': 'Choose your option',
      'form.carta.title': '🍴 À la carte',
      'form.carta.desc': 'Order freely from our menu.',
      'form.allergies.placeholder': 'E.g. nut allergy, gluten-free, vegetarian, lactose-free…',
      'form.comments.placeholder': 'Birthday, kids high chair, quiet table, running late…',
      'form.name.title': 'Please include first name and surname (at least two words).',
      'form.name.error': 'Please include first name and surname (at least two words).',
      'form.submit': 'Send booking via WhatsApp',
      'form.foot': 'We open WhatsApp with the prefilled message. Confirm by tapping send.',
      'cal.mon': 'M', 'cal.tue': 'T', 'cal.wed': 'W', 'cal.thu': 'T', 'cal.fri': 'F', 'cal.sat': 'S', 'cal.sun': 'S',
      'cal.foot': 'Closed on Mondays.',
      'alt.eyebrow': 'Prefer another way?',
      'alt.title': 'Call or email us',
      'channel.mail.title': 'Email',
      'alt.mail.desc': 'For large groups, private events or longer enquiries.',

      // Menu page hero
      'cartaPage.tagline': 'The menu',
      'cartaPage.h1': '<em>Traditional</em> cooking, fresh produce',
      'cartaPage.sub': 'Tapas, pink tomato from Perelló salads, seafood, grilled meats, tasting menu and, on Fridays, Traditional Madrid stew.',

      // Cocido strip + buttons
      'cocidoStrip.eyebrow': 'Every Friday',
      'cocidoStrip.title': 'Traditional Madrid <em>stew</em>',
      'cocidoStrip.desc': 'Three servings · Drink and dessert or coffee included · Sells out — book ahead.',
      'cocidoStrip.unit': 'per person',
      'cocidoStrip.cta': 'Book',
      'cta.bookTable': 'Book a table',

      // Menu tabs
      'tab.entrantes': 'Starters',
      'tab.ensaladas': 'Salads',
      'tab.tostas': 'Tostas',
      'tab.mar': 'From the sea',
      'tab.carnes': 'Meats',
      'tab.degustacion': 'Tasting',
      'tab.postres': 'Desserts',
      'tab.bebidas': 'Drinks',
      'tab.vinos': 'Wines',
      'tab.almuerzos': 'Breakfast & lunch',
      'tab.aperitivo': 'Aperitif',
      'tab.grupos': 'Groups',

      // Translated dish names (official menu)
      'm.bravas': '"Arantxa" style patatas bravas',
      'm.ensaladilla': 'Russian salad',
      'm.gambas': 'Garlic prawns',
      'm.anchoas': 'Anchovy portion with toasts and tomato (6 pieces)',
      'm.calamarcitos': 'Andalusian-style baby squid',
      'm.micuit': 'Homemade foie gras micuit',
      'm.alcachofas': 'Low-temperature artichokes with Iberian ham and quail eggs',
      'm.tabla': 'Mixed platter of Iberian ham and cured cheese',
      'm.huevos': 'Scrambled eggs with Iberian ham',
      'm.croquetas': 'Homemade stew croquettes (6 pieces)',
      'm.cecina': '"Cecina de León" with pistachio burrata, pesto and arugula',
      'm.ens1': '"El Perelló" pink tomato with burrata, pesto and arugula',
      'm.ens2': '"El Perelló" pink tomato with tuna belly and avocado',
      'm.tos1': 'Smoked sardine toast with tomato and lime zest',
      'm.tos2': 'Iberian ham toast with fresh foie gras and onion jam',
      'm.entrana': 'Grilled "entraña" (skirt steak) with chimichurri and baby potatoes',
      'm.abanico': 'Iberian "abanico" with potatoes, fried egg and Padrón peppers',
      'm.cachopo': 'Asturian "cachopo" with french fries and Piquillo peppers',
      'm.steak': 'Beef tenderloin steak tartar (200 g)',
      'm.lemonpie': 'Lemon pie',
      'm.coco': 'Coconut cake with sweet cream',
      'm.copa': 'Ice cream sundae (vanilla ice cream, whipped cream, walnuts, Frangelico and chocolate syrup)',
      'm.sorbete': 'Lemon sorbet with cava',
      'm.hlimon': 'Lemon ice cream',
      'm.hturron': 'Nougat ice cream',
      'm.hvainilla': 'Vanilla ice cream',
      'm.hdubai': 'Dubai chocolate ice cream',
      'm.hmoka': 'Mocha and mascarpone ice cream',

      // Almuerzos / Aperitivo / Grupos
      'cat.almuerzos.title': 'Breakfast & light lunch',
      'cat.almuerzos.intro': 'To start the day or mid-morning.',
      'cat.almuerzos.sub1': 'Breakfast',
      'cat.almuerzos.sub2': 'Light lunch',
      'alm.tostada.n': 'Toast + coffee',
      'alm.tostada.d': 'Choose: olive oil · tomato & oil · butter & jam.',
      'alm.mollete.n': 'Mollete toast + peanuts + drink + coffee',
      'alm.mollete.d': 'Choose your mollete: tuna, green pepper & anchovy olive · smoked salmon, avocado & poached egg · Iberian ham · cured cheese with tomato.',
      'alm.bocadillo.n': 'Sandwich + peanuts + drink + coffee',
      'alm.bocadillo.d': 'Choose: potato omelette · French omelette · pork loin with chips & green pepper · bacon & cheese · chicken breast · ham · cured cheese.',
      'cat.aperitivo.title': 'Aperitif hour',
      'cat.aperitivo.intro': 'Cold, well-poured and much needed. Each combo with a beer, €6.',
      'cat.aperitivo.note': 'With wine or vermouth, €2 extra.',
      'ap.bravas.n': 'Beer + patatas bravas',
      'ap.ensaladilla.n': 'Beer + Russian salad',
      'ap.queso.n': 'Beer + cured cheese',
      'ap.boqueron.n': 'Beer + crisps with fresh anchovy',
      'ap.mejillones.n': 'Beer + tin of mussels',
      'ap.berberechos.n': 'Beer + tin of cockles',
      'cat.grupos.title': 'Group menu',
      'cat.grupos.intro': 'Perfect for celebrations and company lunches.',
      'cat.grupos.incluye': 'Includes a welcome drink, one bottle of wine per 2 guests, coffee and a shot.',
      'gr.pan.n': 'Bread with tomato & aioli',
      'gr.bravas.n': 'Patatas bravas',
      'gr.tomate.n': 'Perelló pink tomato with burrata',
      'gr.croquetas.n': 'Ham croquettes',
      'gr.calamarcitos.n': 'Andalusian-style baby squid',
      'gr.entrecot.n': 'Sliced entrecôte',
      'gr.postres.n': 'Desserts',

      // --- Carta EN (platos/bebidas/vinos/alérgenos reescritos del Drive) ---
      'tx.clochinas': 'Valencian clóchinas (mussels) with green mojo, wine and lemon',
      'tx.pulpo': 'Grilled octopus with paprika mashed potato',
      'tx.calamarxl': 'XL grilled beach squid with green mojo and potatoes',
      'tx.burger': 'Angus burger with foie gras and caramelized onion',
      'tx.torreznos': 'Torreznos de Soria (crispy pork belly)',
      'tx.entrecot': 'Sliced entrecôte with potatoes and Padrón peppers',
      'tx.sh.refrescos': 'Soft drinks',
      'tx.sh.cervezas': 'Beers',
      'tx.sh.cafes': 'Coffees & teas',
      'tx.sh.licores': 'Liqueurs & spirits',
      'tx.cocacola': 'Coca-Cola zero / regular',
      'tx.fanta': 'Fanta orange / lemon',
      'tx.bitterkas': 'Bitter Kas (non-alcoholic)',
      'tx.tonica': 'Tonic · Tonic zero',
      'tx.agua': 'Still water · Sparkling water',
      'tx.zumo': 'Pineapple / peach juice',
      'tx.cana': 'Águila 1900 · small draught',
      'tx.doble': 'Águila 1900 · large draught',
      'tx.jarra': 'Beer stein',
      'tx.tercio': '33cl bottle.',
      'tx.cafesolo': 'Espresso',
      'tx.cafecortado': 'Cortado (espresso with a dash of milk)',
      'tx.cafeconleche': 'White coffee',
      'tx.cafebombon': 'Café bombón (espresso with condensed milk)',
      'tx.infusiones': 'Herbal teas',
      'tx.vermut': 'Vermouth (white / red)',
      'tx.licorhierbas': 'Herb liqueur',
      'tx.cremaorujo': 'Orujo cream liqueur',
      'tx.cremaarroz': 'Rice cream liqueur',
      'tx.sh.ginebras': 'Gins',
      'tx.sh.ron': 'Rum',
      'tx.sh.whisky': 'Whisky',
      'tx.digestivos.note': 'Digestifs in a balloon glass, over plenty of ice.',
      'tx.ginebras.mas': 'And a few more… just ask our team.',
      'tx.chupitos': 'Shots (assorted)',
      'tx.sh.tintos': 'Reds',
      'tx.sh.blancos': 'Whites · Rosés · Cavas',
      'tx.sh.copa': 'Wines by the glass',
      'tx.v.baigorri': 'D.O. Rioja · Tempranillo · 14 months in barrel.',
      'tx.v.valdehermoso': 'D.O. Ribera del Duero · Tinta del País · 18 months in barrel.',
      'tx.v.rodero': 'D.O. Ribera del Duero · Tinta fina · 9 months in barrel.',
      'tx.v.lia': 'D.O. Ribera del Duero · Tinta fina.',
      'tx.v.tarima': 'D.O. Alicante · Monastrell · 14 months in barrel.',
      'tx.v.bobal': 'D.O. Utiel-Requena · Bobal · 9 months in barrel.',
      'tx.v.venta': 'D.O. Valencia · Tempranillo, Cabernet, Merlot, Syrah · 12 months in barrel.',
      'tx.v.dominio': 'Cava · Brut nature · Macabeo.',
      'tx.liarosado': 'Lía rosé',
      'tx.valenciano': 'Valencian wine',
      'tx.al.gluten': 'Gluten',
      'tx.al.crustaceos': 'Crustaceans',
      'tx.al.huevos': 'Eggs',
      'tx.al.pescado': 'Fish',
      'tx.al.cacahuetes': 'Peanuts',
      'tx.al.soja': 'Soy',
      'tx.al.lacteos': 'Dairy',
      'tx.al.frutoscascara': 'Tree nuts',
      'tx.al.apio': 'Celery',
      'tx.al.mostaza': 'Mustard',
      'tx.al.sesamo': 'Sesame',
      'tx.al.sulfitos': 'Sulphites',
      'tx.al.altramuces': 'Lupin',
      'tx.al.moluscos': 'Molluscs',

      // Section heads + intros
      'cat.entrantes.title': 'Starters to share',
      'cat.entrantes.intro': 'To start, snack, toast.',
      'cat.ensaladas.title': 'Pink tomato salads from Perelló',
      'cat.ensaladas.intro': 'The sweetest tomato of the Mediterranean, at its best.',
      'cat.tostas.title': 'Our tostas (sourdough toasts)',
      'cat.tostas.intro': 'On sourdough bread, toasted to order.',
      'cat.mar.title': 'From the sea',
      'cat.mar.intro': 'Fresh fish and seafood selected daily.',
      'cat.carnes.title': 'Meats',
      'cat.carnes.intro': 'Grilled to perfection, selected produce.',
      'cat.degustacion.title': 'Tasting menu',
      'cat.degustacion.intro': 'Minimum 2 people.',
      'deg.p1': '1 · Arantxa-style patatas bravas',
      'deg.p2': '2 · Perelló pink tomato with tuna belly and avocado',
      'deg.p3': '3 · Andalusian-style baby squid',
      'deg.p4': '4 · Skirt steak with chimichurri and baby potatoes',
      'deg.extra': 'We open with bread, tomato and aioli, and finish with dessert and a house shot.',
      'cat.postres.title': 'Desserts',
      'cat.postres.intro': 'Made in-house every day.',
      'cat.bebidas.title': 'Drinks',
      'cat.bebidas.intro': 'Soft drinks, beers and coffees.',
      'tab.licores': 'Spirits',
      'cat.licores.title': 'Spirits & digestifs',
      'cat.licores.intro': 'Vermouths, liqueurs, spirits and digestifs in a balloon glass, over plenty of ice.',
      'cat.vinos.title': 'Wine cellar',
      'cat.vinos.intro': 'Selection of Spanish denominations of origin.',

      // Sugerencias + allergen
      'sugerencias.title': 'Today\'s suggestions',
      'sugerencias.desc': 'Each day we prepare off-menu dishes based on market produce. Ask our team.',
      'allergen.title': 'Allergen information',
      'allergen.desc': 'We hold information on the 14 major allergens. Please ask our staff about the allergens in each dish.',

      // Find us page hero
      'dondePage.tagline': 'Find us',
      'dondePage.h1': 'In the heart of <em>L\'Eixample</em>',
      'dondePage.sub': 'Carrer de Joaquín Costa, 50 · 46005 València · 5 minutes from Mercado de Colón and Estación del Norte.',

      // Find us contact + hours
      'map.loading': 'Loading map…',
      'contact.address': 'Address',
      'contact.waphone': 'WhatsApp / Phone',
      'contact.phonewa': 'Phone · WhatsApp',
      'contact.subtitle': 'Book online or call us.',
      'contact.email': 'Email',
      'contact.hours': 'Opening hours',
      'day.sun': 'Sunday', 'day.mon': 'Monday', 'day.tue': 'Tuesday',
      'day.wed': 'Wednesday', 'day.thu': 'Thursday', 'day.fri': 'Friday',
      'day.sat': 'Saturday', 'day.closed': 'Closed',
      'hours.midday': 'Midday Monday to Friday: open by prior reservation only. Message us on WhatsApp.',

      // How to get there
      'how.eyebrow': 'How to get there',
      'how.title': 'Well-connected',
      'how.sub': 'We are in L\'Eixample, next to Gran Via Marqués del Túria and minutes from Estación del Norte.',
      'how.metro.title': 'Metro',
      'how.metro.desc': '<strong>Xàtiva</strong> (L3, L5, L7, L9) — 5 min walk.<br><strong>Colón</strong> (L3, L5, L7, L9) — 7 min.',
      'how.bus.title': 'EMT Bus',
      'how.bus.desc': 'Lines <strong>10, 13, 27 & 89</strong> with stops less than 5 min away on Gran Via Marqués del Túria.',
      'how.walk.title': 'On foot',
      'how.walk.desc': '10 min from <strong>Mercado de Colón</strong>.<br>12 min from <strong>Plaza del Ayuntamiento</strong>.',
      'how.car.title': 'By car',
      'how.car.desc': 'Park at <strong>Mercado de Colón</strong> or <strong>Colón 60</strong>, both about a 5-min walk. On Joaquín Costa itself: <strong>blue (ORA) and white zones</strong>.',

      // Parking
      'park.eyebrow': 'Parking',
      'park.title': 'Where to park',
      'park.1.title': 'Aparcamiento Norte Estación',
      'park.1.desc': 'C/ Xàtiva (next to the station). 5 minutes on foot.',
      'park.2.title': 'Aparcamiento Bailén',
      'park.2.desc': 'C/ Bailén, opposite the station. 4 minutes on foot.',
      'park.3.title': 'Aparcamiento Mercado de Colón',
      'park.3.desc': 'Under the modernist market. 8 minutes on foot.',
      'park.4.title': 'ORA blue zone',
      'park.4.desc': 'Regulated street parking on Joaquín Costa and surrounding streets.',
      'park.note': 'If you\'re driving, we recommend calling ahead to check availability.',
      'park.cta': 'Open in Google Maps',

      // Index — menu teaser (5 dishes)
      'teaser.micuit.name': 'House mi-cuit foie',
      'teaser.micuit.desc': 'House-made, with toasted bread and fruit compote. Smooth and indulgent.',
      'teaser.tomate.name': 'Pink tomato with burrata',
      'teaser.tomate.desc': 'Pink tomato from Perelló with burrata, pesto and rocket. A seasonal gem.',
      'teaser.alcachofas.name': 'Slow-cooked artichokes',
      'teaser.alcachofas.desc': 'With Iberian ham and quail eggs. Fresh produce from the garden.',
      'teaser.cecina.name': 'Cecina de León with burrata',
      'teaser.cecina.desc': 'With pistachio burrata, pesto and arugula.',
      'teaser.jamon.name': 'Iberian ham',
      'teaser.jamon.desc': 'Hand-carved. Served on a mixed platter with cured cheese.',
      'teaser.entrecot.name': 'Sliced entrecôte',
      'teaser.entrecot.desc': 'Grilled and sliced, with potatoes and Padrón peppers.',
      'teaser.tag.entrantes': 'Starters',
      'teaser.tag.ensaladas': 'Salads',
      'teaser.tag.verduras': 'Vegetables',
      'teaser.tag.carnes': 'Meats',

      // ─── Dish names + descriptions (auto-generated from carta.html) ───
      'd.1-pan-con-tomate-y-alioli.n': '1 · Bread with tomato & alioli',
      'd.2-patatas-bravas-estilo-arantxa.n': '2 · Bravas potatoes, Arantxa style',
      'd.200-g-preparacion-clasica-al-momento.d': '200 g, classic preparation, prepared to order.',
      'd.3-tomate-rosa-del-perello-con-ventresca-y-aguacate.n': '3 · Pink tomato from Perelló with tuna belly & avocado',
      'd.300-g-a-la-brasa-en-su-punto.d': '300 g, grilled to perfection.',
      'd.4-calamarcitos-a-la-andaluza.n': '4 · Andalusian-style baby squid',
      'd.5-entrana-con-chimichurri-y-papitas-baby.n': '5 · Skirt steak with chimichurri & baby potatoes',
      'd.6-postre-del-dia.n': '6 · Dessert of the day',
      'd.7-chupito-de-la-casa.n': '7 · House liqueur shot',
      'd.agua-lanjaron-agua-con-gas.n': 'Still water · Sparkling water',
      'd.aguila-1900-doble-barril.n': 'Águila 1900 doble · on tap',
      'd.alcachofas-a-baja-temperatura.n': 'Slow-cooked artichokes',
      'd.amstel-heineken-la-rubia-radler.n': 'Amstel · Heineken · La rubia · Radler',
      'd.amstel-oro-amstel-oro-0-0.n': 'Amstel Oro · Amstel Oro 0.0',
      'd.aperol-spritz.n': 'Aperol Spritz',
      'd.aquarius.n': 'Aquarius',
      'd.baigorri-crianza.n': 'Baigorri Crianza',
      'd.ballantine-s.n': 'Ballantine\'s',
      'd.barcelo.n': 'Barceló',
      'd.beefeater.n': 'Beefeater',
      'd.bitter-kas-sin-alcohol.n': 'Bitter Kas (non-alcoholic)',
      'd.bobal-en-calma.n': 'Bobal en Calma',
      'd.bocabadat.n': 'Bocabadat',
      'd.brugal.n': 'Brugal',
      'd.cachopo-asturiano.n': 'Asturian cachopo',
      'd.cafe-con-leche.n': 'Café au lait',
      'd.cafe-cortado.n': 'Cortado',
      'd.cafe-solo.n': 'Espresso',
      'd.calamarcitos-a-la-andaluza.n': 'Andalusian-style baby squid',
      'd.capas-de-coco-rallado-y-dulce-de-leche.d': 'Layers of grated coconut and dulce de leche.',
      'd.carajillo.n': 'Carajillo (spiked coffee)',
      'd.carmelo-rodero-9-meses.n': 'Carmelo Rodero 9 months',
      'd.carpaccio-de-lomo-de-vaca.n': 'Beef carpaccio',
      'd.carpaccio-de-salmon-ahumado.n': 'Smoked salmon carpaccio',
      'd.carrilleras-de-cerdo-en-salsa.n': 'Pork cheeks in sauce',
      'd.cava-brut-nature-macabeo.d': 'Cava · Brut Nature · Macabeo.',
      'd.chuleton-de-cerdo-gallego-madurado-21-dias.n': 'Galician pork chop, 21-day aged',
      'd.chupitos-varios.n': 'Shots (various)',
      'd.coca-cola-zero-normal.n': 'Coca-Cola Zero / Classic',
      'd.con-mahonesa-de-soja-alcaparras-y-cebolla-tierna.d': 'With soy mayo, capers and tender onion.',
      'd.con-nata-nueces-frangelico-y-sirope-de-chocolate.d': 'With cream, walnuts, Frangelico and chocolate syrup.',
      'd.con-tomate-y-ralladura-de-lima.d': 'With tomato and lime zest.',
      'd.copa-de-helado-de-vainilla.n': 'Vanilla ice-cream sundae',
      'd.cortado-a-cuchillo-con-pan-de-cristal-y-tomate.d': 'Hand-carved, with cristal bread and tomato.',
      'd.crema-de-arroz.n': 'Rice cream',
      'd.crema-de-orujo.n': 'Orujo cream',
      'd.cremaet.n': 'Cremaet',
      'd.cremosa-al-horno-sin-base-estilo-la-vina.d': 'Creamy, baked, crustless. La Viña style.',
      'd.cutty-sark.n': 'Cutty Sark',
      'd.d-o-alicante-macabeo.d': 'D.O. Alicante · Macabeo.',
      'd.d-o-alicante-monastrell-14-meses-barrica.d': 'D.O. Alicante · Monastrell · 14 months in oak.',
      'd.d-o-monterrei-godello-treixadura.d': 'D.O. Monterrei · Godello, Treixadura.',
      'd.d-o-monterrei.d': 'D.O. Monterrei.',
      'd.d-o-ribera-del-duero-tinta-del-pais-18-meses.d': 'D.O. Ribera del Duero · Tinta del País · 18 months.',
      'd.d-o-ribera-del-duero-tinta-fina-9-meses.d': 'D.O. Ribera del Duero · Tinta fina · 9 months.',
      'd.d-o-ribera-del-duero-tinta-fina.d': 'D.O. Ribera del Duero · Tinta fina.',
      'd.d-o-ribera-del-duero.n': 'D.O. Ribera del Duero',
      'd.d-o-rioja-tempranillo-14-meses-barrica.d': 'D.O. Rioja · Tempranillo · 14 months in oak.',
      'd.d-o-rioja.n': 'D.O. Rioja',
      'd.d-o-rueda-verdejo.d': 'D.O. Rueda · Verdejo.',
      'd.d-o-rueda-verdejo.n': 'D.O. Rueda Verdejo',
      'd.d-o-utiel-requena-bobal-9-meses-barrica.d': 'D.O. Utiel-Requena · Bobal · 9 months in oak.',
      'd.d.0a413c6ca6': 'Slow-braised for hours, tender, in their own sauce.',
      'd.d.1490f1002b': 'Filled with ham and cheese, with chips and piquillo peppers.',
      'd.d.2c32a64d4e': 'House-made, with toasted bread and fruit compote.',
      'd.d.365834d5d6': 'D.O. Valencia · Tempranillo, Cabernet, Merlot, Syrah · 12 months.',
      'd.d.4ae7faefc3': 'Cheesemonger\'s selection, with quince paste and nuts.',
      'd.d.4f8fe6a2e1': 'With melted raclette and white truffle & mushroom sauce.',
      'd.d.5a077f3bbd': 'Bonito belly in extra virgin olive oil and ripe avocado.',
      'd.d.9286b6315b': 'Pan-seared fresh foie and caramelised onion jam.',
      'd.d.b1165e641d': 'Fresh burrata, house pesto and rocket over Perelló tomato.',
      'd.d.be7f2047f8': 'Avocado, truffle, mustard, pasteurised yolk, soy and sesame.',
      'd.d.dc4413f4ec': 'With Iberian ham and quail eggs. Fresh produce from the garden.',
      'd.d.e503b10df3': 'In an earthen pot, with chilli and extra virgin olive oil.',
      'd.d.ef137f56ce': 'Sliced mushrooms, parmesan, white truffle and rocket.',
      'd.d.f5752ee88f': 'Small squid in a light batter, served with lemon.',
      'd.d.f69c22eb7b': 'Argentine skirt steak, house chimichurri and crispy baby potatoes.',
      'd.d.fce890eb8f': 'Crispy outside, soft inside, with our signature brava sauce.',
      'd.dominio-de-la-vega-vintage.n': 'Dominio de la Vega Vintage',
      'd.entrana-a-la-plancha-con-chimichurri.n': 'Grilled skirt steak with chimichurri',
      'd.excellens-cuvee-crianza.n': 'Excellens Cuvée Crianza',
      'd.excellens-verdejo.n': 'Excellens Verdejo',
      'd.fanta-de-naranja-limon.n': 'Orange / Lemon Fanta',
      'd.gambitas-al-ajillo.n': 'Garlic prawns',
      'd.havana-7.n': 'Havana 7',
      'd.helado-de-limon.n': 'Lemon ice cream',
      'd.helado-de-turron.n': 'Nougat ice cream',
      'd.helado-de-vainilla.n': 'Vanilla ice cream',
      'd.infusiones.n': 'Herbal teas',
      'd.javier-sanz-verdejo.n': 'Javier Sanz Verdejo',
      'd.johnnie-walker.n': 'Johnnie Walker',
      'd.lemon-pie.n': 'Lemon pie',
      'd.lia.n': 'Lía',
      'd.licor-de-hierbas.n': 'Herb liqueur',
      'd.limoncello.n': 'Limoncello',
      'd.martin-miller-s.n': 'Martin Miller\'s',
      'd.mi-cuit-de-foie-casero.n': 'House mi-cuit foie',
      'd.n-12.n': 'N 12',
      'd.nordes.n': 'Nordés',
      'd.patatas-bravas-estilo-arantxa.n': 'Bravas potatoes, Arantxa style',
      'd.puerto-de-indias.n': 'Puerto de Indias',
      'd.refresca-y-rebaja-el-final-del-menu.d': 'Refreshes the end of the meal.',
      'd.rosado-de-la-casa.n': 'House rosé',
      'd.sorbete-de-limon-al-cava.n': 'Lemon & cava sorbet',
      'd.steak-tartar-de-solomillo-de-ternera.n': 'Beef tenderloin steak tartare',
      'd.tabla-de-jamon-iberico.n': 'Iberian ham platter',
      'd.tabla-de-quesos-variados.n': 'Selection of cheeses',
      'd.tarima-hill.n': 'Tarima Hill',
      'd.tarta-de-coco-con-dulce-de-leche.n': 'Coconut & dulce de leche tart',
      'd.tarta-de-limon-con-merengue-tostado.d': 'Lemon tart with toasted meringue.',
      'd.tarta-de-queso.n': 'Cheesecake',
      'd.tartar-de-atun.n': 'Tuna tartare',
      'd.tartar-de-salmon.n': 'Salmon tartare',
      'd.tataky-de-lomo-bajo.n': 'Striploin tataki',
      'd.te.n': 'Tea',
      'd.tercio.d': '33 cl bottle.',
      'd.tomate-rosa-con-burrata-pesto-y-rucula.n': 'Pink tomato with burrata, pesto & rocket',
      'd.tomate-rosa-con-ventresca-y-aguacate.n': 'Pink tomato with tuna belly & avocado',
      'd.tonica-tonica-zero.n': 'Tonic · Tonic zero',
      'd.tosta-de-jamon-iberico-con-foie-fresco.n': 'Iberian ham tosta with fresh foie',
      'd.tosta-de-sardina-ahumada.n': 'Smoked sardine tosta',
      'd.triay.n': 'Triay',
      'd.valdehermoso-crianza.n': 'Valdehermoso Crianza',
      'd.venta-del-puerto-n-12.n': 'Venta del Puerto No.12',
      'd.vermut-blanco-tinto.n': 'Vermouth white / red',
      'd.vino-valenciano.n': 'Valencian wine',
      'd.zumo-de-pina-melocoton.n': 'Pineapple / peach juice'
    }
  };

  const HTML_KEYS = new Set([
    'hero.title', 'cocido.title', 'reservar.h1',
    'cartaPage.h1', 'dondePage.h1', 'cocidoStrip.title',
    'how.metro.desc', 'how.bus.desc', 'how.walk.desc', 'how.car.desc'
  ]);

  function getInitialLang() {
    // Prioridad: ?lang=… en la URL > elección guardada del usuario > español por defecto.
    // No autodetectamos navigator.language porque el restaurante es valenciano y la
    // versión "fuente" es ES; la EN está pensada como opción manual para turistas.
    const url = new URLSearchParams(location.search).get('lang');
    if (url && I18N[url]) return url;
    const saved = localStorage.getItem('arantxa.lang');
    if (saved && I18N[saved]) return saved;
    return 'es';
  }

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (HTML_KEYS.has(key)) {
        el.innerHTML = dict[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.title = dict[key];
    });
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    localStorage.setItem('arantxa.lang', lang);
    updateStatusFloat(lang);
    syncConsentUI();
  }

  // ---------- NAV ----------
  function setupNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById('burger');
    const links = nav.querySelector('.nav-links');
    if (burger && links) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
          burger.classList.remove('open');
          links.classList.remove('open');
        })
      );
    }
  }

  // ---------- LANG SWITCH ----------
  function setupLang() {
    const initial = getInitialLang();
    applyI18n(initial);
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => applyI18n(btn.dataset.lang));
    });
  }

  // ---------- REVEAL ON SCROLL ----------
  function setupReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
  }

  // ---------- MAP LAZY ----------
  // ---------- MAP (condicionado al consentimiento de Google Maps) ----------
  const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.7234!2d-0.3681318!3d39.4640740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0d6049e8f947fa4b%3A0xd283f5239c1b8ba6!2sRestaurante%20Arantxa!5e0!3m2!1ses!2ses!4v1700000000000';
  const mapWraps = [];

  function renderMap(wrap) {
    if (!wrap) return;
    const L = COOKIE_LABELS[consentLang()];
    if (getConsent() === 'all') {
      if (wrap.classList.contains('map-loaded')) return;
      wrap.innerHTML = '<iframe src="' + MAP_URL + '" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Restaurante Arantxa"></iframe>';
      wrap.classList.add('map-loaded', 'loaded');
    } else {
      wrap.classList.remove('map-loaded', 'loaded');
      wrap.innerHTML =
        '<div class="map-consent" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;height:100%;min-height:280px;padding:28px;text-align:center;color:var(--muted)">' +
          '<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style="opacity:.6"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>' +
          '<strong style="color:var(--cream,#f5ede0)">' + L.mapTitle + '</strong>' +
          '<span style="font-size:.9rem;max-width:340px">' + L.mapText + '</span>' +
          '<button type="button" class="btn btn-primary" data-map-load style="margin-top:6px">' + L.mapBtn + '</button>' +
        '</div>';
      const btn = wrap.querySelector('[data-map-load]');
      if (btn) btn.addEventListener('click', () => {
        localStorage.setItem('arantxa.consent', 'all');
        renderMap(wrap);
      });
    }
  }
  function refreshMaps() { mapWraps.forEach(renderMap); }

  function setupMap(id) {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    if (mapWraps.indexOf(wrap) === -1) mapWraps.push(wrap);
    renderMap(wrap);
  }

  // ---------- CARTA TABS (carta.html) ----------
  function setupTabs() {
    const tabs = document.querySelectorAll('.carta-tabs button');
    if (!tabs.length) return;
    const panels = document.querySelectorAll('.carta-panel');
    function activate(tabId) {
      tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
      panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + tabId));
      const url = new URL(location.href);
      url.searchParams.set('tab', tabId);
      history.replaceState(null, '', url);
    }
    tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.tab)));
    const urlTab = new URLSearchParams(location.search).get('tab');
    if (urlTab && document.getElementById('panel-' + urlTab)) activate(urlTab);
  }

  // ---------- MODALS ----------
  function setupModals() {
    document.querySelectorAll('[data-modal-open]').forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const m = document.getElementById(trigger.dataset.modalOpen);
        if (m) m.classList.add('open');
      });
    });
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal || e.target.matches('[data-modal-close]')) {
          modal.classList.remove('open');
        }
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    });
    // Apertura directa por hash (enlaces legales desde otras páginas): #legal, #privacy, #cookies
    const hashMap = { '#legal': 'modalLegal', '#privacy': 'modalPrivacy', '#cookies': 'modalCookies' };
    const target = hashMap[location.hash];
    if (target) {
      const m = document.getElementById(target);
      if (m) m.classList.add('open');
    }
  }

  // ---------- CONSENTIMIENTO DE COOKIES ----------
  // Modelo: localStorage 'arantxa.consent' = 'all' (necesarias + Google Maps)
  // | 'necessary' (solo necesarias, sin Maps) | null (sin decidir).
  const COOKIE_LABELS = {
    es: {
      text: 'Usamos cookies necesarias para que el sitio funcione y, si lo aceptas, cookies de Google Maps para mostrar el mapa. No usamos cookies de marketing.',
      accept: 'Aceptar todo',
      necessary: 'Solo necesarias',
      policy: 'Más info',
      mapTitle: 'Mapa desactivado',
      mapText: 'Para mostrar el mapa cargamos Google Maps, que instala cookies propias. Actívalo si quieres verlo.',
      mapBtn: 'Cargar mapa'
    },
    en: {
      text: 'We use necessary cookies for the site to work and, if you accept, Google Maps cookies to show the map. We use no marketing cookies.',
      accept: 'Accept all',
      necessary: 'Necessary only',
      policy: 'More info',
      mapTitle: 'Map disabled',
      mapText: 'To show the map we load Google Maps, which sets its own cookies. Enable it if you want to see it.',
      mapBtn: 'Load map'
    }
  };

  function consentLang() { return localStorage.getItem('arantxa.lang') === 'en' ? 'en' : 'es'; }
  function getConsent() { return localStorage.getItem('arantxa.consent'); }

  let cookieBanner = null;
  function buildCookieBanner() {
    const L = COOKIE_LABELS[consentLang()];
    let el = document.getElementById('cookies');
    if (!el) { el = document.createElement('div'); el.id = 'cookies'; el.className = 'cookies'; document.body.appendChild(el); }
    const wasShown = el.classList.contains('show');
    el.innerHTML =
      '<p>' + L.text + ' <a href="#" class="cookie-policy-link" style="color:inherit;text-decoration:underline">' + L.policy + '</a></p>' +
      '<div class="cookies-actions">' +
        '<button type="button" class="reject" data-consent="necessary">' + L.necessary + '</button>' +
        '<button type="button" class="accept" data-consent="all">' + L.accept + '</button>' +
      '</div>';
    el.querySelectorAll('button[data-consent]').forEach(b => b.addEventListener('click', () => {
      localStorage.setItem('arantxa.consent', b.dataset.consent);
      el.classList.remove('show');
      refreshMaps();
    }));
    const policyLink = el.querySelector('.cookie-policy-link');
    if (policyLink) policyLink.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.getElementById('modalCookies');
      if (modal) modal.classList.add('open');
      else location.href = 'index.html#cookies';
    });
    if (wasShown) el.classList.add('show');
    cookieBanner = el;
  }

  function showCookieBanner() { if (!cookieBanner) buildCookieBanner(); setTimeout(() => cookieBanner.classList.add('show'), 40); }
  function syncConsentUI() { if (cookieBanner) buildCookieBanner(); refreshMaps(); }

  function setupConsent() {
    buildCookieBanner();
    if (!getConsent()) setTimeout(() => cookieBanner.classList.add('show'), 800);
    document.querySelectorAll('[data-cookie-manage]').forEach(a =>
      a.addEventListener('click', e => { e.preventDefault(); showCookieBanner(); }));
  }

  // ---------- FORM ANTI-SPAM ----------
  function setupForms() {
    document.querySelectorAll('form[data-antispam]').forEach(form => {
      const start = Date.now();
      form.addEventListener('submit', e => {
        e.preventDefault();
        const hp = form.querySelector('input[name="website"]');
        if (hp && hp.value) return;
        if (Date.now() - start < 3000) return;
        // Build mailto fallback (no backend yet)
        const name = form.querySelector('[name="name"]')?.value || '';
        const email = form.querySelector('[name="email"]')?.value || '';
        const phone = form.querySelector('[name="phone"]')?.value || '';
        const msg = form.querySelector('[name="message"]')?.value || '';
        const waText = encodeURIComponent(
          'Hola, consulta desde la web de Arantxa.\nNombre: ' + name +
          (phone ? '\nTeléfono: ' + phone : '') +
          (email ? '\nEmail: ' + email : '') +
          '\n\n' + msg
        );
        const out = form.querySelector('.form-msg');
        if (out) {
          out.className = 'form-msg ok';
          out.textContent = 'Abriendo WhatsApp para enviarnos tu consulta…';
        }
        window.open('https://wa.me/34663209793?text=' + waText, '_blank', 'noopener');
      });
    });
  }

  // ---------- INLINE CALENDAR (custom) ----------
  function setupCalendar(hiddenInput, today, onChange) {
    const trigger = document.getElementById('dateTrigger');
    const trigText = trigger && trigger.querySelector('.date-trigger-text');
    const cal = document.getElementById('dateCal');
    const grid = document.getElementById('calGrid');
    const monthLabel = document.getElementById('calMonthLabel');
    const prevBtn = document.getElementById('calPrev');
    const nextBtn = document.getElementById('calNext');
    if (!trigger || !cal || !grid) return;

    const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const DAYS_FULL = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    const pad = n => String(n).padStart(2, '0');
    const fmtISO = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

    let view = new Date(today.getFullYear(), today.getMonth(), 1);
    let selected = null;
    const firstViewable = new Date(today.getFullYear(), today.getMonth(), 1);

    function sameDay(a, b) {
      return a.getFullYear() === b.getFullYear()
          && a.getMonth() === b.getMonth()
          && a.getDate() === b.getDate();
    }

    function render() {
      monthLabel.textContent = `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;
      grid.innerHTML = '';

      const firstOfMonth = new Date(view.getFullYear(), view.getMonth(), 1);
      // Week starts Monday — shift Sun=0..Sat=6 to Mon=0..Sun=6
      const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
      const start = new Date(firstOfMonth);
      start.setDate(start.getDate() - firstWeekday);

      for (let i = 0; i < 42; i++) {
        const day = new Date(start);
        day.setDate(start.getDate() + i);

        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'cal-day';
        cell.textContent = day.getDate();

        const dow = day.getDay(); // 0=Sun, 1=Mon
        const isPast = day < today;
        const isSunday = dow === 0;
        const isOtherMonth = day.getMonth() !== view.getMonth();

        if (isOtherMonth) cell.classList.add('other-month');
        if (sameDay(day, today)) cell.classList.add('today');
        if (selected && sameDay(day, selected)) cell.classList.add('selected');
        if (isPast || isSunday) {
          cell.classList.add('disabled');
          cell.disabled = true;
          if (isSunday) cell.title = 'Cerrado los domingos';
        } else {
          cell.addEventListener('click', () => choose(day));
        }
        grid.appendChild(cell);
      }

      // Prev/next month boundaries
      prevBtn.disabled = view.getFullYear() === firstViewable.getFullYear()
                      && view.getMonth() === firstViewable.getMonth();
    }

    function choose(d) {
      selected = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      hiddenInput.value = fmtISO(selected);
      trigText.textContent = `${DAYS_FULL[selected.getDay()]}, ${selected.getDate()} de ${MONTHS[selected.getMonth()]} de ${selected.getFullYear()}`;
      trigger.classList.remove('placeholder');
      closeCal();
      if (typeof onChange === 'function') onChange();
    }

    function openCal() {
      cal.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      trigger.classList.add('open');
      render();
    }
    function closeCal() {
      cal.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      trigger.classList.remove('open');
    }

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      if (cal.hidden) openCal(); else closeCal();
    });
    prevBtn.addEventListener('click', e => {
      e.stopPropagation();
      view = new Date(view.getFullYear(), view.getMonth() - 1, 1);
      if (view < firstViewable) view = new Date(firstViewable);
      render();
    });
    nextBtn.addEventListener('click', e => {
      e.stopPropagation();
      view = new Date(view.getFullYear(), view.getMonth() + 1, 1);
      render();
    });
    cal.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', () => closeCal());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCal(); });

    // initial render so the grid is ready when opened
    render();

    // Expose a programmatic setter so callers can prefill (e.g. ?cocido=1)
    return {
      setDate(d) {
        // Move view to the month of d and select it (only if it's a valid open day)
        if (!d) return;
        view = new Date(d.getFullYear(), d.getMonth(), 1);
        choose(d);
      }
    };
  }

  // ---------- RESERVATION FORM ----------
  function setupReservationForm() {
    const form = document.getElementById('reservaForm');
    if (!form) return;

    const dateInput = document.getElementById('r-date');
    const dateHint = document.getElementById('dateHint');
    const timeRow = document.getElementById('timeRow');
    const timeSelect = document.getElementById('r-time');
    const timeHint = document.getElementById('timeHint');
    const menuRadios = form.querySelectorAll('input[name="menu"]');

    // Service hours model: comida y cena por día.
    // Último slot ~1 h antes del cierre para garantizar servicio.
    // Cena entre semana: 19:00–00:30 (último slot ~1 h antes del cierre).
    const DINNER = ['19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30'];
    const SHIFTS = {
      0: null,                       // domingo (cerrado)
      1: { dinner: DINNER },         // lunes     19:00–00:30
      2: { dinner: DINNER },         // martes    19:00–00:30
      3: { dinner: DINNER },         // miércoles 19:00–00:30
      4: { dinner: DINNER },         // jueves    19:00–00:30
      5: { dinner: DINNER },         // viernes   19:00–00:30
      6: { lunch: ['13:00','13:30','14:00','14:30','15:00','15:30','16:00'],
           dinner: ['19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00'] } // sábado 13–17 · 19–24
    };
    const DAY_NAMES = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

    // Fecha mínima: hoy (a medianoche local)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const pad = n => String(n).padStart(2, '0');
    const fmtISO = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

    // Custom inline calendar — Mondays disabled, brand styled
    const calendar = setupCalendar(dateInput, today, () => onDateChange());


    function buildTimeOptions(dayIdx) {
      timeSelect.innerHTML = '<option value="">— Elige hora —</option>';
      const shifts = SHIFTS[dayIdx];
      if (!shifts) return;
      function addGroup(label, slots) {
        if (!slots || !slots.length) return;
        const og = document.createElement('optgroup');
        og.label = label;
        slots.forEach(t => {
          const o = document.createElement('option');
          o.value = t; o.textContent = t;
          og.appendChild(o);
        });
        timeSelect.appendChild(og);
      }
      addGroup('Comida', shifts.lunch);
      addGroup('Cena', shifts.dinner);
    }

    function onDateChange() {
      if (!dateInput.value) return;
      const [y, m, d] = dateInput.value.split('-').map(Number);
      const date = new Date(y, m - 1, d);
      const dayIdx = date.getDay();

      // Calendario ya bloquea los domingos, así que aquí no debería entrar.
      // Fallback defensivo por si el input es nativo (sin Flatpickr/cal).
      if (dayIdx === 0) {
        date.setDate(date.getDate() + 1);
        dateInput.value = fmtISO(date);
        return onDateChange();
      }
      dateHint.textContent = '';
      dateHint.className = 'form-hint';

      buildTimeOptions(dayIdx);
      timeRow.style.display = '';
      timeSelect.required = true;

      // Mediodía de lunes a viernes: solo con reserva previa por WhatsApp.
      timeHint.textContent = (dayIdx >= 1 && dayIdx <= 5)
        ? 'Mediodía de lunes a viernes: solo con reserva previa. Escríbenos directamente por WhatsApp.'
        : '';

    }

    dateInput.addEventListener('change', onDateChange);
    dateInput.addEventListener('input', onDateChange);

    // Marcar visualmente la tarjeta de menú seleccionada (radios: A la carta / degustación / grupal).
    // La exclusividad la garantiza el propio grupo de radios (name="menu").
    function syncMenuCards() {
      menuRadios.forEach(r => {
        const card = r.closest('.checkbox-card');
        if (card) card.classList.toggle('checked', r.checked);
      });
    }
    menuRadios.forEach(r => r.addEventListener('change', syncMenuCards));
    syncMenuCards();

    // SUBMIT: construir mensaje y abrir WhatsApp
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Validación básica
      if (!dateInput.value) return;
      const [y, m, d] = dateInput.value.split('-').map(Number);
      const date = new Date(y, m - 1, d);
      const dayIdx = date.getDay();
      if (dayIdx === 0) return;
      if (!form.guests.value) { form.guests.focus(); return; }
      if (!form.time.value) { form.time.focus(); return; }
      const nameVal = form.name.value.trim();
      const nameHint = document.getElementById('nameHint');
      if (nameVal.split(/\s+/).filter(Boolean).length < 2) {
        if (nameHint) {
          const lang = localStorage.getItem('arantxa.lang') === 'en' ? 'en' : 'es';
          nameHint.textContent = (I18N[lang] && I18N[lang]['form.name.error'])
            || 'Indica nombre y apellido (mínimo dos palabras).';
          nameHint.className = 'form-hint error';
        }
        form.name.focus();
        return;
      }
      if (nameHint) { nameHint.textContent = ''; nameHint.className = 'form-hint'; }

      const fechaStr = `${DAY_NAMES[dayIdx]}, ${date.getDate()} de ${MONTH_NAMES[date.getMonth()]} de ${date.getFullYear()}`;
      const guests = form.guests.value === 'grupo'
        ? 'Grupo de más de 10 personas'
        : `${form.guests.value} ${form.guests.value === '1' ? 'persona' : 'personas'}`;

      // Versiones en inglés (para mensaje bilingüe cuando el idioma activo es EN)
      const DAY_NAMES_EN = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const MONTH_NAMES_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const fechaStrEn = `${DAY_NAMES_EN[dayIdx]}, ${date.getDate()} ${MONTH_NAMES_EN[date.getMonth()]} ${date.getFullYear()}`;
      const guestsEn = form.guests.value === 'grupo'
        ? 'Group of more than 10 people'
        : `${form.guests.value} ${form.guests.value === '1' ? 'guest' : 'guests'}`;

      const isEn = (document.documentElement.lang === 'en')
                || (localStorage.getItem('arantxa.lang') === 'en');
      // Helper: si EN, devuelve "ES / EN"; si ES, sólo ES.
      const bi = (es, en) => isEn ? `${es} / ${en}` : es;

      // Sin emojis: el muro de transmisión wa.me los rompía. Uso *bold* y
      // separadores que llegan bien en cualquier cliente.
      const SEP = '────────────────────';
      const lines = [];
      lines.push(bi('Hola, me gustaría reservar mesa en Arantxa.',
                    'Hi, I\'d like to book a table at Arantxa.'));
      lines.push('');
      lines.push(bi(`*Fecha:* ${fechaStr}`,       `*Date:* ${fechaStrEn}`));
      lines.push(bi(`*Hora:* ${form.time.value}`, `*Time:* ${form.time.value}`));
      lines.push(bi(`*Comensales:* ${guests}`,    `*Guests:* ${guestsEn}`));

      const menu = (form.menu && form.menu.value) || 'carta';
      lines.push('');
      if (menu === 'degustacion') {
        lines.push(bi('*Menú:* Menú degustación (27,90 €/pax) — para toda la mesa',
                      '*Menu:* Tasting menu (€27.90/pax) — for the whole table'));
      } else if (menu === 'grupal') {
        lines.push(bi('*Menú:* Menú grupal (40 €/pax) — para toda la mesa',
                      '*Menu:* Group menu (€40/pax) — for the whole table'));
      } else {
        lines.push(bi('*Menú:* A la carta', '*Menu:* À la carte'));
      }

      const allergies = form.allergies.value.trim();
      if (allergies) {
        lines.push('');
        lines.push(bi('*Alergias / intolerancias:*', '*Allergies / intolerances:*'));
        lines.push(allergies);
      }

      const comments = form.comments.value.trim();
      if (comments) {
        lines.push('');
        lines.push(bi('*Comentarios:*', '*Comments:*'));
        lines.push(comments);
      }

      lines.push('');
      lines.push(SEP);
      lines.push(bi(`*A nombre de:* ${form.name.value.trim()}`,
                    `*Under the name of:* ${form.name.value.trim()}`));
      lines.push('');
      lines.push(bi('¡Gracias!', 'Thanks!'));

      const msg = encodeURIComponent(lines.join('\n'));
      window.open(`https://wa.me/34663209793?text=${msg}`, '_blank', 'noopener');
    });

  }

  // ---------- HOURS: mark today ----------
  function setupHoursToday() {
    const table = document.querySelector('.hours-table');
    if (!table) return;
    const todayIdx = new Date().getDay(); // 0 dom .. 6 sab
    const orderToWeekday = { 0: 'dom', 1: 'lun', 2: 'mar', 3: 'mie', 4: 'jue', 5: 'vie', 6: 'sab' };
    const todayKey = orderToWeekday[todayIdx];
    const row = table.querySelector('tr[data-day="' + todayKey + '"]');
    if (row) row.classList.add('today');
  }

  // ---------- STATUS FLOAT: abierto / cerrado ----------
  // Horario en minutos desde medianoche. getDay(): 0 dom .. 6 sáb.
  // Minutos desde medianoche. Un cierre > 1440 indica que el tramo cruza
  // medianoche (p. ej. 1470 = 00:30 del día siguiente).
  const OPEN_HOURS = {
    0: [],                            // Domingo   cerrado
    1: [[1140, 1470]],                // Lunes     19:00–00:30
    2: [[1140, 1470]],                // Martes    19:00–00:30
    3: [[1140, 1470]],                // Miércoles 19:00–00:30
    4: [[1140, 1470]],                // Jueves    19:00–00:30
    5: [[1140, 1470]],                // Viernes   19:00–00:30
    6: [[780, 1020], [1140, 1440]]    // Sábado    13:00–17:00 · 19:00–24:00
  };

  const STATUS_LABELS = {
    es: {
      open: 'Abierto', soon: 'Cierra pronto', closed: 'Cerrado',
      closesAt: 'cierra', opensAt: 'abre', tomorrow: 'mañana',
      days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
    },
    en: {
      open: 'Open now', soon: 'Closing soon', closed: 'Closed',
      closesAt: 'closes', opensAt: 'opens', tomorrow: 'tomorrow',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  };

  function fmtTime(m) {
    m = m % 1440;                     // 1440 (24:00) -> 00:00
    return Math.floor(m / 60) + ':' + (m % 60 < 10 ? '0' : '') + (m % 60);
  }

  function computeStatus(now) {
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();

    // ¿Abiertos por un tramo de AYER que cruza medianoche? (p. ej. lunes 00:15)
    const yday = (day + 6) % 7;
    for (const [, c] of (OPEN_HOURS[yday] || [])) {
      if (c > 1440 && mins < c - 1440) {
        const closeAt = c - 1440;
        return { open: true, soon: (closeAt - mins) <= 30, closeAt };
      }
    }
    // Tramos de HOY
    const ranges = OPEN_HOURS[day] || [];
    for (const [o, c] of ranges) {
      if (mins >= o && mins < c) return { open: true, soon: (c - mins) <= 30, closeAt: c };
    }
    // Próxima apertura: un tramo posterior hoy, o el primer día siguiente que abra.
    for (const [o] of ranges) {
      if (o > mins) return { open: false, nextDay: day, nextOpen: o, offset: 0 };
    }
    for (let d = 1; d <= 7; d++) {
      const nd = (day + d) % 7;
      const r = OPEN_HOURS[nd] || [];
      if (r.length) return { open: false, nextDay: nd, nextOpen: r[0][0], offset: d };
    }
    return { open: false };
  }

  function updateStatusFloat(lang) {
    const el = document.getElementById('statusFloat');
    if (!el) return;
    const L = STATUS_LABELS[lang] || STATUS_LABELS.es;
    const st = computeStatus(new Date());
    const textEl = el.querySelector('.status-text');
    el.classList.remove('is-open', 'is-closed', 'is-soon');

    if (st.open && st.soon) {
      el.classList.add('is-soon');
      textEl.innerHTML = '<b>' + L.soon + '</b> <span class="muted">· ' + L.closesAt + ' ' + fmtTime(st.closeAt) + '</span>';
    } else if (st.open) {
      el.classList.add('is-open');
      textEl.innerHTML = '<b>' + L.open + '</b> <span class="muted">· ' + L.closesAt + ' ' + fmtTime(st.closeAt) + '</span>';
    } else {
      el.classList.add('is-closed');
      let when = '';
      if (st.nextOpen != null) {
        const t = fmtTime(st.nextOpen);
        if (st.offset === 0) when = L.opensAt + ' ' + t;
        else if (st.offset === 1) when = L.opensAt + ' ' + L.tomorrow + ' ' + t;
        else when = L.opensAt + ' ' + L.days[st.nextDay] + ' ' + t;
      }
      textEl.innerHTML = '<b>' + L.closed + '</b>' + (when ? ' <span class="muted">· ' + when + '</span>' : '');
    }
    el.hidden = false;
  }

  function setupStatusFloat() {
    if (!document.getElementById('statusFloat')) return;
    const currentLang = () => localStorage.getItem('arantxa.lang') || document.documentElement.lang || 'es';
    updateStatusFloat(currentLang());
    setInterval(() => updateStatusFloat(currentLang()), 60000);
  }

  // ---------- INIT ----------
  document.addEventListener('DOMContentLoaded', () => {
    setupNav();
    setupLang();
    setupReveal();
    setupMap('mapWrap');
    setupTabs();
    setupModals();
    setupConsent();
    setupForms();
    setupReservationForm();
    setupHoursToday();
    setupStatusFloat();
  });
})();
