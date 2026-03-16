import { Locale } from "@/lib/i18n";

export interface Messages {
  nav: {
    home: string;
    rooms: string;
    reservations: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    text: string;
  };
  rooms_preview: {
    title: string;
    view_details: string;
    per_night: string;
    guests: string;
    book_room: string;
  };
  rooms_data: {
    name: string;
    description: string;
    price: string;
    capacity: string;
    amenities: string[];
  }[];
  highlights: {
    title: string;
    items: { icon: string; label: string; desc: string }[];
  };
  reviews: {
    title: string;
    items: { name: string; text: string; rating: number }[];
  };
  cta_bottom: {
    title: string;
    button: string;
  };
  reservations: {
    title: string;
    subtitle: string;
    checkin: string;
    checkout: string;
    room_type: string;
    adults: string;
    children: string;
    name: string;
    email: string;
    phone: string;
    notes: string;
    submit: string;
    success_title: string;
    success_text: string;
    back_home: string;
    select_room: string;
    fully_booked: string;
  };
  about: {
    title: string;
    story_title: string;
    story: string[];
    team_title: string;
    location_title: string;
    location_desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    success: string;
    phone: string;
    whatsapp: string;
    email_addr: string;
  };
  footer: {
    rights: string;
    demo_note: string;
  };
}

