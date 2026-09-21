// SEM School — contenu centralisé du site.
// Faits de marque à préserver verbatim (récépissé, ministère, contact) :
// voir le README du design system. Les blocs marqués PROVISOIRE sont à
// valider/compléter par la direction avant mise en ligne.

export const site = {
  name: 'SEM School',
  tagline: 'Apprendre · Grandir · Réussir',
  // Version affirmée (voix active) pour le hero de l'accueil
  heroHeadline: "Nous offrons un enseignement de qualité pour 100% de réussite à chaque examen.",
  // Version institutionnelle (infinitif) conservée pour la page « L'école »
  mission: "Fournir une bonne qualité d'enseignement pour 100% de réussite à chaque examen.",
  objective: 'La réussite des enfants, notre objectif.',
  schoolYear: '2026-2027',
  foundedYear: 2026,
  nationalMotto: 'Un Peuple – Un But – Une Foi',
  official: {
    recepisse: 'Récépissé N° 00906/IA/SG/BEP/IG du 28 avril 2026',
    ministry: "Ministère de l'Éducation Nationale",
    inspection: "Inspection d'Académie de Pikine Guédiawaye / Yeumbeul Nord",
  },
  contact: {
    phone: '+221 76 549 53 88',
    phoneHref: 'tel:+221765495388',
    whatsappHref: 'https://wa.me/221765495388',
    email: 'contact@sem-school.com',
    emailHref: 'mailto:contact@sem-school.com',
    address: 'Cité Sonatel, Malika (Dakar), à côté du terrain de basket',
    zone: 'Pikine Guédiawaye / Yeumbeul Nord',
    // Coordonnées exactes du bâtiment (Cité Sonatel, à côté du terrain de basket)
    coords: { lat: 14.7844466, lon: -17.3376868 },
  },
} as const;

// Navigation principale — site une seule page (ancres vers les sections)
export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/#ecole', label: 'Notre école' },
  { href: '/#niveaux', label: 'Niveaux' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Contact' },
] as const;

// Atouts de l'école — bande navy (design 1B)
export const atouts = [
  { icon: 'users', title: 'Effectifs réduits', text: 'Un suivi optimal et personnalisé de chaque élève.' },
  { icon: 'utensils', title: 'Réfectoire & cantine', text: 'Des repas équilibrés servis sur place.' },
  { icon: 'activity', title: 'Infirmerie', text: 'La santé et la sécurité des élèves assurées.' },
  { icon: 'monitor', title: 'Salle informatique', text: "L'initiation au numérique dès le plus jeune âge." },
  { icon: 'languages', title: 'Bilingue', text: 'Enseignement bilingue à partir de la classe de CI.' },
] as const;

// Offre pédagogique complète — préscolaire → Terminale (page Nos niveaux)
export const cycles = [
  {
    id: 'prescolaire',
    name: 'Préscolaire',
    subtitle: 'Maternelle',
    classes: ['Petite Section', 'Moyenne Section', 'Grande Section'],
    // PROVISOIRE — description pédagogique à valider
    description:
      "Les premiers apprentissages dans un cadre bienveillant : éveil, langage, motricité et socialisation pour préparer l'entrée à l'école élémentaire.",
  },
  {
    id: 'elementaire',
    name: 'Élémentaire',
    subtitle: 'Primaire',
    classes: ['CI', 'CP', 'CE1', 'CE2', 'CM1', 'CM2'],
    // PROVISOIRE
    description:
      "L'acquisition des fondamentaux — lecture, écriture, calcul — jusqu'à la préparation du Certificat de Fin d'Études Élémentaires (CFEE).",
  },
  {
    id: 'moyen',
    name: 'Moyen',
    subtitle: 'Collège',
    classes: ['6ème', '5ème', '4ème', '3ème'],
    // PROVISOIRE
    description:
      "Le cycle du collège, de la 6ème à la 3ème, jusqu'à la préparation du Brevet de Fin d'Études Moyennes (BFEM).",
  },
  {
    id: 'secondaire',
    name: 'Lycée',
    subtitle: 'Secondaire',
    classes: ['Seconde', 'Première', 'Terminale'],
    series: ['Série L (littéraire)', 'Série S (scientifique)'],
    // PROVISOIRE
    description:
      "Le cycle secondaire, de la Seconde à la Terminale, en séries littéraire (L) et scientifique (S), jusqu'au Baccalauréat.",
  },
] as const;

// Classes ouvertes aux inscriptions pour la rentrée 2026-2027 (sous-ensemble
// volontairement restreint — page Admissions). Repris du design system.
export const admissions2627 = {
  note:
    "Pour la rentrée 2026-2027, les inscriptions sont ouvertes à un nombre limité de classes, afin de garantir un suivi et un niveau optimal des élèves.",
  groups: [
    {
      classes: 'Petite, Moyenne et Grande Section',
      modality: 'Inscriptions ouvertes',
      date: 'dès le 10 août 2026',
      test: false,
    },
    {
      classes: 'CI, 6ème, Secondes S et L',
      modality: 'Inscriptions ouvertes',
      date: 'dès le 03 septembre 2026',
      test: false,
    },
    {
      classes: 'CP, CE1, CE2, 5ème',
      modality: 'Test obligatoire',
      date: 'le 10 septembre 2026',
      test: true,
    },
  ],
  // PROVISOIRE — liste à compléter par la direction
  documents: [
    'Extrait de naissance',
    "Bulletins des années précédentes (à partir du CP, si l'élève était déjà scolarisé)",
    '[À compléter par la direction]',
  ],
} as const;

