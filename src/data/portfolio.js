export const portfolioData = {
  name: "Reeshal",
  fullName: "Reeshal Rittoo",
  role: "Senior Software Engineer",
  tagline: "Full-stack Developer · .NET · Angular · Cloud & DevOps",
  location: "Mauritius 🌊",
  bio: "Full-stack Developer with expertise in .NET and Angular. Well-versed in containerisation via Docker, at ease with PostgreSQL, NoSQL (Firebase) and MS SQL, comfortable with CI/CD pipelines and message-broker software such as RabbitMQ.",
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
    { name: "T-SQL / MS SQL", category: "Data" },
    { name: "PostgreSQL", category: "Data" },
    { name: "Firebase / NoSQL", category: "Data" },
    { name: "Docker", category: "DevOps" },
    { name: "CI/CD Pipelines", category: "DevOps" },
    { name: "RabbitMQ", category: "DevOps" },
    { name: "OpenShift / Kubernetes", category: "DevOps" },
    { name: "Arduino / Raspberry Pi", category: "Other" },
  ],

  skillCategories: ["Backend", "Frontend", "Data", "DevOps", "Other"],

  experience: [
    {
      company: "Infomil (Mauritius) Ltd",
      role: "Senior Software Engineer",
      period: "Aug 2024 — Present",
      description:
        "Leading backend modernisation efforts on the Leclerc Drive system — migrating legacy .NET Framework services to .NET 8, containerising with Docker, and deploying on OpenShift/Kubernetes. Architecting microservices including the Panier (cart) and RecetteCuisine (recipe) systems with a focus on observability and performance.",
      tags: [".NET 8", "Docker", "OpenShift", "PostgreSQL", "RabbitMQ", "Angular"],
    },
    {
      company: "Infomil (Mauritius) Ltd",
      role: "Software Engineer",
      period: "Sep 2021 — Aug 2024",
      description:
        "Developed and maintained full-stack features across the Leclerc Drive e-commerce platform. Worked extensively with T-SQL query optimisation, ASP.NET Core APIs, and Angular frontends. Contributed to CI/CD pipeline configuration and Docker-based deployments.",
      tags: ["T-SQL", "ASP.NET Core", "Angular", "Docker", "CI/CD"],
    },
    {
      company: "SD Worx Mauritius",
      role: "FullStack Developer Intern",
      period: "Jun 2020 — Aug 2020",
      description:
        "Built full-stack features during a 3-month internship, working with C# backend APIs and web frontends. Gained hands-on exposure to enterprise software development practices and professional engineering workflows.",
      tags: ["C#", "Web Development", "Full-Stack"],
    }],

  education: [
    {
      institution: "University of Mauritius",
      degree: "BSc Computer Science",
      period: "2018 — 2021",
      highlights: [
        "Google Hashcode 2021 participant",
        "Host — UOM Divali Show 2019",
        "UOM Web Competition 2019",
        "Mohack Hackathon 2018",
        "Marketing Lead & Event Coordinator — UoM Oracle Club (Jan 2019 – Aug 2021)",
      ],
    },
    {
      institution: "Royal College of Curepipe",
      degree: "High School — Chemistry, Mathematics, Physics",
      period: "2011 — 2017",
      highlights: [],
    },
  ],

  certifications: [
    {
      title: "Advanced React",
      issuer: "Meta",
      date: "Feb 2026",
      credentialId: "ZX6AZXNW9DBF",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      date: "Feb 2026",
      credentialId: "0BDCC4QKV3K1",
    },
  ],

  projects: [
    {
      title: "Smart Drowsiness Detection Goggle",
      period: "Sep 2020 — Aug 2021",
      association: "University of Mauritius — Final Year Project",
      description:
        "A smart goggle using infrared sensors and Machine Learning to predict if users are drowsy, alerting them before accidents occur. Accompanied by a mobile app assistant for real-time monitoring.",
      tags: ["Machine Learning", "IoT", "Mobile App", "Python"],
    },
    {
      title: "Disease Prediction Website",
      association: "University of Mauritius",
      description:
        "Users input their symptoms and the system predicts the likely disease, then suggests relevant precautions and medications.",
      tags: ["Machine Learning", "Web Development", "Healthcare"],
    },
    {
      title: "Management System for WeRecycle NGO",
      description:
        "A website to help the NGO WeRecycle manage their waste collection operations end-to-end.",
      tags: ["Full-Stack", "Web Development", "NGO"],
    },
    {
      title: "Management System for Papa Discount Ltd",
      description:
        "A web and mobile app allowing stakeholders to manage stores and products on offer across multiple locations.",
      tags: ["Web", "Mobile", "Full-Stack"],
    },
    {
      title: "Smart Navigation Robotic Car",
      association: "University of Mauritius — Robotic Lab 2021",
      description:
        "Built a smart navigation robotic car using Arduino and Raspberry Pi as part of the UOM Robotics Lab project.",
      tags: ["Arduino", "Raspberry Pi", "Robotics"],
    },
    {
      title: "Website for Animal Saviours NGO",
      description:
        "Designed and developed a full frontend and backend website for the Animal Saviours NGO.",
      tags: ["Full-Stack", "NGO", "Web Development"],
    },
  ],

  blog: [
    {
      title: "Migrating from .NET Framework to .NET 8: Lessons from the Trenches",
      date: "Nov 2024",
      readTime: "8 min read",
      tags: [".NET 8", "Migration"],
      excerpt:
        "A deep-dive into the real-world challenges of lifting a legacy enterprise system to modern .NET — from breaking changes to significant performance wins.",
    },
    {
      title: "OpenTelemetry in Production: Tracing ASP.NET Core on OpenShift",
      date: "Sep 2024",
      readTime: "6 min read",
      tags: ["OpenTelemetry", "OpenShift", "Observability"],
      excerpt:
        "How we implemented distributed tracing with IP address enrichment and wired it up to our Kubernetes-based observability stack.",
    },
    {
      title: "Docker & CI/CD: Shipping .NET APIs with Confidence",
      date: "Jul 2024",
      readTime: "5 min read",
      tags: ["Docker", "CI/CD", "DevOps"],
      excerpt:
        "A practical walkthrough of containerising .NET services and wiring up semantic versioning in GitLab CI/CD pipelines for production deployments.",
    },
    {
      title: "From React Basics to Advanced Patterns: My Meta Certification Journey",
      date: "Feb 2026",
      readTime: "4 min read",
      tags: ["React", "Frontend", "Learning"],
      excerpt:
        "Reflections on completing both the React Basics and Advanced React certifications from Meta — what I learned and how it changed how I write components.",
    },
  ],
};

