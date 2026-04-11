---
slug: dgs-beez-pro
title: "Création d'un SaaS pour une agence d'intérim"
description: "Site web pour une agence d'intérim : partie site vitrine, gestion des offres via API externe, matching des candidats."
companyProject: "Bee'z Pro"
company: "DGS Création"
date: "2023 - 2024"
pending: false
trending: false
image: "/img/projects/dgs-beez-pro/candidat.png"
images:
  - src: "/img/projects/dgs-beez-pro/homepage.png"
    alt: "Page d'accueil du site client"
  - src: "/img/projects/dgs-beez-pro/offres.png"
    alt: "Liste des offres d'emplois du site client"
  - src: "/img/projects/dgs-beez-pro/candidat.png"
    alt: "Tableau de bord candidat du site client"
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

## Présentation du projet

Bee'z Pro est un SaaS développé sur-mesure pour une agence d'intérim qui porte le même nom. Cette agence est spécialisée dans le recrutement des métiers tels que la manutention, le BTP et la logistique. Elle est basée à Mulhouse et à Belfort.

Le projet est composé de deux parties. 
- La première est publique et correspond à un site vitrine qui présente l'agence, ses actualités et le plus important, ses offres d'emploi. 
- La deuxième partie est une interface administrateur et utilisateur, comprenant la gestion des offres d'emploi, la gestion et le suivi de candidature et le matching automatique des offres et des candidats.

Le tout fonctionnant avec une API externe nommée Recruitee, qui permet à l'agence Bee'z Pro de diffuser ses offres d'emploi via plusieurs canaux tels que LinkedIn ou Indeed.

Ce SaaS a été mon premier projet d'entreprise utilisant le framework Symfony, et dont j'ai été responsable de la réception du cahier des charges et des maquettes, jusqu'à la mise en production finale du projet.

## Objectifs

Les objectifs de ce projet ont été multiples :

- **Donner une visibilité en ligne à l'agence** via un site vitrine professionnel arborant la charte graphique de Bee'z Pro. Il doit avoir des pages dédiées aux offres d'emploi, aux actualités, aux témoignages et à la présentation de l'entreprise. Ce site sert de vitrine commerciale pour attirer aussi bien les candidats que les entreprises clientes.

- **Centraliser la gestion des candidatures** dans un back-office unique, permettant de créer des fiches candidat complètes, de gérer les CV et documents, de suivre l'avancement des candidatures et de communiquer avec les candidats directement depuis la plateforme.

- **Automatiser le matching entre profils et missions** grâce à un algorithme de scoring paramétrable prenant en compte l'expérience, la disponibilité, la localisation géographique, les compétences et les habilitations.

- **Assurer la conformité RGPD** dans la gestion des données personnelles des candidats (CV, coordonnées, parcours professionnel), avec chiffrement des données sensibles, gestion du consentement et traçabilité des accès.

## Contexte

Avant notre intervention, Bee'z Pro gérait ses recrutements via une plateforme en ligne assez restrictive qui posait de nombreux problèmes : 
- perte de données lors de la saisie des profils candidats
- impossibilité de personnaliser les formulaires de candidature
- absence de visibilité en ligne (pas de site web propre)
- limitation des fonctionnalités de matching entre candidats et offres d'emploi

La gérante devait jongler entre plusieurs outils non connectés et perdait un temps considérable dans la gestion quotidienne des candidatures.

Le secteur de l'intérim BTP en Alsace est très concurrentiel, et l'absence de présence en ligne, plaçait Bee'z Pro en désavantage face à des concurrents déjà équipés de plateformes digitales modernes.

Ce projet a nécessité l'intervention de plusieurs acteurs :
- La cliente, gérante de Bee'z Pro
- Notre cheffe de projet en interne
- Notre graphiste en interne
- Moi-même, développeur sur le projet

La cheffe de projet et moi-même avons rencontré la cliente une fois par semaine pour lui faire part des avancées sur le projet, mais aussi de nos questions concernant certaines fonctionnalités par exemple.

Ce projet a duré de septembre 2023 à octobre 2023, puis certains changements et ajouts de fonctionnalités ont été effectués durant le mois de février 2024.

## Enjeux

Le premier enjeu majeur était d'ordre **technique**. Développer un SaaS complet demande une certaine maîtrise de l'architecture Symfony. Il faut être capable de structurer une application et de coder chaque composant de manière distincte pour avoir le plus de clarté possible. Le choix d'une architecture MVC (Modèle, Vue, Controlleur) bien séparée garantit la maintenabilité et l'évolution d'un projet. Le stack reposait sur **Symfony 6** pour le back-end, **Twig** et **SASS/Bootstrap** pour le front-end, avec un pattern SASS 7-1 et l'utilisation de layouts et de macros.

