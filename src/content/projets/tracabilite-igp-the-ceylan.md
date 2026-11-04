---
title: "Traçabilité IGP Thé Ceylan"
date: "2025-01-01"
year_start: 2025
year_end: 2026
categories:
  - Outils numériques
  - Filière agricole
filieres:
  - Thé
countries:
  - Sri Lanka
client: "CIRAD / SLTB"
excerpt: "Conception et déploiement sur Airtable du système d'enregistrement des inspections de l'indication géographique « Ceylon Tea » pour les inspecteurs du Sri Lanka Tea Board, pour le CIRAD (projet financé par l'AFD)."
draft: false
experts:
  - hugo-lehoux
chiffres:
  - { valeur: "7", label: "régions d'inspection couvertes" }
  - { valeur: "17", label: "points de contrôle IG suivis" }
  - { valeur: "35", label: "inspecteurs et assistants utilisateurs" }
livrables:
  - titre: "Structure de la base Airtable du Ceylon Tea GI Verification System"
    couverture: /livrables/tracabilite-igp-the-ceylan/structure-base-airtable.jpg
    annee: 2025
    type: Outil
    langue: EN
---
#### Contexte
Le Sri Lanka Tea Board (SLTB), organisme public de régulation de la filière thé, a sollicité une assistance technique pour mettre en place l'indication géographique (IG) « Ceylon Tea » et ses dispositifs de contrôle. L'AFD a confié cette assistance au CIRAD, dans le cadre du projet *Ceylon Tea Value Creation through the Development of Geographical Indication and International Quality Certifications*.

Le SLTB a été désigné auditeur externe de l'IG. Ses inspecteurs vérifient sur le terrain les « Points to Master » du plan de contrôle auprès de l'ensemble des opérateurs : plantations, collecteurs, usines et exportateurs. Jusqu'ici, ces inspections reposaient sur des formulaires papier et la remontée des données restait un point faible du dispositif.

#### Objectifs
- Disposer d'un outil simple de saisie des résultats d'inspection, utilisable par les Tea Inspectors et les Management Assistants des sept régions administratives.
- Suivre dans le temps la conformité de chaque opérateur sur les points de contrôle qui le concernent, ainsi que les non-conformités.
- Donner au siège et aux antennes régionales du SLTB des tableaux de bord pour analyser les résultats par région, par point de contrôle et par catégorie d'opérateur.

#### Réalisations Asc
- Analyse du plan de contrôle et des quatre formulaires d'inspection (producteurs, collecteurs, exportateurs, fiche de non-conformité) pour les traduire en modèle de données relationnel.
- Conception de la base Airtable, structurée autour des utilisateurs, des régions, des opérateurs et des inspections. Seuls les points de contrôle applicables à la catégorie de l'opérateur inspecté sont affichés, et chaque point peut être commenté.
- Consolidation et import des listes d'opérateurs et du personnel d'inspection fournies par le SLTB.
- Développement d'interfaces différenciées selon les profils : formulaires de saisie, suivi des inspections planifiées et réalisées, tableaux de bord de conformité, calcul automatique des derniers statuts par opérateur.
- Accompagnement de la mise en service : gestion des comptes et des droits d'accès des antennes régionales, intégration des demandes de modification, enregistrements vidéo de démonstration de l'outil.
