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

## Présentation du projet

Ce projet porte sur la refonte complète du système de gestion des Zones d'Activités Économiques (ZAE) au sein de HopLunch, une entreprise spécialisée dans la restauration livrée en entreprise. Le système que j'ai conçu et développé permet de gérer l'intégralité du référentiel des ZAE depuis le back-office EasyAdmin, sans aucune intervention technique. Un manager de ville peut créer une ZAE en définissant un polygone géographique (WKT/GeoJSON), visualiser ce périmètre sur une carte Google Maps, associer automatiquement les villes concernées, puis importer en un clic toutes les entreprises situées dans la zone via l'API Sirene de l'Insee. Le traitement des imports massifs s'effectue de manière asynchrone grâce à Symfony Messenger, et des commandes CRON assurent la synchronisation quotidienne des données.

Ce projet est le plus complexe sur lequel j'ai eu l'occasion de travailler, par la diversité des technologies mobilisées (données géospatiales MySQL, conversion Lambert93/WGS84, API gouvernementales, traitement asynchrone, personnalisation EasyAdmin) et par son impact sur l'ensemble de l'organisation.

## Objectifs

- **Remplacer l'ancien système Excel** par un flux 100% automatisé intégré au back-office. Les managers de ville devaient pouvoir créer une ZAE, importer les entreprises et valider le tout en quelques minutes, sans aucune compétence technique.

- **Permettre la création de ZAE via des polygones géographiques** directement dans le back-office, avec visualisation sur une carte interactive Google Maps. Chaque ZAE devait être définie par un périmètre géographique précis déterminant quelles entreprises sont éligibles à la livraison.

- **Intégrer l'API Sirene de l'Insee** pour récupérer automatiquement toutes les entreprises situées dans le périmètre d'une ZAE, en appliquant des filtres avancés (code APE pour cibler les entreprises de bureau, validation de l'adresse GPS, vérification de l'activité).

- **Mettre en place un système de traitement asynchrone** pour les imports massifs, une ZAE pouvant contenir des centaines voire des milliers d'entreprises, afin de ne pas bloquer le back-office pendant le traitement.

- **Automatiser la maintenance des données** via des commandes Symfony exécutées en CRON : purge des entreprises fermées, mise à jour des adresses, synchronisation régulière avec l'API Sirene.

- **Garantir la fiabilité des données géographiques** en implémentant des mécanismes de validation croisée entre les coordonnées fournies par l'API Sirene et le périmètre réel des ZAE.

## Contexte

HopLunch propose un service de restauration livrée en entreprise : les salariés commandent leur repas en ligne, et des livreurs assurent la livraison dans les ZAE desservies. Avant ce projet, le processus de gestion des ZAE reposait sur un système archaïque. Les managers de ville identifiaient les zones de livraison potentielles, puis transmettaient les informations aux développeurs sous forme de fichiers Excel. Les développeurs inséraient manuellement les données en base, recherchaient les entreprises éligibles une par une, et vérifiaient les adresses. Ce processus prenait **plusieurs jours pour une seule ZAE** avec un risque élevé d'erreurs : doublons, adresses invalides, entreprises fermées ou déménagées.

Le back-office existant, construit sur EasyAdmin et Symfony 6, ne proposait aucun outil pour la gestion géographique. Les ZAE étaient de simples entrées textuelles en base de données, sans représentation cartographique ni lien automatisé avec les entreprises du territoire. L'entreprise connaissait par ailleurs une phase de croissance avec l'ouverture de nouvelles villes, rendant l'ancien processus de plus en plus insoutenable : chaque nouvelle ville signifiait des dizaines de ZAE à créer et des centaines d'entreprises à intégrer manuellement.

## Enjeux

Le premier enjeu était **opérationnel**. L'ancien processus constituait un goulot d'étranglement majeur pour le déploiement commercial. Chaque ouverture de ville était ralentie par la nécessité de mobiliser des développeurs pour des tâches d'insertion de données. Rendre les managers autonomes devait accélérer considérablement le rythme d'expansion.

Le deuxième enjeu était **technique**. Le système devait manipuler des données géospatiales complexes : polygones WKT/GeoJSON, types MySQL spatiaux (POLYGON, POINT), fonctions géographiques natives (ST_Contains, ST_Within), et conversion entre Lambert93 et WGS84. L'API Sirene utilise Lambert93 pour certaines données, tandis que Google Maps fonctionne en WGS84, nécessitant un algorithme de conversion en PHP.

Le troisième enjeu concernait la **fiabilité des données**. L'API Sirene fournit des coordonnées GPS dont la précision est variable, avec des adresses parfois mal géolocalisées ou correspondant à des entreprises ayant cessé leur activité. Il fallait des mécanismes de validation robustes pour éviter d'intégrer des données erronées dans le référentiel.