L'intégration de l'**API Recruitee** constituait un autre enjeu technique. Il fallait en effet, être capable de garantir une double synchronisation entre l'outil externe de création d'offres d'emploi et l'affichage sur notre site. Mais il fallait aussi garantir l'envoi des candidatures postées via le site sur ce même outil, donc la communication passait dans les 2 sens.

L'**algorithme de matching** représentait le coeur fonctionnel du projet. Le scoring multi-critères devait être à la fois pertinent et performant. Le système de pondération configurable (expérience x2, disponibilité x3, localisation x1.5) avec score normalisé sur 100 devait permettre à la gérante d'ajuster la pertinence selon le contexte, tout en générant des notifications automatiques lorsqu'un profil correspondait à une offre active.

L'enjeu **relationnel** était aussi important. En tant que développeur junior, je devais établir une relation de confiance avec la cliente à travers des réunions hebdomadaires en présentiel. Ces réunions servaient à de la vulgarisation technique et à de l'écoute active pour traduire ses besoins métier en fonctionnalités sur la plateforme.

Enfin, l'enjeu **réglementaire** imposait la mise en place de mécanismes de chiffrement, de consentement explicite et de traçabilité des accès pour respecter le RGPD dans la gestion des données personnelles sensibles des candidats.

## Risques

### Risques techniques

Le risque le plus critique était lié à la **dépendance à l'API Recruitee**. Toute modification unilatérale de l'API par l'éditeur (dépréciation d'endpoints, modification du rate limiting) pouvait impacter le fonctionnement du site sans maîtrise de notre côté. 

Pour mitiger ce risque, j'ai développé un service PHP abstrait encapsulant toute la logique de communication, gérant automatiquement la pagination, les retries en cas d'erreur réseau, et la transformation des données. Cette couche d'abstraction permettait d'isoler le reste de l'application des changements de l'API.

La **performance de l'algorithme de matching** présentait un risque elle aussi. Un scoring mal calibré ou paramétré de façon trop extrême, aurait ruiné l'ensemble de la pertinence du produit. Tout au long du projet et sur chaque fonctionnalité, j'ai d'abord analysé avec la cliente comment s'articule son travail et quelles sont les méthodes de sélection manuelles par exemple. J'ai donc pu m'adapter et être certain de correspondre à ses besoins.

### Risques projet

Le risque de **dérive du périmètre** s'est concrétisé en cours de projet. Le cahier des charges était validé à mon arrivée dans l'entreprise, et pourtant de nombreux changements ont été effectués en cours de route. La cliente, découvrant les possibilités de la plateforme au fil des démonstrations, a demandé des ajouts qui semblaient mineurs seuls, mais au final l'accumulation a impacté le planning et causé du retard.

Le risque de **sous-estimation de la complexité** était réel pour un premier projet SaaS. Certaines fonctionnalités apparemment simples (notifications automatiques, éditeur de templates) ont été plus complexes que prévu. Le versioning Git et la séparation des fonctionnalités ont permis de garder le contrôle sur les avancées malgré ces imprévus.

## Les étapes du projet

### Phase 1 : Cadrage et maquettage

Le projet a débuté par une série de réunions de cadrage avec la gérante de Bee'z Pro pour comprendre son métier, ses processus existants et ses attentes. 
<br>La cheffe de projet a mené une analyse fonctionnelle qui a permis de rédiger un cahier des charges détaillé fonctionnellement. 
<br>Les maquettes des principales pages ont été créées par notre graphiste.
<br>A mon arrivée, j'ai donc pu créer le schéma de base de données et définir le périmètre technique : choix du framework Symfony 6, de l'architecture MVC et validation de la faisabilité de l'intégration avec l'API Recruitee.

### Phase 2 : Développement du site vitrine (1 semaine)

La première phase de développement s'est concentrée sur le site vitrine. J'ai intégré les maquettes Photoshop fournies par la graphiste de l'agence, en structurant le front-end avec Twig et SASS selon le pattern 7-1, et en appliquant le responsive design.

Quelques exemples de pages codées sont les suivants : landing page, présentation de l'entreprise, design des pages actualités, page de témoignages, et le plus important, la page affichant les offres d'emploi avec tout le système de filtrage dynamique.

