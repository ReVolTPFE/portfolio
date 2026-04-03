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
  - link: "php-symfony"
    text: "PHP/Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "git"
    text: "Git"
demoLink: ""
---

## Contexte du projet

Ile aux Copains est une structure associative dédiée à l'organisation d'activités périscolaires, d'animations pour enfants et de voyages scolaires durant les vacances. Avant notre intervention, la gestion de ces activités reposait sur des processus manuels : inscriptions papier, suivi des présences sur tableur Excel, facturation manuelle et communication par email ou téléphone. Ce fonctionnement posait des problèmes de traçabilité, de fiabilité des données et de charge administrative considérable pour l'équipe.

Le projet consistait à développer un portail web complet permettant de gérer, depuis un **back-office unique**, l'ensemble du cycle de vie des activités : création et paramétrage des événements (sorties, ateliers, voyages), inscription en ligne des enfants par leurs parents, gestion des présences (check-in/check-out), suivi financier (paiements, relances) et génération automatique de plannings et de factures.

La particularité de ce projet résidait dans la **sensibilité des données manipulées** : données de santé de mineurs (allergies, traitements médicaux, régimes alimentaires), informations familiales complexes (parents divorcés, tuteurs légaux, autorisations de tiers) et données financières. La conformité RGPD n'était pas un simple ajout, mais une contrainte structurante qui devait être intégrée dès la conception du modèle de données.

Ce projet représentait un défi technique majeur, notamment la conception d'un générateur de formulaires dynamiques et la gestion des cas complexes de responsabilité légale.

## Objectifs

- **Offrir un parcours d'inscription fluide pour les parents** : formulaire d'inscription en ligne, saisie des informations de l'enfant (âge, santé, régime alimentaire, contacts d'urgence), choix des activités, paiement en ligne et confirmation automatique. Le tout devait être accessible sur mobile pour les parents qui n'ont pas accès à un ordinateur.

