export const portfolioDataFr = {
  name: "Reeshal",
  fullName: "Reeshal Rittoo",
  role: "Ingénieur Logiciel Senior",
  tagline: "Développeur Full-Stack · .NET · Angular · Cloud & DevOps",
  location: "Maurice 🌊",
  bio: "Développeur Full-Stack spécialisé en .NET et Angular. À l'aise avec la conteneurisation via Docker, les langages de requête PostgreSQL, NoSQL (Firebase) et MS SQL, ainsi qu'avec les pipelines CI/CD et les logiciels de messagerie comme RabbitMQ.",
  email: "rreeshal@gmail.com",
  phone: "+230 57263859",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/reeshal-rittoo-2422281b3",

  skills: [
    { name: ".NET / C#", category: "Backend" },
    { name: "ASP.NET Core", category: "Backend" },
    { name: "Microservices & OpenTelemetry", category: "Backend" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Flutter", category: "Frontend" },
    { name: "T-SQL / MS SQL", category: "Données" },
    { name: "PostgreSQL", category: "Données" },
    { name: "Firebase / NoSQL", category: "Données" },
    { name: "Docker", category: "DevOps" },
    { name: "Pipelines CI/CD", category: "DevOps" },
    { name: "RabbitMQ", category: "DevOps" },
    { name: "OpenShift / Kubernetes", category: "DevOps" },
    { name: "Arduino / Raspberry Pi", category: "Autre" },
  ],

  skillCategories: ["Backend", "Frontend", "Données", "DevOps", "Autre"],

  experience: [
    {
      company: "Infomil (Mauritius) Ltd",
      role: "Ingénieur Logiciel Senior",
      period: "Août 2024 — Présent",
      description:
        "Pilotage de la modernisation du système Leclerc Drive — migration de .NET Framework vers .NET 8, conteneurisation avec Docker et déploiement sur OpenShift/Kubernetes. Architecture des microservices Panier et RecetteCuisine avec un focus sur l'observabilité et la performance.",
      tags: [".NET 8", "Docker", "OpenShift", "PostgreSQL", "RabbitMQ", "Angular"],
    },
    {
      company: "Infomil (Mauritius) Ltd",
      role: "Ingénieur Logiciel",
      period: "Sep 2021 — Août 2024",
      description:
        "Développement et maintenance de fonctionnalités full-stack sur la plateforme e-commerce Leclerc Drive. Optimisation de requêtes T-SQL, développement d'APIs ASP.NET Core et de frontends Angular. Contribution à la configuration CI/CD et aux déploiements Docker.",
      tags: ["T-SQL", "ASP.NET Core", "Angular", "Docker", "CI/CD"],
    },
    {
      company: "SD Worx Mauritius",
      role: "Développeur Full-Stack (Stage)",
      period: "Juin 2020 — Août 2020",
      description:
        "Développement de fonctionnalités full-stack lors d'un stage de 3 mois, avec des APIs C# et des interfaces web. Découverte des pratiques de développement en entreprise et des workflows professionnels.",
      tags: ["C#", "Développement Web", "Full-Stack"],
    }],

  education: [
    {
      institution: "Université de Maurice",
      degree: "Licence en Informatique",
      period: "2018 — 2021",
      highlights: [
        "Participant — Google Hashcode 2021",
        "Animateur — UOM Divali Show 2019",
        "Compétition Web UOM 2019",
        "Hackathon Mohack 2018",
        "Responsable Marketing & Coordinateur — UoM Oracle Club (Jan 2019 – Août 2021)",
      ],
    },
    {
      institution: "Royal College de Curepipe",
      degree: "Lycée — Chimie, Mathématiques, Physique",
      period: "2011 — 2017",
      highlights: [],
    },
  ],

  certifications: [
    {
      title: "React Avancé",
      issuer: "Meta",
      date: "Fév 2026",
      credentialId: "ZX6AZXNW9DBF",
    },
    {
      title: "Bases de React",
      issuer: "Meta",
      date: "Fév 2026",
      credentialId: "0BDCC4QKV3K1",
    },
  ],

  projects: [
    {
      title: "Lunettes Intelligentes de Détection de Somnolence",
      period: "Sep 2020 — Août 2021",
      association: "Université de Maurice — Projet de Fin d'Études",
      description:
        "Lunettes utilisant des capteurs infrarouges et le Machine Learning pour détecter la somnolence et alerter l'utilisateur. Accompagnées d'une application mobile assistant en temps réel.",
      tags: ["Machine Learning", "IoT", "Application Mobile", "Python"],
    },
    {
      title: "Site de Prédiction de Maladies",
      association: "Université de Maurice",
      description:
        "L'utilisateur saisit ses symptômes et le système prédit la maladie probable, puis suggère des précautions et médicaments adaptés.",
      tags: ["Machine Learning", "Développement Web", "Santé"],
    },
    {
      title: "Système de Gestion pour l'ONG WeRecycle",
      description:
        "Site web permettant à l'ONG WeRecycle de gérer ses opérations de collecte de déchets de bout en bout.",
      tags: ["Full-Stack", "Développement Web", "ONG"],
    },
    {
      title: "Système de Gestion pour Papa Discount Ltd",
      description:
        "Application web et mobile permettant aux parties prenantes de gérer leurs magasins et produits en promotion sur plusieurs sites.",
      tags: ["Web", "Mobile", "Full-Stack"],
    },
    {
      title: "Voiture Robot à Navigation Intelligente",
      association: "Université de Maurice — Labo Robotique 2021",
      description:
        "Conception d'une voiture robot à navigation intelligente à l'aide d'Arduino et Raspberry Pi dans le cadre du laboratoire de robotique de l'UOM.",
      tags: ["Arduino", "Raspberry Pi", "Robotique"],
    },
    {
      title: "Site Web pour l'ONG Animal Saviours",
      description:
        "Conception et développement complet (frontend et backend) du site web de l'ONG Animal Saviours.",
      tags: ["Full-Stack", "ONG", "Développement Web"],
    },
  ],

  talks: [
    {
      title: "Comment Créer des Packages Angular",
      description:
        "Une présentation sur la conception, la structuration et la publication de bibliothèques Angular réutilisables en tant que packages npm — couvrant l'architecture des modules, les dépendances et leur intégration dans différents projets.",
      tags: ["Angular", "npm", "Frontend"],
      icon: "📦",
      venue: "Présentation Interne Infomil",
    },
    {
      title: "Comment Utiliser Helix Swarm",
      description:
        "Une introduction à Helix Swarm en tant qu'outil de revue de code et de collaboration — couvrant les workflows de revue, l'intégration avec Perforce et les bonnes pratiques pour l'adoption en équipe.",
      tags: ["Helix Swarm", "Code Review", "DevOps"],
      icon: "🔄",
      venue: "Présentation Interne Infomil",
    },
    {
      title: "C'est quoi Git et les Différences avec P4V",
      description:
        "Une comparaison pratique entre Git et Perforce (P4V) pour les développeurs effectuant la transition — couvrant les modèles de branches, les workflows, les commandes essentielles et le changement de paradigme entre les deux systèmes.",
      tags: ["Git", "P4V", "Gestion de Version"],
      icon: "🌿",
      venue: "Présentation Interne Infomil",
    },
  ],

  ui: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      talks: "Présentations",
      hireMe: "Me Recruter",
    },
    hero: {
      greeting: "Bonjour, je suis",
      cta: "Voir Mon Travail",
      available: "Maurice 🌊 — Disponible pour de nouvelles opportunités",
    },
    skills: {
      label: "Mes Outils",
      title: "Compétences & Stack Technique",
      subtitle: "De la résurrection de systèmes legacy aux déploiements cloud-native — voici ma boîte à outils.",
      filterAll: "Tout",
      stats: [
        { value: "4+", label: "Ans d'Expérience" },
        { value: "3+", label: "Frameworks Maîtrisés" },
        { value: ".NET µSvc", label: "Focus Actuel" },
        { value: "∞", label: "Curiosité" },
      ],
    },
    experience: {
      label: "Mon Parcours",
      title: "Expérience",
      subtitle: "Un voyage à travers les systèmes, les services et la quête constante d'un code plus propre.",
    },
    projects: {
      label: "Ce que J'ai Construit",
      title: "Projets",
      subtitle: "Des lunettes ML aux systèmes de gestion pour ONG — une sélection de ce que j'ai réalisé.",
    },
    education: {
      label: "Formation",
      title: "Éducation",
    },
    certifications: {
      label: "Mes Diplômes",
      title: "Certifications",
    },
    talks: {
      label: "Partage de Connaissances",
      title: "Présentations Publiques",
      subtitle: "Présentations internes données chez Infomil — vulgarisation d'outils et technologies pour l'équipe.",
      moreComing: "D'autres présentations à venir",
      venue: "Présentation Interne Infomil",
    },
    footer: {
      builtIn: "Développé avec",
      inLocation: "à Maurice",
    },
  },
};
