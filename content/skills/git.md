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
<br>J'ai donc mis en place un compte GitHub entreprise et des comptes individuels pour chaque développeur. Mais cela ne suffit pas, car Git permet bien plus de choses.

Pour améliorer les processus, j'ai mis en place une convention de nommage et un workflow d'utilisation de Git adapté à la taille de l'équipe :
- Une branche `main` pour la production
- Une branche `develop` pour l'intégration et la pré-production
- Des branches de features nommées selon la convention `feature/nom-de-la-fonctionnalité`
- Introduction du Semantic Versioning (SemVer) pour les releases, avec des tags Git correspondants (v1.0.0, v1.1.0, v1.2.3...).

Résultat : Ce workflow a permis aux développeurs de travailler à plusieurs sur les mêmes projets sans se marcher dessus. Il a aussi permis d'améliorer la traçabilité des changements. 
<br>Sur le projet Bee'z Pro par exemple, j'ai pu maintenir un historique Git propre avec plus de 200 commits répartis sur plusieurs mois de développement au fil des versions. Git a facilité le debugging et le suivi de l'évolution du projet grâce aux documentations et changelogs que j'ai créé.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Pipeline CI/CD et déploiement automatisé pour la pointeuse HopLunch

Chez HopLunch, j'ai développé un outil de pointeuse servant à comptabiliser les heures travaillées par les livreurs de l'entreprise.

Pour garantir un projet propre j'ai écrit des tests End-to-End, qui s'occupent automatiquement sur un vrai navigateur de vérifier que le site fonctionne.
<br>Je souhaitais être certain de ne rien casser au fil des développements donc j'ai initialisé un pipeline de CI/CD sur le repository GitLab de l'entreprise. Ce pipeline se configure via un fichier de configuration en langage YAML automatiquement interprété par GitLab.

La partie CI consistait à vérifier qu'après chaque changement de code :
- le projet se construit correctement
- la qualité de code est conservée (ESLint, PHPStan)
- que les tests automatisés soient toujours valides (tests PHPUnit pour l'API Symfony, tests Playwright End-to-End pour l'interface NuxtJS)

J'ai aussi configuré une partie CD qui permet qu'à chaque fusion de code sur la branche `develop`, il soit directement envoyé sur le serveur de pré-production. De même à chaque fusion sur `main`, cette fois-ci le code est automatiquement envoyé sur le site web en production.

Résultat : Ce système m'a permis de déployer des mises à jour en production sans intervention manuelle. Les tests ont garanti qu'aucun changement ne casse le site, et en 1 an passé en production, aucun déploiement n'a causé de régression, preuve de la fiabilité du pipeline mis en place.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. Git permet aux développeurs de gagner énormément de temps tous les jours notamment via son système de fusion de code et de gestion de conflits.
<br>Je l'utilise depuis le lycée pour chacun de mes sites. De gros projets professionnels m'ont permis d'utiliser des commandes Git avancées à de nombreuses reprises, et aujourd'hui je suis confiant dans mes capacités avec l'outil.

### Vitesse d'acquisition

Lorsque j'étais encore au lycée, Git me semblait compliqué, donc pendant longtemps je ne connaissais que la base avec `git pull` et `git push` sur une seule branche.
<br>C'est lors de ma première alternance que j'ai appris à utiliser les systèmes de branches et de fusion du code via `git merge` notamment. Depuis, j'ai appris énormément et j'utilise aujourd'hui Git tous les jours dans le terminal.

### Recul et conseils

Avec le temps, j'ai appris à me sortir de situations tendues comme des conflits de merge ou le rebase interactif pour nettoyer l'historique d'une branche.
Récemment j'ai appris à utiliser le cherry-pick pour récupérer des commits perdus dans l'historique.

Mon conseil est de prendre le temps d'apprendre le modèle de Git (objets, arbre, commits, références). Comprendre comment il fonctionne sous le capot permet de résoudre n'importe quel problème, et de ne jamais perdre de données.

## Mon évolution

Mon objectif est de continuer à perfectionner mes compétences en CI/CD et en automatisation des pipelines de déploiement. 
<br>Je compte m'exercer sur des stratégies de déploiement avancées (blue-green deployment, canary releases) et approfondir ma connaissance des outils de DevOps autour de Git.

À plus long terme, je compte contribuer à des projets open-source et une bonne maîtrise de Git est tout aussi importante qu'une bonne maîtrise du code pour accomplir cela.
