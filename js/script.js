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
    title: "Quarto 1",
    description: `
      Inspirado no génio de Amadeo de Souza-Cardoso, este quarto celebra a ousadia criativa do modernismo português.
      Paredes claras acolhem detalhes coloridos subtis, numa fusão perfeita entre tradição e vanguarda.
      As janelas amplas deixam entrar a luz matinal, criando um jogo de sombras que Amadeo teria apreciado.
      Cada detalhe foi pensado para inspirar criatividade e contemplação.
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
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
      { icon: "products.svg", label: "Produtos de Luxo" },
    ],
  },
  2: {
    tag: "Elegância Literária",
    title: "Quarto 2",
    description: `
      Uma homenagem a Agustina Bessa-Luís, este quarto feminino e sofisticado combina delicadeza e força.
      Texturas suaves e tons dourados convidam ao descanso e à leitura silenciosa.
    `,
    quote: "Cada palavra inspira calma e conforto.",
    image: "media/rooms/quarto2.jpg",
    gallery: ["media/rooms/quarto2b.jpg", "media/rooms/quarto2c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
    ],
  },
  3: {
    tag: "Homenagem ao Modernismo",
    title: "Quarto 3",
    description: `
      Inspirado no génio de Amadeo de Souza-Cardoso, este quarto celebra a ousadia criativa do modernismo português.
      Paredes claras acolhem detalhes coloridos subtis, numa fusão perfeita entre tradição e vanguarda.
      As janelas amplas deixam entrar a luz matinal, criando um jogo de sombras que Amadeo teria apreciado.
      Cada detalhe foi pensado para inspirar criatividade e contemplação.
    `,
    quote: "Onde a arte encontra o descanso.",
    image: "media/rooms/quarto3.jpg",
    gallery: ["media/rooms/quarto3b.jpg", "media/rooms/quarto3c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
      { icon: "products.svg", label: "Produtos de Luxo" },
    ],
  },
  4: {
    tag: "Homenagem ao Modernismo",
    title: "Quarto 4",
    description: `
      Inspirado no génio de Amadeo de Souza-Cardoso, este quarto celebra a ousadia criativa do modernismo português.
      Paredes claras acolhem detalhes coloridos subtis, numa fusão perfeita entre tradição e vanguarda.
      As janelas amplas deixam entrar a luz matinal, criando um jogo de sombras que Amadeo teria apreciado.
      Cada detalhe foi pensado para inspirar criatividade e contemplação.
    `,
    quote: "Onde a arte encontra o descanso.",
    image: "media/rooms/quarto4.jpg",
    gallery: [
      "media/rooms/quarto4b.jpg",
      "media/rooms/quarto4d.jpg",
      "media/rooms/quarto4c.jpg",
    ],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
      { icon: "products.svg", label: "Produtos de Luxo" },
    ],
  },
  5: {
    tag: "Homenagem ao Modernismo",
    title: "Quarto 5",
    description: `
      Inspirado no génio de Amadeo de Souza-Cardoso, este quarto celebra a ousadia criativa do modernismo português.
      Paredes claras acolhem detalhes coloridos subtis, numa fusão perfeita entre tradição e vanguarda.
      As janelas amplas deixam entrar a luz matinal, criando um jogo de sombras que Amadeo teria apreciado.
      Cada detalhe foi pensado para inspirar criatividade e contemplação.
    `,
    quote: "Onde a arte encontra o descanso.",
    image: "media/rooms/quarto5.jpg",
    gallery: ["media/rooms/quarto5b.jpg", "media/rooms/quarto5c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
      { icon: "products.svg", label: "Produtos de Luxo" },
    ],
  },
  6: {
    tag: "Homenagem ao Modernismo",
    title: "Quarto 6",
    description: `
      Inspirado no génio de Amadeo de Souza-Cardoso, este quarto celebra a ousadia criativa do modernismo português.
      Paredes claras acolhem detalhes coloridos subtis, numa fusão perfeita entre tradição e vanguarda.
      As janelas amplas deixam entrar a luz matinal, criando um jogo de sombras que Amadeo teria apreciado.
      Cada detalhe foi pensado para inspirar criatividade e contemplação.
    `,
    quote: "Onde a arte encontra o descanso.",
    image: "media/rooms/quarto6.jpg",
    gallery: ["media/rooms/quarto6b.jpg", "media/rooms/quarto6c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bathtub.svg", label: "Casa de Banho Privada" },
      { icon: "products.svg", label: "Produtos de Luxo" },
    ],
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
          lang === "pt" ? "Capacidade:" : "Capacity:"
        }</strong> <span>${traduzido.capacidade}</span></li>
        <li><strong>${lang === "pt" ? "Cama:" : "Bed:"}</strong> <span>${
        traduzido.cama
      }</span></li>
        <li><strong>${lang === "pt" ? "Área:" : "Area:"}</strong> <span>${
        traduzido.area
      }</span></li>
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