const es: Messages = {
  nav: {
    home: "Inicio",
    rooms: "Habitaciones",
    reservations: "Reservas",
    about: "Sobre Nosotros",
    contact: "Contacto",
  },
  hero: {
    title: "Casa Rural El Olivo",
    subtitle: "Tu refugio en el corazón del Alt Empordà",
    cta: "Reservar ahora",
  },
  intro: {
    text: "Enclavada entre centenarios olivos y viñedos del Alt Empordà, Casa Rural El Olivo es una antigua masía del siglo XVIII restaurada con mimo por tres generaciones de la familia Puig. Aquí el tiempo se detiene: desayunos con productos de la huerta, tardes junto a la piscina y noches bajo un cielo estrellado.",
  },
  rooms_preview: {
    title: "Nuestras Habitaciones",
    view_details: "Ver detalles",
    per_night: "/noche",
    guests: "huéspedes",
    book_room: "Reservar esta habitación",
  },
  rooms_data: [
    {
      name: "Suite Olivo",
      description:
        "Nuestra suite más espaciosa, con vigas de madera originales, bañera exenta y terraza privada con vistas al olivar. Ideal para parejas que buscan una experiencia romántica e inolvidable.",
      price: "120–160€",
      capacity: "2",
      amenities: [
        "Terraza privada",
        "Bañera exenta",
        "Aire acondicionado",
        "WiFi",
        "Minibar",
        "Vistas al olivar",
      ],
    },
    {
      name: "Habitación Lavanda",
      description:
        "Habitación acogedora decorada con tonos provenzales, suelos de terracota y una ventana que enmarca los campos de lavanda. Perfecta para una estancia tranquila y confortable.",
      price: "85–110€",
      capacity: "2",
      amenities: [
        "Vista al jardín",
        "Ducha de lluvia",
        "Aire acondicionado",
        "WiFi",
        "Secador de pelo",
      ],
    },
    {
      name: "Estudio Rústico",
      description:
        "Un encantador estudio independiente con cocina pequeña, perfecto para estancias largas o viajeros que valoran su autonomía. Combina el encanto rústico con todas las comodidades modernas.",
      price: "70–95€",
      capacity: "2–3",
      amenities: [
        "Cocina equipada",
        "Entrada independiente",
        "Aire acondicionado",
        "WiFi",
        "Zona de trabajo",
      ],
    },
  ],
  highlights: {
    title: "Experiencias que te esperan",
    items: [
      { icon: "pool", label: "Piscina", desc: "Piscina al aire libre rodeada de olivos" },
      { icon: "hiking", label: "Senderismo", desc: "Rutas por el Parque Natural del Cap de Creus" },
      { icon: "breakfast", label: "Desayuno", desc: "Productos frescos de nuestra huerta" },
      { icon: "wifi", label: "WiFi", desc: "Conexión de alta velocidad en toda la finca" },
      { icon: "parking", label: "Parking", desc: "Aparcamiento gratuito y privado" },
      { icon: "pet", label: "Pet-friendly", desc: "Tus mascotas también son bienvenidas" },
    ],
  },
  reviews: {
    title: "Lo que dicen nuestros huéspedes",
    items: [
      {
        name: "María García",
        text: "Un lugar mágico. Despertarse con el canto de los pájaros y desayunar bajo los olivos fue una experiencia que nunca olvidaremos.",
        rating: 5,
      },
      {
        name: "James Wilson",
        text: "The perfect escape from the city. The hosts made us feel like family, and the views from the pool are absolutely stunning.",
        rating: 5,
      },
      {
        name: "Anna Puigvert",
        text: "Hem repetit tres vegades i cada cop ens sorprenen. La Suite Olivo és una meravella. Molt recomanable!",
        rating: 5,
      },
    ],
  },
  cta_bottom: {
    title: "¿Listo para desconectar?",
    button: "Reservar ahora",
  },
  reservations: {
    title: "Reservas",
    subtitle: "Reserva tu estancia en Casa Rural El Olivo",
    checkin: "Fecha de entrada",
    checkout: "Fecha de salida",
    room_type: "Tipo de habitación",
    adults: "Adultos",
    children: "Niños",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    notes: "Notas adicionales",
    submit: "Confirmar reserva",
    success_title: "¡Reserva recibida!",
    success_text:
      "Gracias por tu reserva. Te enviaremos un correo de confirmación en breve. Si tienes alguna pregunta, no dudes en contactarnos.",
    back_home: "Volver al inicio",
    select_room: "Selecciona una habitación",
    fully_booked: "Completo",
  },
  about: {
    title: "Sobre Nosotros",
    story_title: "Nuestra Historia",
    story: [
      "La historia de Casa Rural El Olivo comienza en 1923, cuando el bisabuelo Joan Puig adquirió una masía en ruinas rodeada de un centenario olivar en el corazón del Alt Empordà.",
      "Durante décadas, la familia cultivó olivos y produjo aceite artesanal. En 2018, la tercera generación — Marc y Laia Puig — decidió restaurar la masía piedra a piedra, conservando las vigas originales, los suelos de terracota y el encanto de otra época.",
      "Hoy, Casa Rural El Olivo abre sus puertas a viajeros que buscan autenticidad, tranquilidad y la calidez de una familia que ama profundamente esta tierra.",
    ],
    team_title: "La Familia Puig",
    location_title: "Ubicación",
    location_desc:
      "Estamos en el Alt Empordà, Girona — a 30 minutos de las playas de la Costa Brava y a 15 minutos de Figueres, la ciudad natal de Dalí.",
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes alguna pregunta? Estamos encantados de ayudarte.",
    name: "Nombre",
    email: "Correo electrónico",
    subject: "Asunto",
    message: "Mensaje",
    submit: "Enviar mensaje",
    success: "¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.",
    phone: "+34 972 123 456",
    whatsapp: "+34 672 345 678",
    email_addr: "info@casaruralelolivo.com",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    demo_note:
      "Este es un proyecto demo creado por SastreWeb. Todo el contenido es ficticio.",
  },
};

