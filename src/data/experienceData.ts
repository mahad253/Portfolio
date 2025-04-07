export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Développeur Junior",
    company: "Électricité de Djibouti (EDD)",
    dates: "03/2024 - 09/2024",
    description: [
      "Assistance aux développeurs de l’équipe technique sur les projets internes de l'entreprise.",
      "Participation au développement de nouvelles fonctionnalités et correction de bugs.",
      "Utilisation quotidienne des outils de versionnement (Git, GitLab) et collaboration en équipe agile.",
      "Montée en compétences sur les bonnes pratiques du développement logiciel en environnement professionnel."
    ]
  },
  {
    title: "Stagiaire Développeur",
    company: "Électricité de Djibouti (EDD)",
    dates: "07/2023 - 10/2023",
    description: [
      "Découverte du processus de développement logiciel et immersion dans un environnement de production.",
      "Relecture de code (code review), correction de bugs simples et formulation de retours techniques.",
      "Encadré par un développeur senior pour améliorer ma compréhension des architectures applicatives.",
      "Initiation à la collaboration technique en entreprise et à l'analyse de tickets techniques."
    ]
  }
];
