// ================= FUNCIÓN DE CAMBIO DE IDIOMA =================
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    const translations = {
        es: {
            navHome: "Inicio",
            navContact: "Contacto",
            heroTitle: "El Arte de la Materia y la Tradición Viva",
            heroText: "Una colección comisariada de piezas irrepetibles, elaboradas a mano mediante técnicas centenarias reinterpretadas con visión contemporánea.",
            heroBtn: "Explorar Colección",
            catalogTitle: "Catálogo Exclusivo",
            catalogSubtitle: "Seleccione una categoría para descubrir las piezas disponibles.",
            footerText: "&copy; 2026 Artesanía Artesana. Todos los derechos reservados."
        },
        en: {
            navHome: "Home",
            navContact: "Contact",
            heroTitle: "The Art of Matter and Living Tradition",
            heroText: "A curated collection of unique pieces, handcrafted using centuries-old techniques reinterpreted with a contemporary vision.",
            heroBtn: "Explore Collection",
            catalogTitle: "Exclusive Catalog",
            catalogSubtitle: "Select a category to discover available pieces.",
            footerText: "&copy; 2026 Artesanía Artesana. All rights reserved."
        },
        fr: {
            navHome: "Accueil",
            navContact: "Contact",
            heroTitle: "L'Art de la Matière et de la Tradition Vivante",
            heroText: "Une collection organisée de pièces uniques, façonnées à la main selon des techniques séculaires.",
            heroBtn: "Explorer la Collection",
            catalogTitle: "Catalogue Exclusif",
            catalogSubtitle: "Sélectionnez une catégorie pour découvrir les pièces disponibles.",
            footerText: "&copy; 2026 Artesanía Artesana. Tous droits réservés."
        },
        it: {
            navHome: "Inizio",
            navContact: "Contatto",
            heroTitle: "L'Arte della Materia e della Tradizione Vivente",
            heroText: "Una collezione curata di pezzi unici, fatti a mano utilizzando tecniche secolari reinterpretate con una visione contemporanea.",
            heroBtn: "Esplora la Collezione",
            catalogTitle: "Catalogo Esclusivo",
            catalogSubtitle: "Seleziona una categoria per scoprire i pezzi disponibili.",
            footerText: "&copy; 2026 Artesanía Artesana. Tutti i diritti riservati."
        }
    };

    const currentDict = translations[lang];

    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    safeSetText('navHome', currentDict.navHome);
    safeSetText('navContact', currentDict.navContact);
    safeSetText('heroTitle', currentDict.heroTitle);
    safeSetText('heroText', currentDict.heroText);
    safeSetText('heroBtn', currentDict.heroBtn);
    safeSetText('catalogTitle', currentDict.catalogTitle);
    safeSetText('catalogSubtitle', currentDict.catalogSubtitle);

    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.innerHTML = currentDict.footerText;

    // Traducir elementos con data-*
    document.querySelectorAll(`[data-${lang}]`).forEach(element => {
        element.innerText = element.getAttribute(`data-${lang}`);
    });
}

// ================= FUNCIÓN DE FILTRADO DE PRODUCTOS =================
function filterProducts(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}