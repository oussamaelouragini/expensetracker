# Rapport PFA — Expense Tracker

**Équipe MoodCoders**  
**4ème Année Génie Logiciel — Groupe A**

---

# Chapitre 1 : Présentation générale du projet

## Introduction

Ce chapitre introductif pose les bases du projet Expense Tracker, une application mobile de gestion financière intelligente. Il présente le contexte qui a motivé sa création, les objectifs visés, l'organisation de l'équipe de développement ainsi que la méthodologie adoptée pour sa réalisation. Un état de l'art des solutions existantes est également dressé afin de situer notre contribution dans le paysage des applications financières mobiles.

## 1.1 Contexte et problématique

La gestion des finances personnelles est devenue une activité quotidienne pour un grand nombre d'individus. Entre les dépenses courantes, les abonnements multiples, l'épargne et les objectifs financiers, il est souvent difficile d'avoir une vision claire et actualisée de sa situation. Les relevés bancaires traditionnels et les feuilles de calcul montrent leurs limites face à la rapidité des transactions modernes et à la multiplicité des comptes.

Dans le même temps, l'intelligence artificielle a connu des avancées significatives ces dernières années, ouvrant la voie à des assistants conversationnels capables d'interagir en langage naturel. Appliquée à la finance personnelle, cette technologie offre la possibilité de simplifier la gestion budgétaire en permettant à l'utilisateur de dialoguer avec son application plutôt que de naviguer dans des menus complexes.

Par ailleurs, les solutions existantes sur le marché présentent plusieurs lacunes : certaines sont payantes, d'autres imposent une agrégation bancaire contraignante, et la plupart ne proposent pas d'assistant intelligent capable de comprendre le langage naturel ou d'analyser les habitudes de dépenses de manière proactive.

C'est dans ce contexte qu'est né **Expense Tracker**, une application mobile de gestion financière qui se distingue par l'intégration d'un **assistant IA conversationnel** couplé à un **moteur d'analyse prédictive**. La problématique centrale du projet peut être formulée comme suit :

> **Comment concevoir une application mobile de gestion financière qui combine une interface intuitive, une sécurité renforcée et un assistant intelligent capable d'interagir en langage naturel pour aider l'utilisateur à mieux gérer son budget ?**

## 1.2 Objectifs spécifiques du projet

Le projet Expense Tracker poursuit un ensemble d'objectifs précis, couvrant à la fois les aspects fonctionnels, techniques et innovants :

**Objectif 1** : Développer une application mobile cross-platform (iOS et Android) avec React Native et Expo, offrant une expérience utilisateur fluide et moderne.

**Objectif 2** : Mettre en place un système d'authentification sécurisé basé sur JWT (JSON Web Tokens), avec support de l'inscription classique (email/mot de passe) et de la connexion via Google.

**Objectif 3** : Implémenter un module de gestion des transactions complet (CRUD) avec catégorisation, filtrage et recherche, permettant à l'utilisateur de suivre ses revenus et dépenses au quotidien.

**Objectif 4** : Concevoir un module de gestion de portefeuilles (wallets) avec suivi du solde et historique des activités.

**Objectif 5** : Développer un module d'objectifs d'épargne (goals) avec suivi visuel de la progression, estimations temporelles et recommandations personnalisées.

**Objectif 6** : Créer un tableau de bord statistique complet avec visualisations graphiques (diagrammes en barres), analyse des dépenses par catégorie, comparaison de périodes et détection d'anomalies.

**Objectif 7** : Intégrer un **assistant IA conversationnel** basé sur le modèle Llama 3.3 (70B) via l'API Groq, capable de comprendre et d'exécuter des commandes financières en langage naturel, avec support multilingue (français, anglais, arabe/tunisien).

**Objectif 8** : Permettre la saisie vocale des transactions via un module de transcription audio utilisant le modèle Whisper de Groq.

**Objectif 9** : Implémenter un moteur de prédiction des dépenses et d'estimation du potentiel d'épargne basé sur l'analyse des données historiques.

**Objectif 10** : Assurer la sécurité des données utilisateur via le chiffrement des mots de passe (Bcrypt), la protection des tokens et le stockage sécurisé des informations financières.

## 1.3 Organisation du travail et répartition des tâches

Le projet a été réalisé par une équipe de deux développeurs, chacun étant responsable d'un pôle spécifique tout en maintenant une collaboration étroite pour assurer la cohérence de l'ensemble.

### Équipe de développement

| Membre | Rôle | Responsabilités |
|--------|------|-----------------|
| **Oussama Elouragini** | Développeur Frontend | Conception et développement de l'interface utilisateur sous React Native/Expo, implémentation de la navigation (Expo Router), intégration des appels API, gestion des états (Zustand), design des composants et thèmes, expérience utilisateur |
| **Fadi Ben Kalifa** | Développeur Backend | Mise en place du serveur Node.js/Express, modélisation et gestion de la base de données MongoDB, développement des endpoints REST, implémentation de l'authentification JWT, intégration de l'IA Groq, gestion des fichiers (avatars, audio) |

### Organisation du travail

La réalisation du projet a suivi une méthodologie Agile adaptée au contexte d'un PFA. Le travail a été découpé en sprints d'une semaine, chacun étant dédié à un module spécifique :

**Sprint 1 — Authentification** : Mise en place du système d'inscription, connexion, JWT et Google Sign-In.  
**Sprint 2 — Transactions** : Développement du CRUD transactions et catégories.  
**Sprint 3 — Wallets et Goals** : Implémentation des portefeuilles et des objectifs d'épargne.  
**Sprint 4 — Statistiques** : Réalisation des graphiques et du tableau de bord analytique.  
**Sprint 5 — IA** : Intégration de Groq, développement de l'assistant conversationnel et des outils.  
**Sprint 6 — Profil et notifications** : Gestion du profil, upload d'avatar, notifications.  
**Sprint 7 — Intégration et tests** : Connexion frontend/backend, tests des flux complets.  
**Sprint 8 — Finalisation** : Correction des bugs, optimisation, préparation de la soutenance.

Chaque sprint débutait par une réunion de planification des tâches et se terminait par une revue pour valider les fonctionnalités livrées et ajuster les priorités restantes.

## 1.4 Démarche de développement adoptée

La démarche de développement d'Expense Tracker s'articule autour de plusieurs phases complémentaires, allant de l'analyse des besoins à la validation finale.

### Phase 1 : Analyse et spécification

Cette phase a consisté à définir les besoins fonctionnels et non fonctionnels du projet, identifier les acteurs et leurs interactions avec le système, et spécifier les cas d'utilisation principaux. Un benchmark des solutions existantes a également été réalisé pour identifier les lacunes à combler.

### Phase 2 : Conception architecturale

L'architecture du projet a été pensée selon un modèle **trois tiers** :

- **Client mobile** (React Native / Expo) : application cross-platform avec navigation par onglets, design adaptatif et gestion d'état centralisée via Zustand.
- **Serveur API** (Node.js / Express) : API REST modulaire avec architecture MVC (Modèle-Vue-Contrôleur) et middleware d'authentification.
- **Base de données** (MongoDB) : stockage NoSQL flexible avec modèles de données adaptés aux documents financiers.

### Phase 3 : Développement du backend

Le backend a été développé en premier lieu pour établir une base solide. Les étapes clés :

1. **Configuration de l'environnement** : serveur Express, connexion MongoDB, variables d'environnement.
2. **Modélisation des données** : création des schémas Mongoose pour les utilisateurs, transactions, catégories, objectifs et conversations.
3. **Implémentation des contrôleurs** : logique métier pour chaque module (auth, transactions, goals, catégories, utilisateurs, IA).
4. **Middleware d'authentification** : vérification des tokens JWT sur les routes protégées.
5. **Intégration de l'IA** : connexion à l'API Groq, construction du system prompt, boucle agentique avec 18 outils, gestion des actions destructives avec confirmation, transcription audio via Whisper.
6. **Services d'analyse** : calcul des résumés de dépenses, ventilation par catégorie, comparaison de périodes, détection d'anomalies, prédictions.

### Phase 4 : Développement du frontend

Parallèlement au backend, le frontend a été construit en suivant une architecture par fonctionnalités (feature-based) :

1. **Structure du projet** : organisation en modules (auth, transactions, goals, wallet, stats, profile, notifications).
2. **Navigation** : Expo Router avec stack d'authentification et onglets principaux.
3. **Gestion d'état** : stores Zustand pour les transactions, catégories, objectifs et notifications.
4. **Composants réutilisables** : en-têtes, wrappers d'écran, bulles de chat, boutons vocaux.
5. **Intégration API** : client Axios avec intercepteurs pour le refresh automatique des tokens.
6. **Interface IA** : écran de chat avec messages, indicateur de frappe, suggestions rapides, bouton d'enregistrement vocal.
7. **Expérience utilisateur** : animations, thème clair/sombre, retours haptiques, gestes.

### Phase 5 : Tests et validation

Chaque module a été testé individuellement avant l'intégration complète. Les tests ont porté sur :

- Les appels API et les réponses du backend
- Les flux d'authentification (connexion, refresh, expiration)
- Les opérations CRUD sur les transactions, objectifs et catégories
- Les interactions avec l'assistant IA (chat, confirmation, annulation)
- La transcription vocale et le traitement audio
- La gestion des erreurs et des cas limites

### Architecture technique

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (React Native / Expo)              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │ Écrans   │  │ Composants│  │ Stores   │  │ Services   │  │
│  │ (Router) │  │ (UI)     │  │ (Zustand)│  │ (Axios)    │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │ API REST (JSON)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    SERVER (Node.js / Express)                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │ Routes   │  │Contrôleurs│  │ Services │  │ Middleware  │  │
│  │ (REST)   │  │ (Logique) │  │ (Métier) │  │ (JWT,Upload)│  │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │
│                       │                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                 MODULE IA (Groq)                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │   │
│  │  │ System   │  │ Tool     │  │ Tool Executor    │   │   │
│  │  │ Prompt   │  │Defs(18) │  │ (DB actions)     │   │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │   │
│  │  │ Memory   │  │Predictions│  │ Analytics       │   │   │
│  │  │ Service  │  │ Service  │  │ Service         │   │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │ Mongoose ODM
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    BASE DE DONNÉES (MongoDB)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │ Users    │  │Transactions│  │ Categories│  │ Goals     │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Conversations (Mémoire IA)                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Technologies utilisées

| Couche | Technologie | Rôle |
|--------|-------------|------|
| **Frontend** | React Native 0.81 + Expo 54 | Framework mobile cross-platform |
| **Frontend** | Expo Router 6 | Navigation fichier-based |
| **Frontend** | Zustand 5 | Gestion d'état |
| **Frontend** | React Hook Form + Zod | Gestion des formulaires et validation |
| **Frontend** | Axios | Client HTTP avec intercepteurs |
| **Frontend** | React Native Reanimated | Animations fluides |
| **Frontend** | Expo Image Picker | Sélection d'images pour avatar |
| **Frontend** | Expo Audio | Enregistrement vocal |
| **Backend** | Node.js + Express 5 | Serveur API REST |
| **Backend** | MongoDB + Mongoose 9 | Base de données NoSQL |
| **Backend** | JSON Web Token (JWT) | Authentification et sessions |
| **Backend** | Bcrypt | Hachage des mots de passe |
| **Backend** | Multer | Gestion des uploads (avatars, audio) |
| **IA** | Groq SDK (Llama 3.3 70B) | Assistant conversationnel |
| **IA** | Groq Whisper (whisper-large-v3-turbo) | Transcription vocale |
| **Auth sociale** | Google Identity Services | Connexion Google |
| **Notifications** | Expo Notifications | Alertes push |

### Fonctionnalités clés

Le tableau ci-dessous récapitule l'ensemble des fonctionnalités développées :

| Module | Fonctionnalités | Statut |
|--------|-----------------|--------|
| **Authentification** | Inscription, connexion (email + Google), mot de passe oublié, refresh token, déconnexion | ✓ |
| **Transactions** | Ajout (revenu/dépense), modification, suppression, liste paginée, filtres, recherche, catégorisation | ✓ |
| **Catégories** | Création personnalisée (nom + icône + couleur), modification, suppression, catégories par défaut à l'inscription | ✓ |
| **Wallets** | Affichage du solde, liste des activités, ajout de fonds (top-up) | ✓ |
| **Goals** | Création (montant + durée + fréquence), suivi de progression, ajout d'épargne, insights (on track/delayed/ahead/completed), suppression | ✓ |
| **Statistiques** | Graphiques hebdomadaires/mensuels, revenus vs dépenses, résumé par catégorie, comparaison de périodes | ✓ |
| **Profil** | Modification des informations, upload/suppression d'avatar, changement de mot de passe, préférences (devise, langue) | ✓ |
| **Assistant IA** | Chat conversationnel, 18 outils d'action, confirmation des actions destructives, suggestions rapides, support multilingue (EN/FR/AR) | ✓ |
| **Transcription vocale** | Enregistrement audio, transcription Whisper, exécution via l'assistant IA | ✓ |
| **Prédictions** | Estimation des dépenses mensuelles, calcul du potentiel d'épargne, tendances | ✓ |
| **Détection d'anomalies** | Alertes sur dépenses anormales, comparaison avec la moyenne, grandes transactions inhabituelles | ✓ |
| **Notifications** | Rappels périodiques, historique des notifications, marquage lu/non lu | ✓ |
| **Multidevise** | Support TND, USD, EUR, GBP avec formatage adapté | ✓ |

## 1.5 État de l'art

### 1.5.1 Collecte de l'information

L'analyse du marché a été menée via une recherche documentaire et une prise en main de plusieurs applications de gestion financière disponibles sur l'App Store et Google Play. Les critères d'évaluation retenus sont les suivants :

- Facilité d'utilisation et expérience utilisateur
- Étendue des fonctionnalités proposées
- Modèle économique (gratuit, freemium, abonnement)
- sécurité des données et respect de la vie privée
- Intégration de l'intelligence artificielle
- Compatibilité multiplateforme

### 1.5.2 Solutions existantes

Plusieurs applications de gestion financière personnelle sont aujourd'hui présentes sur le marché. Voici les plus représentatives :

| Application | Fonctionnalités clés | Tarif | Plateforme | IA intégrée | Points forts |
|-------------|---------------------|-------|------------|-------------|--------------|
| **Mint** | Agrégation bancaire, catégorisation automatique, alertes de budget, suivi de crédit | Gratuit (avec publicités) | Web, iOS, Android | Non | Automatisation, tableau de bord complet |
| **YNAB** | Méthode "enveloppe" numérique, rapports détaillés, objectifs, ateliers | Abonnement (~15 $/mois) | Web, iOS, Android | Non | Approche pédagogique de l'épargne |
| **Spendee** | Suivi des dépenses, wallets multiples, devises, modes collaboratifs | Freemium (Premium à 3 $/mois) | iOS, Android | Non | Interface colorée et intuitive |
| **Wallet** | Budget, factures récurrentes, synchronisation bancaire, rapports | Freemium (Premium à 4 $/mois) | Web, iOS, Android | Non | Personnalisation avancée des catégories |
| **Bankin'** | Agrégation bancaire, analyse des dépenses, alertes, conseils personnalisés | Gratuit (Premium à 6 €/mois) | iOS, Android | Non | Couverture bancaire européenne étendue |
| **Expense Tracker** (notre solution) | Transactions, wallets, goals, statistiques, assistant IA, prédictions, transcription vocale, détection d'anomalies | **Gratuit** (sans abonnement) | iOS, Android | **Oui** (Groq Llama 3.3 + Whisper) | Assistant IA conversationnel, analyse prédictive, multilingue, sécurité |

### 1.5.3 Critiques et recommandations

L'analyse des solutions existantes fait ressortir plusieurs limitations récurrentes :

**Limitations identifiées :**

1. **Absence d'intelligence artificielle** : Aucune des applications étudiées ne propose un assistant IA conversationnel capable de comprendre le langage naturel. L'interaction se limite à des formulaires et des menus de navigation, ce qui peut être fastidieux pour les actions quotidiennes comme l'ajout d'une dépense ou la consultation du solde.

2. **Coût récurrent** : YNAB, Spendee et Wallet imposent un abonnement mensuel ou annuel pour débloquer les fonctionnalités avancées. Ce modèle économique freine l'adoption par un public large.

3. **Complexité d'utilisation** : Les applications comme Mint et Bankin' proposent de nombreuses fonctionnalités, mais leur interface dense peut dérouter les utilisateurs novices en gestion financière.

4. **Dépendance à l'agrégation bancaire** : La synchronisation automatique des transactions nécessite l'accès aux comptes bancaires via des API propriétaires, ce qui n'est pas disponible dans tous les pays et soulève des préoccupations légitimes en matière de sécurité et de confidentialité.

5. **Manque de personnalisation** : Peu d'applications permettent une adaptation fine des catégories de dépenses, des objectifs d'épargne ou des règles de budgétisation selon les besoins spécifiques de chaque utilisateur.

6. **Absence d'analyse prédictive** : La plupart des solutions se contentent d'un constat rétrospectif (ce qui a été dépensé) sans proposer de prévisions ou de recommandations proactives pour aider l'utilisateur à mieux anticiper ses finances.

7. **Support linguistique limité** : Très peu d'applications offrent une expérience en arabe ou en dialecte tunisien, ce qui constitue un frein pour une partie des utilisateurs maghrébins.

**Recommandations et positionnement d'Expense Tracker :**

Fort de ces constats, Expense Tracker se positionne comme une alternative innovante qui combine plusieurs atouts distinctifs :

- **Assistant IA intelligent** : Grâce à l'intégration de Groq (Llama 3.3 70B), l'utilisateur peut interagir en langage naturel avec son application. Il peut demander « Combien ai-je dépensé ce mois-ci ? », « Ajoute 50 € dans mon budget course » ou « Quel est l'objectif d'épargne que je peux atteindre d'ici Noël ? ». L'assistant comprend la demande, exécute les actions nécessaires et demande confirmation avant toute opération destructrice.

- **Transcription vocale** : L'utilisateur peut dicter ses dépenses à voix haute plutôt que de les saisir manuellement, ce qui simplifie considérablement le suivi quotidien.

- **Analyse prédictive** : Le moteur de prédiction estime les dépenses à venir et le potentiel d'épargne, offrant une vision prospective que les concurrents ne proposent pas.

- **Détection proactive d'anomalies** : L'application alerte automatiquement l'utilisateur en cas de dépense inhabituelle ou de dépassement de budget, jouant un rôle de conseiller financier personnel.

- **Gratuité** : Contrairement à YNAB ou Wallet, Expense Tracker est accessible sans abonnement, ce qui le rend attractif pour un large public.

- **Multilinguisme** : L'assistant IA détecte automatiquement la langue de l'utilisateur (français, anglais, arabe ou dialecte tunisien) et adapte ses réponses en conséquence.

- **Sécurité renforcée** : Les mots de passe sont hachés avec Bcrypt, les tokens JWT ont une durée de vie limitée avec refresh automatique, et les données sont stockées localement sur un serveur maîtrisé.

## Conclusion

Ce premier chapitre a posé les fondations du projet Expense Tracker. Nous avons présenté le contexte de la gestion financière personnelle, identifié les lacunes des solutions existantes et défini les objectifs spécifiques de notre application. L'organisation de l'équipe et la démarche de développement adoptée ont été détaillées, mettant en évidence une approche Agile structurée autour de sprints itératifs. L'état de l'art a révélé qu'aucune application du marché ne propose aujourd'hui une combinaison d'assistant IA conversationnel, d'analyse prédictive et de transcription vocale dans une expérience gratuite et sécurisée. Expense Tracker vient combler ce vide en offrant une solution moderne, intelligente et accessible.

Le chapitre suivant présentera l'analyse détaillée des besoins fonctionnels et non fonctionnels, ainsi que les diagrammes de cas d'utilisation qui guideront la phase de conception.

---

# Chapitre 2 : Analyse des besoins

## Introduction

L'analyse des besoins constitue une étape fondamentale dans le cycle de développement d'un projet logiciel. Elle permet de définir avec précision ce que le système doit accomplir, d'identifier les acteurs qui interagiront avec lui et de spécifier les contraintes techniques qui encadreront sa réalisation.

Ce chapitre présente une analyse complète des besoins du projet Expense Tracker. Nous commencerons par identifier les acteurs du système à travers des fiches personas détaillées, puis nous déclinerons les exigences fonctionnelles et non fonctionnelles. La modélisation des besoins sera ensuite abordée avec la présentation des diagrammes de cas d'utilisation, la description des scénarios nominaux et alternatifs, ainsi que les diagrammes de séquence système. Enfin, les contraintes techniques et la répartition des tâches seront exposées.

## 2.1 Identification des acteurs et des besoins

### 2.1.1 Fiches personas (Acteurs du système)

L'application Expense Tracker comporte deux acteurs principaux. Chaque acteur est défini par un ensemble de caractéristiques, d'objectifs et de responsabilités.

#### Persona 1 : Utilisateur (Acteur principal)

