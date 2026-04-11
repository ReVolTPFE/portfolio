---
slug: html-twig
name: "HTML/Twig"
image: "/img/logos/HTML.webp"
isIcon: false
category: "technical"
order: 1
level: 5
relatedProjects:
  - dgs-beez-web
  - dgs-beez-pro
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

HTML est le langage fondamental du web. Chaque page, chaque application, chaque interface repose sur ce socle qui structure le contenu visible par l'utilisateur : titres, paragraphes, images, formulaires, liens de navigation. Sans HTML, rien ne s'affiche. C'est le premier langage que tout développeur web apprend, et paradoxalement, c'est aussi celui dont la maîtrise profonde fait la différence entre un développeur junior et un développeur expérimenté. Écrire du HTML sémantique, accessible et optimisé pour le référencement naturel (SEO) demande une compréhension fine des standards du W3C et des bonnes pratiques d'accessibilité (WCAG).

Twig, quant à lui, est le moteur de templates officiel de Symfony. Il permet de séparer la logique métier du rendu visuel en générant du HTML dynamique à partir de données PHP. Grâce à son système d'héritage de templates, ses blocs réutilisables, ses filtres et ses macros, Twig rend le code front-end maintenable et modulaire, même sur des projets de grande envergure. Dans le contexte actuel où les applications SaaS exigent des interfaces dynamiques et personnalisées, la combinaison HTML/Twig reste incontournable pour tout développeur travaillant dans l'écosystème Symfony.

En entreprise, cette compétence me permet de traduire fidèlement les maquettes des designers en interfaces fonctionnelles, tout en injectant les données métier de manière propre et sécurisée. La maîtrise de Twig offre également un avantage dans la collaboration avec les intégrateurs et les designers, car la séparation nette entre structure et logique facilite le travail en équipe.

## Mes éléments de preuve

### Intégration complète du site vitrine Bee'z Pro à partir de maquettes Figma

Lors du développement du SaaS pour l'agence d'intérim Bee'z Pro chez DGS Création, la première grande étape a été l'intégration complète du site vitrine à partir de maquettes Figma fournies par un designer externe. Le site devait afficher les offres d'emploi, les actualités, les témoignages et la présentation de l'entreprise, le tout avec une navigation fluide et un design responsive. J'ai structuré l'ensemble des pages en HTML sémantique, en veillant à utiliser les bonnes balises (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`) pour garantir l'accessibilité et le SEO. Côté Twig, j'ai mis en place un système d'héritage de templates avec un layout de base et des blocs spécialisés, ce qui a permis de maintenir une cohérence visuelle sur l'ensemble du site tout en facilitant les évolutions futures. Le résultat : un site vitrine fidèle aux maquettes, performant et facilement maintenable, que la cliente a validé dès la première présentation.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Développement de templates dynamiques et modulaires pour le SaaS Bee'z Web

Sur le projet Bee'z Web (phase 2 du projet Bee'z Pro), j'ai conçu l'intégralité de l'interface de gestion des contrats, factures et avoirs en HTML/Twig. La complexité résidait dans le nombre de pages différentes (inscription, détails entreprise, création de commande, récapitulatif, paiement, facture, contrat, liste d'intérimaires) et dans la nécessité de rendre chaque élément dynamique selon le rôle de l'utilisateur connecté (Admin, Manager, User). J'ai créé des composants Twig réutilisables (macros pour les tableaux, les formulaires, les alertes) qui ont considérablement accéléré le développement des pages suivantes. Par exemple, la macro de tableau filtrable que j'ai développée a été réutilisée sur plus de 15 pages différentes du back-office. Cette approche modulaire a réduit le temps d'intégration d'environ 40% sur la deuxième moitié du projet.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Formulaires d'inscription dynamiques sur le projet Ile aux Copains

Le projet Ile aux Copains comportait un défi particulier : créer des formulaires d'inscription pour les parents et enfants avec des champs conditionnels et dynamiques. Les formulaires devaient s'adapter en temps réel selon les choix de l'utilisateur (type d'activité, régime alimentaire, informations médicales, autorisations parentales). J'ai structuré ces formulaires en HTML avec une architecture Twig permettant de charger dynamiquement des blocs de champs via JavaScript, tout en conservant la validation côté serveur Symfony. La difficulté principale était de gérer le cas des parents divorcés avec des tuteurs légaux différents, ce qui impliquait des formulaires imbriqués complexes. Cette expérience m'a appris l'importance d'une structure HTML solide et sémantique comme fondation pour des interactions JavaScript complexes.

[→ Voir le projet : Ile aux Copains](/projects/dgs-ile-aux-copains)

## Mon autocritique

Je maîtrise pleinement HTML et Twig après plus de 7 ans d'utilisation quotidienne. Cette compétence est la pierre angulaire de mon profil de développeur fullstack : c'est par elle que tout commence, et c'est grâce à elle que les interfaces prennent vie. Ma vitesse d'acquisition a été naturellement rapide, car HTML a été mon premier langage appris en DUT, et Twig s'est imposé dès mes premiers projets Symfony en entreprise.

L'importance de cette compétence dans mon métier est souvent sous-estimée. Beaucoup de développeurs considèrent HTML comme trivial, mais la différence entre un HTML bien structuré et un HTML approximatif se ressent directement sur l'accessibilité, le SEO et la maintenabilité du projet. J'ai appris à mes dépens, sur les premiers projets chez DGS Création, qu'un HTML mal structuré entraîne des heures de debug CSS et JavaScript. Depuis, je porte une attention particulière à la sémantique et à la structure avant même de commencer le styling.

Mon conseil : ne jamais négliger les fondamentaux. Un développeur qui maîtrise parfaitement HTML et Twig sera toujours plus efficace qu'un développeur qui connaît superficiellement dix frameworks front-end. La base solide permet d'apprendre plus vite tout le reste.

## Mon évolution

Mon objectif à moyen terme est de perfectionner ma maîtrise des standards d'accessibilité WCAG 2.2 pour les applications web complexes. L'accessibilité est un enjeu croissant, tant sur le plan légal (directive européenne sur l'accessibilité numérique) que sur le plan éthique. Je souhaite pouvoir auditer et améliorer l'accessibilité de chaque projet sur lequel je travaille.

Je continue également à explorer les synergies entre Twig et les frameworks JavaScript front-end comme NuxtJS. Sur mes projets actuels chez HopLunch, je travaille avec les deux écosystèmes (Twig pour le back-office Symfony, NuxtJS pour les applications front-end), ce qui me donne une vision complète des approches de templating côté serveur et côté client. Cette double compétence me permet de choisir l'outil le plus adapté à chaque contexte et de conseiller mes collègues sur les choix techniques.
