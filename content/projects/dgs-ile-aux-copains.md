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

Ile aux Copains est une structure associative dédiée à l'organisation d'activités périscolaires, d'animations pour enfants et de voyages scolaires durant les vacances. L'association propose un large éventail de prestations : accueil périscolaire, ateliers créatifs et sportifs le mercredi, centres de loisirs pendant les vacances scolaires, et séjours organisés de plusieurs jours.

Le projet consistait à développer un portail web complet permettant de centraliser et de dématérialiser l'ensemble des processus de gestion au sein d'une plateforme unique. Concrètement, la plateforme devait offrir un **back-office pour les administrateurs** (tableau de bord, création d'événements avec paramétrage avancé, gestion des sessions et des places), un **parcours d'inscription en ligne pour les parents** (saisie des informations enfants, choix des activités, paiement Stripe, confirmation automatique), et une **interface mobile-first pour les animateurs** (check-in/check-out des enfants avec notification aux parents).

La pièce maîtresse technique était un **générateur de formulaires d'inscription entièrement personnalisable**, comparable à un plugin ACF (Advanced Custom Fields) pour WordPress mais intégré nativement dans Symfony 6. L'administrateur pouvait créer visuellement des formulaires avec des champs dynamiques et des conditions d'affichage en cascade, le tout sans rechargement de page.

L'architecture reposait sur **Symfony 6 en MVC**, organisée en bundles fonctionnels. L'interface était construite avec **Twig, SASS et Bootstrap**. Le paiement en ligne était géré par **Stripe**, et un système d'export PDF/Excel permettait la génération automatique de plannings et de factures.

## Objectifs

- **Dématérialiser intégralement le parcours d'inscription** : remplacer les inscriptions papier par un formulaire en ligne fluide et accessible sur mobile, incluant la saisie des informations de l'enfant, le choix des activités, le paiement via Stripe et la confirmation automatique par email.

- **Offrir un outil de création d'événements flexible** : permettre aux administrateurs de créer n'importe quel type d'événement (sortie d'une journée, atelier hebdomadaire, séjour de vacances). Le système devait s'adapter dynamiquement aux spécificités de chaque format grâce au générateur de formulaires.

- **Garantir la conformité RGPD pour les données de mineurs** : chiffrement des colonnes sensibles en base de données et gestion fine des accès, en respectant les recommandations de la CNIL.

- **Automatiser la génération de plannings et de factures** : production automatique à partir des inscriptions confirmées, avec export PDF et Excel.

- **Simplifier la gestion des présences sur le terrain** : outil mobile de check-in/check-out en temps réel pour les animateurs, avec notification instantanée vers les parents.

## Contexte

Avant notre intervention, la gestion des activités d'Ile aux Copains reposait sur des processus entièrement manuels : inscriptions papier, suivi des présences sur tableur Excel, facturation manuelle et communication par email ou téléphone. Les erreurs de saisie étaient fréquentes, les relances de paiement chronophages, et la coordination entre les animateurs et l'administration se faisait de manière informelle.

Le secteur périscolaire en France est soumis à des réglementations strictes en matière de protection des données personnelles des mineurs. Les informations de santé (allergies, traitements, régimes alimentaires), les documents administratifs (autorisations parentales, fiches sanitaires) et les données financières doivent être traitées avec un niveau de sécurité élevé. La CNIL impose des mesures techniques et organisationnelles renforcées pour ces catégories de données, en particulier lorsqu'elles concernent des enfants.

Par ailleurs, les structures familiales contemporaines ajoutent une complexité significative. Parents divorcés avec garde alternée, familles recomposées, tuteurs légaux, tiers autorisés : autant de cas que le système devait prendre en charge nativement. Le projet s'inscrivait dans le cadre d'une mission chez DGS Création, le client souhaitant une solution sur mesure plutôt qu'un logiciel générique.

### Acteurs et interactions

Ce projet a mobilisé plusieurs acteurs :
- Le client, représentant de l'association Ile aux Copains, qui exprimait les besoins métier et validait les livrables
- Notre chef de projet en interne, en charge du cadrage fonctionnel et de la priorisation des user stories
- Un designer externe qui a réalisé les maquettes, avec qui j'échangeais pour valider la faisabilité technique
- Moi-même, développeur sur le projet

Les échanges avec le chef de projet étaient quotidiens, et les présentations au client se faisaient à intervalles réguliers pour valider chaque incrément fonctionnel.

## Enjeux

