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

## Présentation du projet

Bee'z Web est une application SaaS que j'ai développée sous Symfony 6 chez DGS Création, constituant la phase 2 du projet Bee'z Pro. Là où la première phase se concentrait sur le site vitrine et la gestion des candidatures de l'agence d'intérim, Bee'z Web s'adresse aux **entreprises clientes** de l'agence, c'est-à-dire les sociétés qui font appel à Bee'z Pro pour recruter des intérimaires.

La plateforme couvre l'intégralité du cycle contractuel dématérialisé : inscription de l'entreprise cliente avec vérification via l'API Sirene de l'Insee, création de contrats d'intérim et d'avenants via un processus guidé multi-étapes, signature en ligne, génération automatique de factures et d'avoirs, et suivi en temps réel via des tableaux de bord dédiés à chaque rôle utilisateur. L'application intègre un moteur de facturation avec double vérification des montants et une architecture de sécurité RBAC reposant sur les Voters Symfony et les Doctrine Filters pour garantir l'isolation stricte des données entre entreprises clientes.

Techniquement, le projet repose sur une architecture Symfony 6 MVC structurée en bundles fonctionnels (Entreprise, Contrat, Facture, Utilisateur, Notification), avec des services métier dédiés (ContratService, FactureService, PdfGenerator) encapsulant la logique complexe de chaque domaine. L'interface utilise Twig et SASS/Bootstrap, avec des composants réutilisables dont une macro de tableau filtrable déployée sur plus de 15 pages du back-office. Les notifications sont gérées via Symfony Mailer avec des templates Twig personnalisés.

## Objectifs

- **Dématérialiser l'intégralité du cycle contractuel**, de l'inscription de l'entreprise cliente jusqu'au paiement de la facture, en remplaçant le processus manuel (Word, email, Excel) par une plateforme centralisée.

- **Automatiser la génération des documents contractuels** : contrats d'intérim, avenants, factures et avoirs, avec génération de PDF conformes aux normes légales comportant les mentions obligatoires et les montants exacts.

- **Améliorer la transparence** pour les entreprises clientes grâce à des tableaux de bord affichant en temps réel l'état des contrats, factures et paiements.

- **Mettre en place une gestion fine des droits** par rôle utilisateur : Admin (accès total), Manager (gestion des contrats et factures), User (consultation). Chaque rôle dispose de permissions granulaires vérifiées par des Voters Symfony.

- **Garantir la conformité RGPD et juridique** : chiffrement des données sensibles, horodatage des actions, journaux d'accès, et numérotation séquentielle des factures sans trou.

- **Assurer la fiabilité absolue de la facturation** via un système de double vérification calculant chaque montant de deux manières indépendantes.

## Contexte

Le projet Bee'z Web est né directement de la confiance établie avec la cliente lors de la phase 1. Après avoir livré le site vitrine et le système de gestion des candidatures pour l'agence, la gérante de Bee'z Pro avait identifié un besoin complémentaire urgent : outiller le versant commercial de son activité, à savoir la relation avec les entreprises qui recourent à ses services d'intérim.

Jusqu'alors, le processus de contractualisation était entièrement manuel. La gérante rédigeait chaque contrat sous Word, l'envoyait par email, attendait le document signé par scan, puis créait la facture sous Excel. Ce circuit était lent (plusieurs jours par contrat), propice aux erreurs (montants mal calculés, clauses manquantes) et ne permettait aucun suivi centralisé. Les relances de paiement se faisaient de mémoire, sans historique exploitable.

Par ailleurs, le secteur de l'intérim est encadré par un cadre juridique strict : clauses obligatoires précises dans les contrats, règles comptables rigoureuses pour la facturation, et données personnelles des intérimaires relevant du RGPD. La cliente n'avait ni le temps ni les compétences techniques pour vérifier manuellement la conformité de chaque document.

C'est dans ce contexte que Bee'z Web a été conçu : un outil prenant en charge l'ensemble du cycle contractuel tout en garantissant, par construction, le respect des contraintes légales et comptables du métier.

### Acteurs et interactions

Ce projet a impliqué les mêmes acteurs que la phase 1 :
- La cliente, gérante de Bee'z Pro, avec qui les échanges hebdomadaires se sont poursuivis pour valider chaque module fonctionnel
- Notre cheffe de projet en interne, en charge du cadrage fonctionnel et de la coordination
- Les conseillers juridiques de la cliente, qui ont validé les templates de contrats et les mentions légales des factures
- Moi-même, développeur unique sur le projet

Les réunions hebdomadaires avec la cliente ont été complétées par des sessions de validation spécifiques avec ses conseillers juridiques pour chaque type de document généré par la plateforme.

## Enjeux

