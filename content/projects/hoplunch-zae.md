---
slug: hoplunch-zae
title: "Création d'un système complexe de gestion de ZAE et leurs entreprises"
description: "Refonte complète du système de gestion des Zones d'Activités Économiques (ZAE) pour HopLunch, incluant la création, l'organisation, le suivi des zones desservies, ainsi que l'ajout de nombreuses fonctionnalités et l'amélioration de l'architecture technique."
companyProject: "Refonte gestion ZAE et entreprises"
company: "HopLunch"
date: "2024 - 2025"
pending: false
trending: true
image: "/img/projects/hoplunch-zae/1.png"
images:
  - src: "/img/projects/hoplunch-zae/1.png"
    alt: "Carte des ZAE d'une ville"
  - src: "/img/projects/hoplunch-zae/2.png"
    alt: "Liste des entreprises à importer"
  - src: "/img/projects/hoplunch-zae/3.png"
    alt: "Page des villes à associer"
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
    text: "API Sirene (Insee)"
  - icon: "mdi:docker"
    text: "Docker"
actors:
  client: "HopLunch"
  developer: "Moi-même"
  projectManager: "Lead Technique interne"
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

HopLunch propose un service de restauration en entreprise, nécessitant une gestion fine des zones de livraison (ZAE) et des entreprises éligibles. Le processus existant d'ajout de ZAE et d'entreprises reposait sur des fichiers Excel et des échanges multiples entre managers de ville et développeurs, entraînant lenteur et risques d'erreurs. L'objectif était d'unifier et automatiser l'ensemble du flux : création de ZAE, association des villes, récupération des entreprises via l'API Sirene et validation dans le Back-Office.

<!-- TODO: Développe le contexte business en détail -->

## Objectifs

- Remplacer l'ancien système basé sur des fichiers Excel par un flux 100% automatisé.
- Permettre la création de ZAE via polygone de coordonnées (WKT/GeoJSON) directement dans le Back-Office.
- Intégrer l'API Sirene pour importer et filtrer automatiquement les entreprises.
- Mettre en place un système asynchrone pour les imports massifs afin d'éviter le blocage du Back-Office.
- Améliorer la gestion des villes associées et leur liaison avec les ZAE.

<!-- TODO: Développe chaque objectif -->

## Fonctionnalités clés

- Création et édition de ZAE via polygones WKT/GeoJSON.
- Association automatique de villes aux ZAE via filtres géographiques et recherche.
- Import intelligent des entreprises via API Sirene, avec filtres (APE, position GPS, validité adresse...).
- Conversion asynchrone des entreprises de l'API Sirene en entreprise en base de données.
- Commandes Symfony pour la synchronisation quotidienne et la purge régulière des données invalides.

<!-- TODO: Détaille chaque fonctionnalité en paragraphes -->

## Solutions techniques

- Symfony 6 avec EasyAdmin pour une interface de gestion ergonomique.
- Gestion avancée des polygones WKT/GeoJSON et conversion des coordonnées Lambert93 ⇄ WGS84.
- Intégration complète de l'API Sirene v3.11 pour la récupération des entreprises (Insee).
- Symfony Messenger pour les tâches asynchrones (import, conversion, synchronisation).
- Environnement de développement sous Docker avec snapshots de base de données et automatisation des migrations.

<!-- TODO: Explique tes choix en profondeur -->

## Défis rencontrés

### Performance
Optimisation des requêtes API et des traitements asynchrones pour des imports rapides et fiables.

### Fiabilité des données
Validation stricte des adresses via Google Maps et élimination des entreprises incompatibles.

### Automatisation
Mise en place de tâches planifiées (cron) pour la synchronisation continue des données.

<!-- TODO: Développe chaque défi avec ton expérience -->

## Résultats obtenus

- Réduction drastique du temps d'intégration des ZAE et entreprises (de plusieurs jours à quelques minutes).
- Autonomie totale des managers de ville pour la gestion de leurs ZAE et entreprises.
- Base d'entreprises enrichie et constamment actualisée grâce à l'API Sirene.

## Lendemains du projet

Ayant par le passé collaboré avec les responsables logistiques dans la gestion des ZAE et entreprises à livrer, j'ai vu les 6 derniers mois le temps gagné, car le système leur permet aujourd'hui d'être totalement autonome sur ces tâches.

<!-- TODO: Développe -->

## Autocritique

Avec mon chef de projet, nous avons perdu du temps sur une refonte partielle temporaire qui a servi 1 mois avant de tout refondre à nouveau. Le problème ayant été une mauvaise compréhension des changements nécessaires.

Remplir un court formulaire et cliquer sur 2 boutons plutôt que de devoir exécuter nos anciennes tâches manuelles est très gratifiant et le système que j'ai développé fait efficacement gagner du temps à tout le monde aujourd'hui dans l'entreprise.

J'ai adoré automatiser les systèmes de scrapping et de création/gestion de ZAE et d'entreprises. Le tout en utilisant plusieurs API et du code concernant les coordonnées GPS et leurs conversions. Ce projet est certainement le plus complexe et le plus large sur lequel j'ai pu travailler.

<!-- TODO: Développe davantage ton autocritique -->