// Reportage TV du lancement — hébergé sur YouTube (façade au clic côté page,
// aucun appel à Google tant que le visiteur ne lance pas la lecture).
export const reportage = {
  youtubeId: 'i9hG3gA9Aog',
  url: 'https://youtu.be/i9hG3gA9Aog',
  source: 'Walfadjri TV',
  duration: '2 min 21',
  poster: '/video/reportage-walf.webp',
  title: 'Le lancement de SEM School vu par Walfadjri TV',
  // PROVISOIRE — description à valider par la direction
  text: "La chaîne Walfadjri TV a couvert l'inauguration de l'école à Malika.",
} as const;

// Frais de scolarité 2026-2027 (FCFA) — repris verbatim de la fiche de tarifs
// officielle. Montants en nombres : les totaux sont calculés à l'affichage
// (total = droits d'inscription + frais généraux + uniformes + mensualité).
export const tarifs = {
  currency: 'FCFA',
  provisional: false,
  // Condition d'application de la grille
  eligibility:
    "Grille réservée aux habitants de la Cité Sonatel, sur présentation d'un justificatif de domicile.",
  // Offre de lancement : les droits d'inscription sont déduits du total
  offer: {
    title: "Droits d'inscription offerts cette année",
    text: "Pour les élèves habitant les quartiers à proximité, sur présentation d'un certificat de domicile.",
  },
  groups: [
    {
      name: 'Préscolaire',
      rows: [
        { classe: 'P.S', inscription: 15000, generaux: 2000, uniformes: 20000, mensualite: 10000, sport: 10000, cantine: 15000 },
        { classe: 'M.S', inscription: 15000, generaux: 2000, uniformes: 20000, mensualite: 11000, sport: 10000, cantine: 15000 },
        { classe: 'G.S', inscription: 15000, generaux: 2000, uniformes: 20000, mensualite: 12000, sport: 10000, cantine: 15000 },
      ],
    },
    {
      name: 'Élémentaire',
      rows: [
        { classe: 'C.I / C.P', inscription: 17000, generaux: 2500, uniformes: 25000, mensualite: 15000, sport: 12500, cantine: 15000 },
        { classe: 'CE1 / CE2', inscription: 17500, generaux: 2500, uniformes: 25000, mensualite: 16000, sport: 12500, cantine: 15000 },
        { classe: 'CM1', inscription: 18000, generaux: 2500, uniformes: 25000, mensualite: 18000, sport: 12500, cantine: 15000 },
      ],
    },
    {
      name: 'Collège / Lycée',
      rows: [
        { classe: '6ème / 5ème', inscription: 19000, generaux: 2500, uniformes: 25000, mensualite: 19000, sport: 12500, cantine: 15000 },
        { classe: '4ème', inscription: 21000, generaux: 2500, uniformes: 25000, mensualite: 21000, sport: 12500, cantine: 15000 },
        { classe: '2nde', inscription: 23000, generaux: 2500, uniformes: 25000, mensualite: 25000, sport: 12500, cantine: 15000 },
      ],
    },
  ],
  notes: [
    "TOTAL à payer à l'inscription = droits d'inscription + frais généraux + uniformes + dernier mois de scolarité.",
    "L'uniforme n'est obligatoire qu'à la première inscription.",
    "Un service de transport est disponible ; les frais varient selon le lieu d'habitation.",
    'Cours de vacances : début le 10 août 2026, inscription 10 000 FCFA.',
  ],
} as const;

// FAQ (page Admissions) — repris du design system
export const faqs = [
  {
    question: 'Quand débutent les inscriptions ?',
    answer:
      "Le 10 août 2026 pour la petite, moyenne et grande section ; le 03 septembre 2026 pour CI, 6ème et secondes S/L ; le 10 septembre 2026 pour CP, CE1, CE2 et 5ème (avec test obligatoire).",
  },
  {
    question: 'Le test est-il obligatoire pour toutes les classes ?',
    answer: "Non — uniquement pour les classes de CP, CE1, CE2 et 5ème.",
  },
  {
    question: "Où puis-je obtenir plus d'informations ?",
    answer:
      "Contactez-nous au +221 76 549 53 88 ou par email à contact@sem-school.com.",
  },
] as const;

// Cours de vacances (page dédiée) — PROVISOIRE hors date officielle
export const coursVacances = {
  start: 'à partir du 10 août 2026',
  // PROVISOIRE — à préciser par la direction
  intro:
    "SEM School organise des cours de vacances pour permettre aux élèves de consolider leurs acquis et de préparer sereinement la rentrée.",
  details: [
    { label: 'Niveaux concernés', value: '[À préciser par la direction]' },
    { label: 'Matières', value: '[À préciser — ex. français, mathématiques]' },
    { label: 'Horaires', value: '[À préciser]' },
    { label: 'Tarif', value: '[À préciser]' },
  ],
} as const;

// Mot de la direction — TEXTE PROVISOIRE (page L'école), à valider et signer.
export const directionWord = {
  provisional: false,
  paragraphs: [
    "C'est avec fierté que nous ouvrons les portes de SEM School pour l'année scolaire 2026-2027. Notre école est née d'une conviction simple : chaque enfant mérite un enseignement de qualité, dans un cadre à la fois bienveillant et exigeant, du préscolaire jusqu'au lycée.",
    "Notre engagement tient en trois mots — Apprendre, Grandir, Réussir. Grâce à des effectifs réduits et à un suivi personnalisé, nous mettons tout en œuvre pour préparer chaque élève à la réussite de ses examens.",
    "Nous serons honorés de vous accueillir et de construire, avec vous, l'avenir de vos enfants.",
  ],
  name: 'Sémou Diop',
  role: 'Fondateur — SEM School',
} as const;
