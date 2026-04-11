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

Bee'z Web est une application SaaS que j'ai développé avec Symfony 6 chez DGS Création. 
<br>C'est la phase 2 du projet Bee'z Pro détaillé lui aussi dans mon portfolio. 
<br>La première phase se concentrait sur le site vitrine et sur la gestion des candidatures de l'agence d'intérim. 
<br>Mais Bee'z Web s'adresse aux **entreprises clientes** de l'agence, c'est-à-dire les sociétés qui font appel à Bee'z Pro pour recruter des intérimaires.

Concrètement, ce projet a pour but de permettre à une entreprise de signer un contrat intérimaire en 24 à 48h avec l'agence d'intérim.
<br>Le fait que tout sauf la rédaction du contrat final se fasse directement en ligne, fait gagner énormément de temps aux 2 parties.

La plateforme couvre une grande partie du cycle contractuel : 
- inscription de l'entreprise cliente avec vérification via l'API Sirene de l'Insee
- pré-création de contrats d'intérim et d'avenants via un processus guidé multi-étapes
- génération automatique de factures et d'avoirs
- suivi en temps réel via des tableaux de bord dédiés à chaque rôle utilisateur
- signature réelle entre une entreprise et l'agence d'intérim en moins de 48h
 
L'application intègre de la facturation et une architecture de sécurité RBAC reposant sur les Voters Symfony pour garantir l'isolation stricte des données entre entreprises clientes.

Techniquement, le projet repose sur une architecture Symfony 6 MVC, structurée en bundles fonctionnels (Entreprise, Contrat, Facture, Utilisateur, Notification). 
<br>Les services métiers sont eux aussi dédiés (ContractService, InvoiceService, PdfGenerator, ...) encapsulant la logique complexe de chaque domaine. 
<br>L'interface utilise Twig et SASS/Bootstrap, avec des composants réutilisables dont une macro de tableau filtrable déployée sur plus de 15 pages du back-office. 
<br>Les notifications sont gérées via Symfony Mailer avec des templates Twig personnalisés.

## Objectifs

- **Dématérialiser l'intégralité du cycle contractuel avant signature :** cela permet à l'agence d'intérim de se concentrer uniquement sur la rédaction du contrat final entre un intérimaire et une entreprise en ayant déjà toutes les informations.

- **Automatiser la génération des documents :** pré-contrats d'intérim, avenants, factures et avoirs, avec génération de PDF conformes aux normes légales comportant les mentions obligatoires et les montants exacts.

- **Améliorer la transparence pour les entreprises clientes** grâce à des tableaux de bord affichant en temps réel l'état des contrats, des factures, des intérimaires et des paiements.

- **Mettre en place une gestion des droits par rôle utilisateur :** Admin (accès total), Manager (gestion des contrats et factures), Entreprise (consultation et demandes de contrats). Chaque rôle dispose de permissions vérifiées par le composant Security de Symfony.

- **Garantir la conformité RGPD et juridique** : chiffrement des données sensibles, log des actions et de leurs dates et heures, numérotation séquentielle des factures selon réglementation en vigueur.

## Contexte

Le projet Bee'z Web est la suite du projet Bee'z Pro détaillé dans mon portfolio. Après avoir livré le site vitrine et le système de gestion des candidatures pour l'agence d'intérim, la gérante de Bee'z Pro nous a exposé une idée qu'elle souhaitait concrétiser : digitaliser la partie chronophage de son travail, à savoir la relation avec les entreprises qui recourent à ses services d'intérim.

Jusqu'ici, le processus de contractualisation était entièrement manuel. 
<br>La gérante rencontrait chaque entreprise et chaque intérimaire. Puis seulement après avoir reçu toutes les informations, rédigeait chaque contrat, l'envoyait par email, attendait le document signé puis créait la facture sous Excel.
<br>Ce circuit était lent (plusieurs jours par contrat), propice aux erreurs (montants mal calculés, clauses manquantes) et ne permettait aucun suivi centralisé. Les relances de paiement se faisaient de mémoire, sans historique exploitable.

Par ailleurs, le secteur de l'intérim est encadré par un cadre juridique strict : clauses obligatoires précises dans les contrats, règles comptables rigoureuses pour la facturation, et données personnelles des intérimaires relevant du RGPD. 
<br>La cliente n'avait ni le temps ni les compétences techniques pour vérifier manuellement la conformité de chaque document.

C'est dans ce contexte que Bee'z Web a été conçu : un outil prenant en charge l'ensemble du cycle contractuel tout en garantissant, par construction, le respect des contraintes légales et comptables du métier.

### Acteurs et interactions

Ce projet a impliqué plusieurs acteurs :
- La cliente, gérante de Bee'z Pro, avec qui j'ai poursuivi les échanges hebdomadaires pour valider chaque jalon
- Notre cheffe de projet en interne, en charge du cadrage fonctionnel et de la coordination
- Les conseillers juridiques de la cliente, qui ont validé les templates de commandes et les mentions légales des factures
- Moi-même, développeur unique sur le projet