Le premier enjeu majeur était la **conformité juridique et comptable**. Chaque contrat d'intérim doit comporter des clauses spécifiques variant selon le type de mission (intérim classique, CDI intérimaire, mise à disposition). Les factures doivent respecter une numérotation séquentielle stricte, inclure toutes les mentions légales obligatoires, et ne peuvent jamais être supprimées une fois émises : seul un avoir peut compenser une facture erronée. J'ai conçu un système garantissant ces contraintes par design : compteur atomique en base de données pour la numérotation, verrouillage en écriture des factures émises, et avoirs référençant obligatoirement leur facture d'origine.

Le deuxième enjeu portait sur la **sécurité et l'isolation des données**. Plusieurs entreprises clientes coexistent sur la même plateforme, mais aucune ne doit pouvoir accéder aux données d'une autre, même en cas de manipulation d'URL. J'ai implémenté un filtrage systématique via des Doctrine Filters injectant automatiquement un filtre par identifiant d'entreprise dans chaque requête, couplé à des Voters Symfony vérifiant le rattachement de chaque entité à l'entreprise de l'utilisateur connecté.

Le troisième enjeu concernait la **fiabilité des calculs financiers**. Une erreur d'un centime peut avoir des conséquences en cascade : déclarations comptables erronées, litiges clients, problèmes fiscaux. J'ai mis en place un système de double vérification calculant chaque montant selon deux méthodes indépendantes (somme des lignes et calcul global). Toute divergence bloque l'émission de la facture. Ce mécanisme a permis de détecter un bug d'arrondi (0.01 euro d'écart sur certaines configurations de TVA) durant le développement.

Enfin, l'enjeu de la **conformité RGPD** était transversal. Les données personnelles des intérimaires et les données financières des entreprises clientes nécessitaient un chiffrement en base de données, une gestion rigoureuse du consentement, et un journal d'audit horodaté traçant chaque accès aux données sensibles.

## Risques

### Risques techniques

Le risque le plus critique était le **risque juridique lié aux documents générés**. Un contrat comportant une clause manquante ou un montant erroné peut être requalifié ou contesté. Pour l'atténuer, j'ai créé un système de templates Twig modulaires avec des blocs conditionnels composant automatiquement le bon document selon les paramètres du contrat. Chaque template a été validé par la gérante et ses conseillers juridiques, et le processus guidé multi-étapes empêche l'omission d'informations obligatoires.

Le **risque de fuite de données entre entreprises clientes** représentait une menace majeure pour la crédibilité de la plateforme. La combinaison de Doctrine Filters et de Voters Symfony constitue une double barrière rendant l'accès croisé structurellement impossible, même en cas de faille dans l'une des deux couches.

Le **risque technique lié à la génération PDF** ne devait pas être sous-estimé. Les documents devaient être fidèles aux gabarits validés par les juristes tout en étant générés dynamiquement. Les différences de rendu entre HTML et PDF ont nécessité de nombreux ajustements.

### Risques projet

Le **risque de dérive du périmètre** était connu dès le départ, la phase 1 ayant déjà souffert de ce phénomène. La frontière entre le cahier des charges initial et les souhaits additionnels de la cliente était parfois floue, ce qui s'est effectivement matérialisé durant le développement.

## Les étapes du projet

### Phase 1 : Analyse et conception

J'ai travaillé avec la cliente et le chef de projet pour cartographier le cycle contractuel existant, identifier les points de douleur et définir les flux dématérialisés cibles. Cette phase a produit un cahier des charges détaillé, des maquettes fonctionnelles et un modèle de données couvrant les entités Entreprise, Contrat, Avenant, Facture, Avoir et Utilisateur.

### Phase 2 : Développement du socle technique

Architecture Symfony 6, base de données, authentification, système RBAC, et services métier fondamentaux. Le code est structuré en bundles fonctionnels partageant certaines bases avec Bee'z Pro pour la cohérence des données. Le versioning Git avec SemVer et le workflow Git Flow ont été appliqués de manière identique au projet précédent.

### Phase 3 : Développement des modules fonctionnels

Inscription des entreprises avec validation via l'API Sirene (vérification en temps réel du SIRET, pré-remplissage des informations légales), création de contrats via un processus guidé multi-étapes, gestion des avenants comme versions successives, et système de facturation avec double vérification.

### Phase 4 : Génération documentaire

J'ai développé les templates PDF modulaires pour chaque type de document, avec des blocs conditionnels adaptés aux différents types de missions. Chaque template a fait l'objet de validations itératives avec la cliente et ses conseillers juridiques.

### Phase 5 : Tests et recette

L'ensemble des parcours utilisateur a été couvert : vérification de l'isolation des données, validation des calculs de facturation sur des cas limites, et conformité des documents PDF. La mise en production a été réalisée après validation complète par la cliente.

## Résultats pour moi

Ce projet a été le plus exigeant techniquement et fonctionnellement de mon expérience chez DGS Création. C'était la première fois que je développais une application touchant à des domaines aussi sensibles que le droit du travail temporaire et la comptabilité, où chaque détail a des conséquences légales et financières concrètes. Cette pression m'a fait progresser considérablement en rigueur.

J'ai acquis des compétences solides en **architecture de sécurité applicative**, notamment sur l'isolation des données en environnement multi-tenant. La mise en place des Doctrine Filters et des Voters Symfony m'a donné une compréhension approfondie des mécanismes de contrôle d'accès granulaire, réutilisable sur tout projet nécessitant une séparation stricte des données.

Le développement du système de facturation m'a apporté une expertise en **logique métier financière** : concevoir des systèmes où la précision au centime est non négociable et où les contraintes comptables sont garanties par le code lui-même. La découverte du bug d'arrondi grâce au mécanisme de double vérification a été une leçon marquante sur la valeur des contrôles croisés.

J'ai également enrichi mes connaissances métier : fonctionnement des factures et avoirs, contraintes de numérotation séquentielle, règles du droit du travail temporaire. Ces savoirs, acquis en développant l'application et en échangeant avec la cliente, constituent un capital qui nourrit ma compréhension des enjeux business derrière le code.

## Résultats pour l'entreprise

- **Réduction drastique du temps de contractualisation** : le processus est passé de plusieurs jours (circuit Word/email/scan) à moins de 48 heures pour un cycle complet dématérialisé.

- **Fiabilité comptable prouvée** : aucune erreur de facturation signalée en production grâce au système de double vérification. La numérotation séquentielle et les mentions légales automatiques ont éliminé le risque d'erreurs manuelles.

- **Satisfaction des entreprises clientes**, qui disposent d'un espace en ligne pour créer, signer et suivre leurs contrats, et consulter leurs factures en temps réel.

- **Validation du modèle économique** par la gérante, qui a rapidement signé de nouveaux contrats via la plateforme, confirmant que l'outil répondait à un besoin réel.

- **Conformité RGPD et juridique effective** : données chiffrées en base, accès tracés dans un journal d'audit horodaté, documents conformes aux normes du travail temporaire.

## Lendemains du projet

### Dans un futur immédiat
Après la mise en production, la plateforme a été livrée avec l'ensemble des fonctionnalités prévues et validées par la cliente, avant mon départ de DGS Création.

### À distance
Comme le site Bee'z Pro, la plateforme a été en ligne pendant plus d'un an après mon départ. La longévité en production est un indicateur positif de la robustesse du code et de la pertinence des choix architecturaux. Le système de facturation, en particulier, devait fonctionner sans faille sur la durée, car toute erreur aurait eu des conséquences immédiates sur l'activité commerciale de l'agence. Son fonctionnement continu sans intervention de ma part confirme la solidité des fondations techniques.

### Aujourd'hui
Je n'ai pas d'informations précises sur les métriques d'utilisation ou le retour sur investissement à long terme. Comme pour Bee'z Pro, une refonte semble avoir été réalisée avec une autre agence web.

## Autocritique

Comme pour la phase 1, la **gestion du périmètre projet** a été le principal point de friction. La cliente a demandé de nombreux ajustements après la validation du cahier des charges, rallongeant le développement au-delà des estimations. Avec le recul, j'aurais dû mettre en place un processus plus formel de gestion des changements : un document de suivi des demandes additionnelles avec estimation d'impact sur le planning, soumis à validation avant toute implémentation. Cette expérience a renforcé ma conviction qu'il faut expliquer clairement aux clients les conséquences de chaque modification en cours de route, non pour refuser les évolutions, mais pour que chacun décide en connaissance de cause.

Sur le plan technique, la **complexité de la génération PDF** aurait mérité une phase de prototypage plus longue. J'ai sous-estimé le temps nécessaire pour obtenir un rendu fidèle aux gabarits juridiques, les différences entre HTML et PDF ayant nécessité de nombreux allers-retours. Si c'était à refaire, je consacrerais un sprint entier au prototypage du moteur PDF avant les templates définitifs.

Enfin, la leçon la plus profonde touche à la **précision absolue requise dans le domaine financier**. Aucun chiffre ne peut être approximatif sur une facture. Cette exigence prend une tout autre dimension quand on développe un système devant la garantir sur des centaines de configurations (taux de TVA variés, marges variables, avoirs partiels). Cette contrainte a profondément influencé ma manière d'aborder les fonctionnalités critiques : je privilégie désormais les mécanismes de vérification croisée et les tests sur les cas limites.
