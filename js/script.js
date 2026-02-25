// === MOBILE MENU TOGGLE ===
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const mobileOverlay = document.getElementById('mobile-menu-overlay');

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('active');
  mobileOverlay.classList.toggle('active');
  document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mainNav.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Toggle menu on hamburger click
if (hamburger) {
  hamburger.addEventListener('click', toggleMobileMenu);
}

// Close menu when overlay is clicked
if (mobileOverlay) {
  mobileOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu when a nav link is clicked
if (mainNav) {
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// Close menu on window resize if opened
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && mainNav.classList.contains('active')) {
    closeMobileMenu();
  }
});

// === MOBILE LANGUAGE SWITCHER ===
const mobileLangButtons = document.querySelectorAll('.mobile-lang-btn');

mobileLangButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const selectedLang = this.getAttribute('data-lang');
    
    // Update mobile button states
    mobileLangButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Sync with main language switcher
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      if (option.getAttribute('data-lang') === selectedLang) {
        option.click();
      }
    });
    
    // Close mobile menu after language selection
    // closeMobileMenu();
  });
});

// scroll suave (só para âncoras internas)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === DADOS DOS QUARTOS ===
const quartosData = {
  1: {
    tag: "Homenagem ao Modernismo",
    title: "Quarto Duplo com Varanda e Vista para Jardim",
    description: `
      Este quarto acolhedor dispõe de uma ampla cama de casal (1.80 x 2.00) com lençóis 100% algodão de 300 fios, garantindo noites de descanso absoluto.
      A luz natural entra pela janela que dá acesso a uma pequena varanda com vista para o fontanário, piscina e jardim — o cenário ideal para relaxar.
      A casa de banho privativa conta com duche, secador de cabelo e amenities de qualidade. O quarto inclui ainda Wi-Fi gratuito, ar condicionado e TV cabo, num ambiente de decoração clássica e romântica.
      O pequeno-almoço está incluído e é servido numa sala bucólica, onde cada detalhe foi pensado para proporcionar uma experiência prazerosa.
    `,
    quote: "Onde a arte encontra o descanso.",
    image: "media/rooms/quarto1.jpg",
    gallery: [
      "media/rooms/quarto1b.jpg",
      "media/rooms/quarto1d.jpg",
      "media/rooms/quarto1c.jpg",
    ],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "21 m²",
    wc: "Casa de Banho Privada - Duche",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=121965",
  },
  2: {
    tag: "Elegância Literária",
    title: "Quarto Duplo com Varanda e Vista para Jardim",
    description: `
      Este quarto acolhedor dispõe de uma ampla cama de casal (1.80 x 2.00) com lençóis 100% algodão de 300 fios, garantindo noites de descanso absoluto.
      A luz natural entra pela janela que dá acesso a uma pequena varanda com vista para o fontanário, piscina e jardim — o cenário ideal para relaxar.
      A casa de banho privativa conta com duche, secador de cabelo e amenities de qualidade. O quarto inclui ainda Wi-Fi gratuito, ar condicionado e TV cabo, num ambiente de decoração clássica e romântica.
      O pequeno-almoço está incluído e é servido numa sala bucólica, onde cada detalhe foi pensado para proporcionar uma experiência prazerosa. 
    `,
    quote: "Cada palavra inspira calma e conforto.",
    image: "media/rooms/quarto2.jpg",
    gallery: ["media/rooms/quarto2b.jpg", "media/rooms/quarto2c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "21 m²",
    wc: "Casa de Banho Privada - Duche",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=122017",
  },
  3: {
    tag: "Refúgio Familiar Premium",
    title: "Suite Deluxe com Varanda, Vista para Jardim e Montanha",
    description: `
      A suite mais espaçosa da propriedade — ideal para famílias, é também a suite favorita das noivas para os preparativos do casamento, graças ao seu espaço generoso e atmosfera romântica.
      Com uma cama de casal (1.80 x 2.00) e colchão de alta qualidade, a suite proporciona um descanso profundo, complementado por lençóis de algodão puro de 300 fios. Ideal para famílias, inclui também um confortável sofá-cama para duas crianças.
      A luz natural entra pelas amplas janelas, revelando vistas serenas para o bosque e jardim, enquanto a varanda privada oferece um cenário encantador sobre o fontanário — perfeito para relaxar. A casa de banho privativa é ampla e conta com duche, secador de cabelo e amenities selecionados.
      O quarto inclui ainda Wi-Fi gratuito, ar condicionado e TV cabo, num ambiente de decoração clássica e romântica.
      O pequeno-almoço está incluído e é servido numa sala de inspiração bucólica.
      Um refúgio onde o luxo discreto e a natureza se unem para uma estadia memorável.
    `,
    quote: "Onde a família cria memórias inesquecíveis.",
    image: "media/rooms/quarto3.jpg",
    gallery: ["media/rooms/quarto3b.jpg", "media/rooms/quarto3c.jpg"],
    capacidade: "4 pessoas",
    cama: "Cama Queen Size + Sofá-cama",
    area: "52 m²",
    wc: "Casa de Banho Privada - Duche",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=122018",
  },
  4: {
    tag: "Serenidade Romântica",
    title: "Suite Junior com Banheira e Varanda com Vista Traseira",
    description: `
      Com uma cama de casal ampla (1.80 x 2.00) e colchão de elevada qualidade, a suite garante noites de descanso profundo, envoltas em lençóis de algodão de 300 fios.
      Dispõe ainda de um sofá-cama adequado para uma criança.
      A varanda privada oferece uma vista serena e resguardada, enquanto a casa de banho privativa, ampla e luminosa, inclui banheira, secador de cabelo e amenities selecionados. A decoração vintage do quarto cria um ambiente de charme acolhedor.
      O pequeno-almoço está incluído e é servido numa sala com decoração clássica perfeita para começar o dia com requinte e tranquilidade.
    `,
    quote: "Um refúgio de serenidade e romance.",
    image: "media/rooms/quarto4.jpg",
    gallery: [
      "media/rooms/quarto4b.jpg",
      "media/rooms/quarto4d.jpg",
      "media/rooms/quarto4c.jpg",
    ],
    capacidade: "3 pessoas",
    cama: "Cama Queen Size + Sofá-cama",
    area: "43 m²",
    wc: "Casa de Banho Privada - Banheira",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=122019",
  },
  5: {
    tag: "Charme Tradicional",
    title: "Quarto Duplo Superior",
    description: `
      Um Quarto Duplo Superior que combina conforto, serenidade e um encanto romântico.
      A ampla cama de casal (1.80 x 2.00), com colchão de alta qualidade e lençóis de algodão de 300 fios, proporciona noites de descanso profundo. 
      A luz natural entra generosamente pela janela do quarto com vista tranquila para o interior da propriedade — perfeita para privacidade.
      A casa de banho privativa inclui banheira, secador de cabelo e amenities selecionados. Para maior comodidade, o quarto oferece Wi-Fi gratuito, ar condicionado e TV cabo. 
      A decoração clássica e romântica acrescenta charme e elegância ao ambiente.
      O pequeno-almoço está incluído e é servido numa sala de inspiração bucólica. 
    `,
    quote: "Tradição e conforto em perfeita harmonia.",
    image: "media/rooms/quarto5.jpg",
    gallery: ["media/rooms/quarto5b.jpg", "media/rooms/quarto5c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "30 m²",
    wc: "Casa de Banho Privada - Banheira",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=122020",
  },
  6: {
    tag: "Elegância Clássica",
    title: "Quarto Duplo Superior",
    description: `
      A escolha ideal para quem valoriza independência. Este quarto permite acesso direto ao exterior sem passar pela Recepção, oferecendo total privacidade e conveniência. Prolonga-se até um pequeno pátio exterior, ideal para relaxar ao ar livre ou para fumadores.
      A cama de casal (1.80 x 2.00), com colchão de alta qualidade e lençóis de algodão de 300 fios, garante noites de descanso profundo. O quarto inclui ainda um sofá-cama, ideal para uma criança ou para momentos de relaxamento.
      A casa de banho privativa dispõe de duche, secador de cabelo e amenities selecionados. A decoração clássica e romântica acrescenta um charme elegante que evoca épocas de requinte.
      O pequeno-almoço está incluído e é servido numa sala de inspiração bucólica, criando o início perfeito para um dia tranquilo e prazeroso.
    `,
    quote: "Elegância atemporal em cada detalhe.",
    image: "media/rooms/quarto6.jpg",
    gallery: ["media/rooms/quarto6b.jpg", "media/rooms/quarto6c.jpg"],
    capacidade: "3 pessoas",
    cama: "Cama Queen Size + Sofá-cama",
    area: "30 m²",
    wc: "Casa de Banho Privada - Duche",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "outlet.svg", label: "Tomadas perto da cama" },
      { icon: "tv.svg", label: "Canais por Satélite" },
      { icon: "fridge.svg", label: "Frigorífico (minibar)" },
      { icon: "towels.svg", label: "Toalhas" },
      { icon: "babybed.svg", label: "Berço Disponível" },
      { icon: "parking.svg", label: "Estacionamento Grátis" },
    ],
    link: "https://booking.roomraccoon.pt/casadofontao/pt/?roomTypes=122021",
  },
};