Les réunions avec la cliente ont été complétées par des sessions de validation spécifiques avec ses conseillers juridiques pour chaque type de document généré par la plateforme.

En amont du projet, j'ai d'ailleurs été formé par la cliente sur le fonctionnement de toute la procédure de contrat intérimaire et de leurs factures.

## Enjeux

Le premier enjeu majeur était la **conformité juridique et comptable**. Chaque contrat d'intérim doit comporter des clauses spécifiques variant selon le type de mission (intérim classique, CDI intérimaire, remplacement).
<br>Les factures doivent respecter une numérotation séquentielle stricte, inclure toutes les mentions légales obligatoires, et ne peuvent jamais être modifiées : seul un avoir peut compenser une facture erronée.
<br>J'ai conçu un système garantissant ces contraintes par design : compteur atomique en base de données pour la numérotation, aucune modification possible des factures émises, et avoirs référençant obligatoirement leur facture d'origine.

Le deuxième enjeu portait sur la **sécurité et l'isolation des données**. Plusieurs entreprises clientes coexistent sur la même plateforme, mais aucune ne doit pouvoir accéder aux données d'une autre, même en cas de manipulation d'URL. J'ai donc ajouté un filtrage via des Doctrine Filters, injectant un filtre par ID d'entreprise dans chaque requête. J'ai couplé cela à des Voters Symfony vérifiant les permissions d'accès à l'utilisateur courant.

Enfin, l'enjeu de la **conformité RGPD** était le plus important. Les données personnelles des intérimaires et les données financières des entreprises clientes nécessitaient un chiffrement en base de données. J'ai donc ajouté une gestion détaillée du consentement, et des logs horodatés traçant chaque accès aux données sensibles.

## Risques

### Risques techniques

Le risque le plus critique était le **risque juridique lié aux documents générés**. 
<br>Un contrat comportant une clause manquante ou un montant erroné peut être contesté. Pour garantir ce que je faisais, j'ai créé un système de templates Twig avec des blocs conditionnels qui créent automatiquement le bon document selon les paramètres du contrat.
<br>Chaque template a été validé par la gérante et ses conseillers juridiques, et le processus multi-étapes empêche d'oublier certaines d'informations obligatoires.

Le **risque de fuite de données entre entreprises clientes** représentait une menace majeure pour la crédibilité de la plateforme. 
<br>La combinaison de Doctrine Filters et de Voters Symfony a constitué une double barrière rendant l'accès non autorisé impossible.

### Risques projet

Le **risque de dérive du périmètre** était connu dès le départ, la phase 1 ayant déjà souffert de ce problème.
<br>Cette fois-ci, ce qui n'était pas explicitement mentionné dans le cahier des charges n'a pas été ajouté directement. Ce sont des modifications/ajouts qui ont été faits à part par la suite.

## Les étapes du projet

### Phase 1 : Analyse et conception (2 semaines)

J'ai travaillé avec la cliente et la cheffe de projet pour cartographier tout le cycle contractuel existant. J'ai pu identifier les points de friction et définir l'ordre des fonctionnements à dématérialiser. 
<br>Durant cette phase, nous avons produit un cahier des charges détaillé. J'ai aussi travaillé sur le modèle de base de données couvrant notamment les entités Entreprise, Contrat, Avenant, Facture, Avoir et leurs relations.

### Phase 2 : Préparation du socle technique (1-2 jours)

Architecture Symfony 6, base de données et authentification dans la continuité du projet Bee'z Pro sur la même codebase. J'ai réutilisé le système RBAC que j'avais mis en place dans le 1er projet et les mêmes services métier fondamentaux. J'ai continué le versioning Git avec SemVer en passant à la 2.0.0 avec ce nouveau projet.

### Phase 3 : Développement des modules fonctionnels (6 semaines)

J'ai d'abord développé l'inscription des entreprises sur la partie vitrine du site. C'était une page avec un gros formulaire qui comprenait notamment la validation via l'API Sirene (vérification en temps réel du SIRET, pré-remplissage des informations légales).

Puis j'ai développé sur la même interface de back-office, la partie back-office entreprise qui comprenait :
- Tableau de bord statistique
- Tableau de bord affichant les derniers intérimaires, dernières commandes et factures
- Processus en plusieurs pages de création d'une commande.
  - Cela comprenait d'abord la création de la fiche intérimaire voulue et de ses informations si l'entreprise avait déjà son contact.
  - Ensuite vient le formulaire dynamique que j'ai développé, comprenant plus de 25 champs qui permettent pour chaque type de contrat, d'avoir toutes les informations légales et juridiques nécessaires.
  - Puis vient une étape de récapitulatif, avec les affichages de frais de dossier et du prix du contrat.
  - Enfin, l'étape de paiement selon plusieurs moyens possibles dont les avoirs provenant d'anciens contrats par exemple.
