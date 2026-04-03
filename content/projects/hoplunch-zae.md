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
  - link: "vue-nuxt"
    text: "VueJS/NuxtJS"
  - link: "php-symfony"
    text: "PHP/Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "git"
    text: "Git"
demoLink: ""
---

## Contexte du projet

HopLunch propose un service de restauration livrée en entreprise : les salariés commandent leur repas en ligne, et des livreurs assurent la livraison dans les zones d'activités économiques (ZAE) desservies. Pour que ce service fonctionne, l'entreprise doit gérer un référentiel précis des ZAE, des villes associées et des entreprises éligibles à la livraison dans chaque zone.

Avant ce projet, le processus de gestion des ZAE et des entreprises reposait sur un système archaïque et chronophage. Les managers de ville identifiaient les zones de livraison potentielles, puis transmettaient les informations aux développeurs sous forme de fichiers Excel. Les développeurs inséraient ensuite manuellement les données en base, recherchaient les entreprises éligibles une par une, et vérifiaient les adresses. Ce processus prenait **plusieurs jours pour une seule ZAE** et impliquait des échanges multiples entre managers et développeurs, avec un risque élevé d'erreurs (doublons, adresses invalides, entreprises fermées).

L'objectif de la refonte était ambitieux : **automatiser l'intégralité du flux**, de la création d'une ZAE via un polygone géographique jusqu'à l'import automatique des entreprises situées dans cette zone, en passant par l'association des villes et la validation des données. Le tout devait être accessible directement depuis le back-office EasyAdmin, sans intervention des développeurs.

Ce projet est le plus complexe et le plus large sur lequel j'ai eu l'occasion de travailler, tant par la diversité des technologies impliquées (géolocalisation, API gouvernementales, traitement asynchrone) que par l'impact sur l'ensemble de l'organisation.

## Objectifs

- **Remplacer l'ancien système Excel** par un flux 100% automatisé intégré au back-office. Les managers de ville devaient pouvoir créer une ZAE, importer les entreprises et valider le tout en quelques minutes, sans aucune compétence technique.

- **Créer des ZAE via des polygones géographiques** (WKT/GeoJSON) directement dans le back-office, avec visualisation sur une carte interactive Google Maps. Chaque ZAE est définie par un périmètre géographique précis qui détermine quelles entreprises sont éligibles.

- **Intégrer l'API Sirene de l'Insee** pour récupérer automatiquement toutes les entreprises situées dans le périmètre d'une ZAE, avec des filtres avancés (code APE pour cibler les entreprises de bureau, validation de l'adresse GPS, vérification de l'activité).

