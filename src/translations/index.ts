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
        },
        agentic: {
            title: string;
            description: string;
            step1: {
                title: string;
                description: string;
            };
            step2: {
                title: string;
                description: string;
            };
            step3: {
                title: string;
                description: string;
            };
            venn: {
                pessoas: string;
                ai: string;
                processos: string;
                output: string;
                gestao: string;
                automacao: string;
                resultados: string;
            };
            cta: string;
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
        },
        agentic: {
            title: 'Your journey to an agentic transformation',
            description: 'Our holistic approach guides companies through the transformation and ensures scalability of agentic capabilities.',
            step1: {
                title: 'AI-first Workflows',
                description: 'We redesign your processes placing artificial intelligence at the center of operations',
            },
            step2: {
                title: 'People and culture',
                description: 'We empower your teams to collaborate effectively with AI agents',
            },
            step3: {
                title: 'Technology',
                description: 'We build and implement the ideal agentic infrastructure for your business',
            },
            venn: {
                pessoas: 'Pessoas',
                ai: 'Inteligência Artificial',
                processos: 'Processos',
                output: 'Output',
                gestao: 'Gestão',
                automacao: 'Automação',
                resultados: 'Resultados'
            },
            cta: 'Vamos conversar'
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
        },
        agentic: {
            title: 'Sua jornada para uma transformação agêntica',
            description: 'Nossa abordagem holística guia empresas através da transformação e garante escalabilidade de capacidades agênticas.',
            step1: {
                title: 'Workflows AI-first',
                description: 'Redesenhamos seus processos colocando a inteligência artificial no centro das operações',
            },
            step2: {
                title: 'Pessoas e cultura',
                description: 'Capacitamos suas equipes para colaborar de forma eficaz com agentes de IA',
            },
            step3: {
                title: 'Tecnologia',
                description: 'Construímos e implementamos a infraestrutura agêntica ideal para o seu negócio',
            },
            venn: {
                pessoas: 'Pessoas',
                ai: 'Inteligência Artificial',
                processos: 'Processos',
                output: 'Output',
                gestao: 'Gestão',
                automacao: 'Automação',
                resultados: 'Resultados'
            },
            cta: 'Vamos conversar'
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
        },
        agentic: {
            title: 'Tu viaje hacia una transformación agéntica',
            description: 'Nuestro enfoque holístico guía a las empresas a través de la transformación y garantiza la escalabilidad de las capacidades agénticas.',
            step1: {
                title: 'Workflows AI-first',
                description: 'Rediseñamos tus procesos colocando la inteligencia artificial en el centro de las operaciones',
            },
            step2: {
                title: 'Personas y cultura',
                description: 'Capacitamos a tus equipos para colaborar eficazmente con agentes de IA',
            },
            step3: {
                title: 'Tecnología',
                description: 'Construimos e implementamos la infraestructura agéntica ideal para tu negocio',
            },
            venn: {
                pessoas: 'Personas',
                ai: 'Inteligencia Artificial',
                processos: 'Procesos',
                output: 'Output',
                gestao: 'Gestión',
                automacao: 'Automatización',
                resultados: 'Resultados'
            },
            cta: 'Hablemos'
        }
    }
};
