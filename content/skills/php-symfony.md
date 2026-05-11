---
slug: php-symfony
name: "PHP/Symfony"
image: "/img/logos/Symfony.webp"
isIcon: false
category: "technical"
order: 4
level: 4
relatedProjects:
  - dgs-beez-pro
  - dgs-beez-web
  - dgs-ile-aux-copains
  - hoplunch-zae
  - hoplunch-pointeuse
---

## Ma définition

PHP est le langage back-end le plus utilisé sur le web (présent sur plus de 75% des sites internet). Après plus de 30 ans d'existence, il est éprouvé, robuste et utilisé pour créer des applications web dynamiques et évolutives.
<br>Il est particulièrement adapté aux projets professionnels et SaaS nécessitant une logique métier complexe, une intégration avec des bases de données et des frameworks modernes comme Symfony.

Symfony est le framework PHP de référence sur le web. Il est construit autour de composants découplés et réutilisables. Il impose une architecture MVC, des bonnes pratiques (SOLID, injection de dépendances, event-driven architecture) et offre un écosystème complet : 
- Doctrine ORM pour la persistance des données
- Security pour l'authentification et les autorisations
- Messenger pour les tâches asynchrones
- Twig pour le templating
- Mailer pour les notifications
- Et bien plus grâce à ses mises à jour et montées de version régulières

Symfony est adapté aux applications SaaS complexes, aux plateformes B2B et aux projets nécessitant une robustesse et une évolutivité à long terme.

## Mes éléments de preuve

### Développement complet d'un SaaS Symfony pour une agence d'intérim (Bee'z Pro)

Mon expérience la plus formatrice en PHP/Symfony a été le développement d'une plateforme SaaS pour l'agence d'intérim Bee'z Pro chez DGS Création.
<br>L'agence d'intérim avait besoin d'un site internet vitrine sur lequel poster les offres d'emploi et permettre aux candidats de postuler et suivre leurs candidatures.

