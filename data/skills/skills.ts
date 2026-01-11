export interface SkillEvidence {
    paragraph: string;
    link: string;
	externalLink?: string;
}

export interface Skill {
    slug: string;
    isIcon: boolean;
    name: string;
    image: string;
    definition: string;
    evidence: SkillEvidence[];
    autocritique: string;
    evolution: string;
    relatedProjects: string[];
}

export const technicalSkills: Skill[] = [
	{
		slug: 'html-twig',
		isIcon: false,
		name: 'HTML/Twig',
		image: '/img/logos/HTML.webp',
		definition: `
			HTML est le langage standard de structuration de pages web, utilisé pour organiser le contenu (les titres, les paragraphes, les images, les liens, etc). 
			Twig est un moteur de template PHP, principalement utilisé avec Symfony, qui permet de séparer le contenu de la logique et de générer des pages web dynamiques de manière sécurisée et maintenable. 
			Ces deux technologies sont essentielles dans le développement front-end moderne, garantissant une structure propre, une maintenabilité du code et une intégration fluide avec des back-ends complexes. 
			Dans un contexte professionnel, HTML/Twig permet de traduire des maquettes graphiques en interfaces fonctionnelles tout en facilitant la personnalisation et l'injection de données dynamiques, ce qui est particulièrement pertinent pour les applications web SaaS actuelles et les plateformes e-commerce.
		`,
		evidence: [
			{
				paragraph: 'Intégration complète de maquettes HTML/Twig pour des projets variés, allant de sites WordPress à des plateformes SaaS complexes sous Symfony. Chaque projet a nécessité la création de pages structurées et accessibles, en respectant les standards HTML et les conventions de Twig pour la réutilisation des templates.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: 'Optimisation SEO et contenu dynamique via Twig sur des sites clients, permettant une personnalisation des pages selon les profils utilisateurs et une meilleure indexation par les moteurs de recherche. La valeur ajoutée a été mesurable par l\'augmentation du trafic organique et la réduction des temps de rendu des pages.',
				link: 'dgs-beez-pro'
			},
			{
				paragraph: 'Création de composants front-end réutilisables et modulaires dans le cadre de projets NuxtJS, en utilisant HTML pour structurer le contenu, garantissant cohérence et maintenabilité.',
				link: 'hoplunch-pointeuse'
			}
		],
		autocritique: `
			Je maîtrise pleinement HTML et Twig, avec une utilisation quotidienne depuis plus de 7 ans. 
			Cette compétence est centrale dans mon profil de développeur fullstack, car elle constitue la base de l'architecture des interfaces et permet de travailler efficacement sur des projets complexes. 
			Ma vitesse d'acquisition a été rapide, notamment lors de la transition vers des projets SaaS dynamiques avec Symfony et NuxtJS. 
			Conseil pour moi-même : continuer à suivre les bonnes pratiques HTML5 et Twig pour maintenir la qualité et la sécurité des templates.
		`,
		evolution: `
			Mon objectif à moyen terme est de perfectionner ma maîtrise des bonnes pratiques front-end modernes, notamment en combinant Twig avec des frameworks JS front-end comme NuxtJS pour améliorer encore la réutilisabilité et la performance des interfaces. 
			Je prévois de suivre une formation avancée sur HTML5 concernant les standards d'accessibilité pour les applications web complexes.
		`,
		relatedProjects: [
			'dgs-beez-web',
			'dgs-beez-pro',
			'hoplunch-pointeuse',
			'dgs-ile-aux-copains'
		]
	},
	{
		slug: 'sass-tailwind',
		isIcon: false,
		name: 'SASS/Tailwind',
		image: '/img/logos/TailwindCSS.webp',
		definition: `
			Le CSS est la base du design en développement web, c'est le langage qui décrit les apparences des balises HTML d'une page web.
			SASS est un préprocesseur CSS qui permet d'écrire des styles de manière plus organisée et maintenable grâce aux variables, mixins et fonctions. 
			TailwindCSS est un framework CSS utilitaire qui facilite la création rapide d'interfaces visuelles cohérentes et responsive. 
			Ces deux outils sont essentiels pour accélérer le développement front-end tout en maintenant une architecture CSS propre et réutilisable, surtout dans un contexte de projets web complexes et modulaires.
		`,
		evidence: [
			{
				paragraph: 'Stylisation complexe du site vitrine dans son intégralité suivant une maquette. Utilisation de grilles, d\'animations avancées, responsive appliqué à l\'ensemble du site.',
				link: 'dgs-beez-pro'
			},
			{
				paragraph: 'Utilisation de TailwindCSS pour accélérer le développement front-end et assurer la cohérence graphique et responsive sur plusieurs projets SaaS, notamment les applications HopLunch et DGS Création.',
				link: 'hoplunch-zae'
			},
			{
				paragraph: 'Structuration et stylisation optimisée de maquettes HTML sur des projets variés, de sites WordPress à des applications SaaS complexes, en utilisant SASS pour gérer les variables, mixins et composants réutilisables.',
				link: ''
			},
		],
		autocritique: `
			Je maîtrise très bien SASS et TailwindCSS, avec une utilisation régulière depuis 7 ans. 
			Cette compétence est fondamentale pour produire des interfaces web rapides, modulables et maintenables. 
			Je continue à explorer les fonctionnalités avancées de Tailwind pour améliorer la réutilisabilité et la performance des styles.
		`,
		evolution: `
			Mon objectif est de perfectionner ma maîtrise de TailwindCSS et SASS, en intégrant des pratiques de design system et en optimisant la performance CSS. 
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-ile-aux-copains',
			'hoplunch-zae',
			'hoplunch-pointeuse'
		]
	},
	{
		slug: 'javascript',
		isIcon: false,
		name: 'JavaScript',
		image: '/img/logos/JavaScript.webp',
		definition: `
			JavaScript est le langage universel du web, utilisé pour rendre les pages interactives et dynamiques. 
			Il est indispensable pour les interactions côté client, la manipulation du DOM, les appels API asynchrones et est également utilisé côté serveur via Node.js ou pour gérer les requêtes Ajax. 
			Dans un contexte professionnel, JavaScript permet de créer des interfaces utilisateurs réactives et des applications web complètes.
		`,
		evidence: [
			{
				paragraph: 'Intégration de cartes interactives en utilisant l\'API Google Maps, permettant de visualiser et manipuler des données géographiques dans un projet SaaS.',
				link: 'hoplunch-zae'
			},
			{
				paragraph: 'Création de formulaires dynamiques pour la gestion de comptes parents et enfants sur une application périscolaire, avec validation en temps réel et interactions front-end avancées.',
				link: 'dgs-ile-aux-copains'
			},
			{
				paragraph: 'Utilisation du langage depuis plus de 7 ans sur tous mes projets web, de simples interactions, à formulaires avancés, requêtes Ajax etc.',
				link: ''
			}
		],
		autocritique: `
			Je suis confirmé en JavaScript grâce à une utilisation régulière sur divers projets front-end depuis plusieurs années. 
			Bien que PHP reste mon langage principal, j'acquiers rapidement de nouvelles compétences JavaScript en travaillant sur des applications complexes et interactives.
		`,
		evolution: `
			Mon objectif est de maîtriser les concepts avancés de JavaScript (ES6+, modules, asynchronisme) et de renforcer mon expertise sur les frameworks front-end comme VueJS/NuxtJS pour construire des applications web performantes et maintenables.
		`,
		relatedProjects: [
			'dgs-ile-aux-copains',
			'hoplunch-zae',
			'hoplunch-pointeuse'
		]
	},
	{
		slug: 'vue-nuxt',
		isIcon: false,
		name: 'VueJS/NuxtJS',
		image: '/img/logos/NuxtJS.webp',
		definition: `
			VueJS est un framework JavaScript moderne qui facilite le développement d'interfaces web réactives basées sur des composants. 
			NuxtJS complète VueJS en ajoutant le Server-Side Rendering (SSR), l'optimisation SEO et la génération de sites statiques. 
			Ces technologies permettent de créer des applications web performantes et modulaires, particulièrement adaptées aux plateformes SaaS et aux projets complexes nécessitant du SEO.
		`,
		evidence: [
			{
				paragraph: 'Création de mon portfolio personnel en utilisant VueJS et NuxtJS, permettant de structurer les composants et gérer l\'état de manière modulable. J\'ai mis l\'accent sur l\'aspect réutilisation des composants et sur le SEO via NuxtJS. J\'ai aussi optimisé le contenu tel que les images pour que le site soit le plus performant possible.',
				link: ''
			},
			{
				paragraph: 'Développement d\'une application de pointeuse pour les livreurs d\'une entreprise avec NuxtJS, intégrant la communication avec un back-end Symfony et l\'actualisation en temps réel de leurs statuts.',
				link: 'hoplunch-pointeuse'
			},
			{
				paragraph: 'Développement sur la refonte du site de HopLunch. Ajout de pages de contenu, gestion du catalogue et des filtres associés, communication avec l\'API back-end, design et responsive.',
				link: '',
				externalLink: 'https://hoplunch.com'
			}
		],
		autocritique: `
			J'acquiers actuellement une maîtrise solide de VueJS/NuxtJS à travers plusieurs projets professionnels et personnels. 
			Cette compétence devient essentielle pour mes projets front-end complexes et pour créer des applications SaaS performantes et SEO-friendly.
		`,
		evolution: `
			Mon objectif est de renforcer ma maîtrise du SSR et des fonctionnalités avancées de NuxtJS, d'optimiser la performance des applications et de créer des composants modulaires réutilisables dans mes projets futurs.
			Je perfectionne actuellement mon utilisation des stores Pinia, des composables, des middlewares et de plugins externes.
		`,
		relatedProjects: [
			'hoplunch-pointeuse',
		]
	},
	{
		slug: 'php',
		isIcon: false,
		name: 'PHP',
		image: '/img/logos/PHP.webp',
		definition: `
			PHP est un langage back-end web éprouvé, robuste et performant, utilisé pour créer des applications web dynamiques et évolutives. 
			Il est particulièrement adapté aux projets professionnels et SaaS nécessitant une logique métier complexe, une intégration avec des bases de données et des frameworks modernes comme Symfony. 
			PHP reste incontournable pour gérer le back-end et la logique applicative côté serveur dans de nombreux contextes professionnels.
		`,
		evidence: [
			{
				paragraph: 'Utilisation quotidienne de PHP depuis plus de 7 ans dans mes projets personnels et professionnels, notamment pour développer des SaaS Symfony destinés à des entreprises clientes, garantissant la robustesse et la maintenabilité du code.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: "Migration de projets PHP 'vanilla' vers Symfony, améliorant la structure, la sécurité et la maintenabilité du code existant.",
				link: ''
			},
			{
				paragraph: 'Développement de fonctionnalités spécifiques sur des plateformes web complexes, incluant gestion des utilisateurs, automatisation des workflows et traitement de données métier.',
				link: 'hoplunch-zae'
			}
		],
		autocritique: `
			Je maîtrise PHP de manière experte et l'utilise quotidiennement. 
			Cette compétence est au cœur de mon profil fullstack et constitue la base de toute application web que je développe. 
			Je continue à me tenir à jour sur les nouveautés PHP pour exploiter pleinement les nouvelles fonctionnalités et améliorer la qualité du code.
		`,
		evolution: `
			Mon objectif est de consolider mes bonnes pratiques PHP, approfondir la performance et la sécurité des applications web, et rester à jour avec les nouvelles versions et fonctionnalités du langage.
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-zae',
		]
	},
	{
		slug: 'symfony',
		isIcon: false,
		name: 'Symfony',
		image: '/img/logos/Symfony.webp',
		definition: `
			Symfony est un framework PHP modulaire et robuste, conçu pour construire des applications web évolutives et maintenables. 
			Il facilite l'architecture MVC, la création de services réutilisables et l'intégration avec les bases de données et les API. 
			Dans un contexte professionnel, Symfony est idéal pour développer des SaaS, des plateformes web complexes et des projets nécessitant des standards industriels de qualité.
		`,
		evidence: [
			{
				paragraph: 'Développement complet d\'un SaaS pour la gestion d\'une agence d\'intérim, de ses offres d\'emploi, suivi des candidatures, et matching des profils. Utilisation de Symfony pour structurer le back-end et gérer la logique métier et le dialogue avec des APIs externes.',
				link: 'dgs-beez-pro'
			},
			{
				paragraph: 'Développement complet d\'un SaaS de création et signature de contrats en ligne, en utilisant Symfony pour la gestion des commandes, contrats, factures et avoirs, fichiers PDF et Excel.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: 'Refonte et optimisation de fonctionnalités sur des projets existants pour améliorer la maintenabilité et la sécurité du code Symfony.',
				link: 'hoplunch-zae'
			}
		],
		autocritique: `
			Je maîtrise Symfony depuis 3 ans et l'utilise quotidiennement pour construire des applications web robustes et modulaires. 
			Cette compétence est essentielle pour mon rôle de développeur fullstack, car elle permet d'assurer la qualité et la pérennité des projets.
		`,
		evolution: `
			Mon objectif est de devenir un expert sur Symfony, en approfondissant les bonnes pratiques de conception, les composants avancés et l'intégration avec les API complexes et front-end modernes.
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-zae',
		]
	},
	{
		slug: 'mysql',
		isIcon: false,
		name: 'MySQL',
		image: '/img/logos/MySQL.webp',
		definition: `
			MySQL est un SGBD (Système de Gestion de Base de Données) relationnel qui permet de stocker, organiser et interroger des données de manière performante et sécurisée.
			Il est utilisé pour gérer la logique métier côté serveur et pour interagir avec des applications web, qu'il s'agisse de projets simples ou de plateformes SaaS complexes.
		`,
		evidence: [
			{
				paragraph: 'Utilisation de MySQL sur tous mes projets Symfony, garantissant l\'intégrité des données et la performance des requêtes pour des applications SaaS et B2B2C.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: 'Gestion de bases de données sur des projets PHP et JavaScript, incluant création de tables, relations, indexation et requêtes optimisées.',
				link: 'hoplunch-zae'
			}
		],
		autocritique: `
			Je maîtrise MySQL depuis plus de 7 ans et l'utilise quotidiennement.
			Cette compétence est centrale pour tout développement back-end et permet de garantir performance et fiabilité des applications.
		`,
		evolution: `
			Je continue à approfondir mes connaissances sur l'optimisation des requêtes, la sécurité des bases et les nouvelles fonctionnalités SQL pour des projets complexes et à forte volumétrie de données.
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-zae',
			'hoplunch-pointeuse'
		]
	},
	{
		slug: 'typescript',
		isIcon: false,
		name: 'TypeScript',
		image: '/img/logos/TypeScript.webp',
		definition: `
			TypeScript est une surcouche typée de JavaScript qui apporte robustesse et sécurité dans le développement fullstack.
			Il permet de détecter les erreurs dès la compilation et de structurer le code de manière plus maintenable, ce qui est particulièrement utile dans les projets complexes et modulaires.
		`,
		evidence: [
			{
				paragraph: 'Création de mon portfolio en TypeScript, permettant d\'appliquer des types stricts et de sécuriser le code front-end.',
				link: ''
			},
			{
				paragraph: 'Développement d\'une application de pointeuse pour les livreurs avec TypeScript et NuxtJS, garantissant la robustesse des fonctionnalités critiques.',
				link: 'hoplunch-pointeuse'
			}
		],
		autocritique: `
			Je progresse constamment en TypeScript via mes projets professionnels et personnels.
			Cette compétence renforce la qualité du code et facilite la collaboration sur des applications complexes fullstack.
		`,
		evolution: `
			Mon objectif est de devenir pleinement expert en TypeScript, en maîtrisant les fonctionnalités avancées, l'intégration avec NuxtJS et la gestion de projets front-end et fullstack complexes.
		`,
		relatedProjects: [
			'hoplunch-pointeuse',
		]
	}
];