const en: Messages = {
  nav: {
    home: "Home",
    rooms: "Rooms",
    reservations: "Reservations",
    about: "About Us",
    contact: "Contact",
  },
  hero: {
    title: "Casa Rural El Olivo",
    subtitle: "Your retreat in the heart of Alt Empordà",
    cta: "Book now",
  },
  intro: {
    text: "Nestled among centuries-old olive trees and vineyards of the Alt Empordà, Casa Rural El Olivo is an 18th-century farmhouse lovingly restored by three generations of the Puig family. Here, time stands still: breakfasts with garden-fresh produce, lazy afternoons by the pool, and nights under a starlit sky.",
  },
  rooms_preview: {
    title: "Our Rooms",
    view_details: "View details",
    per_night: "/night",
    guests: "guests",
    book_room: "Book this room",
  },
  rooms_data: [
    {
      name: "Olive Suite",
      description:
        "Our most spacious suite, featuring original wooden beams, a freestanding bathtub, and a private terrace overlooking the olive grove. Ideal for couples seeking a romantic and unforgettable experience.",
      price: "€120–160",
      capacity: "2",
      amenities: [
        "Private terrace",
        "Freestanding bathtub",
        "Air conditioning",
        "WiFi",
        "Minibar",
        "Olive grove views",
      ],
    },
    {
      name: "Lavender Room",
      description:
        "A cozy room decorated in Provençal tones, with terracotta floors and a window framing the lavender fields. Perfect for a peaceful and comfortable stay.",
      price: "€85–110",
      capacity: "2",
      amenities: [
        "Garden view",
        "Rain shower",
        "Air conditioning",
        "WiFi",
        "Hair dryer",
      ],
    },
    {
      name: "Rustic Studio",
      description:
        "A charming independent studio with a small kitchen, perfect for longer stays or travelers who value their independence. Combines rustic charm with all modern comforts.",
      price: "€70–95",
      capacity: "2–3",
      amenities: [
        "Equipped kitchen",
        "Independent entrance",
        "Air conditioning",
        "WiFi",
        "Work area",
      ],
    },
  ],
  highlights: {
    title: "Experiences awaiting you",
    items: [
      { icon: "pool", label: "Pool", desc: "Outdoor pool surrounded by olive trees" },
      { icon: "hiking", label: "Hiking", desc: "Trails through Cap de Creus Natural Park" },
      { icon: "breakfast", label: "Breakfast", desc: "Fresh produce from our garden" },
      { icon: "wifi", label: "WiFi", desc: "High-speed connection across the estate" },
      { icon: "parking", label: "Parking", desc: "Free private parking" },
      { icon: "pet", label: "Pet-friendly", desc: "Your furry friends are welcome too" },
    ],
  },
  reviews: {
    title: "What our guests say",
    items: [
      {
        name: "María García",
        text: "A magical place. Waking up to birdsong and having breakfast under the olive trees was an experience we'll never forget.",
        rating: 5,
      },
      {
        name: "James Wilson",
        text: "The perfect escape from the city. The hosts made us feel like family, and the views from the pool are absolutely stunning.",
        rating: 5,
      },
      {
        name: "Anna Puigvert",
        text: "We've come back three times and they always surprise us. The Olive Suite is a marvel. Highly recommended!",
        rating: 5,
      },
    ],
  },
  cta_bottom: {
    title: "Ready to disconnect?",
    button: "Book now",
  },
  reservations: {
    title: "Reservations",
    subtitle: "Book your stay at Casa Rural El Olivo",
    checkin: "Check-in date",
    checkout: "Check-out date",
    room_type: "Room type",
    adults: "Adults",
    children: "Children",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    notes: "Additional notes",
    submit: "Confirm booking",
    success_title: "Booking received!",
    success_text:
      "Thank you for your booking. We'll send you a confirmation email shortly. If you have any questions, don't hesitate to contact us.",
    back_home: "Back to home",
    select_room: "Select a room",
    fully_booked: "Fully booked",
  },
  about: {
    title: "About Us",
    story_title: "Our Story",
    story: [
      "The story of Casa Rural El Olivo begins in 1923, when great-grandfather Joan Puig acquired a ruined farmhouse surrounded by a centuries-old olive grove in the heart of the Alt Empordà.",
      "For decades, the family cultivated olive trees and produced artisan oil. In 2018, the third generation — Marc and Laia Puig — decided to restore the farmhouse stone by stone, preserving the original beams, terracotta floors, and the charm of a bygone era.",
      "Today, Casa Rural El Olivo opens its doors to travelers seeking authenticity, tranquility, and the warmth of a family that deeply loves this land.",
    ],
    team_title: "The Puig Family",
    location_title: "Location",
    location_desc:
      "We're located in the Alt Empordà, Girona — 30 minutes from the Costa Brava beaches and 15 minutes from Figueres, Dalí's hometown.",
  },
  contact: {
    title: "Contact",
    subtitle: "Have a question? We'd love to help.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send message",
    success: "Thank you! We've received your message and will reply soon.",
    phone: "+34 972 123 456",
    whatsapp: "+34 672 345 678",
    email_addr: "info@casaruralelolivo.com",
  },
  footer: {
    rights: "All rights reserved.",
    demo_note:
      "This is a demo project created by SastreWeb. All content is fictional.",
  },
};

