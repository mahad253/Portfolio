export const projects: Project[] = [
  {
    id: 1,
    title: "Dahaboo.com – Site d'annonces Achats/Ventes",
    summary:
        "Amélioration d'une plateforme existante de petites annonces permettant aux utilisateurs de publier, rechercher et gérer des annonces en ligne.",
    images: [
      "/assets/dahaboo.png",
      "/assets/dahaboo1.png",
      "/assets/dahaboo2.png",
      "/assets/dahaboo3.png",
      "/assets/dahaboo4.png"
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "KeyCloak",],
    details: {
      challenge:
          "Amélioration d'un site web fonctionnel pour répondre à la demande du client au niveau du front-back & keycloak.",
      solution:
          "Interface responsive et claire, base de données relationnelle, et système d’authentification utilisateur.",
      impact: [
        "Site déployé en production et utilisé activement par des centaines d’utilisateurs.",
        "Projet personnel qui m’a permis de mettre en pratique mes compétences full-stack."
      ]
    },
    externalLink: {
      title: "Visiter le site",
      url: "https://www.dahaboo.com"
    }
  },
  {
    id: 2,
    title: "MathQuest – Plateforme éducative interactive",
    summary:
        "Conception d'une application web gamifiée permettant aux élèves de s'entraîner en mathématiques via des défis et des récompenses.",
    images: ["/assets/mathquest.webm"],
    tags: ["Spring Boot", "React", "MongoDB", "Docker", "CI/CD"],
    details: {
      challenge:
          "Créer une solution attrayante et pédagogique adaptée aux élèves de différents niveaux pour favoriser l'apprentissage des maths.",
      solution:
          "Développement d’une architecture microservices avec backend Java, frontend React, et déploiement conteneurisé avec CI/CD.",
      impact: [
        "Application testée en conditions réelles avec des élèves.",
        "Projet académique complet mobilisant design UX, persistance, sécurisation et performance."
      ]
    }
  },
  {
    id: 3,
    title: "Quarto – Jeu de stratégie avec IA",
    summary:
        "Réalisation d'une version numérique du jeu Quarto avec une interface graphique professionnelle, IA, thèmes visuels, et multilingue.",
    images: [
      "/assets/quarto.webm",
      "/assets/quarto1.png",
      "/assets/quarto2.png",
      "/assets/quarto3.png",
      "/assets/quarto4.png",
      "/assets/quarto5.png",
      "/assets/quarto6.png"
    ],
    tags: ["Python", "Pygame", "IA", "UI/UX", "Théorie des jeux"],
    details: {
      challenge:
          "Créer une application fidèle au jeu original avec une IA compétitive et une interface intuitive.",
      solution:
          "Programmation en Python avec Pygame, ajout d’un moteur IA (Minimax), système multijoueur et personnalisation visuelle.",
      impact: [
        "Projet de fin de semestre évalué en théorie des jeux.",
        "Permet de jouer contre une IA ou un autre joueur humain sur une interface élégante."
      ]
    },
    externalLink: {
      title: "Voir sur GitHub",
      url: "https://github.com/mahad253/Quarto"
    }
  },
  {
    id: 4,
    title: "Mot Croisés – Jeu de mots croisés interactif",
    summary:
        "Création d'un jeu de mots croisés interactif permettant aux utilisateurs de remplir une grille de mots croisés en ligne avec des indices et des définitions.",
    images: [
      "/assets/mc1.png",
      "/assets/mc2.png",
      "/assets/mc3.png",
      "/assets/mc4.png",
      "/assets/mc5.png",
      "/assets/mc6.png",
      "/assets/mc7.png",
      "/assets/mc8.png",
      "/assets/mc9.png",
      "/assets/mc10.png",
      "/assets/mc11.png",
      "/assets/mc12.png",
      "/assets/mc13.png",
      "/assets/mc14.png",
      "/assets/mc15.png",
      "/assets/mc16.png",
      "/assets/mc17.png"
    ],
    tags: ["PHP", "HTML", "CSS", "JavaScript", "JQuery"],
    details: {
      challenge:
          "Concevoir un jeu interactif de mots croisés avec une grille dynamique et la gestion des indices pour les utilisateurs.",
      solution:
          "Développement d'une interface intuitive et interactive en JavaScript avec des fonctionnalités de sauvegarde de grille et de validation de réponses.",
      impact: [
        "Permet aux utilisateurs de résoudre des grilles de mots croisés en ligne.",
        "Projet utile pour tester des fonctionnalités interactives et d’interface utilisateur."
      ]
    },
    externalLink: {
      title: "Voir le projet",
      url: "https://github.com/mahad253/MotCroises"
    }
  },
  {
    id: 5,
    title: "Tindify – Service de messagerie temps réel",
    summary:
        "Développement du microservice de messagerie dans une architecture distribuée orientée microservices pour une application de rencontres musicales.",
    images: ["/assets/tindify-chat.png"],
    tags: ["Spring Boot", "WebSocket", "Kafka", "Microservices", "Java", "KeyCloak"],
    details: {
      challenge:
          "Mettre en place un service de messagerie scalable, réactif et indépendant, capable de s'intégrer dans une architecture orientée évènements.",
      solution:
          "Utilisation de Spring Boot pour les API REST, WebSocket pour la communication temps réel, et Kafka pour l’échange inter-services.",
      impact: [
        "Architecture évolutive permettant une communication fluide entre utilisateurs.",
        "Travail d’équipe sur un projet distribué avec des normes industrielles (authentification, observabilité, orchestration)."
      ]
    },
    externalLink: {
      title: "Voir le code",
      url: "https://github.com/mahad253/chat-service"
    }
  }
];
