---
slug: mysql
name: "MySQL"
image: "/img/logos/MySQL.webp"
isIcon: false
category: "technical"
order: 5
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

MySQL est le système de gestion de bases de données relationnelles (SGBDR) open-source le plus utilisé au monde. Il permet de stocker, organiser, interroger et sécuriser les données d'une application web de manière performante et fiable. Le modèle relationnel, basé sur des tables liées entre elles par des clés primaires et étrangères, garantit l'intégrité des données et permet des requêtes complexes grâce au langage SQL. MySQL est au cœur de l'architecture de la quasi-totalité des applications web modernes.

Dans un contexte professionnel, la maîtrise de MySQL va bien au-delà de la simple écriture de requêtes SELECT. Elle englobe la conception de schémas de bases de données normalisés, l'optimisation des performances via l'indexation et l'analyse des plans d'exécution (EXPLAIN), la gestion des transactions pour garantir la cohérence des données, le chiffrement des colonnes sensibles pour la conformité RGPD, et la mise en place de migrations versionnées pour faire évoluer la base de données en parallèle du code applicatif. Sur les projets Symfony, MySQL est utilisé via Doctrine ORM, qui ajoute une couche d'abstraction objet tout en permettant l'écriture de requêtes DQL ou SQL natives lorsque les performances l'exigent.

La base de données est souvent le goulot d'étranglement d'une application web. Un schéma mal conçu ou des requêtes non optimisées peuvent rendre une application inutilisable même avec un code applicatif propre. C'est pourquoi la maîtrise de MySQL est une compétence critique pour tout développeur fullstack qui souhaite livrer des applications performantes et scalables.

## Mes éléments de preuve

### Conception du schéma de données complexe pour le SaaS Bee'z Web (contrats, factures, avoirs)

Le projet Bee'z Web nécessitait une modélisation de base de données particulièrement rigoureuse. Le schéma devait gérer les relations entre entreprises clientes, contrats d'intérim, avenants, factures, avoirs, paiements, et intérimaires, avec des contraintes d'intégrité strictes pour garantir la cohérence financière. J'ai conçu un schéma normalisé en 3NF avec des tables intermédiaires pour les relations many-to-many, des contraintes de clés étrangères avec CASCADE et RESTRICT selon les cas, et des index composites sur les colonnes fréquemment utilisées dans les filtres et les jointures. Le défi principal était la gestion des factures et avoirs : chaque ligne de facture devait être rattachée à un contrat spécifique, avec des calculs de TVA, de marges et de totaux qui devaient rester cohérents même en cas de modification ultérieure du contrat. J'ai résolu ce problème en stockant les montants calculés au moment de la facturation (snapshot), tout en conservant la référence au contrat source. J'ai également mis en place un système de chiffrement AES sur les colonnes contenant des données personnelles sensibles (RIB, numéro de sécurité sociale) pour assurer la conformité RGPD. Le schéma final comptait plus de 40 tables et a supporté sans problème la charge en production pendant plus d'un an.

[→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Gestion de données géospatiales et imports massifs pour les ZAE HopLunch

Le projet de gestion des ZAE chez HopLunch m'a confronté à des problématiques MySQL avancées. La base de données devait stocker des polygones géographiques (formats WKT/GeoJSON), gérer des imports massifs d'entreprises depuis l'API Sirene (plusieurs milliers d'enregistrements par import), et permettre des requêtes géospatiales performantes. J'ai utilisé les types de données spatiales de MySQL (POLYGON, POINT) et les fonctions géographiques natives (ST_Contains, ST_Within) pour déterminer si une entreprise se trouve à l'intérieur d'une ZAE donnée. Pour les imports massifs, j'ai optimisé les performances en utilisant des INSERT batch (INSERT INTO ... VALUES (...), (...), ...) plutôt que des insertions unitaires, réduisant le temps d'import de plusieurs minutes à quelques secondes. J'ai également mis en place un système d'indexation spatiale qui a divisé par 10 le temps des requêtes de recherche géographique. Les migrations Doctrine ont été versionnées avec soin pour permettre des rollbacks en cas de problème, avec des snapshots de base de données utilisés dans l'environnement Docker de développement.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

### Architecture de données sécurisée pour la gestion de mineurs (Ile aux Copains)

Sur le projet Ile aux Copains, la base de données devait gérer des informations particulièrement sensibles : données de santé de mineurs (allergies, traitements médicaux, régimes alimentaires), informations familiales (parents divorcés, tuteurs légaux), et autorisations de prise en charge. J'ai mis en place un chiffrement au niveau des colonnes pour toutes les données de santé, avec des clés de chiffrement stockées séparément de la base de données. La modélisation des relations familiales complexes (un enfant pouvant avoir plusieurs responsables légaux avec des niveaux d'autorisation différents) a nécessité un schéma relationnel soigneusement pensé avec des tables de liaison incluant des colonnes de métadonnées (type de responsabilité, niveau d'autorisation, dates de validité). Cette expérience m'a appris que la conception d'une base de données ne se limite pas aux aspects techniques : elle doit intégrer les contraintes légales, métier et de sécurité dès la phase de modélisation.

[→ Voir le projet : Ile aux Copains](/projects/dgs-ile-aux-copains)

## Mon autocritique

Je maîtrise MySQL depuis plus de 7 ans, ce qui en fait l'une de mes compétences les plus matures. Cette compétence est centrale pour tout développement back-end : chaque fonctionnalité que je développe en PHP/Symfony repose in fine sur des données stockées et manipulées en base. Ma capacité à concevoir des schémas relationnels propres et à optimiser les requêtes est un facteur déterminant de la qualité et de la performance des applications que je livre.

Mon niveau de maîtrise couvre la conception de schémas complexes, l'optimisation des performances (indexation, plans d'exécution, requêtes optimisées), le chiffrement des données sensibles, et la gestion des migrations versionnées. Via Doctrine ORM, je suis capable d'écrire des requêtes en DQL pour les cas simples et de descendre en SQL natif lorsque les performances l'exigent.

Mon conseil : toujours analyser les plans d'exécution des requêtes lentes avec EXPLAIN avant d'ajouter des index. Un index mal placé peut être pire que pas d'index du tout, car il ralentit les écritures sans accélérer les lectures.

## Mon évolution

Je continue à approfondir mes connaissances en optimisation des requêtes et en administration de bases de données à forte volumétrie. Mon objectif est de maîtriser les techniques de partitionnement de tables, la réplication master/slave pour la haute disponibilité, et les stratégies de cache (Redis, Memcached) pour réduire la charge sur la base de données.

Je m'intéresse également aux bases de données NoSQL (MongoDB, Redis) pour les cas d'usage où le modèle relationnel n'est pas optimal (stockage de sessions, cache, données non structurées). À moyen terme, je souhaite être capable de choisir et de combiner les différentes technologies de stockage selon les besoins spécifiques de chaque projet, en adoptant une approche polyglot persistence.
