---
slug: vue-nuxt
name: "VueJS/NuxtJS"
image: "/img/logos/NuxtJS.webp"
isIcon: false
category: "technical"
order: 3
level: 3
relatedProjects:
  - hoplunch-pointeuse
  - hoplunch-zae
---

## Ma définition

VueJS est un framework JavaScript progressif qui permet de construire des interfaces utilisateur réactives et modulaires grâce à un système de composants. Sa courbe d'apprentissage douce, sa documentation exemplaire et son écosystème riche (Pinia pour le state management, Vue Router pour la navigation, Composition API pour la logique réutilisable) en font l'un des frameworks front-end les plus appréciés par les développeurs. VueJS excelle dans la création d'applications interactives où les données changent en temps réel, grâce à son système de réactivité qui met à jour automatiquement l'interface lorsque les données sous-jacentes évoluent.

NuxtJS est le méta-framework construit au-dessus de VueJS qui ajoute des fonctionnalités essentielles pour la production : le Server-Side Rendering (SSR) pour un meilleur SEO et des temps de chargement plus rapides, la génération de sites statiques, le routage automatique basé sur le système de fichiers, et un système de modules extensible. NuxtJS est particulièrement adapté aux applications web professionnelles qui nécessitent à la fois performance, SEO et une architecture maintenable. Avec Nuxt 3, le framework a adopté TypeScript nativement, le moteur Nitro pour le serveur, et propose des fonctionnalités modernes comme les composables, l'auto-import et Nuxt Content pour la gestion de contenu.

Dans le contexte actuel du développement web, VueJS/NuxtJS représente une compétence stratégique pour les développeurs fullstack. La capacité de construire des applications front-end complètes, SEO-friendly et performantes avec un seul framework est un avantage considérable, notamment pour les entreprises SaaS et les plateformes B2B/B2C. Chez HopLunch, cette compétence me permet de développer des applications front-end isolées qui communiquent avec le back-end Symfony via des API REST, offrant ainsi une architecture découplée et scalable.

## Mes éléments de preuve

### Création de la pointeuse HopLunch : mon premier projet NuxtJS professionnel de A à Z

La pointeuse des livreurs HopLunch a été mon premier projet NuxtJS complet en environnement professionnel. L'enjeu était de taille : remplacer un système Legacy obsolète par une application moderne, rapide et sécurisée, installée sur les tablettes des dépôts de livraison. J'ai dû monter en compétences rapidement sur NuxtJS tout en gérant le projet de bout en bout (cahier des charges, développement, tests, déploiement). J'ai structuré l'application avec la Composition API de Vue 3, mis en place un store Pinia pour gérer l'état global (livreurs connectés, statut de pointage, ville sélectionnée), et développé un système de communication avec l'API Symfony via des composables réutilisables. La gestion de l'authentification JWT a été un défi particulier : j'ai implémenté un middleware NuxtJS qui vérifie automatiquement la validité du token et redirige vers la page de connexion si nécessaire, avec un système de refresh token transparent pour l'utilisateur. Le résultat : une application déployée avec succès, utilisée quotidiennement par une centaine de livreurs, et qui n'a connu aucun bug depuis sa mise en production. Ce projet m'a fait passer d'un niveau débutant à un niveau confirmé en VueJS/NuxtJS en quelques mois de pratique intensive.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

### Contribution à la refonte du site HopLunch.com en NuxtJS

Après le succès de la pointeuse, j'ai été impliqué dans le développement du site principal [hoplunch.com](https://hoplunch.com), une application NuxtJS existante bien plus complexe. Mon rôle a consisté à ajouter des pages de contenu, travailler sur le catalogue de restaurants avec un système de filtres dynamiques, et améliorer la communication avec l'API back-end. Cette expérience m'a confronté à un codebase NuxtJS existant, avec ses conventions, ses composables partagés et son architecture établie. J'ai dû m'adapter rapidement au style de code de l'équipe et comprendre les choix architecturaux déjà en place. J'ai notamment travaillé sur l'optimisation des appels API en implémentant un système de cache intelligent avec `useAsyncData` et `useFetch`, réduisant le nombre de requêtes serveur et améliorant sensiblement les temps de chargement des pages catalogue. Cette expérience sur un projet NuxtJS à plus grande échelle a complété mon apprentissage en me confrontant aux problématiques de performance, de SEO et de travail collaboratif sur un même codebase front-end.

### Développement de ce portfolio personnel avec NuxtJS et Nuxt Content

Ce portfolio est lui-même un projet NuxtJS qui m'a permis d'explorer des fonctionnalités avancées du framework. J'utilise Nuxt Content pour gérer les projets et les compétences sous forme de fichiers Markdown, transformés automatiquement en pages web avec un routage dynamique. J'ai configuré TypeScript nativement, mis en place TailwindCSS avec un design system personnalisé, et optimisé les images et le SEO via les méta-tags dynamiques de NuxtJS. La fonctionnalité Swiper pour le carrousel d'images des projets, le formulaire de contact via Formspree, et la navigation responsive sont autant de composants que j'ai développés en Vue 3 avec la Composition API. Ce projet me sert de terrain d'expérimentation continue pour tester les nouvelles fonctionnalités de NuxtJS et VueJS avant de les appliquer en contexte professionnel.

## Mon autocritique

J'acquiers actuellement une maîtrise solide de VueJS/NuxtJS à travers mes projets professionnels et personnels. Bien que mon expertise soit plus récente que sur PHP/Symfony (environ 1 an et demi de pratique intensive contre 3 ans et demi), ma progression a été rapide grâce à ma solide base en JavaScript et à ma compréhension des architectures web. Je me considère à un niveau confirmé, capable de développer des applications NuxtJS complètes de manière autonome, mais conscient qu'il me reste des domaines à approfondir, notamment le SSR avancé, les stratégies de cache complexes et les tests front-end (Vitest, Playwright).

Cette compétence prend une importance croissante dans mon profil. Le marché du développement web évolue vers des architectures découplées où le front-end est une application à part entière. Maîtriser VueJS/NuxtJS en complément de Symfony me positionne comme un développeur véritablement fullstack, capable de prendre en charge un projet de bout en bout, du modèle de données à l'interface utilisateur.

Mon conseil : pour un développeur PHP/Symfony qui souhaite monter en compétences sur le front-end, VueJS est le choix le plus naturel grâce à sa courbe d'apprentissage progressive. Commencer par un petit projet personnel (comme un portfolio) permet d'apprivoiser le framework sans pression avant de l'utiliser en production.

## Mon évolution

Mon objectif à moyen terme est de renforcer ma maîtrise des fonctionnalités avancées de NuxtJS : le SSR avec gestion fine du cache, les stratégies de pre-fetching et pre-rendering, l'optimisation des Web Vitals (LCP, FID, CLS), et les tests end-to-end avec Playwright. Je souhaite également approfondir ma connaissance de l'écosystème Vue (VueUse, Pinia avancé, Vue Query) pour proposer des solutions front-end toujours plus robustes.

Je perfectionne actuellement mon utilisation des stores Pinia avec des patterns avancés (store composables, plugins), des composables réutilisables pour la logique métier partagée, et des middlewares NuxtJS pour la gestion des autorisations. À terme, je vise un niveau d'expertise en VueJS/NuxtJS équivalent à celui que j'ai en PHP/Symfony, me permettant de piloter des choix architecturaux front-end sur des projets d'envergure.
