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

Git est le système de contrôle de version le plus utilisé au monde. Il permet de suivre l'historique de chaque modification apportée au code source, de collaborer à plusieurs développeurs sur un même projet sans conflit, et de revenir à tout moment à une version antérieure du code. 
<br>Git est devenu un outil indispensable dans le développement logiciel moderne : aucun projet professionnel sérieux ne se fait sans gestion de version.

Au-delà du simple suivi de fichiers, Git est un véritable outil de collaboration et de gestion de projet. Les branches permettent de travailler sur des fonctionnalités en isolation, les merge requests (ou pull requests) facilitent la revue de code entre pairs, et les tags permettent de versionner les releases. Combiné à des plateformes comme GitHub ou GitLab, Git devient le pivot central du workflow de développement : écriture du code, revue, intégration continue (CI), déploiement continu (CD) et traçabilité des changements.

Dans un contexte professionnel, la maîtrise avancée de Git fait une différence significative dans la productivité d'une équipe. Savoir résoudre des conflits de merge complexes, utiliser le rebase interactif pour maintenir un historique propre, exploiter les branches de feature et les workflows Git Flow ou GitHub Flow, sont autant de compétences qui fluidifient le travail collaboratif et réduisent les risques d'erreurs en production.

## Mes éléments de preuve

### Mise en place du workflow Git et SemVer chez DGS Création

Lorsque j'ai rejoint DGS Création, l'utilisation de Git était basique : les développeurs committaient directement sur la branche principale sans convention de nommage ni workflow défini. J'ai proposé et mis en place un workflow Git Flow adapté à la taille de l'équipe : une branche `main` pour la production, une branche `develop` pour l'intégration, et des branches de feature nommées selon la convention `feature/nom-de-la-fonctionnalité`. J'ai également introduit le Semantic Versioning (SemVer) pour les releases, avec des tags Git correspondants (v1.0.0, v1.1.0, v1.2.3...). Ce workflow a permis de réduire considérablement les conflits de merge et d'améliorer la traçabilité des changements. Sur le projet Bee'z Pro, par exemple, nous avons pu maintenir un historique Git propre avec plus de 500 commits répartis sur 6 mois de développement, ce qui a facilité le debugging et le suivi de l'évolution du projet. La cliente pouvait consulter les changelogs générés à partir des messages de commit pour suivre l'avancement du développement.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Pipeline CI/CD et déploiement automatisé pour la pointeuse HopLunch

Sur le projet de pointeuse HopLunch, j'ai mis en place un pipeline CI/CD complet avec GitHub Actions. Chaque push sur une branche de feature déclenche automatiquement les tests unitaires (PHPUnit pour le back-end Symfony, tests Playwright pour le front-end NuxtJS) et les vérifications de qualité de code (ESLint, PHPStan). Lorsqu'une merge request est fusionnée dans la branche principale, le pipeline de déploiement se déclenche automatiquement : build de l'application NuxtJS, déploiement sur le serveur de production via des scripts shell personnalisés, et vérification de santé post-déploiement. Ce système m'a permis de déployer en toute confiance des mises à jour en production sans intervention manuelle, tout en garantissant que chaque changement a été testé et validé. En 8 mois de production, aucun déploiement n'a causé de régression, preuve de la fiabilité du pipeline mis en place. Cette expérience m'a convaincu de l'importance d'investir du temps dans l'automatisation dès le début d'un projet.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

Je maîtrise Git de manière experte après plus de 5 ans d'utilisation quotidienne. Cette compétence est transversale : elle intervient dans chaque projet, chaque jour de travail, chaque collaboration. Ma maîtrise couvre les opérations courantes (commit, push, pull, merge, rebase), les opérations avancées (cherry-pick, bisect, reflog, stash, submodules), et la mise en place de workflows collaboratifs adaptés à la taille de l'équipe.

L'importance de Git dans mon métier est fondamentale. Un développeur qui ne maîtrise pas Git perd du temps, crée des conflits et met en danger le travail de ses collègues. À l'inverse, un développeur qui utilise Git efficacement peut travailler en toute confiance, expérimenter sans risque et collaborer fluidement. Ma vitesse d'acquisition a été progressive : des bases en formation, puis une montée en compétences rapide en entreprise face aux problèmes réels (conflits de merge complexes, historiques cassés, déploiements ratés).

Mon conseil : prendre le temps d'apprendre le modèle interne de Git (objets, arbre, commits, références). Comprendre comment Git fonctionne sous le capot permet de résoudre n'importe quel problème, même les plus complexes, et de ne jamais perdre de données.

## Mon évolution

Mon objectif est de continuer à perfectionner mes compétences en CI/CD et en automatisation des pipelines de déploiement. Je souhaite explorer des stratégies de déploiement avancées (blue-green deployment, canary releases) et approfondir ma connaissance des outils de GitOps pour la gestion d'infrastructure as code.

Je m'intéresse également aux bonnes pratiques de contribution open-source (gestion de forks, rebasing, squashing), car je souhaite à terme contribuer à des projets open-source de l'écosystème Symfony ou NuxtJS. La maîtrise avancée de Git est un prérequis pour participer efficacement à ces communautés.
