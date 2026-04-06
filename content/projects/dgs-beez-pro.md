---
slug: dgs-beez-pro
title: "Création d'un SaaS pour une agence d'intérim"
description: "Site web pour une agence d'intérim : partie site vitrine, gestion des offres via API externe, matching des candidats."
companyProject: "Bee'z Pro"
company: "DGS Création"
date: "2023 - 2024"
pending: false
trending: false
image: "/img/projects/dgs-beez-pro/candidat.png"
images:
  - src: "/img/projects/dgs-beez-pro/homepage.png"
    alt: "Page d'accueil du site client"
  - src: "/img/projects/dgs-beez-pro/offres.png"
    alt: "Liste des offres d'emplois du site client"
  - src: "/img/projects/dgs-beez-pro/candidat.png"
    alt: "Tableau de bord candidat du site client"
technologies:
  - icon: "mdi:language-php"
    text: "PHP"
  - icon: "mdi:symfony"
    text: "Symfony"
  - icon: "file-icons:twig"
    text: "Twig"
  - icon: "mdi:language-javascript"
    text: "JavaScript"
  - icon: "ion:logo-sass"
    text: "SCSS"
  - icon: "mdi:api"
    text: "API externe"
actors:
  client: "Bee'z Pro"
  developer: "Moi-même"
  projectManager: "Chef de projet de l'entreprise"
tags:
  - "Développement"
  - "Gestion de projet"
skillLinks:
  - link: "html-twig"
    text: "HTML/Twig"
  - link: "sass-tailwind"
    text: "SASS/Tailwind"
  - link: "php-symfony"
    text: "PHP/Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "git"
    text: "Git"
demoLink: ""
---

## Présentation du projet

Bee'z Pro est un SaaS complet développé pour une agence d'intérim spécialisée dans le BTP et la logistique, basée à Mulhouse. Le projet répondait à deux besoins distincts : d'une part, un **site vitrine public** présentant l'agence, ses offres d'emploi et ses actualités, et d'autre part, un **back-office de gestion** permettant le suivi des candidatures, le matching automatique entre profils et missions, et la gestion administrative des offres. L'ensemble s'intégrait avec l'API Recruitee, la plateforme externe utilisée par l'agence pour la diffusion multi-canal de ses offres d'emploi.

Côté vitrine, le site proposait des pages dédiées (accueil, offres avec filtres avancés, témoignages, contact) intégrées à partir de maquettes Figma. Les candidats pouvaient s'inscrire, créer un profil détaillé et postuler directement depuis leur tableau de bord. Côté back-office, la gérante disposait d'un pipeline visuel de candidatures, d'un algorithme de matching paramétrable, de statistiques de recrutement et d'un éditeur WYSIWYG pour mettre à jour le contenu du site sans intervention technique.

C'était mon premier SaaS développé de A à Z, et cette expérience a été fondatrice dans ma carrière de développeur. Elle m'a confronté pour la première fois aux enjeux d'un projet client complet : compréhension d'un domaine métier complexe, gestion de la relation client, respect des délais, et livraison d'un produit fonctionnel et professionnel.

## Objectifs

- **Donner une visibilité en ligne à l'agence** via un site vitrine professionnel arborant la charte graphique de Bee'z Pro, avec des pages dédiées aux offres d'emploi, aux actualités, aux témoignages et à la présentation de l'entreprise. Ce site devait servir de vitrine commerciale pour attirer aussi bien les candidats que les entreprises clientes.

- **Centraliser la gestion des candidatures** dans un back-office unique, permettant de créer des fiches candidat complètes, de gérer les CV et documents, de suivre l'avancement des candidatures et de communiquer avec les candidats directement depuis la plateforme.

- **Automatiser le matching entre profils et missions** grâce à un algorithme de scoring paramétrable prenant en compte l'expérience, la disponibilité, la localisation géographique, les compétences et les habilitations. Le matching devait être bidirectionnel : suggestion d'offres pour un candidat donné, et suggestion de candidats pour une offre donnée.