// const otherSkills = [
// 	{
// 		name: 'Git',
// 		image: '/img/logos/Git.webp',
// 		definition: "C'est le système de contrôle de version et de collaboration entre développeurs le plus utilisé au monde.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// 	{
// 		name: 'Docker',
// 		image: '/img/logos/Docker.webp',
// 		definition: "Permet de faire fonctionner un environnement/une application sur n'importe quelle machine via son système de conteneurs.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web avancée."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// 	{
// 		name: 'CI/CD',
// 		image: '/img/logos/CICD.webp',
// 		definition: "CI/CD (Continuous Integration / Continuous Development) automatise l'intégration et le déploiement d'une application.",
// 		evidence: [
// 			'Utilisé dans mes projets récents, notamment mon portfolio.',
// 			'Utilisé dans mes projets en entreprise.'
// 		],
// 		evolution: "Je me considère à un niveau intermédiaire dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au lancement de nouveaux projets."
// 	},
// 	{
// 		name: 'Linux',
// 		image: '/img/logos/Linux.webp',
// 		definition: "Système d'exploitation open-source, incontournable pour les développeurs et l'hébergement d'applications en tout genre.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// ];

export const softSkills: Skill[] = [
	{
		slug: 'communication',
		isIcon: true,
		name: 'Communication claire',
		image: 'maki:communications-tower',
		definition: `
			Capacité à transmettre des informations et des connaissances de manière claire et compréhensible. 
			Dans un contexte professionnel, cela permet de coordonner efficacement les équipes, gérer les relations avec les clients et assurer le suivi des projets. 
			Une communication claire est essentielle pour éviter les erreurs, faciliter la collaboration et garantir la réussite des projets complexes.
		`,
		evidence: [
			{
				paragraph: 'Organisation et animation de réunions clients, permettant de clarifier les besoins et prioriser les actions. Résultat : amélioration de la satisfaction client et des projets associés.',
				link: 'hoplunch-pointeuse'
			},
			{
				paragraph: 'Participation à des réunions de pilotage de projets, permettant de suivre l\'avancement et d\'anticiper les risques. Ma valeur ajoutée : synthétiser les informations techniques pour les rendre accessibles à tous les participants.',
				link: 'hoplunch-zae'
			},
			{
				paragraph: 'Réunions avec des prospects transformés en clients, en expliquant clairement les fonctionnalités et bénéfices des projets. Résultat : acquisition de nouveaux clients et confiance renforcée.',
				link: 'dgs-beez-pro'
			}
		],
		autocritique: `
			Je maîtrise bien cette compétence et elle est centrale dans mon profil fullstack. 
			Elle me permet d'aligner technique et besoins métier et de fluidifier le travail en équipe. 
			Je continue à m'améliorer dans la synthèse d'informations complexes et la communication non technique.
		`,
		evolution: `
			Je souhaite perfectionner ma communication lors de présentations techniques et commerciales. 
			Mon interaction journalière avec les autres services de l'entreprise permet de faire évoluer cette compétence tous les jours, et j'y veille continuellement.
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-beez-web',
			'hoplunch-zae',
			'hoplunch-pointeuse',
		]
	},
	{
		slug: 'analysis',
		isIcon: true,
		name: "Esprit d'analyse",
		image: 'bx:bxs-analyse',
		definition: `
			Capacité à décomposer un problème complexe pour identifier les causes, définir des solutions adaptées et prendre des décisions éclairées. 
			Dans un contexte professionnel, cette compétence permet d'optimiser les choix techniques et organisationnels et d'anticiper les problèmes avant qu'ils n'impactent le projet.
		`,
		evidence: [
			{
				paragraph: 'Analyse détaillée des besoins pour chaque projet SaaS, en identifiant les contraintes techniques et fonctionnelles. Résultat : solutions cohérentes et évolutives, réduisant les risques de refonte.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: 'Décomposition des problèmes rencontrés lors de migrations PHP vers Symfony, permettant de planifier et prioriser les actions. Résultat : migrations rapides et sécurisées.',
				link: ''
			},
			{
				paragraph: 'Analyse approfondie de l\'existant, préparation de la refonte logicielle intégrant de nouvelles fonctionnalités. Résultat : refonte logicielle durable dans le temps.',
				link: 'hoplunch-zae'
			}
		],
		autocritique: `
			Je considère mon esprit d'analyse comme solide, notamment pour le développement fullstack et la gestion de projets complexes. 
			Je continue à m'améliorer sur les méthodes d'optimisation et les analyses multi-axes pour gagner en efficacité.
		`,
		evolution: `
			Je souhaite approfondir mes compétences en analyse systémique et en conception de solutions optimisées pour les architectures logicielles complexes. 
			Je prévois de suivre des formations sur la modélisation UML et les patterns d'architecture logicielle.
		`,
		relatedProjects: [
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-zae'
		]
	},
	{
		slug: 'work-ethic',
		isIcon: true,
		name: 'Rigueur et sens du détail',
		image: 'streamline:module-puzzle-3-solid',
		definition: `
			Travail précis et orienté qualité afin de fournir un résultat fiable et sans erreurs. 
			Dans le développement web et les projets complexes, cette compétence est essentielle pour la robustesse du code, la sécurité des applications et la satisfaction client.
		`,
		evidence: [
			{
				paragraph: 'Vérification systématique de la cohérence des fonctionnalités et du code lors de projets SaaS complexes, garantissant l\'absence de bugs majeurs en production.',
				link: 'dgs-beez-web'
			},
			{
				paragraph: 'Respect des bonnes pratiques de codage et de structuration du code. Tests automatisés écrits pour chaque nouvelle fonctionnalité.',
				link: 'hoplunch-zae'
			},
			{
				paragraph: 'Rigueur appliquée dans mes projets que je documente toujours, surtout lorsqu\'il y a des fonctionnalités complexes.',
				link: ''
			}
		],
		autocritique: `
			Je suis naturellement rigoureux et attentif aux détails, ce qui est un atout dans mes projets fullstack. 
			Je continue à améliorer ma méthodologie de tests et de vérification pour maximiser la qualité et la fiabilité.
		`,
		evolution: `
			Je souhaite formaliser davantage mes processus de tests et de contrôle qualité, et continuer à documenter mes projets pour faciliter le travail collaboratif.
		`,
		relatedProjects: [
			'hoplunch-zae',
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-pointeuse'
		]
	},
	{
		slug: 'continuous-learning',
		isIcon: true,
		name: 'Apprentissage continu',
		image: 'hugeicons:elearning-exchange',
		definition: `
			Capacité à apprendre en continu de nouvelles connaissances et technologies afin de rester à jour et de s'adapter à un environnement professionnel en constante évolution. 
			Dans le développement web, cela inclut les frameworks, langages et méthodes de travail.
		`,
		evidence: [
			{
				paragraph: 'Acquisition de nouvelles compétences en NuxtJS et TypeScript via des projets professionnels et personnels, permettant de livrer des applications front-end performantes et maintenables.',
				link: '',
				externalLink: 'https://hoplunch.com'
			},
			{
				paragraph: 'Exploration de nouvelles technologies et bonnes pratiques PHP/Symfony dans le cadre de projets SaaS et migrations de code legacy.',
				link: 'dgs-ile-aux-copains'
			}
		],
		autocritique: `
			Je considère l'apprentissage continu comme une compétence centrale de mon profil, qui me permet de m'adapter rapidement aux nouvelles technologies et aux exigences des projets. 
			Je reste curieux et proactif dans mes recherches et tests.
			Les documentations des langages et outils de programmation, sont ainsi les piliers de mon apprentissage continu.
		`,
		evolution: `
			Je souhaite continuer à explorer les frameworks front-end et back-end avancés, approfondir mes connaissances en DevOps et suivre des formations sur les bonnes pratiques d'ingénierie logicielle pour rester à jour.
		`,
		relatedProjects: [
			'hoplunch-zae',
			'dgs-beez-pro',
			'dgs-beez-web',
			'dgs-ile-aux-copains',
			'hoplunch-pointeuse'
		]
	}
];

export const allSkills = [...technicalSkills, ...softSkills];