Le premier enjeu majeur était la **conception du générateur de formulaires dynamiques**. La difficulté résidait dans la gestion des conditions imbriquées : par exemple, un champ "Détail allergie" n'apparaît que si "Allergie" est coché, et un champ "Traitement en cours" n'apparaît que si "Allergie alimentaire" est sélectionné dans la liste déroulante. Ce système de conditions en cascade nécessitait un algorithme de résolution de dépendances côté JavaScript, tandis que côté back-end, la structure des formulaires devait être stockée en format JSON tout en restant interrogeable et validable par Symfony. L'enjeu était de livrer un outil utilisable par des non-techniciens sans sacrifier la robustesse technique.

Le deuxième enjeu portait sur la **protection des données sensibles**. Un chiffrement AES-256 devait être appliqué sur toutes les colonnes contenant des informations médicales, avec des clés stockées séparément dans les variables d'environnement. Les accès aux données sensibles devaient être tracés et horodatés, et seuls les utilisateurs disposant du rôle approprié pouvaient consulter les informations médicales. Cette contrainte devait structurer la conception du modèle de données dès le départ.

Le troisième enjeu concernait la **modélisation des responsabilités familiales**. Chaque enfant pouvait avoir plusieurs responsables avec des rôles différents (parent principal, parent secondaire, tuteur légal, personne autorisée à récupérer l'enfant), avec des dates de validité et des niveaux d'autorisation spécifiques. Le modèle relationnel devait gérer ces cas grâce à des tables de liaison incluant des métadonnées.

Enfin, l'**intégration Stripe** imposait de gérer les paiements partiels, remboursements, avoirs et relances automatiques, le tout traçable et conforme aux obligations comptables de l'association.

## Risques

### Risques techniques

Le risque principal était lié à la **sensibilité des données**. Une faille exposant des données de santé de mineurs aurait eu des conséquences juridiques et réputationnelles graves. Ce risque justifiait l'investissement dans le chiffrement, la gestion fine des accès et la traçabilité.

Le deuxième risque technique concernait la **maintenabilité du code JavaScript** du générateur de formulaires. La gestion d'état complexe (drag & drop, conditions en cascade) rendait ce code difficile à maintenir sans tests automatisés. Ce risque s'est matérialisé en partie, comme je le détaille dans la section Autocritique.

### Risques projet

Le **dépassement du périmètre fonctionnel** représentait un risque majeur. Le générateur de formulaires avait un potentiel d'expansion quasi illimité : chaque nouveau cas d'usage pouvait entraîner des évolutions significatives. Sans cadrage strict, cette fonctionnalité seule pouvait absorber la totalité du budget.

Un quatrième risque, déterminant, était le **non-achèvement**. Le périmètre était ambitieux pour les ressources disponibles, et mon départ de l'entreprise avant la finalisation n'avait pas été suffisamment anticipé. La documentation et la qualité du code devaient permettre une reprise sereine par un autre développeur.

## Les étapes du projet

### Phase 1 : Analyse fonctionnelle

Le projet a débuté avec le chef de projet pour comprendre les processus métier d'Ile aux Copains. Cette phase a produit un cahier des charges détaillé, des user stories priorisées selon la valeur métier et la complexité technique. Les maquettes ont été réalisées par un designer externe, et j'ai participé aux allers-retours pour valider la faisabilité technique.

### Phase 2 : Conception du modèle de données et de l'architecture

J'ai intégré les contraintes RGPD directement dans le schéma MySQL en identifiant les colonnes nécessitant un chiffrement AES-256 et en mettant en place la séparation des clés dans les variables d'environnement. J'ai conçu le modèle relationnel des responsabilités familiales avec ses tables de liaison, ainsi que la structure JSON pour le stockage des configurations de formulaires. L'architecture Symfony 6 a été organisée en bundles fonctionnels.

### Phase 3 : Développement itératif

J'ai commencé par le socle applicatif (authentification, gestion des rôles), puis le module événements, le générateur de formulaires, le parcours d'inscription et le module Stripe. L'intégration des maquettes s'est faite en parallèle, avec une attention particulière au responsive mobile. Le générateur a mobilisé une part significative du temps, notamment le drag & drop en JavaScript vanilla et l'algorithme de résolution de dépendances.

### Phase 4 : Tests et validation en staging

Les fonctionnalités ont été testées fonctionnellement avec le chef de projet et présentées au client. L'export PDF/Excel des plannings et factures a été mis en place, avec configuration des tâches CRON pour les envois automatiques.

### Phase 5 : Interruption et transmission

Le projet a été interrompu lors de mon départ de DGS Création. Les fonctionnalités principales étaient opérationnelles en staging, mais certaines finitions et la mise en production restaient à réaliser. J'ai documenté le code et les choix d'architecture pour faciliter la reprise.

## Résultats pour moi

Ce projet a constitué une étape déterminante dans ma progression technique. Le générateur de formulaires m'a confronté à un niveau de complexité inédit : gérer un état applicatif côté client en JavaScript vanilla, implémenter un algorithme de résolution de dépendances pour des conditions en cascade, synchroniser cette logique avec un back-end Symfony qui valide et persiste des structures JSON flexibles. Ces défis m'ont fait monter en compétence significativement sur l'articulation front-end/back-end dans des contextes applicatifs avancés.

J'ai acquis une expertise concrète en sécurité des données et conformité RGPD. Les contraintes renforcées pour les données de mineurs m'ont poussé à étudier les recommandations de la CNIL, les mécanismes de chiffrement AES-256 au niveau des colonnes MySQL, et les bonnes pratiques de gestion des clés. Ces connaissances sont directement transférables et constituent un atout que je valorise dans mes missions actuelles.

La modélisation des responsabilités familiales m'a appris à concevoir des modèles relationnels souples, capables de s'adapter à des cas métier complexes. Cette capacité à anticiper les cas limites en phase de conception est une compétence que je mobilise désormais systématiquement.

Enfin, ce projet m'a fait prendre conscience de l'importance capitale des tests automatisés, une leçon dont l'impact sur ma pratique professionnelle est durable et mesurable.

## Résultats pour l'entreprise

Lors de mon départ, le projet n'était pas terminé. Les fonctionnalités que j'avais développées (générateur de formulaires, système d'inscription, gestion des responsabilités parentales, chiffrement des données, intégration Stripe, exports PDF/Excel) étaient opérationnelles et testées en staging. Le code était documenté et l'architecture structurée en bundles fonctionnels, facilitant la reprise.

Le projet a été confié à un autre développeur pour la finalisation. L'investissement technique sur le générateur de formulaires représentait un actif réutilisable pour d'autres projets de l'agence. De même, les mécanismes de chiffrement et de gestion des accès constituaient une base solide pour tout projet futur impliquant des données sensibles.

Pour le client, le travail réalisé posait les fondations d'un outil qui, une fois finalisé, devait transformer ses processus de gestion : suppression des inscriptions papier, automatisation de la facturation, traçabilité des présences et conformité RGPD native.

## Lendemains du projet

### Dans un futur immédiat
Le projet n'étant pas terminé avant mon départ, j'ai documenté le code et les choix d'architecture pour faciliter la reprise par un autre développeur. Les fonctionnalités principales étaient opérationnelles en staging.

### À distance
Cette incertitude est l'un des aspects frustrants du travail en agence : on investit du temps et de la réflexion dans un produit dont on ne connaîtra peut-être jamais le destin. C'est une réalité du métier que j'ai appris à accepter, en me concentrant sur ce qui reste : l'expérience acquise et les leçons tirées. Ce projet m'a conforté dans l'idée que la documentation et la lisibilité du code ne sont pas des luxes. Savoir qu'un autre développeur allait reprendre mon travail m'a poussé à être plus rigoureux dans mes commentaires et dans la structuration de mon code. Cette discipline m'accompagne depuis dans tous mes projets.

### Aujourd'hui
Je n'ai pas de visibilité sur l'état actuel du projet. Il est possible qu'il ait été finalisé, lancé sous une forme différente, ou abandonné. À ce jour, le site n'est pas disponible publiquement, ce qui laisse penser qu'il a pu être mis en pause ou annulé.

## Autocritique

La leçon la plus marquante de ce projet tient en une phrase : **"Fais des tests automatisés !"** J'ai perdu des heures à tester manuellement les formulaires dynamiques avec toutes les combinaisons de conditions et de cas familiaux complexes. Chaque modification du générateur nécessitait de repasser manuellement l'ensemble des scénarios : formulaire simple, conditions imbriquées, cas de parents divorcés, tuteurs multiples. Les tests manuels sont chronophages et incomplets : des régressions passaient entre les mailles du filet et n'étaient détectées que tardivement, entraînant des allers-retours coûteux. Aujourd'hui, je teste systématiquement le code de manière automatisée. Cette leçon a directement contribué au succès du projet de pointeuse chez HopLunch, où les tests exhaustifs ont garanti zéro bug en production.

L'autre point d'autocritique concerne la **sous-estimation de la complexité du générateur de formulaires**. Ce qui semble simple en surface ("l'utilisateur crée un formulaire avec des champs") cache une complexité technique considérable en termes de gestion d'état, de résolution de dépendances et de validation. Si c'était à refaire, j'aurais réalisé un prototype technique avant de m'engager dans le développement complet, et j'aurais proposé un découpage plus fin en livrables intermédiaires pour valider chaque niveau de complexité avant de passer au suivant.

Cette expérience m'a appris à ne jamais sous-estimer la complexité d'une fonctionnalité, même lorsqu'elle semble intuitive du point de vue utilisateur. Elle m'a aussi appris la valeur du prototypage et du découpage en incréments, deux pratiques que j'applique désormais systématiquement.
