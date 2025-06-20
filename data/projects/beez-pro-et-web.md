# Plateforme de gestion RH et intérim — Symfony

## Résumé du projet

Cette application Symfony centralise et automatise la gestion des processus RH pour les agences d’intérim et les entreprises clientes. Elle permet de gérer efficacement les candidatures, les contrats, la facturation, et le suivi des prestations. Une couche de matching intelligent aide les agences à rapprocher les bons profils des bonnes missions. Le projet offre une solution clé en main pour fluidifier le cycle de vie du travail temporaire.

---

## Contexte et objectifs

Le projet a été conçu pour répondre aux besoins spécifiques des agences d’intérim et des entreprises clientes en matière de gestion RH. L’objectif était de proposer une plateforme unique permettant :

- aux agences d’intérim de gérer leurs candidats et offres d’emploi ;
- aux entreprises clientes de piloter contrats, facturation et suivi administratif.

Le projet visait à automatiser un maximum de tâches, à améliorer la qualité du matching entre candidats et missions, et à garantir la conformité légale (RGPD, traçabilité des actions).

---

## Fonctionnalités principales

### Pour les agences d’intérim (V1)

- **Gestion des candidats** : inscription, CV, critères de recherche, suivi des candidatures.
- **Gestion des offres d’emploi** : affichage d’offres via API externe, postulation, suivi.
- **Matching intelligent** : système d’évaluation de compatibilité entre profils et offres.
- **Gestion avancée** : back-office complet pour l’agence (candidats, offres, configurations).
- **Notifications** : alertes automatisées pour les actions importantes.

### Pour les entreprises clientes (V2)

- **Gestion des contrats** : création, duplication, prolongation des contrats.
- **Facturation & avoirs** : génération de factures/avoirs, suivi des paiements.
- **Gestion administrative** : gestion des utilisateurs entreprises, paramétrage global.
- **Suivi des prestations** : état d’avancement des prestations, historique.

---

## Architecture technique

L’application repose sur l’architecture MVC de **Symfony** :

- **Modèle (Model)** : entités métier pour les candidats, offres, contrats, factures, etc.
- **Vue (View)** : templates Twig pour l'interface utilisateur.
- **Contrôleur (Controller)** : gestion des flux métiers et des APIs.

Les couches services et repositories assurent une logique métier claire et réutilisable.  
Deux modules principaux structurent le code :

- **V1** : dédié aux fonctionnalités agences d’intérim.
- **V2** : orienté clients entreprises (BeezWeb).

**Intégrations externes :**

- API Recruitee : récupération automatique des offres d’emploi.
- API interne : récapitulatifs et notifications pour les contrats.

La séparation V1/V2 facilite la maintenance et les évolutions futures.

---

## Stack technique

- **Backend** : Symfony (PHP)
- **Base de données** : MySQL
- **Templates / UI** : Twig
- **APIs** : REST (Recruitee API, API interne)
- **Services métier** : services Symfony dédiés
- **Gestion documentaire** : génération de PDF
- **Notifications** : système interne personnalisé
- **Sécurité / RGPD** : gestion des droits, consentements, traçabilité

---

## Challenges rencontrés et solutions apportées

### 1. Matching intelligent entre candidats et offres
**Challenge :** concevoir un algorithme de matching flexible et performant.  
**Solution :** mise en place d’un système de critères paramétrables couplé à une logique de scoring, avec automatisation des notifications lorsque des profils pertinents sont détectés.

### 2. Gestion multi-acteurs avec droits différenciés
**Challenge :** structurer l’application pour gérer plusieurs types d’utilisateurs (agences, entreprises, candidats) avec des droits et interfaces adaptés.  
**Solution :** architecture modulaire (V1/V2), contrôleurs et templates distincts selon le rôle.

### 3. Automatisation des processus contractuels
**Challenge :** automatiser la création et la gestion du cycle de vie des contrats.  
**Solution :** développement de services métier dédiés pour la génération de contrats, la duplication, la prolongation et la génération de documents PDF.

---

## Leçons apprises

- Meilleure maîtrise des **patterns de services Symfony** pour la logique métier.
- Pratique avancée de la **séparation des responsabilités** (Controller → Service → Repository).
- Importance d’une **documentation claire** pour la maintenabilité d’un projet complexe.
- Gestion fine des API externes et de leur intégration sécurisée.
- Mise en œuvre de **bonnes pratiques RGPD** dès la conception.

---

## Screenshots / Démonstration

- La version initiale du README ne contient pas de screenshots.
- L’application propose une interface riche et personnalisable, adaptée à chaque type d’utilisateur.

---

## Liens utiles

- **GitHub** : [Lien vers le repository (ajouter URL)](https://github.com/)
- **Démo en ligne** : [Ajouter URL si disponible]
- **Documentation fonctionnelle** : fournie dans le README.

---

## Conclusion / Valeur ajoutée du projet

Ce projet démontre la capacité à concevoir une plateforme RH complète et évolutive, couvrant tout le cycle de vie du travail temporaire. Il combine automatisation, ergonomie et respect des contraintes légales.

👉 Un projet qui apporte **un réel gain de productivité** aux agences d’intérim et à leurs clients.

---

