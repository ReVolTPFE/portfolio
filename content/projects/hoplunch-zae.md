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

Avant de présenter ce projet, je vais commencer par introduire l'entreprise concernée par celui-ci. HopLunch est une société dont le but est de livrer les repas de midi aux entreprises, via des restaurants locaux.
<br>Le site internet de HopLunch permet de commander son plat du midi parmi une sélection de restaurants partenaires à moins de 20km de distance. Dans chaque ville où HopLunch est implantée, il y a un entrepôt avec des livreurs qui récupèrent les plats des restaurants le matin, et les livrent à midi.

Ce projet contrairement aux autres que j'ai présenté dans ce portfolio, n'est pas parti de zéro, mais est une refonte complète d'un système existant.
<br>Ce système est une interface de gestion des Zones d'Activités Économiques (ZAE) au sein de HopLunch, zones qui définissent les entreprises livrables.

Cette refonte permet aujourd'hui aux managers des différentes villes de gérer l'intégralité des ZAE livrées, sans aucune intervention technique.

Un manager peut créer une ZAE en définissant un polygone géographique (WKT/GeoJSON). 
<br>Il peut aussi visualiser ce périmètre sur une carte Google Maps et y associer automatiquement les villes concernées. 
<br>Enfin, il est possible d'importer en un clic toutes les entreprises situées dans la zone via l'API Sirene de l'Insee. 
<br>Le traitement des imports massifs s'effectue de manière asynchrone avec Symfony Messenger, et des commandes CRON assurent la synchronisation quotidienne des données.

Ce projet est certainement le plus intéressant sur lequel j'ai eu l'occasion de travailler, notamment via la diversité des technologies que j'ai utilisées (données géospatiales MySQL, conversion Lambert93/WGS84, API gouvernementale, traitement asynchrone, personnalisation EasyAdmin).

## Objectifs

- **Remplacer l'ancien système d'imports de ZAE et d'entreprises via Excel** par un flux 100% automatisé intégré au back-office. Les managers de ville doivent pouvoir créer une ZAE, importer les entreprises et valider le tout en quelques secondes, sans aucune compétence technique.

- **Permettre la création de ZAE via des polygones géographiques** directement dans le back-office, avec visualisation sur une carte interactive Google Maps. Chaque ZAE définit le périmètre qui rend une entreprise éligible à la livraison.

- **Intégrer l'API Sirene de l'Insee** pour récupérer automatiquement toutes les entreprises situées dans le périmètre d'une ZAE, en appliquant des filtres avancés (codes APE, statut et ouverture d'une entreprise, validation de l'adresse GPS, vérification de l'activité).

- **Mettre en place un système de traitement asynchrone** pour les imports massifs. Une ZAE peut contenir des centaines voire des milliers d'entreprises, et il ne faut pas bloquer le back-office pendant le traitement.

- **Automatiser la maintenance des données** via des commandes Symfony exécutées en CRON. Cela concerne la purge des entreprises fermées, la mise à jour des adresses, la synchronisation régulière avec l'API Sirene.

- **Garantir la fiabilité des données géographiques** en ajoutant des mécanismes de validation croisée entre les coordonnées fournies par l'API Sirene et le périmètre réel des ZAE.

- **Ajouter des données statistiques pour la partie commerciale**. Les managers font la promotion de HopLunch dans les ZAE livrées, et connaître des données comme le taux de pénétration d'une zone et même à l'échelle d'une entreprise, aide à mieux cibler l'aspect commercial et de partenariat.

## Contexte

Avant ce projet, le processus de gestion des ZAE reposait sur un système propice aux erreurs. Les managers de ville identifiaient les zones de livraison potentielles, puis transmettaient les informations aux développeurs sous forme de fichiers Excel. Les développeurs inséraient manuellement les données en base, recherchaient les entreprises éligibles une par une, et vérifiaient les adresses. Ce processus prenait **plusieurs heures pour une seule ZAE** avec un risque élevé d'erreurs : doublons, adresses invalides, entreprises fermées ou déménagées.

