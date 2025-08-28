// src/data/educationData.ts

export type Education = {
    degree: string;
    institution: string;
    location: string;
    period: string;
    details: string[];
};

export const educationData: Education[] = [
    {
        degree: "Master 2 – Génie Informatique pour les Logiciels (GIL)",
        institution: "Université de Rouen Normandie",
        location: "Rouen, France",
        period: "2025 – 2026 (en cours)",
        details: [
            "Architecture logicielle et programmation avancée",
            "Projets en microservices, React, Spring Boot et DevOps",
            "Travail sur des projets complexes en équipe",
        ],
    },
    {
        degree: "Master 1 – Génie Informatique pour les Logiciels (GIL)",
        institution: "Université de Rouen Normandie",
        location: "Rouen, France",
        period: "2024 – 2025",
        details: [
            "Spécialisation en développement logiciel distribué",
            "Projets en Spring Boot, React, DevOps, GitLab CI",
            "Projet MathQuest Playground en équipe",
        ],
    },
    {
        degree: "Licence Informatique",
        institution: "Université de Djibouti",
        location: "Djibouti",
        period: "2020 – 2023",
        details: [
            "Fondamentaux en réseaux, algorithmique et systèmes",
            "Projet de fin d'études : Application de gestion de livraisons avec Odoo",
        ],
    },
];
