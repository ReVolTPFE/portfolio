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

La pointeuse HopLunch est une application web interne que j'ai conçue et développée de zéro pour remplacer un module obsolète du Legacy de l'entreprise. Son rôle est critique : permettre aux livreurs de pointer leur arrivée et leur départ dans les dépôts logistiques chaque jour, et transmettre ces données au service RH pour le calcul des heures travaillées et l'établissement des bulletins de paie.

L'architecture est moderne et découplée. Le frontend, construit avec NuxtJS 3 et TypeScript en mode SPA, exploite la Composition API de Vue 3 et centralise la gestion d'état dans un store Pinia qui orchestre la communication avec l'API et la mise à jour réactive de l'interface. Le backend est une API REST Symfony 6, sécurisée par tokens JWT et voters Symfony. L'interface est habillée avec TailwindCSS, dont la configuration personnalisée intègre la charte graphique HopLunch et des utilitaires pour les boutons tactiles.

L'interface se structure autour de deux onglets : Pointage et Dépointage. Lorsqu'un livreur pointe, il disparait instantanément du premier onglet pour apparaitre dans le second, grâce à la synchronisation en temps réel via Pinia. Chaque action est accompagnée d'un retour visuel immédiat et de contrôles métiers robustes : impossibilité de double pointage, vérification de la cohérence des horaires, logs pour l'audit RH. L'authentification fonctionne par compte de dépôt avec JWT et refresh token transparent.

Ce projet représente un tournant dans mon parcours : c'est le premier que j'ai géré de bout en bout, en cumulant les casquettes de chef de projet et de développeur unique.

## Objectifs

Le projet poursuivait plusieurs objectifs définis dès la phase de cadrage :

- **Supprimer la dépendance au Legacy** en isolant la pointeuse dans une application front-end dédiée communiquant avec le back-end Symfony via une API REST, permettant de faire évoluer la pointeuse indépendamment du reste du SI.

- **Concevoir une interface intuitive et rapide**, optimisée pour les tablettes des dépôts : boutons suffisamment grands, confirmations visuelles claires, temps de chargement minimal. N'importe quel livreur devait pouvoir utiliser l'application sans formation.

- **Sécuriser l'architecture et garantir la conformité RGPD**, les données de pointage contenant des informations personnelles sensibles. L'authentification JWT devait limiter l'accès aux seuls dépôts autorisés, et chaque action devait être tracée.

- **Automatiser le déploiement et l'intégration continue** via GitHub Actions et des scripts shell, pour livrer des mises à jour rapidement et sans risque de régression.

- **Fiabiliser les données RH** en éliminant les erreurs de saisie et les incohérences qui obligeaient le service RH à vérifier et corriger manuellement les données chaque semaine.

## Contexte

