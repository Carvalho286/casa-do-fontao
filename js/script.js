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

// modal de quartos
const modal = document.getElementById("room-modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");

const roomData = {
  1: {
    pt: {
      title: "Quarto Superior",
      desc: "Quarto amplo, cama de casal, vista jardim e detalhes rústicos.",
    },
    en: {
      title: "Superior Room",
      desc: "Spacious room, double bed, garden view and rustic details.",
    },
  },
  2: {
    pt: {
      title: "Quarto Familiar",
      desc: "Ideal para famílias, com capacidade até 4 hóspedes.",
    },
    en: {
      title: "Family Room",
      desc: "Ideal for families, accommodates up to 4 guests.",
    },
  },
  3: {
    pt: {
      title: "Suite Rústica",
      desc: "Ambiente acolhedor com elementos tradicionais.",
    },
    en: {
      title: "Rustic Suite",
      desc: "Cozy environment with traditional elements.",
    },
  },
};

document.querySelectorAll(".room-card").forEach((card) => {
  card.addEventListener("click", () => {
    const room = card.dataset.room;
    const currentLang = document.documentElement.lang || "pt";
    const data = roomData[room] ? roomData[room][currentLang] : null;

    modalTitle.textContent = data ? data.title : "Quarto";
    modalDesc.textContent = data ? data.desc : "Descrição do quarto.";
    modal.classList.remove("hidden");
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
}
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
}

// efeito de scroll para mudar a cor da topbar
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});