- **Assurer la conformité RGPD** dans la gestion des données personnelles des candidats (CV, coordonnées, parcours professionnel), avec chiffrement des données sensibles, gestion du consentement et traçabilité des accès.

## Contexte

Avant notre intervention, Bee'z Pro gérait ses recrutements via une plateforme en ligne tierce restrictive qui posait de nombreux problèmes : perte de données lors de la saisie des profils candidats, impossibilité de personnaliser les formulaires de candidature, absence de visibilité en ligne (pas de site web propre), et limitation des fonctionnalités de matching entre candidats et offres d'emploi. La gérante devait jongler entre plusieurs outils non connectés et perdait un temps considérable dans la gestion quotidienne des candidatures.

Le secteur de l'intérim BTP en Alsace est particulièrement concurrentiel, et l'absence de présence en ligne propre plaçait Bee'z Pro en désavantage face à des concurrents déjà équipés de plateformes digitales modernes. Du côté de DGS Création, l'entreprise dans laquelle je travaillais, ce projet représentait une montée en gamme significative. Jusqu'alors spécialisée dans des sites vitrines, l'agence cherchait à démontrer sa capacité à délivrer des solutions SaaS complètes. La réussite de ce projet conditionnait sa crédibilité pour décrocher des contrats similaires à l'avenir.

## Enjeux

Le premier enjeu majeur était d'ordre **technique**. Développer un SaaS complet impliquait de maîtriser l'architecture Symfony en profondeur, depuis la structuration en bundles fonctionnels (Candidat, Offre, Matching, Notification) jusqu'à la mise en place de services métier dédiés. Le choix d'une architecture MVC bien découplée était indispensable pour garantir la maintenabilité d'un projet voué à évoluer. Le stack reposait sur **Symfony 6**, **Twig** et **SASS/Bootstrap** pour le front-end, avec un pattern SASS 7-1 et des templates exploitant l'héritage de layouts et les macros.

L'intégration de l'**API Recruitee** constituait un enjeu technique à part entière. La synchronisation bidirectionnelle des offres entre notre plateforme et le système externe devait être fiable et transparente pour l'utilisatrice finale, malgré les contraintes de l'API (authentification OAuth, pagination non standard, rate limiting strict). Toute défaillance dans cette chaîne aurait compromis la crédibilité du produit.

L'**algorithme de matching** représentait le coeur fonctionnel du projet. Le scoring multi-critères devait être à la fois pertinent et performant, capable de traiter des centaines de profils et d'offres sans latence perceptible. Le système de pondération configurable (expérience x2, disponibilité x3, localisation x1.5) avec score normalisé sur 100 devait permettre à la gérante d'ajuster la pertinence selon le contexte, tout en générant des notifications automatiques lorsqu'un profil correspondait à une offre active.

L'enjeu **relationnel** était tout aussi important. En tant que développeur junior, je devais établir une relation de confiance avec la cliente à travers des réunions hebdomadaires en présentiel, nécessitant vulgarisation technique et écoute active pour traduire fidèlement ses besoins métier en spécifications.

Enfin, l'enjeu **réglementaire** imposait la mise en place de mécanismes de chiffrement, de consentement explicite et de traçabilité des accès pour respecter le RGPD dans la gestion des données personnelles sensibles des candidats.

## Risques

### Risques techniques

Le risque le plus critique était lié à la **dépendance à l'API Recruitee**. Toute modification unilatérale de l'API par l'éditeur (dépréciation d'endpoints, modification du rate limiting) pouvait impacter le fonctionnement du site sans maîtrise de notre côté. Pour mitiger ce risque, j'ai développé un service PHP abstrait encapsulant toute la logique de communication, gérant automatiquement la pagination, les retries en cas d'erreur réseau, et la transformation des données. Cette couche d'abstraction permettait d'isoler le reste de l'application des changements de l'API.

