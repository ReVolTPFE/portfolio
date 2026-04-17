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

## Présentation du projet

L'Ile aux Copains est une structure qui sert à l'organisation d'activités périscolaires, d'animations pour enfants/adolescents et de voyages scolaires durant les vacances. 

L'association propose des services très variés :
- périscolaire les jours d'école
- ateliers créatifs et sportifs le mercredi
- centre de loisirs type centre aéré pendant les vacances scolaires
- voyages organisés pour les enfants/adolescents
- soirées pour les adolescents

Le projet avait pour notre entreprise un double objectif. Tout d'abord satisfaire notre client en lui proposant l'application dont il a besoin. Et enfin, développer un projet qui soit le plus générique possible, afin de pouvoir le commercialiser pour d'autres périscolaires / centres de loisirs partout en France.

L'Ile aux Copains est donc un SaaS permettant de centraliser l'ensemble des processus de gestion périscolaire/loisirs. Ce site web est composé de 3 parties principales :
1. La première partie est un **back-office pour les administrateurs** (tableau de bord, création d'événements avec paramétrage avancé, gestion des sessions et des places).
2. Il y a aussi un **tableau de bord pour les parents et adolescents** (saisie des informations enfants, choix des activités, paiement Stripe, confirmation automatique).
3. La dernière partie est une **interface mobile-first pour les animateurs** (check-in/check-out des enfants avec notification aux parents).

Au niveau technique, le centre du projet a été le **générateur de formulaires entièrement personnalisable**, comparable à un plugin ACF (Advanced Custom Fields) pour WordPress mais codé pour fonctionner sur Symfony 6.
<br>Grâce à ça, un administrateur peut créer visuellement des formulaires avec des champs dynamiques et des conditions d'affichage en cascade, le tout sans aucun rechargement de page.

## Objectifs

- **Dématérialiser le parcours d'inscription** : Le but est de remplacer les inscriptions papier pour chaque événement par un formulaire d'inscription unique pour un enfant. En cas de nécessité, lorsqu'un parent choisit une activité, des informations spécifiques peuvent être demandées.

- **Offrir un outil de création d'événements flexible** : Il faut permettre aux administrateurs de créer n'importe quel type d'événement (sortie d'une journée, atelier hebdomadaire, séjour de vacances). Le système doit s'adapter dynamiquement aux spécificités de chaque format grâce au générateur de formulaires.

- **Garantir la conformité RGPD pour les données de mineurs** : Ici, le sujet est sensible, il faut donc sécuriser les données, notamment via chiffrement en base de données et une gestion très précise des accès.

- **Automatiser la génération de plannings** : Les différents types d'événements et leurs dates configurées doivent permettre aux parents/adolescents de voir un calendrier détaillé.

- **Simplifier la gestion des présences des enfants/adolescents** : Cela passe par un outil mobile de check-in/check-out en temps réel pour les animateurs, avec une notification instantanée aux parents/responsables légaux.

## Contexte

Jusqu'ici, l'Ile aux Copains a toujours travaillé de manière manuelle. Cela comprend des inscriptions sur papier, un suivi des présences sur papier lui aussi, et une communication interne et externe par email uniquement.

En France, la CNIL impose des réglementations strictes pour protéger les données personnelles des mineurs. Les informations de santé (allergies, traitements, régimes alimentaires) doivent absolument être protégées en ligne, et nous devons le prendre au sérieux.

De mon côté, j'ai commencé à travailler sur le projet après la validation du cahier des charges. Je suis intervenu pendant 2 mois et je suis ensuite passé sur un projet jugé plus urgent.

### Acteurs et interactions

Ce projet a mobilisé plusieurs acteurs :
- Le client, représentant de l'association Ile aux Copains, qui exprimait les besoins métier et validait les livrables
- Notre cheffe de projet en interne, en charge du cadrage fonctionnel et de la priorisation des user stories
- Un designer externe qui a réalisé les maquettes
- Un développeur front-end qui s'est occupé des interfaces parents/adolescents et de la vitrine du site.
- Moi-même, développeur back-end sur une partie du projet et front-end sur le back-office administrateur.

## Enjeux

Le premier enjeu majeur était la **conception du générateur de formulaires dynamiques**. La difficulté principale concernait la gestion des conditions imbriquées : par exemple, un champ "Détail allergie" n'apparaît que si "Allergie" est coché. Un autre exemple : un champ "Traitement en cours" n'apparaît que si "Allergie alimentaire" est sélectionné dans la liste déroulante.
<br>Ce système de conditions en cascade m'a demandé énormément de temps, car tout devait être le plus simple et dynamique possible pour un administrateur, tout en garantissant la robustesse du code et des données.

