export type Language = 'en' | 'pt' | 'es';

type Translations = {
    [key in Language]: {
        nav: {
            caseStudies: string;
            about: string;
            letsTalk: string;
        },
        hero: {
            headlinePart1: string;
            headlinePart2: string;
            letsTalk: string;
        }
    }
};

export const translations: Translations = {
    en: {
        nav: {
            caseStudies: 'Case studies',
            about: 'About',
            letsTalk: "Let's talk",
        },
        hero: {
            headlinePart1: 'The definitive AI growth partner',
            headlinePart2: 'for fast-moving B2B companies.',
            letsTalk: "Let's talk",
        }
    },
    pt: {
        nav: {
            caseStudies: 'Casos de estudo',
            about: 'Sobre',
            letsTalk: 'Vamos conversar',
        },
        hero: {
            headlinePart1: 'A parceria definitiva de AI para empresas',
            headlinePart2: 'B2B brasileiras em rápido crescimento.',
            letsTalk: 'Vamos conversar',
        }
    },
    es: {
        nav: {
            caseStudies: 'Casos de estudio',
            about: 'Nosotros',
            letsTalk: 'Hablemos',
        },
        hero: {
            headlinePart1: 'El socio definitivo de IA para el crecimiento',
            headlinePart2: 'de empresas B2B de rápido movimiento.',
            letsTalk: 'Hablemos',
        }
    }
};
