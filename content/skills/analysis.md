---
slug: analysis
name: "Esprit d'analyse"
image: "bx:bxs-analyse"
isIcon: true
category: "soft"
order: 2
level: 4
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
---

## Ma définition

L'esprit d'analyse en développement, c’est l'art de décortiquer un problème complexe. Il faut en comprendre la logique, le contexte ou la finalité voulue avant même de toucher au clavier. Plutôt que de coder la première solution à laquelle on pense, le développeur analytique anticipe les impacts techniques et les dépendances futures à une fonctionnalité.
<br>C'est une rigueur qui transforme un simple "code qui marche" en une architecture solide, maintenable et capable d'évoluer dans le temps.

Au-delà de la technique, cette compétence est indispensable pour comprendre les enjeux métiers du client. Qu’il s'agisse de logistique ou de RH, comprendre le fonctionnement réel du secteur permet de poser les bonnes questions et de corriger des spécifications floues.

## Mes éléments de preuve

### Analyse détaillée des besoins pour un système de matching

Le projet Bee'z Pro est un SaaS pour une agence d'intérim permettant de gérer candidatures, offres d'emploi et vitrine de l'agence. L'une des fonctionnalités les plus complexes était l'algorithme de matching entre les profils de candidats et les offres d'emploi. 

Le cahier des charges initial décrivait simplement "un système de matching intelligent". Cela était bien trop léger pour pouvoir coder quelque chose de pertinent. J'ai donc mené une analyse approfondie avec la cliente pour définir précisément les critères de matching (expérience, disponibilité, localisation, compétences, habilitations). Nous avons décidé ensemble d'appliquer une pondération relative, et un seuil de pertinence à chacun de ces critères.

J'ai aussi identifié que le matching devait être bidirectionnel : les candidats devaient voir les offres qui leur correspondent, et l'agence devait voir les candidats qui correspondent à une offre donnée. J'ai également anticipé le besoin de pouvoir ajuster les pondérations sans intervention technique. C'est ce qui m'a conduit à créer un système de scoring paramétrable via le back-office du SaaS.

Résultat : Cette analyse préalable a permis de livrer un matching fonctionnel et pertinent dès la première version, là où une approche plus précipitée aurait nécessité de nombreuses itérations coûteuses.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Analyse et conception du schéma de données pour le SaaS Bee'z Web

Le projet Bee'z Web est la continuité du SaaS Bee'z Pro dans l'aspect gestion de contrats intérimaires en ligne. Ce projet nécessitait une analyse solide avant de commencer le développement. Le domaine métier (gestion de contrats d'intérim, facturation, conformité légale) était complexe et tout nouveau pour moi. La cliente m'a donc expliqué lors de plusieurs réunions, tous les aspects de son métier, et du processus complet de gestion, facturation et signature d'un contrat intérimaire. 

Avec ces informations, j'ai pu attaquer la réflexion sur l'architecture de base de données à créer. C'est une phase d'analyse qui a duré plusieurs jours, car après avoir appris les processus actuels de notre cliente, je devais aussi étudier les contraintes légales liées aux contrats d'intérim, et les flux de données entre les différents acteurs (entreprises clientes, intérimaires, agence). 

Cette analyse m'a permis d'identifier des cas d'usage non prévus dans le cahier des charges initial, comme la gestion des avenants de contrat (modification de durée, de mission ou de rémunération) qui nécessitait un historique complet des versions du contrat. Sans cette analyse préalable, j'aurais dû totalement modifier la base de données en cours de projet, ce qui aurait coûté plusieurs jours à semaines de retard. 

Résultat : Le schéma de données que j'ai conçu a supporté l'ensemble des fonctionnalités sans modification majeure jusqu'à la livraison finale, preuve de la qualité mais surtout de l'utilité de l'analyse initiale.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. Avec mon expérience en programmation de projets très variés et complexes, je considère mon esprit d'analyse comme étant l'une de mes forces principales.
<br>C'est une compétence totalement nécessaire en développement fullstack, car tous les jours je suis face à des problèmes techniques ou fonctionnels qui nécessitent une décomposition méthodique.

### Vitesse d'acquisition

Lorsque j'ai commencé ma première alternance il y a 5 ans, j'avais tendance à sauter dans le code sans réfléchir, car j'étais face à des choses assez simples au départ. Mais plus le temps passait et plus le travail demandé devenait complexe, plus j'ai remarqué que réfléchir aux différentes possibilités est nécessaire avant de coder.
<br>Aujourd'hui avec l'expérience accumulée, j'analyse tout ticket de bug ou fonctionnalité en profondeur avant de coder.

### Recul et conseils

L'esprit d'analyse permet de créer des architectures durables et de comprendre le domaine métier des clients pour proposer des fonctionnalités pertinentes.
<br>Bien sûr, j'ai avec le recul, parfois tendance à trop analyser pour des choses plutôt faciles et rapides. Mais il s'agit simplement avec l'expérience de trouver un juste milieu.

Mon meilleur conseil : Un stylo et un carnet sont les meilleurs alliés. Faire des schémas et lister des propositions permet de voir réellement ce qui peut se faire. Mais c'est surtout une façon pour moi d'être certain de ce qui est attendu et de la solution la plus pertinente à apporter.

## Mon évolution

Cette capacité d'analyse est essentielle pour évoluer vers des rôles de lead technique ou d'architecte logiciel. Je souhaite d'ailleurs approfondir mes compétences en modélisation d'architectures logicielles complexes.

À moyen terme, j'aimerais mener des audits techniques complets sur des applications existantes : analyse de la dette technique, identification des blocages, et proposition de refactoring.
