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

VueJS est un framework JavaScript progressif. Il permet de construire des interfaces utilisateur réactives et modulaires grâce à un système de composants. 
<br>L'aspect progressif signifie qu'on peut simplement brancher VueJS sur une page de n'importe quel site avec un `<script>`. Il est donc possible d'avoir un site WordPress avec une seule page réactive qui contient un formulaire dynamique par exemple.

Son aspect le plus utilisé reste tout de même en tant qu'application VueJS à part entière. Il est très facile à prendre en main grâce à la documentation très complète, et son écosystème de modules (Pinia, Vue Router...). Ses plus grandes forces sont les changements de données en temps réel actualisés sur les interfaces, et son système de composants réutilisables.

NuxtJS est le méta-framework construit au-dessus de VueJS. Il ajoute des fonctionnalités essentielles pour la production :
- Le Server-Side Rendering (SSR) pour un meilleur SEO et des temps de chargement plus rapides
- La génération de sites statiques
- Le routage automatique basé sur le système de fichiers
- Un système de modules extensible 

Chez HopLunch, c'est avec NuxtJS que je développe des applications front-end isolées qui communiquent avec le back-end Symfony via une API REST.

## Mes éléments de preuve

### Pointeuse HopLunch : mon premier projet pro NuxtJS de A à Z

Le développement de la nouvelle pointeuse pour les livreurs de HopLunch a été mon premier projet NuxtJS en environnement professionnel.
<br>Cette pointeuse sert à connaître les dates et heures d'arrivées et de départs des livreurs de l'entreprise. Cette application aide le service RH pour gérer les fiches de paies, et permet la validation de certaines primes par exemple.

Sur ce projet j'ai reçu carte blanche sur la technologie à utiliser. L'ancienne pointeuse était sur notre legacy PHP, dont on voulait se séparer. La refonte devait aussi permettre d'avoir une interface plus moderne et de résoudre des bugs comme le double pointage.

Je me suis donc formé en parallèle du développement de l'application, car je connaissais les bases, mais m'intéressait à des fonctionnalités avancées. J'ai structuré l'application avec la Composition API de Vue 3. Elle permet d'avoir pour chaque composant, son HTML, son JS et son CSS customisés et isolés.
<br>J'ai mis en place un store Pinia pour gérer l'état global d'une tablette dans un dépôt (livreurs connectés, statut de pointage, ville sélectionnée).
L'interface communique avec l'API Symfony de HopLunch. 

Même si cette application est privée et protégée par un verrouillage IP, il ne faut pas minimiser la sécurité. J'ai donc géré l'authentification JWT entre l'interface NuxtJS et l'API via un middleware NuxtJS qui vérifie automatiquement la validité du token et le renouvelle si nécessaire.

Lorsque notre API est en maintenance, j'ai aussi fait en sorte d'envoyer automatiquement l'information aux tablettes sur l'application lorsqu'un appel API est fait depuis la pointeuse. Elle se met alors sur l'écran de maintenance et toutes les minutes vérifie si l'API est de nouveau disponible.

Résultat : l'application a été déployée avec succès, et elle est utilisée quotidiennement par une centaine de livreurs. Les tests End-to-End que j'avais mis en place sur toute l'application, ont garanti zéro bug depuis sa mise en production.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

### Développement de ce portfolio avec NuxtJS et Nuxt Content

Ce portfolio est le tout premier projet NuxtJS que j'ai développé. Il m'a permis d'explorer des fonctionnalités du framework.

Dans ma définition, j'expliquais que VueJS et NuxtJS ont un grand écosystème de modules. C'est pourquoi j'ai utilisé l'un d'eux s'appelant "Nuxt Content" pour ce portfolio. 

Il me permet d'écrire mes compétences et mes projets dans des fichiers "Markdown". C'est très pratique, car je peux uniquement me concentrer sur le contenu. Je peux facilement ajouter un titre avec des `# Mon titre`, mettre en gras avec `**mon mot**` etc.
<br>Tous ces contenus sont transformés automatiquement en pages web avec un routage dynamique. 

J'ai configuré TypeScript nativement, mis en place TailwindCSS avec un design system personnalisé, et organisé le site en composants de sections, incluant des composants de blocs NuxtJS. La page d'accueil a par exemple un composant "section projet" qui contient 5 composants "carte projet".

La fonctionnalité Swiper pour le carrousel d'images des projets, le formulaire de contact via Formspree sont d'autres exemples de composants que j'ai développés avec la Composition API.

Résultat : J'ai rapidement pu développer le site statique avec son design et ses différentes sections. J'ai ensuite pu me concentrer sur l'aspect le plus important, le contenu du portfolio. Le gain de temps énorme provient de la rédaction en Markdown qui me permet de lire mon contenu facilement et d'en rajouter sans devoir mettre manuellement des balises HTML toutes les lignes.

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 3/5. En environnement professionnel et personnel, j'ai pu consolider ma maîtrise de VueJS/NuxtJS très rapidement à travers plusieurs projets.
<br>J'ai moins d'expérience sur ce framework qu'en back-end sur Symfony par exemple, mais travailler avec NuxtJS m'a appris à avoir un profil fullstack quand les projets le nécessitent.

### Vitesse d'acquisition

J'ai rapidement progressé, car je connaissais déjà bien JavaScript depuis des années. En quelques semaines, j'ai pu développer des applications complètes et fonctionnelles en production. 

### Recul et conseils

Je n'ai pas énormément de recul sur cette technologie car je la maîtrise depuis environ un an au moment où j'écris ces lignes. Mon conseil en tant que développeur spécialisé en back-end est de continuer à me former, parce qu'aujourd'hui le développement fullstack est plus que jamais une compétence requise par énormément d'entreprises.

## Mon évolution

Je sais que j'ai encore une grande marge de progression, c'est pourquoi je continue de me former et de lire la documentation de NuxtJS notamment quand je développe avec ce framework.

À court/moyen terme, je compte renforcer ma maîtrise des fonctionnalités avancées de NuxtJS. Cela inclut le SSR avec gestion du cache, les stratégies de pre-fetching et pre-rendering, et les tests end-to-end avec Playwright. 