Le back-office existant, construit sur Symfony 6, ne proposait aucun outil avancé pour la gestion des ZAE. Il n'y avait qu'une simple carte permettant d'afficher ces zones.
<br>Mais les managers avaient besoin de filtres sur cette carte, d'un lien direct avec les entreprises d'une zone, et les statistiques liées. HopLunch était d'ailleurs dans une phase de croissance, et l'ouverture de nouvelles villes, rendaient l'ancien processus insupportable. Chaque nouvelle ville signifiait des dizaines de ZAE à créer et des centaines d'entreprises à intégrer manuellement.

### Acteurs et interactions

Ce projet a impliqué plusieurs acteurs :
- Le lead technique interne, qui supervisait les choix d'architecture et validait les orientations techniques
- Les responsables logistiques et managers de ville, utilisateurs finaux qui exprimaient les besoins métier et testaient les livrables
- Moi-même, développeur du projet de refonte

Notre organisation était constituée d'échanges hebdomadaires avec le lead technique. Ils nous permettaient d'arbitrer certains choix techniques, et les managers de ville étaient impliqués pour valider les réponses à leurs besoins.

## Enjeux

Le premier enjeu était **opérationnel**. L'ancien processus était un vrai goulot d'étranglement pour l'aspect commercial. Chaque ouverture de ville était ralentie parce que les développeurs devaient insérer les données en base de donneés. Il fallait rendre les managers autonomes pour accélérer le rythme d'expansion.

Le deuxième enjeu était **technique**. Le système devait manipuler des données géospatiales complexes qui nécessitaient des conversions :
- Les polygones étaient ajoutés en WKT ou GeoJSON au choix.
- Les ZAE sont parfois composées de plusieurs polygones, ce qui compléxifie les systèmes vérifiant l'éligibilité à la livraison.
- Les données Google Maps sont en WGS84 (unité géographique exprimée en degrés), les données de l'API de l'Insee, sont en Lambert93 (unité géographique exprimée en mètres). J'ai donc dû créer un algorithme de conversion précis au mètre près.

Le troisième enjeu était lié à la **performance**. Un import peut concerner des centaines voire des milliers d'entreprises. Il y avait d'ailleurs un rate limiting strict côté API Sirene. Le système devait traiter ces volumes sans dégrader l'expérience utilisateur du back-office.

Pour finir, il y avait un enjeu de **maintenabilité**. Les données d'entreprises évoluent en permanence (fermetures, déménagements, créations), il fallait donc ajouter des mécanismes de synchronisation automatique.

## Risques

### Risques techniques

Le risque principal concernait la **dépendance à l'API Sirene**. Cette API gouvernementale impose des quotas stricts. Pour l'atténuer, j'ai implémenté un service PHP avec retry intelligent pour ne jamais être bloqué par le quota tout en étant le plus performant possible.

Un deuxième risque était la **corruption silencieuse des données**. Les commandes CRON tournent sans supervision humaine et dans mon cas, la nuit. Un bug peut donc altérer des centaines d'enregistrements avant d'être détecté. J'ai donc mis en place des logs structurés et des tests automatisés garantissant la fiabilité du système.

Le troisième risque portait sur la **validation géographique**. Un algorithme trop strict exclue des entreprises légitimes (faux négatifs), tandis qu'un algorithme trop permissif intègre des entreprises hors zone (faux positifs). J'ai mis en place un système de validation permettant une zone de tolérance autour d'un polygone de ZAE (250m en moyenne). Cela permet d'éviter que 2 entreprises côtes à côtes soient livrable pour l'une, et non livrable pour l'autre.

### Risques projet

Un risque majeur, qui s'est matérialisé, concernait l'**estimation du périmètre de la refonte**. Les interactions entre modules étaient difficiles à évaluer en amont, ce qui a d'abord conduit à une mini-refonte incomplète. Mais elle créait d'autres problèmes, donc nous avons opté pour une refonte intégrale qui est celle décrite dans ce projet.

## Les étapes du projet

### Phase 1 : Analyse et conception

J'ai d'abord audité l'ancien système pour comprendre les flux de données et les cas d'usage des managers. J'ai d'ailleurs pu me rendre dans un entrepôt et échanger avec les responsables logistiques pour documenter leurs besoins.
<br>J'ai ensuite conçu l'architecture technique comprenant le modèle de données géospatiales, le schéma d'intégration avec l'API Sirene, et la stratégie de traitement asynchrone.

### Phase 2 : Infrastructure et fondations techniques