La **performance de l'algorithme de matching** présentait un risque d'obsolescence. Un scoring mal calibré ou trop lent aurait sapé la confiance de la cliente dans l'ensemble du produit. Pour y répondre, j'ai d'abord analysé les critères de sélection utilisés dans le processus manuel, puis les ai traduits en formules de scoring pondérées. Les performances ont été optimisées par le pré-calcul de certains scores et l'utilisation d'index MySQL composites.

### Risques projet

Le risque de **dérive du périmètre** s'est concrétisé en cours de projet. Plusieurs fonctionnalités ont été ajoutées ou modifiées après validation du cahier des charges. La cliente, découvrant les possibilités de la plateforme au fil des démonstrations, formulait des demandes qui semblaient mineures isolément mais dont l'accumulation a impacté significativement le planning.

Le risque de **sous-estimation de la complexité** était réel pour un premier projet SaaS. Certaines fonctionnalités apparemment simples (notifications automatiques, éditeur de templates) se sont révélées plus complexes que prévu en termes de cas limites. Le versioning Git avec SemVer et le workflow Git Flow ont permis de garder le contrôle sur les livraisons malgré ces imprévus.

## Les étapes du projet

### Phase 1 : Cadrage et conception (2 semaines)

Le projet a débuté par une série de réunions de cadrage avec la gérante de Bee'z Pro pour comprendre son métier, ses processus existants et ses attentes. J'ai mené une analyse fonctionnelle complète qui a abouti à la rédaction d'un cahier des charges détaillé, incluant les user stories, les wireframes des principales pages et le schéma de base de données. Cette phase a également permis de définir le périmètre technique : choix du framework Symfony 6, de l'architecture MVC en bundles, et validation de la faisabilité de l'intégration avec l'API Recruitee.

### Phase 2 : Développement du site vitrine (3 semaines)

La première phase de développement s'est concentrée sur le site vitrine. J'ai intégré les maquettes Figma fournies par le graphiste de l'agence, en structurant le front-end avec Twig et SASS selon le pattern 7-1. Chaque page a été développée en responsive design. Le formulaire de contact, le système de filtres des offres et la page de témoignages ont été développés en parallèle.

### Phase 3 : Développement du back-office et du matching (5 semaines)

La phase la plus conséquente a couvert le développement du back-office complet : gestion des candidats, pipeline de candidatures, création et édition des offres d'emploi, et surtout l'algorithme de matching. Le système de scoring a nécessité plusieurs itérations pour atteindre un niveau de pertinence satisfaisant. L'intégration de l'API Recruitee, les emails automatiques et l'éditeur WYSIWYG ont été implémentés en parallèle durant cette phase.

### Phase 4 : Tests, corrections et mise en production (2 semaines)

La dernière phase a été consacrée aux tests fonctionnels avec la cliente, à la correction des anomalies remontées, et à la mise en production. Des sessions de formation ont été organisées pour que la gérante soit autonome dans l'utilisation quotidienne du back-office. La mise en ligne a été suivie d'une période de support pour corriger les derniers ajustements demandés.

## Résultats pour moi

Ce projet a constitué un tournant dans ma progression technique. En développant un SaaS complet de A à Z, j'ai acquis une maîtrise concrète de l'architecture Symfony en contexte réel, bien au-delà de ce que les projets académiques ou les tutoriels pouvaient offrir. L'intégration de l'API Recruitee m'a appris à gérer les contraintes des services tiers (rate limiting, pagination, gestion d'erreurs), une compétence que je mobilise régulièrement depuis.

La conception de l'algorithme de matching a développé ma capacité à traduire des besoins métier complexes en logique algorithmique. Analyser le processus de sélection manuelle de la gérante, identifier les critères pertinents et les formaliser en formules de scoring m'a appris qu'un bon développeur doit d'abord comprendre le métier avant d'écrire du code.

