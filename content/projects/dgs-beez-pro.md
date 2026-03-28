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
  - link: "javascript"
    text: "JavaScript"
  - link: "php"
    text: "PHP"
  - link: "symfony"
    text: "Symfony"
  - link: "mysql"
    text: "MySQL"
demoLink: ""
---

## Contexte du projet

Bee'z Pro, agence d'intérim spécialisée BTP/logistique, gérait ses recrutements via une plateforme en ligne restrictive : perte de données, imprécision dans les saisies et limitation des fonctionnalités.

<!-- TODO: Développe le contexte en détail -->

## Objectifs

- Avoir une visibilité en ligne via un site vitrine et listant les offres d'emploi.
- Centraliser les candidatures, gérer le suivi des offres d'emploi.
- Automatiser le matching entre profils et missions.
- Assurer la conformité RGPD et la traçabilité des actions.

<!-- TODO: Développe chaque objectif -->

## Fonctionnalités clés

- Site vitrine public arborant la charte graphique de l'entreprise : Actualités, témoignages, présentation de l'entreprise...
- Gestion des candidats : inscription, CV en ligne, critères de recherche, suivi des candidatures.
- Matching intelligent : algorithme de scoring paramétrable + notifications automatiques.
- Back-office complet : création/édition d'offres synchronisées à une API externe, gestion des candidatures, configuration globale.
- Notifications & alertes : email/SMS sur échéances et nouveaux profils.

<!-- TODO: Détaille chaque fonctionnalité -->

## Solutions techniques

- Symfony 6 MVC structuré en bundles fonctionnels (Candidat, Offre, Contrat).
- Twig + SASS/Bootstrap pour UI modulaire et responsive.
- Editeur de template intégré pour les pages du front-office (site vitrine).
- API Recruitee pour import en temps réel des offres externes et envoi des candidatures.
- Services métier dédiés (matching, génération PDF/Excel).
- Versioning sur GitHub via Git et utilisation de SemVer (Semantic Versioning).

<!-- TODO: Explique tes choix techniques -->

## Défis rencontrés

### Matching performant
Scoring multi-critères (expérience, disponibilité) avec filtres dynamiques.

### Structure des données
Gestion fine des types de données et de l'architecture de la base de données.

### Sécurité RGPD
Chiffrement des données sensibles, historique des actions systèmes et gestion du consentement.

<!-- TODO: Développe chaque défi -->

## Résultats obtenus

- Temps de traitement des candidatures fortement amélioré.
- Intérimaires satisfaits de la nouvelle interface et de ses fonctionnalités.
- Cliente satisfaite des livrables fournis et du suivi du projet. Elle nous a accordé sa confiance pour un deuxième projet encore plus ambitieux.

## Lendemains du projet

Par la suite, le projet a été en ligne pendant plus d'un an après mon départ de l'entreprise. Aujourd'hui une nouvelle refonte semble avoir été faite avec une autre agence web. Je n'ai pas plus d'informations n'étant plus aujourd'hui dans cette entreprise ou en relation avec la cliente.

<!-- TODO: Développe -->

## Autocritique

Nous avons accepté beaucoup de changements demandés par la cliente après validation du cahier des charges. Cela a ralenti le projet. Dorénavant, je veille à bien cadrer les fonctionnalités et à expliquer aux clients ce qu'engendrent des changements importants en cours de projet.

Le projet dans son ensemble a été très enrichissant, car c'était mon 1er SaaS développé de A à Z. J'ai bien veillé à utiliser les outils mis à disposition par Symfony quand il le fallait.

J'ai beaucoup aimé les échanges hebdomadaires chez la cliente, cela me permettait de débriefer sur le travail en cours et d'apprendre pleins de choses sur le monde de l'interim. J'ai compris que connaître le domaine d'un client aide aussi dans le développement d'une application à sa destination.

<!-- TODO: Développe davantage -->