- **Mettre en place un système asynchrone** pour les imports massifs (une ZAE peut contenir des centaines voire des milliers d'entreprises), afin d'éviter de bloquer le back-office pendant le traitement.

- **Automatiser la synchronisation et la maintenance** des données via des commandes Symfony exécutées en CRON (purge des entreprises fermées, mise à jour des adresses, synchronisation avec l'API Sirene).

## Fonctionnalités clés

- **Création et édition de ZAE via polygones WKT/GeoJSON** : le manager dessine ou colle les coordonnées d'un polygone, qui est ensuite affiché sur une carte Google Maps pour vérification visuelle. Le système convertit automatiquement les différents formats de coordonnées (Lambert93, WGS84).

- **Association automatique de villes** : à partir du polygone de la ZAE, le système identifie automatiquement les villes dont le territoire recoupe la zone, via des filtres géographiques et une recherche par code postal. Le manager peut ajuster manuellement la liste si nécessaire.

- **Import intelligent des entreprises via API Sirene** : une fois la ZAE créée et les villes associées, un bouton déclenche l'import des entreprises. Le système interroge l'API Sirene avec des filtres (codes APE correspondant à des entreprises de bureau, coordonnées GPS à l'intérieur du polygone, entreprise active et non fermée), et affiche les résultats dans un tableau interactif.

- **Conversion asynchrone** : les entreprises importées depuis l'API Sirene sont d'abord stockées dans une table temporaire, puis converties en entreprises de la base de données principale via Symfony Messenger. Ce traitement asynchrone permet d'importer des centaines d'entreprises sans bloquer l'interface, avec une barre de progression visible dans le back-office.

- **Commandes Symfony automatisées** : synchronisation quotidienne des données d'entreprises (vérification d'activité, mise à jour des adresses), purge des entreprises invalides, et nettoyage des données temporaires. Ces commandes sont exécutées via des tâches CRON et génèrent des logs détaillés pour le monitoring.

## Solutions techniques

- **Symfony 6 avec EasyAdmin** pour le back-office, offrant une interface de gestion ergonomique et personnalisable. J'ai étendu EasyAdmin avec des champs personnalisés pour la saisie des polygones et l'affichage des cartes Google Maps.

- **Gestion avancée des données géospatiales** : utilisation des types MySQL spatiaux (POLYGON, POINT), des fonctions géographiques natives (ST_Contains, ST_Within), et d'un algorithme de conversion Lambert93 ⇄ WGS84 implémenté en PHP pour la compatibilité avec les différents formats de l'API Sirene.

- **Intégration complète de l'API Sirene v3.11** : service PHP dédié gérant l'authentification, la pagination, le rate limiting, et la transformation des données brutes en entités exploitables. Le service gère également les erreurs de l'API (timeouts, quotas dépassés) avec un système de retry intelligent.

- **Symfony Messenger** pour les tâches asynchrones : les imports massifs d'entreprises sont traités par des workers qui convertissent les données API en enregistrements base de données, avec gestion des échecs (retry, dead-letter queue) et notification du résultat.

- **Environnement Docker** avec snapshots de base de données pour le développement. Les migrations Doctrine sont versionnées et testées sur une copie de la base de production avant déploiement.

## Défis rencontrés

### Performance des imports massifs

Le premier défi technique a été la performance des imports. Une ZAE peut contenir des centaines d'entreprises, et l'API Sirene renvoie les données paginées avec un rate limiting strict. J'ai optimisé le processus en utilisant des insertions batch en base de données (plutôt que des insertions unitaires), en parallélisant les requêtes API dans la limite du rate limiting autorisé, et en utilisant Symfony Messenger pour traiter les conversions en arrière-plan. Le temps d'import d'une ZAE complète est passé de plusieurs minutes (approche naïve) à quelques secondes pour la partie synchrone, avec le traitement complet achevé en arrière-plan en moins d'une minute.

### Fiabilité des données géographiques

La validation des adresses était un point critique. L'API Sirene fournit des coordonnées GPS qui ne sont pas toujours fiables (précision variable, adresses mal géolocalisées). J'ai mis en place une validation croisée avec Google Maps pour vérifier que chaque entreprise importée se situe bien dans le périmètre de la ZAE. Les entreprises dont l'adresse ne peut pas être validée sont marquées pour revue manuelle plutôt que supprimées automatiquement, afin d'éviter les faux négatifs.

### Automatisation et monitoring

La mise en place des commandes CRON de synchronisation a nécessité une attention particulière au monitoring. Un dysfonctionnement silencieux d'une commande de synchronisation pourrait corrompre les données sans que personne ne s'en aperçoive. J'ai développé un système de logs structurés et de notifications (email en cas d'échec) pour garantir la fiabilité des tâches automatisées.

## Résultats obtenus

- **Réduction du temps d'intégration d'une ZAE de plusieurs jours à quelques minutes**, transformant un processus manuel chronophage en une opération semi-automatique accessible à tous.
- **Autonomie totale des managers de ville** : ils peuvent désormais créer, modifier et enrichir leurs ZAE sans aucune intervention technique, ce qui décharge l'équipe de développement et accélère le déploiement commercial.
- **Base d'entreprises enrichie et constamment actualisée** grâce à la synchronisation automatique avec l'API Sirene, éliminant les doublons et les données obsolètes.
- **Suppression complète de la dépendance aux fichiers Excel** et aux échanges manuels entre managers et développeurs.

## Lendemains du projet

Ayant par le passé collaboré directement avec les responsables logistiques pour la gestion des ZAE et des entreprises à livrer, j'ai pu constater concrètement le temps gagné au cours des 6 derniers mois. Le système permet aujourd'hui aux managers d'être totalement autonomes sur ces tâches qui mobilisaient auparavant plusieurs personnes. Remplir un court formulaire et cliquer sur deux boutons plutôt que de devoir exécuter les anciennes tâches manuelles représente un gain de productivité considérable pour l'ensemble de l'organisation.

Le système est stable en production et les commandes CRON de synchronisation fonctionnent sans incident, maintenant la base d'entreprises à jour automatiquement. Des évolutions sont régulièrement ajoutées (nouveaux filtres, amélioration de l'interface carte, ajout de statistiques par ZAE).

## Autocritique

Avec mon chef de projet, nous avons commis l'erreur de démarrer une refonte partielle temporaire avant de réaliser qu'une refonte complète était nécessaire. Cette refonte partielle n'a servi qu'un mois avant d'être remplacée par le système définitif. La cause était une mauvaise compréhension initiale de l'étendue des changements nécessaires. Cette expérience m'a appris l'importance d'une phase d'analyse approfondie AVANT de commencer à coder, même lorsque la pression pour livrer rapidement est forte.

Malgré cette erreur de départ, le résultat final est très satisfaisant. Le système que j'ai développé fait efficacement gagner du temps à tout le monde dans l'entreprise, et voir les managers de ville utiliser quotidiennement l'outil que j'ai conçu est gratifiant.

J'ai adoré travailler sur les aspects techniques de ce projet : les API géographiques, les conversions de coordonnées GPS, le traitement asynchrone avec Messenger, et l'intégration de l'API Sirene. La diversité des technologies impliquées en fait certainement le projet le plus enrichissant et le plus formateur de ma carrière à ce jour.