Le quatrième enjeu était lié à la **performance**. Un import peut concerner des centaines voire des milliers d'établissements, avec un rate limiting strict côté API Sirene. Le système devait traiter ces volumes sans dégrader l'expérience utilisateur du back-office.

Enfin, un enjeu de **maintenabilité** se posait. Les données d'entreprises évoluent en permanence (fermetures, déménagements, créations), imposant des mécanismes de synchronisation automatique.

## Risques

Le risque principal concernait la **dépendance à l'API Sirene**. Cette API gouvernementale connaît des périodes d'indisponibilité et impose des quotas stricts. Pour l'atténuer, j'ai implémenté un service PHP dédié avec retry intelligent, gestion fine des erreurs (timeouts, quotas dépassés, réponses malformées), et un mécanisme de reprise d'import interrompu.

Un deuxième risque portait sur la **corruption silencieuse des données**. Les commandes CRON tournent sans supervision humaine, et un bug pourrait altérer des centaines d'enregistrements avant d'être détecté. J'ai mis en place des logs structurés et des notifications par email en cas d'échec ou d'anomalie.

Le troisième risque était la **validation géographique**. Un algorithme trop strict exclurait des entreprises légitimes (faux négatifs), tandis qu'un algorithme trop permissif intégrerait des entreprises hors zone (faux positifs). J'ai opté pour une validation croisée avec Google Maps : les entreprises non confirmées sont marquées pour revue manuelle plutôt que supprimées.

Un quatrième risque, qui s'est matérialisé, concernait l'**estimation du périmètre de la refonte**. La complexité des interactions entre modules était difficile à évaluer en amont, conduisant à une première itération incomplète avant de comprendre qu'une refonte intégrale s'imposait.

## Les étapes du projet

**Phase 1 : Analyse et conception.** J'ai audité l'ancien système pour comprendre les flux de données et les cas d'usage des managers, en échangeant avec les responsables logistiques pour documenter leurs besoins. J'ai ensuite conçu l'architecture technique : modèle de données géospatiales, schéma d'intégration avec l'API Sirene, stratégie de traitement asynchrone.

**Phase 2 : Infrastructure et fondations techniques.** Mise en place de l'environnement Docker avec snapshots de base de données, configuration des types MySQL spatiaux, et implémentation de l'algorithme de conversion Lambert93/WGS84 en PHP. J'ai développé le service PHP dédié à l'API Sirene v3.11 (authentification, pagination, rate limiting) et versionné les migrations Doctrine, testées sur une copie de la base de production avant chaque déploiement.

**Phase 3 : Module de gestion des ZAE.** Extension d'EasyAdmin avec des champs personnalisés pour la saisie de polygones WKT/GeoJSON et l'affichage de cartes Google Maps interactives. Le manager peut dessiner un polygone sur la carte ou coller des coordonnées, puis visualiser le périmètre. Le système identifie automatiquement les villes concernées via des filtres géographiques et une recherche par code postal, avec possibilité d'ajustement manuel.

**Phase 4 : Module d'import des entreprises.** Implémentation du flux d'import complet : interrogation de l'API Sirene avec filtres avancés (codes APE, coordonnées GPS dans le polygone, entreprise active), affichage dans un tableau interactif, stockage temporaire. Optimisation par insertions batch et parallélisation des requêtes API dans la limite du rate limiting.

**Phase 5 : Traitement asynchrone.** Les entreprises importées sont d'abord stockées dans une table temporaire, puis converties en entités de la base principale via Symfony Messenger. Configuration des workers avec gestion des échecs (retry, dead-letter queue) et barre de progression visible dans le back-office.

**Phase 6 : Automatisation CRON.** Développement des commandes Symfony de synchronisation quotidienne : vérification d'activité, mise à jour des adresses, purge des établissements fermés, nettoyage des données temporaires. Chaque commande génère des logs détaillés et déclenche des notifications en cas d'anomalie.

**Phase 7 : Déploiement et stabilisation.** Déploiement progressif, ZAE par ZAE, pour valider le système en conditions réelles. Accompagnement des premiers managers dans la prise en main et ajustements de l'interface selon leurs retours.

## Résultats pour moi

Ce projet a constitué une étape charnière dans ma progression technique. J'ai acquis une expertise en données géospatiales que je ne possédais pas auparavant : manipulation de polygones WKT/GeoJSON, types et fonctions MySQL spatiaux, conversion Lambert93/WGS84. Ce sont des compétences rares et transversales qui élargissent significativement mon profil.

