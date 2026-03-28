---
slug: dgs-beez-web
title: "Création d'un SaaS de gestion et signature de contrats en ligne"
description: "Phase 2 du projet Bee'z Pro : Interface dédiée aux entreprises clientes pour piloter contrats, facturation et suivi des prestations."
companyProject: "Bee'z Web"
company: "DGS Création"
date: "2024"
pending: false
trending: true
image: "/img/projects/dgs-beez-web/details-entreprise.png"
images:
  - src: "/img/projects/dgs-beez-web/inscription-entreprise.png"
    alt: "Page d'inscription entreprise"
  - src: "/img/projects/dgs-beez-web/details-entreprise.png"
    alt: "Page de détails d'une entreprise"
  - src: "/img/projects/dgs-beez-web/ajout-commande.png"
    alt: "Page d'ajout d'une commande de contrat intérimaire"
  - src: "/img/projects/dgs-beez-web/recap-commande.png"
    alt: "Page de récapitulatif de commande de contrat intérimaire"
  - src: "/img/projects/dgs-beez-web/paiement.png"
    alt: "Page de paiement de commande de contrat intérimaire"
  - src: "/img/projects/dgs-beez-web/facture.png"
    alt: "Facture de commande de contrat intérimaire"
  - src: "/img/projects/dgs-beez-web/details-contrat.png"
    alt: "Page de détails d'un contrat intérimaire"
  - src: "/img/projects/dgs-beez-web/liste-interimaires.png"
    alt: "Page listant les intérimaires d'une entreprise"
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

Les entreprises clientes de Bee'z Pro avaient besoin d'un accès personnalisé pour gérer contrats et avenants, suivre la facturation et les paiements, consulter l'historique des prestations en temps réel.

<!-- TODO: Développe le contexte en plusieurs paragraphes -->

## Objectifs

- Automatiser la génération et le suivi des documents contractuels.
- Améliorer la transparence avec des tableaux de bord clairs.
- Renforcer la gestion des droits par rôle utilisateur.
- Respect obligatoire de nombreuses normes RGPD liées aux contrats et à la confidentialité des intérimaires et entreprises.

<!-- TODO: Développe chaque objectif -->

## Fonctionnalités clés

- Gestion des contrats : création/délégation/renouvellement, génération automatique de PDF.
- Facturation et paiements : édition de factures et avoirs, suivi des règlements, export Excel.
- Dashboard administrateur : paramètres globaux personnalisés, graphiques de facturation et volume de missions.
- Gestion des utilisateurs : rôles Admin/Manager/User avec droits granulaires.
- Notifications et mailing : rappels de paiement et alertes administratives.

<!-- TODO: Détaille chaque fonctionnalité -->

## Solutions techniques

- Symfony 6 MVC structuré en bundles fonctionnels (Candidat, Offre, Contrat).
- Twig + SASS/Bootstrap pour UI modulaire et responsive.
- API Sirene de l'Insee pour validation et import en temps réel des données d'entreprises.
- Services métier dédiés (cryptage des documents, génération PDF/Excel).
- Versioning sur GitHub via Git et utilisation de SemVer (Semantic Versioning).

<!-- TODO: Explique tes choix techniques -->

## Défis rencontrés

### Sécurité
Isolation des données et cryptage des documents contractuels.

### Tableau de bord statistique
Requêtes optimisées pour résultats en temps réel.

### Conformité légale
Suivi des consentements, horodatage des actions et journaux d'accès.

<!-- TODO: Développe chaque défi -->

## Résultats obtenus

- Réduction drastique de tâches manuelles nécessaires à la création de contrats.
- Entreprises satisfaites de pouvoir créer facilement un contrat avec l'agence d'interim en moins de 48h.
- Cliente satisfaite du produit final, a rapidement commencé à signer de nouveaux contrats.

## Lendemains du projet

Comme le site web Bee'z Pro, le projet a été en ligne pendant plus d'un an après mon départ de l'entreprise. Je n'ai pas plus d'informations concernant l'utilisation réelle ou le retour sur investissement à moyen/long terme, car j'ai quitté mon entreprise après avoir fini ce projet.

<!-- TODO: Développe -->

## Autocritique

Comme pour la phase 1, nous avons accepté beaucoup de changements demandés par la cliente après validation du cahier des charges. Je veille dorénavant à expliquer ce qu'engendrent des changements importants en cours de projet.

Le projet a été complexe mais très stimulant, c'était la 1e fois que je travaillais sur un projet nécessitant tant de vigilance côté juridique et RGPD.

J'ai beaucoup appris notamment avec les systèmes de factures et d'avoirs que je ne connaissais pas avant de les développer. J'ai approfondi ma rigueur avec ce projet, car aucun chiffre ne peut être invalide sur une facture, sinon de mauvais paiements sont effectués.

<!-- TODO: Développe davantage -->