Le premier projet (Bee'z Pro) consistait à créer un site vitrine avec gestion des candidatures, des offres d'emploi synchronisées via l'API Recruitee, et un algorithme de matching entre candidats et missions. 
- J'ai structuré l'application en bundles fonctionnels (Candidat, Offre, Matching) avec des services métier dédiés pour chaque domaine.
- L'algorithme de matching reposait sur un scoring multi-critères paramétrable (expérience, disponibilité, localisation, compétences) que j'ai implémenté en PHP.
- J'ai aussi intégré la synchronisation des offres d'emplois avec l'API externe, via un CRON sur le serveur de production. Ce CRON est basé sur une commande Symfony créée pour ce besoin et est lancé toutes les heures.
- De la même manière, en asynchrone via Messenger, j'ai créé un service permettant d'envoyer les candidatures directement sur leur ATS.
- Le back-office du projet est basé sur des composants Twig réutilisables (macros de tableaux, listes, notifications etc). J'ai utilisé un système de layout sur la partie site vitrine et sur la partie back-office, pour garantir que chaque page de ces 2 parties du site aient les bons designs et base SEO+CSS.

Résultat : Bee'z Pro a maintenant une vitrine web avec une synchronisation de leurs offres d'emploi entre leur ATS et leur site internet. De plus, le matching entre profils intérimaires et offres d'emploi leur permet de gagner du temps sur les traitements de CV notamment.

[→ Voir le projet : Bee'z Pro](/projects/dgs-beez-pro)

### Développement complet d'une seconde phase au SaaS Symfony pour une agence d'intérim (Bee'z Web)

Suite au succès de Bee'z Pro, un deuxième projet a vu le jour, permettant aux entreprises de facilement créer des contrats avec l'agence d'intérim grâce aux nombreuses données entrées sur le SaaS.

Sur le deuxième projet (Bee'z Web) que j'ai intégré au premier SaaS, j'ai ajouté la gestion complète des contrats, factures, avoirs et paiements.
- J'ai développé un système de génération automatique de documents PDF conformes aux normes légales selon des templates validés par des experts juridiques.
- Le module de facturation avec calcul automatique de la TVA et des marges est basé sur un service de paiement que j'ai codé de sorte à avoir une base pour toute évolution future de calculs de paiements.
- J'ai intégré un tableau de bord statistique avec l'ORM Doctrine qui via le DQL, me permettait de requêter facilement la base de données pour tous types de statistiques.
- Il était important de notifier la gérante de l'agence d'intérim à chaque demande de création de contrat intérimaire via le site. C'est pourquoi via un EventListener, je notifiais la gérante par notification sur le back-office et par mail, à chaque nouvelle demande.

Résultat : Cela permet à l'agence d'intérim de gagner énormément de temps et de ne plus devoir jongler constamment entre intérimaire et entreprise cliente. Les entreprises elles, sont garanties d'avoir un contrat intérimaire signé en moins de 48h si elles ont déjà un intérimaire pour le poste, ce qui est un gain de temps pour elles.

- [→ Voir le projet : Bee'z Web](/projects/dgs-beez-web)

### Refonte du système de gestion des Zones d'Activités Economiques chez HopLunch avec API Sirene et traitement asynchrone

L'activité de HopLunch repose sur la livraison de repas en entreprise. Un des aspects importants est de connaître précisément les zones d'activités économiques (ZAE) d'une ville et les entreprises qui s'y trouvent.

L'ancien système de gestion des ZAE limitait l'expansion commerciale et la gestion logistique. J'ai donc été chargé de le refondre intégralement sur le SaaS Symfony de l'entreprise en intégrant l'API Sirene de l'Insee, Google Maps et Symfony Messenger.

Avant cette refonte, nous avions une interface simple avec une carte affichant les ZAE des villes que l'on livre. Une intégration avec l'API simplanter était déjà présente, servant à lister les ZAE officielles françaises.
<br>Sur cette carte, mon intervention a permis d'ajouter un champ de recherche d'adresse google maps autocomplete en JavaScript.
<br>J'ai aussi ajouté des filtres et catégorisations de zones en fonction de leurs statuts (zone ouverte, zone fermée, zone non importée etc).

J'ai aussi amélioré le système d'import d'entreprises, en utilisant l'API Sirene de l'Insee, listant les entreprises françaises et leurs données publiques.
<br>Ce nouvel import est géré via un appel API avec de nombreux filtres tels que les codes APE, statuts d'entreprises, effectifs et surtout, la localisation.
<br>Pour ce système j'ai créé un algorithme de conversion de coordonnées entre Google Maps en WGS84 (coordonnées en degrés) et l'API de l'Insee en Lambert93 (coordonnées en mètres).
<br>Dorénavant, lorsque l'on ajoute une ZAE, un appel API se fait automatiquement à l'Insee pour récupérer les entreprises situées dans le polygone de cette ZAE.

L'import d'entreprise est alors stocké dans une table temporaire en base de données, qui permet aux responsables logistiques de les importer définitivement. Ce sont alors de manière asynchrone, des messages Messenger qui s'occupent de l'import et de l'activation de ces entreprises sur notre site.

Les ZAE étaient importées via un fichier Excel à l'époque. J'ai intégré un système qui permet en 2 clics de les importer via un formulaire avec lequel il suffit d'entrer les coordonnées de polygones de zones sous forme WKT/GeoJSON.

Le branchement à l'API Sirene de l'Insee m'a aussi permis de créer une page de statistiques concernant les zones et entreprises que nous livrons. Cela contient notamment les taux de pénétration et de clients actifs dans les zones et entreprises pour les équipes commerciales.

Enfin, j'ai développé des commandes Symfony exécutées en CRON pour la synchronisation quotidienne des données Sirene et la purge des entreprises devenues invalides (radiées, déménagées).

Résultat : Les équipes commerciales disposent désormais d'une cartographie à jour de toutes les ZAE et des entreprises ciblables, sans saisie manuelle. Les imports massifs ne bloquent plus l'interface, et les équipes logistiques interagissent beaucoup plus facilement avec celle-ci.
<br>En 8 mois, plus de 60 nouvelles ZAE ont été intégrées via ce système et plusieurs milliers de nouvelles entreprises sont aujourd'hui livrables grâce à lui.

[→ Voir le projet : Gestion des ZAE](/projects/hoplunch-zae)

## Mon autocritique

### Maîtrise et importance dans mon métier

Niveau 4/5. PHP et le framework Symfony sont si gros et évoluent si vite qu'il est difficile de tout maîtriser. En revanche, mon expérience depuis plusieurs années me permet d'avoir des connaissances très solides.

Dans mon quotidien professionnel, PHP/Symfony est le centre de toutes les applications back-end que je développe. Cette compétence me permet :
- de concevoir des architectures solides
- de gérer des logiques métier complexes (contrats, factures, matching, géolocalisation)
- d'intégrer des API tierces
- de garantir la sécurité et la conformité RGPD des données manipulées

La maîtrise de l'écosystème Symfony (bundles, services, commandes, événements...) me rend autonome sur l'ensemble du cycle de développement back-end.

### Vitesse d'acquisition

PHP est le premier langage de programmation concret (hors HTML qui est un langage de description) que j'ai appris il y a plus de 8 ans. J'ai commencé avec la version 5 puis 7 et aujourd'hui 8.
<br>Ma courbe d'apprentissage a été rapide car j'ai adoré faire de nombreux projets personnels sur ces 8 années où j'ai appris énormément.

Mes premières interactions avec Symfony datent d'il y a 4-5 ans environ et je l'ai surtout utilisé en milieu professionnel. Au départ, il y avait énormément de notions à apprendre, mais une fois intégré, Symfony permet d'écrire du code complexe très facilement et garantit une structure et une rigueur que PHP seul n'a pas.

### Recul et conseils

Mon conseil à moi-même est de continuer de découvrir les nouvelles fonctionnalités du langage et du framework.
<br>Avec le recul, j'ai appris à ne pas utiliser Symfony uniquement comme un outil, mais à comprendre ses patterns et principes comme l'injection de dépendances ou l'event-driven architecture.

## Mon évolution

Mon objectif est de continuer à approfondir les nouveaux composants de Symfony ou encore Turbo et Stimulus au sein du framework. Je compte également renforcer mes compétences en tests automatisés (PHPUnit, tests fonctionnels, tests d'intégration).

À plus long terme, je prévois également de passer les certifications Symfony pour formaliser mon niveau de maîtrise. Globalement, je continue de me tenir au courant des évolutions de PHP et du framework avec les nouvelles versions.