Pour cette refonte, il a fallu améliorer la structure de base de données. Cela concernait la gestion des filtres, la pré-importation d'entreprises, et l'ajout de données statistiques par exemple. J'ai ensuite implémenté l'algorithme de conversion Lambert93/WGS84 en PHP via un package composer nommé "php-coord" sur lequel je me suis formé. 

Avant de développer le service PHP dédié à l'API Sirene v3.11, je me suis plongé dans l'énorme documentation de l'API. Ils ont développé une gestion de filtrage en implémentant leur propre langage ressemblant à SQL, mais directement dans les requêtes API. Ma concentration était focalisée sur l'authentification, la pagination avec un système de pointeurs, et tout le filtrage disponible. J'ai ensuite pu développer un service générique construisant dynamiquement les requêtes API en fonction des besoins.

### Phase 3 : Module de gestion des ZAE

Pour la gestion des ZAE, j'ai d'abord travaillé sur la carte Google Maps existante et lisant ces zones. 
- J'y ai ajouté un champ autocomplete permettant de rechercher des adresses sur la carte en restant sur le site.
- Avec JavaScript j'ai aussi ajouté les différents filtres dynamiques sur la carte (zones ouvertes, fermées, importées mais pas utilisées...).
- Ensuite, mon patron m'a donné le détail des statistiques voulues pour chaque zone. Cela concernait principalement le taux de pénétration et l'activité de commandes par zone et entreprise. Il y avait aussi une comparaison du nombre de clients en fonction du nombre de salariés réels par zone et entreprise.
- Enfin, j'ai terminé par la possibilité d'ajouter des villes livrables et des ZAE via le back-office et un simple formulaire. Avant, il fallait que les développeurs importent cela, mais aujourd'hui nous gagnons tous du temps grâce à cette fonctionnalité.

### Phase 4 : Module d'import des entreprises

Le flux d'import que j'ai codé est le suivant :
- Sélection d'une ZAE et interrogation de l'API Sirene avec filtres avancés (codes APE, coordonnées GPS dans le polygone, entreprises actives...).
- L'affichage des entreprises dites "candidates" se fait ensuite dans un tableau interactif, via un stockage spécifique en base de données.
- Le manager peut alors lui-même filtrer certaines entreprises dont il ne voudrait pas.
- Enfin, il sélectionne le reste en un clic et les mets en file d'attente pour importation. Le comportement back-end est optimisé pour une insertion en batch (en lots).

C'est tout ce processus qui permet aujourd'hui d'éviter les erreurs de saisie dans les fichiers Excel.
<br>**Avant**, nous étions en capacité d'ouvrir une zone en **plusieurs jours.**
<br>**Aujourd'hui**, une zone est ouverte et livrable en **quelques minutes** et sans intervention de développeurs.

### Phase 5 : Traitement asynchrone

Les entreprises importées sont d'abord stockées dans une table temporaire. Puis, elles sont converties en entreprises réelles dans la base de données via Symfony Messenger.
Ce système permet aujourd'hui de ne pas bloquer le back-office à l'importation, et d'effectuer ces tâches dès qu'un worker messenger est disponible.
<br>L'optimisation des ressources est maximale, car nous avons certains moments dans la journée, où des commandes CRON utilisent beaucoup de ressources (ex: génération des tournées de livraison optimisées).
<br>C'est pourquoi un système de priorité est en place, gérant automatiquement toutes nos tâches asynchrones.

### Phase 6 : Automatisation CRON

Pour garantir la mise à jour des données des zones actives, j'ai développé des commandes Symfony de synchronisation quotidienne : vérification d'activité, mise à jour des adresses, purge des établissements fermés, nettoyage des données temporaires. Chacune de ces commandes est configurée pour générer des logs détaillés.

### Phase 7 : Déploiement et formation

Avant le déploiement de cette refonte qui a ajouté beaucoup de fonctionnalités, j'ai pu faire un webinaire avec les managers de ville. Je leur ai expliqué les nouvelles procédures, qui simplifient grandement leur travail, et qui les rend totalement autonomes.

Vu l'ampleur du projet et des différents composants, en plus de la documentation et des tests automatiques dans le code, j'ai ajouté une documentation fonctionnelle détaillée.

Afin de répondre aux questions des managers, j'ai aussi ajouté une FAQ (Foire Aux Questions) directement dans l'interface de back-office. Elle permet notamment de répondre à toutes les questions sur les processus automatisés derrière leurs actions.

