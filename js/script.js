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
    gallery: ["media/rooms/quarto1b.jpg", "media/rooms/quarto1d.jpg", "media/rooms/quarto1c.jpg"],
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
    gallery: ["media/rooms/quarto4b.jpg", "media/rooms/quarto4d.jpg", "media/rooms/quarto4c.jpg"],
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
    gallery: ["media/rooms/quarto6b.jpg", "media/rooms/quarto6d.jpg", "media/rooms/quarto6c.jpg"],
    capacidade: "2 pessoas",
    cama: "Cama Queen Size",
    area: "20 m²",
    comodidades: [
      { icon: "wifi.svg", label: "Wi-Fi" },
      { icon: "coffee.svg", label: "Café & Chá" },
      { icon: "air.svg", label: "Ar Condicionado" },
      { icon: "tv.svg", label: "Smart TV" },
      { icon: "bath.svg", label: "Casa de Banho Privada" },
      { icon: "amenities.svg", label: "Produtos de Luxo" },
    ],
  },
};

// === GERAR LISTA DE QUARTOS ===
const grid = document.getElementById("quartos-grid");

Object.entries(quartosData).forEach(([id, quarto]) => {
  const card = document.createElement("article");
  card.classList.add("quarto-card");
  card.setAttribute("data-room", id);

  card.innerHTML = `
    <div class="quarto-img">
      <img src="${quarto.image}" alt="${quarto.title}" />
    </div>
    <div class="quarto-info">
      <p class="quarto-tag">${quarto.tag}</p>
      <h3 class="quarto-title">${quarto.title}</h3>
      <p class="quarto-text">${quarto.description.split(".")[0]}.</p>
      <div class="quarto-meta">
        <span>${quarto.capacidade}</span>
        <span>${quarto.area}</span>
        <span>${quarto.cama}</span>
      </div>
    </div>
  `;

  grid.appendChild(card);
});


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
document.querySelectorAll(".quarto-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-room");
    const quarto = quartosData[id];
    if (!quarto) return;

    // Atualiza imagem e textos
    modalImage.src = quarto.image;
    modalTag.textContent = quarto.tag;
    modalTitle.textContent = quarto.title;
    modalDesc.textContent = quarto.description;
    quoteContainer.innerHTML = `<em>“${quarto.quote}”</em>`;

    // Atualiza galeria
    galleryContainer.innerHTML = quarto.gallery
      .map(img => `<img src="${img}" alt="">`)
      .join("");

    // Atualiza detalhes
    detalhesContainer.innerHTML = `
      <li><strong>Capacidade:</strong> <span>${quarto.capacidade}</span></li>
      <li><strong>Cama:</strong> <span>${quarto.cama}</span></li>
      <li><strong>Área:</strong> <span>${quarto.area}</span></li>
    `;

    // Atualiza comodidades
    comodidadesContainer.innerHTML = quarto.comodidades
      .map(
        c =>
          `<div class="icon"><img src="media/icons/${c.icon}" alt=""><span>${c.label}</span></div>`
      )
      .join("");

    // Mostra modal
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

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
document.querySelectorAll('.quarto-gallery img').forEach(img => {
  img.addEventListener('load', () => {
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add('portrait');
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