HopLunch est une entreprise de restauration livrée en entreprise, présente dans plusieurs villes de France. Chaque jour, des dizaines de livreurs se présentent dans les dépôts logistiques pour commencer leur tournée. Le pointage (heure d'arrivée et de départ) est une donnée critique pour le service RH, qui l'utilise pour calculer les heures travaillées, gérer les absences et établir les bulletins de paie.

Le système en place reposait sur un module intégré au Legacy, l'ancienne application monolithique de HopLunch. Ce module, développé plusieurs années auparavant, n'avait jamais été réellement maintenu. Son interface, conçue pour un usage desktop, avait été sommairement adaptée aux tablettes sans véritable réflexion ergonomique : boutons trop petits, navigation confuse, aucune confirmation visuelle. Les livreurs se trompaient régulièrement, et les données n'étaient pas toujours synchronisées avec le système central.

Le couplage fort avec le Legacy posait un problème technique de fond : toute modification risquait d'impacter d'autres modules de l'application monolithique, rendant les évolutions coûteuses et risquées. La direction souhaitait un système moderne, autonome et fiable, capable de fonctionner indépendamment du Legacy tout en s'intégrant au SI via des API.

## Enjeux

Les enjeux de ce projet dépassaient le cadre technique.

**Fiabilité métier.** Toute défaillance, même ponctuelle, impacte directement le calcul des heures travaillées et la paie des livreurs. La marge d'erreur acceptable était nulle : il fallait un système fiable dès la mise en production.

**Sécurité et conformité RGPD.** Les données manipulées sont des données personnelles : identité des livreurs, horaires de travail, historique de présence. Il était impératif de mettre en place un chiffrement HTTPS, une authentification JWT avec expiration et refresh token, un rate limiting sur les endpoints sensibles, et des logs complets pour la traçabilité. Chaque choix de sécurité a été documenté et validé avec le service RH.

**Conduite du changement.** Remplacer un outil existant, même imparfait, génère de la résistance. Les responsables de dépôt et les livreurs avaient leurs habitudes. Il fallait produire un outil suffisamment intuitif pour que l'adoption soit naturelle.

**Gestion de projet.** C'était la première fois que je gérais un projet de bout en bout. Cette double casquette chef de projet / développeur impliquait de planifier, estimer, communiquer avec les parties prenantes et arbitrer les priorités, tout en assurant la production technique. La responsabilité était totale.

**Intégration au SI existant.** La nouvelle pointeuse devait coexister temporairement avec le Legacy pendant la phase de transition, en garantissant que les deux systèmes produisent des données identiques.

## Risques

Avant de lancer le développement, j'ai identifié les principaux risques et leurs stratégies d'atténuation.

**Régression lors de la migration.** Si la nouvelle pointeuse produisait des données différentes de l'ancienne, la confiance du service RH serait rompue. Pour mitiger ce risque, j'ai prévu dès le cahier des charges une phase de fonctionnement parallèle avec comparaison systématique des données entre les deux systèmes.

**Conditions d'utilisation réelles.** La pointeuse est utilisée dans des dépôts où la connexion réseau peut être instable, par des livreurs pressés qui tappent rapidement. Les cas limites étaient nombreux : coupure réseau pendant un pointage, double pointage, expiration JWT en cours d'utilisation. Chacun de ces scénarios, non anticipé, pouvait provoquer des pertes de données. J'ai mis en place des mécanismes de retry automatique, des messages d'erreur explicites et une reconnexion transparente pour chaque cas identifié.

**Dérive des délais.** Premier projet géré de bout en bout, le risque de sous-estimation était réel. J'ai découpé le projet en sprints hebdomadaires courts avec des livrables concrets, permettant de détecter rapidement tout retard et d'ajuster le planning.

**Rejet par les utilisateurs.** Ce risque a été atténué par l'implication des utilisateurs finaux dès la phase de conception, via des réunions de validation régulières et des retours intégrés au fil des sprints.

## Les étapes du projet

Le projet s'est déroulé en sprints hebdomadaires selon une approche Agile, structuré en cinq phases.

**Phase 1 : Cadrage et cahier des charges.** J'ai recueilli les besoins auprès du service RH et de la direction, puis affiné le document en intégrant les contraintes techniques (compatibilité tablettes, réseau des dépôts, intégration API Symfony) et les retours des livreurs. Le cahier des charges couvrait les spécifications fonctionnelles, les exigences de sécurité, les critères d'acceptation et le planning. Le suivi a été mis en place sur Asana, chaque user story découpée en tâches techniques estimées.

**Phase 2 : Architecture et socle technique.** J'ai défini l'architecture découplée, configuré NuxtJS 3 avec TypeScript, mis en place le store Pinia, et développé les premiers endpoints Symfony 6 avec authentification JWT. Le pipeline CI/CD GitHub Actions a été configuré dès cette phase : chaque push déclenchait les tests (PHPUnit, Playwright), et chaque merge sur main déclenchait le déploiement via scripts shell.

**Phase 3 : Développement itératif.** Chaque semaine, je livrais un incrément fonctionnel présenté lors d'une réunion de validation avec le service RH et la direction. Les premières itérations ont porté sur le socle fonctionnel (affichage des livreurs, pointage, dépointage), puis les suivantes ont ajouté les contrôles métiers, les confirmations visuelles et la gestion des cas limites. Chaque fonctionnalité était testée sur un environnement de staging avant validation.

**Phase 4 : Recette et fonctionnement parallèle.** Pendant deux semaines, la nouvelle pointeuse et l'ancienne fonctionnaient simultanément. Les responsables de dépôt vérifiaient l'identité des données entre les deux systèmes. Cette approche a permis d'établir la confiance du service RH. Les ajustements ergonomiques remontés par les utilisateurs ont été intégrés en temps réel.

**Phase 5 : Mise en production et bascule.** Une fois la fiabilité validée, l'ancien module Legacy a été coupé. La mise en production s'est faite à la date exacte annoncée dans le cahier des charges, chaque sprint ayant été livré dans les temps prévus.

## Résultats pour moi

Ce projet a eu un impact déterminant sur mon développement professionnel.

Sur le plan technique, c'était mon premier projet professionnel avec NuxtJS 3 et TypeScript. J'ai acquis une maîtrise solide de la Composition API de Vue 3, de la gestion d'état avec Pinia, et de l'intégration d'une SPA avec une API REST Symfony sécurisée par JWT. J'ai approfondi mes compétences en TailwindCSS pour les interfaces tactiles et en Playwright pour les tests end-to-end. La mise en place du pipeline CI/CD GitHub Actions m'a donné une expérience concrète de l'automatisation du déploiement, que je réutilise sur tous mes projets.

Sur le plan de la gestion de projet, cette première expérience complète m'a appris à rédiger un cahier des charges itératif, animer des réunions de validation, découper un projet en user stories estimables, et gérer la pression des délais sans sacrifier la qualité. Le respect de chaque échéance m'a donné confiance dans ma capacité à piloter des projets de bout en bout.

Sur le plan de la rigueur, ce projet a confirmé l'importance des tests exhaustifs. J'ai testé 100% des scénarios possibles avant la mise en production, y compris les cas limites. Cette discipline, apprise après mes erreurs sur le projet Ile aux Copains, a directement porté ses fruits avec zéro bug en production sur plus de huit mois.

## Résultats pour l'entreprise

Les bénéfices pour HopLunch ont été concrets et mesurables.

**Fiabilisation complète des données de pointage.** Le service RH n'a plus besoin de vérifier et corriger manuellement les données chaque semaine. Les informations sont désormais directement exploitables pour le calcul des heures et l'établissement des bulletins de paie.

**Réduction drastique des erreurs de pointage.** L'interface à deux onglets, les confirmations visuelles et les contrôles métiers ont éliminé les erreurs de manipulation fréquentes avec l'ancien système. Les cas de double pointage sont rendus impossibles par l'application.

**Zéro bug en production** après plus de huit mois d'utilisation quotidienne par une centaine de livreurs sur plusieurs dépôts, témoignant de la robustesse de l'architecture et des tests effectués.

**Respect intégral des délais.** Le projet a été livré à la date prévue, sans dépassement des estimations initiales, renforçant la crédibilité de l'équipe technique auprès de la direction.

**Effet catalyseur sur la modernisation du SI.** Le succès de la pointeuse a démontré qu'il était possible de remplacer des modules Legacy par des applications modernes sans perturbation. Ce constat a ouvert la voie à d'autres projets de modernisation. La pointeuse est régulièrement citée en interne comme un exemple de projet bien mené.

## Lendemains du projet

Après plus de huit mois en production, la pointeuse est solidement ancrée dans le quotidien de HopLunch. L'application est utilisée chaque jour par une centaine de livreurs sur plusieurs dépôts en France, sans interruption de service ni anomalie signalée.

Des évolutions mineures ont été déployées depuis : ajout de nouvelles villes, ajustements ergonomiques, optimisations de performance. Chaque évolution suit le même processus : branche dédiée, tests automatisés, validation sur staging, déploiement via GitHub Actions. L'architecture découplée NuxtJS / Symfony API permet de faire évoluer chaque couche indépendamment, et les tests Playwright garantissent la non-régression des parcours utilisateur.

Le projet a aussi eu un impact organisationnel durable. Le service RH a pris l'habitude de signaler ses besoins d'évolution en amont, facilitant la planification. La méthodologie Agile et la rigueur dans les estimations sont devenues des pratiques que je reproduis systématiquement sur mes projets suivants.

## Autocritique

Ce projet est celui dont je suis le plus fier, à la fois pour la qualité technique et pour la réussite de la gestion de projet. Premier projet NuxtJS professionnel et premier projet géré de bout en bout, deux premières qui auraient pu être source de difficultés. Le résultat est pourtant à la hauteur : zéro bug en production, respect des délais, satisfaction du client.

Si je devais refaire ce projet, je mettrais en place les tests end-to-end Playwright dès le premier sprint plutôt qu'en fin de développement. Les tests unitaires PHPUnit étaient présents dès le début côté backend, mais les tests Playwright côté frontend sont arrivés tardivement. Les intégrer plus tôt m'aurait fait gagner du temps sur la recette et aurait détecté plus rapidement certains comportements inattendus de l'interface sur les tablettes.

La documentation technique, bien que suffisante, aurait pu être plus étoffée. La documentation des composants Vue et des endpoints API aurait mérité plus de détail pour faciliter une éventuelle reprise. C'est un point corrigé sur mes projets suivants.

Enfin, la conduite du changement aurait pu être plus structurée. J'ai impliqué les utilisateurs via les réunions hebdomadaires, mais une formation formelle pour les responsables de dépôt, même courte, aurait accéléré l'adoption. Cette leçon m'a appris qu'un produit techniquement excellent ne suffit pas : l'accompagnement humain fait partie intégrante de la réussite d'un projet.
