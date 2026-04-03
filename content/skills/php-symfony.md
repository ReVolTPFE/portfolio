---
slug: php-symfony
name: "PHP/Symfony"
image: "/img/logos/Symfony.webp"
isIcon: false
category: "technical"
order: 4
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

PHP est le langage back-end le plus déployé sur le web, présent sur près de 77% des sites dont le langage serveur est connu. Malgré les critiques historiques, PHP a considérablement évolué : PHP 8.x apporte le typage strict, les enums, les fibers, les attributs natifs et des performances nettement améliorées grâce au compilateur JIT. C'est un langage mature, stable et performant, soutenu par une communauté massive et un écosystème riche (Composer, PHPStan, PHPUnit). PHP reste le choix pragmatique pour les applications web professionnelles qui nécessitent fiabilité, maintenabilité et une large base de développeurs disponibles sur le marché.

Symfony est le framework PHP de référence pour les applications d'entreprise. Construit autour de composants découplés et réutilisables, il impose une architecture MVC rigoureuse, encourage les bonnes pratiques (SOLID, injection de dépendances, event-driven architecture) et offre un écosystème complet : Doctrine ORM pour la persistance des données, Security pour l'authentification et les autorisations, Messenger pour les tâches asynchrones, Twig pour le templating, et Mailer pour les notifications. Symfony est particulièrement adapté aux applications SaaS complexes, aux plateformes B2B et aux projets nécessitant une robustesse et une évolutivité à long terme.

Dans mon quotidien professionnel, PHP/Symfony constitue le socle de toutes les applications back-end que je développe. Cette compétence me permet de concevoir des architectures solides, de gérer des logiques métier complexes (contrats, factures, matching, géolocalisation), d'intégrer des API tierces et de garantir la sécurité et la conformité RGPD des données manipulées. La maîtrise de l'écosystème Symfony (bundles, services, commandes, événements) me rend autonome sur l'ensemble du cycle de développement back-end.

## Mes éléments de preuve

### Développement complet de deux SaaS Symfony pour une agence d'intérim (Bee'z Pro et Bee'z Web)

Mon expérience la plus formatrice en PHP/Symfony a été le développement des deux plateformes SaaS pour l'agence d'intérim Bee'z Pro chez DGS Création. Le premier projet (Bee'z Pro) consistait à créer un site vitrine avec gestion des candidatures, des offres d'emploi synchronisées via l'API Recruitee, et un algorithme de matching entre candidats et missions. J'ai structuré l'application en bundles fonctionnels (Candidat, Offre, Contrat) avec des services métier dédiés pour chaque domaine. L'algorithme de matching reposait sur un scoring multi-critères paramétrable (expérience, disponibilité, localisation, compétences) que j'ai implémenté en PHP avec une architecture extensible. Le deuxième projet (Bee'z Web) a ajouté la gestion complète des contrats, factures, avoirs et paiements. J'ai développé un système de génération automatique de documents PDF conformes aux normes légales, un module de facturation avec calcul automatique de la TVA et des marges, et un tableau de bord statistique avec des requêtes SQL optimisées pour le temps réel. Ces deux projets m'ont permis de maîtriser le cycle complet d'un SaaS Symfony, de la conception de la base de données au déploiement en production.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)
[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Refonte du système de gestion des ZAE chez HopLunch avec API Sirene et traitement asynchrone

Chez HopLunch, j'ai conçu et développé le nouveau système de gestion des Zones d'Activités Économiques (ZAE), un projet Symfony d'envergure intégrant l'API Sirene de l'Insee, Google Maps, et Symfony Messenger pour le traitement asynchrone. La complexité technique était élevée : gestion de polygones géographiques en WKT/GeoJSON, conversion de coordonnées Lambert93 vers WGS84, import massif d'entreprises avec filtrage par code APE et validation d'adresses. J'ai mis en place un système de workers Symfony Messenger pour traiter les imports de milliers d'entreprises sans bloquer le back-office, avec un système de retry et de dead-letter queue pour les erreurs. J'ai également développé des commandes Symfony exécutées en CRON pour la synchronisation quotidienne des données et la purge des entreprises invalides. Ce projet a démontré ma capacité à concevoir des architectures Symfony complexes, performantes et fiables, en exploitant les composants avancés du framework.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

### Conception d'une API REST sécurisée pour la pointeuse HopLunch

Pour la pointeuse des livreurs, j'ai développé l'API REST back-end en Symfony qui alimente l'application front-end NuxtJS. L'API devait gérer l'authentification JWT, le pointage/dépointage des livreurs avec des contrôles métier stricts (pas de double pointage, vérification des horaires, validation de la ville), et la synchronisation avec le système existant HopLunch. J'ai structuré l'API avec des contrôleurs fins, des services métier testés unitairement (PHPUnit), et un système de sérialisation JSON propre via les Serializer Groups de Symfony. La sécurité était critique : j'ai mis en place une authentification par token JWT avec un système de refresh token, un rate limiting pour prévenir les abus, et un logging complet des actions de pointage pour les audits RH. L'API est en production depuis plus de 8 mois sans incident, ce qui valide la robustesse de l'architecture choisie.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

PHP/Symfony est ma compétence technique principale et la plus mature. Avec plus de 7 ans d'utilisation de PHP et 3 ans et demi de pratique quotidienne de Symfony, je me considère à un niveau expert sur le framework. Cette compétence est au cœur de mon profil de développeur fullstack et constitue la base de chaque application back-end que je développe.

Ma vitesse d'acquisition de Symfony a été progressive mais constante. J'ai commencé par les bases en Licence Professionnelle, puis j'ai approfondi considérablement en entreprise chez DGS Création avec les deux SaaS Bee'z, et je continue à progresser chez HopLunch avec des problématiques plus complexes (async, API, intégrations tierces). Chaque projet m'a fait monter d'un cran en maîtrise du framework.

L'importance de cette compétence dans l'écosystème web français est considérable. Symfony est le framework PHP de référence en France, utilisé par des entreprises comme BlaBlaCar, Dailymotion et de nombreuses agences web. Cette maîtrise me positionne favorablement sur le marché de l'emploi et me permet de contribuer efficacement à des projets d'entreprise ambitieux.

Mon conseil : ne pas se contenter d'utiliser Symfony comme un outil, mais comprendre les patterns et principes sous-jacents (injection de dépendances, event-driven architecture, SOLID). Cette compréhension profonde permet de résoudre des problèmes complexes et de proposer des architectures élégantes et durables.

## Mon évolution

Mon objectif est de continuer à approfondir les composants avancés de Symfony : Workflow pour les machines à états, Messenger avec des stratégies de transport complexes (RabbitMQ, Redis), et l'intégration avec des outils de monitoring (Sentry, Prometheus). Je souhaite également renforcer mes compétences en tests automatisés (PHPUnit, tests fonctionnels, tests d'intégration) pour atteindre une couverture de code systématique sur tous mes projets.

À moyen terme, je vise à maîtriser API Platform pour la création d'API REST et GraphQL conformes aux standards, ainsi que Symfony UX pour les composants front-end intégrés. Je prévois également de suivre la certification Symfony pour formaliser mon niveau d'expertise et me tenir au courant des évolutions du framework avec les nouvelles versions.
