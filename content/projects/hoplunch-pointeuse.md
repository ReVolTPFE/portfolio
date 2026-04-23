---
slug: hoplunch-pointeuse
title: "Création de A à Z d'un système de pointeuse + gestion de projet"
description: "Application interne de pointage pour les livreurs de HopLunch, permettant d'enregistrer les heures d'arrivée et de départ, tout en centralisant et sécurisant les données pour le service RH."
companyProject: "Pointeuse des livreurs de HopLunch"
company: "HopLunch"
date: "2025"
pending: false
trending: true
image: "/img/projects/hoplunch-pointeuse/2.png"
images:
  - src: "/img/projects/hoplunch-pointeuse/1.png"
    alt: "Page d'accueil de la pointeuse"
  - src: "/img/projects/hoplunch-pointeuse/2.png"
    alt: "Liste des livreurs d'une ville"
  - src: "/img/projects/hoplunch-pointeuse/3.png"
    alt: "Page de pointage d'un livreur"
technologies:
  - icon: "mdi:language-php"
    text: "PHP"
  - icon: "mdi:symfony"
    text: "Symfony"
  - icon: "mdi:language-typescript"
    text: "TypeScript"
  - icon: "mdi:vuejs"
    text: "NuxtJS"
  - icon: "mdi:tailwind"
    text: "TailwindCSS"
  - icon: "mdi:lock"
    text: "JWT Security"
actors:
  client: "HopLunch"
  developer: "Moi-même"
  projectManager: "Moi-même (Chef de projet & Développeur)"
tags:
  - "Gestion de projet"
  - "Développement Web"
skillLinks:
  - link: "html-twig"
    text: "HTML/Twig"
  - link: "sass-tailwind"
    text: "SASS/Tailwind"
  - link: "vue-nuxt"
    text: "VueJS/NuxtJS"
  - link: "php-symfony"
    text: "PHP/Symfony"
  - link: "mysql"
    text: "MySQL"
  - link: "git"
    text: "Git"
demoLink: ""
---

## Présentation du projet

Ce projet est la refonte de la pointeuse HopLunch. C'est une application web interne que j'ai pu concevoir en partant de zéro, afin de remplacer l'ancienne pointeuse obsolète du Legacy de l'entreprise.

Le rôle de cette application est très important, car il consiste à permettre aux livreurs de pointer leurs arrivées et leurs départs dans les dépôts logistiques chaque jour. Ces données sont transmises en temps réel au service RH pour permettre un calcul précis des heures travaillées et ainsi rédiger des bulletins de paie fiables.

L'architecture est moderne et découplée. Le front-end a été construit avec NuxtJS 3 et TypeScript en mode SPA (Single Page Application). Le back-end est une extension de l'API globale de HopLunch basée sur Symfony 6 et sécurisée par tokens JWT et voters Symfony.

L'interface intègre la charte graphique de HopLunch et se structure autour de deux onglets : Pointage et Dépointage. Lorsqu'un livreur pointe, il devient grisé dans le premier onglet et peut alors pointer son départ dans le second, grâce à la synchronisation en temps réel via Pinia.

Ce projet est différent des autres dans mon portfolio : c'est le premier que j'ai géré de bout en bout, en prenant les rôles de chef de projet, de développeur et de devops.

## Objectifs

La raison d'être de cette refonte de zéro, vient de plusieurs objectifs :

- **Supprimer la dépendance au Legacy** en isolant la pointeuse dans une application front-end dédiée, communiquant avec le back-end Symfony via une API REST. Cela nous permet de faire évoluer la pointeuse indépendamment du reste du SI interne.

- **Concevoir une interface intuitive et rapide**, optimisée pour les tablettes des dépôts : boutons suffisamment grands, confirmations visuelles claires, temps de chargement minimal. N'importe quel livreur doit pouvoir utiliser l'application sans formation.

- **Sécuriser l'architecture**, pour éviter les pointages en dehors des dépôts. L'authentification JWT doit limiter l'accès aux dépôts autorisés, et chaque action doit être tracée.