const pt: Messages = {
  nav: {
    home: "Início",
    rooms: "Quartos",
    reservations: "Reservas",
    about: "Sobre Nós",
    contact: "Contacto",
  },
  hero: {
    title: "Casa Rural El Olivo",
    subtitle: "O seu refúgio no coração do Alt Empordà",
    cta: "Reservar agora",
  },
  intro: {
    text: "Aninhada entre oliveiras centenárias e vinhedos do Alt Empordà, a Casa Rural El Olivo é uma antiga quinta do século XVIII restaurada com carinho por três gerações da família Puig. Aqui o tempo para: pequenos-almoços com produtos da horta, tardes junto à piscina e noites sob um céu estrelado.",
  },
  rooms_preview: {
    title: "Os Nossos Quartos",
    view_details: "Ver detalhes",
    per_night: "/noite",
    guests: "hóspedes",
    book_room: "Reservar este quarto",
  },
  rooms_data: [
    {
      name: "Suite Olivo",
      description:
        "A nossa suite mais espaçosa, com vigas de madeira originais, banheira independente e terraço privado com vista para o olival. Ideal para casais que procuram uma experiência romântica e inesquecível.",
      price: "120–160€",
      capacity: "2",
      amenities: [
        "Terraço privado",
        "Banheira independente",
        "Ar condicionado",
        "WiFi",
        "Minibar",
        "Vista para o olival",
      ],
    },
    {
      name: "Quarto Lavanda",
      description:
        "Quarto acolhedor decorado com tons provençais, pavimentos de terracota e uma janela que emoldura os campos de lavanda. Perfeito para uma estadia tranquila e confortável.",
      price: "85–110€",
      capacity: "2",
      amenities: [
        "Vista para o jardim",
        "Chuveiro de chuva",
        "Ar condicionado",
        "WiFi",
        "Secador de cabelo",
      ],
    },
    {
      name: "Estúdio Rústico",
      description:
        "Um encantador estúdio independente com kitchenette, perfeito para estadias longas ou viajantes que valorizam a sua autonomia. Combina o charme rústico com todo o conforto moderno.",
      price: "70–95€",
      capacity: "2–3",
      amenities: [
        "Cozinha equipada",
        "Entrada independente",
        "Ar condicionado",
        "WiFi",
        "Zona de trabalho",
      ],
    },
  ],
  highlights: {
    title: "Experiências que o esperam",
    items: [
      { icon: "pool", label: "Piscina", desc: "Piscina ao ar livre rodeada de oliveiras" },
      { icon: "hiking", label: "Caminhadas", desc: "Trilhos pelo Parque Natural do Cap de Creus" },
      { icon: "breakfast", label: "Pequeno-almoço", desc: "Produtos frescos da nossa horta" },
      { icon: "wifi", label: "WiFi", desc: "Ligação de alta velocidade em toda a propriedade" },
      { icon: "parking", label: "Estacionamento", desc: "Estacionamento gratuito e privado" },
      { icon: "pet", label: "Pet-friendly", desc: "Os seus animais de estimação também são bem-vindos" },
    ],
  },
  reviews: {
    title: "O que dizem os nossos hóspedes",
    items: [
      {
        name: "María García",
        text: "Um lugar mágico. Acordar com o canto dos pássaros e tomar o pequeno-almoço debaixo das oliveiras foi uma experiência que nunca esqueceremos.",
        rating: 5,
      },
      {
        name: "James Wilson",
        text: "A fuga perfeita da cidade. Os anfitriões fizeram-nos sentir em família e as vistas da piscina são absolutamente deslumbrantes.",
        rating: 5,
      },
      {
        name: "Anna Puigvert",
        text: "Voltámos três vezes e surpreendem-nos sempre. A Suite Olivo é uma maravilha. Altamente recomendável!",
        rating: 5,
      },
    ],
  },
  cta_bottom: {
    title: "Pronto para desligar?",
    button: "Reservar agora",
  },
  reservations: {
    title: "Reservas",
    subtitle: "Reserve a sua estadia na Casa Rural El Olivo",
    checkin: "Data de entrada",
    checkout: "Data de saída",
    room_type: "Tipo de quarto",
    adults: "Adultos",
    children: "Crianças",
    name: "Nome completo",
    email: "E-mail",
    phone: "Telefone",
    notes: "Notas adicionais",
    submit: "Confirmar reserva",
    success_title: "Reserva recebida!",
    success_text:
      "Obrigado pela sua reserva. Enviaremos um e-mail de confirmação em breve. Se tiver alguma pergunta, não hesite em contactar-nos.",
    back_home: "Voltar ao início",
    select_room: "Selecione um quarto",
    fully_booked: "Lotado",
  },
  about: {
    title: "Sobre Nós",
    story_title: "A Nossa História",
    story: [
      "A história da Casa Rural El Olivo começa em 1923, quando o bisavô Joan Puig adquiriu uma quinta em ruínas rodeada de um olival centenário no coração do Alt Empordà.",
      "Durante décadas, a família cultivou oliveiras e produziu azeite artesanal. Em 2018, a terceira geração — Marc e Laia Puig — decidiu restaurar a quinta pedra a pedra, preservando as vigas originais, os pavimentos de terracota e o charme de outra época.",
      "Hoje, a Casa Rural El Olivo abre as suas portas a viajantes que procuram autenticidade, tranquilidade e o calor de uma família que ama profundamente esta terra.",
    ],
    team_title: "A Família Puig",
    location_title: "Localização",
    location_desc:
      "Estamos no Alt Empordà, Girona — a 30 minutos das praias da Costa Brava e a 15 minutos de Figueres, a cidade natal de Dalí.",
  },
  contact: {
    title: "Contacto",
    subtitle: "Tem alguma pergunta? Teremos todo o prazer em ajudar.",
    name: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    submit: "Enviar mensagem",
    success: "Obrigado! Recebemos a sua mensagem e responderemos em breve.",
    phone: "+34 972 123 456",
    whatsapp: "+34 672 345 678",
    email_addr: "info@casaruralelolivo.com",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    demo_note:
      "Este é um projeto demo criado pela SastreWeb. Todo o conteúdo é fictício.",
  },
};