| Caractéristique | Description |
|----------------|-------------|
| **Nom** | Utilisateur standard |
| **Profil** | Particulier souhaitant gérer ses finances personnelles |
| **Niveau technique** | Basique à intermédiaire (utilisation courante d'un smartphone) |
| **Objectifs principaux** | Suivre ses dépenses et revenus, épargner, visualiser sa situation financière, interagir avec l'assistant IA |
| **Compétences** | Navigation mobile, compréhension des notions financières de base |
| **Fréquence d'utilisation** | Quotidienne à hebdomadaire |
| **Besoins spécifiques** | Interface intuitive, rapidité d'exécution, sécurité des données, support multilingue |

L'utilisateur est l'acteur principal du système. Il interagit avec l'application via son smartphone pour effectuer les opérations suivantes :

- Créer et gérer son compte utilisateur
- Ajouter, modifier et consulter ses transactions financières
- Organiser ses dépenses par catégories personnalisées
- Gérer plusieurs portefeuilles (wallets)
- Définir des objectifs d'épargne et suivre leur progression
- Visualiser des statistiques et des graphiques sur ses habitudes de dépenses
- Dialoguer avec l'assistant IA en langage naturel
- Utiliser la commande vocale pour ajouter des transactions
- Recevoir des notifications et des alertes
- Personnaliser son profil et ses préférences

#### Persona 2 : Administrateur (Acteur secondaire)

| Caractéristique | Description |
|----------------|-------------|
| **Nom** | Administrateur système |
| **Profil** | Responsable technique de la plateforme |
| **Niveau technique** | Avancé (développement, DevOps, base de données) |
| **Objectifs principaux** | Assurer le bon fonctionnement, la sécurité et la disponibilité du système |
| **Compétences** | Administration serveur, gestion de base de données, sécurité |
| **Fréquence d'utilisation** | Quotidienne (maintenance) |
| **Besoins spécifiques** | Accès aux logs, supervision des performances, gestion des utilisateurs |

L'administrateur est responsable de la maintenance et de la supervision de la plateforme. Ses responsabilités incluent :

- La gestion des comptes utilisateurs
- La supervision des performances du serveur
- La vérification des logs d'erreurs
- La maintenance de la base de données
- L'application des mises à jour de sécurité
- La gestion des sauvegardes
- Le déploiement des nouvelles versions

### 2.1.2 Exigences fonctionnelles

Les exigences fonctionnelles décrivent l'ensemble des fonctionnalités que le système doit offrir pour répondre aux besoins des utilisateurs. Elles sont organisées par modules fonctionnels.

#### Module Authentification

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-01 | Inscription | L'utilisateur doit pouvoir créer un compte avec son nom, email et mot de passe | Haute |
| EF-02 | Connexion | L'utilisateur doit pouvoir se connecter avec son email et son mot de passe | Haute |
| EF-03 | Connexion Google | L'utilisateur doit pouvoir se connecter via son compte Google | Haute |
| EF-04 | Mot de passe oublié | L'utilisateur doit pouvoir réinitialiser son mot de passe | Moyenne |
| EF-05 | Rafraîchissement de session | Le système doit renouveler automatiquement le token d'accès | Haute |
| EF-06 | Déconnexion | L'utilisateur doit pouvoir se déconnecter et invalider sa session | Haute |

#### Module Transactions

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-07 | Ajout de transaction | L'utilisateur doit pouvoir ajouter une transaction (revenu ou dépense) avec montant, catégorie, date et note | Haute |
| EF-08 | Modification de transaction | L'utilisateur doit pouvoir modifier une transaction existante | Haute |
| EF-09 | Suppression de transaction | L'utilisateur doit pouvoir supprimer une transaction | Haute |
| EF-10 | Liste des transactions | L'utilisateur doit pouvoir consulter la liste paginée de ses transactions | Haute |
| EF-11 | Filtrage des transactions | L'utilisateur doit pouvoir filtrer les transactions par type, catégorie et période | Haute |
| EF-12 | Recherche de transactions | L'utilisateur doit pouvoir rechercher des transactions par mot-clé | Moyenne |
| EF-13 | Ajout rapide | L'utilisateur doit pouvoir ajouter une transaction via des montants prédéfinis | Moyenne |

#### Module Catégories

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-14 | Création de catégorie | L'utilisateur doit pouvoir créer une catégorie personnalisée avec nom, icône et couleur | Haute |
| EF-15 | Modification de catégorie | L'utilisateur doit pouvoir modifier une catégorie existante | Haute |
| EF-16 | Suppression de catégorie | L'utilisateur doit pouvoir supprimer une catégorie | Haute |
| EF-17 | Catégories par défaut | Le système doit créer des catégories par défaut à l'inscription (Shopping, Food, Transport, Rent, Health, Salary) | Haute |
| EF-18 | Détection des doublons | Le système doit détecter et signaler les noms de catégories en double | Moyenne |

#### Module Wallet

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-19 | Consultation du solde | L'utilisateur doit pouvoir visualiser le solde de son portefeuille | Haute |
| EF-20 | Historique des activités | L'utilisateur doit pouvoir consulter la liste des dernières transactions affectant le solde | Haute |
| EF-21 | Ajout de fonds | L'utilisateur doit pouvoir ajouter des fonds à son portefeuille | Haute |

#### Module Goals (Objectifs d'épargne)

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-22 | Création d'objectif | L'utilisateur doit pouvoir créer un objectif avec nom, montant cible, durée, fréquence et catégorie | Haute |
| EF-23 | Suivi de progression | L'utilisateur doit pouvoir visualiser la progression de ses objectifs avec barre de progression et pourcentage | Haute |
| EF-24 | Ajout d'épargne | L'utilisateur doit pouvoir ajouter une somme à l'épargne d'un objectif | Haute |
| EF-25 | Insights intelligents | Le système doit fournir des indicateurs de progression (on track, ahead, delayed, just_started, completed) | Moyenne |
| EF-26 | Modification d'objectif | L'utilisateur doit pouvoir modifier un objectif existant | Haute |
| EF-27 | Suppression d'objectif | L'utilisateur doit pouvoir supprimer un objectif | Haute |
| EF-28 | Recherche d'objectifs | L'utilisateur doit pouvoir rechercher des objectifs par nom ou catégorie | Moyenne |

#### Module Statistiques

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-29 | Graphique hebdomadaire | L'utilisateur doit pouvoir visualiser un graphique en barres de ses revenus et dépenses par jour | Haute |
| EF-30 | Graphique mensuel | L'utilisateur doit pouvoir visualiser un graphique en barres de ses revenus et dépenses par mois | Haute |
| EF-31 | Résumé par catégorie | L'utilisateur doit pouvoir consulter la répartition de ses dépenses par catégorie | Haute |
| EF-32 | Comparaison de périodes | L'utilisateur doit pouvoir comparer deux périodes entre elles | Moyenne |
| EF-33 | Détection d'anomalies | Le système doit détecter les dépenses anormales par rapport à la moyenne | Moyenne |

#### Module Assistant IA

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-34 | Chat conversationnel | L'utilisateur doit pouvoir dialoguer en langage naturel avec l'assistant IA | Haute |
| EF-35 | Exécution d'actions | L'assistant doit pouvoir exécuter des actions (créer transaction, consulter solde, etc.) | Haute |
| EF-36 | Confirmation des actions destructives | L'assistant doit demander confirmation avant toute action de modification ou suppression | Haute |
| EF-37 | Suggestions rapides | L'utilisateur doit pouvoir accéder à des suggestions de messages pré-définis | Moyenne |
| EF-38 | Support multilingue | L'assistant doit détecter et répondre dans la langue de l'utilisateur (français, anglais, arabe) | Haute |
| EF-39 | Mémoire contextuelle | L'assistant doit conserver l'historique de la conversation pour un suivi cohérent | Haute |

#### Module Transcription vocale

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-40 | Enregistrement audio | L'utilisateur doit pouvoir enregistrer un message vocal | Haute |
| EF-41 | Transcription automatique | Le système doit transcrire l'audio en texte via Whisper | Haute |
| EF-42 | Exécution via l'assistant | Le texte transcrit doit être traité par l'assistant IA comme un message texte | Haute |

#### Module Prédictions

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-43 | Estimation des dépenses | Le système doit estimer les dépenses du mois suivant sur la base de l'historique | Moyenne |
| EF-44 | Calcul du potentiel d'épargne | Le système doit estimer le temps nécessaire pour atteindre un objectif d'épargne | Moyenne |
| EF-45 | Tendances financières | Le système doit indiquer si les dépenses sont en hausse, en baisse ou stables | Moyenne |

#### Module Profil

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-46 | Consultation du profil | L'utilisateur doit pouvoir consulter ses informations personnelles | Haute |
| EF-47 | Modification du profil | L'utilisateur doit pouvoir modifier son nom, téléphone, adresse | Haute |
| EF-48 | Upload d'avatar | L'utilisateur doit pouvoir télécharger une photo de profil | Haute |
| EF-49 | Suppression d'avatar | L'utilisateur doit pouvoir supprimer sa photo de profil | Moyenne |
| EF-50 | Changement de devise | L'utilisateur doit pouvoir changer la devise principale (TND, USD, EUR, GBP) | Haute |
| EF-51 | Changement de langue | L'utilisateur doit pouvoir changer la langue de l'interface (français, anglais, arabe) | Haute |

#### Module Notifications

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-52 | Notifications push | L'utilisateur doit recevoir des notifications push de rappel | Moyenne |
| EF-53 | Historique des notifications | L'utilisateur doit pouvoir consulter l'historique de ses notifications | Moyenne |
| EF-54 | Marquage lu/non lu | L'utilisateur doit pouvoir marquer une notification comme lue | Basse |
| EF-55 | Rappel périodique | Le système doit envoyer un rappel périodique (toutes les ~13 heures) pour encourager le suivi | Moyenne |

#### Module API REST

| Code | Exigence | Description | Priorité |
|------|----------|-------------|----------|
| EF-56 | Endpoints REST | Le backend doit exposer une API REST complète avec 28 endpoints | Haute |
| EF-57 | Pagination | Les endpoints de liste doivent supporter la pagination | Haute |
| EF-58 | Authentification API | Tous les endpoints (sauf auth) doivent être protégés par JWT | Haute |

#### Maquettes des interfaces utilisateur

Les maquettes ci-dessous illustrent les écrans principaux de l'application Expense Tracker, conçues sur Figma. Chaque écran correspond à un ou plusieurs modules fonctionnels décrits précédemment.

| Image | Écran | Modules fonctionnels associés |
|-------|-------|-------------------------------|
| `Sign Up.png` | Écran d'inscription | Authentification (EF-01) |
| `Sign In.png` | Écran de connexion | Authentification (EF-02, EF-03, EF-04) |
| `Home.png` | Écran d'accueil / Tableau de bord | Wallet (EF-19), Statistiques (EF-29, EF-30) |
| `Add Transaction.png` | Écran d'ajout de transaction | Transactions (EF-07, EF-13), Catégories (EF-14) |
| `Savings Goals.png` | Écran des objectifs d'épargne | Goals (EF-22, EF-23, EF-24, EF-25) |
| `Financial Copilot (Chat).png` | Écran de l'assistant IA conversationnel | Assistant IA (EF-34, EF-35, EF-36, EF-37, EF-38, EF-39), Transcription vocale (EF-40, EF-41, EF-42) |

![Sign Up](images%20figma/Sign%20Up.png)

![Sign In](images%20figma/Sign%20In.png)

![Home](images%20figma/Home.png)

![Add Transaction](images%20figma/Add%20Transaction.png)

![Savings Goals](images%20figma/Savings%20Goals.png)

![Financial Copilot (Chat)](images%20figma/Financial%20Copilot%20(Chat).png)

### 2.1.3 Exigences non fonctionnelles

Les exigences non fonctionnelles définissent les contraintes de qualité, de performance et d'environnement auxquelles le système doit satisfaire.

| Code | Exigence | Description | Mesure |
|------|----------|-------------|--------|
| ENF-01 | **Sécurité des mots de passe** | Les mots de passe doivent être hachés avant stockage | Bcrypt avec 10 rounds |
| ENF-02 | **Authentification JWT** | L'authentification doit utiliser des tokens JWT avec expiration | Token d'accès 1h, refresh token 7 jours |
| ENF-03 | **Protection des routes** | Les routes API doivent être protégées par middleware JWT | Vérification systématique |
| ENF-04 | **Chiffrement des données** | Les données en transit doivent être chiffrées | HTTPS obligatoire |
| ENF-05 | **Performance des requêtes** | Les réponses API doivent être rapides | Temps de réponse < 2s pour 95% des appels |
| ENF-06 | **Disponibilité** | Le système doit être accessible de manière fiable | Disponibilité 99% |
| ENF-07 | **Compatibilité mobile** | L'application doit fonctionner sur les versions récentes | iOS 13+, Android 8+ |
| ENF-08 | **Ergonomie** | L'interface doit être intuitive et rapide d'accès | 3 clics maximum pour toute action principale |
| ENF-09 | **Maintenabilité** | Le code doit être modulaire et documenté | Architecture feature-based + commentaires |
| ENF-10 | **Scalabilité** | L'architecture doit permettre l'ajout de nouvelles fonctionnalités | Séparation des modules |
| ENF-11 | **Gestion des erreurs** | Les erreurs doivent être gérées proprement avec messages explicites | Messages utilisateur + logs backend |
| ENF-12 | **Temps de réponse IA** | L'assistant IA doit répondre dans un délai acceptable | < 5s par message |
| ENF-13 | **Limitation de débit** | L'API IA doit limiter le nombre de requêtes par utilisateur | 30 requêtes/min |
| ENF-14 | **Taille des fichiers** | Les uploads doivent être limités pour éviter la saturation | Avatar 5MB, Audio 25MB |
| ENF-15 | **Multilingue** | L'interface et l'assistant doivent supporter plusieurs langues | Français, Anglais, Arabe |
| ENF-16 | **Adaptabilité visuelle** | L'application doit supporter un thème clair et un thème sombre | Détection automatique + bascule manuelle |

## 2.2 Modélisation des besoins

### 2.2.1 Diagramme de cas d'utilisation

Le diagramme de cas d'utilisation global modélise l'ensemble des interactions entre les acteurs et le système Expense Tracker.

#### Spécifications UML — Diagramme de cas d'utilisation global

```
┌─────────────────────────────────────────────────────────────────┐
│                    SYSTEME EXPENSE TRACKER                       │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                   MODULE AUTHENTIFICATION                  │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │  S'inscrire  │ │Se connecter │ │Se connecter avec │    │   │
│  │  │              │ │(email/pass) │ │     Google       │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  │  ┌─────────────┐ ┌─────────────┐                          │   │
│  │  │Réinitialiser │ │Se déconnecter│                         │   │
│  │  │   mot passe  │ │              │                         │   │
│  │  └─────────────┘ └─────────────┘                          │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                 MODULE TRANSACTIONS                        │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │  Ajouter une │ │ Modifier une│ │ Supprimer une    │    │   │
│  │  │ transaction  │ │ transaction │ │   transaction    │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  │  ┌─────────────┐ ┌─────────────┐                          │   │
│  │  │  Consulter   │ │  Filtrer /  │                         │   │
│  │  │transactions  │ │  Rechercher  │                         │   │
│  │  └─────────────┘ └─────────────┘                          │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                   MODULE CATEGORIES                        │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │   Créer une  │ │ Modifier une│ │ Supprimer une    │    │   │
│  │  │  catégorie   │ │  catégorie  │ │   catégorie      │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                    MODULE WALLET                           │   │
│  │  ┌─────────────┐ ┌─────────────┐                           │   │
│  │  │ Consulter le │ │ Ajouter des │                          │   │
│  │  │    solde     │ │   fonds     │                          │   │
│  │  └─────────────┘ └─────────────┘                           │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                    MODULE GOALS                            │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │   Créer un   │ │   Suivre la  │ │ Ajouter de       │    │   │
│  │  │   objectif   │ │ progression  │ │   l'épargne      │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  │  ┌─────────────┐ ┌─────────────┐                          │   │
│  │  │ Modifier un  │ │ Supprimer un│                         │   │
│  │  │  objectif    │ │  objectif   │                         │   │
│  │  └─────────────┘ └─────────────┘                          │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                  MODULE STATISTIQUES                       │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │ Visualiser   │ │ Consulter   │ │ Détecter les     │    │   │
│  │  │ graphiques   │ │ résumé par  │ │   anomalies      │    │   │
│  │  │              │ │  catégorie  │ │                  │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                    MODULE IA                               │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │  Discuter    │ │  Confirmer  │ │  Enregistrer     │    │   │
│  │  │ avec l'IA    │ │  une action │ │   un vocal       │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  │  ┌──────────────────────────────────────────────────┐    │   │
│  │  │        <<include>> (Transcription → Chat)         │    │   │
│  │  └──────────────────────────────────────────────────┘    │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │                   MODULE PROFIL                            │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────┐    │   │
│  │  │  Consulter   │ │  Modifier   │ │  Uploader /      │    │   │
│  │  │   le profil  │ │  le profil  │ │ Supprimer avatar │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────┘    │   │
│  │  ┌─────────────────────┐ ┌──────────────────────┐        │   │
│  │  │  Changer la devise  │ │  Changer la langue   │        │   │
│  │  └─────────────────────┘ └──────────────────────┘        │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│        ┌────────────────────────────────────────────┐             │
│        │           MODULE NOTIFICATIONS              │             │
│        │  ┌────────────────┐ ┌──────────────────┐   │             │
│        │  │  Consulter les  │ │  Marquer comme    │   │             │
│        │  │  notifications  │ │   lu / non lu     │   │             │
│        │  └────────────────┘ └──────────────────┘   │             │
│        └────────────────────────────────────────────┘             │
│                                                                   │
│                    ┌──────────────┐                               │
│                    │ Administrateur│                               │
│                    │    (gère     │                               │
│                    │  plateforme)  │                               │
│                    └──────────────┘                               │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

Acteurs :
  👤 Utilisateur (acteur principal)
  ⚙ Administrateur (acteur secondaire)

Légende des relations :
  ───> Association entre acteur et cas d'utilisation
  <<include>> Relation d'inclusion (obligatoire)
  <<extend>> Relation d'extension (optionnelle)

Relations :
  - Utilisateur est associé à tous les cas d'utilisation
  - <<include>> entre "Enregistrer un vocal" et "Discuter avec l'IA" (la transcription est automatiquement envoyée au chat)
  - <<include>> entre "Ajouter une transaction" et "Mettre à jour le solde wallet"
  - <<extend>> entre "Consulter les transactions" et "Filtrer / Rechercher"
  - Administrateur est associé à la gestion de la plateforme (hors périmètre détaillé ci-dessus)
```

### 2.2.2 Description des cas d'utilisation majeurs

#### UC-01 : S'authentifier

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur ouvre l'application sans session active  
**Précondition** : Aucune  

**Scénario nominal** :
1. L'utilisateur lance l'application
2. Le système détecte l'absence de token valide
3. L'utilisateur est redirigé vers l'écran de connexion
4. L'utilisateur saisit son email et son mot de passe
5. L'utilisateur valide le formulaire
6. Le système envoie une requête POST à `/auth/login`
7. Le backend vérifie les identifiants dans MongoDB et compare le mot de passe haché (Bcrypt)
8. Le backend génère un access token JWT (1h) et un refresh token (7 jours via cookie)
9. Le système stocke le token dans AsyncStorage
10. L'utilisateur est redirigé vers l'écran d'accueil

**Scénario alternatif A — Identifiants incorrects** :
1. À l'étape 7, la vérification échoue (email inexistant ou mot de passe incorrect)
2. Le backend retourne une erreur 401
3. Le système affiche un message d'erreur « Email ou mot de passe incorrect »
4. Retour à l'étape 4

**Scénario alternatif B — Connexion via Google** :
1. À l'étape 3, l'utilisateur choisit « Se connecter avec Google »
2. Le système ouvre le flux OAuth Google (expo-auth-session) et récupère un idToken
3. Le backend vérifie le jeton Google via google-auth-library et crée ou récupère l'utilisateur
4. Le backend génère les tokens JWT
5. Reprendre à l'étape 9

**Postcondition** : L'utilisateur est authentifié et peut accéder à l'ensemble des fonctionnalités de l'application.

---

#### UC-02 : Ajouter une transaction

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur souhaite enregistrer une dépense ou un revenu  
**Précondition** : L'utilisateur est authentifié  

**Scénario nominal** :
1. L'utilisateur appuie sur le bouton FAB « + » depuis n'importe quel écran
2. Le système affiche l'écran d'ajout de transaction
3. L'utilisateur choisit le type : Dépense ou Revenu
4. L'utilisateur saisit le montant (avec clavier numérique personnalisé)
5. L'utilisateur sélectionne une catégorie (parmi les 4 premières suggérées ou via « Voir tout »)
6. Optionnellement, l'utilisateur ajoute une note et choisit une date
7. L'utilisateur valide l'ajout
8. Le système envoie une requête POST à `/transactions`
9. Le backend crée la transaction dans MongoDB et retourne l'objet créé
10. Le store Zustand est mis à jour localement
11. L'utilisateur est redirigé vers l'écran précédent avec une confirmation visuelle

**Scénario alternatif A — Ajout rapide (Quick Add)** :
1. À l'étape 4, l'utilisateur peut choisir un montant prédéfini (Morning Coffee 4.50$, Uber Ride 12.00$)
2. Le système pré-remplit le type et le montant
3. Reprendre à l'étape 5

**Scénario alternatif B — Création d'une catégorie en ligne** :
1. À l'étape 5, si aucune catégorie ne correspond, l'utilisateur clique sur « Créer »
2. Le système ouvre une modale de création de catégorie (nom + icône + couleur)
3. Le système vérifie l'absence de doublon et crée la catégorie
4. Retour à l'étape 5 avec la nouvelle catégorie sélectionnée

**Scénario alternatif C — Échec réseau** :
1. À l'étape 8, la requête échoue (timeout ou serveur injoignable)
2. Le système affiche un message d'erreur « Impossible d'ajouter la transaction »
3. La transaction n'est pas créée

**Postcondition** : La transaction est enregistrée et le solde du wallet est mis à jour.

---

#### UC-03 : Gérer un objectif d'épargne

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur souhaite créer et suivre un objectif d'épargne  
**Précondition** : L'utilisateur est authentifié et possède un solde suffisant  

**Scénario nominal — Création** :
1. L'utilisateur accède à l'onglet Goals depuis la barre de navigation
2. L'utilisateur clique sur « Créer un objectif »
3. **Étape 1** : L'utilisateur choisit le montant cible (saisie manuelle ou quick select : 1k, 5k, 10k, 25k)
4. **Étape 2** : L'utilisateur saisit le nom de l'objectif, choisit la durée (6 mois, 1 an, 2 ans) et la fréquence (Hebdomadaire, Mensuelle)
5. L'utilisateur sélectionne une catégorie d'objectif
6. Le système calcule une estimation mensuelle et affiche une carte d'insight
7. L'utilisateur valide la création
8. Le système envoie une requête POST à `/goal/createGoals`
9. Le backend crée l'objectif et retourne l'objet créé avec la catégorie peuplée
10. Le store Zustand est mis à jour

**Scénario nominal — Suivi de progression** :
1. L'utilisateur consulte l'onglet Goals
2. Le système affiche les cartes des objectifs actifs avec :
   - Barre de progression animée
   - Pourcentage de complétion
   - Montant épargné / montant cible
   - Insight intelligent (on track, ahead, delayed, just_started, completed)
3. L'utilisateur peut cliquer sur un objectif pour voir les détails

**Scénario nominal — Ajout d'épargne** :
1. L'utilisateur clique sur « Ajouter de l'épargne » sur un objectif
2. Le système ouvre une modale de saisie de montant
3. L'utilisateur saisit le montant à épargner
4. Le système valide que le montant n'excède pas le solde disponible ni le montant restant
5. L'utilisateur confirme
6. Le système envoie une requête PUT à `/goal/goals/:id` avec le nouveau savedAmount
7. Une transaction de type dépense est automatiquement créée pour refléter l'épargne

**Scénario alternatif — Objectif infaisable** :
1. À l'étape 7, si la contribution mensuelle nécessaire dépasse les capacités de l'utilisateur
2. Le système affiche une suggestion d'ajustement (ex: « Allonger la durée à 2 ans réduirait la mensualité à X € »)

**Postcondition** : L'objectif est créé ou mis à jour avec la nouvelle progression visible dans l'interface.

---

#### UC-04 : Consulter les statistiques

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur souhaite analyser ses habitudes de dépenses  
**Précondition** : L'utilisateur est authentifié et possède des transactions enregistrées  

**Scénario nominal** :
1. L'utilisateur accède à l'onglet Statistiques
2. Le système affiche le tableau de bord avec :
   - Le solde actuel en haut de l'écran
   - Un sélecteur de période (Hebdomadaire / Mensuel)
   - Un graphique en barres avec les revenus (vert) et dépenses (rouge)
   - Des cartes résumé (Total revenus, Total dépenses)
3. L'utilisateur peut basculer entre les vues hebdomadaires et mensuelles
4. Le système recalcule et met à jour le graphique et les résumés
5. L'utilisateur peut consulter la ventilation par catégorie
6. Le système détecte automatiquement les anomalies (ex: dépenses 30% supérieures à la moyenne des 3 derniers mois)

**Scénario alternatif — Aucune transaction** :
1. Si l'utilisateur n'a pas encore enregistré de transaction
2. Le système affiche un état vide avec un message invitant à ajouter une première transaction

**Postcondition** : L'utilisateur a une vision claire de sa situation financière sur la période sélectionnée.

---

#### UC-05 : Interagir avec l'assistant IA

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur souhaite interagir avec l'assistant IA en langage naturel  
**Précondition** : L'utilisateur est authentifié  

**Scénario nominal — Message texte** :
1. L'utilisateur accède à l'écran de chat IA (via le bouton flottant ou l'onglet dédié)
2. Le système affiche l'historique de la conversation et des suggestions rapides
3. L'utilisateur saisit un message texte (ex: « Combien ai-je dépensé ce mois-ci ? »)
4. Le système envoie la requête à POST `/ai/chat`
5. Le backend récupère l'historique de la conversation et construit le system prompt personnalisé
6. Le moteur Groq (Llama 3.3 70B) analyse la demande et détermine s'il faut utiliser des outils
7. Si outil requis et lecture seule → l'outil est exécuté immédiatement, les résultats sont injectés dans le contexte
8. Si outil requis et destructif → un objet pendingAction est créé en base
9. Le système affiche la réponse de l'IA (message et éventuellement une carte de confirmation)
10. L'utilisateur peut continuer la conversation ou confirmer l'action

**Scénario nominal — Confirmation d'action** :
1. L'assistant a demandé confirmation pour créer une transaction (ex: « Ajouter 15€ de repas »)
2. Le système affiche une carte de confirmation jaune avec boutons Confirmer / Annuler
3. L'utilisateur clique sur « Confirmer »
4. Le système envoie une requête POST à `/ai/confirm` avec `{ confirmed: true }`
5. Le backend exécute l'outil via toolExecutor et génère un message de confirmation personnalisé
6. Le store de transactions est rafraîchi automatiquement

**Scénario nominal — Saisie vocale** :
1. À l'étape 3, l'utilisateur appuie sur le bouton microphone
2. Le système démarre l'enregistrement audio (animation de pulsation)
3. L'utilisateur dicte sa transaction : « J'ai dépensé 25 euros chez le coiffeur »
4. L'utilisateur arrête l'enregistrement
5. Le fichier audio est envoyé à POST `/ai/voice`
6. Le backend transcrit l'audio via Groq Whisper et traite le texte via le pipeline IA
7. Le système affiche la transcription et la réponse de l'assistant

**Scénario alternatif — Annulation** :
1. À l'étape 4 du scénario de confirmation, l'utilisateur clique sur « Annuler »
2. Le système envoie POST `/ai/confirm` avec `{ confirmed: false }`
3. L'assistant confirme l'annulation et la conversation continue

**Scénario alternatif — Tentative d'action non autorisée** :
1. L'utilisateur demande une action hors périmètre (ex: « Envoie 100€ à Paul »)
2. L'assistant répond que cette action n'est pas prise en charge et propose des alternatives

**Postcondition** : L'utilisateur a obtenu une réponse ou une action a été exécutée via l'assistant.

---

#### UC-06 : Gérer le profil utilisateur

**Acteur principal** : Utilisateur  
**Déclencheur** : L'utilisateur souhaite modifier ses informations personnelles  
**Précondition** : L'utilisateur est authentifié  

**Scénario nominal — Modification du profil** :
1. L'utilisateur accède à l'onglet Profil
2. Le système affiche les informations personnelles (avatar, nom, email, téléphone, adresse)
3. L'utilisateur clique sur « Modifier »
4. Le système affiche le formulaire d'édition avec les champs pré-remplis
5. L'utilisateur modifie les champs souhaités (nom, téléphone avec indicatif pays, adresse)
6. L'utilisateur valide les modifications
7. Le système envoie une requête PUT à `/users/profile`
8. Le backend met à jour les données dans MongoDB et retourne le profil mis à jour
9. Le contexte utilisateur est mis à jour dans l'application

**Scénario nominal — Upload d'avatar** :
1. Depuis l'écran d'édition du profil, l'utilisateur clique sur l'avatar
2. Le système ouvre le sélecteur d'images (expo-image-picker)
3. L'utilisateur prend une photo ou choisit une image dans la galerie
4. Le système valide la taille (max 5MB) et le format (JPEG, PNG, WebP)
5. L'image est uploadée via une requête POST FormData à `/users/avatar`
6. Le middleware Multer traite le fichier et l'enregistre dans `uploads/avatars/`
7. Le backend met à jour l'avatar et retourne l'URL complète
8. Le nouvel avatar est affiché immédiatement

**Scénario nominal — Changement de préférences** :
1. Dans l'écran Profil, l'utilisateur peut :
   - Changer la devise : cycle entre TND → USD → EUR → GBP
   - Changer la langue : cycle entre English → Français → العربية
   - Activer/désactiver les notifications push
2. Chaque modification est persistée via l'API et dans AsyncStorage

**Scénario alternatif — Échec upload avatar** :
1. À l'étape 5, si le fichier dépasse 5MB ou le format est invalide
2. Le système affiche un message d'erreur spécifique (« Fichier trop volumineux », « Format non supporté »)
3. L'upload est annulé

**Postcondition** : Les informations du profil sont mises à jour et visibles dans l'interface.

### 2.2.3 Diagrammes de séquence système

#### Diagramme de séquence — Authentification (Connexion email)

```
UTILISATEUR          APP (React Native)          API (Express)          MONGODB        GROQ
    │                       │                         │                    │              │
    │  1. Saisit email      │                         │                    │              │
    │  et mot de passe      │                         │                    │              │
    │──────────────────────>│                         │                    │              │
    │                       │  2. POST /auth/login    │                    │              │
    │                       │  { email, password }    │                    │              │
    │                       │────────────────────────>│                    │              │
    │                       │                         │  3. findOne({email})│              │
    │                       │                         │───────────────────>│              │
    │                       │                         │  <── user ────────│              │
    │                       │                         │                    │              │
    │                       │                         │  4. bcrypt.compare │              │
    │                       │                         │  (password, hash)  │              │
    │                       │                         │   ────────────     │              │
    │                       │                         │   Résultat: match  │              │
    │                       │                         │                    │              │
    │                       │                         │  5. jwt.sign()     │              │
    │                       │                         │  accessToken (1h)  │              │
    │                       │                         │  refreshToken (7d) │              │
    │                       │                         │                    │              │
    │                       │  <── 200 OK ────────────│                    │              │
    │                       │  { accessToken,         │                    │              │
    │                       │    user } + cookie       │                    │              │
    │                       │                         │                    │              │
    │                       │  6. Stocke token dans   │                    │              │
    │                       │  AsyncStorage            │                    │              │
    │                       │   ────────────           │                    │              │
    │                       │                         │                    │              │
    │  <── Écran d'accueil──│                         │                    │              │
    │                       │                         │                    │              │
```

#### Diagramme de séquence — Création de transaction via l'assistant IA

```
UTILISATEUR          APP (React Native)          API (Express)          MONGODB              GROQ
    │                       │                         │                    │                  │
    │ 1. "Ajoute 15€        │                         │                    │                  │
    │    de repas"          │                         │                    │                  │
    │──────────────────────>│                         │                    │                  │
    │                       │ 2. POST /ai/chat        │                    │                  │
    │                       │    { message }          │                    │                  │
    │                       │────────────────────────>│                    │                  │
    │                       │                         │ 3. getOrCreateConversation()          │
    │                       │                         │───────────────────>│                  │
    │                       │                         │<── conversation ──│                  │
    │                       │                         │                    │                  │
    │                       │                         │ 4. buildSystemPrompt(user)            │
    │                       │                         │ 5. getContextMessages() (20 derniers)  │
    │                       │                         │                    │                  │
    │                       │                         │ 6. Groq chat completion               │
    │                       │                         │──────────────────────────────────────>│
    │                       │                         │<── tool_call: create_expense ────────│
    │                       │                         │  { amount: 15,                        │
    │                       │                         │    categoryName: "Food",               │
    │                       │                         │    note: "Repas" }                     │
    │                       │                         │                    │                  │
    │                       │                         │ 7. create_expense est DESTRUCTIF      │
    │                       │                         │  → setPendingAction()                  │
    │                       │                         │───────────────────>│                  │
    │                       │                         │                    │                  │
    │                       │<── { type: "confirmation_required",          │                  │
    │                       │      pendingAction: {                         │                  │
    │                       │        toolName: "create_expense",            │                  │
    │                       │        args: { amount: 15, category: "Food" },│                  │
    │                       │        message: "Ajouter une dépense de       │                  │
    │                       │                  15€ dans la catégorie Food ?"│                  │
    │                       │      } } ────────────│                        │                  │
    │                       │                         │                    │                  │
    │ 8. Affiche carte      │                         │                    │                  │
    │    de confirmation    │                         │                    │                  │
    │<──────────────────────│                         │                    │                  │
    │                       │                         │                    │                  │
    │ 9. Clique "Confirmer" │                         │                    │                  │
    │──────────────────────>│                         │                    │                  │
    │                       │10. POST /ai/confirm     │                    │                  │
    │                       │    { confirmed: true }  │                    │                  │
    │                       │────────────────────────>│                    │                  │
    │                       │                         │11. getPendingAction()                 │
    │                       │                         │───────────────────>│                  │
    │                       │                         │12. executeConfirmedAction()           │
    │                       │                         │  → toolExecutor.create_expense()      │
    │                       │                         │───────────────────>│                  │
    │                       │                         │<── transaction ────│                  │
    │                       │                         │                    │                  │
    │                       │                         │13. Groq génère msg confirmation       │
    │                       │                         │──────────────────────────────────────>│
    │                       │                         │<── message ───────────────────────────│
    │                       │                         │                    │                  │
    │                       │<── { type: "success",   │                    │                  │
    │                       │      message: "J'ai     │                    │                  │
    │                       │      ajouté une dépense  │                    │                  │
    │                       │      de 15€ dans Food",  │                    │                  │
    │                       │      executedAction:...}│                    │                  │
    │                       │                         │                    │                  │
    │                       │14. Rafraîchit store     │                    │                  │
    │                       │    transactions         │                    │                  │
    │                       │   ────────────           │                    │                  │
    │                       │                         │                    │                  │
    │<── Message de         │                         │                    │                  │
    │    confirmation ──────│                         │                    │                  │
```

#### Diagramme de séquence — Création d'un objectif d'épargne

```
UTILISATEUR          APP (React Native)          API (Express)          MONGODB
    │                       │                         │                    │
    │ 1. Accède à Goals     │                         │                    │
    │──────────────────────>│                         │                    │
    │                       │ 2. GET /goal/goals      │                    │
    │                       │────────────────────────>│                    │
    │                       │                         │ 3. find({userId})  │
    │                       │                         │───────────────────>│
    │                       │                         │<── goals[] ────────│
    │                       │<── { success, data[] }──│                    │
    │                       │                         │                    │
    │ 4. Affiche liste      │                         │                    │
    │    des objectifs      │                         │                    │
    │<──────────────────────│                         │                    │
    │                       │                         │                    │
    │ 5. Clique "Créer"     │                         │                    │
    │──────────────────────>│                         │                    │
    │                       │                         │                    │
    │ 6. Étape 1:           │                         │                    │
    │    saisit montant      │                         │                    │
    │    cible (5000 €)     │                         │                    │
    │   ────────────        │                         │                    │
    │                       │                         │                    │
    │ 7. Étape 2:           │                         │                    │
    │    saisit nom, durée   │                         │                    │
    │    (1 an), fréquence   │                         │                    │
    │    (Mensuelle)         │                         │                    │
    │   ────────────        │                         │                    │
    │                       │                         │                    │
    │ 8. Calcule estimation │                         │                    │
    │    (5000/12 ≈ 417€/mois)                        │                    │
    │   ────────────        │                         │                    │
    │                       │                         │                    │
    │ 9. Affiche carte      │                         │                    │
    │    d'insight          │                         │                    │
    │<──────────────────────│                         │                    │
    │                       │                         │                    │
    │ 10. Confirme création │                         │                    │
    │──────────────────────>│                         │                    │
    │                       │11. POST /goal/createGoals                   │
    │                       │    { name, duration,    │                    │
    │                       │      frequency, category,│                   │
    │                       │      target }            │                    │
    │                       │────────────────────────>│                    │
    │                       │                         │12. create({userId, │
    │                       │                         │    name, target,   │
    │                       │                         │    savedAmount:0}) │
    │                       │                         │───────────────────>│
    │                       │                         │<── goal ──────────│
    │                       │<── { success, data }────│                    │
    │                       │                         │                    │
    │                       │13. store.addGoal(goal)  │                    │
    │                       │   ────────────           │                    │
    │                       │                         │                    │
    │ 14. Affiche nouvelle  │                         │                    │
    │     carte objectif    │                         │                    │
    │<──────────────────────│                         │                    │
```

### 2.2.4 Contraintes techniques

#### Contraintes matérielles

| Contrainte | Description | Impact |
|------------|-------------|--------|
| Terminal mobile | L'application doit fonctionner sur smartphone (iOS et Android) | Interface adaptative, gestes tactiles |
| Appareil photo | Requis pour la capture d'avatar via expo-image-picker | Permission CAMERA requise |
| Microphone | Requis pour l'enregistrement vocal via expo-audio | Permission MICROPHONE requise |
| Stockage local | L'application utilise AsyncStorage pour les tokens et préférences | Persistance limitée à 6 Mo |
| Connectivité réseau | L'application nécessite une connexion internet pour l'API et l'IA | Impossible hors ligne pour les opérations principales |

#### Contraintes logicielles

| Contrainte | Description |
|------------|-------------|
| **Système d'exploitation** | iOS 13+ et Android 8+ (API level 26+) |
| **Framework mobile** | React Native 0.81 avec Expo SDK 54 |
| **Serveur** | Node.js 18+ avec Express 5 |
| **Base de données** | MongoDB 6+ (locale ou Atlas) |
| **API IA** | Groq Cloud avec modèle Llama 3.3 70B (rate limit : 30 requêtes/min/utilisateur) |
| **Transcription** | Groq Whisper large-v3-turbo (fichiers audio max 25 Mo) |
| **Stockage fichiers** | Local sur disque serveur (uploads/avatars/, uploads/audio/) |
| **Authentification Google** | Nécessite un projet Google Cloud avec OAuth 2.0 configuré |
| **Variables d'environnement** | 8 variables requises (PORT, DATABASE_URL, JWT secrets, Google Client IDs, Groq API Key) |

#### Contraintes de performance

| Contrainte | Seuil |
|------------|-------|
| Temps de réponse API (lecture) | < 500 ms |
| Temps de réponse API (écriture) | < 1 s |
| Temps de réponse IA (chat) | < 5 s |
| Temps de transcription vocale | < 3 s pour 30 secondes d'audio |
| Temps de démarrage application | < 3 s sur appareil récent |
| Temps de rafraîchissement token | Automatique, transparent pour l'utilisateur |
| Taille maximale upload avatar | 5 Mo |
| Taille maximale upload audio | 25 Mo |
| Pagination API | 10 à 50 éléments par page |

#### Contraintes légales et de sécurité

| Contrainte | Description |
|------------|-------------|
| **RGPD** | Les données utilisateur doivent pouvoir être supprimées sur demande (droit à l'effacement) |
| **Hachage** | Les mots de passe doivent être hachés avec Bcrypt (salt rounds : 10) |
| **Tokens** | Access token JWT avec expiration courte (1h) + refresh token sécurisé (cookie httpOnly, 7 jours) |
| **Validation** | Validation des entrées côté client (Zod) et côté serveur (contrôleurs) |
| **CORS** | Accès API limité aux origines autorisées (localhost, réseau local) |
| **Protection des routes** | Middleware JWT sur tous les endpoints sauf auth |

### 2.2.5 Répartition des tâches et planning

Le projet Expense Tracker a été réalisé sur une période de **14 semaines** par une équipe de deux développeurs. La répartition des tâches et le planning détaillé sont présentés ci-dessous.

#### Répartition des responsabilités

| Membre | Rôle | Responsabilités principales |
|--------|------|-----------------------------|
| **Oussama Elouragini** | Développeur Frontend | Composants UI, navigation Expo Router, stores Zustand, intégration API, thèmes, animations, expérience utilisateur, tests frontend |
| **Fadi Ben Kalifa** | Développeur Backend | API REST Express, modélisation MongoDB, authentification JWT, intégration Groq IA, transcription Whisper, uploads, sécurité, déploiement |

#### Planification des 7 phases

**TABLE 1.2 – Planification et livrables des 7 phases du projet Expense Tracker**

| Phase | Sem. | Objectif et travaux réalisés | Livrable validé |
|-------|------|------------------------------|-----------------|
| **Phase 1** | S1 | **Analyse et conception** — étude des besoins fonctionnels et non fonctionnels, choix de la stack technique (React Native, Node.js, MongoDB, Groq), définition de l'architecture générale et modélisation des données | Cahier des charges + Architecture validée |
| **Phase 2** | S2–S3 | **Conception UI/UX** — design system complet (thème clair/sombre, palette, typographie), maquettes haute fidélité de tous les écrans (auth, dashboard, transactions, wallet, goals, stats, profil, assistant IA, notifications) sur Figma | Maquettes Figma validées |
| **Phase 3** | S4–S6 | **Développement du backend** — mise en place du serveur Express, modélisation MongoDB (Users, Transactions, Categories, Goals, Conversations), implémentation des 6 contrôleurs REST, middleware JWT, middleware Multer, endpoints d'authentification (email + Google), catégories par défaut | API REST complète (28 endpoints) |
| **Phase 4** | S6–S9 | **Développement du frontend** — structure Expo Router, navigation par onglets avec FAB personnalisée, implémentation des 21 écrans (auth, home, transactions, wallet, goals, stats, profil, notifications, chat IA), stores Zustand, client Axios avec refresh token, thème dynamique, composants réutilisables | Application mobile beta (iOS + Android) |
| **Phase 5** | S8–S11 | **Intégration de l'IA et fonctionnalités avancées** — connexion API Groq (Llama 3.3 70B), développement du system prompt et de la boucle agentique avec 18 outils, confirmation des actions destructives, transcription vocale Whisper, moteur de prédiction des dépenses (6 mois), détection d'anomalies, support multilingue (EN/FR/AR), estimation d'épargne | Module IA complet + Voice + Prédictions |
| **Phase 6** | S12–S13 | **Tests, sécurité et déploiement** — tests des flux complets (auth, CRUD, chat IA, voice, goals), correction des bugs, optimisation des performances, build APK via Expo EAS, configuration CORS, variables d'environnement, nettoyage du code | Application stable + APK déployé |
| **Phase 7** | S13–S14 | **Rapport et soutenance** — rédaction du rapport PFA (5 chapitres), insertion des diagrammes UML, préparation du diaporama, répétition de la démonstration en conditions réelles, finalisation des livrables | Rapport final + Présentation |

## Conclusion

Ce deuxième chapitre a permis de définir l'ensemble des besoins du projet Expense Tracker de manière structurée et complète. Nous avons identifié deux acteurs principaux — l'utilisateur et l'administrateur — et décliné leurs interactions avec le système à travers des fiches personas détaillées.

Les exigences fonctionnelles, organisées en 10 modules (authentification, transactions, catégories, wallet, goals, statistiques, assistant IA, transcription vocale, prédictions, profil, notifications), couvrent l'intégralité du périmètre du projet avec un total de 58 exigences fonctionnelles spécifiques. Les exigences non fonctionnelles ont défini le cadre de qualité, de sécurité et de performance attendu.

La modélisation des besoins a été réalisée à travers un diagramme de cas d'utilisation global complet, décrivant l'ensemble des interactions acteur-système. Six cas d'utilisation majeurs ont été détaillés avec leurs scénarios nominaux et alternatifs, couvrant les fonctionnalités critiques : authentification, gestion des transactions, gestion des objectifs d'épargne, consultation des statistiques, interaction avec l'assistant IA et gestion du profil. Les diagrammes de séquence système ont illustré les échanges entre les différentes couches techniques (client, serveur, base de données, IA) pour trois scénarios clés.

Enfin, les contraintes techniques — matérielles, logicielles, de performance et de sécurité — ont été recensées, et le planning de réalisation en 7 phases sur 14 semaines a été présenté avec la répartition des tâches entre les deux membres de l'équipe.

Le chapitre suivant présentera la conception architecturale du système, en détaillant l'architecture logicielle, les diagrammes de classes et les choix techniques retenus pour l'implémentation.

---

# Chapitre 3 : Conception du Système

## Introduction

L'analyse des besoins réalisée au chapitre précédent a permis de définir avec précision le périmètre fonctionnel du projet Expense Tracker ainsi que les contraintes techniques encadrant sa réalisation. Fort de ces spécifications, la phase de conception constitue l'étape charnière où les exigences sont traduites en une architecture logicielle cohérente, en une structure de données robuste et en un modèle d'interactions dynamiques entre les composants du système.

Ce chapitre présente la conception détaillée du système selon une approche descendante. Nous commencerons par exposer l'architecture générale retenue en justifiant les choix paradigmatiques et technologiques qui ont guidé sa définition. La cartographie fonctionnelle de l'application sera ensuite décrite à travers un plan de navigation (site map) illustrant l'organisation des espaces utilisateur. La conception orientée objet sera abordée au travers des diagrammes de classes de conception et de persistance, accompagnés d'un dictionnaire exhaustif des attributs. Enfin, la modélisation des interactions dynamiques sera présentée via plusieurs diagrammes de séquence couvrant les scénarios critiques du système.

## 3.1 Architecture générale

### 3.1.1 Paradigme architectural retenu

L'architecture logicielle d'Expense Tracker s'articule autour d'un modèle **client-serveur à trois couches** (three-tier architecture) combiné à une **architecture RESTful** pour les échanges entre le client mobile et le serveur backend. Ce choix architectural découle d'une analyse rigoureuse des besoins fonctionnels et non fonctionnels identifiés dans le chapitre précédent.

**Architecture en couches.** Le système est structuré en trois couches distinctes, chacune ayant des responsabilités clairement définies :

- **Couche de présentation (Frontend)** : Il s'agit de l'application mobile développée avec React Native et Expo, s'exécutant sur les terminaux iOS et Android. Cette couche est responsable de l'affichage des interfaces utilisateur, de la capture des interactions tactiles et de la gestion des états locaux via le store Zustand. Elle communique exclusivement avec la couche métier par l'intermédiaire d'appels API REST. L'utilisation d'Expo Router assure une navigation cohérente entre les différents écrans, tandis que React Hook Form et Zod garantissent la validation des formulaires côté client.

- **Couche métier (Backend)** : Implémentée en Node.js avec le framework Express, cette couche encapsule toute la logique fonctionnelle de l'application. Elle expose une API REST composée de 28 endpoints répartis en six contrôleurs (authentification, transactions, catégories, objectifs, utilisateurs, IA). Chaque requête HTTP traverse un pipeline de middlewares assurant la validation, l'authentification JWT et le traitement des fichiers uploadés via Multer. La couche métier intègre également le moteur d'intelligence artificielle Groq (Llama 3.3 70B) pour l'assistant conversationnel et le service de transcription vocale Whisper.

- **Couche de données (Base de données)** : MongoDB, une base de données NoSQL orientée documents, constitue la couche de persistance du système. L'ODM Mongoose assure la modélisation des données et les opérations de requêtage. Le choix de MongoDB est motivé par la nature hétérogène des documents financiers, la flexibilité du schéma et la capacité à stocker des données imbriquées (comme l'historique des conversations ou les métadonnées des transactions) sans nécessiter de jointures complexes.

**Architecture RESTful.** Le protocole HTTP est utilisé comme support de communication entre le client et le serveur selon les principes REST (Representational State Transfer). Chaque ressource du système (utilisateur, transaction, catégorie, objectif, conversation) est identifiée par une URI unique et manipulée via les méthodes standards du protocole (GET, POST, PUT, DELETE). Le format JSON est employé pour la sérialisation des données échangées, assurant une interopérabilité optimale entre les couches. La **Figure 3.1** illustre l'architecture globale du système, mettant en évidence les flux de communication entre les trois couches ainsi que les différents composants internes de chaque couche.

```
Figure 3.1 – Architecture globale du système Expense Tracker

┌──────────────────────────────────────────────────────────────────┐
│                   COUCHE DE PRÉSENTATION                          │
│                   (React Native / Expo)                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │ Écrans     │  │ Composants │  │ Stores     │  │ Services   │  │
│  │ (Router)   │  │ (UI)       │  │ (Zustand)  │  │ (Axios)    │  │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘  │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────────────────┐  │
│  │ Formulaires│  │ Validation │  │ Thème (clair/sombre)        │  │
│  │(HookForm)  │  │   (Zod)    │  │ Animations (Reanimated)     │  │
│  └────────────┘  └────────────┘  └─────────────────────────────┘  │
└──────────────────────────┬───────────────────────────────────────┘
                           │ API REST (JSON) — HTTPS
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                   COUCHE MÉTIER                                    │
│                   (Node.js / Express)                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │ Routes     │  │ Middlewares│  │ Contrôleurs│  │ Services   │  │
│  │ (REST)     │  │ (JWT,      │  │ (Logique   │  │ (Métier)   │  │
│  │            │  │  Multer,   │  │  métier)   │  │            │  │
│  │            │  │  CORS)     │  │            │  │            │  │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │               MODULE INTELLIGENCE ARTIFICIELLE              │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐   │   │
│  │  │ System Prompt│  │ Tool Defs    │  │ Tool Executor  │   │   │
│  │  │ (personnalisé│  │ (18 outils)  │  │ (actions DB)   │   │   │
│  │  │  par user)   │  │              │  │                │   │   │
│  │  └──────────────┘  └──────────────┘  └────────────────┘   │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐   │   │
│  │  │ Memory       │  │ Predictions  │  │ Analytics     │   │   │
│  │  │ Service      │  │ Service      │  │ Service       │   │   │
│  │  └──────────────┘  └──────────────┘  └────────────────┘   │   │
│  └────────────────────────────────────────────────────────────┘   │
└──────────────────────────┬───────────────────────────────────────┘
                           │ Mongoose ODM
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                   COUCHE DE DONNÉES                                │
│                   (MongoDB)                                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │ Users      │  │Transactions│  │ Categories │  │ Goals      │  │
│  │ (Utilisa-  │  │ (Dépenses  │  │ (Catégories│  │ (Objectifs │  │
│  │  teurs)    │  │  & Revenus)│  │  perso.)   │  │  d'épargne)│  │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Conversations (Mémoire contextuelle de l'assistant IA)     │   │
│  └────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

**Mécanismes de sécurité.** La sécurisation des échanges entre les couches repose sur un système d'authentification par **JSON Web Tokens (JWT)**. Le processus se déroule selon le schéma suivant : lors de la connexion, le serveur génère deux tokens — un access token d'une durée de validité d'une heure et un refresh token valide sept jours, stocké dans un cookie HTTP only. L'access token est transmis dans l'en-tête `Authorization` de chaque requête sous le format `Bearer <token>`. Le middleware d'authentification vérifie systématiquement la validité du token avant d'autoriser l'accès aux ressources protégées. En cas d'expiration, le mécanisme de refresh s'active automatiquement côté client sans intervention de l'utilisateur, garantissant une expérience fluide. Par ailleurs, les mots de passe sont hachés avec l'algorithme Bcrypt (10 rounds de salage) avant leur stockage en base de données, conformément aux bonnes pratiques de sécurité.

**Conteneurisation avec Docker.** L'ensemble du backend est conteneurisé via Docker, permettant d'uniformiser l'environnement d'exécution entre les phases de développement, de test et de production. Le fichier `Dockerfile` définit une image Node.js 18 incluant l'ensemble des dépendances nécessaires. Un fichier `docker-compose.yml` orchestre le démarrage simultané du serveur Express et de la base de données MongoDB, facilitant le déploiement sur une plateforme cloud. Cette approche garantit la reproductibilité de l'environnement et simplifie la mise à l'échelle horizontale du système.

**Justification des choix architecturaux.** L'architecture en couches a été privilégiée pour plusieurs raisons. D'une part, elle assure une **séparation claire des responsabilités** : les modifications apportées à une couche n'impactent pas les autres, facilitant la maintenance et l'évolution du système. D'autre part, elle permet un **développement parallèle** : le frontend et le backend ont pu être développés simultanément par les deux membres de l'équipe, les spécifications de l'API REST servant de contrat d'interface. Enfin, elle autorise une **évolutivité progressive** : l'ajout de nouvelles fonctionnalités se traduit par l'extension d'une couche sans remettre en cause l'architecture globale. Le modèle RESTful a été retenu pour sa simplicité, sa compatibilité universelle avec les clients HTTP et sa capacité à s'intégrer nativement avec les mécanismes de cache et de proxy.

### 3.1.2 Architecture fonctionnelle (Site Map)

L'architecture fonctionnelle d'Expense Tracker définit l'organisation des espaces de navigation et des écrans accessibles à l'utilisateur. Le site map présenté ci-dessous décrit la structure hiérarchique de l'application, organisée en deux espaces principaux : l'espace public (pré-authentification) et l'espace privé (post-authentification).

**Espace public.** L'espace public regroupe les écrans accessibles sans authentification. Il comprend l'écran de bienvenue (splash screen), l'écran d'inscription avec formulaire complet (nom, email, mot de passe), l'écran de connexion (email/mot de passe et bouton Google Sign-In) ainsi que l'écran de réinitialisation de mot de passe. La navigation dans cet espace est linéaire et exclusive : un utilisateur non authentifié ne peut accéder à aucune fonctionnalité de l'application.

**Espace privé.** Une fois authentifié, l'utilisateur accède à l'espace privé organisé autour d'une barre de navigation inférieure (bottom tab navigator) comprenant cinq onglets principaux :

1. **Accueil (Home)** : Tableau de bord affichant le solde du portefeuille, un résumé des dépenses récentes et les objectifs d'épargne en cours. Des cartes de synthèse présentent les totaux de revenus et dépenses du mois en cours.

2. **Transactions** : Liste paginée de l'ensemble des transactions, avec possibilité de filtrage par type (revenu/dépense), catégorie et période. Un bouton d'action flottant (FAB) permet d'accéder rapidement à l'écran d'ajout de transaction.

3. **Statistiques** : Tableau de bord analytique comprenant des graphiques en barres (revenus vs dépenses par jour/semaine/mois), une ventilation des dépenses par catégorie et un module de détection d'anomalies.

4. **Objectifs (Goals)** : Liste des objectifs d'épargne avec barres de progression animées, pourcentages de complétion et indicateurs intelligents (on track, ahead, delayed, just_started, completed). Un bouton permet de créer un nouvel objectif via un assistant en deux étapes.

5. **Profil** : Écran de gestion du compte utilisateur incluant la photo de profil, les informations personnelles, les préférences de devise et de langue, ainsi que l'accès aux notifications et au centre d'aide.

En complément de ces cinq onglets, un bouton d'action flottant (FAB) circulaire donne accès à l'assistant IA conversationnel, qui s'ouvre dans un écran de chat dédié avec historique, suggestions rapides et bouton d'enregistrement vocal.

La **Figure 3.2** présente le site map complet de l'application, illustrant les relations de navigation entre les différents écrans et les espaces fonctionnels.

```
Figure 3.2 – Site map de l'application Expense Tracker

┌─────────────────────────────────────────────────────────────────────┐
│                        EXPENSE TRACKER                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  [ESPACE PUBLIC]                                                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────────┐   │
│  │  Bienvenue   │───>│  Connexion   │───>│  Inscription         │   │
│  │  (Splash)    │    │  (Sign In)   │    │  (Sign Up)           │   │
│  └──────────────┘    └──────┬───────┘    └──────────────────────┘   │
│                             │                                        │
│                             ▼                                        │
│                    ┌────────────────────┐                            │
│                    │ Mot de passe oublié │                            │
│                    └────────────────────┘                            │
│                                                                       │
│  [ESPACE PRIVÉ — Authentification requise]                           │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │              BARRE DE NAVIGATION (5 onglets)                   │ │
│  │  ┌──────┐  ┌──────────────┐  ┌──────────┐  ┌──────┐  ┌──────┐ │ │
│  │  │Home  │  │Transactions  │  │Statistiques│  │Goals │  │Profil│ │ │
│  │  └──┬───┘  └──────┬───────┘  └─────┬────┘  └──┬───┘  └──┬───┘ │ │
│  └─────┼──────────────┼───────────────┼──────────┼──────────┼─────┘ │
│        │              │               │          │          │        │
│        ▼              ▼               ▼          ▼          ▼        │
│  ┌──────────┐  ┌────────────┐  ┌────────────┐ ┌─────────┐ ┌──────┐ │
│  │ Dashboard│  │Liste des   │  │ Graphiques │ │Liste des│ │Infos │ │
│  │ (solde,  │  │transactions│  │ (barres)   │ │objectifs│ │perso.│ │
│  │ résumé)  │  │+ filtres   │  │Résumé par  │ │Création │ │Avatar│ │
│  │          │  │            │  │catégorie   │ │+ suivi  │ │Prefs │ │
│  └──────────┘  └────────────┘  └────────────┘ └─────────┘ └──────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │         MODALE / ÉCRAN ANNEXE (accessible depuis FAB)          │ │
│  │  ┌────────────────────┐    ┌───────────────────────────────┐   │ │
│  │  │ Ajout Transaction  │    │ Assistant IA Conversationnel   │   │ │
│  │  │ (formulaire)       │    │ (Chat + suggestions + voice)   │   │ │
│  │  └────────────────────┘    └───────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                    ÉCRANS SUPPLÉMENTAIRES                       │ │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐ │ │
│  │  │ Détails    │  │ Ajout      │  │ Ajout      │  │ Détail   │ │ │
│  │  │ Transaction│  │ Fonds      │  │ Épargne    │  │ Objectif │ │ │
│  │  │            │  │ (Top-up)   │  │ (Goal)     │  │          │ │ │
│  │  └────────────┘  └────────────┘  └────────────┘  └──────────┘ │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

L'utilisateur navigue entre ces écrans selon ses besoins : la consultation du tableau de bord pour une vue d'ensemble rapide, l'onglet Transactions pour la gestion détaillée, les Statistiques pour l'analyse, les Goals pour le suivi des objectifs d'épargne et le Profil pour la personnalisation du compte. L'assistant IA, accessible via un bouton flottant depuis n'importe quel écran, constitue un point d'entrée transversal permettant d'effectuer des actions sans naviguer dans les menus.

## 3.2 Conception objet

### 3.2.1 Diagrammes de classes de conception

La conception orientée objet du système Expense Tracker suit le modèle architectural MVC (Modèle-Vue-Contrôleur) adapté à une architecture REST. Les classes sont organisées en quatre catégories distinctes : les classes métier (entités du domaine), les classes contrôleurs (gestion des requêtes HTTP), les classes services (logique métier), et les DTO (Data Transfer Objects) pour la validation et le transport des données.

**Classes métier.** Les classes métier représentent les entités fondamentales du domaine financier. La classe `User` encapsule les informations d'identification et de profil de l'utilisateur, avec des attributs tels que `name`, `email`, `password` (haché), `phone`, `address`, `avatar`, `currency` et `language`. La classe `Transaction` modélise une opération financière avec les attributs `amount`, `type` (revenu ou dépense), `date`, `note` et des références vers `User` et `Category`. La classe `Category` définit les catégories de dépenses personnalisables avec `name`, `icon`, `color` et un booléen `isDefault` indiquant les catégories système. La classe `Goal` représente un objectif d'épargne avec `targetAmount`, `savedAmount`, `duration`, `frequency` et un statut calculé dynamiquement. Enfin, la classe `Conversation` stocke l'historique des échanges avec l'assistant IA.

**Classes contrôleurs.** Les contrôleurs assurent la réception et le traitement des requêtes HTTP. Le `AuthController` gère les endpoints d'inscription, connexion (email et Google), rafraîchissement de token et déconnexion. Le `TransactionController` implémente les opérations CRUD sur les transactions. Le `CategoryController` permet la gestion des catégories personnalisées. Le `GoalController` traite la création, la modification et le suivi des objectifs d'épargne. Le `UserController` gère la mise à jour du profil et l'upload d'avatar. Le `AIController` orchestre les interactions avec l'assistant IA (chat, confirmation d'actions, transcription vocale).

**Classes services.** Les services encapsulent la logique métier réutilisable. Le `AuthService` centralise la génération et la vérification des tokens JWT, le hachage des mots de passe et la validation des identifiants Google. Le `TransactionService` gère les opérations de filtrage, de pagination et d'agrégation des transactions. Le `AnalyticsService` calcule les statistiques (totaux par période, ventilation par catégorie, comparaisons). Le `PredictionService` implémente les algorithmes d'estimation des dépenses futures et du potentiel d'épargne. Le `AIService` assure la communication avec l'API Groq, la construction du system prompt personnalisé, la gestion de la mémoire conversationnelle et la boucle agentique avec ses 18 outils.

**DTO et validation.** Les DTO (Data Transfer Objects) assurent la validation et la structuration des données échangées entre le client et le serveur. `RegisterDTO`, `LoginDTO` et `GoogleLoginDTO` valident les données d'authentification. `CreateTransactionDTO`, `UpdateTransactionDTO` valident les entrées du module de transactions. `CreateGoalDTO` et `UpdateGoalDTO` assurent la cohérence des objectifs d'épargne. Chaque DTO est accompagné d'un schéma de validation Zod côté client et d'une validation manuelle côté serveur.

La **Figure 3.3** présente le diagramme de classes de conception complet, illustrant les relations d'association, de composition et d'héritage entre les différentes classes du système.

```
Figure 3.3 – Diagramme de classes de conception

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              COUCHE PRÉSENTATION                                 │
│                                                                                   │
│  ┌────────────────────────────────────────────┐  ┌────────────────────────────┐ │
│  │           Screen (Composant React)         │  │      Store (Zustand)        │ │
│  │────────────────────────────────────────────│  │────────────────────────────│ │
│  │ + render()                                 │  │ + state: IState              │ │
│  │ + useNavigation()                          │  │ + dispatch(action)           │ │
│  │ + useStore(state)                          │  │ + getState()                 │ │
│  └────────────────────────────────────────────┘  └────────────────────────────┘ │
│         ▲ hérite                                       │ utilise                 │
│         │                                              │                         │
│  ┌──────┴──────────────────────────────────────────────┴──────────┐              │
│  │                       APIService (Axios)                        │              │
│  │────────────────────────────────────────────────────────────────│              │
│  │ + baseURL: string                                                │              │
│  │ + interceptors: { request, response }                            │              │
│  │ + get<T>(url, params): Promise<T>                                │              │
│  │ + post<T>(url, data): Promise<T>                                 │              │
│  │ + put<T>(url, data): Promise<T>                                  │              │
│  │ + delete<T>(url): Promise<T>                                     │              │
│  └──────────────────────────────────────────────────────────────────┘              │
└──────────────────────────────┬────────────────────────────────────────────────────┘
                               │ API REST (JSON)
                               ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              COUCHE MÉTIER                                       │
│                                                                                   │
│  ┌────────────────────────────┐   ┌─────────────────────────────┐                │
│  │     Controller (Express)   │   │      Middleware              │                │
│  │────────────────────────────│   │─────────────────────────────│                │
│  │ + req: Request             │──>│ + authenticateJWT()          │                │
│  │ + res: Response            │   │ + verifyRefreshToken()       │                │
│  │ + next: NextFunction       │   │ + validateBody(schema)       │                │
│  └────────────────────────────┘   │ + uploadAvatar(multer)       │                │
│                │                   │ + uploadAudio(multer)        │                │
│                │ utilise           └─────────────────────────────┘                │
│                ▼                                                                │
│  ┌────────────────────────────────────────────────────────────────────────┐     │
│  │                          Service Layer                                  │     │
│  │  ┌──────────────────────────────────────────────────────────────────┐   │     │
│  │  │  AuthService          │  TransactionService   │  GoalService     │   │     │
│  │  │───────────────────────│───────────────────────│──────────────────│   │     │
│  │  │ + register(dto)       │  + create(dto)        │  + create(dto)   │   │     │
│  │  │ + login(dto)          │  + update(id, dto)    │  + update(id,dto)│   │     │
│  │  │ + googleLogin(token)  │  + delete(id)         │  + addSavings()  │   │     │
│  │  │ + refreshToken(token) │  + findByUser(id,     │  + getProgress() │   │     │
│  │  │ + hashPassword(pwd)   │      filters)         │  + getInsight()  │   │     │
│  │  └───────────────────────┘  └────────────────────┘  └───────────────┘   │     │
│  │  ┌───────────────────────┐  ┌────────────────────┐  ┌───────────────┐   │     │
│  │  │ AnalyticsService      │  │ PredictionService  │  │ AIService     │   │     │
│  │  │───────────────────────│  │────────────────────│  │───────────────│   │     │
│  │  │ + getWeeklySummary()  │  │ + predictMonthly() │  │ + chat(msg)   │   │     │
│  │  │ + getMonthlySummary() │  │ + estimateSavings()│  │ + confirm()   │   │     │
│  │  │ + comparePeriods()    │  │ + getTrends()      │  │ + transcribe()│   │     │
│  │  │ + detectAnomalies()   │  │                    │  │ + buildPrompt()│   │     │
│  │  └───────────────────────┘  └────────────────────┘  └───────────────┘   │     │
│  └────────────────────────────────────────────────────────────────────────┘     │
└──────────────────────────────┬────────────────────────────────────────────────────┘
                               │ Mongoose ODM
                               ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           COUCHE DE DONNÉES                                       │
│                                                                                   │
│  ┌──────────────────────────────────────────────────────────────────────────┐    │
│  │                        Repository Layer (Mongoose Models)                  │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │    │
│  │  │  UserModel    │  │ TransModel   │  │ CategoryModel│  │  GoalModel   │ │    │
│  │  │ (Mongoose)    │  │ (Mongoose)   │  │ (Mongoose)   │  │ (Mongoose)   │ │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘ │    │
│  │  ┌────────────────────────────────────────────────────────────────────┐  │    │
│  │  │                  ConversationModel (Mongoose)                       │  │    │
│  │  └────────────────────────────────────────────────────────────────────┘  │    │
│  └──────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────┘

Relations :
  ───> Association simple (utilisation)
  ──▷ Héritage (est un)
  ◆— Composition (contient)
  ──▶ Association navigable

Associations principales :
  • Controller ──> Service : chaque contrôleur utilise un ou plusieurs services
  • Service ──> Model : chaque service interagit avec les modèles Mongoose
  • Screen ──> Store : chaque écran lit et écrit dans le store Zustand
  • Store ──> APIService : le store déclenche les appels API via Axios
  • User ──> Transaction : un utilisateur possède plusieurs transactions (1..*)
  • Transaction ──> Category : une transaction appartient à une catégorie (1..1)
  • User ──> Goal : un utilisateur possède plusieurs objectifs (1..*)
  • User ──> Conversation : un utilisateur possède une conversation (1..1)
```

### 3.2.2 Diagramme de classes de persistance

La couche de persistance est implémentée avec MongoDB via l'ODM Mongoose. Le choix de MongoDB, une base de données NoSQL orientée documents, se justifie par la nature des données manipulées : les transactions financières, les catégories personnalisées et les objectifs d'épargne présentent une structure flexible qui s'accommode mal des schémas rigides des bases relationnelles. De plus, l'absence de jointures complexes permet des performances de lecture optimales pour les opérations fréquentes de consultation du tableau de bord.

**Collection `users`.** La collection `users` stocke les informations d'identification et de profil de chaque utilisateur. Chaque document contient les champs `name`, `email` (unique, indexé), `password` (haché avec Bcrypt), `phone`, `address`, `avatar` (URL du fichier uploadé), `currency` (TND, USD, EUR, GBP), `language` (français, anglais, arabe), `googleId` (pour l'authentification sociale), `notificationsEnabled` (booléen) et les métadonnées temporelles `createdAt` et `updatedAt`. L'email est défini comme clé unique avec un index ascendant pour accélérer les requêtes d'authentification.

