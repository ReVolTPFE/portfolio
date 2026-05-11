---
slug: continuous-learning
name: "Apprentissage continu"
image: "hugeicons:elearning-exchange"
isIcon: true
category: "soft"
order: 4
level: 4
relatedProjects:
  - hoplunch-zae
  - hoplunch-pointeuse
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
---

## Ma définition

Dans le monde de la programmation, l'apprentissage continu est une question de survie professionnelle. Les technologies et les frameworks changent tellement vite, qu'un développeur qui stagne devient obsolète en à peine quelques années. 

Cette compétence ne se résume pas à lire des articles, mais à pratiquer activement : tester de nouveaux outils sur des projets personnels, lire des documentations officielles et savoir remettre en question ses propres habitudes pour rester efficace.

Au quotidien, cette agilité permet de s'adapter aux besoins changeants des clients. Si un projet exige une technologie inconnue, la capacité à apprendre vite et bien garantit une livraison de qualité sans perdre de temps.

## Mes éléments de preuve

### Montée en compétence sur NuxtJS pour la pointeuse HopLunch

L'exemple le plus marquant de ma capacité d'apprentissage est ma montée en compétences sur NuxtJS. Lorsque j'ai démarré le projet de refonte de la pointeuse de HopLunch, je n'avais qu'une expérience limitée sur VueJS et aucune expérience de NuxtJS. 

Pourtant, au vu de l'application dynamique voulue sans rechargement de page, avec des interactions entre composants, un framework front-end me semblait le plus adapté.

Lorsque j'ai commencé le développement de l'application, je suis parti sur une stratégie d'apprentissage intensive :
- lecture détaillée de la documentation officielle de Nuxt 3
- réalisation de prototypes pour valider ma compréhension des concepts clés (Composition API, Stores Pinia, composables, middlewares)
- développement de ce portfolio comme terrain d'entraînement en parallèle 

Résultat : En quelques semaines de travail au bureau et sur mon temps libre, je suis passé d'un niveau débutant à un niveau me permettant de développer la pointeuse de manière autonome et de la déployer en production avec facilité.
<br>Depuis, j'ai aussi contribué à la refonte majeure du site web de HopLunch, fait lui aussi en NuxtJS. Cela prouve qu'avec un peu de travail et d'adaptation, un résultat concret est à portée de main.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

### Coordonnées géographiques et intégration d'API complexes

Le projet de gestion des ZAE (Zone d'Activité Économique) chez HopLunch m'a confronté à des domaines techniques que je ne connaissais pas du tout :
- la géolocalisation (coordonnées GPS, polygones WKT/GeoJSON, conversions Lambert93/WGS84)
- les API gouvernementales (API Sirene de l'Insee)

Plutôt que de me contenter d'une implémentation minimale, j'ai pris le temps de comprendre en profondeur chaque technologie.
<br>J'ai d'abord étudié les formats de coordonnées géographiques (en degrés, en mètres), les systèmes de projection, le fonctionnement latitude/longitude et les limites de précision des conversions.
<br>Une fois cet aspect compris, il m'a été utile dans la conversion entre les cartes Google Maps (WGS84 en degrés) et les coordonnées des entreprises sur l'API Sirene de l'Insee (Lambert93 en mètres).

J'ai aussi analysé la documentation complète de l'API Sirene v3.11 de l'Insee pour exploiter au mieux ses filtres et ses options de pagination. Ils ont développé leur propre moteur de requêtes très complexe qui équivaut presque à un langage de programmation type SQL. Une fois maîtrisé, il est bien plus simple d'utiliser la puissance des ressources de cette API fournissant les données des entreprises françaises.

Résultat : Cette approche d'apprentissage approfondi plutôt que superficiel, a contribué à la qualité et à la robustesse du système que j'ai codé.
<br>Mais ce sont aussi des connaissances qui, grâce à l'implication que j'y ai mise, me permettront dans le futur de facilement retravailler avec de la géolocalisation ou des API gouvernementales. 

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. L'apprentissage continu est très important dans mon métier. Il ne se passe pas une semaine sans que j'expérimente ou que j'apprenne de nouvelles méthodes de travail ou technologies.
<br>L'essentiel est de rester proactif et curieux. Je suis abonné à plusieurs newsletters sur la technologie en général, qui me permettent d'apprendre des choses en dehors même de la programmation.

### Vitesse d'acquisition

Il y a 5 ans, j'apprenais surtout à maîtriser les langages de programmation avec lesquels je travaillais. Mais avec l'expérience, les langages et les frameworks se ressemblent tous au moins légèrement avec des notions croisées.
<br>C'est pourquoi aujourd'hui, il est bien plus facile pour moi d'acquérir de nouvelles compétences.

### Recul et conseils

Le recul sur mes projets passés me permet d'imaginer ce que j'aurai pu faire de mieux sur tel ou tel projet si j'avais la connaissance nécessaire à l'époque. Le plus beau dans ce métier est de voir que l'on évolue constamment.
<br>Là où je le remarque, c'est en relisant du code créé il y a 1 an ou parfois juste 6 mois. Il m'arrive de me dire "J'ai vraiment codé ça ? J'aurai pu faire ça bien plus simplement ou avec beaucoup plus de performances.". C'est pour moi la preuve de mon évolution en compétences.

## Mon évolution

Je souhaite continuer à élargir mes compétences dans plusieurs directions : en DevOps (Docker avancé, Kubernetes, monitoring), et en découverte de nouvelles architectures (microservices, event-driven, serverless).

À plus long terme, je prévois de suivre des certifications (Symfony, AWS) pour formaliser et valider mes compétences acquises en autodidacte. J'aimerais également contribuer un jour à des projets open-source pour confronter mes pratiques à celles de la communauté et apprendre de développeurs plus expérimentés.
