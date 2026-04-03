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

## Contexte du projet

HopLunch est une entreprise de restauration livrée en entreprise, présente dans plusieurs villes de France. Chaque jour, des dizaines de livreurs se présentent dans les dépôts logistiques pour commencer leur tournée de livraison. Le pointage de ces livreurs (heure d'arrivée et heure de départ) est une donnée critique pour le service RH, qui l'utilise pour calculer les heures travaillées, gérer les absences et établir les bulletins de paie.

Le système de pointeuse existant reposait sur un module intégré au Legacy (l'ancienne application monolithique de HopLunch). Ce module était obsolète, peu fiable et source d'erreurs fréquentes : les livreurs se trompaient de bouton, les données n'étaient pas toujours synchronisées avec le système central, et l'interface sur tablette était inadaptée (boutons trop petits, navigation confuse, pas de confirmation visuelle). Le service RH perdait du temps à vérifier et corriger manuellement les données de pointage chaque semaine.

L'objectif du projet était clair : concevoir et développer de zéro une nouvelle application de pointeuse, isolée du Legacy, moderne, sécurisée et intuitive. Le projet devait être mené en parallèle du système existant, avec une phase de transition durant laquelle les deux systèmes fonctionneraient simultanément, pour garantir une migration sans interruption de service. Ce projet est le premier que j'ai géré de bout en bout, en cumulant les rôles de chef de projet et de développeur.

## Objectifs

Le projet poursuivait plusieurs objectifs techniques et organisationnels clairement définis dès le cahier des charges :

- **Supprimer la dépendance au Legacy** en isolant la pointeuse dans une application front-end dédiée (NuxtJS) communiquant avec le back-end Symfony via une API REST. Cette architecture découplée permettait de faire évoluer la pointeuse indépendamment du reste du SI.

- **Créer une interface responsive, intuitive et rapide**, spécifiquement optimisée pour les tablettes installées dans les dépôts. Les boutons devaient être suffisamment grands pour éviter les erreurs de tap, les confirmations visuelles devaient être claires, et le temps de chargement minimal.

- **Sécuriser l'architecture avec JWT et HTTPS**, car les données de pointage sont sensibles (heures de travail, identité des livreurs). L'authentification par token JWT permet de s'assurer que seuls les dépôts autorisés accèdent à l'application.

- **Automatiser le déploiement et l'intégration continue** via GitHub Actions et des scripts shell, pour pouvoir déployer des mises à jour en production rapidement et sans risque.

- **Garantir la conformité RGPD** et la fiabilité des données pour le service RH, en assurant la traçabilité de chaque action de pointage.

## Gestion du projet

C'était la première fois que je gérais un projet dans son intégralité, et cette responsabilité a été aussi formatrice que le développement technique lui-même.

J'ai adopté une approche **Agile en sprints hebdomadaires** : chaque semaine, je livrais un incrément fonctionnel que je présentais lors d'une réunion de validation avec le client (service RH et direction). Le suivi des tâches était géré via **Asana**, où chaque user story était découpée en tâches techniques avec des estimations de temps.

La rédaction du **cahier des charges** a nécessité plusieurs itérations. J'ai commencé par un document initial basé sur les besoins exprimés par le service RH, puis je l'ai affiné au fil des réunions en intégrant les contraintes techniques (compatibilité avec les tablettes existantes, contraintes réseau des dépôts) et les retours des livreurs eux-mêmes.

La **phase de recette** a duré deux semaines durant lesquelles la nouvelle pointeuse et l'ancienne fonctionnaient en parallèle. Les responsables de dépôt vérifiaient que les données étaient identiques entre les deux systèmes. Cette approche prudente a permis de valider la fiabilité de la nouvelle application avant de couper définitivement l'ancien système.

Le respect des délais a été ma plus grande fierté sur ce projet : chaque sprint a été livré dans les temps prévus lors de mes estimations initiales, et la mise en production s'est faite à la date annoncée dans le cahier des charges.

## Fonctionnalités clés

- **Interface à deux onglets (Pointage / Dépointage)** : la séparation claire entre les deux actions élimine le risque de confusion. Chaque onglet affiche la liste des livreurs correspondants (ceux qui ne sont pas encore pointés sur l'onglet Pointage, ceux qui sont pointés sur l'onglet Dépointage), avec un affichage dynamique en temps réel.

- **Affichage dynamique et synchronisation en temps réel** : lorsqu'un livreur pointe, il disparaît instantanément de l'onglet Pointage et apparaît dans l'onglet Dépointage. Ce comportement est géré par le store Pinia qui maintient l'état global de l'application et se synchronise avec l'API.

- **Authentification sécurisée par mot de passe et tokens JWT** : chaque dépôt dispose d'un compte protégé par mot de passe. Après authentification, l'application stocke un token JWT qui est envoyé avec chaque requête API. Un système de refresh token transparent maintient la session active sans interruption.

- **Confirmation visuelle et gestion claire des erreurs** : après chaque pointage, un retour visuel immédiat (animation, changement de couleur) confirme l'action. En cas d'erreur (réseau, double pointage), un message explicite guide l'utilisateur.

- **Contrôles métiers robustes** : impossibilité de pointer deux fois le même livreur, vérification de la cohérence des horaires, logs de chaque action pour l'audit RH.

## Solutions techniques

L'architecture technique a été pensée pour la séparation des responsabilités et la maintenabilité à long terme :

- **Frontend NuxtJS 3 avec TypeScript** : l'application front-end est construite avec NuxtJS en mode SPA (Single Page Application) pour des transitions fluides entre les pages. TypeScript assure la robustesse du code grâce au typage strict. Les composants Vue 3 utilisent la Composition API pour une logique claire et réutilisable.

- **Store Pinia pour la gestion d'état** : le state management centralise les données des livreurs, le statut de connexion et les informations de pointage. Les actions du store gèrent la communication avec l'API et la mise à jour réactive de l'interface.

- **Backend Symfony 6 avec API REST sécurisée** : l'API expose des endpoints pour l'authentification, la récupération des livreurs, le pointage et le dépointage. Chaque endpoint est sécurisé par un guard JWT personnalisé et des voters Symfony pour la gestion fine des autorisations.

- **TailwindCSS pour l'interface responsive** : la configuration Tailwind personnalisée intègre les couleurs de la charte HopLunch et des utilitaires spécifiques pour les tailles de boutons tactiles, garantissant une ergonomie optimale sur tablette.

- **Tests unitaires et fonctionnels** : PHPUnit pour les tests back-end (endpoints API, logique métier) et Playwright pour les tests end-to-end (parcours utilisateur complets sur navigateur).

- **Pipeline CI/CD GitHub Actions** : chaque push déclenche les tests automatisés, et chaque merge sur la branche principale déclenche le déploiement automatisé via des scripts shell personnalisés.

## Défis rencontrés

### Migration depuis le Legacy sans interruption de service

Le plus grand défi du projet était de remplacer un système existant utilisé quotidiennement sans perturber le fonctionnement des dépôts. J'ai mis en place une stratégie de migration en trois phases : développement et tests sur un environnement de staging, puis fonctionnement parallèle des deux systèmes pendant deux semaines avec comparaison des données, et enfin bascule définitive une fois la fiabilité validée. La phase de fonctionnement parallèle a été cruciale : elle a permis au service RH de constater que les données de la nouvelle pointeuse étaient identiques à celles de l'ancienne, ce qui a établi la confiance nécessaire pour couper l'ancien système.

### Sécurité et conformité RGPD

Les données de pointage contiennent des informations personnelles (identité des livreurs, heures de travail) soumises au RGPD. J'ai mis en place un chiffrement HTTPS systématique, une authentification JWT avec expiration et refresh token, un rate limiting sur les endpoints sensibles, et un système de logs complet pour la traçabilité des actions. Chaque choix de sécurité a été documenté et validé avec le service RH.

### Fiabilité et gestion des cas limites

La pointeuse étant utilisée dans des conditions réelles (connexion réseau parfois instable dans les dépôts, livreurs pressés qui tappent rapidement), j'ai dû gérer de nombreux cas limites : que se passe-t-il si le réseau coupe pendant un pointage ? Si deux livreurs pointent simultanément ? Si le token JWT expire pendant l'utilisation ? Chaque cas a été identifié, testé et géré avec des comportements explicites (retry automatique, messages d'erreur clairs, reconnexion transparente).

## Résultats obtenus

- **Application déployée avec succès** et totalement intégrée au système d'information HopLunch, remplaçant définitivement le module Legacy.
- **Zéro bug en production** après plus de 8 mois d'utilisation quotidienne par une centaine de livreurs, preuve de la fiabilité des tests exhaustifs effectués avant la mise en production.
- **Réduction drastique des erreurs de pointage** grâce à l'interface intuitive à deux onglets et aux confirmations visuelles.
- **Fiabilisation des données RH** : le service RH n'a plus besoin de vérifier et corriger manuellement les données de pointage chaque semaine.
- **Respect des délais** : le projet a été livré à la date prévue dans le cahier des charges, sans dépassement des estimations initiales.

## Lendemains du projet

Aujourd'hui, après plus de 8 mois en production, le projet de pointeuse est solidement ancré dans le système d'information de HopLunch. L'application est utilisée quotidiennement par une centaine de livreurs répartis sur plusieurs dépôts en France. Le service RH a confirmé que les données de pointage sont désormais fiables et ne nécessitent plus de vérification manuelle.

Le projet a également eu un impact positif sur la perception de la technologie au sein de l'entreprise. La direction a vu qu'il était possible de remplacer des modules Legacy par des applications modernes sans perturbation, ce qui a ouvert la voie à d'autres projets de modernisation du SI. La pointeuse est régulièrement citée en interne comme un exemple de projet bien mené.

Des évolutions mineures ont été déployées depuis la mise en production initiale (ajout de nouvelles villes, ajustements ergonomiques), ce qui est facilité par l'architecture découplée et le pipeline CI/CD mis en place.

## Autocritique

Ce projet est celui dont je suis le plus fier, à la fois pour la qualité technique du livrable et pour la réussite de la gestion de projet. C'était mon premier projet NuxtJS professionnel et mon premier projet géré de bout en bout, deux premières qui auraient pu être source de difficultés. Pourtant, le résultat est à la hauteur : zéro bug en production, respect des délais, satisfaction du client.

La clé du succès a été la rigueur dans les tests. J'ai testé systématiquement 100% des scénarios possibles avant la mise en production, y compris les cas limites (coupure réseau, double pointage, expiration JWT). Cette discipline de test, que j'avais appris à valoriser après mes erreurs sur le projet Ile aux Copains, a directement porté ses fruits ici.

Si je devais refaire ce projet, je commencerais par mettre en place les tests end-to-end Playwright dès le premier sprint, plutôt que de les ajouter en fin de développement. Cela m'aurait fait gagner du temps sur la phase de recette et aurait détecté plus tôt certains comportements inattendus de l'interface.

Mon apprentissage le plus précieux : la gestion de projet est une compétence à part entière qui ne s'improvise pas. Planifier, estimer, communiquer, arbitrer les priorités, tout cela demande autant de rigueur que le code lui-même. J'ai hâte de gérer d'autres projets en parallèle de leur développement.