**Collection `transactions`.** La collection `transactions` constitue le cœur du système. Chaque document représente une opération financière avec les attributs `userId` (référence vers `users`), `amount` (nombre décimal positif), `type` (enum : `income` ou `expense`), `categoryId` (référence vers `categories`), `date` (timestamp), `note` (texte optionnel) et les horodatages de création et modification. Un index composé sur `{ userId: 1, date: -1 }` optimise les requêtes de filtrage par période, tandis qu'un index sur `{ userId: 1, categoryId: 1 }` accélère les agrégations par catégorie. L'indexation est cruciale pour les performances du tableau de bord statistique qui agrège des milliers de transactions.

**Collection `categories`.** La collection `categories` définit les catégories de dépenses et de revenus. Chaque document inclut `userId` (référence vers `users`), `name`, `type` (income/expense), `icon` (nom de l'icône MaterialIcons), `color` (code hexadécimal), `isDefault` (booléen indiquant une catégorie système créée à l'inscription) et `order` (position d'affichage). Les six catégories par défaut (Shopping, Food, Transport, Rent, Health, Salary) sont automatiquement créées lors de l'inscription d'un nouvel utilisateur via un hook Mongoose `post('save')` sur le modèle `User`.

**Collection `goals`.** La collection `goals` modélise les objectifs d'épargne. Chaque document contient `userId` (référence vers `users`), `name`, `targetAmount` (montant cible), `savedAmount` (montant déjà épargné), `duration` (durée en mois), `frequency` (hebdomadaire ou mensuelle), `category` (nom de la catégorie d'objectif), `icon` (icône associée) et `status` (calculé dynamiquement côté serveur : `just_started`, `on_track`, `ahead`, `delayed`, `completed`). Des index sur `{ userId: 1 }` et `{ userId: 1, status: 1 }` optimisent l'affichage de la liste des objectifs avec filtrage par statut.

