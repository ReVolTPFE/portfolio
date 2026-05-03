---
slug: git
name: "Git"
image: "/img/logos/Git.webp"
isIcon: false
category: "technical"
order: 6
level: 4
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

Git est l'outil de gestion de versions de code que j'utilise au quotidien. Il garde l'historique du code et permet surtout de travailler efficacement à plusieurs sur le même projet.

Plus qu'un simple suivi des fichiers, Git permet de gérer tout le workflow de développement : 
- Création de branches pour développer une feature dans un environnement isolé.
- Merge et rebase du code avec gestion des conflits pour fusionner les changements.
- Avec des plateformes comme GitHub ou GitLab, Git permet la revue de code via des Pull/Merge Requests, l'hébergement des projets (appelés repositories), et la mise en place de pipelines CI/CD pour construire, tester et déployer une application automatiquement.

## Mes éléments de preuve

### Mise en place du workflow Git et SemVer chez DGS Création

Lorsque j'ai rejoint DGS Création, aucun système de gestion de versions n'était utilisé. Tous les projets en développement étaient stockés sur un serveur en interne sur lequel chaque développeur travaillait en FTP/SSH depuis son éditeur de code.

La moindre erreur de manipulation sur le serveur, comme une commande appliquée au mauvais endroit, et tout pouvait être perdu. C'est pourquoi j'ai mis en place Git sur les projets sur lesquels je travaillais, et proposé à l'équipe de faire de même.
<br>J'ai donc mis en place un compte GitHub entreprise et des comptes individuels pour chaque développeur. Mais cela ne suffit pas, car mal utilisé, Git n'apporte pas grand chose de plus.

Pour améliorer les processus, j'ai mis en place une convention de nommage et un workflow d'utilisation de Git adapté à la taille de l'équipe :
- Une branche `main` pour la production
- Une branche `develop` pour l'intégration et la pré-production
- Des branches de features nommées selon la convention `feature/nom-de-la-fonctionnalité`
- Introduction du Semantic Versioning (SemVer) pour les releases, avec des tags Git correspondants (v1.0.0, v1.1.0, v1.2.3...).

Résultat : Ce workflow a permis aux développeurs de travailler à plusieurs sur les mêmes projets sans se marcher dessus. Il a aussi permis d'améliorer la traçabilité des changements. 
<br>Sur le projet Bee'z Pro par exemple, j'ai pu maintenir un historique Git propre avec plus de 200 commits répartis sur plusieurs mois de développement au fil des versions. Git a facilité le debugging et le suivi de l'évolution du projet grâce aux documentations et changelogs que j'ai créé.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Pipeline CI/CD et déploiement automatisé pour la pointeuse HopLunch

Sur le projet de pointeuse HopLunch, j'ai mis en place un pipeline CI/CD complet avec GitHub Actions. Chaque push sur une branche de feature déclenche automatiquement les tests unitaires (PHPUnit pour le back-end Symfony, tests Playwright pour le front-end NuxtJS) et les vérifications de qualité de code (ESLint, PHPStan). Lorsqu'une merge request est fusionnée dans la branche principale, le pipeline de déploiement se déclenche automatiquement : build de l'application NuxtJS, déploiement sur le serveur de production via des scripts shell personnalisés, et vérification de santé post-déploiement. Ce système m'a permis de déployer en toute confiance des mises à jour en production sans intervention manuelle, tout en garantissant que chaque changement a été testé et validé. En 8 mois de production, aucun déploiement n'a causé de régression, preuve de la fiabilité du pipeline mis en place. Cette expérience m'a convaincu de l'importance d'investir du temps dans l'automatisation dès le début d'un projet.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. 

### Vitesse d'acquisition

### Recul et conseils



Avec le temps, j'ai appris à me sortir des situations un peu tendues : conflits de merge, rebase interactif pour nettoyer l'historique avant une PR, cherry-pick pour récupérer un commit perdu. Ce sont ces petits réflexes qui font gagner du temps à toute l'équipe.

Je maîtrise Git de manière experte après plus de 5 ans d'utilisation quotidienne. Cette compétence est transversale : elle intervient dans chaque projet, chaque jour de travail, chaque collaboration. Ma maîtrise couvre les opérations courantes (commit, push, pull, merge, rebase), les opérations avancées (cherry-pick, bisect, reflog, stash, submodules), et la mise en place de workflows collaboratifs adaptés à la taille de l'équipe.

L'importance de Git dans mon métier est fondamentale. Un développeur qui ne maîtrise pas Git perd du temps, crée des conflits et met en danger le travail de ses collègues. À l'inverse, un développeur qui utilise Git efficacement peut travailler en toute confiance, expérimenter sans risque et collaborer fluidement. Ma vitesse d'acquisition a été progressive : des bases en formation, puis une montée en compétences rapide en entreprise face aux problèmes réels (conflits de merge complexes, historiques cassés, déploiements ratés).

Mon conseil : prendre le temps d'apprendre le modèle interne de Git (objets, arbre, commits, références). Comprendre comment Git fonctionne sous le capot permet de résoudre n'importe quel problème, même les plus complexes, et de ne jamais perdre de données.

## Mon évolution

Mon objectif est de continuer à perfectionner mes compétences en CI/CD et en automatisation des pipelines de déploiement. Je souhaite explorer des stratégies de déploiement avancées (blue-green deployment, canary releases) et approfondir ma connaissance des outils de GitOps pour la gestion d'infrastructure as code.

Je m'intéresse également aux bonnes pratiques de contribution open-source (gestion de forks, rebasing, squashing), car je souhaite à terme contribuer à des projets open-source de l'écosystème Symfony ou NuxtJS. La maîtrise avancée de Git est un prérequis pour participer efficacement à ces communautés.
