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
        },
        finalCta: {
            title: string;
            subtitle: string;
            button: string;
        },
        about: {
            greeting: string;
            paragraph1: string;
            paragraph2: string;
            name: string;
            role: string;
        };
        footer: {
            support: string;
            email: string;
            about: string;
            product: string;
            contact: string;
            aboutUs: string;
            social: string;
            linkedin: string;
            youtube: string;
            spotify: string;
            instagram: string;
            legal: string;
            privacy: string;
            terms: string;
            copyright: string;
        };
        privacyPolicy: {
            title: string;
            lastUpdated: string;
            sections: {
                title: string;
                content: string;
            }[];
        };
        termsOfUse: {
            title: string;
            lastUpdated: string;
            sections: {
                title: string;
                content: string;
            }[];
        };
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
        },
        finalCta: {
            title: 'You are one step away from generating 98% in savings',
            subtitle: 'Schedule a meeting with an expert consultant and learn more.',
            button: 'Schedule a conversation'
        },
        about: {
            greeting: 'Hi and welcome to our site!',
            paragraph1: 'I\'m Charlotte the VP of Sales and Operations. I have been with the Powerbilt Steel family of companies for over 11 years. One of the things I like best about my job is assisting our customers to make their projects a reality. Customers call in with an idea and a member of our talented team helps them design a building to best suit not only their needs but also their budget. Our team really cares and strives to ensure every visitor has a great experience! Here you truly are a part of the family!',
            paragraph2: 'Outside of work I love spending time outdoors with family and friends. Camping, hiking, and paddle boarding are a few of my favorite activities. I\'m an animal lover and have 2 dogs that sometimes come and hang out at the office with us! One of my favorite sayings is "Life is an adventure not a destination!"',
            name: 'Stephan Michaels',
            role: 'Founder'
        },
        footer: {
            support: 'SUPPORT',
            email: 'support@ai1business.com',
            about: 'ABOUT',
            product: 'Product',
            contact: 'Contact Us',
            aboutUs: 'About Us',
            social: 'SOCIAL MEDIA',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
            spotify: 'Spotify',
            instagram: 'Instagram',
            legal: 'LEGAL',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            copyright: '© 2026 AI1Business. All rights reserved.'
        },
        privacyPolicy: {
            title: 'Privacy Policy',
            lastUpdated: 'Last updated: January 2026',
            sections: [
                {
                    title: '1. Introduction',
                    content: 'AI1Business values the privacy of our users. This Privacy Policy describes how we collect, use, store, and protect your personal information when you use our services.'
                },
                {
                    title: '2. Information Collected',
                    content: 'We collect information you provide directly to us, such as name, email, phone number, and company data when filling out forms or contacting us. We may also automatically collect usage data, such as IP address, browser type, and pages visited.'
                },
                {
                    title: '3. Use of Information',
                    content: 'We use your information to: provide and improve our services; personalize your experience; send relevant communications about our products; respond to your requests; and comply with legal obligations.'
                },
                {
                    title: '4. Data Sharing',
                    content: 'We do not sell your personal information. We may share data with trusted partners who assist us in operating our business, always under confidentiality agreements, or when required by law.'
                },
                {
                    title: '5. Security',
                    content: 'We implement technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.'
                },
                {
                    title: '6. Your Rights',
                    content: 'You have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at contato@ai1business.com.'
                },
                {
                    title: '7. Contact',
                    content: 'If you have questions about this Privacy Policy, please contact us at: contato@ai1business.com'
                }
            ]
        },
        termsOfUse: {
            title: 'Terms of Use',
            lastUpdated: 'Last updated: January 2026',
            sections: [
                {
                    title: '1. Acceptance of Terms',
                    content: 'By accessing and using AI1Business services, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, do not use our services.'
                },
                {
                    title: '2. Description of Services',
                    content: 'AI1Business offers Artificial Intelligence-based business automation solutions, including AI agents for prospecting, lead qualification, follow-up, and commercial management.'
                },
                {
                    title: '3. Acceptable Use',
                    content: 'You agree to use our services only for lawful purposes and in accordance with these Terms. It is prohibited to: use the services for illegal activities; attempt to access unauthorized areas of the system; interfere with the operation of the services; or violate the rights of third parties.'
                },
                {
                    title: '4. Intellectual Property',
                    content: 'All content, trademarks, logos, and technology of AI1Business are our property or licensed to us. No intellectual property rights are transferred to you by using the services.'
                },
                {
                    title: '5. Limitation of Liability',
                    content: 'AI1Business is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our services are provided "as is", without express or implied warranties.'
                },
                {
                    title: '6. Modifications',
                    content: 'We reserve the right to modify these Terms at any time. Significant changes will be communicated through the website or by email.'
                },
                {
                    title: '7. Governing Law',
                    content: 'These Terms are governed by the laws of the Federative Republic of Brazil. Any dispute will be resolved in the competent courts of Brazil.'
                },
                {
                    title: '8. Contact',
                    content: 'For questions about these Terms of Use, please contact us at: contato@ai1business.com'
                }
            ]
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
        },
        finalCta: {
            title: 'Você está a um passo de gerar 98% de economia',
            subtitle: 'Agende uma reunião com um consultor especialista e descubra como que a sua empresa também pode ter esse nível de retorno com a AI1B.',
            button: 'Agendar uma conversa'
        },
        about: {
            greeting: 'Entenda a nossa missão com a AI1B',
            paragraph1: 'Sou Gabriel Meneses, fundador da AI-First Business (AI1B). Ao longo de 5 anos no campo de batalha do mundo das startups de alto risco, desenvolvi uma visão de negócios sistêmica e holística, com foco em longo-prazo e pragmatismo. A AI1B nasceu dessa visão de seu fundador. Sabemos que o futuro do mundo com a AI é incerto e muitas vezes preocupante, e nós estamos aqui para ser o seu lugar seguro em meio a esse futuro caótico. Nossa missão é clara: ajudar a sua empresa a não apenas sobreviver, mas triunfar em frente a maior revolução tecnológica da história moderna.',
            paragraph2: 'Unimos expertise técnica profunda em tecnologia e inteligência artificial, atrelada á modelos aplicáveis em gestão, processos, negócios e pessoas. Sabemos muito bem que tecnologia é apenas um meio para um fim, e esse fim é o sucesso do seu negócio. Nosso output final é apenas um: resultados.',
            name: 'Gabriel S. Meneses',
            role: 'Fundador'
        },
        footer: {
            support: 'SUPORTE',
            email: 'support@ai1business.com',
            about: 'SOBRE',
            product: 'Produto',
            contact: 'Fale conosco',
            aboutUs: 'Quem Somos',
            social: 'REDES SOCIAIS',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
            spotify: 'Spotify',
            instagram: 'Instagram',
            legal: 'LEGAL',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Uso',
            copyright: '© 2026 AI1Business. Todos os direitos reservados.'
        },
        privacyPolicy: {
            title: 'Política de Privacidade',
            lastUpdated: 'Última atualização: Janeiro de 2026',
            sections: [
                {
                    title: '1. Introdução',
                    content: 'A AI1Business valoriza a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços.'
                },
                {
                    title: '2. Informações Coletadas',
                    content: 'Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e dados da empresa ao preencher formulários ou entrar em contato conosco. Também podemos coletar dados de uso automaticamente, como endereço IP, tipo de navegador e páginas visitadas.'
                },
                {
                    title: '3. Uso das Informações',
                    content: 'Utilizamos suas informações para: fornecer e melhorar nossos serviços; personalizar sua experiência; enviar comunicações relevantes sobre nossos produtos; responder a suas solicitações; e cumprir obrigações legais.'
                },
                {
                    title: '4. Compartilhamento de Dados',
                    content: 'Não vendemos suas informações pessoais. Podemos compartilhar dados com parceiros de confiança que nos auxiliam na operação do negócio, sempre sob acordos de confidencialidade, ou quando exigido por lei.'
                },
                {
                    title: '5. Segurança',
                    content: 'Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.'
                },
                {
                    title: '6. Seus Direitos',
                    content: 'Você tem direito a acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail contato@ai1business.com.'
                },
                {
                    title: '7. Contato',
                    content: 'Se tiver dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: contato@ai1business.com'
                }
            ]
        },
        termsOfUse: {
            title: 'Termos de Uso',
            lastUpdated: 'Última atualização: Janeiro de 2026',
            sections: [
                {
                    title: '1. Aceitação dos Termos',
                    content: 'Ao acessar e utilizar os serviços da AI1Business, você concorda em cumprir estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nossos serviços.'
                },
                {
                    title: '2. Descrição dos Serviços',
                    content: 'A AI1Business oferece soluções de automação comercial baseadas em Inteligência Artificial, incluindo agentes de IA para prospecção, qualificação de leads, follow-up e gestão comercial.'
                },
                {
                    title: '3. Uso Aceitável',
                    content: 'Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes Termos. É proibido: usar os serviços para atividades ilegais; tentar acessar áreas não autorizadas do sistema; interferir na operação dos serviços; ou violar direitos de terceiros.'
                },
                {
                    title: '4. Propriedade Intelectual',
                    content: 'Todo o conteúdo, marcas, logotipos e tecnologia da AI1Business são de nossa propriedade ou licenciados para nós. Nenhum direito de propriedade intelectual é transferido a você pelo uso dos serviços.'
                },
                {
                    title: '5. Limitação de Responsabilidade',
                    content: 'A AI1Business não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços. Nossos serviços são fornecidos "como estão", sem garantias expressas ou implícitas.'
                },
                {
                    title: '6. Modificações',
                    content: 'Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas através do site ou por e-mail.'
                },
                {
                    title: '7. Lei Aplicável',
                    content: 'Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.'
                },
                {
                    title: '8. Contato',
                    content: 'Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: contato@ai1business.com'
                }
            ]
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
        },
        finalCta: {
            title: 'Estás a un paso de generar un 98% de ahorro',
            subtitle: 'Programa una reunión con un consultor experto y obtén más información.',
            button: 'Programar una conversación'
        },
        about: {
            greeting: '¡Hola y bienvenido a nuestro sitio!',
            paragraph1: 'Soy Charlotte, VP de Ventas y Operaciones. He estado con la familia de empresas Powerbilt Steel por más de 11 años. Una de las cosas que más me gustan de mi trabajo es ayudar a nuestros clientes a hacer realidad sus proyectos. Los clientes llaman con una idea y un miembro de nuestro talentoso equipo los ayuda a diseñar un edificio que se adapte mejor no solo a sus necesidades sino también a su presupuesto. ¡Nuestro equipo realmente se preocupa y se esfuerza por asegurar que cada visitante tenga una gran experiencia! ¡Aquí realmente eres parte de la familia!',
            paragraph2: 'Fuera del trabajo me encanta pasar tiempo al aire libre con familiares y amigos. Acampar, hacer senderismo y paddleboarding son algunas de mis actividades favoritas. ¡Soy una amante de los animales y tengo 2 perros que a veces vienen a pasar el rato en la oficina con nosotros! Uno de mis dichos favoritos es "¡La vida es una aventura, no un destino!"',
            name: 'Stephan Michaels',
            role: 'Fundador'
        },
        footer: {
            support: 'SOPORTE',
            email: 'support@ai1business.com',
            about: 'SOBRE NOSOTROS',
            product: 'Producto',
            contact: 'Contáctenos',
            aboutUs: 'Quiénes Somos',
            social: 'REDES SOCIALES',
            linkedin: 'LinkedIn',
            youtube: 'YouTube',
            spotify: 'Spotify',
            instagram: 'Instagram',
            legal: 'LEGAL',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Uso',
            copyright: '© 2026 AI1Business. Todos los derechos reservados.'
        },
        privacyPolicy: {
            title: 'Política de Privacidad',
            lastUpdated: 'Última actualización: Enero de 2026',
            sections: [
                {
                    title: '1. Introducción',
                    content: 'AI1Business valora la privacidad de sus usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios.'
                },
                {
                    title: '2. Información Recopilada',
                    content: 'Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico, teléfono y datos de la empresa al completar formularios o contactarnos. También podemos recopilar datos de uso automáticamente, como dirección IP, tipo de navegador y páginas visitadas.'
                },
                {
                    title: '3. Uso de la Información',
                    content: 'Utilizamos su información para: proporcionar y mejorar nuestros servicios; personalizar su experiencia; enviar comunicaciones relevantes sobre nuestros productos; responder a sus solicitudes; y cumplir con obligaciones legales.'
                },
                {
                    title: '4. Compartir Datos',
                    content: 'No vendemos su información personal. Podemos compartir datos con socios de confianza que nos asisten en la operación del negocio, siempre bajo acuerdos de confidencialidad, o cuando lo exija la ley.'
                },
                {
                    title: '5. Seguridad',
                    content: 'Implementamos medidas técnicas y organizativas para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción.'
                },
                {
                    title: '6. Sus Derechos',
                    content: 'Usted tiene derecho a acceder, corregir, eliminar o portar sus datos personales. Para ejercer estos derechos, comuníquese con nosotros al correo electrónico contato@ai1business.com.'
                },
                {
                    title: '7. Contacto',
                    content: 'Si tiene preguntas sobre esta Política de Privacidad, comuníquese al correo electrónico: contato@ai1business.com'
                }
            ]
        },
        termsOfUse: {
            title: 'Términos de Uso',
            lastUpdated: 'Última actualización: Enero de 2026',
            sections: [
                {
                    title: '1. Aceptación de los Términos',
                    content: 'Al acceder y utilizar los servicios de AI1Business, usted acepta cumplir con estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no utilice nuestros servicios.'
                },
                {
                    title: '2. Descripción de los Servicios',
                    content: 'AI1Business ofrece soluciones de automatización comercial basadas en Inteligencia Artificial, incluyendo agentes de IA para prospección, calificación de leads, seguimiento y gestión comercial.'
                },
                {
                    title: '3. Uso Aceptable',
                    content: 'Usted acepta usar nuestros servicios solo para fines legales y de acuerdo con estos Términos. Está prohibido: usar los servicios para actividades ilegales; intentar acceder a áreas no autorizadas del sistema; interferir con la operación de los servicios; o violar los derechos de terceros.'
                },
                {
                    title: '4. Propiedad Intelectual',
                    content: 'Todo el contenido, marcas, logotipos y tecnología de AI1Business son de nuestra propiedad o están bajo licencia. No se le transfiere ningún derecho de propiedad intelectual por el uso de los servicios.'
                },
                {
                    title: '5. Limitación de Responsabilidad',
                    content: 'AI1Business no es responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios. Nuestros servicios se proporcionan "tal cual", sin garantías expresas o implícitas.'
                },
                {
                    title: '6. Modificaciones',
                    content: 'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos se comunicarán a través del sitio web o por correo electrónico.'
                },
                {
                    title: '7. Ley Aplicable',
                    content: 'Estos Términos se rigen por las leyes de la República Federativa de Brasil. Cualquier disputa se resolverá en los tribunales competentes de Brasil.'
                },
                {
                    title: '8. Contacto',
                    content: 'Para preguntas sobre estos Términos de Uso, contáctenos en: contato@ai1business.com'
                }
            ]
        }
    }
};