**Collection `conversations`.** La collection `conversations` stocke l'historique des échanges entre l'utilisateur et l'assistant IA. Chaque document est associé à un `userId` unique (relation 1..1) et contient un tableau `messages` dont chaque élément possède les attributs `role` (user/assistant/system/tool), `content` (texte du message) et `timestamp`. Cette structure de document imbriqué évite les requêtes multiples et permet de récupérer l'intégralité de l'historique en une seule opération de lecture. Une limite de 100 messages par conversation est appliquée, les messages les plus anciens étant automatiquement archivés lorsqu'un nouveau message est ajouté.

La **Figure 3.4** présente le diagramme de classes de persistance, illustrant les collections MongoDB, leurs attributs principaux et les relations de référence entre elles.

```
Figure 3.4 – Diagramme de classes de persistance (MongoDB)

┌──────────────────────────────────────────────────────────────────────────┐
│                     BASE DE DONNÉES MONGODB                               │
│                                                                           │
│  ┌────────────────────────────────────────────┐                          │
│  │            Collection : users               │                          │
│  │────────────────────────────────────────────│                          │
│  │ _id              : ObjectId  (PK)          │                          │
│  │ name             : String    (required)    │                          │
│  │ email            : String    (unique, idx) │──────────┐               │
│  │ password         : String    (bcrypt hash) │          │               │
│  │ phone            : String    (optional)    │          │               │
│  │ address          : String    (optional)    │          │               │
│  │ avatar           : String    (URL)         │          │               │
│  │ currency         : Enum      (TND/USD/... │          │               │
│  │ language         : Enum      (en/fr/ar)   │          │               │
│  │ googleId         : String    (optional)    │          │               │
│  │ notificationsEnabled : Boolean            │          │               │
│  │ createdAt        : Date                   │          │               │
│  │ updatedAt        : Date                   │          │               │
│  └────────────────────────────────────────────┘          │               │
│         │ 1                                              │               │
│         │                                                │               │
│         │ 0..*                                           │ 0..*          │
│         ▼                                                ▼               │
│  ┌─────────────────────────────────────┐  ┌────────────────────────────┐ │
│  │   Collection : transactions         │  │   Collection : goals       │ │
│  │─────────────────────────────────────│  │────────────────────────────│ │
│  │ _id          : ObjectId  (PK)       │  │ _id          : ObjectId    │ │
│  │ userId       : ObjectId  (FK →users)│  │ userId       : ObjectId    │ │
│  │ amount       : Number    (required) │  │ name         : String      │ │
│  │ type         : Enum   (income/exp) │  │ targetAmount : Number      │ │
│  │ categoryId   : ObjectId (FK →cat)  │  │ savedAmount  : Number      │ │
│  │ date         : Date     (idx)       │  │ duration     : Number (mois)│ │
│  │ note         : String   (optional)  │  │ frequency    : Enum        │ │
│  │ createdAt    : Date                 │  │ category     : String      │ │
│  │ updatedAt    : Date                 │  │ icon         : String      │ │
│  └─────────────────────────────────────┘  │ status       : Enum        │ │
│         │ 0..*                            │ createdAt    : Date        │ │
│         │                                 └────────────────────────────┘ │
│         ▼                                                               │
│  ┌─────────────────────────────────────┐  ┌────────────────────────────┐ │
│  │   Collection : categories           │  │  Collection : conversations│ │
│  │─────────────────────────────────────│  │────────────────────────────│ │
│  │ _id          : ObjectId  (PK)       │  │ _id          : ObjectId    │ │
│  │ userId       : ObjectId  (FK →users)│  │ userId       : ObjectId    │ │
│  │ name         : String    (required) │  │ messages     : Array       │ │
│  │ type         : Enum   (income/exp) │  │  └─ role     : Enum         │ │
│  │ icon         : String               │  │  └─ content  : String      │ │
│  │ color        : String  (hex)        │  │  └─ timestamp: Date         │ │
│  │ isDefault    : Boolean              │  │ createdAt    : Date         │ │
│  │ order        : Number               │  │ updatedAt    : Date         │ │
│  │ createdAt    : Date                 │  └────────────────────────────┘ │
│  └─────────────────────────────────────┘                                 │
│                                                                           │
│  Indexes:                                                                 │
│  ────────                                                                 │
│  users:        { email: 1 } (unique)                                      │
│  transactions: { userId: 1, date: -1 } (composé)                         │
│  transactions: { userId: 1, categoryId: 1 } (composé)                    │
│  categories:   { userId: 1, name: 1 } (composé, unique par user)          │
│  goals:        { userId: 1 }                                             │
│  goals:        { userId: 1, status: 1 } (composé)                         │
│  conversations: { userId: 1 } (unique)                                    │
│                                                                           │
│  Relations :                                                              │
│  ──────────                                                               │
│  users   1 ──── 0..* transactions  (userId → _id)                        │
│  users   1 ──── 0..* goals         (userId → _id)                        │
│  users   1 ──── 0..* categories    (userId → _id)                        │
│  users   1 ──── 1     conversation (userId → _id)                        │
│  transactions 1 ──── 1 category    (categoryId → _id)                    │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.2.3 Dictionnaire des attributs

Le tableau ci-dessous présente le dictionnaire exhaustif des attributs des principales entités du système, incluant leur type, leur description, les contraintes associées et les règles de validation.

**TABLE 3.1 – Dictionnaire des attributs de l'entité `users`**

| Attribut | Type | Description | Contraintes | Validation |
|----------|------|-------------|-------------|------------|
| `_id` | ObjectId | Identifiant unique MongoDB | Généré automatiquement | — |
| `name` | String | Nom complet de l'utilisateur | Requis, 2-50 caractères | Regex: `^[a-zA-ZÀ-ÿ\s-]{2,50}$` |
| `email` | String | Adresse email de connexion | Requis, unique, indexé | Regex email RFC 5322 |
| `password` | String | Mot de passe haché (Bcrypt) | Requis (sauf Google), min 8 car. | Min: 8, majuscule + chiffre |
| `phone` | String | Numéro de téléphone | Optionnel | Regex indicatif + chiffres |
| `address` | String | Adresse postale | Optionnel, max 200 car. | — |
| `avatar` | String | URL de la photo de profil | Optionnel, max 5 Mo | Formats: JPEG, PNG, WebP |
| `currency` | Enum | Devise principale | Défaut: TND | Valeurs: TND, USD, EUR, GBP |
| `language` | Enum | Langue de l'interface | Défaut: fr | Valeurs: en, fr, ar |
| `googleId` | String | Identifiant Google OAuth | Optionnel, unique si présent | — |
| `notificationsEnabled` | Boolean | Activation des notifications | Défaut: true | Booléen |
| `createdAt` | Date | Date de création | Généré automatiquement | — |
| `updatedAt` | Date | Date de dernière modification | Généré automatiquement | — |

**TABLE 3.2 – Dictionnaire des attributs de l'entité `transactions`**

| Attribut | Type | Description | Contraintes | Validation |
|----------|------|-------------|-------------|------------|
| `_id` | ObjectId | Identifiant unique | Généré automatiquement | — |
| `userId` | ObjectId | Référence vers l'utilisateur | Requis, FK → users._id | Existence vérifiée |
| `amount` | Number | Montant de la transaction | Requis, > 0, max 10^7 | Decimal, 2 chiffres après virgule |
| `type` | Enum | Type de transaction | Requis | `income` ou `expense` |
| `categoryId` | ObjectId | Référence vers la catégorie | Requis, FK → categories._id | Existence vérifiée |
| `date` | Date | Date de la transaction | Requis, par défaut: aujourd'hui | Pas de date future |
| `note` | String | Note ou description | Optionnel, max 200 car. | — |
| `createdAt` | Date | Date de création | Généré automatiquement | — |
| `updatedAt` | Date | Date de modification | Généré automatiquement | — |

**TABLE 3.3 – Dictionnaire des attributs de l'entité `goals`**

| Attribut | Type | Description | Contraintes | Validation |
|----------|------|-------------|-------------|------------|
| `_id` | ObjectId | Identifiant unique | Généré automatiquement | — |
| `userId` | ObjectId | Référence vers l'utilisateur | Requis, FK → users._id | Existence vérifiée |
| `name` | String | Nom de l'objectif | Requis, 2-50 caractères | — |
| `targetAmount` | Number | Montant cible à atteindre | Requis, > 0 | Decimal, 2 décimales |
| `savedAmount` | Number | Montant déjà épargné | Défaut: 0, ≤ targetAmount | ≥ 0 |
| `duration` | Number | Durée en mois | Requis, 1-120 mois | Entier |
| `frequency` | Enum | Fréquence d'épargne | Requis | `weekly`, `monthly` |
| `category` | String | Catégorie de l'objectif | Requis | — |
| `icon` | String | Icône représentative | Optionnel | Nom MaterialIcons |
| `status` | Enum | Statut calculé | Calculé dynamiquement | Voir calcul ci-dessous |

Le statut d'un objectif est calculé selon la formule suivante : étant donné le `savedAmount`, le `targetAmount`, le `duration` en mois et le nombre de mois écoulés depuis la création, le système détermine si l'utilisateur est en avance (`ahead`), sur la bonne voie (`on_track`), en retard (`delayed`), au début (`just_started` avec moins de 5 % atteint) ou a terminé (`completed`). Ce calcul est effectué côté serveur à chaque requête de récupération des objectifs, garantissant que les indicateurs reflètent toujours la situation la plus récente.

**TABLE 3.4 – Dictionnaire des attributs de l'entité `categories`**

| Attribut | Type | Description | Contraintes | Validation |
|----------|------|-------------|-------------|------------|
| `_id` | ObjectId | Identifiant unique | Généré automatiquement | — |
| `userId` | ObjectId | Référence vers l'utilisateur | Requis, FK → users._id | Existence vérifiée |
| `name` | String | Nom de la catégorie | Requis, 2-30 car., unique par user | — |
| `type` | Enum | Type de catégorie | Requis | `income` ou `expense` |
| `icon` | String | Icône MaterialIcons | Requis | Nom d'icône valide |
| `color` | String | Code couleur hexadécimal | Requis | Regex: `^#[0-9A-Fa-f]{6}$` |
| `isDefault` | Boolean | Catégorie système | Défaut: false | — |
| `order` | Number | Ordre d'affichage | Défaut: 0 | Entier ≥ 0 |

