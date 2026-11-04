import type { CollectionEntry } from 'astro:content';

export type Projet = CollectionEntry<'projets'>;

/** « 2019–2021 », « depuis 2024 » ou l'année seule. */
export function periode(p: Projet, style: 'court' | 'long' = 'court'): string {
  const { year_start: ys, year_end: ye, date } = p.data;
  if (ys && ye) return ys === ye ? String(ys) : `${ys}–${ye}`;
  if (ys && !ye) return style === 'long' ? `depuis ${ys}, en cours` : `depuis ${ys}`;
  return String(date.getFullYear());
}

export const enCours = (p: Projet) => Boolean(p.data.year_start && !p.data.year_end);

/** Tri antéchronologique : en cours d'abord, puis par année de fin puis de début. */
export function parRecence(a: Projet, b: Projet): number {
  const aEnd = a.data.year_end ?? (a.data.year_start ? 9999 : a.data.date.getFullYear());
  const bEnd = b.data.year_end ?? (b.data.year_start ? 9999 : b.data.date.getFullYear());
  if (bEnd !== aEnd) return bEnd - aEnd;
  const aStart = a.data.year_start ?? a.data.date.getFullYear();
  const bStart = b.data.year_start ?? b.data.date.getFullYear();
  return bStart - aStart;
}

/** Image représentative : photo à la une, sinon 1re photo, sinon couverture du 1er livrable. */
export function visuel(p: Projet): { src: string; kind: 'photo' | 'couverture' } | null {
  if (p.data.featured_image && !/unsplash/i.test(p.data.featured_image)) return { src: p.data.featured_image, kind: 'photo' };
  if (p.data.photos?.length) return { src: p.data.photos[0].src, kind: 'photo' };
  if (p.data.livrables?.length) return { src: p.data.livrables[0].couverture, kind: 'couverture' };
  return null;
}

/** Missions proches : score = pays communs ×2 + thématiques communes + filières communes. */
export function missionsProches(p: Projet, all: Projet[], n = 3): Projet[] {
  const inter = (a: string[], b: string[]) => a.filter((x) => b.includes(x)).length;
  return all
    .filter((o) => o.slug !== p.slug && !o.data.draft)
    .map((o) => ({
      o,
      s:
        inter(o.data.countries, p.data.countries) * 2 +
        inter(o.data.categories, p.data.categories) +
        inter(o.data.filieres, p.data.filieres),
    }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || parRecence(a.o, b.o))
    .slice(0, n)
    .map((x) => x.o);
}

const LANGUES: Record<string, string> = { FR: 'en français', EN: 'en anglais', ES: 'en espagnol', PT: 'en portugais' };

/** « Rapport de 84 pages, en espagnol, 2022 » */
export function descriptionLivrable(l: { type?: string; pages?: number; langue?: string; annee?: number }): string {
  const parts: string[] = [];
  const type = l.type ?? 'Document';
  parts.push(l.pages ? `${type} de ${l.pages} pages` : type);
  if (l.langue && LANGUES[l.langue.toUpperCase()] && l.langue.toUpperCase() !== 'FR') parts.push(LANGUES[l.langue.toUpperCase()]);
  if (l.annee) parts.push(String(l.annee));
  return parts.join(', ');
}
