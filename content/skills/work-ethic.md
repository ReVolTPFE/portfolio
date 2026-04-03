---
slug: work-ethic
name: "Rigueur et sens du détail"
image: "streamline:module-puzzle-3-solid"
isIcon: true
category: "soft"
order: 3
relatedProjects:
  - hoplunch-zae
  - hoplunch-pointeuse
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
---

## Ma définition

La rigueur et le sens du détail se définissent par la capacité à fournir un travail précis, méthodique et orienté qualité, en veillant à ce que chaque élément soit conforme aux attentes et exempt d'erreurs. Dans le développement logiciel, cette compétence se manifeste à plusieurs niveaux : la qualité du code (lisibilité, conventions de nommage, absence de code mort), la fiabilité des fonctionnalités (tests exhaustifs, gestion des cas limites), la cohérence de l'interface utilisateur (alignements, espacement, typographie), et la conformité aux spécifications (chaque fonctionnalité fait exactement ce qui est demandé, ni plus, ni moins).

Dans un environnement professionnel où les erreurs en production peuvent coûter cher (données corrompues, failles de sécurité, perte de confiance client), la rigueur est une assurance qualité intégrée au processus de développement. Un développeur rigoureux produit du code qui passe les tests du premier coup, des interfaces qui correspondent pixel-perfect aux maquettes, et des fonctionnalités qui gèrent correctement les cas d'erreur et les scénarios inattendus.

Le sens du détail est particulièrement critique dans certains domaines : la facturation (un centième d'euro d'erreur multipliée par des milliers de transactions devient significatif), la sécurité (une validation manquante peut ouvrir une faille), et l'expérience utilisateur (un bouton mal placé peut dérouter des centaines d'utilisateurs). Cette compétence n'est pas innée : elle se cultive par la discipline, les méthodes de vérification systématiques et l'expérience des erreurs passées.

## Mes éléments de preuve

### Zéro bug en production sur la pointeuse HopLunch grâce à des tests exhaustifs

Le projet de pointeuse HopLunch est ma plus grande fierté en termes de rigueur. L'application est utilisée quotidiennement par une centaine de livreurs sur les tablettes des dépôts, et la moindre erreur de pointage peut avoir des conséquences sur la paie des livreurs. Avant la mise en production, j'ai testé systématiquement 100% des scénarios possibles : pointage normal, dépointage, double pointage (interdit), pointage sur une mauvaise ville, expiration du token JWT pendant le pointage, coupure réseau pendant la synchronisation, pointage simultané de deux livreurs sur la même tablette. J'ai rédigé des tests unitaires PHPUnit pour chaque endpoint de l'API et des tests fonctionnels Playwright pour les parcours utilisateur critiques. Cette rigueur a payé : après plus de 8 mois en production et des milliers de pointages effectués, l'application n'a connu aucun bug. Pas un seul ticket de support, pas une seule donnée incohérente. Ce résultat est directement lié à l'investissement en temps de test avant la mise en production.

[→ Voir le projet : Pointeuse HopLunch](/projects/hoplunch-pointeuse)

### Gestion rigoureuse de la facturation et des avoirs sur Bee'z Web

Le projet Bee'z Web m'a confronté à un domaine où la rigueur n'est pas optionnelle : la facturation. Chaque facture générée devait être arithmétiquement exacte (montant HT, TVA, montant TTC, marges), juridiquement conforme (numérotation séquentielle sans trou, mentions légales obligatoires), et cohérente avec les contrats associés. J'ai développé un système de tests automatisés spécifiquement pour la facturation : pour chaque scénario de contrat (simple, avec avenant, avec avoir partiel, avec avoir total), un test vérifie que les montants calculés sont exacts au centime près. J'ai également mis en place un système de double vérification : le montant total d'une facture est calculé de deux manières différentes (somme des lignes et calcul global) et une alerte est levée si les résultats divergent. Cette approche a permis de détecter un bug de calcul d'arrondi durant le développement (un écart de 0.01€ sur certaines configurations de TVA) qui aurait pu passer inaperçu sans cette vérification croisée. La cliente a pu commencer à émettre des factures dès la mise en production avec une confiance totale dans les chiffres affichés.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Documentation systématique et code review sur les projets complexes

Sur chacun de mes projets, j'applique une discipline de documentation qui garantit la maintenabilité du code à long terme. Sur le projet ZAE chez HopLunch, par exemple, j'ai documenté chaque commande Symfony avec ses paramètres, ses effets attendus et ses conditions d'exécution, car ces commandes sont exécutées en CRON et un dysfonctionnement silencieux pourrait corrompre les données sans que personne ne s'en aperçoive. Je rédige également des messages de commit descriptifs qui expliquent le "pourquoi" d'un changement, pas seulement le "quoi", ce qui facilite le debugging futur et la compréhension de l'historique du projet. Chez DGS Création, j'ai instauré la pratique de relecture de code avant chaque merge, même lorsque j'étais le seul développeur sur un projet. Cette auto-revue systématique m'a permis de détecter des erreurs qui auraient échappé aux tests automatisés, comme des oublis de validation de données en entrée ou des cas limites non gérés.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

## Mon autocritique

Je suis naturellement rigoureux et attentif aux détails, ce qui est un atout majeur dans mon travail de développeur fullstack. Cette rigueur se manifeste aussi bien dans le code que dans la gestion de projet : respect des délais, suivi des tâches, communication régulière avec les parties prenantes. C'est une compétence que je cultive activement, car je sais qu'elle fait la différence entre un livrable "acceptable" et un livrable "excellent".

L'importance de cette compétence dans mon profil est critique. Sur chacun de mes projets, la rigueur a été un facteur déterminant de la satisfaction client et de la qualité du produit final. L'absence de bugs en production sur la pointeuse, la fiabilité du système de facturation de Bee'z Web, et la robustesse du système de ZAE sont autant de preuves concrètes que cette rigueur porte ses fruits.

Ma leçon la plus importante : le projet Ile aux Copains m'a appris que les tests manuels ne suffisent pas sur les fonctionnalités complexes. J'ai perdu des heures à tester manuellement les formulaires dynamiques, et j'ai quand même laissé passer des bugs. Depuis cette expérience, je teste systématiquement le code de manière automatisée, surtout sur les fonctionnalités critiques. Cette leçon a directement contribué au succès de la pointeuse HopLunch.

## Mon évolution

Je souhaite formaliser davantage mes processus de test et de contrôle qualité en adoptant des pratiques de Test-Driven Development (TDD) sur mes futurs projets. L'objectif est d'intégrer la rigueur directement dans le processus de développement plutôt que de la reléguer à une étape de vérification finale.

Je m'intéresse également aux outils d'analyse statique de code (PHPStan niveau maximum, ESLint strict) pour automatiser la détection des problèmes de qualité et réduire la charge cognitive liée à la revue de code. À moyen terme, je vise à mettre en place des pipelines de qualité complètes sur chaque projet (tests unitaires, tests d'intégration, analyse statique, couverture de code) pour garantir un niveau de rigueur constant indépendamment des contraintes de temps.
