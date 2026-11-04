# Site Agrarian Systems Consulting

Site web officiel d'**Agrarian Systems Consulting** (Asc), bureau d'étude des systèmes agraires et alimentaires du Monde — agrarian-systems.org.

## Stack

- [Astro 5](https://astro.build) — site statique multi-pages
- TypeScript + collections de contenu (markdown frontmatter)
- CSS scoped, palette terroir maison, typo Source Serif 4 + Inter
- Formulaire de contact via [FormSubmit](https://formsubmit.co)
- Déploiement sur [Vercel](https://vercel.com)

## Architecture

```
src/
├── components/           Composants Astro (Header, Footer, ProjectCard, ...)
├── content/
│   ├── config.ts         Schémas Zod des 4 collections
│   ├── pages/            Pages éditoriales (Bureau, Expertises…) — markdown
│   ├── projets/          65 fiches projet/référence — markdown frontmatter
│   ├── experts/          8 fiches équipe (gérants + collaborateurs)
│   └── expertises/       6 expertises métier liées à des catégories de projets
├── layouts/              BaseLayout.astro
├── pages/                Routes Astro
│   ├── index.astro                     Accueil
│   ├── contact.astro                   Formulaire de contact
│   ├── equipe.astro                    Index équipe
│   ├── equipe/[slug].astro             Page expert
│   ├── expertises/index.astro          Index expertises
│   ├── expertises/[slug].astro         Page expertise + réf rattachées
│   ├── projets/index.astro             Projets pluriannuels (is_projet:true)
│   ├── projets/references.astro        Toutes nos références — filtrable
│   └── projets/[slug].astro            Page projet/référence
└── styles/global.css
```

## Démarrage

```bash
pnpm install         # ou npm install
pnpm dev             # serveur de dev sur http://localhost:4321
pnpm build           # build statique dans dist/
pnpm preview         # preview du build local
```

## Workflow de contribution

1. Créer une branche depuis `main` : `git checkout -b feature/ma-modif`
2. Modifier — Astro recharge à chaud (`pnpm dev`)
3. Commit + push : `git push origin feature/ma-modif`
4. Ouvrir une Pull Request sur GitHub
5. **Vercel génère automatiquement une preview URL** sur la PR pour relire en live
6. Merge sur `main` → déploiement auto en production

## Ajouter une référence projet

Créer un fichier `src/content/projets/mon-nouveau-projet.md` :

```yaml
---
title: "Diagnostic agraire au Pays X"
date: "2025-06-01"
year_start: 2025
year_end: 2025
categories:
  - Diagnostic agraire
  - Formation
filieres:
  - Cacao
countries:
  - Côte d'Ivoire
client: "AFD"
excerpt: "Description courte de 1-2 phrases."
experts:
  - hugo-lehoux
  - adrien-peroches
is_projet: false             # true = apparaît aussi dans "Projets pluriannuels"
video_url: ""                # optionnel — YouTube/Vimeo
draft: false                 # true = fiche non publiée
featured_image: /photos/mon-nouveau-projet/paysage.jpg   # photo d'ouverture (terrain, horizontale)
chiffres:                    # 2-4 chiffres clés vérifiés
  - { valeur: "18", label: "diagnostics agraires" }
livrables:                   # couvertures (1re page) des documents produits
  - titre: "Rapport final du diagnostic agraire"
    couverture: /livrables/mon-nouveau-projet/rapport-final.jpg
    annee: 2025
    type: Rapport            # Rapport | Manuel | Support de formation | Note | Présentation | Article | Outil
    langue: FR
    pages: 84
    # url: https://…         # seulement si le document est public ; sinon bouton « Demander le document »
photos:
  - { src: /photos/mon-nouveau-projet/parcelle.jpg, legende: "Parcelle de riz pluvial, Sambú (Darién)" }
---

## Contexte

Corps en markdown libre ici.
```

### Fabriquer une couverture de livrable

```bash
pdftoppm -f 1 -l 1 -r 110 -jpeg rapport.pdf /tmp/couv
convert /tmp/couv-1.jpg -resize 900x -strip -quality 82 public/livrables/<slug>/<nom>.jpg
```

## Ajouter un expert

Créer `src/content/experts/prenom-nom.md` :

```yaml
---
name: "Prénom Nom"
role: "Consultant·e"
is_gerant: false
photo: /uploads/team/prenom-nom.jpg
specialities: [Agronomie, Diagnostic]
languages: [Français, Anglais]
email: prenom@agrarian-systems.org
---

Bio en markdown.
```

L'expert apparaîtra automatiquement sur la page Équipe et sur toute fiche projet où son slug est listé dans `experts:`.

## Coordonnées

- Hugo Lehoux — hugo@agrarian-systems.org
- Corentin Lucas — corentin@agrarian-systems.org
- Adrien Peroches — adrien@agrarian-systems.org

---

© 2018–2026 Agrarian Systems Consulting