- J'ai développé des pages de détails dynamiques pour chaque commande, chaque facture, chaque intérimaire, pour que l'entreprise puisse toujours voir toutes ses données.

La partie back-office administrateur avait aussi des nouvelles pages :
- Tableau de bord statistique
- Récupération de tous les éléments nécessaires à la rédaction d'un contrat
- Suivi et mise à jour des statuts de commande en temps réel avec notification et mail pour chaque nouvelle commande
- J'ai aussi ajouté du paramétrage, notamment pour les montants de TVA et les frais de dossiers.
<br>L'agence étant basée à Mulhouse et à Belfort, ce ne sont pas les mêmes règles pour tous les contrats, c'est notamment dû aux lois qui sont parfois spécifiques à l'Alsace-Moselle. J'ai donc pris en compte tous ces paramétrages.

### Phase 4 : Génération des documents (environ 1 semaine)

J'ai développé les templates PDF modulaires pour chaque type de document, avec des blocs conditionnels qui sont adaptés aux différents types de missions. Chaque template a d'abord dû être validé par la cliente et ses conseillers juridiques.

Pour le suivi détaillé des factures, j'ai aussi mis en place de l'export sous format Excel pour que la gérante de l'entreprise d'intérim puisse avoir les détails de TVA facilement, pour chacune de ses agences.

### Phase 5 : Tests et recette

Nous avons testé avec la cliente, tout le projet après son développement : vérification de l'isolation des données, validation des calculs de facturation, conformité des documents PDF. La mise en production a été réalisée après validation complète par la cliente.

## Résultats pour moi

Ce projet a été le plus exigeant techniquement et juridiquement lorsque je travaillais chez DGS Création. C'était la première fois que je développais une application touchant à des domaines aussi sensibles que le droit du travail et la comptabilité. Chaque détail a des conséquences légales et financières et c'est pour cela que nous avons été accompagné par des experts juridiques.

J'ai acquis des compétences solides en **architecture et en sécurité**, notamment via l'isolation et le chiffrage des données. L'architecture de base de données était complexe à mettre en place et ne laissait pas de place à l'erreur, donc je suis satisfait d'avoir réussi ce projet.

Le développement du système de facturation m'a apporté une première expérience en **logique métier financière**. J'ai donc dû être très rigoureux notamment sur les arrondis qui sont eux-mêmes encadrés légalement.

J'ai donc appris énormément bien au-delà de la programmation, via le fonctionnement des factures et avoirs, les règles du droit du travail, le RGPD.

## Résultats pour l'entreprise

Ces résultats sont issus de la validation du cahier des charges et des retours que j'ai reçus après mon départ de DGS Création (voir plus bas dans les lendemains du projet).

- **Réduction énorme du temps de création de contrat** : le processus est passé de plusieurs jours (rencontres/emails/attente de documents/signature) à moins de 48 heures pour un cycle complet dématérialisé.

- **Satisfaction des entreprises clientes**, qui disposent d'un espace en ligne pour créer et suivre leurs commandes de contrats, et consulter leurs factures en temps réel.

- **Validation du modèle économique** par la gérante, qui a rapidement signé de nouveaux contrats via la plateforme.

- **Conformité RGPD et juridique** : données chiffrées en base de données, accès tracés dans des logs horodatés, documents conformes aux normes du travail.

## Lendemains du projet

### Dans un futur immédiat
Mon départ de DGS Création a eu lieu juste avant la mise en production. Mais la plateforme a été livrée avec l'ensemble des fonctionnalités.

### À distance
Comme le site Bee'z Pro, la plateforme a été en ligne pendant plus d'un an après mon départ. J'ai eu de bons echos peu après mon départ concernant l'utilisation de ce nouvel outil.

### Aujourd'hui
Je n'ai pas d'informations sur l'utilisation ou le retour sur investissement à long terme. Comme pour Bee'z Pro, une refonte semble avoir été réalisée avec une autre agence web.

## Autocritique

Comme pour la phase 1, la **gestion du périmètre projet** a été le gros point de friction. La cliente a demandé de nombreux ajustements après la validation du cahier des charges. Cette fois-ci nous avions refusé les demandes de changements avant que le projet ait toutes les fonctionnalités initiales. Mais nous les avons pris en compte avant la mise en production finale.

Sur le plan technique, j'aurais dû attendre **la validation complète des PDF** avant de commencer leurs développements. J'ai commencé les premiers développements avant d'avoir tous les retours des experts juridiques, ce qui au final nous a fait perdre un peu de temps, car nous avons dû changer des éléments.

Pour finir, j'ai appris énormément sur ce projet, surtout pour tout ce qui est métier. Que ce soit les factures, les règles très encadrées, la lecture d'articles de lois sur la TVA, j'ai vraiment acquis des notions sur tout le périmètre autour du simple site web. Aujourd'hui, sur mes nouveaux projets, je garde cette curiosité et cette rigueur avant même de coder.
