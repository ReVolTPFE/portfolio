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
  - link: "php-symfony"
    text: "PHP/Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "git"
    text: "Git"
demoLink: ""
---

## Contexte du projet

Le projet Bee'z Web est la phase 2 du projet Bee'z Pro, né directement de la confiance établie avec la cliente lors de la première phase. Après avoir développé le site vitrine et le système de gestion des candidatures pour l'agence d'intérim, la cliente avait besoin d'un outil complémentaire destiné aux **entreprises clientes** de l'agence (les sociétés qui font appel à Bee'z Pro pour recruter des intérimaires).

Jusqu'alors, le processus de contractualisation était entièrement manuel : la gérante rédigeait les contrats sous Word, les envoyait par email, attendait les signatures scannées, puis créait les factures sous Excel. Ce processus était lent (plusieurs jours pour un seul contrat), sujet à erreurs (montants mal calculés, clauses manquantes) et ne permettait aucun suivi en temps réel.

L'objectif de Bee'z Web était de **dématérialiser l'intégralité du cycle contractuel** : de l'inscription de l'entreprise cliente jusqu'au paiement de la facture, en passant par la création du contrat, la signature en ligne, la gestion des avenants et l'édition automatique des factures et avoirs. Le tout devait être conforme aux nombreuses normes légales encadrant les contrats d'intérim et la facturation.

Ce projet a été le plus exigeant techniquement et fonctionnellement de mon expérience chez DGS Création, car il touchait à des domaines sensibles (juridique, comptabilité, RGPD) où la moindre erreur peut avoir des conséquences réelles.

## Objectifs

- **Automatiser la génération et le suivi des documents contractuels** : contrats d'intérim, avenants, lettres de mission, avec génération automatique de PDF conformes aux normes légales. Chaque document devait comporter les mentions obligatoires, les bonnes clauses et les montants exacts.

- **Améliorer la transparence** pour les entreprises clientes grâce à des tableaux de bord clairs affichant en temps réel l'état des contrats, les factures en attente, les paiements effectués et les statistiques de missions.

- **Renforcer la gestion des droits** par rôle utilisateur : l'administratrice de l'agence, les managers, les entreprises clientes et les intérimaires n'ont pas accès aux mêmes données ni aux mêmes fonctionnalités. Chaque rôle dispose d'une vue adaptée et de permissions granulaires.

- **Garantir la conformité RGPD et juridique** : chiffrement des données contractuelles et personnelles, horodatage des actions, journaux d'accès, gestion du consentement, et numérotation séquentielle des factures sans trou (obligation comptable).

## Fonctionnalités clés

- **Inscription et gestion des entreprises clientes** : formulaire d'inscription avec validation de l'identité via l'API Sirene de l'Insee (SIRET, raison sociale, adresse), fiche entreprise complète avec historique des interactions, et gestion des utilisateurs rattachés à chaque entreprise.

- **Création de contrats et avenants** : processus guidé en plusieurs étapes (sélection de l'intérimaire, définition de la mission, durée, rémunération, clauses spécifiques), avec génération automatique du document PDF prêt à signer. Les avenants (prolongation, modification de mission, ajustement salarial) sont gérés comme des versions successives du contrat, avec un historique complet des modifications.

- **Système de facturation complet** : génération automatique de factures à partir des contrats actifs, calcul de la TVA et des marges, édition d'avoirs partiels ou totaux, numérotation séquentielle conforme, et export Excel pour la comptabilité. Un système de double vérification calcule chaque montant de deux manières différentes pour garantir l'exactitude au centime près.

- **Tableau de bord administrateur** : graphiques de facturation (chiffre d'affaires mensuel, volume de missions), paramètres globaux personnalisables, et vue d'ensemble des contrats en cours et à venir.

- **Gestion fine des utilisateurs et des rôles** : Admin (accès total), Manager (gestion des contrats et factures), User (consultation uniquement). Chaque rôle dispose de vues et de fonctionnalités adaptées, avec des voters Symfony pour la vérification granulaire des permissions.

- **Notifications et mailing** : rappels automatiques de paiement, alertes d'échéance de contrat, confirmations d'inscription et de signature. Les emails sont générés via Symfony Mailer avec des templates Twig personnalisés.

## Solutions techniques

- **Symfony 6 MVC** structuré en bundles fonctionnels (Entreprise, Contrat, Facture, Utilisateur, Notification), partageant certaines bases avec Bee'z Pro pour la cohérence des données. L'architecture de services métier dédiés (ContratService, FactureService, PdfGenerator) encapsule la logique complexe de chaque domaine.

- **Twig + SASS/Bootstrap** pour l'interface utilisateur, avec des composants réutilisables (tableaux filtrables, formulaires multi-étapes, modales de confirmation). La macro Twig de tableau filtrable que j'ai développée a été réutilisée sur plus de 15 pages du back-office.

- **API Sirene de l'Insee** pour la validation et l'import des données d'entreprise lors de l'inscription. Le SIRET saisi est vérifié en temps réel, et les informations légales (raison sociale, adresse, code APE) sont pré-remplies automatiquement.

- **Génération de PDF** via une librairie PHP dédiée, avec des templates Twig convertis en PDF. Chaque type de document (contrat, avenant, facture, avoir) dispose de son propre template conforme aux exigences légales.

- **Chiffrement des données sensibles** : les documents contractuels et les données financières sont chiffrés en base de données. Les accès sont tracés dans un journal d'audit horodaté.

- **Versioning Git avec SemVer** et workflow Git Flow, identique au projet Bee'z Pro pour la cohérence des pratiques.

## Défis rencontrés

### Sécurité et isolation des données

L'isolation des données entre les entreprises clientes était critique : aucune entreprise ne devait pouvoir accéder aux contrats ou factures d'une autre. J'ai mis en place un système de filtrage systématique via des Doctrine Filters et des Voters Symfony qui vérifient le rattachement de chaque entité à l'entreprise de l'utilisateur connecté. Chaque requête de base de données est automatiquement filtrée par l'identifiant de l'entreprise, rendant impossible toute fuite de données entre clients, même en cas de manipulation d'URL.

### Conformité comptable et juridique de la facturation

La facturation dans le domaine de l'intérim est encadrée par des règles strictes : numérotation séquentielle sans trou, mentions légales obligatoires, impossibilité de supprimer une facture émise (seul un avoir peut la compenser). J'ai développé un système qui garantit ces contraintes par design : la numérotation est gérée par un compteur atomique en base de données, les factures émises sont verrouillées en écriture, et les avoirs référencent obligatoirement la facture d'origine. Un système de double vérification des montants (calcul par somme des lignes et calcul global) détecte automatiquement les incohérences. Ce système a permis de détecter un bug d'arrondi (0.01€ d'écart sur certaines configurations de TVA) durant le développement, qui aurait pu passer inaperçu sans cette vérification croisée.

### Génération de PDF conformes et complexes

La génération de documents PDF conformes aux normes légales du travail temporaire a été un défi à part entière. Chaque contrat d'intérim doit comporter des clauses spécifiques, des mentions obligatoires, et des informations qui varient selon le type de mission (intérim classique, CDI intérimaire, mise à disposition). J'ai créé un système de templates Twig modulaires avec des blocs conditionnels qui composent le bon document selon les paramètres du contrat. Les PDF générés ont été validés par la gérante et ses conseillers juridiques avant la mise en production.

## Résultats obtenus

- **Réduction drastique du temps de création de contrats** : de plusieurs jours (processus manuel Word/email) à moins de 48h (processus dématérialisé complet).
- **Entreprises clientes satisfaites** de pouvoir créer, signer et suivre leurs contrats en ligne, avec une visibilité en temps réel sur leurs factures et paiements.
- **Cliente satisfaite du produit final**, qui a rapidement commencé à signer de nouveaux contrats via la plateforme, validant ainsi le modèle économique du projet.
- **Fiabilité comptable** : aucune erreur de facturation signalée en production grâce au système de double vérification des montants.
- **Conformité RGPD et juridique** validée, avec des données chiffrées, des accès tracés et des documents conformes aux normes du travail temporaire.

## Lendemains du projet

Comme le site Bee'z Pro, le projet a été en ligne pendant plus d'un an après mon départ de DGS Création. Je n'ai pas d'informations précises sur l'utilisation réelle ou le retour sur investissement à moyen/long terme, car j'ai quitté l'entreprise après avoir terminé ce projet. Cependant, le fait que la plateforme ait continué à fonctionner et à être utilisée pendant plus d'un an est un indicateur positif de la robustesse du code livré.

## Autocritique

Comme pour la phase 1, la gestion du périmètre projet a été le principal point de friction. La cliente a demandé de nombreux ajustements et ajouts de fonctionnalités après la validation du cahier des charges, ce qui a rallongé le développement. Cette expérience a renforcé ma conviction qu'il est essentiel d'expliquer clairement et systématiquement aux clients les conséquences de chaque changement en cours de projet.

Le projet a été techniquement le plus exigeant de mon expérience chez DGS Création. C'était la première fois que je travaillais sur un domaine nécessitant une telle vigilance juridique et comptable. Chaque fonctionnalité liée aux contrats et aux factures devait être irréprochable, car les erreurs dans ce domaine ont des conséquences financières et légales réelles. Cette pression m'a fait progresser considérablement en rigueur et en attention au détail.

J'ai beaucoup appris sur le fonctionnement des factures et des avoirs, sur les contraintes comptables, et sur le droit du travail temporaire. Ces connaissances métier, acquises en développant l'application et en échangeant avec la cliente, sont un capital que je conserve et qui enrichit ma compréhension des enjeux business derrière le code. La leçon principale : aucun chiffre ne peut être approximatif sur une facture. Cette exigence de précision absolue a profondément influencé ma manière d'aborder le développement de fonctionnalités critiques.
