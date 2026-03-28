---
slug: dgs-ile-aux-copains
title: "Travail sur un SaaS de gestion complexe de périscolaires"
description: "Plateforme web de gestion des activités périscolaires, événements et voyages scolaires, avec inscription en ligne et suivi des présences."
companyProject: "Ile aux Copains"
company: "DGS Création"
date: "2024"
pending: true
trending: false
image: "/img/projects/dgs-ile-aux-copains/1.png"
images:
  - src: "/img/projects/dgs-ile-aux-copains/1.png"
    alt: "Page d'accueil du site client"
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
actors:
  client: "Ile aux Copains"
  developer: "Moi-même"
  projectManager: "Chef de projet de l'entreprise"
tags:
  - "Développement"
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

Création d'un portail pour gérer, depuis un back-office unique, les activités périscolaires, les animations pour enfants et les voyages scolaires durant les vacances.

<!-- TODO: Développe le contexte en détail -->

## Objectifs

- Offrir un parcours d'inscription fluide pour les parents (inscriptions, paiements, validations).
- Permettre aux administrateurs de créer et paramétrer n'importe quel type d'événement (sorties, ateliers, voyages).
- Assurer la sécurité et la confidentialité des données sensibles (mineurs, régimes alimentaires, données médicales).
- Générer automatiquement plannings et factures, avec export Excel/PDF.

<!-- TODO: Développe chaque objectif -->

## Fonctionnalités clés

- Back-office complet pour administrateurs : création d'événements, gestion des sessions et des équipements.
- Formulaires d'inscription 100% customisable via un générateur visuel de champs (textes, fichiers, cases à cocher...).
- Module de paiement intégré (Stripe) avec suivi des reçus et relance automatique en cas de non-paiement.
- Interface mobile-first pour gestion des présences, check-in/check-out et notifications instantanées.
- Gestion avancée des responsabilités : prise en compte des parents divorcés, tuteurs légaux et autorisations de tiers.

<!-- TODO: Détaille chaque fonctionnalité -->

## Solutions techniques

- Architecture Symfony 6 MVC avec bundles pour Events, Messenger...
- Twig + SASS/Bootstrap suivant les maquettes développées en externe.
- MySQL avec chiffrement au niveau des colonnes ayant des données sensibles.
- Export PDF/Excel à la volée et planifié en tâche CRON.

<!-- TODO: Explique tes choix techniques -->

## Défis rencontrés

### Générateur de formulaire dynamique
Création d'un générateur visuel de formulaires dynamique, sans rechargement de page.

### Confidentialité RGPD
Assurer la conformité RGPD et le chiffrement des informations médicales.

### Responsabilités complexes
Gérer les cas complexes de responsabilité légale (autorisations multiples, délégations de prise en charge).

<!-- TODO: Développe chaque défi -->

## Résultats obtenus

Lors de mon départ de l'entreprise, le projet a été repris par un autre développeur et n'est à ce jour pas sorti, ou indisponible publiquement.

## Lendemains du projet

Comme énoncé dans les résultats, le projet n'était pas terminé avant mon départ de l'entreprise. Je n'ai pas trouvé d'accès public à ce site, il peut toujours être en développement, ou a été annulé.

<!-- TODO: Développe -->

## Autocritique

Une critique que je me transmets : "Fais des tests automatisés !" J'ai perdu des heures à tester les formulaires dynamiques et interactifs de création de comptes parents/enfants. Aujourd'hui, surtout sur des fonctionnalités complexes et longues, je teste toujours automatiquement le code.

J'ai beaucoup appris sur la sécurité et le cryptage nécessaire de certaines données et de certains documents notamment liés à la santé et aux mineurs.

Mon expérience la plus mémorable, était la prise de conscience de la complexité de création d'un générateur de formulaire dynamique selon conditions (une sorte de réplique du plugin ACF pour WordPress, mais pour notre site).

<!-- TODO: Développe davantage -->
