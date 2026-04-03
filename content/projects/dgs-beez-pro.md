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

## Contexte du projet

Bee'z Pro est une agence d'intérim spécialisée dans le BTP et la logistique, basée à Mulhouse. Avant notre intervention, l'agence gérait ses recrutements via une plateforme en ligne tierce restrictive qui posait de nombreux problèmes : perte de données lors de la saisie des profils candidats, impossibilité de personnaliser les formulaires de candidature, absence de visibilité en ligne (pas de site web propre), et limitation des fonctionnalités de matching entre candidats et offres d'emploi. La gérante devait jongler entre plusieurs outils non connectés et perdait un temps considérable dans la gestion quotidienne des candidatures.

Le projet consistait à développer un SaaS complet répondant à deux besoins distincts : d'une part, un **site vitrine public** présentant l'agence, ses offres d'emploi et ses actualités, et d'autre part, un **back-office de gestion** permettant le suivi des candidatures, le matching automatique entre profils et missions, et la gestion administrative des offres. Le tout devait s'intégrer avec l'API Recruitee, la plateforme externe utilisée par l'agence pour la diffusion multi-canal de ses offres d'emploi.

C'était mon premier SaaS développé de A à Z, et cette expérience a été fondatrice dans ma carrière de développeur. Elle m'a confronté pour la première fois aux enjeux d'un projet client complet : compréhension d'un domaine métier complexe (l'intérim), gestion de la relation client, respect des délais, et livraison d'un produit fonctionnel et professionnel.

## Objectifs

- **Donner une visibilité en ligne à l'agence** via un site vitrine professionnel arborant la charte graphique de Bee'z Pro, avec des pages dédiées aux offres d'emploi, aux actualités, aux témoignages et à la présentation de l'entreprise. Ce site devait servir de vitrine commerciale pour attirer aussi bien les candidats que les entreprises clientes.

- **Centraliser la gestion des candidatures** dans un back-office unique, permettant de créer des fiches candidat complètes, de gérer les CV et documents, de suivre l'avancement des candidatures et de communiquer avec les candidats directement depuis la plateforme.

- **Automatiser le matching entre profils et missions** grâce à un algorithme de scoring paramétrable prenant en compte l'expérience, la disponibilité, la localisation géographique, les compétences et les habilitations. Le matching devait être bidirectionnel : suggestion d'offres pour un candidat donné, et suggestion de candidats pour une offre donnée.

- **Assurer la conformité RGPD** dans la gestion des données personnelles des candidats (CV, coordonnées, parcours professionnel), avec chiffrement des données sensibles, gestion du consentement et traçabilité des accès.

## Fonctionnalités clés

- **Site vitrine complet et responsive** : page d'accueil avec slider d'actualités, page de présentation de l'agence, liste des offres d'emploi avec filtres avancés (secteur, localisation, type de contrat), page de témoignages, et formulaire de contact. L'ensemble est intégré à partir de maquettes Figma avec des animations de scroll et des transitions fluides.

- **Gestion avancée des candidats** : inscription en ligne avec upload de CV, création de profil détaillé (expériences, compétences, habilitations, disponibilités, zone géographique), et tableau de bord personnel pour suivre ses candidatures. Les candidats peuvent postuler directement aux offres visibles sur le site.

- **Algorithme de matching intelligent** : scoring multi-critères paramétrable depuis le back-office. L'administrateur peut ajuster la pondération de chaque critère (expérience x2, disponibilité x3, localisation x1.5) et définir un seuil minimum de pertinence. Le système génère des notifications automatiques lorsqu'un nouveau profil correspond à une offre active, et inversement.

- **Back-office complet** : création et édition d'offres d'emploi synchronisées en temps réel avec l'API Recruitee, gestion des candidatures avec pipeline visuel (nouveau, en cours, entretien, accepté, refusé), statistiques de recrutement et configuration globale.

- **Éditeur de templates intégré** : les pages du site vitrine (accueil, présentation, témoignages) sont éditables directement depuis le back-office grâce à un éditeur WYSIWYG. La cliente peut ainsi mettre à jour le contenu du site sans intervention technique.

- **Notifications et alertes** : emails automatiques aux candidats (confirmation d'inscription, changement de statut de candidature) et à l'administrateur (nouveau profil correspondant, rappels d'échéance).

## Solutions techniques

- **Symfony 6 MVC** structuré en bundles fonctionnels (Candidat, Offre, Matching, Notification), avec des services métier dédiés pour chaque domaine. L'architecture en bundles permet une séparation claire des responsabilités et facilite l'évolution du code.

- **Twig + SASS/Bootstrap** pour une interface utilisateur modulaire et responsive. Les templates Twig utilisent l'héritage de layouts et les macros pour maximiser la réutilisation du code front-end. SASS est organisé selon le pattern 7-1 avec des variables, mixins et composants réutilisables.

- **API Recruitee** pour l'import en temps réel des offres d'emploi externes. Un service PHP dédié gère l'authentification OAuth, la synchronisation bidirectionnelle des offres et l'envoi des candidatures vers la plateforme externe.

- **Algorithme de matching** implémenté en PHP avec un système de pondération configurable. Chaque critère (expérience, disponibilité, localisation, compétences, habilitations) est évalué individuellement puis agrégé en un score global normalisé sur 100.

- **Versioning Git** avec SemVer (Semantic Versioning), workflow Git Flow (branches main, develop, feature), et changelogs générés à partir des messages de commit pour le suivi de l'avancement par la cliente.

## Défis rencontrés

### Algorithme de matching performant

La conception de l'algorithme de matching a été le défi technique principal. Le scoring devait être à la fois pertinent (les résultats correspondent aux attentes de l'agence) et performant (calcul rapide même avec une base de centaines de candidats et d'offres). J'ai commencé par analyser en détail les critères de sélection utilisés par la gérante dans son processus manuel, puis j'ai traduit ces critères en formules de scoring pondérées. Le système de pondération paramétrable depuis le back-office a été ajouté suite à une demande de la cliente qui souhaitait pouvoir ajuster la pertinence du matching selon le type d'offre (intérim court terme vs long terme, par exemple). Les performances ont été optimisées en pré-calculant certains scores et en utilisant des index MySQL composites sur les colonnes fréquemment filtrées.

### Intégration de l'API Recruitee

L'API Recruitee présentait des particularités qui ont nécessité un travail d'adaptation : format de données spécifique, pagination non standard, et rate limiting strict. J'ai développé un service PHP abstrait qui encapsule toute la logique de communication avec l'API, gérant automatiquement la pagination, les retries en cas d'erreur réseau, et la transformation des données vers le format interne de l'application. La synchronisation bidirectionnelle (import des offres, export des candidatures) a demandé une gestion fine des conflits et des doublons.

### Gestion du scope et des changements en cours de projet

Le défi non technique le plus important a été la gestion des changements demandés par la cliente après la validation du cahier des charges. Plusieurs fonctionnalités ont été ajoutées ou modifiées en cours de développement, ce qui a ralenti le projet et compliqué la planification. Cette expérience m'a appris l'importance de bien cadrer les fonctionnalités en amont et d'expliquer clairement au client les impacts (en temps et en coût) de chaque changement.

## Résultats obtenus

- **Temps de traitement des candidatures fortement amélioré** : le matching automatique et le pipeline de candidature ont remplacé les processus manuels, libérant un temps considérable pour la gérante.
- **Intérimaires satisfaits** de la nouvelle interface d'inscription et du suivi de leurs candidatures en temps réel.
- **Cliente satisfaite** des livrables fournis et du suivi du projet. Sa confiance a été telle qu'elle nous a confié un deuxième projet encore plus ambitieux (Bee'z Web, la plateforme de gestion des contrats).
- **Site vitrine professionnel** opérationnel, améliorant la visibilité de l'agence en ligne et servant de point d'entrée pour les nouveaux candidats.

## Lendemains du projet

Le projet a été en ligne pendant plus d'un an après mon départ de l'entreprise DGS Création. Aujourd'hui, une nouvelle refonte semble avoir été réalisée avec une autre agence web, ce qui est naturel dans le cycle de vie d'un produit digital. Je n'ai pas plus d'informations sur l'évolution du projet, n'étant plus en relation avec l'entreprise ni avec la cliente.

Le plus important pour moi est que ce projet a abouti à un deuxième contrat (Bee'z Web), preuve que le travail livré et la relation de confiance établie lors des réunions hebdomadaires ont été déterminants.

## Autocritique

Ce projet a été mon premier SaaS développé de A à Z, et il reste une étape fondatrice dans ma carrière. J'ai appris énormément, tant sur le plan technique (architecture Symfony, intégration d'API, algorithme de matching) que sur le plan humain (relation client, communication, gestion des attentes).

La principale leçon tirée concerne la gestion du périmètre projet. Nous avons accepté trop de changements après validation du cahier des charges, ce qui a rallongé le projet et complexifié le planning. Dorénavant, je veille systématiquement à expliquer aux clients ce qu'engendrent des changements importants en cours de développement (impact sur les délais, les coûts, et les risques de régression).

Les réunions hebdomadaires chez la cliente ont été l'un des aspects les plus enrichissants du projet. Ces échanges réguliers m'ont permis de comprendre en profondeur le métier de l'intérim, ce qui a directement amélioré la pertinence des fonctionnalités développées. J'ai compris que connaître le domaine d'un client aide considérablement dans le développement d'une application à sa destination. Cette conviction guide encore mon approche aujourd'hui.
