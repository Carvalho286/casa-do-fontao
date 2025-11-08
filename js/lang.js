const translations = {
  pt: {
    home: "A casa",
    events: "Eventos",
    gallery: "Galeria",
    essence: "Essência",
    experiences: "Experiências",
    rooms: "Quartos",
    eventsRoom: "Sala de Eventos",
    history: "História",
    contact: "Contactos",
    heroTagline: "Casa de Turismo Rural",
    welcomeText: "Um retiro de charme onde tradição e conforto se encontram.",
    bookNow: "Reservar",
    discoverHouse: "Descobrir a casa",
    essenceTitle: "A essência da Casa do Fontão",
    essenceText1:
      "A Casa do Fontão é uma Casa Histórica com arquitetura do século XVIII — uma casa de charme, onde o tempo parece abrandar.",
    essenceText2:
      "Cada detalhe — dos móveis antigos, soalhos, objetos decorativos e antiguidades inigualáveis, aos tecidos de qualidade excelente, ao conforto da cama — foi pensado para oferecer uma experiência sensorial e emocional, onde a história encontra o conforto contemporâneo.",
    essenceQuote:
      '"Um refúgio onde o passado sussurra histórias e o presente convida ao descanso."',
    essenceIcon1: "Um lar com alma antiga e detalhes que contam histórias.",
    essenceIcon2: "Onde cada momento inspira calma e encanto.",
    essenceIcon3: "Harmonia natural com todas as comodidades modernas.",
    experiencesTitle: "Momentos para recordar",
    experiencesText:
      "Da descoberta da região às atividades ao ar livre, criamos experiências pensadas para quem valoriza tranquilidade, natureza e boa gastronomia.",
    roomsTitle: "Conforto em cada detalhe",
    roomsIntro:
      "Cada quarto foi pensado para oferecer privacidade, conforto e referências à história da casa.",
    room1Title: "Quarto Superior",
    room1Meta: "Cama de casal • Vista jardim",
    room2Title: "Quarto Familiar",
    room2Meta: "Até 4 hóspedes",
    room3Title: "Suite Rústica",
    room3Meta: "Ambiente rústico",
    eventsTitle: "Um espaço para celebrações",
    eventsText:
      "Ideal para pequenos eventos, reuniões familiares ou experiências gastronómicas privadas.",
    historyTitle: "A história da Casa",
    historyText:
      "Com origens no século XIX, a Casa do Fontão mantém a traça original, combinando elementos de pedra, madeira e peças tradicionais, agora adaptadas ao conforto atual.",
  },
  en: {
    home: "The house",
    events: "Events",
    gallery: "Gallery",
    essence: "Essence",
    experiences: "Experiences",
    rooms: "Rooms",
    eventsRoom: "Events Room",
    history: "History",
    contact: "Contacts",
    heroTagline: "Rural Tourism House",
    welcomeText: "A charming retreat where tradition meets comfort.",
    bookNow: "Book Now",
    discoverHouse: "Discover the house",
    essenceTitle: "The essence of Casa do Fontão",
    essenceText1:
      "Casa do Fontão is a historic house with 18th-century architecture — a charming home where time seems to slow down.",
    essenceText2:
      "Every detail — from the antique furniture, floors, decorative objects and unparalleled antiques, to the high-quality fabrics and the comfort of the bed — has been designed to offer a sensory and emotional experience, where history meets contemporary comfort.",
    essenceQuote:
      '"A refuge where the past whispers stories and the present invites you to rest."',
    essenceIcon1: "A home with an old soul and details that tell stories.",
    essenceIcon2: "Where every moment inspires calm and charm.",
    essenceIcon3: "Natural harmony with all modern amenities.",
    experiencesTitle: "Moments to remember",
    experiencesText:
      "From exploring the region to outdoor activities, we create experiences for those who value tranquility, nature and good gastronomy.",
    roomsTitle: "Comfort in every detail",
    roomsIntro:
      "Each room was designed to offer privacy, comfort and references to the house's history.",
    room1Title: "Superior Room",
    room1Meta: "Double bed • Garden view",
    room2Title: "Family Room",
    room2Meta: "Up to 4 guests",
    room3Title: "Rustic Suite",
    room3Meta: "Rustic atmosphere",
    eventsTitle: "A space for celebrations",
    eventsText:
      "Perfect for small events, family gatherings or private dining experiences.",
    historyTitle: "The house history",
    historyText:
      "Dating back to the 19th century, Casa do Fontão preserves its original architecture, now adapted to modern comfort.",
  },
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("casa-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // detecta idioma
  const saved = localStorage.getItem("casa-lang");
  const browserLang = navigator.language.toLowerCase().startsWith("en")
    ? "en"
    : "pt";
  const langToUse = saved || browserLang;
  applyTranslations(langToUse);

  const ptBtn = document.getElementById("lang-pt");
  const enBtn = document.getElementById("lang-en");
  if (ptBtn) ptBtn.addEventListener("click", () => applyTranslations("pt"));
  if (enBtn) enBtn.addEventListener("click", () => applyTranslations("en"));
});
