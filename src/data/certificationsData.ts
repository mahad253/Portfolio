export type Certification = {
    title: string;
    issuer: string;
    date: string;
    description: string;
    highlights: string[];
    documentUrl?: string;
};

export const certificationsData: Certification[] = [
    {
        title: 'MOOC cybersécurité validé',
        issuer: 'SecNumacadémie (ANSSI)',
        date: 'Janvier 2026',
        description:
            'Validation des 4 modules du parcours SecNumacadémie.',
        highlights: [
            'Panorama de la SSI',
            'Sécurité de l’authentification',
            'Sécurité sur Internet',
            'Sécurité du poste de travail et nomadisme',
        ],
        documentUrl: '/Attestation_SecNum.pdf',
    },
];