Sur le plan humain, les réunions hebdomadaires en présentiel chez la cliente ont été une formation accélérée à la relation client. J'ai appris à vulgariser des concepts techniques, à recueillir des besoins en posant les bonnes questions, et à gérer les attentes lorsque les demandes dépassaient le cadre initial. Cette expérience m'a donné une assurance dans les échanges professionnels que je n'avais pas auparavant.

## Résultats pour l'entreprise

- **Temps de traitement des candidatures fortement amélioré** : le matching automatique et le pipeline de candidature ont remplacé les processus manuels, libérant un temps considérable pour la gérante qui pouvait se concentrer sur le relationnel avec les entreprises clientes et les intérimaires.

- **Intérimaires satisfaits** de la nouvelle interface d'inscription et du suivi de leurs candidatures en temps réel, ce qui a contribué à améliorer l'image de marque de l'agence et à fidéliser les profils qualifiés.

- **Visibilité en ligne acquise** : le site vitrine professionnel a offert à Bee'z Pro une présence digitale à la hauteur de ses ambitions, servant de point d'entrée pour les nouveaux candidats et renforçant la crédibilité de l'agence face à la concurrence.

- **Cliente satisfaite** des livrables fournis et du suivi du projet. Sa confiance a été telle qu'elle nous a confié un deuxième projet encore plus ambitieux (Bee'z Web, la plateforme de gestion des contrats), preuve directe de la qualité perçue du travail délivré.

- **Montée en gamme de DGS Création** : la réussite de ce projet SaaS a démontré la capacité de l'agence à délivrer des solutions complexes et sur mesure, ouvrant la voie à des projets similaires avec d'autres clients.

## Lendemains du projet

Le projet a été en ligne pendant plus d'un an après mon départ de l'entreprise DGS Création. Aujourd'hui, une nouvelle refonte semble avoir été réalisée avec une autre agence web, ce qui est naturel dans le cycle de vie d'un produit digital. Je n'ai pas plus d'informations sur l'évolution du projet, n'étant plus en relation avec l'entreprise ni avec la cliente.

Le plus important pour moi est que ce projet a abouti à un deuxième contrat (Bee'z Web), preuve que le travail livré et la relation de confiance établie lors des réunions hebdomadaires ont été déterminants. Cette suite directe a validé l'ensemble de la démarche : un premier projet bien exécuté, même imparfait, ouvre des portes que la théorie seule ne peut pas ouvrir.

## Autocritique

Ce projet a été mon premier SaaS développé de A à Z, et il reste une étape fondatrice dans ma carrière. J'ai appris énormément, tant sur le plan technique (architecture Symfony, intégration d'API, algorithme de matching) que sur le plan humain (relation client, communication, gestion des attentes).

La principale leçon tirée concerne la gestion du périmètre projet. Nous avons accepté trop de changements après validation du cahier des charges, ce qui a rallongé le projet et complexifié le planning. Dorénavant, je veille systématiquement à expliquer aux clients ce qu'engendrent des changements importants en cours de développement (impact sur les délais, les coûts, et les risques de régression). J'aurais dû formaliser un processus de gestion des changements dès le départ, avec une grille d'évaluation systématique de l'impact de chaque nouvelle demande.

Sur le plan technique, avec le recul, l'architecture en bundles Symfony était pertinente mais j'aurais pu pousser davantage la séparation des responsabilités. Certains services métier mélangeaient encore logique de présentation et logique métier, ce qui a rendu certaines évolutions plus laborieuses qu'elles n'auraient dû l'être. Ce constat m'a poussé à approfondir les principes SOLID et l'architecture hexagonale dans les projets suivants.

Les réunions hebdomadaires chez la cliente ont été l'un des aspects les plus enrichissants du projet. Ces échanges réguliers m'ont permis de comprendre en profondeur le métier de l'intérim, ce qui a directement amélioré la pertinence des fonctionnalités développées. J'ai compris que connaître le domaine d'un client aide considérablement dans le développement d'une application à sa destination. Cette conviction guide encore mon approche aujourd'hui.
