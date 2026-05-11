---
slug: html-twig
name: "HTML/Twig"
image: "/img/logos/HTML.webp"
isIcon: false
category: "technical"
order: 1
level: 4
relatedProjects:
  - dgs-beez-web
  - dgs-beez-pro
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

HTML (HyperText Markup Language) est le langage standard de structuration de pages web, utilisé pour organiser le contenu (titres, paragraphes, images, liens, tableaux, etc).
<br>Twig est un moteur de template PHP, principalement utilisé avec Symfony, qui permet de séparer le contenu de la logique et de générer des pages web dynamiques de manière sécurisée et maintenable.

Ces deux technologies sont essentielles dans le développement front-end moderne. Coder une structure propre, garantit une maintenabilité et une intégration simple avec des back-ends complexes.

## Mes éléments de preuve

### Intégration du site vitrine Bee'z Pro à partir de maquettes Photoshop

Lors du développement du SaaS pour l'agence d'intérim Bee'z Pro chez DGS Création, une des grandes étapes était l'intégration du site vitrine à partir des maquettes Photoshop fournies par notre graphiste. 

Le site devait afficher les offres d'emploi, les actualités, les témoignages et la présentation de l'entreprise en responsive.
<br>Étant la vitrine de l'agence, il fallait que ce site ait le meilleur SEO possible. J'ai donc structuré l'ensemble des pages en utilisant les bonnes balises (ex: `<header>` `<nav>` `<main>` `<section>` `<footer>`) pour garantir l'accessibilité et le SEO. J'ai aussi structuré de la même manière les pages en faisant attention à l'ordre et à l'imbrication des titres par exemple (`<h1>`, puis `<h2>`, `<h3>` etc).

Côté Twig, j'ai utilisé un système d'héritage de templates avec un layout de base et des blocs spécialisés. Cela a permis de maintenir une cohérence visuelle sur l'ensemble du site et de faciliter les évolutions. 

Résultat : un site vitrine fidèle aux maquettes, performant, facilement maintenable, et en première position dans les navigateurs de recherche grâce aux mots-clés utilisés et grâce à la structure HTML adaptée pour le meilleur SEO possible.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Développement de templates dynamiques et modulaires pour le SaaS Bee'z Web

Sur le projet Bee'z Web (phase 2 du projet Bee'z Pro), j'ai conçu l'intégralité de l'interface de gestion des contrats, factures et avoirs en HTML/Twig. 

Le nombre élevé de pages différentes (inscription, détails de l'entreprise, création de commande, récapitulatif, paiement, facture, contrat, liste d'intérimaires) pouvait rapidement créer du code dupliqué. 
Le back-office contenait énormément d'éléments dynamiques réutilisables selon les pages ou le rôle de l'utilisateur connecté (Admin, Manager, User). 

J'ai donc créé des composants Twig réutilisables (macros pour les tableaux, les formulaires, les alertes) qui ont accéléré le développement des pages suivantes et garanti la même charte graphique.
<br>Par exemple, la macro de tableau filtrable que j'ai développée a été réutilisée sur plus de 15 pages différentes du back-office.

Résultat : Cette approche modulaire a drastiquement réduit le temps d'intégration grâce à la réutilisation des macros. J'ai aussi garanti un code propre et DRY (Don't Repeat Yourself) en évitant de dupliquer le même code dans plusieurs fichiers.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. C'est tout simplement car les technologies évoluent toujours et que je verrai toujours un nouveau cas d'usage où j'apprendrai des choses.
<br>Globalement, je maîtrise la structure HTML et Twig depuis le lycée et même si mon profil est plus orienté back-end en ce moment, j'utilise HTML toutes les semaines donc c'est important de me tenir à jour.

### Vitesse d'acquisition

HTML étant le premier langage web que j'ai appris de moi-même quand j'étais au lycée, l'apprentissage était lent au départ. Mais ensuite, quand j'ai commencé mon DUT et ma première alternance j'ai directement appris à prévoir la bonne structure HTML dès que je vois une maquette par exemple.

### Recul et conseils

Il ne faut jamais sous-estimer l'importance des fondamentaux. Un développeur qui maîtrise parfaitement HTML et Twig sera toujours plus efficace qu'un développeur qui connaît "à peu près" 5 frameworks front-end. Je l'ai remarqué avec le temps et je continue à faire attention à appliquer la même rigueur dans chaque projet.

## Mon évolution

Le métier de développeur évolue toujours, c'est pourquoi je fais régulièrement de la veille sur les différentes compétences que je maîtrise. J'ai par exemple récemment appris l'existence de l'attribut "popover" qui peut remplacer des popups simples JavaScript.
<br>A moyen terme j'aimerais progresser en accessibilité car c'est très important et des cours sont disponibles partout sur le web comme sur web.dev ou openclassrooms.
