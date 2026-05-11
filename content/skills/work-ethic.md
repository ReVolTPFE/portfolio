---
slug: work-ethic
name: "Rigueur et sens du détail"
image: "streamline:module-puzzle-3-solid"
isIcon: true
category: "soft"
order: 3
level: 5
relatedProjects:
  - hoplunch-zae
  - hoplunch-pointeuse
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
---

## Ma définition

Ma définition de la rigueur et du sens du détail est la capacité à fournir un travail précis, méthodique, et de qualité. En programmation, cette compétence est utile à plusieurs niveaux : 
- la qualité du code (lisibilité, conventions, absence de code mort)
- la fiabilité des fonctionnalités (tests exhaustifs, gestion des cas limites)
- la cohérence de l'interface utilisateur (alignements, espacements, thèmes de couleurs)

En entreprise, les erreurs en production peuvent coûter cher (données corrompues, failles de sécurité, perte de confiance des clients). 
<br>Le sens du détail est donc critique dans certains domaines :
- la facturation (un centième d'euro d'erreur multipliée par des milliers de transactions devient significatif)
- la sécurité (une validation manquante peut ouvrir une faille)
- l'expérience utilisateur (un bouton mal placé peut dérouter des milliers d'utilisateurs)

## Mes éléments de preuve

### Documentation systématique et code review sur les projets

Sur chacun de mes projets, je rédige toujours une documentation qui garantit la maintenabilité du code à long terme.

Sur le projet de refonte des ZAE (Zone d'Activité Économique) chez HopLunch par exemple, j'ai documenté chaque commande Symfony avec ses paramètres, ses effets attendus et ses conditions d'exécution. Ces commandes sont exécutées en CRON et un dysfonctionnement silencieux pourrait corrompre les données sans que personne ne s'en aperçoive. 

Je rédige aussi des messages de commits descriptifs qui expliquent le "pourquoi" et pas seulement le "quoi" d'un changement.

Chez HopLunch, nous faisons faire relire notre code avant chaque merge. Ces revues systématiques nous permettent de détecter des erreurs, de l'optimisation possible ou simplement de prendre connaissance d'une fonctionnalité.

Résultat : Chez HopLunch, plus de 99% du code déployé en production ne créé aucun problème, car chaque développeur a la rigueur d'écrire des tests automatisés sur les fonctionnalités complexes, et effectue de la revue de code qui élimine systématiquement les erreurs.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

### Zéro bug en production sur la pointeuse HopLunch grâce aux tests

Le projet de pointeuse de HopLunch est ma plus grande fierté lorsque l'on parle de rigueur. L'application est utilisée quotidiennement par une centaine de livreurs sur les tablettes des dépôts, et la moindre erreur de pointage peut avoir des conséquences sur la paie des livreurs. 

Avant la mise en production, j'ai testé systématiquement 100% des scénarios possibles : pointage normal, dépointage, double pointage (interdit), pointage sur une mauvaise ville, expiration du token JWT pendant le pointage, coupure réseau durant la synchronisation, pointage simultané de deux livreurs sur la même tablette. 

J'ai rédigé des tests unitaires PHPUnit pour chaque endpoint de l'API et des tests fonctionnels Playwright pour tous les parcours utilisateur possibles. 

Résultat : Cette rigueur et ce sens du détail ont payé, car après plus d'un an en production et plus de 40 000 pointages effectués, l'application n'a connu aucun bug, aucun ticket de support, aucune donnée incohérente. 
<br>Ce résultat vient directement du temps investi dans l'écriture des tests automatisés avant la mise en production.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 5/5. Depuis tout petit j'ai toujours mis un point d'honneur à faire les choses bien et jusqu'au bout.
<br>Je suis donc naturellement rigoureux et attentif aux détails. C'est un gros atout dans le travail de développeur, car cela permet de prévoir les échéances des tâches, de coder proprement, de communiquer efficacement avec les interlocuteurs.

### Vitesse d'acquisition

Ma rigueur a toujours été un facteur important dans la réalisation de mes projets, et il n'y a pas eu de vitesse d'acquisition particulière vu que je la cultive depuis tout petit.

### Recul et conseils

Avec le recul, je dirais que c'est la compétence que je maîtrise le mieux et qui est peut-être la plus importante. Les clients de mes projets ont toujours été satisfaits et ont à chaque fois mis en avant ce travail rigoureux et mon sens du détail.

En revanche, le conseil suivant pour moi-même, est de continuer à cultiver cette compétence et de rester humble pour toujours produire des livrables de la meilleure qualité possible dans le futur.

## Mon évolution

Pour être toujours plus efficace et rigoureux, je pense essayer le Test-Driven Development (TDD) sur mes futurs projets. De cette manière, je pourrai alors être encore plus concis et précis sur les fonctionnalités que je développe.

Je m'intéresse également aux outils d'analyse statique de code (PHPStan dans ses niveaux maximum, ESLint strict). L'idée dans le futur est d'automatiser la détection des problèmes de qualité et de réduire la charge cognitive des revues de code.
