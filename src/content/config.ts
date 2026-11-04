import { defineCollection, z } from 'astro:content';

// ─── Collection : projets/missions (ex-posts WordPress) ───
const projets = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional().default(''),
    categories: z.array(z.string()).default([]),       // = thématiques
    filieres: z.array(z.string()).default([]),         // filières agricoles (nouveauté)
    tags: z.array(z.string()).default([]),
    countries: z.array(z.string()).default([]),
    year_start: z.number().int().optional(),           // année de démarrage du projet
    year_end: z.number().int().optional(),             // année de fin du projet
    client: z.string().optional(),                     // commanditaire (FAO, CCFD…)
    // ─── Montants (demandés dans les dossiers de références) ───
    montant_programme: z.string().optional(),          // budget global du programme/projet, ex. « 46 M USD »
    montant_asc: z.string().optional(),                // montant de la prestation Asc, ex. « 38 500 € HT »
    featured_image: z.string().optional(),
    is_projet: z.boolean().optional().default(false),  // true = apparait aussi sur /projets/ (programme multi-années, pas one-shot)
    video_url: z.string().url().optional(),            // YouTube / Vimeo embed
    site_web: z.string().url().optional(),             // site public du projet (affiché dans la fiche)
    // ─── Ressources téléchargeables (documents Drive, rapports, annexes…) ───
    // Rendu dans une section dédiée « Ressources » en bas de la page projet,
    // avec une ancre stable #ressources (ex : /projets/mon-projet/#ressources)
    // à coller dans les rapports PDF. `type` ne sert qu'à choisir l'icône.
    ressources: z.array(z.object({
      titre: z.string(),                               // libellé affiché du lien
      url: z.string().url(),                           // URL complète (Drive, OneDrive, PDF…)
      type: z.enum(['pdf', 'doc', 'tableur', 'presentation', 'image', 'video', 'lien', 'autre']).optional(),
    })).default([]),
    // ─── Livrables : couverture (1re page) des rapports produits ───
    // `couverture` = image dans /public/livrables/<slug>/… ; `url` optionnelle
    // si le document est publiquement téléchargeable.
    livrables: z.array(z.object({
      titre: z.string(),
      couverture: z.string(),
      annee: z.number().int().optional(),
      type: z.string().optional(),                     // Rapport, Manuel, Support de formation…
      langue: z.string().optional(),                   // FR, ES, EN…
      pages: z.number().int().optional(),
      url: z.string().optional(),                      // URL complète ou chemin /documents/… (PDF hébergé sur le site)
    })).default([]),
    // ─── Photos de terrain (légendées) ───
    photos: z.array(z.object({
      src: z.string(),
      legende: z.string().optional(),
    })).default([]),
    chiffres: z.array(z.object({                       // 2-4 chiffres clés factuels
      valeur: z.string(),
      label: z.string(),
    })).default([]),
    experts: z.array(z.string()).default([]),          // slugs des experts mobilisés
    legacyId: z.number().optional(),
    legacyUrl: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// ─── Collection : expertises (les 6 missions du bureau) ───
const expertises = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),                      // accroche courte
    icon: z.string().optional(),                       // emoji ou ID
    related_categories: z.array(z.string()).default([]), // valeurs de `categories` à filtrer
    order: z.number().optional(),
    image: z.string().optional(),
  }),
});

// ─── Collection : experts (équipe et collaborateurs) ───
const experts = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),                                  // nom complet
    role: z.string(),                                  // titre/poste
    is_gerant: z.boolean().default(false),             // associé-gérant vs collaborateur
    photo: z.string().optional(),                      // URL relative dans /uploads/
    specialities: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    order: z.number().optional(),                      // pour trier dans la liste équipe
    draft: z.boolean().optional().default(false),
  }),
});

// ─── Collection : pages éditoriales (Expertises, Équipe, etc.) ───
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    legacyId: z.number().optional(),
    legacyUrl: z.string().url().optional(),
  }),
});

export const collections = { projets, pages, experts, expertises };