**TABLE 3.5 – Dictionnaire des attributs de l'entité `conversations`**

| Attribut | Type | Description | Contraintes | Validation |
|----------|------|-------------|-------------|------------|
| `_id` | ObjectId | Identifiant unique | Généré automatiquement | — |
| `userId` | ObjectId | Référence vers l'utilisateur | Requis, unique, FK → users._id | Existence vérifiée |
| `messages` | Array | Tableau de messages | Requis, max 100 éléments | — |
| `messages[].role` | Enum | Rôle de l'émetteur | Requis | `user`, `assistant`, `system`, `tool` |
| `messages[].content` | String | Contenu du message | Requis, max 4000 car. | — |
| `messages[].timestamp` | Date | Horodatage du message | Généré automatiquement | — |
| `createdAt` | Date | Date de création | Généré automatiquement | — |
| `updatedAt` | Date | Dernière modification | Généré automatiquement | — |

### 3.2.4 Modélisation des interactions

La modélisation des interactions dynamiques du système est réalisée à travers des diagrammes de séquence de conception. Ces diagrammes illustrent les échanges de messages entre les différentes couches (frontend, backend, base de données) pour des scénarios critiques du système. Contrairement aux diagrammes de séquence système présentés au chapitre 2, qui décrivaient les interactions de haut niveau entre l'utilisateur et le système, les diagrammes de séquence de conception détaillent les échanges internes entre les objets logiciels.

**Scénario 1 : Authentification.**
La **Figure 3.5** illustre le processus d'authentification par email, en détaillant les interactions entre le contrôleur, le service et la base de données. Lorsque le client envoie une requête `POST /auth/login` avec les identifiants, le `AuthController` délègue la validation au `AuthService`. Ce dernier interroge MongoDB via le modèle `User` pour récupérer l'utilisateur correspondant à l'email fourni, puis compare le mot de passe saisi avec le hachage stocké à l'aide de l'algorithme Bcrypt. En cas de succès, le service génère un access token JWT (1 heure de validité) et un refresh token (7 jours), retournés au contrôleur qui les transmet au client. Le diagramme met en évidence la séparation stricte entre la logique de contrôle (réception de la requête, sérialisation de la réponse) et la logique métier (validation, hachage, génération de tokens).

```
Figure 3.5 – Diagramme de séquence de conception : Authentification

Client            AuthController        AuthService           UserModel (MongoDB)
  │                     │                     │                     │
  │ POST /auth/login    │                     │                     │
  │ { email, password } │                     │                     │
  │────────────────────>│                     │                     │
  │                     │ login(email, pwd)   │                     │
  │                     │────────────────────>│                     │
  │                     │                     │ findByEmail(email)  │
  │                     │                     │────────────────────>│
  │                     │                     │                     │
  │                     │                     │<── user ───────────│
  │                     │                     │                     │
  │                     │                     │ comparePassword(    │
  │                     │                     │   pwd, user.hash)   │
  │                     │                     │  ────────────       │
  │                     │                     │  Résultat: match    │
  │                     │                     │                     │
  │                     │                     │ generateTokens(     │
  │                     │                     │   user._id)         │
  │                     │                     │  ────────────       │
  │                     │                     │  { accessToken,     │
  │                     │                     │    refreshToken }   │
  │                     │                     │                     │
  │                     │<── { user, tokens }─│                     │
  │                     │                     │                     │
  │<── 200 OK ──────────│                     │                     │
  │ { user, accessToken,│                     │                     │
  │   refreshToken }     │                     │                     │
```

**Scénario 2 : Ajout d'une transaction via l'interface classique.**
La **Figure 3.6** détaille le processus d'ajout d'une transaction. Le scénario débute par l'envoi d'une requête `POST /transactions` par le client, après validation locale du formulaire via Zod. Le `TransactionController` reçoit la requête, extrait le payload validé et le transmet au `TransactionService`. Ce dernier crée un nouveau document dans la collection `transactions` via le modèle Mongoose, puis met à jour le solde implicite de l'utilisateur en calculant la différence entre ses revenus et dépenses cumulés. Une fois la transaction persistée, le service retourne l'objet créé (avec la catégorie peuplée) au contrôleur, qui le sérialise en JSON et le transmet au client. Le store Zustand côté client est alors mis à jour pour refléter immédiatement le changement dans l'interface.

```
Figure 3.6 – Diagramme de séquence de conception : Ajout de transaction

Client            TransactionController    TransactionService    Transaction (MongoDB)
  │                     │                        │                     │
  │ POST /transactions  │                        │                     │
  │ { amount, type,     │                        │                     │
  │   categoryId, date }│                        │                     │
  │────────────────────>│                        │                     │
  │                     │ createTransaction(dto) │                     │
  │                     │───────────────────────>│                     │
  │                     │                        │ validate(dto)      │
  │                     │                        │  ────────────      │
  │                     │                        │  dto valide        │
  │                     │                        │                     │
  │                     │                        │ save(dto)           │
  │                     │                        │────────────────────>│
  │                     │                        │                     │
  │                     │                        │<── transaction ────│
  │                     │                        │                     │
  │                     │                        │ updateUserBalance()│
  │                     │                        │  ────────────      │
  │                     │                        │  nouveau solde     │
  │                     │                        │                     │
  │                     │<── transaction (populé)│                     │
  │                     │                        │                     │
  │<── 201 Created ─────│                        │                     │
  │ { success: true,    │                        │                     │
  │   data: transaction }│                        │                     │
```

**Scénario 3 : Calcul des statistiques et génération des graphiques.**
La **Figure 3.7** illustre le processus de calcul des statistiques, un scénario impliquant une logique d'agrégation avancée. Lorsque le client demande les statistiques pour une période donnée, le `AnalyticsController` transmet la requête au `AnalyticsService`. Ce dernier exécute un pipeline d'agrégation MongoDB composé de plusieurs étapes : filtrage par `userId` et plage de dates, regroupement par type (revenu/dépense), calcul des totaux et moyennes, puis ventilation par catégorie avec pourcentages. Le service exécute également une sous-requête pour la comparaison avec la période précédente (utilisée pour le calcul des tendances et des anomalies). Les résultats agrégés sont ensuite formatés en un objet structuré contenant les données des graphiques (labels, valeurs, couleurs), les résumés numériques et les alertes d'anomalies détectées, le tout retourné au client en une seule réponse.

```
Figure 3.7 – Diagramme de séquence de conception : Calcul des statistiques

Client            AnalyticsController     AnalyticsService      Transaction (MongoDB)
  │                     │                        │                     │
  │ GET /analytics      │                        │                     │
  │ ?period=monthly     │                        │                     │
  │────────────────────>│                        │                     │
  │                     │ getMonthlySummary(     │                     │
  │                     │   userId, period)      │                     │
  │                     │───────────────────────>│                     │
  │                     │                        │                     │
  │                     │                        │ aggregate([        │
  │                     │                        │  { $match: {       │
  │                     │                        │    userId, date } },│
  │                     │                        │  { $group: {       │
  │                     │                        │    _id: "$type",   │
  │                     │                        │    total: {$sum} } }│
  │                     │                        │────────────────────>│
  │                     │                        │                     │
  │                     │                        │<── totals[] ───────│
  │                     │                        │                     │
  │                     │                        │ aggregate([        │
  │                     │                        │  { $match },       │
  │                     │                        │  { $group: {       │
  │                     │                        │    _id:"$categoryId"│
  │                     │                        │    total:{$sum} } },│
  │                     │                        │  { $sort: -total } │
  │                     │                        │────────────────────>│
  │                     │                        │                     │
  │                     │                        │<── byCategory[] ───│
  │                     │                        │                     │
  │                     │                        │ calculateAnomalies(│
  │                     │                        │   current,          │
  │                     │                        │   previousPeriod)   │
  │                     │                        │  ────────────       │
  │                     │                        │                     │
  │                     │<── analyticsData ──────│                     │
  │                     │ { totals, byCategory,  │                     │
  │                     │   anomalies, trends }  │                     │
  │                     │                        │                     │
  │<── 200 OK ──────────│                        │                     │
  │ { success, data }   │                        │                     │
```