J'ai consolidé ma maîtrise de Symfony Messenger et du traitement asynchrone en production, avec des problématiques concrètes de gestion d'échecs, de retry et de monitoring. L'intégration d'une API gouvernementale (API Sirene v3.11) avec ses contraintes (pagination, rate limiting, données incohérentes) m'a appris à concevoir des services robustes et tolérants aux pannes.

Sur le plan méthodologique, l'erreur de la refonte partielle a été une leçon précieuse sur la nécessité de comprendre l'étendue réelle d'un projet avant de coder. J'ai aussi développé ma capacité à dialoguer avec des utilisateurs non techniques pour concevoir des interfaces adaptées à leurs besoins.

## Résultats pour l'entreprise

- **Réduction du temps d'intégration d'une ZAE de plusieurs jours à quelques minutes**, transformant un processus manuel chronophage en une opération semi-automatique accessible à tous les managers de ville.

- **Autonomie totale des managers de ville** : ils peuvent créer, modifier et enrichir leurs ZAE sans intervention technique, libérant l'équipe de développement pour des tâches à plus forte valeur ajoutée.

- **Accélération du déploiement commercial** : l'ouverture d'une nouvelle ville ne nécessite plus de mobiliser des développeurs. Le délai entre la décision d'ouvrir une ville et la mise en service effective a été considérablement réduit.

- **Base d'entreprises enrichie et actualisée** grâce à la synchronisation automatique avec l'API Sirene, éliminant doublons et données obsolètes.

- **Suppression complète de la dépendance aux fichiers Excel** et aux échanges manuels. Le processus est désormais traçable, auditable et reproductible.

- **Réduction des erreurs de données** : le système élimine les risques liés aux saisies manuelles (fautes de frappe, doublons, adresses invalides) fréquents avec l'ancien processus.

## Lendemains du projet

Ayant par le passé collaboré directement avec les responsables logistiques pour la gestion des ZAE, j'ai pu constater concrètement le temps gagné après le déploiement. Les managers sont totalement autonomes sur des tâches qui mobilisaient auparavant plusieurs personnes pendant plusieurs jours. Remplir un court formulaire, dessiner un polygone et cliquer sur deux boutons plutôt que constituer des fichiers Excel et attendre les insertions manuelles représente un gain de productivité considérable.

Le système est stable en production et les commandes CRON fonctionnent sans incident, maintenant la base d'entreprises à jour automatiquement. Des évolutions sont régulièrement ajoutées : nouveaux filtres de recherche, amélioration de l'interface cartographique, ajout de statistiques par ZAE.

L'outil est devenu central dans le workflow opérationnel de HopLunch, intégré dans le processus standard d'ouverture de nouvelles villes. Sa fiabilité a permis d'envisager de nouveaux usages, comme l'analyse géographique des zones à fort potentiel commercial.

## Autocritique

Avec mon chef de projet, nous avons commis l'erreur de démarrer une refonte partielle temporaire avant de réaliser qu'une refonte complète s'imposait. Nous pensions pouvoir moderniser le système par étapes, en conservant une partie de l'existant. Cette refonte partielle n'a servi qu'un mois avant d'être remplacée par le système définitif. Nous avions sous-estimé à quel point l'ancien système était imbriqué : modifier une partie sans toucher au reste créait plus de problèmes qu'il n'en résolvait.

Cette expérience m'a appris l'importance d'une phase d'analyse approfondie avant de commencer à coder, même sous pression. Prendre quelques jours supplémentaires pour cartographier l'existant nous aurait évité un mois de travail sur une solution intermédiaire jetable. C'est une leçon que j'applique désormais systématiquement : face à une refonte, je documente exhaustivement l'existant et ses dépendances avant de proposer une architecture cible.

Un autre point d'amélioration concerne la documentation technique. Pris par l'urgence du développement, je n'ai pas produit de documentation suffisamment détaillée sur les algorithmes de conversion de coordonnées et sur l'intégration avec l'API Sirene. J'ai dû compenser a posteriori en rédigeant des commentaires dans le code et en créant un guide d'utilisation pour les managers. Si c'était à refaire, j'intégrerais la documentation directement dans le cycle de développement de chaque fonctionnalité.

Malgré ces points d'amélioration, le résultat final est très satisfaisant. Le système fait efficacement gagner du temps à tout le monde dans l'entreprise. J'ai adoré travailler sur les aspects techniques : les API géographiques, les conversions de coordonnées, le traitement asynchrone avec Messenger, et l'intégration de l'API Sirene. La diversité des technologies impliquées en fait le projet le plus complet et le plus formateur de ma carrière à ce jour.
