---
slug: sass-tailwind
name: "SASS/Tailwind"
image: "/img/logos/TailwindCSS.webp"
isIcon: false
category: "technical"
order: 2
level: 3
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

CSS (Cascading Style Sheets) est le langage qui donne vie visuellement à une page web : couleurs, typographies, espacements, animations, mise en page responsive. Ce langage a besoin du langage HTML qui apporte la structure des éléments que le CSS enrichit visuellement.

SASS (Syntactically Awesome Style Sheets) est un préprocesseur CSS qui améliore le langage avec des variables, mixins, fonctions, et de l'imbrication. Ces fonctionnalités permettent d'écrire des fichiers de styles organisés, modulaires et réutilisables. C'est très pratique surtout sur les gros projets où l'on peut rapidement avoir plusieurs milliers de lignes de CSS.

TailwindCSS est un framework CSS qui permet d'écrire le style dans les classes des éléments HTML via des noms prédéfinis (ex: `<h1 class="text-xl bg-black text-white">Mon titre</h1>`). Ce framework ne charge que le style utilisé et accélère le développement, ce qui en a fait le plus populaire de l'écosystème web moderne, devant d'autres concurrents comme Bootstrap.

## Mes éléments de preuve

### Stylisation du site vitrine Bee'z Pro avec SASS et animations

Le projet Bee'z Pro a représenté mon plus gros défi d'intégration CSS. Les maquettes Photoshop de la graphiste comprenaient :
- des animations de scroll
- des transitions entre les pages
- des grilles complexes pour l'affichage des offres d'emploi en hexagones
- un design responsive avec animations cohérentes

J'ai structuré l'architecture SASS en modules séparés (base, utils, layout, pages...) avec la méthodologie 7-1 pattern. 

J'ai réalisé les animations de scroll en combinant les transitions CSS et JavaScript Intersection Observer.
Le plus gros défi a été l'intégration du système de filtres d'offres d'emploi. Les cartes devaient s'animer lors du filtrage en temps réel. J'ai résolu ce problème en utilisant des transitions CSS sur les propriétés `opacity` et `transform`, combinées à un système de classes dynamiques géré par JavaScript.

Résultat : Le site était fluide, dynamique et visuellement attrayant. Le logo de Bee'z Pro étant une abeille et le site représentant une ruche, j'ai pu ajouter des animations d'abeilles qui bougent sur le site par exemple. La cliente était très satisfaite du résultat.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### TailwindCSS pour la pointeuse HopLunch et gain de productivité

Lorsque j'ai commencé le développement de la pointeuse HopLunch avec NuxtJS, j'ai fait le choix de TailwindCSS plutôt que SASS. Cela m'a permis de gagner du temps de développement, car contrairement à Bee'z Pro, il n'y avait pas de design complexe ou d'animations ici.

L'application devait être optimisée pour les tablettes des dépôts avec une interface claire et des boutons suffisamment grands pour éviter les erreurs de pointage des livreurs. Avec Tailwind, j'ai pu développer l'interface en quelques heures à peine, car je n'avais pas à naviguer entre fichiers HTML et CSS. Tout était localisé dans les composants Vue (VueJS/NuxtJS est une autre compétence que je détaille dans mon portfolio).

Le système de responsive de Tailwind (`sm:`, `md:`, `lg:`) m'a permis de gérer les différentes tailles d'écran de manière simple et intuitive. J'ai également créé un fichier `tailwind.config.ts` personnalisé avec les couleurs de la charte graphique de HopLunch et des classes spécifiques pour les tailles de boutons tactiles par exemple.

Résultat : L'interface a été développée en une journée à peine. Je pense avoir gagné au moins 50% de temps par rapport à un projet SASS équivalent où j'aurais dû gérer le responsive manuellement en plus.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 3/5. Je maîtrise bien SASS et TailwindCSS après des années de pratique régulière. Aujourd'hui, je n'utilise presque plus que Tailwind et assez rarement, car je suis plus orienté back-end.

### Vitesse d'acquisition

Le CSS étant le visuel à l'état pur, changer une ligne de code, montre directement l'impact sur le site web. J'ai donc tout de suite trouvé ce langage très intuitif et pendant mes premières années de programmation, j'ai été orienté plus front-end que back-end.

### Recul et conseils

Mon conseil pour moi-même est de rester à l'affût des nouveautés CSS, car en 2026, le CSS "vanilla" a intégré presque toutes les fonctionnalités de SASS que j'utilisais il y a des années. La couche SASS n'est donc plus forcément nécessaire aujourd'hui sauf exceptions.

La compréhension du CSS natif (Flexbox, Grid, animations, custom properties) est fondamentale avant d'utiliser des frameworks comme Bootstrap ou TailwindCSS et je suis heureux d'avoir appris les bases à l'époque.

## Mon évolution

J'aimerais continuer à approfondir TailwindCSS, notamment pour des fonctionnalités avancées comme les plugins personnalisés. J'ai aussi commencé à faire de la veille sur l'évolution du CSS natif (container queries, cascade layers, color-mix) qui rend certaines fonctionnalités de SASS obsolètes.

À moyen terme, je souhaite progresser sur les animations notamment, ce qui me permettrait de consolider mes connaissances en front-end. Je pourrais alors apprendre à utiliser des bibliothèques de 3D par exemple comme ThreeJS.
