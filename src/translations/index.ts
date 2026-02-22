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
        },
        financial: {
            tag: string;
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
            card1: {
                title: string;
                beforeLabel: string;
                beforeValue: string;
                afterLabel: string;
                afterValue: string;
                reductionLabel: string;
            };
            card2: {
                title: string;
                value: string;
                subtext: string;
            };
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
            title: 'Your journey to an AI-First transformation',
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
        },
        financial: {
            tag: 'FINANCIAL IMPACT',
            title: 'From R$ 60,000 to less than R$ 1,000 per month',
            description: 'How we restructured the financial operation using AI to reduce operational costs by 98.3% while increasing efficiency.',
            step1: {
                title: 'Diagnosis',
                description: 'Deep analysis of fixed costs and manual bottlenecks.'
            },
            step2: {
                title: 'Automation',
                description: 'Implementation of AI agents for repetitive tasks.'
            },
            step3: {
                title: 'Optimization',
                description: 'Continuous monitoring and capital reallocation.'
            },
            card1: {
                title: 'OPERATIONAL COST REDUCTION',
                beforeLabel: 'Monthly Operational Cost (Before)',
                beforeValue: 'R$ 60,000.00',
                afterLabel: 'Monthly Operational Cost (After)',
                afterValue: '< R$ 1,000.00',
                reductionLabel: '98% reduction'
            },
            card2: {
                title: 'Financial Impact',
                value: '+ R$ 59,000/month',
                subtext: 'of Freed Capital'
            }
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
            title: 'Sua jornada para uma transformação AI-First',
            description: 'Nossa abordagem holística guia empresas através de metodologias validadas para garantir máxima eficiência operacional, reduzindo custos e aumentando margens.',
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
                description: 'Construímos e implementamos a infraestrutura AI-First ideal para o seu negócio',
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
        },
        financial: {
            tag: 'FINANCIAL IMPACT',
            title: 'De R$ 60.000 para menos de R$ 1.000 por mês',
            description: 'Como reestruturamos a operação financeira utilizando IA para reduzir custos operacionais em 98.3% enquanto aumentamos a eficiência.',
            step1: {
                title: 'Diagnóstico',
                description: 'Análise profunda de custos fixos e gargalos manuais.'
            },
            step2: {
                title: 'Automação',
                description: 'Implementação de agentes de IA para tarefas repetitivas.'
            },
            step3: {
                title: 'Otimização',
                description: 'Monitoramento contínuo e realocação de capital.'
            },
            card1: {
                title: 'REDUÇÃO DE CUSTOS OPERACIONAIS',
                beforeLabel: 'Custo Operacional Mensal (Antes)',
                beforeValue: 'R$ 60.000,00',
                afterLabel: 'Custo Operacional Mensal (Depois)',
                afterValue: '< R$ 1.000,00',
                reductionLabel: '98% de redução'
            },
            card2: {
                title: 'Impacto Financeiro',
                value: '+ R$ 59.000/mês',
                subtext: 'de Capital Liberado'
            }
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
            title: 'Tu viaje hacia una transformación AI-First',
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
        },
        financial: {
            tag: 'IMPACTO FINANCIERO',
            title: 'De R$ 60.000 a menos de R$ 1.000 por mes',
            description: 'Cómo reestructuramos la operación financiera utilizando IA para reducir costos operativos en un 98.3% mientras aumentamos la eficiencia.',
            step1: {
                title: 'Diagnóstico',
                description: 'Análisis profundo de costos fijos y cuellos de botella manuales.'
            },
            step2: {
                title: 'Automatización',
                description: 'Implementación de agentes de IA para tareas repetitivas.'
            },
            step3: {
                title: 'Optimización',
                description: 'Monitoreo continuo y reasignación de capital.'
            },
            card1: {
                title: 'REDUCCIÓN DE COSTOS OPERATIVOS',
                beforeLabel: 'Costo Operativo Mensual (Antes)',
                beforeValue: 'R$ 60.000,00',
                afterLabel: 'Costo Operativo Mensal (Después)',
                afterValue: '< R$ 1.000,00',
                reductionLabel: '98% de reducción'
            },
            card2: {
                title: 'Impacto Financiero',
                value: '+ R$ 59.000/mes',
                subtext: 'de Capital Liberado'
            }
        }
    }
};