## Résultats pour moi

Ce projet a duré plusieurs mois au total. J'ai pu voir les différences entre un projet démarré de zéro, et une refonte qui nécessite des compromis. L'architecture déjà en place m'a obligé à penser certaines fonctionnalités différemment.
<br>J'ai aussi acquis une expérience solide en données géospatiales : manipulation de polygones WKT/GeoJSON, types et fonctions MySQL spatiaux, conversion Lambert93/WGS84. C'est un plus, qui élargit mes domaines de compétences.

J'ai consolidé ma maîtrise de Symfony Messenger et du traitement asynchrone en production. L'intégration d'une API gouvernementale (API Sirene v3.11) avec ses contraintes (pagination en pointeurs, rate limiting, données incohérentes) m'a appris à concevoir des services robustes et génériques.

Sur le plan méthodologique, notre erreur de la refonte partielle a été une leçon précieuse pour moi. Il faut toujours comprendre l'étendue réelle d'un projet avant de coder.

## Résultats pour l'entreprise

- **Réduction du temps d'intégration d'une ZAE de plusieurs jours à quelques minutes**. Le processus manuel a été transformé en une opération semi-automatique accessible à tous les managers de ville.

- **Autonomie totale des managers**. Ils peuvent maintenant créer, modifier et enrichir leurs ZAE sans intervention technique. Cela permet de libérer les développeurs pour qu'ils travaillent sur des tâches à plus forte valeur ajoutée.

- **Accélération du déploiement commercial**. L'ouverture d'une nouvelle ville ne nécessite plus de mobiliser les développeurs pour la gestion ZAE/entreprises. Le délai entre la décision d'ouvrir une ville et la mise en service a été réduit.

- **Notre base d'entreprises est enrichie et actualisée** grâce à la synchronisation automatique avec l'API Sirene. Notre système élimine mainteant les doublons et les données obsolètes.

- **Suppression complète de la dépendance aux fichiers Excel** et aux échanges manuels. Le processus est désormais traçable, et l'automatisation partielle permet de réduire drastiquement les erreurs de saisie.

## Lendemains du projet

### Dans un futur immédiat
Ayant par le passé collaboré directement avec les responsables logistiques pour la gestion des ZAE, j'ai pu constater concrètement le temps gagné après le déploiement.
<br>Les managers sont totalement autonomes sur des tâches qui mobilisaient auparavant plusieurs personnes pendant plusieurs jours.
<br>Le remplissage d'un court formulaire et le dessin d'un polygone est bien plus rapide et efficace que les anciens fichiers Excel et insertions manuelles.

### À distance
Le système est totalement stable en production et les commandes CRON fonctionnent sans incident. Notre base d'entreprises est mise à jour automatiquement ce qui nous fait gagner beaucoup de temps pour la partie commerciale notamment. Des évolutions ont été ajoutées : nouveaux filtres de recherche et amélioration de l'interface cartographique.

### Aujourd'hui
L'outil est devenu central dans le workflow opérationnel de HopLunch. La fiabilité des statistiques a permis l'analyse géographique des zones à fort potentiel commercial.

**Après 8 mois en production, plus de 60 ZAE ont été créées** de manière autonome, ce qui constitue une grande victoire pour l'entreprise et pour moi.

## Autocritique

Avec mon chef de projet, nous avons fait l'erreur de démarrer une refonte partielle temporaire avant de réaliser qu'une refonte complète s'imposait. Nous pensions pouvoir moderniser le système par étapes, en conservant une partie de l'existant. Cette refonte partielle n'a servi qu'un mois avant d'être remplacée par le système définitif.

Cette expérience m'a appris l'importance d'une phase d'analyse approfondie avant de commencer à coder, même sous pression. Prendre quelques jours supplémentaires pour cartographier l'existant nous aurait évité un mois de travail sur une solution intermédiaire jetable. C'est une leçon que j'applique désormais : face à une refonte, je documente l'existant et ses dépendances avant de proposer une architecture cible.

Malgré ces points d'amélioration, le résultat final est très satisfaisant. Le système fait gagner du temps à tout le monde dans l'entreprise. J'ai adoré travailler sur les aspects techniques comme les conversions de coordonnées géographiques, et le traitement asynchrone avec Messenger.