// === GERAR LISTA DE QUARTOS ===
const grid = document.getElementById("quartos-grid");

function renderQuartosI18n() {
  const lang = localStorage.getItem("casa-lang") || "pt";
  const langData = translations[lang]?.quartos || {};

  grid.innerHTML = "";

  Object.entries(quartosData).forEach(([id, quarto]) => {
    const traduzido = langData[id] || quarto;

    const card = document.createElement("article");
    card.classList.add("quarto-card");
    card.setAttribute("data-room", id);

    card.innerHTML = `
      <div class="quarto-img">
        <img src="${quarto.image}" alt="${traduzido.title}" />
      </div>
      <div class="quarto-info">
        <p class="quarto-tag">${traduzido.tag}</p>
        <h3 class="quarto-title">${traduzido.title}</h3>
        <p class="quarto-text">${traduzido.description.split(".")[0]}.</p>
        <div class="quarto-meta">
          <span>${traduzido.capacidade}</span>
          <span>${traduzido.area}</span>
          <span>${traduzido.cama}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  attachModalI18n();
}

renderQuartosI18n();

// === ELEMENTOS DO MODAL ===
const modal = document.getElementById("quarto-modal");
const closeModal = document.getElementById("close-modal");

// Campos a preencher
const modalImage = document.getElementById("modal-image");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const galleryContainer = document.querySelector(".quarto-gallery");
const quoteContainer = document.querySelector(".quarto-quote");
const detalhesContainer = document.querySelector(".detalhes ul");
const comodidadesContainer = document.querySelector(".icons-grid");

// === ABRIR MODAL COM DADOS ===
function attachModalI18n() {
  const lang = localStorage.getItem("casa-lang") || "pt";
  const langData = translations[lang]?.quartos || {};

  document.querySelectorAll(".quarto-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-room");
      const quarto = quartosData[id];
      const traduzido = langData[id] || quarto;
      if (!quarto) return;

      // Atualiza imagem e textos
      modalImage.src = quarto.image;
      modalTag.textContent = traduzido.tag;
      modalTitle.textContent = traduzido.title;
      modalDesc.textContent = traduzido.description;
      quoteContainer.innerHTML = `<em>“${traduzido.quote}”</em>`;

      // Atualiza galeria
      galleryContainer.innerHTML = quarto.gallery
        .map((img) => `<img src="${img}" alt="">`)
        .join("");

      // Atualiza detalhes
      detalhesContainer.innerHTML = `
        <li><strong>${
          lang === "pt"
            ? "Capacidade:"
            : lang === "en"
            ? "Capacity:"
            : lang === "fr"
            ? "Capacité:"
            : "Capacidad:"
        }</strong> <span>${traduzido.capacidade}</span></li>
        <li><strong>${
          lang === "pt"
            ? "Cama:"
            : lang === "en"
            ? "Bed:"
            : lang === "fr"
            ? "Lit:"
            : "Cama:"
        }</strong> <span>${traduzido.cama}</span></li>
        <li><strong>${
          lang === "pt"
            ? "Área:"
            : lang === "en"
            ? "Area:"
            : lang === "fr"
            ? "Zone:"
            : "Área:"
        }</strong> <span>${traduzido.area}</span></li>
        <li><strong>${
          lang === "pt"
            ? "WC:"
            : lang === "en"
            ? "Bathroom:"
            : lang === "fr"
            ? "Salle de bain:"
            : "Baño:"
        }</strong> <span>${traduzido.wc}</span></li>
      `;

      // Atualiza comodidades
      // Atualiza comodidades (com tradução)
      comodidadesContainer.innerHTML = quarto.comodidades
        .map((c) => {
          // tenta usar tradução, senão usa o label original
          const translatedLabel =
            traduzido.comodidades?.[c.icon.replace(".svg", "")] || c.label;

          return `
      <div class="icon">
        <img src="media/icons/${c.icon}" alt="">
        <span>${translatedLabel}</span>
      </div>
    `;
        })
        .join("");

      // Atualiza link do botão de reserva
      const bookingBtn = document.getElementById("modal-booking-btn");
      if (bookingBtn && quarto.link) {
        bookingBtn.href = quarto.link;
      }

      // Mostra modal
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });
}

// === FECHAR MODAL ===
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

document.querySelector(".quarto-overlay").addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Adiciona classe 'portrait' a imagens verticais na galeria
document.querySelectorAll(".quarto-gallery img").forEach((img) => {
  img.addEventListener("load", () => {
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add("portrait");
    }
  });
});

// efeito de scroll para mudar a cor da topbar
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});

// === REGERAR QUARTOS QUANDO O IDIOMA MUDA ===
document.addEventListener("langChanged", renderQuartosI18n);

// === DROPDOWN DE IDIOMA ===
const langSwitch = document.querySelector(".lang-switch");
const langCurrent = document.getElementById("lang-current");
const currentLangSpan = document.getElementById("current-lang");
const langDropdown = document.getElementById("lang-dropdown");
const langOptions = document.querySelectorAll(".lang-option");

// Abre/fecha dropdown
if (langCurrent) {
  langCurrent.addEventListener("click", (e) => {
    e.stopPropagation();
    langSwitch.classList.toggle("open");
  });
}

// Fecha dropdown ao clicar fora
document.addEventListener("click", (e) => {
  if (!langSwitch.contains(e.target)) {
    langSwitch.classList.remove("open");
  }
});

// Atualiza idioma ao selecionar opção
langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.getAttribute("data-lang").toUpperCase();
    currentLangSpan.textContent = selectedLang;
    langSwitch.classList.remove("open");

    // Marca opção ativa
    langOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

// Define idioma inicial como ativo
const savedLang = (localStorage.getItem("casa-lang") || "pt").toLowerCase();
const activeOption = document.querySelector(
  `.lang-option[data-lang="${savedLang}"]`
);
if (activeOption) {
  activeOption.classList.add("active");
  currentLangSpan.textContent = savedLang.toUpperCase();
}

// === EXPERIENCE CAROUSELS ===
function initExperienceCarousels() {
  const carousels = document.querySelectorAll('.experiencia-carousel');
  
  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    let autoRotateInterval;

    // Function to show specific image
    function showImage(index) {
      images.forEach((img) => img.classList.remove('active'));
      images[index].classList.add('active');
      currentIndex = index;
    }

    // Function to go to next image
    function nextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }

    // Function to go to previous image
    function prevImage() {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
    }

    // Start auto-rotation
    function startAutoRotate() {
      autoRotateInterval = setInterval(nextImage, 5000); // 5 seconds
    }

    // Stop auto-rotation
    function stopAutoRotate() {
      clearInterval(autoRotateInterval);
    }

    // Restart auto-rotation after manual navigation
    function restartAutoRotate() {
      stopAutoRotate();
      startAutoRotate();
    }

    // Event listeners for arrows
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevImage();
        restartAutoRotate();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextImage();
        restartAutoRotate();
      });
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);

    // Start auto-rotation on page load
    startAutoRotate();
  });
}

// Initialize carousels when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperienceCarousels);
} else {
  initExperienceCarousels();
}