### Phase 3 : Développement du back-office et du matching (4 semaines)

La phase la plus conséquente concernait le développement du back-office administrateur : 
- Gestion des témoignages d'intérimaires
- Création et gestion des actualités via un moteur de template permettant une autonomie totale sans savoir coder
- Gestion des candidats inscrits sur le site, suivi de leurs profils et gestion de leurs candidatures
- Gestion des offres d'emploi arrivant de l'API Recruitee (nombre de candidatures via le site, activation ou non d'une offre)

Il y avait aussi un back-office candidat comprenant :
- Inscription et création d'un profil détaillé avec les critères de recherche
- Suivi des candidatures en cours
- Notifications et mails en cas de changement de statut d'une candidature
- Système de matching pour les candidats avec un score de compatibilité en fonction de la localisation, des expériences, certificats type CACES, disponibilité, métier.
<br>Le système de scoring a nécessité plusieurs itérations pour atteindre un niveau de pertinence satisfaisant.

### Phase 4 : Tests, corrections et mise en production (2 semaines)

La dernière phase a été consacrée aux tests fonctionnels avec la cliente, à la correction des bugs remontés, et à la mise en production. 
<br>J'ai conduit des sessions de formation pour que la gérante et ses employés soient autonome dans l'utilisation du back-office.
<br>La mise en ligne a été suivie d'une période de support pour corriger les derniers ajustements demandés, notamment plusieurs mois après, avec l'évolution de certains affichages du back-office.

## Résultats pour moi

Ce projet m'a permis de beaucoup progresser sur l'aspect technique. 
<br>En développant un SaaS complet de A à Z, j'ai acquis une maîtrise concrète de l'architecture Symfony, supérieure à ce que les projets d'école apprennent. 
<br>L'intégration de l'API Recruitee m'a appris à gérer les contraintes des services tiers comme le rate limiting, ou la gestion d'erreurs.

La conception de l'algorithme de matching a développé ma capacité à traduire des besoins métier complexes en logique algorithmique. J'ai compris qu'un bon développeur doit d'abord comprendre le métier du client avant d'écrire du code.

Sur le plan humain, les réunions hebdomadaires chez la cliente ont été une formation accélérée à la relation client. J'ai appris à vulgariser des concepts techniques, à recueillir des besoins en posant les bonnes questions, et à gérer les attentes.

## Résultats pour l'entreprise

- **Temps de traitement des candidatures fortement amélioré** : le matching automatique et le pipeline de candidature ont remplacé les processus manuels, ce qui a libéré un temps considérable pour la gérante qui pouvait se concentrer sur les entreprises clientes et les intérimaires.

- **Intérimaires satisfaits** de la nouvelle interface d'inscription et du suivi de leurs candidatures en temps réel.

- **Visibilité en ligne acquise** : le site vitrine a offert à Bee'z Pro une présence en ligne supérieure, la renforçant face à la concurrence.

- **Cliente satisfaite** des livrables fournis et du suivi du projet. Elle nous a d'ailleurs confié un deuxième projet encore plus ambitieux (Bee'z Web, une plateforme de gestion de contrats).

## Lendemains du projet

Le projet a été en ligne pendant plus d'un an après mon départ de l'entreprise DGS Création. Aujourd'hui, une nouvelle refonte semble avoir été réalisée avec une autre agence web. Je n'ai pas plus d'informations sur l'évolution du projet, n'étant plus en relation avec l'entreprise ni avec la cliente.

Le plus important pour moi est que ce projet a permis un deuxième contrat (Bee'z Web), ce qui a prouvé que le travail fourni et la relation de confiance établie ont été déterminants.

## Autocritique

Ce projet a été mon premier SaaS développé de A à Z, et il reste mémorable pour moi. J'ai appris énormément, tant sur le plan technique (architecture Symfony, intégration d'API, algorithme de matching) que sur le plan humain (relation client, communication, gestion des attentes).

La principale leçon tirée concerne la gestion du périmètre du projet. Nous avons accepté trop de changements après la validation du cahier des charges, ce qui a rallongé le planning.
<br>Aujourd'hui, je veille à expliquer aux clients ce qu'engendrent des changements importants en cours de route (impact sur les délais, les coûts, et les risques de régression).

Les réunions hebdomadaires chez la cliente ont été l'un des aspects les plus enrichissants du projet. Ces échanges réguliers m'ont permis de comprendre en profondeur le métier de l'intérim, ce qui a directement amélioré la pertinence des fonctionnalités développées.