const fr: Messages = {
  nav: {
    home: "Accueil",
    rooms: "Chambres",
    reservations: "Réservations",
    about: "À propos",
    contact: "Contact",
  },
  hero: {
    title: "Casa Rural El Olivo",
    subtitle: "Votre refuge au cœur de l'Alt Empordà",
    cta: "Réserver maintenant",
  },
  intro: {
    text: "Nichée parmi les oliviers centenaires et les vignobles de l'Alt Empordà, la Casa Rural El Olivo est une ancienne ferme du XVIIIe siècle restaurée avec amour par trois générations de la famille Puig. Ici, le temps s'arrête : petits-déjeuners avec les produits du jardin, après-midis au bord de la piscine et nuits sous un ciel étoilé.",
  },
  rooms_preview: {
    title: "Nos Chambres",
    view_details: "Voir les détails",
    per_night: "/nuit",
    guests: "personnes",
    book_room: "Réserver cette chambre",
  },
  rooms_data: [
    {
      name: "Suite Olivo",
      description:
        "Notre suite la plus spacieuse, avec des poutres en bois d'origine, une baignoire îlot et une terrasse privée donnant sur l'oliveraie. Idéale pour les couples en quête d'une expérience romantique et inoubliable.",
      price: "120–160€",
      capacity: "2",
      amenities: [
        "Terrasse privée",
        "Baignoire îlot",
        "Climatisation",
        "WiFi",
        "Minibar",
        "Vue sur l'oliveraie",
      ],
    },
    {
      name: "Chambre Lavande",
      description:
        "Chambre chaleureuse décorée dans des tons provençaux, sols en terre cuite et une fenêtre encadrant les champs de lavande. Parfaite pour un séjour paisible et confortable.",
      price: "85–110€",
      capacity: "2",
      amenities: [
        "Vue sur le jardin",
        "Douche à l'italienne",
        "Climatisation",
        "WiFi",
        "Sèche-cheveux",
      ],
    },
    {
      name: "Studio Rustique",
      description:
        "Un charmant studio indépendant avec kitchenette, parfait pour les longs séjours ou les voyageurs qui apprécient leur autonomie. Allie le charme rustique à tout le confort moderne.",
      price: "70–95€",
      capacity: "2–3",
      amenities: [
        "Cuisine équipée",
        "Entrée indépendante",
        "Climatisation",
        "WiFi",
        "Espace de travail",
      ],
    },
  ],
  highlights: {
    title: "Des expériences qui vous attendent",
    items: [
      { icon: "pool", label: "Piscine", desc: "Piscine en plein air entourée d'oliviers" },
      { icon: "hiking", label: "Randonnée", desc: "Sentiers dans le Parc Naturel du Cap de Creus" },
      { icon: "breakfast", label: "Petit-déjeuner", desc: "Produits frais de notre potager" },
      { icon: "wifi", label: "WiFi", desc: "Connexion haut débit dans tout le domaine" },
      { icon: "parking", label: "Parking", desc: "Stationnement gratuit et privé" },
      { icon: "pet", label: "Animaux admis", desc: "Vos compagnons à quatre pattes sont les bienvenus" },
    ],
  },
  reviews: {
    title: "Ce que disent nos hôtes",
    items: [
      {
        name: "María García",
        text: "Un lieu magique. Se réveiller au chant des oiseaux et prendre le petit-déjeuner sous les oliviers fut une expérience inoubliable.",
        rating: 5,
      },
      {
        name: "James Wilson",
        text: "L'évasion parfaite loin de la ville. Les hôtes nous ont fait sentir comme en famille, et la vue depuis la piscine est absolument magnifique.",
        rating: 5,
      },
      {
        name: "Anna Puigvert",
        text: "Nous sommes revenus trois fois et ils nous surprennent toujours. La Suite Olivo est une merveille. Très recommandé !",
        rating: 5,
      },
    ],
  },
  cta_bottom: {
    title: "Prêt à déconnecter ?",
    button: "Réserver maintenant",
  },
  reservations: {
    title: "Réservations",
    subtitle: "Réservez votre séjour à la Casa Rural El Olivo",
    checkin: "Date d'arrivée",
    checkout: "Date de départ",
    room_type: "Type de chambre",
    adults: "Adultes",
    children: "Enfants",
    name: "Nom complet",
    email: "E-mail",
    phone: "Téléphone",
    notes: "Notes supplémentaires",
    submit: "Confirmer la réservation",
    success_title: "Réservation reçue !",
    success_text:
      "Merci pour votre réservation. Nous vous enverrons un e-mail de confirmation sous peu. Si vous avez des questions, n'hésitez pas à nous contacter.",
    back_home: "Retour à l'accueil",
    select_room: "Sélectionnez une chambre",
    fully_booked: "Complet",
  },
  about: {
    title: "À propos de nous",
    story_title: "Notre Histoire",
    story: [
      "L'histoire de la Casa Rural El Olivo commence en 1923, lorsque l'arrière-grand-père Joan Puig a acquis une ferme en ruines entourée d'une oliveraie centenaire au cœur de l'Alt Empordà.",
      "Pendant des décennies, la famille a cultivé des oliviers et produit de l'huile artisanale. En 2018, la troisième génération — Marc et Laia Puig — a décidé de restaurer la ferme pierre par pierre, en préservant les poutres d'origine, les sols en terre cuite et le charme d'une époque révolue.",
      "Aujourd'hui, la Casa Rural El Olivo ouvre ses portes aux voyageurs en quête d'authenticité, de tranquillité et de la chaleur d'une famille profondément attachée à cette terre.",
    ],
    team_title: "La Famille Puig",
    location_title: "Emplacement",
    location_desc:
      "Nous sommes situés dans l'Alt Empordà, Gérone — à 30 minutes des plages de la Costa Brava et à 15 minutes de Figueres, la ville natale de Dalí.",
  },
  contact: {
    title: "Contact",
    subtitle: "Vous avez une question ? Nous serons ravis de vous aider.",
    name: "Nom",
    email: "E-mail",
    subject: "Objet",
    message: "Message",
    submit: "Envoyer le message",
    success: "Merci ! Nous avons bien reçu votre message et vous répondrons rapidement.",
    phone: "+34 972 123 456",
    whatsapp: "+34 672 345 678",
    email_addr: "info@casaruralelolivo.com",
  },
  footer: {
    rights: "Tous droits réservés.",
    demo_note:
      "Ceci est un projet démo créé par SastreWeb. Tout le contenu est fictif.",
  },
};

