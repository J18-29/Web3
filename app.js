function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    const navHome = document.getElementById('navHome');
    const navCatalog = document.getElementById('navCatalog');
    const navCeramics = document.getElementById('navCeramics');
    const navMetal = document.getElementById('navMetal');
    const navWood = document.getElementById('navWood');
    const navContact = document.getElementById('navContact');
    
    const heroTitle = document.getElementById('heroTitle');
    const heroText = document.getElementById('heroText');
    const heroBtn = document.getElementById('heroBtn');
    
    const f1Title = document.getElementById('f1Title');
    const f1Text = document.getElementById('f1Text');
    const f2Title = document.getElementById('f2Title');
    const f2Text = document.getElementById('f2Text');
    const f3Title = document.getElementById('f3Title');
    const f3Text = document.getElementById('f3Text');

    const catalogTitle = document.getElementById('catalogTitle');
    const footerText = document.getElementById('footerText');

    if (lang === 'en') {
        navHome.innerText = "Home";
        navCatalog.innerText = "Catalog";
        navCeramics.innerText = "Ceramics";
        navMetal.innerText = "Metal";
        navWood.innerText = "Wood";
        navContact.innerText = "Contact";

        heroTitle.innerText = "The Art of Matter and Living Tradition";
        heroText.innerText = "A curated collection of unrepeatable pieces, handcrafted using centuries-old techniques reinterpreted with a contemporary vision.";
        heroBtn.innerText = "Explore Catalog";

        f1Title.innerText = "Ceramics";
        f1Text.innerText = "Author vessels and tableware modeled with organic textures and unique finishes.";
        
        f2Title.innerText = "Metal & Forge";
        f2Text.innerText = "High-precision casting and artisanal forge applied to structural design.";
        
        f3Title.innerText = "Wood & Ethnic";
        f3Text.innerText = "Noble wood furniture and global-inspired decorative elements.";

        catalogTitle.innerText = "Featured Collection 2026";
        footerText.innerText = "© 2026 Artesania Artesana. All rights reserved.";
    } else {
        navHome.innerText = "Inicio";
        navCatalog.innerText = "Catalogo";
        navCeramics.innerText = "Ceramica";
        navMetal.innerText = "Metal";
        navWood.innerText = "Madera";
        navContact.innerText = "Contacto";

        heroTitle.innerText = "El Arte de la Materia y la Tradicion Viva";
        heroText.innerText = "Una coleccion comisariada de piezas irrepetibles, elaboradas a mano mediante tecnicas centenarias reinterpretadas con vision contemporanea.";
        heroBtn.innerText = "Explorar Catalogo";

        f1Title.innerText = "Ceramica";
        f1Text.innerText = "Vasijas y menaje de autor modelados con texturas organicas y acabados unicos.";
        
        f2Title.innerText = "Metal y Forja";
        f2Text.innerText = "Fundicion de alta precision y forja artesanal aplicada al diseno estructural.";
        
        f3Title.innerText = "Madera y Etnica";
        f3Text.innerText = "Mobiliario de maderas nobles y elementos decorativos de inspiracion global.";

        catalogTitle.innerText = "Coleccion Destacada 2026";
        footerText.innerText = "© 2026 Artesania Artesana. Todos los derechos reservados.";
    }
}

function mostrarCatalogo(event) {
    // Hace un desplazamiento suave hacia la sección del catálogo
    event.preventDefault();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}