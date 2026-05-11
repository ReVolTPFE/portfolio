---
slug: mysql
name: "MySQL"
image: "/img/logos/MySQL.webp"
isIcon: false
category: "technical"
order: 5
level: 3
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

MySQL est un des systèmes de gestion de bases de données relationnelles (SGBDR) les plus utilisés au monde. Il permet de stocker, interroger et sécuriser les données d'une application de manière performante et fiable. 

Le modèle relationnel, est basé sur des tables liées entre elles par des clés primaires et étrangères. Ce modèle permet des requêtes complexes grâce au langage SQL. MySQL est au centre de l'architecture d'énormément d'applications web modernes.

Maîtriser MySQL ce n'est pas seulement faire des requêtes à une base de données, mais aussi :
- Concevoir une bonne architecture pour qu'elle soit robuste dans le temps
- Optimiser les performances via des index
- Gérer les transactions SQL pour garantir l'intégrité des données

## Mes éléments de preuve

### Conception du schéma de base de données pour le SaaS Bee'z Web (contrats, factures, avoirs)

Le projet Bee'z Web est un SaaS permettant aux entreprises de rapidement signer un contrat intérimaire avec l'agence d'intérim Bee'z Pro.
<br>Tout le processus de données et documents nécessaires pour la rédaction et la signature d'un contrat se fait sur le SaaS, ce qui permet à l'agence de facilement rédiger et faire signer les contrats.

Ce projet nécessitait une modélisation de base de données très rigoureuse. 
<br>Le schéma devait gérer les relations entre :
- entreprises clientes et intérimaires
- contrats d'intérim et avenants
- factures, avoirs, paiements

La partie facturation avait des contraintes d'intégrité strictes pour garantir la cohérence financière. 

J'ai conçu un schéma relationnel avec des relations OneToOne, OneToMany/ManyToOne, mais aussi avec des tables intermédiaires pour les relations ManyToMany. J'ai fait attention aux contraintes de clés étrangères avec CASCADE et RESTRICT selon les cas (ex: suppression d'un intérimaire supprime en cascade ses documents et leurs références en base de données).
<br>J'ai aussi ajouté des index sur les colonnes fréquemment utilisées dans les filtres et les jointures.

Le défi principal était la gestion des factures et des avoirs : chaque ligne de facture devait être rattachée à un contrat spécifique, avec des calculs de TVA, de marges et de totaux qui devaient rester cohérents même en cas de modification ultérieure du contrat. 
<br>J'ai résolu ce problème en stockant les montants calculés au moment de la facturation (snapshot), tout en conservant la référence au contrat source. Ce fonctionnement historisait donc les données plutôt que de les remplacer.

J'ai également mis en place un système de chiffrement sur les colonnes contenant des données personnelles sensibles (RIB, numéro de sécurité sociale) pour assurer la conformité RGPD. 

Résultat : Le schéma final comptait plus de 20 tables et a supporté sans problème la charge en production pendant plus d'un an.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Import massif d'entreprises pour les ZAE HopLunch

Sur le projet de gestion des ZAE chez HopLunch, nous avions besoin d'importer rapidement des milliers d'entreprises depuis l'API Sirene (API de l'Etat regroupant les données publiques sur les entreprises) en base de données.

J'ai d'abord fait au plus simple : une boucle PHP qui exécute un INSERT par entreprise via Doctrine. Sur un import de 5000 entreprises, le traitement prenait plusieurs minutes et saturait la mémoire, donc ce n'était pas viable.

J'ai donc revu la mécanique d'import. Avec l'ORM de Symfony, j'ai traité les imports en `iterable`. Cela signifie que je chargeais les entreprises une par une dans la mémoire et après insertion, je la vidais directement pour éviter une saturation. 
<br>Pour gagner du temps de traitement, j'ai effectué les insertions par lots de 100, qui se traduisent en SQL par :
```
INSERT INTO entreprises (siret, nom, adresse) 
VALUES 
  ('12345678900001', 'Entreprise A', '1 rue de Paris'),
  ('12345678900002', 'Entreprise B', '2 rue de Lyon'),
  ...
```

Résultat : Le temps de traitement est passé de plusieurs minutes à quelques secondes pour le même volume, et ce système sert à facilement importer des centaines d'entreprises toutes les semaines.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 3/5. Je maîtrise MySQL depuis plus de 7 ans. Mon niveau et mon expérience couvrent la conception de schémas complexes, l'optimisation des performances (indexation, requêtes optimisées), le chiffrement des données sensibles, et la gestion des migrations versionnées.
<br>Aujourd'hui j'utilise le langage SQL quotidiennement dans mes projets personnels ou en entreprise.

### Vitesse d'acquisition

Lors de mes premiers projets personnels, mes bases de données n'étaient pas du tout optimisées et n'avaient pas d'architecture viable à long terme. C'est lors de ma première alternance en autonomie sur des projets Symfony chez DGS Création, que je me suis intéressé à ces aspects.

### Recul et conseils

C'est particulièrement avec le langage SQL que je me suis rendu compte de l'importance de pratiquer régulièrement. Mon utilisation de MySQL ou du langage SQL se limite très souvent à des requêtes assez simples entre maximum 2-3 tables.
C'est pourquoi je me tiens à jour sur les fonctionnalités complexes du langage pour pouvoir les utiliser dans des cas plus spécifiques.

Un conseil est de toujours analyser les plans d'exécution des requêtes lentes avec EXPLAIN avant d'ajouter des index. Car un index mal placé, peut être pire que pas d'index du tout, puisqu'il ralentit les écritures sans accélérer les lectures.

## Mon évolution

Je continue d'approfondir mes connaissances en optimisation des requêtes surtout dans mon entreprise actuelle qui a une base de données en constante évolution. 

Je compte également m'intéresser aux bases de données NoSQL (MongoDB, Redis) pour les cas d'usage où le modèle relationnel n'est pas optimal (stockage de sessions, cache, données non structurées).