const de: Messages = {
  nav: {
    home: "Startseite",
    rooms: "Zimmer",
    reservations: "Reservierungen",
    about: "Über uns",
    contact: "Kontakt",
  },
  hero: {
    title: "Casa Rural El Olivo",
    subtitle: "Ihr Rückzugsort im Herzen des Alt Empordà",
    cta: "Jetzt buchen",
  },
  intro: {
    text: "Eingebettet zwischen jahrhundertealten Olivenbäumen und Weinbergen des Alt Empordà ist die Casa Rural El Olivo ein Bauernhaus aus dem 18. Jahrhundert, das von drei Generationen der Familie Puig liebevoll restauriert wurde. Hier steht die Zeit still: Frühstück mit Produkten aus dem eigenen Garten, Nachmittage am Pool und Nächte unter einem Sternenhimmel.",
  },
  rooms_preview: {
    title: "Unsere Zimmer",
    view_details: "Details ansehen",
    per_night: "/Nacht",
    guests: "Gäste",
    book_room: "Dieses Zimmer buchen",
  },
  rooms_data: [
    {
      name: "Suite Olivo",
      description:
        "Unsere geräumigste Suite mit originalen Holzbalken, freistehender Badewanne und privater Terrasse mit Blick auf den Olivenhain. Ideal für Paare, die ein romantisches und unvergessliches Erlebnis suchen.",
      price: "120–160€",
      capacity: "2",
      amenities: [
        "Private Terrasse",
        "Freistehende Badewanne",
        "Klimaanlage",
        "WLAN",
        "Minibar",
        "Blick auf den Olivenhain",
      ],
    },
    {
      name: "Zimmer Lavendel",
      description:
        "Gemütliches Zimmer im provenzalischen Stil, mit Terrakottaböden und einem Fenster mit Blick auf die Lavendelfelder. Perfekt für einen ruhigen und komfortablen Aufenthalt.",
      price: "85–110€",
      capacity: "2",
      amenities: [
        "Gartenblick",
        "Regendusche",
        "Klimaanlage",
        "WLAN",
        "Haartrockner",
      ],
    },
    {
      name: "Rustikales Studio",
      description:
        "Ein charmantes unabhängiges Studio mit kleiner Küche, perfekt für längere Aufenthalte oder Reisende, die ihre Unabhängigkeit schätzen. Verbindet rustikalen Charme mit allem modernen Komfort.",
      price: "70–95€",
      capacity: "2–3",
      amenities: [
        "Ausgestattete Küche",
        "Separater Eingang",
        "Klimaanlage",
        "WLAN",
        "Arbeitsbereich",
      ],
    },
  ],
  highlights: {
    title: "Erlebnisse, die auf Sie warten",
    items: [
      { icon: "pool", label: "Pool", desc: "Außenpool umgeben von Olivenbäumen" },
      { icon: "hiking", label: "Wandern", desc: "Wanderwege im Naturpark Cap de Creus" },
      { icon: "breakfast", label: "Frühstück", desc: "Frische Produkte aus unserem Garten" },
      { icon: "wifi", label: "WLAN", desc: "Highspeed-Verbindung auf dem gesamten Gelände" },
      { icon: "parking", label: "Parkplatz", desc: "Kostenloser privater Parkplatz" },
      { icon: "pet", label: "Haustierfreundlich", desc: "Ihre vierbeinigen Freunde sind ebenfalls willkommen" },
    ],
  },
  reviews: {
    title: "Was unsere Gäste sagen",
    items: [
      {
        name: "María García",
        text: "Ein magischer Ort. Aufwachen mit Vogelgesang und Frühstücken unter den Olivenbäumen war ein Erlebnis, das wir nie vergessen werden.",
        rating: 5,
      },
      {
        name: "James Wilson",
        text: "Die perfekte Flucht aus der Stadt. Die Gastgeber haben uns wie Familie behandelt, und der Blick vom Pool ist absolut atemberaubend.",
        rating: 5,
      },
      {
        name: "Anna Puigvert",
        text: "Wir waren schon dreimal hier und werden immer wieder überrascht. Die Suite Olivo ist ein Traum. Sehr empfehlenswert!",
        rating: 5,
      },
    ],
  },
  cta_bottom: {
    title: "Bereit abzuschalten?",
    button: "Jetzt buchen",
  },
  reservations: {
    title: "Reservierungen",
    subtitle: "Buchen Sie Ihren Aufenthalt in der Casa Rural El Olivo",
    checkin: "Anreisedatum",
    checkout: "Abreisedatum",
    room_type: "Zimmertyp",
    adults: "Erwachsene",
    children: "Kinder",
    name: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    notes: "Zusätzliche Anmerkungen",
    submit: "Buchung bestätigen",
    success_title: "Buchung eingegangen!",
    success_text:
      "Vielen Dank für Ihre Buchung. Wir senden Ihnen in Kürze eine Bestätigungs-E-Mail. Bei Fragen zögern Sie nicht, uns zu kontaktieren.",
    back_home: "Zurück zur Startseite",
    select_room: "Zimmer auswählen",
    fully_booked: "Ausgebucht",
  },
  about: {
    title: "Über uns",
    story_title: "Unsere Geschichte",
    story: [
      "Die Geschichte der Casa Rural El Olivo beginnt 1923, als Urgroßvater Joan Puig ein verfallenes Bauernhaus erwarb, umgeben von einem jahrhundertealten Olivenhain im Herzen des Alt Empordà.",
      "Über Jahrzehnte hinweg kultivierte die Familie Olivenbäume und produzierte handwerkliches Olivenöl. 2018 entschied sich die dritte Generation — Marc und Laia Puig — das Bauernhaus Stein für Stein zu restaurieren und dabei die originalen Balken, Terrakottaböden und den Charme einer vergangenen Epoche zu bewahren.",
      "Heute öffnet die Casa Rural El Olivo ihre Türen für Reisende, die Authentizität, Ruhe und die Wärme einer Familie suchen, die dieses Land von Herzen liebt.",
    ],
    team_title: "Die Familie Puig",
    location_title: "Lage",
    location_desc:
      "Wir befinden uns im Alt Empordà, Girona — 30 Minuten von den Stränden der Costa Brava und 15 Minuten von Figueres, Dalís Geburtsstadt, entfernt.",
  },
  contact: {
    title: "Kontakt",
    subtitle: "Haben Sie eine Frage? Wir helfen Ihnen gerne.",
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    submit: "Nachricht senden",
    success: "Vielen Dank! Wir haben Ihre Nachricht erhalten und werden Ihnen bald antworten.",
    phone: "+34 972 123 456",
    whatsapp: "+34 672 345 678",
    email_addr: "info@casaruralelolivo.com",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    demo_note:
      "Dies ist ein Demo-Projekt von SastreWeb. Alle Inhalte sind fiktiv.",
  },
};

export const messages: Record<string, Messages> = { es, en, pt, fr, de };
