---
slug: hoplunch-pointeuse
title: "Création de A à Z d'un système de pointeuse + gestion de projet"
description: "Application interne de pointage pour les livreurs de HopLunch, permettant d'enregistrer les heures d'arrivée et de départ, tout en centralisant et sécurisant les données pour le service RH. Ce projet a nécessité une gestion complète en mode Agile, de la rédaction du cahier des charges à la mise en production, incluant des phases de tests, CI/CD et déploiement automatisé via scripts shell. Projet strictement privé (aucun accès public, pas de code ou démo disponible)."
companyProject: "Pointeuse des livreurs de HopLunch"
company: "HopLunch"
date: "2025"
pending: false
trending: true
image: "/img/projects/hoplunch-pointeuse/2.png"
images:
  - src: "/img/projects/hoplunch-pointeuse/1.png"
    alt: "Page d'accueil de la pointeuse"
  - src: "/img/projects/hoplunch-pointeuse/2.png"
    alt: "Liste des livreurs d'une ville"
  - src: "/img/projects/hoplunch-pointeuse/3.png"
    alt: "Page de pointage d'un livreur"
technologies:
  - icon: "mdi:language-php"
    text: "PHP"
  - icon: "mdi:symfony"
    text: "Symfony"
  - icon: "mdi:language-typescript"
    text: "TypeScript"
  - icon: "mdi:vuejs"
    text: "NuxtJS"
  - icon: "mdi:tailwind"
    text: "TailwindCSS"
  - icon: "mdi:lock"
    text: "JWT Security"
actors:
  client: "HopLunch"
  developer: "Moi-même"
  projectManager: "Moi-même (Chef de projet & Développeur)"
tags:
  - "Gestion de projet"
  - "Développement Web"
skillLinks:
  - link: "html-twig"
    text: "HTML/Twig"
  - link: "sass-tailwind"
    text: "SASS/Tailwind"
  - link: "javascript"
    text: "JavaScript"
  - link: "vue-nuxt"
    text: "VueJS/NuxtJS"
  - link: "php"
    text: "PHP"
  - link: "symfony"
    text: "Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "typescript"
    text: "TypeScript"
demoLink: ""
---

## Contexte du projet

Le système de pointeuse existant était obsolète et source d'erreurs. L'objectif était de concevoir une nouvelle application responsive, intuitive et sécurisée pour les tablettes des dépôts HopLunch, tout en respectant les contraintes métiers et RGPD. Une attention particulière a été portée à la fiabilité des données et à la performance de l'interface.

<!-- TODO: Ajoute ici plusieurs paragraphes décrivant en détail le contexte business, ton rôle, la situation de l'entreprise... -->

## Objectifs

- Supprimer le Legacy et isoler la pointeuse dans un module dédié.
- Créer une application responsive, intuitive et rapide.
- Mettre en place une architecture sécurisée (JWT, HTTPS).
- Automatiser le déploiement et l'intégration continue.
- Garantir la conformité RGPD et la fiabilité des données.
- Améliorer la performance et l'ergonomie pour éviter les erreurs des livreurs.

<!-- TODO: Développe chaque objectif en paragraphe si nécessaire -->

## Gestion du projet

Gestion Agile en sprints hebdomadaires avec validations intermédiaires. Cahier des charges validé et ajusté en continu. Suivi via Asana et réunions hebdomadaires avec le client.

<!-- TODO: Décris ta méthodologie en détail, les outils, les réunions, les sprints... -->

## Fonctionnalités clés

- Interface avec deux onglets (Pointage/Dépointage) pour éviter les erreurs.
- Affichage dynamique et synchronisation des livreurs en temps réel.
- Authentification sécurisée avec mot de passe et tokens JWT.
- Confirmation visuelle et gestion claire des erreurs.
- Contrôles métiers robustes pour éviter les doubles pointages.

<!-- TODO: Détaille chaque fonctionnalité avec des paragraphes explicatifs -->

## Solutions techniques

- Frontend développé avec NuxtJS + TailwindCSS.
- Backend Symfony 6 avec API REST sécurisée.
- Interface responsive optimisée pour tablettes et desktop.
- Mise en place de tests unitaires et fonctionnels (PHPUnit, Playwright).
- Pipeline CI/CD GitHub Actions avec déploiement automatisé (scripts shell).

<!-- TODO: Explique tes choix techniques en profondeur -->

## Défis rencontrés

### Migration
Sortie d'un système Legacy sans interruption de service.

### Sécurité
Respect RGPD et sécurisation HTTPS/JWT.

### Fiabilité
Synchronisation en temps réel avec l'API HopLunch.

<!-- TODO: Développe chaque défi avec ton expérience personnelle -->

## Résultats obtenus

- Application déployée avec succès et totalement intégrée au SI HopLunch.
- Réduction des erreurs et fiabilisation des données de pointage.
- Sécurisation complète et conformité légale (RGPD).

## Lendemains du projet

Aujourd'hui, après 8 mois en production, le projet de pointeuse est bien ancré dans le SI de HopLunch et est utilisé par une centaine de livreurs tous les jours.

<!-- TODO: Développe ce qui s'est passé après la mise en prod -->

## Autocritique

Mon premier projet NuxtJS qui a été très enrichissant et où j'ai énormément appris en utilisant API, Stores Pinia, état des données, cache.

Le projet n'a connu aucun bug depuis sa mise en prod initiale, car j'ai testé convenablement 100% des actions possibles sur la pointeuse.

Ma plus grande fierté, est le respect des délais de mes estimations initiales. Ma gestion de ce projet était réussie et j'ai hâte de gérer d'autres projets en parallèle de leurs développements.

<!-- TODO: Ajoute ce que tu aurais fait différemment, les leçons apprises... -->