- **Permettre aux administrateurs de créer n'importe quel type d'événement** : sorties d'une journée, ateliers hebdomadaires, séjours de vacances de plusieurs jours. Chaque type d'événement a ses propres spécificités (nombre de places, tranche d'âge, équipement requis, hébergement, transport) et le système devait s'adapter dynamiquement.

- **Assurer la sécurité et la confidentialité des données sensibles** : les données de santé des mineurs sont soumises à des réglementations strictes. Le chiffrement des colonnes sensibles en base de données et la gestion fine des accès étaient des impératifs non négociables.

- **Générer automatiquement plannings et factures** : les plannings de présence pour les animateurs et les factures pour les parents devaient être générés automatiquement à partir des inscriptions confirmées, avec export PDF et Excel.

## Fonctionnalités clés

- **Back-office complet pour administrateurs** : tableau de bord avec vue d'ensemble des activités en cours et à venir, création d'événements avec paramétrage avancé (dates, horaires, capacité, tranche d'âge, tarification, équipements nécessaires), gestion des sessions récurrentes et des places disponibles.

- **Générateur de formulaires d'inscription 100% personnalisable** : c'est la fonctionnalité la plus complexe du projet. L'administrateur peut créer visuellement des formulaires d'inscription avec des champs dynamiques (textes, zones de texte, fichiers uploadés, cases à cocher, listes déroulantes) et des conditions d'affichage (un champ apparaît uniquement si une certaine condition est remplie). Ce générateur fonctionne sans rechargement de page grâce à JavaScript, et les données saisies sont validées côté serveur par Symfony. La complexité était comparable à la création d'un plugin ACF (Advanced Custom Fields) pour WordPress, mais intégré nativement dans l'application Symfony.

- **Module de paiement intégré (Stripe)** : les parents peuvent payer en ligne lors de l'inscription, avec suivi des reçus de paiement et système de relance automatique en cas de non-paiement. Le module gère les paiements partiels, les remboursements et les avoirs.

- **Gestion avancée des responsabilités parentales** : le système prend en compte les cas complexes de responsabilité légale : parents divorcés avec garde alternée, tuteurs légaux multiples, autorisations de tiers pour récupérer un enfant. Chaque responsable peut avoir des niveaux d'autorisation différents (autorisation de récupération, autorisation médicale, contact d'urgence uniquement).

- **Interface mobile-first pour la gestion des présences** : les animateurs peuvent effectuer le check-in et check-out des enfants directement depuis leur smartphone ou tablette, avec notification instantanée aux parents.

## Solutions techniques

- **Architecture Symfony 6 MVC** avec une organisation en bundles fonctionnels (Événement, Inscription, Paiement, Utilisateur). Le bundle Événement gère la logique de création et paramétrage des activités, tandis que le bundle Inscription encapsule le générateur de formulaires dynamiques et la validation des données.

- **Twig + SASS/Bootstrap** pour l'interface utilisateur, fidèle aux maquettes développées en externe par un designer. L'intégration responsive a été particulièrement soignée pour le parcours d'inscription mobile.

- **MySQL avec chiffrement au niveau des colonnes** : les données de santé (allergies, traitements, informations médicales) et les documents sensibles sont chiffrés en AES directement en base de données. Les clés de chiffrement sont stockées séparément dans des variables d'environnement, conformément aux bonnes pratiques de sécurité.

- **JavaScript vanilla pour le générateur de formulaires** : les interactions dynamiques du générateur (ajout/suppression de champs, drag & drop pour réorganiser, conditions d'affichage) sont gérées côté client en JavaScript, avec une synchronisation avec le back-end pour la persistance des configurations.

- **Export PDF/Excel** : génération automatique de plannings de présence et de factures, disponibles à la volée ou planifiés en tâche CRON pour les envois automatiques en fin de mois.

## Défis rencontrés

### Générateur de formulaires dynamiques

La création du générateur de formulaires a été le défi technique principal et le plus formateur de ce projet. L'administrateur devait pouvoir créer visuellement un formulaire avec des champs de types variés, définir des conditions d'affichage entre les champs, et le tout devait fonctionner de manière fluide sans rechargement de page. Côté front-end, cela impliquait un système JavaScript complexe de gestion d'état, de rendu dynamique et de drag & drop. Côté back-end, la structure des formulaires devait être stockée en base de données de manière flexible (format JSON) tout en restant interrogeable et validable par Symfony. La difficulté principale était la gestion des conditions imbriquées : par exemple, un champ "Détail allergie" n'apparaît que si "Allergie" est coché, et un champ "Traitement en cours" n'apparaît que si "Allergie alimentaire" est sélectionné dans la liste déroulante des types d'allergies. Ce système de conditions en cascade a nécessité un algorithme de résolution de dépendances que j'ai implémenté en JavaScript. C'est ce défi qui m'a fait prendre conscience de la complexité réelle de ce type de fonctionnalité.

### Confidentialité RGPD et protection des données de mineurs

Les données de mineurs sont soumises à un cadre réglementaire renforcé. J'ai dû mettre en place un chiffrement AES-256 sur toutes les colonnes contenant des données de santé, avec une gestion des clés conforme aux recommandations de la CNIL. Les accès aux données sensibles sont tracés et horodatés, et seuls les utilisateurs disposant du rôle approprié peuvent consulter les informations médicales. La conception du modèle de données a intégré ces contraintes dès le départ, ce qui a évité des refactoring coûteux en cours de projet.

### Modélisation des responsabilités familiales complexes

La gestion des cas de parents divorcés avec garde alternée, de tuteurs légaux multiples et d'autorisations de tiers a nécessité un modèle relationnel soigneusement pensé. Chaque enfant peut avoir plusieurs responsables avec des rôles différents (parent principal, parent secondaire, tuteur légal, personne autorisée à récupérer l'enfant), et ces liens ont des dates de validité et des niveaux d'autorisation spécifiques. J'ai conçu un schéma avec des tables de liaison incluant des métadonnées (type de responsabilité, niveau d'autorisation, dates de début et fin de validité), permettant de gérer ces cas sans limitation du modèle de données.

## Résultats obtenus

Lors de mon départ de l'entreprise DGS Création, le projet n'était pas terminé. Il a été repris par un autre développeur pour la finalisation. À ce jour, le site n'est pas disponible publiquement, ou a potentiellement été annulé. Malgré cette situation, le travail réalisé sur ma partie du projet était fonctionnel et documenté, facilitant la reprise par un autre développeur.

Les fonctionnalités que j'ai développées (générateur de formulaires, système d'inscription, gestion des responsabilités, chiffrement des données) étaient opérationnelles et testées sur l'environnement de staging avant mon départ.

## Lendemains du projet

Le projet n'étant pas terminé avant mon départ, je n'ai pas de visibilité sur son état actuel. Il est possible qu'il soit toujours en développement, qu'il ait été lancé sous une forme différente, ou qu'il ait été abandonné. Cette incertitude est l'un des aspects frustrants du travail en agence : lorsqu'on quitte l'entreprise, on perd le suivi des projets auxquels on a contribué.

Ce qui reste, en revanche, c'est l'expérience technique et les apprentissages tirés de ce projet, qui m'accompagnent dans mes projets actuels.

## Autocritique

La leçon la plus marquante de ce projet tient en une phrase : **"Fais des tests automatisés !"** J'ai perdu des heures à tester manuellement les formulaires dynamiques et interactifs de création de comptes parents/enfants, avec toutes les combinaisons de conditions et de cas familiaux complexes. Les tests manuels sont non seulement chronophages, mais aussi incomplets : il est impossible de couvrir manuellement tous les cas limites d'un système aussi complexe. Aujourd'hui, surtout sur des fonctionnalités critiques et longues à développer, je teste systématiquement le code de manière automatisée. Cette leçon a directement contribué au succès du projet de pointeuse chez HopLunch, où les tests exhaustifs ont garanti zéro bug en production.

J'ai beaucoup appris sur la sécurité et le chiffrement des données sensibles, en particulier celles liées à la santé et aux mineurs. Les contraintes RGPD renforcées pour les données de mineurs m'ont poussé à étudier en profondeur les recommandations de la CNIL et les bonnes pratiques de chiffrement en base de données, des connaissances que je réutilise aujourd'hui sur d'autres projets.

Mon expérience la plus mémorable reste la prise de conscience de la complexité réelle d'un générateur de formulaires dynamiques avec conditions. Ce qui semble simple en surface ("l'utilisateur crée un formulaire avec des champs") cache une complexité technique considérable en termes de gestion d'état, de résolution de dépendances et de validation. Cette expérience m'a appris à ne jamais sous-estimer la complexité d'une fonctionnalité, même lorsqu'elle semble intuitive d'un point de vue utilisateur.