- **Automatiser le déploiement et l'intégration continue** via la CI/CD de GitLab et des scripts shell, pour livrer des mises à jour rapidement et sans risque de régression via l'ajout de tests automatisés.

- **Fiabiliser les données RH** en éliminant les erreurs de saisie et les incohérences qui obligeaient le service RH à vérifier et corriger manuellement les données chaque semaine.

## Contexte

HopLunch est une entreprise qui permet aux salariés d'entreprises de commander et de se faire livrer les plats de restaurants locaux tous les midis via son site internet. 
<br>HopLunch est actuellement présente dans 8 villes françaises et leurs périphéries (Strasbourg, Metz, Lille, Nantes, Montpellier, Grenoble, Rennes, Aix-en-Provence). 

Chaque jour, une centaine de livreurs se présentent dans les dépôts logistiques pour livrer leurs tournées. Le pointage (heure d'arrivée et de départ) est une donnée critique pour le service RH, qui l'utilise pour calculer les heures travaillées, gérer les absences et rédiger les bulletins de paie.

Le système en place reposait sur un module intégré au Legacy, l'ancienne application monolithique de HopLunch. Ce module, développé plusieurs années auparavant, n'a jamais été maintenu. Son interface est vieillissante et pas ergonomique : boutons trop petits, aucune confirmation visuelle... Les livreurs se trompaient régulièrement, car il n'y avait aucun mécanisme bloquant le double pointage, et en cas de réseau faible, ils cliquent parfois plusieurs fois sur le bouton permettant de pointer, ce qui les dépointe directement.

Étant donné, que l'on souhaite progressivement supprimer le legacy et ses dépendances, c'est le moment de recréer un système fiable capable de fonctionner indépendamment du Legacy tout en s'intégrant au SI via une API.

Pour valider mon alternance de BAC+5, j'avais notamment une grille de compétences à valider en entreprise. Tout ce qui concernait le développment est traité tous les jours dans mon métier, mais ce projet était l'occasion parfaite pour moi, de travailler sur d'autres aspects :
- les estimations financières et de temps
- la relation client et le cadrage de réunions
- la gestion globale d'un projet
- le devops autour du projet

Ce projet, ni trop petit, ni trop grand, était parfait pour valider ces compétences. Mon tuteur d'apprentissage m'a donc laissé carte blanche.

### Acteurs et interactions

Ce projet a impliqué plusieurs parties prenantes :
- Le service RH, qui définissait les besoins en termes de données de pointage et de fiabilité
- Mon tuteur d'apprentissage chez HopLunch (le lead dev), qui validait les orientations stratégiques et le planning proposé
- Les responsables de dépôt, utilisateurs clés qui ont participé aux phases de test et de validation
- Les livreurs, utilisateurs finaux de l'application au quotidien
- Moi-même, à la fois chef de projet, développeur et devops

En tant que chef de projet, j'ai pu animer les réunions de cadrage avec les différents acteurs, mais aussi hebdomadaires avec mon tuteur qui jouait le rôle de client final. J'ai donc présenté les avancées et recueilli les retours. Les responsables de dépôt étaient impliqués pendant la phase de tests pour valider l'ergonomie et la fiabilité de la nouvelle application.

## Enjeux

**Fiabilité métier :** Aucune défaillance n'était permise, car cela impacte directement le calcul des heures travaillées et la paie des livreurs. Le système devait être garanti fiable dès la mise en production.

**Résistance au changement :** Remplacer un outil existant, même s'il génère des frictions, génère de la résistance à cause des habitudes prises. Je devais donc produire un outil suffisamment intuitif pour que son adoption soit naturelle.

**Gestion de projet :** C'était mon premier projet géré de bout en bout. Je devais mettre en pratique ce que j'ai appris dans mes cours pour planifier, estimer, communiquer avec les parties prenantes et définir les priorités.

**Intégration au SI existant :** La nouvelle pointeuse devait coexister temporairement avec le Legacy pendant la phase de transition. Cela permettait de revenir sur l'ancienne application si la nouvelle rencontrait un problème au déploiement.

## Risques

### Risques techniques

**Régression lors de la migration :** Si la nouvelle pointeuse rencontrait un problème au déploiement, les livreurs et le service RH ne feraient pas confiance à la nouvelle application. Pour mitiger ce risque, j'ai prévu dès le cahier des charges, de tester automatiquement et de bout en bout, 100% des actions possibles sur la pointeuse.

**Conditions d'utilisation réelles :** La pointeuse est utilisée dans des dépôts où de nombreux cas limites étaient possibles : coupure réseau pendant un pointage, double pointage, expiration JWT en cours d'utilisation. Chacun de ces scénarios pouvait provoquer des pertes de données. J'ai donc mis en place des mécanismes de retry automatique et des messages d'erreur explicites.

### Risques projet

**Délais non tenus :** Pour mon premier projet géré de bout en bout, le risque de sous-estimation était élevé. Pour faire face à ce risquen j'ai découpé le projet en sprints hebdomadaires avec des livrables concrets. Chaque livrable était lui-même découpé en sous-tâches permettant d'estimer plus facilement le travail à effectuer.

**Rejet par les utilisateurs :** Les responsables de dépôts étaient heureux d'apprendre la refonte de la pointeuse, mais ce risque de rejet était présent en cas d'application non ergonomique ou non fiable. J'ai donc créé l'application la plus simple et intuitive possible.

## Les étapes du projet

Le projet s'est déroulé en sprints hebdomadaires selon une approche Agile, structuré en quatre phases.

### Phase 1 : Cadrage, planning et cahier des charges (1e semaine)

La toute première étape a été de recueillir les besoins auprès du service RH et de la direction. L'objectif était d'avoir l'application la plus simple et intuitive possible, en étant fiable et en production le plus tôt possible.
<br>Une option était même d'utiliser un système de pointeuse en ligne externe avec abonnement mensuel. J'ai donc d'abord fait une analyse comparative détaillée sur une dizaine d'outils, mais soit ils étaient trop complexes, soit trop chers (ex: 5€ / utilisateur / mois). Avec plus de 100 livreurs et dans une entreprise à cette échelle, ce n'est clairement pas envisageable.

Je me suis donc lancé dans la liste des livrables à fournir, le projet étant axé sur la validation de mes compétences pour l'école, j'ai fourni les mêmes livrables que pour tout gros projet :
- Planning détaillé du projet
- Cahier des charges général
- SFD (spécifications fonctionnelles détaillées) => cahier des charges techniques
- Code de l'application
- Documentation technique de l'application et de sa mise en production
- Cahier de recettes
- Manuel utilisateur
- Présentation client finale

Pour la partie planning, j'ai découpé le projet en sprints et tâches sur Asana (application de gestion de projet). J'ai estimé toutes les tâches et suis arrivé à une estimation globale de 120 heures, soit environ 4 semaines, en ajoutant 3 jours de marge en cas de léger retard.

J'ai rédigé les premiers livrables après les réunions de cadrage avec les différents acteurs.
La première semaine est passée très vite avec au bout, un planning détaillé sur Asana, et un cahier des charges général et technique validé.

### Phase 2 : Architecture et développement back-end (2e semaine)

Pendant la deuxième semaine, je me suis concentré sur le début du développement de l'application. Il a d'abord fallu mettre en place le socle du projet. Ce socle consiste en deux applications :
- Préparation de l'interface front-end :
  - basée sur NuxtJS 3 en TypeScript
  - mise en place de Pinia permettant de gérer l'interactivité des données avec l'API
  - Docker utilisé pour assurer la même architecture en développement que sur le serveur de production.

- API back-end :
  - basée sur notre API Symfony globale via API Platform en PHP
  - ajout des endpoints (routes API) permettant d'identifier les dépôts, leurs livreurs et leurs états (pointé ou non dans la journée), et permettant de pointer
  - mise en place de l'authentification JWT (JSON Web Token) pour ne permettre qu'au front-end configuré d'accéder à l'API
  - création d'un rapport pour le service RH comprenant les pointages de chaque livreur de chaque dépôt dans un fichier Excel par période

### Phase 3 : Développement front-end, tests et devops (3e semaine)

L'API ayant été finalisée durant la deuxième semaine, j'ai pu développer l'interface front-end en TypeScript. Pour cela, je me suis appuyé sur le design system de HopLunch, et j'ai réutilisé les mêmes couleurs et typographies que sur le site public.

J'ai ensuite branché le visuel à l'API via les stores Pinia gérant le cache et la validation des données. J'ai aussi mis en place une gestion des erreurs en fonction de leurs codes pour que les livreurs sachent pourquoi leur pointage n'est pas passé (erreur réseau, site en maintenance etc).

Le back-end étant justement indisponible lors de nos mises à jour globales deux fois par mois, la pointeuse détecte automatiquement une maintenance de l'API et affiche une page de maintenance.
<br>Nous faisons nos maintenances en fin de journée quand les livreurs ne sont généralement plus aux dépôts pour que cela ne les affecte pas.
<br>Mais par sécurité, dans un cas où un livreur ne peut pas dépointer, ou oublie de le faire avant de quitter son dépôt, j'ai mis en place un cron qui toutes les nuits dépointe les livreurs qui ont oublié de le faire, avec pour valeur leurs horaires contractuels de fin de journée.

Le site étant théoriquement fonctionnel, je me suis ensuite concentré sur la partie pipeline CI/CD. J'ai créé les règles permettant que chaque push déclenche les tests (PHPUnit, Playwright), et chaque merge sur la branche git "main" déclenche le déploiement de l'application en production via scripts shell.

Pour finir cette semaine, j'ai écrit les tests permettant de valider que l'application fonctionne de bout en bout. Pour cela j'ai utilisé Playwright, qui s'occupe automatiquement de tester le site dans un vrai navigateur et d'apporter des captures d'écran en cas d'erreurs. 
<br>J'ai testé les cas limites comme l'impossibilité de double pointage, la vérification de la cohérence des horaires, et ajouté les logs pour l'audit RH.

Dorénavant, je pouvais être certain grâce à ces tests, qu'en cas de mise à jour, le fonctionnement actuel est 100% fonctionnel en arrivant en production.

Comme en fin de chaque semaine précédente, j'ai animé une réunion d'avancement avec mon tuteur, où je présentais les nouveautés et où il me faisait un retour sur celles-ci.

### Phase 4 : Derniers livrables et mise en production (4e semaine)

Durant la dernière semaine du projet, j'ai rédigé le cahier de recettes et le manuel utilisateur.

Certains responsables de dépôt ont pu tester en avance la nouvelle pointeuse sur l'environnement de pré-production que j'ai configuré. Ils étaient satisfaits, ce qui m'a ensuite permis de préparer la mise en production réelle et de remplacer l'ancienne pointeuse par la nouvelle.

J'ai effectué une présentation aux différentes parties prenantes durant cette semaine (service RH, responsables de dépôts, lead dev). J'y ai présenté l'application en détails ainsi que le manuel utilisateur, permettant aux responsables de chaque dépôt de présenter la nouvelle application à leurs livreurs dès le lendemain.

Pendant plusieurs semaines, les deux applications étaient utilisables en cas de problème avec la refonte. Cette nouvelle pointeuse ayant 100% des actions possibles testées de bout en bout, aucun bug n'a été remonté durant cette phase de transition.

Une fois la fiabilité validée, l'ancien module Legacy a été coupé. J'ai pu effectuer la mise en production à la date exacte annoncée dans le cahier des charges, et chaque sprint a été livré dans les temps prévus.

## Résultats pour moi

Ce projet m'a permis d'évoluer énormément dans plusieurs domaines.

Sur le plan technique, c'était mon premier projet professionnel avec NuxtJS 3 et TypeScript. J'ai appris à maîtriser la Composition API de Vue 3 et la gestion d'état avec Pinia. J'ai aussi appris à utiliser Playwright pour les tests end-to-end.
<br>La mise en place du pipeline CI/CD était ma première en environnement professionnel. Aujoud'hui, je teste automatiquement le code et applique un pipeline CI/CD sur tous mes projets qui le nécessitent.

Sur le plan de la gestion de projet, j'ai pu rédiger un premier cahier des charges complet pour un projet en entreprise. J'ai aussi pu animer des réunions de validation, découper un projet pour mieux l'estimer, et gérer les délais sans sacrifier la qualité.
<br>Le fait d'avoir réussi à tenir les délais de chaque échéance m'a donné confiance dans ma capacité à piloter des projets de bout en bout.

Sur le plan de la rigueur, ce projet a montré l'importance des tests automatiques. J'ai testé 100% des scénarios possibles avant la mise en production, y compris les cas limites.
<br>Cette rigueur, je me la suis imposée après mes erreurs sur d'anciens projets, où je testais uniquement manuellement les choses et laissait parfois passer des bugs, ou à minima perdait beaucoup de temps. D'ailleurs, cela a porté ses fruits, car aucun bug n'a été signalé en production en un an.

## Résultats pour l'entreprise

Les bénéfices pour HopLunch ont été concrets et mesurables.

**Fiabilisation des données de pointage :** Le service RH n'a plus besoin de corriger manuellement les données chaque semaine car le système ne permet plus de double pointage par manque d'attention ou de fiabilité de l'application. Les informations sont d'ailleurs directement exploitables via un export Excel trié par dépôt et par livreur.

**Suppression totale des erreurs de pointage :** En choisissant une interface à deux onglets, des confirmations visuelles et des contrôles métiers stricts, plus aucune erreur de manipulation n'est possible.

**Zéro bug en production :** Après un an d'utilisation quotidienne par une centaine de livreurs sur plusieurs dépôts, aucun bug n'a été signalé.

**Respect des délais :** Le projet a été livré à la date que j'ai estimé au départ.

## Lendemains du projet

### Dans un futur immédiat
Après la mise en production, plus aucune mise à jour de fonctionnalité ou de correction n'a été nécessaire, car j'ai fait valider chaque avancement et étape par les parties prenantes pendant le projet.

### À distance
Après un an en production, la pointeuse est totalement ancrée dans le quotidien de HopLunch. L'application est utilisée chaque jour par une centaine de livreurs sur plusieurs dépôts en France, sans interruption de service ni anomalie signalée. L'architecture découplée NuxtJS / Symfony API permet de faire évoluer chaque couche indépendamment si nécessaire, et les tests Playwright garantissent la non-régression du parcours utilisateur.

### Aujourd'hui
Le projet a eu un impact organisationnel durable, car le service RH gagne du temps toutes les semaines avec le nouveau système.

## Autocritique

Ce projet est celui dont je suis le plus fier, à la fois pour la qualité technique et pour la réussite de la gestion de projet. Premier projet NuxtJS professionnel et premier projet géré de bout en bout, deux premières qui auraient pu être source de difficultés. Le résultat est pourtant à la hauteur : zéro bug en production, respect des délais, satisfaction du client.

Si je devais refaire ce projet, je mettrais en place les tests end-to-end Playwright dès le premier sprint plutôt qu'en fin de développement. Les tests unitaires PHPUnit étaient présents dès le début côté back-end, mais les tests Playwright côté front-end sont arrivés tardivement. Les intégrer plus tôt m'aurait fait gagner du temps sur la recette et aurait détecté plus rapidement certains comportements inattendus de l'interface sur les tablettes.

La documentation technique, bien que suffisante, aurait pu être plus étoffée. La documentation des composants Vue et des endpoints API aurait mérité plus de détail pour faciliter une éventuelle reprise. C'est un point corrigé sur mes projets suivants.

Enfin, la conduite du changement aurait pu être plus structurée. J'ai impliqué les utilisateurs via les réunions hebdomadaires, mais une formation formelle pour les responsables de dépôt, même courte, aurait accéléré l'adoption. Cette leçon m'a appris qu'un produit techniquement excellent ne suffit pas : l'accompagnement humain fait partie intégrante de la réussite d'un projet.
