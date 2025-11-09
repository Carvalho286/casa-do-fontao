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
    experiencesTitle: "Experiências",
    experiencesText:
      "Viva Momentos Únicos",
    experience1Type: "Sabores com Alma",
    experience1Title: "Experiências Gastronómicas",
    experience1Text: "Jantares intimistas à luz de velas, onde cada prato conta uma história. Ingredientes locais transformados em memórias que se saboreiam lentamente.",
    experience1Quote: "A mesa como palco de encontros",
    experience2Type: "Entre o Bosque e o Rio",
    experience2Title: "Passeios na Natureza",
    experience2Text: "O bosque em frente à casa convida-o a perder-se entre árvores centenárias. Ao amanhecer, quando a névoa dança sobre o Tâmega, descubra trilhos secretos e momentos de contemplação pura.",
    experience2Quote: "Onde o tempo se mede em respirações",
    experience3Type: "Património de Amarante",
    experience3Title: "Experiências Culturais",
    experience3Text: "Percorra as pegadas de Amadeu de Souza-Cardoso, Teixeira de Pascoaes e Agustina Bessa-Luís. Visitas guiadas que revelam a alma artística e literária desta terra, onde cada rua é um verso.",
    experience3Quote: "Nas palavras dos que aqui sonharam",
    experience4Type: "Néctares do Douro",
    experience4Title: "Degustação de Vinhos",
    experience4Text: "Uma viagem sensorial pelos vinhos da região, harmonizados com queijos e enchidos artesanais. Cada copo é uma celebração da tradição vinícola portuguesa, entre histórias e brindess ao pôr do sol.",
    experience4Quote: "O sabor da terra em cada gole",
    contactsLocation: "Localização",
    contactsPhone: "Telefone",
    contactsEmail: "Email",
    contactsFollowUs: "Siga-nos nas redes sociais",
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
    experiencesTitle: "Experiences",
    experiencesText: "Live Unforgettable Moments",
    experience1Type: "Flavors with Soul",
    experience1Title: "Culinary Experiences",
    experience1Text:
      "Intimate candlelit dinners where every dish tells a story. Local ingredients transformed into memories to be savored slowly.",
    experience1Quote: "The table, a stage for encounters",
    experience2Type: "Between the Woods and the River",
    experience2Title: "Nature Walks",
    experience2Text:
      "The woods in front of the house invite you to wander among centuries‑old trees. At dawn, as the mist dances over the Tâmega, discover secret trails and moments of pure contemplation.",
    experience2Quote: "Where time is measured in breaths",
    experience3Type: "Amarante's Heritage",
    experience3Title: "Cultural Experiences",
    experience3Text:
      "Follow in the footsteps of Amadeu de Souza‑Cardoso, Teixeira de Pascoaes, and Agustina Bessa‑Luís. Guided visits that reveal the artistic and literary soul of this land, where every street is a verse.",
    experience3Quote: "In the words of those who dreamed here",
    experience4Type: "Douro Nectars",
    experience4Title: "Wine Tasting",
    experience4Text:
      "A sensory journey through the region’s wines, paired with artisanal cheeses and cured meats. Each glass is a celebration of Portuguese winemaking tradition, with stories and toasts at sunset.",
    experience4Quote: "The taste of the land in every sip",
    contactsLocation: "Location",
    contactsPhone: "Phone",
    contactsEmail: "Email",
    contactsFollowUs: "Follow us on social media",
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