// UI strings for EN
portfolioData.talks = [
  {
    title: "How to Create Angular Packages",
    description:
      "A walkthrough on building, structuring and publishing reusable Angular libraries as npm packages — covering module architecture, peer dependencies, and how to integrate them across projects.",
    tags: ["Angular", "npm", "Frontend"],
    icon: "📦",
    venue: "Infomil Internal Talk",
  },
  {
    title: "How to Use Helix Swarm",
    description:
      "An introduction to Helix Swarm as a code review and collaboration tool — covering review workflows, integration with Perforce, and best practices for team adoption.",
    tags: ["Helix Swarm", "Code Review", "DevOps"],
    icon: "🔄",
    venue: "Infomil Internal Talk",
  },
  {
    title: "What is Git & How It Differs from P4V",
    description:
      "A practical comparison of Git and Perforce (P4V) for developers making the switch — covering branching models, workflows, key commands, and the mental model shift between the two.",
    tags: ["Git", "P4V", "Version Control"],
    icon: "🌿",
    venue: "Infomil Internal Talk",
  },
];

portfolioData.ui = {
  nav: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    talks: "Talks",
    hireMe: "Hire Me",
  },
  hero: {
    greeting: "Hi, I'm",
    cta: "View My Work",
    available: "Mauritius 🌊 — Open to opportunities",
  },
  skills: {
    label: "What I Work With",
    title: "Skills & Tech Stack",
    subtitle: "From legacy system resurrection to cloud-native deployments — here's the toolkit I reach for.",
    filterAll: "All",
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "3+", label: "Frameworks Mastered" },
      { value: ".NET µSvc", label: "Current Focus" },
      { value: "∞", label: "Curiosity" },
    ],
  },
  experience: {
    label: "Where I've Been",
    title: "Experience",
    subtitle: "A journey through systems, services, and the constant pursuit of cleaner code.",
  },
  projects: {
    label: "What I've Built",
    title: "Projects",
    subtitle: "From ML-powered wearables to NGO management systems — a selection of things I've shipped.",
  },
  education: {
      label: "Academic Background",
      title: "Education",
    },
    certifications: {
    label: "Credentials",
    title: "Certifications",
  },
  talks: {
    label: "Sharing Knowledge",
    title: "Public Talks",
    subtitle: "Internal presentations delivered at Infomil — breaking down tools and technologies for the wider team.",
    moreComing: "More talks in the pipeline",
    venue: "Infomil Internal Talk",
  },
  footer: {
    builtIn: "Built with",
    inLocation: "in Mauritius",
  },
};