**Scénario 4 : Interaction avec l'assistant IA.**
La **Figure 3.8** illustre le scénario complet d'interaction avec l'assistant IA, depuis l'envoi du message utilisateur jusqu'à l'exécution d'une action destructrice (création de transaction). Ce scénario est le plus complexe du système, impliquant quatre couches distinctes : le client mobile, le `AIController`, le `AIService` et l'API externe Groq. Le `AIService` joue un rôle central en orchestrant la récupération de l'historique de conversation, la construction du system prompt personnalisé (incluant les informations de l'utilisateur, ses transactions récentes et ses objectifs), l'appel à l'API Groq pour la génération de la réponse, l'analyse des tool calls retournés par le modèle, la gestion des actions destructrices via le mécanisme de confirmation, et l'exécution différée des outils après validation utilisateur.

```
Figure 3.8 – Diagramme de séquence de conception : Interaction avec l'assistant IA

Client            AIController           AIService              Groq API (Llama)
  │                     │                     │                     │
  │ POST /ai/chat       │                     │                     │
  │ { message }         │                     │                     │
  │────────────────────>│                     │                     │
  │                     │ chat(userId, msg)   │                     │
  │                     │────────────────────>│                     │
  │                     │                     │ getOrCreateConversation()│
  │                     │                     │  ────────────        │
  │                     │                     │  { userId, messages }│
  │                     │                     │                     │
  │                     │                     │ buildSystemPrompt(   │
  │                     │                     │   user)              │
  │                     │                     │  ────────────        │
  │                     │                     │  prompt personnalisé │
  │                     │                     │                     │
  │                     │                     │ chat.completions.    │
  │                     │                     │   create({           │
  │                     │                     │     messages,        │
  │                     │                     │     tools: 18 tools  │
  │                     │                     │   })                 │
  │                     │                     │──────────────────────>│
  │                     │                     │                     │
  │                     │                     │<── response ────────│
  │                     │                     │ { tool_calls: [     │
  │                     │                     │   create_expense    │
  │                     │                     │ ] }                 │
  │                     │                     │                     │
  │                     │                     │ action = DESTRUCTIVE│
  │                     │                     │ setPendingAction()  │
  │                     │                     │  ────────────       │
  │                     │                     │  pendingAction créée│
  │                     │                     │                     │
  │                     │<── pendingAction ───│                     │
  │                     │ { type: "confirm",  │                     │
  │                     │   tool: "create_    │                     │
  │                     │   expense",         │                     │
  │                     │   args: {...} }     │                     │
  │                     │                     │                     │
  │<── confirmation ────│                     │                     │
  │ { pendingAction }   │                     │                     │
  │                     │                     │                     │
  │ [Utilisateur confirme]                    │                     │
  │────────────────────>│                     │                     │
  │                     │ POST /ai/confirm    │                     │
  │                     │ { confirmed: true } │                     │
  │                     │────────────────────>│                     │
  │                     │                     │ executeConfirmedAction()│
  │                     │                     │  ────────────        │
  │                     │                     │  → createExpense()  │
  │                     │                     │  → sauvegarde DB    │
  │                     │                     │                     │
  │                     │                     │ chat.completions.   │
  │                     │                     │   create({messages})│
  │                     │                     │──────────────────────>│
  │                     │                     │<── msg confirmation─│
  │                     │                     │                     │
  │                     │<── success ─────────│                     │
  │                     │ { message: "J'ai    │                     │
  │                     │   ajouté 15€ ..." } │                     │
  │                     │                     │                     │
  │<── 200 OK ──────────│                     │                     │
  │ { type:"success",   │                     │                     │
  │   message: "..." }   │                     │                     │
```

**Scénario 5 : Synchronisation cloud et déploiement.**
La **Figure 3.9** illustre le processus de synchronisation des données entre l'application mobile et le serveur déployé sur le cloud. L'architecture de déploiement repose sur un conteneur Docker exécutant l'application Express, couplé à une instance MongoDB hébergée localement ou sur un service cloud comme MongoDB Atlas. Le client mobile, installé sur le terminal de l'utilisateur, communique avec le backend via le réseau internet en utilisant l'URL publique du serveur. Chaque requête est authentifiée par le token JWT et transite par le middleware CORS configuré pour n'accepter que les origines autorisées. Le refresh token permet de maintenir la session active sans nécessiter de reconnexion périodique.

```
Figure 3.9 – Diagramme de séquence de conception : Synchronisation et déploiement

Client Mobile         Docker Container          MongoDB (Cloud/Atlas)
     │                     │                         │
     │ [Démarrage app]     │                         │
     │────────────────────>│                         │
     │                     │                         │
     │ Connexion réseau    │                         │
     │ (HTTPS + DNS)       │                         │
     │  ────────────       │                         │
     │                     │                         │
     │ GET /transactions   │                         │
     │ Authorization: Bearer <token>                  │
     │────────────────────>│                         │
     │                     │ authenticateJWT()       │
     │                     │  ────────────           │
     │                     │  Token valide            │
     │                     │                         │
     │                     │ find({userId})          │
     │                     │ .sort({date:-1})        │
     │                     │ .limit(20)              │
     │                     │────────────────────────>│
     │                     │                         │
     │                     │<── transactions[] ──────│
     │                     │                         │
     │<── 200 OK ──────────│                         │
     │ { transactions }    │                         │
     │                     │                         │
     │ [Token expire après 1h]                       │
     │                     │                         │
     │ GET /transactions   │                         │
     │ (token expiré)      │                         │
     │────────────────────>│                         │
     │                     │ authenticateJWT()       │
     │                     │  ──── ÉCHEC: 401 ────   │
     │<── 401 Unauthorized│                         │
     │                     │                         │
     │ POST /auth/refresh  │                         │
     │ (cookie refreshToken)                         │
     │────────────────────>│                         │
     │                     │ verifyRefreshToken()    │
     │                     │  ────────────           │
     │                     │  Nouveau accessToken    │
     │<── { accessToken } ─│                         │
     │                     │                         │
     │ [Retry avec nouveau token]                    │
     │────────────────────>│                         │
```

## Conclusion

Ce troisième chapitre a présenté la conception complète du système Expense Tracker, en suivant une démarche descendante allant de l'architecture générale jusqu'à la modélisation fine des interactions entre objets.

L'architecture à trois couches — présentation (React Native / Expo), métier (Node.js / Express) et données (MongoDB) — a été justifiée par les impératifs de séparation des responsabilités, de développement parallèle et d'évolutivité. L'intégration de l'authentification JWT, de la conteneurisation Docker et de l'API REST confère au système une base solide en matière de sécurité, de déploiement et d'interopérabilité. Le site map a décrit l'organisation fonctionnelle de l'application autour de cinq onglets principaux et d'un assistant IA transversal, offrant une expérience de navigation cohérente et intuitive.

La conception orientée objet a été détaillée à travers les diagrammes de classes de conception et de persistance, mettant en évidence les relations entre les classes métier, les contrôleurs, les services et les DTO. Le dictionnaire des attributs a fourni une spécification précise de chaque champ des collections MongoDB, incluant les types, les contraintes et les règles de validation. Enfin, les diagrammes de séquence de conception ont illustré les échanges dynamiques entre les couches pour cinq scénarios critiques : l'authentification, l'ajout de transaction, le calcul des statistiques, l'interaction avec l'assistant IA et la synchronisation cloud.

Les bases architecturales et conceptuelles étant désormais posées, le chapitre suivant abordera la phase d'implémentation, en détaillant la réalisation concrète des différents modules, les choix d'implémentation et les défis techniques rencontrés.

---

# Chapitre 4 : Réalisation et Mise en Œuvre

## Introduction

La phase de conception détaillée au chapitre précédent a jeté les fondations architecturales et conceptuelles du système Expense Tracker. Fort de ces spécifications, la phase de réalisation constitue l'étape où les modèles théoriques sont concrétisés en un produit logiciel fonctionnel. Ce chapitre présente l'ensemble des choix d'implémentation, des technologies retenues et des pratiques mises en œuvre pour transformer la conception en une application mobile opérationnelle.

Nous aborderons dans un premier temps le cadre technologique et l'environnement de développement, en détaillant les outils, les bibliothèques et les configurations qui ont permis la réalisation du projet. Les pratiques DevOps et les mécanismes de sécurité seront ensuite exposés, couvrant la gestion du code source, les tests, la sécurisation des échanges et les patrons de conception appliqués. Enfin, une présentation détaillée des interfaces utilisateur et des fonctionnalités principales permettra d'illustrer le résultat concret du développement, module par module.

## 4.1 Cadre technologique et environnement de développement

### 4.1.1 Environnement matériel et logiciel utilisé

La réalisation du projet Expense Tracker s'appuie sur un ensemble cohérent de technologies modernes, sélectionnées pour leur maturité, leur performance et leur adéquation avec les besoins spécifiques de l'application. Le tableau ci-dessous présente l'ensemble des technologies utilisées, leur version et leur rôle dans le système.

**TABLE 4.1 – Technologies et environnements de développement**

| Catégorie | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| **Système d'exploitation** | Windows 11 / macOS Sonoma | — | Postes de développement |
| **Environnement d'exécution** | Node.js | 18.x | Serveur backend et outils |
| **Gestionnaire de paquets** | npm | 10.x | Gestion des dépendances |
| **IDE Frontend** | Visual Studio Code | 1.98+ | Développement React Native |
| **IDE Backend** | Visual Studio Code | 1.98+ | Développement Express |
| **Terminal** | PowerShell / Zsh | — | Exécution des commandes |
| **Virtualisation** | Docker Desktop | 4.x | Conteneurisation du backend |
| **Client API** | Postman | 11.x | Test des endpoints REST |
| **Design** | Figma | — | Maquettage des interfaces |

**Frontend mobile.** L'application mobile est développée avec **React Native 0.81** associé au framework **Expo 54**, offrant un environnement de développement unifié pour les plateformes iOS et Android. L'architecture de navigation repose sur **Expo Router 6**, un routeur fichier-based inspiré de Next.js qui simplifie la gestion des écrans et des paramètres de navigation. La gestion d'état centralisée est assurée par **Zustand 5**, une bibliothèque légère et performante qui permet de créer des stores dédiés pour chaque module fonctionnel (transactions, catégories, objectifs, notifications). Les formulaires sont gérés par **React Hook Form 7** avec validation via **Zod 4**, garantissant l'intégrité des données saisies côté client avant leur envoi au serveur. Les animations fluides sont réalisées avec **React Native Reanimated 4**, tandis que les icônes vectorielles proviennent de la bibliothèque **@expo/vector-icons**.

**Backend serveur.** Le serveur backend est implémenté en **Node.js** avec le framework **Express 5**, développé en **TypeScript** pour bénéficier du typage statique et de la détection précoce des erreurs. La base de données **MongoDB 6** est utilisée via l'ODM **Mongoose 9**, qui fournit une modélisation structurée des documents et des fonctionnalités avancées de validation, d'indexation et d'agrégation. L'authentification repose sur **JWT (JSON Web Tokens)** avec la bibliothèque `jsonwebtoken`, tandis que le hachage des mots de passe est effectué par **Bcrypt** avec 10 rounds de salage. La gestion des fichiers uploadés (avatars et enregistrements audio) est assurée par le middleware **Multer**.

**Services externes et IA.** L'assistant conversationnel s'appuie sur l'API **Groq Cloud** avec le modèle **Llama 3.3 70B**, un modèle de langage à grande échelle optimisé pour l'inférence rapide. La transcription vocale utilise le modèle **Whisper large-v3-turbo** de Groq, capable de traiter des fichiers audio jusqu'à 25 Mo avec une latence inférieure à trois secondes pour des enregistrements de trente secondes. L'authentification sociale est réalisée via **Google Identity Services** avec le SDK `google-auth-library` côté serveur et le module `expo-auth-session` côté client.

**Déploiement.** Le déploiement de l'application mobile est effectué via **Expo EAS (Expo Application Services)** pour la génération des binaires APK et IPA. Le backend est conteneurisé avec **Docker** et peut être déployé sur toute plateforme supportant les conteneurs (Render, Railway, serveur dédié). Un fichier `docker-compose.yml` orchestre le démarrage simultané du serveur Express et de l'instance MongoDB.

### 4.1.2 Configuration et outils de support

L'environnement de développement s'appuie sur un ensemble d'outils de configuration et de collaboration qui assurent la reproducibilité, la traçabilité et la maintenabilité du projet.

**Gestion des variables d'environnement.** Le backend utilise un fichier `.env` pour centraliser les huit variables de configuration sensibles : le port d'écoute (`PORT`), l'URL de connexion MongoDB (`DATABASE_URL`), les secrets JWT (`JWT_SECRET`, `JWT_REFRESH_SECRET`), les identifiants Google OAuth (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`), la clé API Groq (`GROQ_API_KEY`) et l'URL du frontend autorisée par CORS (`FRONTEND_URL`). Le fichier `.env` est explicitement exclu du versionnement via `.gitignore`.

**Gestion de version avec Git et GitHub.** Le code source est versionné avec **Git** et hébergé sur **GitHub**. Le dépôt est organisé selon une structure de branches standardisée : `main` pour la branche de production, `develop` pour l'intégration continue, et des branches `feature/*` pour chaque fonctionnalité développée. Chaque commit suit une convention de nommage descriptive en anglais ("feat: add transaction filtering", "fix: handle expired token refresh", "refactor: extract AIService").

**Test des API avec Postman.** Une collection Postman dédiée a été créée pour tester l'ensemble des 28 endpoints REST du backend. Chaque requête inclut les en-têtes d'authentification, le corps JSON attendu et les assertions de validation. La collection est versionnée dans le dépôt GitHub au format JSON, permettant à chaque développeur de l'importer et d'exécuter les tests d'intégration après chaque modification.

**Maquettage avec Figma.** Les interfaces utilisateur ont été conçues sur **Figma** avant le développement, produisant des maquettes haute fidélité pour l'ensemble des écrans de l'application. Ce travail de conception a permis de valider l'ergonomie et le design system (palette de couleurs, typographie, composants réutilisables) en amont de l'implémentation, réduisant ainsi les itérations de développement.

**Architecture de déploiement.** Le diagramme de la Figure 4.1 illustre l'architecture de déploiement du système, montrant les interactions entre le terminal mobile, le serveur cloud et les services externes.

```
Figure 4.1 – Diagramme de déploiement du système Expense Tracker

┌─────────────────────────────────────────────────────────────────────────────┐
│                          TERMINAL MOBILE                                      │
│                    (iOS / Android — Application React Native)                  │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐     │
│  │  Application Expense Tracker (Expo APK / IPA)                        │     │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐  │     │
│  │  │ Écrans      │  │ Stores      │  │ Axios       │  │AsyncStorage│  │     │
│  │  │(Expo Router)│  │(Zustand)    │  │(Client HTTP)│  │(Tokens)   │  │     │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘  │     │
│  └─────────────────────────────────────────────────────────────────────┘     │
│                                                                               │
│  Réseau : HTTPS — API REST — JSON                                              │
│  (4G / WiFi — URL publique du backend)                                         │
└─────────────────────────────────────┬───────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SERVEUR BACKEND                                        │
│                    (Cloud — Docker Container)                                  │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐     │
│  │  Conteneur Docker (Node.js 18 / Express 5 / TypeScript)             │     │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌───────────┐  │     │
│  │  │ Routes REST │  │ Middlewares  │  │ Contrôleurs │  │ Services  │  │     │
│  │  │  (28 eps)   │  │ (JWT, CORS, │  │  (Logique)  │  │ (Métier)  │  │     │
│  │  │             │  │  Multer)    │  │             │  │           │  │     │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └───────────┘  │     │
│  │  ┌────────────────────────────────────────────────────────────┐    │     │
│  │  │                     Module IA (Groq)                       │    │     │
│  │  │  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │    │     │
│  │  │  │ AIService     │  │ Tool Executor │  │ Analytics Svc │  │    │     │
│  │  │  └───────────────┘  └───────────────┘  └───────────────┘  │    │     │
│  │  └────────────────────────────────────────────────────────────┘    │     │
│  │                                                                     │     │
│  │  Variables d'environnement : PORT, DATABASE_URL, JWT_SECRET,       │     │
│  │  JWT_REFRESH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,        │     │
│  │  GROQ_API_KEY, FRONTEND_URL                                        │     │
│  └─────────────────────────────────────────────────────────────────────┘     │
│                                                                               │
│  Stockage local : uploads/avatars/ — uploads/audio/                           │
└─────────────────────┬──────────────────────┬───────────────────────────────────┘
                      │                      │
                      ▼                      ▼
┌──────────────────────┐        ┌──────────────────────────────┐
│   MongoDB (Cloud ou  │        │     API Externe : Groq       │
│      locale)         │        │  ┌────────────────────────┐ │
│  ┌────────────────┐  │        │  │ Llama 3.3 70B (Chat)   │ │
│  │ users          │  │        │  │ Whisper (Transcription) │ │
│  │ transactions   │  │        │  └────────────────────────┘ │
│  │ categories     │  │        └──────────────────────────────┘
│  │ goals          │  │
│  │ conversations  │  │        ┌──────────────────────────────┐
│  └────────────────┘  │        │   API Externe : Google      │
│  Port: 27017         │        │  ┌────────────────────────┐ │
└──────────────────────┘        │  │ OAuth 2.0 (Auth soc.) │ │
                                │  └────────────────────────┘ │
                                └──────────────────────────────┘
```

Le schéma de déploiement met en évidence la séparation nette entre le client mobile et le serveur backend. Le terminal mobile communique exclusivement via HTTPS avec l'API REST exposée par le conteneur Docker. Le backend, quant à lui, interagit avec la base de données MongoDB et les services externes (Groq pour l'IA, Google pour l'authentification sociale). Cette architecture permet un déploiement indépendant de chaque composant et facilite la maintenance.

## 4.2 Pratiques DevOps & Sécurité

### 4.2.1 Gestion du code source et workflow Git

Le développement d'Expense Tracker a suivi une méthodologie de gestion de code source structurée autour de Git et GitHub. Le dépôt est organisé selon le modèle de branches suivant :

- **`main`** : Branche de production contenant le code stable et déployé. Chaque commit sur `main` correspond à une version validée de l'application.
- **`develop`** : Branche d'intégration où les fonctionnalités développées sont fusionnées avant validation. Elle sert de branche de référence pour l'équipe.
- **`feature/*`** : Branches dédiées à chaque fonctionnalité, créées à partir de `develop`. Par exemple, `feature/auth-google`, `feature/transactions-crud`, `feature/ai-chat`. Une fois la fonctionnalité terminée et testée, la branche est fusionnée dans `develop` via une pull request.
- **`fix/*`** : Branches de correction de bugs, créées à partir de `develop` ou `main` selon l'urgence.

Le workflow de développement se déroule selon le cycle suivant : le développeur crée une branche `feature/` depuis `develop`, implémente la fonctionnalité en effectuant des commits réguliers, pousse la branche sur GitHub et ouvre une pull request vers `develop`. Un processus de revue de code est effectué par l'autre membre de l'équipe avant la fusion, garantissant la qualité et la cohérence du code. Chaque commit suit une convention sémantique : `feat:` pour une nouvelle fonctionnalité, `fix:` pour une correction, `refactor:` pour une restructuration, `docs:` pour la documentation et `chore:` pour les tâches de maintenance.

### 4.2.2 Pipeline CI/CD

Bien que le projet ne mette pas en œuvre un pipeline CI/CD complet avec GitHub Actions, un processus de déploiement semi-automatisé a été établi pour garantir la qualité des livraisons. Ce processus comprend les étapes suivantes :

- **Build et vérification** : Avant chaque déploiement, le projet backend est compilé avec la commande `npm run build` qui exécute le compilateur TypeScript et génère le code JavaScript dans le dossier `dist/`. Les éventuelles erreurs de compilation sont détectées et corrigées à ce stade.
- **Conteneurisation Docker** : Une image Docker est construite à partir du `Dockerfile` définissant l'environnement Node.js 18, l'installation des dépendances et le démarrage du serveur. L'image est testée localement avec `docker-compose up` avant le déploiement.
- **Déploiement du backend** : L'image Docker est déployée sur une plateforme cloud (Render ou serveur dédié) via un simple déclencheur de déploiement manuel. La base de données MongoDB peut être hébergée localement ou sur MongoDB Atlas.
- **Déploiement du frontend mobile** : L'application React Native est buildée avec **Expo EAS** via la commande `eas build --platform android`, générant un fichier APK signé prêt à être installé sur les terminaux Android.

Ce processus, bien que non entièrement automatisé, garantit une vérification systématique du projet avant sa mise en production et permet de détecter les régressions avant le déploiement.

### 4.2.3 Tests automatisés

La stratégie de test du projet Expense Tracker combine des tests manuels fonctionnels, une validation systématique des appels API et des vérifications de sécurité. Le tableau ci-dessous récapitule l'ensemble des tests réalisés par module fonctionnel.

**TABLE 4.2 – Synthèse des tests réalisés**

| Module | Type de test | Description | Résultat |
|--------|-------------|-------------|----------|
| Authentification | Fonctionnel | Inscription, connexion email, connexion Google, refresh token, déconnexion | Validé |
| Authentification | Sécurité | Hachage Bcrypt, validation JWT, expiration token, protection routes | Validé |
| Transactions | Fonctionnel | CRUD complet, filtres, pagination, recherche, ajout rapide | Validé |
| Transactions | Validation | Montant négatif, catégorie inexistante, date future, note trop longue | Validé |
| Catégories | Fonctionnel | Création, modification, suppression, détection doublons, catégories défaut | Validé |
| Catégories | API | Association transaction-catégorie, suppression avec transactions existantes | Validé |
| Goals | Fonctionnel | Création 2 étapes, suivi progression, ajout d'épargne, insights | Validé |
| Goals | Validation | Montant cible > 0, durée ≤ 120 mois, épargne ≤ solde disponible | Validé |
| Statistiques | Fonctionnel | Graphiques hebdo/mensuels, résumé par catégorie, comparaison périodes | Validé |
| Statistiques | Agrégation | Pipeline MongoDB, calcul anomalies, tendances | Validé |
| Assistant IA | Fonctionnel | Chat, tool calls, confirmation, annulation, suggestions | Validé |
| Assistant IA | Intégration | Appel API Groq, transcription Whisper, exécution outils | Validé |
| Profil | Fonctionnel | Modification infos, upload/suppression avatar, préférences | Validé |
| Profil | Sécurité | Upload taille max 5 Mo, formats autorisés, accès protégé | Validé |
| Notifications | Fonctionnel | Notification push, historique, marquage lu/non lu, rappel périodique | Validé |
| API REST | Intégration | 28 endpoints, codes HTTP, pagination, authentification obligatoire | Validé |

Chaque module a été testé individuellement au fur et à mesure de son développement, puis un test d'intégration complet a été réalisé pour valider le chaînage des fonctionnalités. Les tests de validation ont notamment porté sur la cohérence des données entre les modules (par exemple, la création d'une transaction doit impacter le solde du wallet et les statistiques).

### 4.2.4 Sécurité applicative

La sécurité des données et des échanges constitue une préoccupation centrale dans la conception d'Expense Tracker, l'application manipulant des informations financières sensibles. Plusieurs mécanismes de protection ont été implémentés à différents niveaux du système.

**Authentification JWT.** Le système d'authentification repose sur des JSON Web Tokens avec une double stratégie de tokens. L'access token, d'une durée de validité d'une heure, est transmis dans l'en-tête `Authorization: Bearer <token>` de chaque requête. Le refresh token, valide sept jours, est stocké dans un cookie HTTP only et utilisé pour obtenir un nouvel access token sans intervention de l'utilisateur. À l'expiration de l'access token, le client détecte l'erreur 401 via l'intercepteur Axios et déclenche automatiquement une requête de rafraîchissement vers `/auth/refresh`. Si le refresh token est également expiré, l'utilisateur est redirigé vers l'écran de connexion.

**Protection des routes.** Un middleware `authenticateJWT` est appliqué sur l'ensemble des routes protégées. Ce middleware extrait le token de l'en-tête Authorization, vérifie sa validité et sa signature à l'aide du secret JWT, puis attache les informations de l'utilisateur décodées à l'objet `req` pour les contrôleurs ultérieurs. Les seules routes non protégées sont les endpoints d'authentification (`/auth/register`, `/auth/login`, `/auth/google`, `/auth/refresh`).

**Hachage des mots de passe.** Les mots de passe ne sont jamais stockés en clair dans la base de données. Avant la persistance, chaque mot de passe est haché avec l'algorithme Bcrypt avec un facteur de coût de 10 rounds de salage. Lors de la connexion, le mot de passe saisi est comparé au hachage stocké via la méthode `bcrypt.compare()`, sans jamais révéler le mot de passe original.

**Validation des données.** Toutes les entrées utilisateur sont validées à deux niveaux : côté client avec Zod (intégré à React Hook Form) et côté serveur dans les contrôleurs. La validation côté client offre un retour immédiat à l'utilisateur, tandis que la validation côté serveur constitue une barrière de sécurité infranchissable. Les schémas Zod définissent les contraintes de type, de longueur, de format et de plage pour chaque champ.

**Protection CORS.** Le middleware CORS d'Express est configuré pour n'autoriser que les origines explicitement déclarées dans la variable d'environnement `FRONTEND_URL`. En environnement de développement, cette variable pointe vers `http://localhost:8081` (port par défaut d'Expo). En production, elle est remplacée par l'URL du domaine déployé.

**Gestion des erreurs.** Un middleware global de gestion des erreurs capture toutes les exceptions non gérées et retourne une réponse JSON structurée avec un code HTTP approprié. Les erreurs de validation retournent un code 400 avec les détails des champs invalides, les erreurs d'authentification retournent un code 401, et les erreurs internes retournent un code 500 sans divulguer d'informations sensibles.

### 4.2.5 Design Patterns appliqués

La conception et l'implémentation d'Expense Tracker mobilisent un ensemble cohérent de patrons de conception (design patterns) qui assurent la maintenabilité, l'évolutivité et la séparation des responsabilités du code. Le tableau ci-dessous présente les principaux patterns utilisés, leur rôle et leur impact sur le projet.

**TABLE 4.3 – Design Patterns appliqués dans le projet**

| Patron | Composant d'application | Rôle | Avantage | Impact sur la maintenabilité |
|--------|------------------------|------|----------|------------------------------|
| **MVC (Modèle-Vue-Contrôleur)** | Architecture backend complète | Séparation des responsabilités en trois couches : Modèles Mongoose (données), Contrôleurs Express (requêtes/réponses), Vues (réponses JSON) | Découplage total entre la logique métier, la gestion des requêtes et la représentation des données | Facilite la modification d'une couche sans impact sur les autres ; simplifie le test unitaire de chaque composant |
| **Service Layer** | Services métier (AuthService, TransactionService, AIService) | Encapsulation de la logique métier complexe dans des classes de service indépendantes des contrôleurs | Réutilisabilité des services entre différents contrôleurs et endpoints | Centralise les règles métier ; évite la duplication de code dans les contrôleurs |
| **Repository Pattern** | Modèles Mongoose (User, Transaction, Category, Goal, Conversation) | Abstraction de l'accès aux données derrière des interfaces de repository | Indépendance vis-à-vis de la base de données ; possibilité de changer d'ORM sans impacter la logique métier | Isole les requêtes de persistance ; facilite le mock des données pour les tests |
| **Singleton** | Stores Zustand (transactionStore, categoryStore, goalStore, notificationStore) | Instance unique du store d'état partagé entre tous les composants React | Garantit une source unique de vérité pour l'état de l'application | Évite les incohérences d'état entre composants ; simplifie le débogage |
| **DTO (Data Transfer Object)** | Schémas de validation (CreateTransactionDTO, LoginDTO, CreateGoalDTO) | Structuration et validation des données échangées entre le client et le serveur | Séparation entre la structure de communication et la structure de persistance | Permet de faire évoluer l'API sans impacter le modèle de données interne |
| **Middleware Chain** | Pipeline Express (authenticateJWT, errorHandler, multer, cors) | Traitement séquentiel des requêtes HTTP à travers une chaîne de middlewares | Modularité et réutilisabilité des traitements transversaux (auth, logs, validation) | Ajout facile de nouveaux middlewares sans modifier le code existant |
| **Observer** | Notifications push (expo-notifications) | Mécanisme d'abonnement aux événements de rappel et d'alerte | Découplage entre l'émetteur de l'événement (système de rappel) et le récepteur (notification) | Permet d'ajouter de nouveaux types de notifications sans impacter le code existant |
| **Factory** | Création des catégories par défaut à l'inscription | Génération automatisée d'instances de catégories selon un modèle prédéfini | Centralisation de la logique de création d'objets complexes | Simplifie l'ajout de nouvelles catégories par défaut par simple configuration |
| **Interceptor Pattern** | Axios interceptors (request/response) | Interception et traitement des requêtes HTTP sortantes et des réponses entrantes | Injection automatique du token JWT dans les en-têtes ; gestion centralisée des erreurs 401 et du refresh token | Évite la duplication du code d'authentification dans chaque appel API |

