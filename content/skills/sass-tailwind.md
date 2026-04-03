---
slug: sass-tailwind
name: "SASS/Tailwind"
image: "/img/logos/TailwindCSS.webp"
isIcon: false
category: "technical"
order: 2
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

Le CSS est le langage qui donne vie visuellement à une page web : couleurs, typographies, espacements, animations, mise en page responsive. Sans CSS, le web serait une suite de textes bruts sans aucune identité visuelle. Maîtriser CSS, c'est être capable de transformer n'importe quelle maquette en interface fonctionnelle, fluide et adaptée à tous les écrans.

SASS (Syntactically Awesome Style Sheets) est un préprocesseur CSS qui enrichit le langage avec des variables, des mixins, des fonctions, l'imbrication et les imports partiels. Ces fonctionnalités permettent d'écrire des feuilles de styles organisées, modulaires et réutilisables, particulièrement précieuses sur les projets de grande envergure où la base CSS peut atteindre plusieurs milliers de lignes. SASS impose une discipline d'architecture qui évite le "CSS spaghetti" redouté par tous les développeurs front-end.

TailwindCSS, en revanche, adopte une philosophie radicalement différente : plutôt que d'écrire des classes CSS personnalisées, on compose directement les styles dans le HTML grâce à des classes utilitaires prédéfinies. Cette approche accélère considérablement le développement, garantit la cohérence graphique et élimine le CSS mort. TailwindCSS s'est imposé comme le framework CSS le plus populaire de l'écosystème web moderne, notamment grâce à son intégration native avec les frameworks comme NuxtJS et son excellent système de design tokens.

Dans mon quotidien professionnel, je maîtrise et utilise ces deux approches selon le contexte du projet. SASS reste privilégié sur les projets Symfony/Twig où Bootstrap est déjà en place, tandis que TailwindCSS est mon choix par défaut sur les projets NuxtJS et les nouvelles applications front-end.

## Mes éléments de preuve

### Stylisation complète du site vitrine Bee'z Pro avec SASS et animations avancées

Le projet Bee'z Pro a représenté mon plus gros défi d'intégration CSS. Les maquettes Figma du designer comprenaient des animations de scroll, des transitions entre les pages, des grilles complexes pour l'affichage des offres d'emploi et un design responsive devant fonctionner parfaitement sur mobile, tablette et desktop. J'ai structuré l'architecture SASS en modules séparés (variables, mixins, composants, layouts, pages) suivant la méthodologie 7-1 pattern. Les animations de scroll ont été réalisées en combinant CSS transitions et JavaScript Intersection Observer. Le plus gros défi a été l'intégration du système de filtres d'offres d'emploi, avec des cartes qui devaient s'animer lors du filtrage en temps réel. J'ai résolu ce problème en utilisant des transitions CSS sur les propriétés `opacity` et `transform`, combinées à un système de classes dynamiques géré par JavaScript. Le résultat final était un site fluide et visuellement attrayant, validé par la cliente dès la première présentation et devenu la vitrine de son agence d'intérim.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Adoption de TailwindCSS pour la pointeuse HopLunch et gain de productivité

Lorsque j'ai commencé le développement de la pointeuse HopLunch avec NuxtJS, j'ai fait le choix de TailwindCSS plutôt que SASS. C'était ma première utilisation approfondie de Tailwind sur un projet professionnel. L'application devait être optimisée pour les tablettes des dépôts avec une interface claire et des boutons suffisamment grands pour éviter les erreurs de pointage des livreurs. TailwindCSS m'a permis de développer l'ensemble de l'interface en un temps record, car je n'avais pas à naviguer entre fichiers HTML et CSS : tout était co-localisé dans les composants Vue. Le système de responsive de Tailwind (`sm:`, `md:`, `lg:`) m'a permis de gérer les différentes tailles d'écran de manière intuitive. J'ai également créé un fichier `tailwind.config.ts` personnalisé avec les couleurs de la charte HopLunch et des utilitaires spécifiques pour les tailles de boutons tactiles. Le temps de développement de l'interface a été réduit d'environ 30% par rapport à un projet SASS équivalent, et la maintenance est facilitée par l'absence de CSS mort.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

### Architecture CSS modulaire et design system sur ce portfolio personnel

Pour ce portfolio, j'ai utilisé TailwindCSS avec le plugin Typography pour le rendu des contenus Markdown, et j'ai configuré un design system complet dans le fichier `tailwind.config.ts` : palette de couleurs primaires/secondaires/tertiaires, typographies, espacements personnalisés et composants réutilisables. Cette approche m'a permis de garantir une cohérence visuelle sur l'ensemble du site tout en facilitant les évolutions futures. Par exemple, changer la couleur primaire du site ne nécessite que de modifier une seule variable dans la configuration. J'ai également mis en place des composants de style réutilisables (boutons, cartes, sections) qui m'ont permis de développer les différentes pages rapidement tout en maintenant une identité visuelle forte et cohérente.

## Mon autocritique

Je maîtrise très bien SASS et TailwindCSS après 7 ans de pratique CSS régulière. Mon parcours a suivi l'évolution naturelle du CSS en entreprise : CSS pur en formation, puis SASS sur les projets Symfony avec Bootstrap, et enfin TailwindCSS sur les projets NuxtJS modernes. Cette progression m'a donné une compréhension profonde des fondamentaux CSS, ce qui me permet d'être efficace quel que soit l'outil utilisé.

Cette compétence est fondamentale dans mon profil fullstack. Un développeur qui ne maîtrise pas le CSS produit des interfaces approximatives qui nuisent à l'expérience utilisateur et à la crédibilité du produit. Ma capacité à intégrer fidèlement des maquettes et à créer des interfaces responsive est un atout direct pour les entreprises avec lesquelles je travaille.

Ma vitesse d'acquisition de TailwindCSS a été particulièrement rapide grâce à ma solide base CSS/SASS. En une semaine de pratique intensive sur la pointeuse HopLunch, j'étais pleinement productif. Ce constat confirme que les fondamentaux CSS sont plus importants que la connaissance d'un framework spécifique.

Mon conseil : investir du temps dans la compréhension du CSS natif (Flexbox, Grid, animations, custom properties) avant de se lancer dans un framework. Les frameworks changent, les fondamentaux restent.

## Mon évolution

Mon objectif est de continuer à approfondir TailwindCSS, notamment les fonctionnalités avancées comme les plugins personnalisés, les variantes dynamiques et l'intégration avec les design systems d'entreprise. Je m'intéresse également à l'évolution du CSS natif (container queries, cascade layers, color-mix) qui rend certaines fonctionnalités de SASS obsolètes.

À moyen terme, je souhaite pouvoir proposer et maintenir des design systems complets pour les projets sur lesquels je travaille, en combinant TailwindCSS, des tokens de design et une documentation de composants. Cette approche permettrait d'accélérer le développement et de garantir la cohérence visuelle sur des projets à plusieurs développeurs, comme c'est le cas chez HopLunch.
