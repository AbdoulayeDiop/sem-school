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
    address: 'Malika, Dakar, Sénégal',
    zone: 'Pikine Guédiawaye / Yeumbeul Nord',
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

// Frais de scolarité — VALEURS PROVISOIRES (FCFA), en cartes (design 1B).
export const tarifs = {
  currency: 'FCFA',
  provisional: false,
  rows: [
    { name: 'Préscolaire', sub: 'PS · MS · GS', inscription: '20 000', mensualite: '15 000', uniformes: '10 000', sport: null, featured: false },
    { name: 'Élémentaire', sub: 'CI → CM2', inscription: '25 000', mensualite: '20 000', uniformes: '15 000', sport: '8 000', featured: false },
    { name: 'Collège', sub: '6ème → 3ème', inscription: '30 000', mensualite: '25 000', uniformes: '20 000', sport: '10 000', featured: false },
    { name: 'Lycée', sub: '2nde → Tle (S & L)', inscription: '35 000', mensualite: '30 000', uniformes: '25 000', sport: '13 000', featured: true },
  ],
  notes: [
    "En plus des frais d'inscription, le dernier mois de scolarité est réglé lors de l'inscription (juin pour le préscolaire et l'élémentaire, juillet pour le collège et le lycée).",
    'Les 2 uniformes sont obligatoires lors de la première inscription uniquement.',
  ],
  options: [
    { label: 'Cantine', value: '10 000 FCFA / mois' },
    { label: 'Transport', value: "Tarif selon le lieu d'habitation" },
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