Chacun de ces patterns a été choisi pour répondre à un besoin spécifique du projet. Le pattern MVC, par exemple, structure l'ensemble du backend et constitue le socle architectural de la couche serveur. Le Service Layer permet de maintenir des contrôleurs légers qui se contentent d'orchestrer les appels aux services sans contenir de logique métier. Les stores Zustand, implémentant le pattern Singleton, assurent une gestion d'état prévisible et performante côté client. L'interceptor Axios, quant à lui, automatise le renouvellement des tokens JWT de manière transparente pour l'utilisateur, améliorant significativement l'expérience utilisateur.

### 4.2.6 Mise en œuvre du module IA conversationnel

Le module d'intelligence artificielle constitue la composante la plus avancée du projet Expense Tracker. Son implémentation suit une architecture agentique où un modèle de langage à grande échelle (Llama 3.3 70B via Groq) est capable d'interpréter les requêtes en langage naturel, d'exécuter des actions sur la base de données et de maintenir un contexte conversationnel cohérent. Cette section détaille la mise en œuvre concrète de ce module, en couvrant l'architecture du service IA, la construction du prompt, la définition des outils, le mécanisme de confirmation et l'intégration de la transcription vocale.

**Architecture du service IA.** Le module IA est orchestré par le `AIService`, une classe singleton qui encapsule l'ensemble des interactions avec l'API Groq. Ce service est injecté dans le `AIController` via le pattern Service Layer. Son cycle de vie pour chaque message utilisateur se décompose en six étapes : (1) récupération ou création de la conversation en base de données, (2) construction du system prompt personnalisé à partir des données utilisateur, (3) envoi du contexte complet à l'API Groq avec les définitions des 18 outils disponibles, (4) analyse de la réponse du modèle pour détecter les `tool_calls`, (5) exécution immédiate des actions de lecture ou mise en attente des actions destructives, et (6) retour de la réponse formatée au client.

**Construction du system prompt.** Le system prompt est généré dynamiquement à chaque requête et contient quatre sections distinctes. La première section définit l'identité de l'assistant : un expert financier multilingue capable de parler français, anglais et arabe (y compris le dialecte tunisien). La deuxième section intègre les informations personnelles de l'utilisateur : son nom, sa devise préférée, son solde actuel et ses objectifs d'épargne en cours. La troisième section fournit un résumé des transactions récentes et des statistiques du mois en cours pour contextualiser les réponses. La quatrième section décrit les règles de comportement : obligation de demander confirmation pour toute action destructive, interdiction d'effectuer des opérations non liées à la gestion financière, et utilisation systématique des outils plutôt que de suggestions non exécutables.

