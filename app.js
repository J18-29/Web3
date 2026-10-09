function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    const translations = {
        es: {
            navHome: "Inicio",
            navCatalog: "Catalogo",
            navCeramics: "Ceramica",
            navMetal: "Metal",
            navWood: "Madera",
            navContact: "Contacto",
            heroTitle: "El Arte de la Materia y la Tradicion Viva",
            heroText: "Una coleccion comisariada de piezas irrepetibles, elaboradas a mano mediante tecnicas centenarias reinterpretadas con vision contemporanea.",
            heroBtn: "Explorar Catalogo",
            f1Title: "Ceramica",
            f1Text: "Vasijas y menaje de autor modelados con texturas organicas y acabados unicos.",
            f2Title: "Metal y Forja",
            f2Text: "Fundicion de alta precision y forja artesanal aplicada al diseno estructural.",
            f3Title: "Madera y Etnica",
            f3Text: "Mobiliario de maderas nobles y elementos decorativos de inspiracion global.",
            catalogTitle: "Coleccion Destacada 2026",
            item1Title: "Vasija Minimalista Terra",
            item1Desc: "Edicion limitada de ceramica texturizada.",
            item2Title: "Escultura en Forja",
            item2Desc: "Pieza unica de metal estructurado a mano.",
            item3Title: "Banco de Roble Sostenible",
            item3Desc: "Madera noble con acabados naturales al aceite.",
            footerText: "&copy; 2026 Artesania Artesana. Todos los derechos reservados.",
            footerSubText: "Diseno Editorial Exclusivo"
        },
        en: {
            navHome: "Home",
            navCatalog: "Catalog",
            navCeramics: "Ceramics",
            navMetal: "Metal",
            navWood: "Wood",
            navContact: "Contact",
            heroTitle: "The Art of Matter and Living Tradition",
            heroText: "A curated collection of unrepeatable pieces, handcrafted using centuries-old techniques reinterpreted with a contemporary vision.",
            heroBtn: "Explore Catalog",
            f1Title: "Ceramics",
            f1Text: "Author vessels and tableware molded with organic textures and unique finishes.",
            f2Title: "Metal & Forging",
            f2Text: "High-precision casting and artisanal forging applied to structural design.",
            f3Title: "Wood & Ethnic",
            f3Text: "Fine wood furniture and global-inspired decorative elements.",
            catalogTitle: "Featured Collection 2026",
            item1Title: "Terra Minimalist Vessel",
            item1Desc: "Limited edition of textured ceramics.",
            item2Title: "Forged Sculpture",
            item2Desc: "Unique hand-structured metal piece.",
            item3Title: "Sustainable Oak Bench",
            item3Desc: "Fine wood with natural oil finishes.",
            footerText: "&copy; 2026 Artesania Artesana. All rights reserved.",
            footerSubText: "Exclusive Editorial Design"
        },
        fr: {
            navHome: "Accueil",
            navCatalog: "Catalogue",
            navCeramics: "Céramique",
            navMetal: "Métal",
            navWood: "Bois",
            navContact: "Contact",
            heroTitle: "L'Art de la Matière et de la Tradition Vivante",
            heroText: "Une collection d'œuvres uniques, façonnées à la main selon des techniques séculaires réinterprétées avec une vision contemporaine.",
            heroBtn: "Explorer le Catalogue",
            f1Title: "Céramique",
            f1Text: "Vases et art de la table façonnés avec des textures organiques et des finitions uniques.",
            f2Title: "Métal et Forge",
            f2Text: "Fonderie de haute précision et forge artisanale appliquées au design structurel.",
            f3Title: "Bois et Ethnique",
            f3Text: "Mobilier en bois précieux et éléments décoratifs d'inspiration globale.",
            catalogTitle: "Collection Vedette 2026",
            item1Title: "Vase Minimaliste Terra",
            item1Desc: "Édition limitée en céramique texturée.",
            item2Title: "Sculpture en Forge",
            item2Desc: "Pièce unique en métal structuré à la main.",
            item3Title: "Banc en Chêne Durable",
            item3Desc: "Bois noble avec finitions à l'huile naturelle.",
            footerText: "&copy; 2026 Artesania Artesana. Tous droits réservés.",
            footerSubText: "Design Éditorial Exclusif"
        },
        it: {
            navHome: "Inizio",
            navCatalog: "Catalogo",
            navCeramics: "Ceramica",
            navMetal: "Metallo",
            navWood: "Legno",
            navContact: "Contatto",
            heroTitle: "L'Arte della Materia e della Tradizione Viva",
            heroText: "Una collezione curata di pezzi irripetibili, realizzati a mano tramite tecniche centenarie reinterpretate con visione contemporanea.",
            heroBtn: "Esplora Catalogo",
            f1Title: "Ceramica",
            f1Text: "Vasi e stoviglie d'autore modellate con texture organiche e finiture uniche.",
            f2Title: "Metallo e Forgiatura",
            f2Text: "Fusione di alta precisione e forgiatura artigianale applicata al design strutturale.",
            f3Title: "Legno ed Etnico",
            f3Text: "Arredamento in legno nobile ed elementi decorativi di ispirazione globale.",
            catalogTitle: "Collezione in Evidenza 2026",
            item1Title: "Vaso Minimalista Terra",
            item1Desc: "Edizione limitata in ceramica testurizzata.",
            item2Title: "Scultura in Forgiatura",
            item2Desc: "Pezzo unico in metallo strutturato a mano.",
            item3Title: "Panca in Rovere Sostenibile",
            item3Desc: "Legno nobile con finiture a olio naturale.",
            footerText: "&copy; 2026 Artesania Artesana. Tutti i diritti riservati.",
            footerSubText: "Design Editoriale Esclusivo"
        }
    };

    // Actualizar los elementos en el DOM si existen
    const t = translations[lang];
    if (!t) return;

    for (const key in t) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = t[key];
        }
    }
}

function mostrarCatalogo(event) {
    // Hace un desplazamiento suave hacia la sección del catálogo
    event.preventDefault();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}