Le deuxième enjeu portait sur la **protection des données sensibles**. J'ai utilisé un chiffrement AES-256 sur toutes les colonnes contenant des informations médicales notamment, avec des clés stockées séparément dans les variables d'environnement. 
<br>Les accès aux données sensibles sont tous tracés et horodatés. Les utilisateurs disposant du rôle approprié uniquement peuvent consulter les informations médicales.

Le troisième enjeu concernait la **modélisation des tuteurs légaux**. Chaque enfant pouvait avoir plusieurs responsables avec des rôles différents (parent principal, parent secondaire, tuteur légal, personne autorisée à récupérer l'enfant), avec des dates de validité et des niveaux d'autorisation spécifiques.

Enfin, l'**intégration Stripe** imposait de gérer les paiements partiels, remboursements, avoirs et relances automatiques, le tout traçable et conforme aux obligations comptables de l'association.

## Risques

### Risques techniques

Le risque principal était lié à la **sensibilité des données**. Une faille exposant des données de santé de mineurs aurait des conséquences juridiques et réputationnelles irréparables. C'est pourquoi jusqu'ici j'ai beaucoup insisté sur cet aspect.

Le deuxième risque technique concernait la **maintenabilité du code JavaScript** du générateur de formulaires. La gestion d'état complexe (drag & drop, conditions en cascade) rendait ce code difficile à maintenir sans tests automatisés. Ce risque s'est matérialisé en partie, comme je le détaille dans la section Autocritique plus bas.

### Risques projet

Le **dépassement du périmètre fonctionnel** était un risque majeur. Le générateur de formulaires pouvait grandir de manière quasi illimité : chaque nouveau cas d'usage pouvait entraîner des évolutions significatives. Grâce au cadrage strict du cahier des charges, cette fonctionnalité n'a pas absorbé tout le budget/temps alloué au projet.

Un dernier risque était le **non-achèvement**. Le projet était ambitieux pour les ressources disponibles (pour donner une idée, le cahier des charges avait plus de 200 pages). Comme expliqué plus haut, j'ai arrêté le travail sur ce projet en plein milieu, alors que des fonctionnalités étaient prêtes, et d'autres pas du tout. Je vais détailler cela dans la section Lendemains du projet.

## Les étapes du projet

### Phase 1 : Analyse fonctionnelle

Le projet a débuté avec notre cheffe de projet qui devait comprendre les processus métier de l'Ile aux Copains. Cette phase a produit un cahier des charges très détaillé (plus de 200 pages), et des user stories priorisées. Les maquettes ont été réalisées par un designer externe.

### Phase 2 : Conception du schéma de base de données et de l'architecture du générateur de formulaire

C'était la première fois que je travaillais sur un projet ayant tellement de fonctionnalités. Etant le seul développeur back-end, je devais avoir une vision globale du projet, des interactions entre fonctionnalités et surtout du schéma de base de données.

J'ai donc passé une semaine entière en salle de réunion devant un grand tableau blanc, à dessiner ce schéma de base de données et à réitérer à chaque idée de cas spécifique bloquant.

Ne connaissant pas les Enum Symfony à l'époque (liste fermée de valeurs pour un champ), j'ai créé des tables pour des données ne le nécessitant pas. Exemple : ChildLink (père, mère, tuteur légal etc), FamilyType (famille monoparentale, recomposée etc). Je suis donc rapidement arrivé à plus de 50 tables en base de données.

J'ai aussi travaillé durant cette semaine, sur la réflexion des formulaires générés dynamiquement. J'ai opté pour une sauvegarde des configurations de formulaires dans un objet JSON. Cela permettait de facilement modifier la structure de génération sans modifier toute la structure de la base de données.

### Phase 3 : Développement du socle

J'ai commencé par développer le socle de base de l'application. Cela concernait l'authentification et la gestion des rôles, la visualisation/gestion/validation des parents et enfants en back-office. L'intégration des maquettes s'est faite en parallèle par un développeur front-end avec un point d'attention sur le responsive mobile.

J'ai aussi pu travailler sur le chiffrement des données sensibles et les accès temporaires et sécurisés des fichiers sensibles.

### Phase 4 : Développement du générateur de formulaire

Dès le départ, j'ai su que ce serait un gros morceau, mais je ne m'attendais à autant de difficultés.
<br>La première frixion était de devoir garantir une interactivité absolue du générateur via javascript (drag & drop, affichages conditionnels). 
<br>Globalement, je rendais le générateur fonctionnel pour un type de champ à la fois. Les premiers types comme les nombres, textes simples, checkbox ont été facile à intégrer. 

Mais la vraie complexité est arrivée lorsque j'ai ajouté les champs tels que :
- les listes (choix simple et choix multiple)
- les affichages conditionnels en fonction des valeurs des champs précédents
- les documents (limite de taille, de formats, filtre sur les noms de fichiers)
- les étapes intermédiaires de formulaires
- la validation de chaque champ et de chaque étape avant de pouvoir accéder à la suivante

J'ai finalement réussi à finaliser ce générateur de champs, au prix de beaucoup de temps perdu à tester manuellement les formulaires générés et les valeurs des champs en base de données.

### Phase 5 : Interruption et transmission

Le projet a finalement été interrompu car je devais aider sur un projet plus urgent. Jusqu'à mon départ de DGS Création, je n'ai pas eu l'occasion de revenir sur ce projet. Ce qui signifie que les parties concernant les réservations, le paiement, les rapports et l'interface des animateurs, ont probablement été codée par un autre développeur.

## Résultats pour moi

Ce projet m'a permis de progresser énormément techniquement. Tout d'abord via la réflexion sur l'architecture du site et de sa base de données, mais aussi via le générateur de formulaires qui avait un niveau de complexité inédit pour moi : 
- Gestion de l'état applicatif côté client en JavaScript vanilla
- Implémentation du code de résolution des conditions en cascade
- Synchronisation en back-end avec validation et persistance des structures JSON flexibles

J'ai aussi acquis une grande expertise concernant la sécurité des données et la conformité RGPD.
<br>Les contraintes pour les données de mineurs m'ont fait étudier les recommandations de la CNIL, les mécanismes de chiffrement AES-256 au niveau des colonnes MySQL, et les bonnes pratiques de gestion des clés. 
<br>Ces connaissances sont utiles pour n'importe quel projet ayant une sécurité accrue, et je les utilise aujourd'hui dès que nécessaire.

Enfin, ce projet m'a fait prendre conscience de l'importance capitale des tests automatisés. Je n'en avais jamais écrit à l'époque, mais si c'était à refaire, je commencerais par là.

## Résultats pour l'entreprise

Lors de mon départ, le projet n'était pas terminé. Les fonctionnalités que j'avais développées (générateur de formulaires, système d'inscription, gestion des responsabilités parentales, chiffrement des données) étaient opérationnelles. 
<br>J'ai toujours pris soin de documenter le code, pour moi-même et pour les autres, ce qui a certainement facilité la reprise.

Le générateur de formulaires quant à lui a été reconnu comme une brique réutilisable pour d'autres projets de l'agence déjà avant mon départ.

## Lendemains du projet

### Dans un futur immédiat
Le projet n'était pas terminé, mais avait déjà toute la base et le générateur de formulaire fonctionnels. Je dirais que le plus gros du travail, en dehors peut-être du système de facturation, était fait, et qu'en quelques semaines supplémentaires, le projet a certainement été terminé.

### À distance
Je n'ai aucune certitude concernant l'accomplissement du projet, et c'est un aspect frustrant je dirai, car je me suis heurté pour la première à un travail que je n'ai pas pu terminer.

### Aujourd'hui
Je n'ai aucune visibilité ni information sur l'état actuel du projet. Il est possible qu'il ait été finalisé, ou même abandonné. Le site n'est pas disponible publiquement, ce qui me laisse penser qu'il a été mis en pause depuis plus d'un an, ou annulé.

## Autocritique

En une phrase, ma plus grosse leçon sur ce projet : **"Fais des tests automatisés !"**
<br>J'ai perdu des heures à tester manuellement les formulaires dynamiques avec toutes les combinaisons de conditions et de cas familiaux complexes. 
<br>Chaque modification du générateur nécessitait de repasser manuellement l'ensemble des scénarios : formulaire simple, conditions imbriquées, cas de parents divorcés, tuteurs multiples...
<br>Les tests manuels sont chronophages et incomplets : des régressions passaient parfois entre les mailles du filet et je devais les corriger sans casser autre chose.

Aujourd'hui, je teste systématiquement le code de manière automatisée. Cela a d'ailleurs contribué au succès d'un autre de mes projets : le développement d'une pointeuse chez HopLunch, où j'ai testé en EndToEnd 100% des actions sur l'outil. C'est ce qui a garanti zéro bug en production.

L'autre point d'autocritique concerne la **sous-estimation de la complexité du générateur de formulaires**. 
<br>Ce qui semble simple en surface ("l'utilisateur crée un formulaire avec des champs"), cache parfois une réelle complexité technique.
<br>C'est pour cela que j'ai pris l'habitude de toujours découper et estimer mes tâches avant de me lancer dans le code.