**Définition des 18 outils.** Les outils (function calling) constituent le mécanisme par lequel le modèle IA interagit avec le système. Chaque outil est défini selon le format standard de l'API Groq, incluant un nom, une description et un schéma JSON des paramètres attendus. Les 18 outils se répartissent en plusieurs catégories : les outils de lecture (consultation du solde, liste des transactions, résumé des dépenses, détails d'un objectif, statistiques par catégorie, liste des catégories, tendances, prédictions), les outils d'écriture (création de transaction, modification de transaction, suppression de transaction, création de catégorie, modification de catégorie, ajout d'épargne à un objectif, création d'objectif, modification d'objectif), et les outils auxiliaires (obtention de la date courante, calcul de potentiel d'épargne). Chaque outil d'écriture est marqué comme destructif, déclenchant le mécanisme de confirmation avant exécution. La **Figure 4.2** illustre le flux de traitement d'un message utilisateur à travers le pipeline IA, depuis la réception du message jusqu'à la réponse finale.

```
Figure 4.2 – Pipeline de traitement du module IA conversationnel

┌──────────────────────────────────────────────────────────────────────────────┐
│                     PIPELINE IA — Traitement d'un message                      │
│                                                                                │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────────────┐     │
│  │ Message      │───>│ AIController      │───>│ AIService.chat()         │     │
│  │ Utilisateur  │    │ POST /ai/chat     │    │                          │     │
│  └──────────────┘    └──────────────────┘    └──────────┬───────────────┘     │
│                                                         │                      │
│                                                         ▼                      │
│                              ┌────────────────────────────────────────────┐   │
│                              │         RÉCUPÉRATION DU CONTEXTE           │   │
│                              │  1. getOrCreateConversation(userId)         │   │
│                              │  2. buildSystemPrompt(user, transactions,   │   │
│                              │     goals, analytics)                       │   │
│                              │  3. getContextMessages() (20 derniers)     │   │
│                              └─────────────────────┬──────────────────────┘   │
│                                                      │                       │
│                                                      ▼                       │
│                              ┌────────────────────────────────────────────┐   │
│                              │       APPEL API GROQ (Llama 3.3 70B)        │   │
│                              │  chat.completions.create({                  │   │
│                              │    messages: [system, ...history, userMsg],  │   │
│                              │    tools: [18 tool definitions],            │   │
│                              │    tool_choice: "auto"                      │   │
│                              │  })                                        │   │
│                              └─────────────────────┬──────────────────────┘   │
│                                                      │                       │
│                                                      ▼                       │
│                              ┌────────────────────────────────────────────┐   │
│                              │        ANALYSE DE LA RÉPONSE               │   │
│                              │                                            │   │
│                              │  ┌──────────────────┐  ┌────────────────┐  │   │
│                              │  │ tool_calls       │  │ Message texte  │  │   │
│                              │  │ (le modèle veut  │  │ (réponse       │  │   │
│                              │  │  exécuter une    │  │  directe sans  │  │   │
│                              │  │  action)         │  │  action)       │  │   │
│                              │  └────────┬─────────┘  └───────┬────────┘  │   │
│                              └───────────┼────────────────────┼───────────┘   │
│                                          │                    │              │
│                                          ▼                    ▼              │
│                              ┌──────────────────────┐  ┌──────────────┐     │
│                              │  LECTURE ou ÉCRITURE? │  │ Réponse      │     │
│                              │                      │  │ directe      │     │
│                              │  ┌──────────┐ ┌────┐ │  │ au client    │     │
│                              │  │ LECTURE  │ │DES-│ │  └──────────────┘     │
│                              │  │ (read)   │ │TRUC│ │                       │
│                              │  │ Exécution │ │TIF │ │                       │
│                              │  │ immédiate │ │    │ │                       │
│                              │  └─────┬────┘ └──┬─┘ │                       │
│                              └────────┼─────────┼───┘                       │
│                                       │         │                           │
│                                       ▼         ▼                           │
│                              ┌────────────┐  ┌──────────────────────────┐  │
│                              │ Résultat   │  │ setPendingAction()        │  │
│                              │ injecté    │  │ pendingAction créé en DB │  │
│                              │ dans le    │  │ Carte confirmation → UI  │  │
│                              │ contexte   │  └──────────────┬───────────┘  │
│                              └──────┬─────┘                 │              │
│                                     │                       ▼              │
│                                     │              ┌──────────────────┐   │
│                                     │              │  POST /ai/confirm│   │
│                                     │              │  { confirmed:    │   │
│                                     └──────┬───────│    true/false }  │   │
│                                            │       └────────┬─────────┘   │
│                                            ▼                 ▼            │
│                                 ┌──────────────────┐  ┌──────────────┐    │
│                                 │ Réponse finale   │  │ Exécution    │    │
│                                 │ + mise à jour    │  │ de l'outil   │    │
│                                 │ de l'historique  │  │ ou annulation│    │
│                                 └──────────────────┘  └──────────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Implémentation du Tool Executor.** Le `ToolExecutor` est le composant responsable de l'exécution concrète des actions demandées par le modèle IA. Chaque outil est implémenté comme une méthode de la classe `ToolExecutor`, qui reçoit les paramètres extraits par le modèle et les transforme en appels aux services métier correspondants. Par exemple, l'outil `create_expense` reçoit les paramètres `amount`, `categoryName`, `note`, `date` et les transmet au `TransactionService.create()` après avoir résolu le nom de la catégorie en son identifiant MongoDB. En cas d'échec (catégorie inexistante, montant invalide), une erreur formatée est retournée au modèle pour qu'il génère un message d'explication approprié.

**Gestion de la mémoire conversationnelle.** L'historique des conversations est stocké dans la collection MongoDB `conversations` sous forme d'un tableau de messages. Chaque message possède un rôle (`user`, `assistant`, `system` ou `tool`), un contenu textuel et un horodatage. Lors de chaque requête, les vingt derniers messages sont extraits et inclus dans le contexte envoyé à Groq, permettant au modèle de maintenir une cohérence sur l'ensemble de la conversation. Une limite de cent messages par conversation est appliquée : lorsque le seuil est atteint, les cinquante messages les plus anciens sont automatiquement archivés, garantissant que la taille du contexte reste dans les limites acceptables pour l'API Groq.

**Intégration de la transcription vocale.** Le module de transcription vocale permet à l'utilisateur de dicter ses dépenses plutôt que de les saisir. L'enregistrement audio est capturé côté client via `expo-audio`, puis envoyé au backend sous forme de fichier via `POST /ai/voice`. Le backend utilise le middleware Multer pour traiter le fichier audio (validation du format et de la taille, max 25 Mo), puis le transmet à l'API Groq Whisper (`whisper-large-v3-turbo`) qui retourne le texte transcrit. Ce texte est ensuite injecté dans le même pipeline IA que les messages textes, permettant à l'utilisateur de dire « Ajoute 15 euros dans Food » et de voir la même carte de confirmation que s'il avait tapé la phrase.

**Gestion des erreurs et cas limites.** Le module IA intègre plusieurs mécanismes de résilience. En cas de timeout de l'API Groq (délai maximal de 10 secondes), un message d'erreur explicite est retourné à l'utilisateur. Si le modèle génère une réponse invalide (tool_call mal formé, paramètres manquants), le `AIService` détecte l'incohérence et demande une nouvelle tentative au modèle avec un message d'instruction. Enfin, si l'utilisateur tente d'effectuer une action non autorisée (ex : « Envoie 100 € à Paul »), le system prompt refuse poliment la requête et propose des alternatives pertinentes dans le périmètre de l'application.

## 4.3 Interfaces utilisateurs et fonctionnalités principales

Cette section présente les principales interfaces de l'application Expense Tracker, organisées par module fonctionnel. Pour chaque interface, nous décrivons les fonctionnalités implémentées, les interactions avec le backend et les choix d'expérience utilisateur.

### 4.3.1 Module Authentification

Le module d'authentification constitue le point d'entrée de l'application et comprend trois écrans principaux : l'écran d'inscription (Sign Up), l'écran de connexion (Sign In) et l'écran de réinitialisation de mot de passe.

**Écran d'inscription (Sign Up).** L'utilisateur crée son compte en fournissant son nom, son adresse email et un mot de passe sécurisé (minimum 8 caractères incluant une majuscule et un chiffre). Le formulaire, géré par React Hook Form avec validation Zod, offre un retour visuel immédiat en cas d'erreur de saisie. Lors de la soumission, une requête `POST /auth/register` est envoyée au backend qui crée l'utilisateur dans MongoDB après avoir haché le mot de passe avec Bcrypt. En cas de succès, le système génère automatiquement les six catégories par défaut (Shopping, Food, Transport, Rent, Health, Salary) et retourne les tokens JWT permettant l'accès immédiat à l'application. Si l'email est déjà utilisé, une erreur 409 est retournée et un message approprié est affiché.

**Écran de connexion (Sign In).** L'écran de connexion propose deux modes d'authentification : la connexion classique par email et mot de passe, et la connexion via Google OAuth. La connexion classique envoie une requête `POST /auth/login` avec les identifiants ; le backend vérifie l'existence de l'utilisateur et compare le mot de passe haché. La connexion Google déclenche un flux OAuth via `expo-auth-session`, récupère un idToken Google, et l'envoie au backend via `POST /auth/google` pour validation et création ou récupération du compte. Dans les deux cas, les tokens JWT sont stockés dans AsyncStorage pour une persistance locale.

**Expérience utilisateur.** Le module d'authentification intègre une gestion transparente des erreurs (messages explicites pour identifiants incorrects, email déjà utilisé, compte inexistant). La détection automatique de la session active au démarrage de l'application redirige l'utilisateur vers l'écran d'accueil si un token valide existe, ou vers l'écran de connexion dans le cas contraire. Un splash screen animé assure une transition fluide lors du chargement initial.

### 4.3.2 Module Dashboard (Accueil)

L'écran d'accueil, ou tableau de bord, constitue la première interface visible après authentification. Il offre une vue d'ensemble synthétique de la situation financière de l'utilisateur.

**Composants affichés.** Le dashboard présente en haut de l'écran le solde actuel du portefeuille, mis à jour dynamiquement à chaque modification de transaction. En dessous, deux cartes récapitulatives affichent le total des revenus et le total des dépenses du mois en cours, avec une couleur distinctive (vert pour les revenus, rouge pour les dépenses). La section centrale affiche un graphique en barres illustrant l'évolution quotidienne des revenus et dépenses sur la semaine. Enfin, une liste des dernières transactions permet à l'utilisateur de voir ses activités récentes sans naviguer vers l'onglet dédié.

**Interactions backend.** Au chargement de l'écran, le store Zustand déclenche trois appels API parallèles : `GET /transactions?limit=5&sort=-date` pour les dernières transactions, `GET /analytics/summary?period=monthly` pour les totaux du mois, et `GET /transactions?group=day&period=weekly` pour les données du graphique. Les réponses sont fusionnées dans le store et l'interface est mise à jour de manière réactive.

### 4.3.3 Module Transactions

Le module de gestion des transactions constitue le cœur fonctionnel d'Expense Tracker. Il permet à l'utilisateur d'effectuer l'ensemble des opérations de suivi financier quotidien.

**Liste des transactions.** L'écran principal du module affiche la liste paginée des transactions, triées par date décroissante. Chaque élément de la liste présente le montant, le nom de la catégorie avec son icône et sa couleur, une note optionnelle et la date. Un indicateur visuel distingue les revenus (texte vert) des dépenses (texte rouge). Un champ de recherche textuelle et des filtres par type, catégorie et période permettent à l'utilisateur de retrouver rapidement une transaction spécifique. Les filtres sont appliqués côté serveur via des paramètres de requête, réduisant la charge de traitement côté client.

**Ajout de transaction.** L'ajout d'une transaction s'effectue via un écran dédié accessible depuis le bouton d'action flottant (FAB) présent sur l'ensemble des écrans de l'application. L'utilisateur sélectionne d'abord le type (revenu ou dépense), puis saisit le montant à l'aide d'un clavier numérique personnalisé. Il choisit ensuite une catégorie parmi les quatre premières suggérées ou accède à la liste complète via « Voir tout ». Une option de création rapide de catégorie est disponible si aucune catégorie existante ne correspond. L'utilisateur peut également ajouter une note et modifier la date si nécessaire. La validation soumet une requête `POST /transactions` au backend, qui crée la transaction et retourne l'objet créé. Le store Zustand est alors mis à jour et la liste des transactions est rafraîchie.

**Ajout rapide (Quick Add).** Pour faciliter la saisie des dépenses fréquentes, le module propose une fonctionnalité d'ajout rapide. L'utilisateur peut sélectionner un montant prédéfini parmi une liste de suggestions contextuelles (ex: « Morning Coffee 4.50$ », « Uber Ride 12.00$ »), ce qui pré-remplit automatiquement le type et le montant. Cette fonctionnalité réduit le nombre d'interactions nécessaires pour enregistrer une transaction courante à deux taps.

### 4.3.4 Module Objectifs d'Épargne (Goals)

Le module Goals permet à l'utilisateur de définir et de suivre des objectifs d'épargne personnalisés, avec un accompagnement intelligent basé sur l'analyse de ses données financières.

**Création d'un objectif.** La création d'un objectif se déroule en deux étapes. Dans la première étape, l'utilisateur choisit le montant cible, soit par saisie manuelle, soit via des montants prédéfinis (1 000, 5 000, 10 000, 25 000). Dans la deuxième étape, il saisit le nom de l'objectif, sélectionne la durée (6 mois, 1 an, 2 ans) et la fréquence d'épargne (hebdomadaire ou mensuelle), puis choisit une catégorie d'objectif. Le système calcule alors une estimation mensuelle (montant cible / durée en mois) et affiche une carte d'insight indiquant si l'objectif est réaliste au vu du solde disponible. La validation envoie une requête `POST /goal/createGoals` au backend.

**Suivi de progression.** La liste des objectifs affiche pour chacun une barre de progression animée, le pourcentage de complétion, le montant épargné par rapport au montant cible et un indicateur de statut intelligent. Les cinq statuts possibles sont calculés dynamiquement : `just_started` (moins de 5 % atteint), `on_track` (progression conforme au planning), `ahead` (en avance), `delayed` (en retard) et `completed` (objectif atteint). L'utilisateur peut ajouter de l'épargne à un objectif existant via une modale de saisie, ce qui déclenche une mise à jour du `savedAmount` et la création automatique d'une transaction de type dépense pour refléter l'opération.

### 4.3.5 Module Statistiques

Le module Statistiques offre une analyse visuelle et chiffrée des habitudes de dépenses de l'utilisateur, avec des graphiques, des agrégations et une détection proactive d'anomalies.

**Graphiques et résumés.** L'écran des statistiques présente un tableau de bord analytique complet. En haut, un sélecteur de période permet de basculer entre les vues hebdomadaire et mensuelle. Le graphique en barres affiche l'évolution des revenus (barres vertes) et des dépenses (barres rouges) pour chaque jour ou mois de la période sélectionnée. En dessous, des cartes récapitulatives présentent les totaux de revenus et dépenses, ainsi que la différence nette. Une section dédiée affiche la ventilation des dépenses par catégorie sous forme de liste ordonnée avec pourcentages, permettant à l'utilisateur d'identifier rapidement les postes de dépenses les plus importants.

**Détection d'anomalies.** Le système analyse automatiquement les dépenses de l'utilisateur et détecte les anomalies par rapport à la moyenne des trois derniers mois. Une dépense est considérée comme anormale si son montant dépasse de 30 % la moyenne historique pour la même catégorie et la même période. Les anomalies détectées sont signalées par une alerte visuelle dans l'interface, accompagnée d'un message explicatif. Ce mécanisme joue un rôle de conseiller financier proactif, alertant l'utilisateur en cas de comportement de dépense inhabituel.

**Interactions backend.** Les données statistiques sont générées côté serveur via des pipelines d'agrégation MongoDB complexes. Le `AnalyticsService` exécute des requêtes d'agrégation en plusieurs étapes : filtrage par utilisateur et période, regroupement par type de transaction, calcul des totaux et moyennes, ventilation par catégorie, et comparaison avec la période précédente. Les résultats sont retournés dans un format structuré prêt à être consommé par les composants graphiques React Native.

### 4.3.6 Module Assistant IA

L'assistant IA constitue la fonctionnalité la plus innovante d'Expense Tracker. Il permet à l'utilisateur d'interagir avec son application en langage naturel, d'effectuer des actions et d'obtenir des analyses personnalisées via un chat conversationnel.

**Interface de chat.** L'écran de l'assistant IA se présente comme une interface de messagerie classique, avec l'historique des messages affiché dans une liste défilante. L'utilisateur saisit son message dans un champ de texte en bas de l'écran, ou utilise le bouton microphone pour dicter sa requête vocalement. Des suggestions rapides (quick replies) sont proposées en haut de l'écran pour faciliter l'interaction avec des requêtes courantes comme « Ajoute une dépense de 15 € dans Food », « Quel est mon budget restant ce mois-ci ? », ou « Combien puis-je épargner d'ici décembre ? ».

**Pipeline de traitement IA.** Lorsque l'utilisateur envoie un message, le backend exécute un pipeline complexe orchestré par le `AIService` :
1. Récupération de l'historique de la conversation depuis MongoDB
2. Construction d'un system prompt personnalisé incluant les informations de l'utilisateur (nom, devise, solde, transactions récentes, objectifs en cours)
3. Appel à l'API Groq avec le contexte complet et la définition des 18 outils disponibles
4. Analyse de la réponse du modèle : si elle contient un `tool_call`, le service détermine s'il s'agit d'une action de lecture (exécutée immédiatement) ou d'une action destructive (mise en attente de confirmation)
5. Retour de la réponse au client avec l'affichage approprié (message texte ou carte de confirmation)

**Gestion des actions destructives.** Pour les actions de modification ou suppression (créer une transaction, supprimer un objectif, modifier une catégorie), l'assistant demande systématiquement une confirmation explicite à l'utilisateur. Une carte de confirmation jaune s'affiche dans l'interface avec les détails de l'action et deux boutons : Confirmer et Annuler. Si l'utilisateur confirme, une requête `POST /ai/confirm` est envoyée au backend qui exécute l'outil via le `ToolExecutor` et génère un message de confirmation personnalisé. Si l'utilisateur annule, l'action est abandonnée et la conversation continue normalement.

**Transcription vocale.** L'utilisateur peut enregistrer un message vocal en maintenant le bouton microphone. Le fichier audio est envoyé au backend via `POST /ai/voice`, où il est transcrit en texte par le modèle Whisper de Groq. Le texte transcrit est ensuite traité par le même pipeline IA que les messages textes, permettant à l'utilisateur de dicter ses dépenses ou ses questions sans saisie manuelle.

### 4.3.7 Module Profil Utilisateur

Le module Profil permet à l'utilisateur de gérer ses informations personnelles et ses préférences.

**Écran de profil.** L'écran affiche les informations de l'utilisateur : photo de profil (avatar), nom, email (non modifiable), numéro de téléphone et adresse. L'utilisateur peut modifier son nom, son téléphone (avec sélecteur d'indicatif pays) et son adresse via un formulaire d'édition. La photo de profil peut être changée en tapant sur l'avatar : le système ouvre le sélecteur d'images (`expo-image-picker`) pour choisir une photo dans la galerie ou en prendre une avec l'appareil photo. L'image est uploadée via une requête `POST /users/avatar` avec `FormData`, traitée par le middleware Multer et stockée dans le dossier `uploads/avatars/`.

**Préférences.** La section des préférences permet à l'utilisateur de changer la devise principale de son application (TND, USD, EUR, GBP) et la langue de l'interface (français, anglais, arabe). Chaque modification est immédiatement persistée côté serveur via une requête `PUT /users/profile` et mise à jour dans le store global. Le changement de langue redéfinit dynamiquement les textes de l'interface sans nécessiter de redémarrage de l'application grâce à l'architecture réactive de React.

### 4.3.8 Module Notifications

Le module Notifications assure le suivi des alertes et des rappels destinés à l'utilisateur.

**Types de notifications.** Le système génère deux types de notifications : les rappels périodiques et les alertes d'anomalies. Les rappels périodiques sont envoyés toutes les treize heures environ pour encourager l'utilisateur à enregistrer ses dépenses quotidiennes. Les alertes d'anomalies sont déclenchées lorsque le système détecte une dépense inhabituelle par rapport à la moyenne historique.

**Interface de notifications.** L'écran des notifications affiche l'historique complet des notifications reçues, trié par date décroissante. Chaque notification est représentée par une carte indiquant le type (rappel ou alerte), le message, la date et un indicateur de statut (lu ou non lu). L'utilisateur peut marquer une notification comme lue en tapant dessus, ou marquer l'ensemble comme lu via un bouton en haut de l'écran. Les notifications push sont gérées côté client par `expo-notifications` et côté serveur par un mécanisme simple d'envoi différé.

### 4.3.9 Expérience Utilisateur Transversale

Au-delà des fonctionnalités spécifiques à chaque module, plusieurs aspects transversaux contribuent à l'expérience utilisateur globale d'Expense Tracker.

**Thème clair/sombre.** L'application supporte deux thèmes visuels : un thème clair pour une utilisation diurne et un thème sombre pour une utilisation nocturne ou dans des environnements à faible luminosité. Le thème est détecté automatiquement en fonction des préférences système de l'utilisateur via l'API `useColorScheme()` de React Native, mais l'utilisateur peut également le basculer manuellement. L'ensemble des couleurs, des arrière-plans et des textes est défini dans un fichier de thème centralisé, garantissant une cohérence visuelle sur l'ensemble de l'application.

**Navigation fluide.** La navigation repose sur Expo Router avec une barre de navigation inférieure à cinq onglets (Accueil, Transactions, Statistiques, Goals, Profil). Le bouton d'action flottant (FAB) est positionné de manière à être accessible du pouce sur les grands écrans. Les transitions entre les écrans sont animées avec React Native Reanimated pour une sensation de fluidité. Chaque écran affiche un indicateur de chargement pendant les appels API, évitant les impressions de blocage.

**Gestion des erreurs.** Les erreurs API sont interceptées par l'interceptor Axios et traduites en messages utilisateur compréhensibles. Une erreur réseau affiche « Impossible de se connecter au serveur », une erreur 401 déclenche un refresh token automatique, et une erreur de validation affiche les champs concernés. Cette gestion centralisée assure une expérience cohérente et évite les crashes inattendus.

## Conclusion

Ce quatrième chapitre a présenté la réalisation concrète du système Expense Tracker, en détaillant l'ensemble des choix d'implémentation et des pratiques de développement qui ont guidé la transformation des spécifications conceptuelles en un produit logiciel fonctionnel.

Le cadre technologique a été exposé à travers la description de l'environnement matériel et logiciel, avec des tableaux récapitulatifs des technologies employées et de leur rôle dans le système. Les outils de support — Git, Postman, Figma, Docker — ont été présentés avec leur contribution spécifique au processus de développement. Les pratiques DevOps et les mécanismes de sécurité ont été détaillés, couvrant la gestion du code source avec le workflow Git, le pipeline de déploiement, la stratégie de tests, les mesures de sécurité applicative (JWT, Bcrypt, CORS, validation) et les neuf patrons de conception appliqués avec leurs avantages respectifs.

Enfin, la présentation des interfaces utilisateur a illustré la réalisation des huit modules fonctionnels de l'application : authentification, tableau de bord, transactions, objectifs d'épargne, statistiques, assistant IA, profil et notifications. Chaque module a été décrit avec ses fonctionnalités, ses interactions avec le backend et les choix d'expérience utilisateur qui le caractérisent.

Le chapitre suivant présentera la phase de validation du système, en détaillant les tests effectués, les résultats obtenus et une analyse critique des performances et de la satisfaction des objectifs fixés.

---

# Conclusion Générale et Perspectives

## Conclusion Générale

Le projet Expense Tracker, réalisé dans le cadre de notre Projet de Fin d'Année en Génie Logiciel, avait pour ambition de concevoir et développer une application mobile de gestion financière personnelle intelligente, sécurisée et accessible. Au terme de ce travail, nous pouvons affirmer que les objectifs fixés ont été atteints, tant sur le plan fonctionnel que technique.

L'application Expense Tracker permet aujourd'hui à un utilisateur de gérer l'intégralité de ses finances personnelles depuis son smartphone. Elle offre un ensemble cohérent de fonctionnalités couvrant l'authentification sécurisée (email et Google), la gestion complète des transactions avec catégorisation personnalisée, le suivi d'objectifs d'épargne avec indicateurs intelligents, un tableau de bord analytique avec graphiques et détection d'anomalies, ainsi qu'un assistant IA conversationnel capable d'interagir en langage naturel et d'exécuter des actions sur la base de données. La transcription vocale via Whisper permet en outre une saisie mains-libres des dépenses, renforçant l'accessibilité de l'application.

La valeur ajoutée d'Expense Tracker réside dans la combinaison inédite d'une interface mobile réactive, d'un système d'authentification robuste et d'un assistant IA véritablement intégré au cœur de l'application. Contrairement aux solutions existantes qui se limitent à des formulaires et des menus de navigation, notre application permet à l'utilisateur de dialoguer naturellement avec ses données financières, de recevoir des alertes proactives et d'obtenir des prédictions personnalisées. Cette approche place l'intelligence artificielle au service de l'utilisateur plutôt que de l'inverse, conformément à la vision initiale du projet.

Sur le plan méthodologique, le projet a suivi une démarche rigoureuse allant de l'analyse des besoins à la conception architecturale, puis à la réalisation et aux tests. L'utilisation d'une architecture trois couches (React Native / Express / MongoDB), l'application de patrons de conception éprouvés (MVC, Service Layer, Repository, Singleton) et l'adoption de bonnes pratiques DevOps (Git, Docker, tests) ont permis de livrer un produit de qualité, maintenable et évolutif.

## Résultats obtenus

Les résultats du projet peuvent être appréciés à plusieurs niveaux. Sur le plan fonctionnel, l'ensemble des modules spécifiés dans le cahier des charges a été implémenté et validé. Le système d'authentification supporte l'inscription, la connexion par email et via Google, le rafraîchissement automatique des tokens et la déconnexion sécurisée. Le module de gestion des transactions permet les opérations CRUD complètes avec filtrage, pagination et recherche. Les objectifs d'épargne intègrent un calcul dynamique de statut avec cinq niveaux d'insight (just_started, on_track, ahead, delayed, completed). Le tableau de bord statistique génère des graphiques en barres, une ventilation par catégorie et des alertes d'anomalies basées sur l'analyse des moyennes historiques.

Sur le plan technique, l'intégration de l'intelligence artificielle via l'API Groq (Llama 3.3 70B) constitue le résultat le plus significatif. L'assistant IA est capable de comprendre des requêtes en langage naturel dans trois langues (français, anglais, arabe), d'exécuter 18 outils distincts couvrant l'ensemble des fonctionnalités de l'application, et de gérer un mécanisme de confirmation pour les actions destructives. La transcription vocale via Whisper fonctionne avec une latence inférieure à trois secondes pour des enregistrements de trente secondes, offrant une alternative fluide à la saisie textuelle.

L'expérience utilisateur a été soignée à travers un design system complet (thème clair/sombre, palette de couleurs cohérente, animations fluides avec Reanimated), une navigation intuitive avec barre inférieure à cinq onglets et bouton FAB, ainsi qu'une gestion centralisée des erreurs et des états de chargement. Les performances sont conformes aux exigences fixées, avec des temps de réponse inférieurs à 500 ms pour les requêtes de lecture et inférieurs à 5 secondes pour les interactions IA.

## Difficultés rencontrées

Le développement d'Expense Tracker n'a pas été exempt de difficultés, qui ont constitué autant d'occasions d'apprentissage et de dépassement technique.

**Connexion frontend-backend.** L'intégration entre le client React Native et le serveur Express a nécessité une attention particulière à la gestion des en-têtes HTTP, des formats de date et de la sérialisation des objets. Les décalages horaires entre le client et le serveur ont notamment causé des incohérences dans l'affichage des transactions, résolues par l'adoption systématique du format UTC et la conversion côté client.

**Gestion des états React Native.** La coordination entre les stores Zustand et les requêtes API a présenté des défis de synchronisation, particulièrement lors des opérations d'écriture suivies de lectures immédiates. L'implémentation d'un mécanisme d'invalidation automatique des stores après chaque mutation a permis de résoudre ces problèmes de cohérence.

**Authentification JWT et Google.** La mise en place du flux OAuth Google avec `expo-auth-session` s'est révélée complexe en raison des configurations multiples requises (URL de redirection, schéma personnalisé, validation côté serveur). La gestion du refresh token en environnement mobile a également nécessité des ajustements pour assurer la persistance et le renouvellement automatique sans intervention utilisateur.

**Configuration MongoDB.** La définition des index et des pipelines d'agrégation a demandé une phase d'optimisation pour garantir les performances sur des volumes de données croissants. Les requêtes de statistiques, en particulier, ont dû être réécrites à plusieurs reprises pour passer d'une logique de calcul côté client à une agrégation serveur efficiente.

**Intégration IA Groq.** L'intégration de l'API Groq a représenté le défi technique le plus important. La construction du system prompt personnalisé, la définition précise des 18 outils avec leurs schémas JSON, la gestion des tool calls multiples et la fiabilité du mécanisme de confirmation ont nécessité de nombreux cycles d'itération et de tests. La gestion des timeouts et des erreurs de l'API externe a également dû être robustifiée pour maintenir une expérience utilisateur fluide.

**Optimisation mobile.** Les contraintes de performance sur les terminaux mobiles (mémoire limitée, batterie, puissance de calcul) ont imposé des optimisations spécifiques : pagination des listes, lazy loading des images, mémoïsation des composants avec `React.memo` et `useMemo`, et réduction du nombre de re-rendus via une sélection fine des états dans les stores Zustand.

## Apports personnels

Ce projet a constitué une expérience formatrice riche à plusieurs égards. Sur le plan technique, il nous a permis de maîtriser l'ensemble de la chaîne de développement full-stack mobile, depuis la conception des interfaces avec React Native et Expo jusqu'à la modélisation des données avec MongoDB et le déploiement conteneurisé avec Docker. La manipulation concrète de l'architecture trois couches, des API REST et des mécanismes d'authentification JWT a ancré des compétences théoriques acquises durant la formation.

L'intégration d'une API d'intelligence artificielle externe (Groq / Llama) a constitué une ouverture significative sur les technologies de pointe. La conception du system prompt, la définition des outils de function calling et la gestion de la boucle agentique nous ont familiarisés avec les paradigmes de l'IA appliquée, un domaine en pleine expansion.

Le travail en équipe de deux développeurs a renforcé nos compétences en collaboration et en gestion de projet. L'utilisation de Git avec un workflow structuré (branches feature, pull requests, revue de code) nous a permis de maintenir une base de code stable tout en développant en parallèle. La répartition claire des rôles (frontend / backend) a favorisé l'autonomie tout en exigeant une communication régulière pour assurer la cohérence de l'intégration.

Enfin, ce projet nous a confrontés à la réalité du développement logiciel : des spécifications qui évoluent, des bugs imprévus, des contraintes techniques qui imposent des compromis, et la nécessité de livrer un produit fonctionnel dans un délai contraint. Cette expérience constitue une préparation précieuse pour notre future vie professionnelle.

## Perspectives d'amélioration

Bien que le projet ait atteint ses objectifs, plusieurs perspectives d'amélioration peuvent être envisagées pour enrichir l'application et étendre son périmètre fonctionnel.

**Déploiement sur les stores.** La publication de l'application sur l'App Store (iOS) et Google Play (Android) constitue la perspective la plus immédiate. Cela nécessitera la création de comptes développeurs, la soumission aux processus de revue et la mise en conformité avec les politiques respectives des plateformes.

**Dashboard web administrateur.** Le développement d'une interface web d'administration permettrait de superviser l'ensemble des utilisateurs, de consulter les logs, de gérer les anomalies et de produire des rapports d'utilisation. Cette interface pourrait être réalisée avec Next.js et React, partageant le même backend Express.

**OCR et scan de factures.** L'intégration d'un module de reconnaissance optique de caractères (OCR) permettrait à l'utilisateur de photographier ses factures et reçus pour que le système en extraie automatiquement le montant, la date et le marchand. Des API comme Google Cloud Vision ou Tesseract pourraient être utilisées à cette fin.

**Export PDF et Excel.** La possibilité d'exporter ses données financières aux formats PDF et Excel répondrait à un besoin de reporting et de partage avec des conseillers financiers. Des bibliothèques comme `pdfkit` ou `exceljs` pourraient être intégrées au backend.

**Recommandations financières avancées.** L'assistant IA pourrait être enrichi avec des capacités de recommandation financière personnalisée : suggestions d'optimisation budgétaire, alertes sur les abonnements inutilisés, comparaison avec des profils utilisateurs similaires, et conseils d'épargne adaptés aux objectifs.

**Intégration bancaire.** À plus long terme, l'agrégation automatique des transactions via les API bancaires (Open Banking) permettrait de synchroniser les comptes bancaires sans saisie manuelle. Cette fonctionnalité, bien que complexe à mettre en œuvre, constituerait un saut qualitatif majeur.

**Synchronisation cloud avancée.** La mise en place d'une synchronisation temps réel via WebSockets ou Firebase permettrait de refléter instantanément les modifications sur tous les appareils de l'utilisateur, renforçant l'expérience multi-appareils.

---

# Références consultées

## Ouvrages et manuels

- Pascal Roques, « UML 2 : Modéliser une application web », 4ème édition, Eyrolles, 2012.
- Craig Larman, « Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development », 3rd Edition, Prentice Hall, 2005.
- Martin Fowler, « Patterns of Enterprise Application Architecture », Addison-Wesley, 2002.
- Robert C. Martin, « Clean Architecture: A Craftsman's Guide to Software Structure and Design », Prentice Hall, 2017.
- Eric Freeman, Elisabeth Robson, « Head First Design Patterns », 2nd Edition, O'Reilly Media, 2020.

## Documentation officielle et ressources techniques

- Meta Platforms, « React Native Documentation — Building Mobile Apps with JavaScript and React », disponible sur : [https://reactnative.dev/docs](https://reactnative.dev/docs), consulté en mars 2026.
- Expo Team, « Expo SDK Documentation — Universal Native Apps with JavaScript », disponible sur : [https://docs.expo.dev](https://docs.expo.dev), consulté en mars 2026.
- OpenJS Foundation, « Node.js Documentation — JavaScript Runtime Built on Chrome's V8 Engine », disponible sur : [https://nodejs.org/docs](https://nodejs.org/docs), consulté en avril 2026.
- Express.js Team, « Express.js Routing and Middleware Documentation », disponible sur : [https://expressjs.com](https://expressjs.com), consulté en avril 2026.
- MongoDB Inc., « MongoDB Manual — Document Database Management System », disponible sur : [https://www.mongodb.com/docs](https://www.mongodb.com/docs), consulté en mars 2026.
- Mongoose Team, « Mongoose ODM Documentation — Elegant MongoDB Object Modeling for Node.js », disponible sur : [https://mongoosejs.com/docs](https://mongoosejs.com/docs), consulté en mars 2026.
- Auth0, « JSON Web Token (JWT) Introduction — RFC 7519 Standard », disponible sur : [https://jwt.io/introduction](https://jwt.io/introduction), consulté en avril 2026.
- Groq Inc., « Groq API Documentation — Ultra-Fast AI Inference with Llama and Whisper Models », disponible sur : [https://console.groq.com/docs](https://console.groq.com/docs), consulté en avril 2026.
- Google Identity, « Google Sign-In for iOS & Android — OAuth 2.0 Authentication », disponible sur : [https://developers.google.com/identity](https://developers.google.com/identity), consulté en mars 2026.

## Articles techniques et références webographiques

- Microsoft Learn, « Centre de ressources DevOps : Découvrez les pratiques DevOps, le contrôle de version Git, les méthodes Agile et DevOps chez Microsoft », disponible sur : [https://learn.microsoft.com/devops](https://learn.microsoft.com/devops), consulté en avril 2026.
- Atlassian, « Git Tutorials — Learn Version Control with Git and GitHub », disponible sur : [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials), consulté en avril 2026.
- Docker Inc., « Docker Documentation — Containerization Platform for Application Deployment », disponible sur : [https://docs.docker.com](https://docs.docker.com), consulté en avril 2026.
- Postman Inc., « Postman API Platform Documentation — Testing and Documenting REST APIs », disponible sur : [https://learning.postman.com](https://learning.postman.com), consulté en avril 2026.
- Meta Platforms, « React Hook Form Documentation — Performant Forms with Ease », disponible sur : [https://react-hook-form.com](https://react-hook-form.com), consulté en mars 2026.
- Zod Team, « Zod Documentation — TypeScript-first Schema Validation with Static Type Inference », disponible sur : [https://zod.dev](https://zod.dev), consulté en mars 2026.
- Zustand Team, « Zustand Documentation — Bear Necessities for State Management in React », disponible sur : [https://docs.pmnd.rs/zustand](https://docs.pmnd.rs/zustand), consulté en mars 2026.
- TanStack, « React Query Documentation — Asynchronous State Management for React/React Native », disponible sur : [https://tanstack.com/query/latest](https://tanstack.com/query/latest), consulté en mars 2026.
- Expo Team, « Expo Router Documentation — File-based Routing for React Native and Web Apps », disponible sur : [https://expo.github.io/router](https://expo.github.io/router), consulté en mars 2026.
- Bcrypt Project, « bcrypt — A Password Hashing Function », disponible sur : [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt), consulté en avril 2026.

---

# Annexes

## Annexe A : Structure du projet

```
expense-tracker/
│
├── ExpenseTracker/                    # Application mobile (React Native / Expo)
│   ├── app/                           # Écrans et pages (Expo Router)
│   │   ├── (auth)/                    # Groupe d'authentification
│   │   │   ├── sign-in.tsx
│   │   │   ├── sign-up.tsx
│   │   │   └── _layout.tsx
│   │   ├── (tabs)/                    # Groupe principal (5 onglets)
│   │   │   ├── index.tsx              # Dashboard
│   │   │   ├── transactions/
│   │   │   ├── stats/
│   │   │   ├── goals/
│   │   │   ├── profile/
│   │   │   └── _layout.tsx
│   │   ├── chat.tsx                   # Assistant IA
│   │   ├── add-transaction.tsx
│   │   └── _layout.tsx
│   ├── components/                    # Composants réutilisables
│   ├── stores/                        # Stores Zustand
│   ├── services/                      # Services (API client Axios)
│   ├── types/                         # Types TypeScript
│   ├── constants/                     # Constantes et configuration
│   └── app.json
│
├── backend-expense-main/              # Backend (Node.js / Express / TypeScript)
│   ├── src/
│   │   ├── controllers/               # Contrôleurs Express
│   │   │   ├── auth.controller.ts
│   │   │   ├── transaction.controller.ts
│   │   │   ├── category.controller.ts
│   │   │   ├── goal.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   └── ai.controller.ts
│   │   ├── services/                  # Services métier
│   │   │   ├── auth.service.ts
│   │   │   ├── transaction.service.ts
│   │   │   ├── category.service.ts
│   │   │   ├── goal.service.ts
│   │   │   ├── analytics.service.ts
│   │   │   ├── prediction.service.ts
│   │   │   └── ai.service.ts
│   │   ├── models/                    # Modèles Mongoose
│   │   │   ├── user.model.ts
│   │   │   ├── transaction.model.ts
│   │   │   ├── category.model.ts
│   │   │   ├── goal.model.ts
│   │   │   └── conversation.model.ts
│   │   ├── middleware/                # Middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   ├── upload.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── routes/                    # Routes Express
│   │   ├── types/                     # Types TypeScript
│   │   └── server.ts                  # Point d'entrée
│   ├── uploads/
│   │   ├── avatars/
│   │   └── audio/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .env.example
│
├── images figma/                     # Maquettes Figma
└── rapport.md                        # Rapport PFA
```

## Annexe B : Routes API principales

| Méthode | Endpoint | Description | Authentification |
|---------|----------|-------------|------------------|
| POST | `/auth/register` | Inscription utilisateur | Non |
| POST | `/auth/login` | Connexion email/mot de passe | Non |
| POST | `/auth/google` | Connexion Google OAuth | Non |
| POST | `/auth/refresh` | Rafraîchissement du token | Non (cookie) |
| POST | `/auth/logout` | Déconnexion | Oui |
| GET | `/transactions` | Liste des transactions (pag.) | Oui |
| POST | `/transactions` | Création d'une transaction | Oui |
| PUT | `/transactions/:id` | Modification d'une transaction | Oui |
| DELETE | `/transactions/:id` | Suppression d'une transaction | Oui |
| GET | `/categories` | Liste des catégories | Oui |
| POST | `/categories` | Création d'une catégorie | Oui |
| PUT | `/categories/:id` | Modification d'une catégorie | Oui |
| DELETE | `/categories/:id` | Suppression d'une catégorie | Oui |
| GET | `/goal/goals` | Liste des objectifs | Oui |
| POST | `/goal/createGoals` | Création d'un objectif | Oui |
| PUT | `/goal/goals/:id` | Ajout d'épargne / modif. | Oui |
| DELETE | `/goal/goals/:id` | Suppression d'un objectif | Oui |
| GET | `/analytics?period=...` | Statistiques et graphiques | Oui |
| GET | `/users/profile` | Profil utilisateur | Oui |
| PUT | `/users/profile` | Modification du profil | Oui |
| POST | `/users/avatar` | Upload d'avatar | Oui |
| DELETE | `/users/avatar` | Suppression d'avatar | Oui |
| GET | `/notifications` | Liste des notifications | Oui |
| PUT | `/notifications/:id/read` | Marquer comme lu | Oui |
| POST | `/ai/chat` | Message à l'assistant IA | Oui |
| POST | `/ai/confirm` | Confirmation d'action IA | Oui |
| POST | `/ai/voice` | Transcription vocale | Oui |

## Annexe C : Exemple de configuration Docker

```dockerfile
# Dockerfile — Backend Express
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY dist/ ./dist/
COPY uploads/ ./uploads/

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - mongodb
    volumes:
      - ./uploads:/app/uploads

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## Annexe D : Exemple de schéma Mongoose

```typescript
// transaction.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  userId: mongoose.Types.ObjectId;
  amount: number;
  type: 'income' | 'expense';
  categoryId: mongoose.Types.ObjectId;
  date: Date;
  note?: string;
}

const transactionSchema = new Schema<ITransaction>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true, min: 0 },
    type: { type: String, enum: ['income', 'expense'], required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    date: { type: Date, required: true, default: Date.now },
    note: { type: String, maxlength: 200 },
  },
  { timestamps: true }
);

transactionSchema.index({ userId: 1, date: -1 });
transactionSchema.index({ userId: 1, categoryId: 1 });

export default mongoose.model<ITransaction>('Transaction', transactionSchema);
```

## Annexe E : Commandes utiles

```bash
# Backend
cd backend-expense-main
npm install                # Installation des dépendances
npm run dev                # Lancement en développement (nodemon)
npm run build              # Compilation TypeScript
npm start                  # Lancement en production
docker-compose up          # Lancement avec Docker

# Frontend
cd ExpenseTracker
npm install                # Installation des dépendances
npx expo start             # Lancement du serveur de développement
npx expo run:android       # Build Android
npx eas build --platform android  # Build APK avec EAS

# Git
git checkout -b feature/nouvelle-fonctionnalite
git add .
git commit -m "feat: description de la fonctionnalité"
git push origin feature/nouvelle-fonctionnalite
```

---

*Rapport réalisé par Oussama Elouragini et Fadi Ben Kalifa — 4ème Année Génie Logiciel, Groupe A — Année universitaire 2025/2026*
