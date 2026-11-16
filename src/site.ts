import { getCollection, getEntry } from 'astro:content';

export type Language = 'ru' | 'en';

export async function getSite() {
  const entry = await getEntry('site', 'site');
  if (!entry) throw new Error('Missing src/content/site/site.md');
  return entry.data;
}

export async function getHome(lang: Language) {
  const [profile, { updated, links }, publications, talks] = await Promise.all([
    getEntry('profiles', lang),
    getSite(),
    getCollection('publications'),
    getCollection('talks'),
  ]);
  if (!profile) throw new Error(`Missing profile for ${lang}`);

  const { copy } = profile.data;
  function t(key: string) {
    const value = copy[key];
    if (!value) throw new Error(`Missing ${lang} text: ${key}`);
    return value;
  }

  function link(key: string) {
    const value = links[key];
    if (!value) throw new Error(`Missing site link: ${key}`);
    return value;
  }

  publications.sort((a, b) => b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id));
  talks.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
  return { profile, t, link, updated, publications, talks };
}

export function formatDate(date: string, lang: Language) {
  const [year, month, day] = date.split('-');
  return lang === 'ru' ? `${day}.${month}.${year.slice(-2)}` : `${month}/${day}/${year.slice(-2)}`;
}

const today = new Date().toISOString().slice(0, 10);
const years = Number(today.slice(0, 4)) - 2019 - Number(today.slice(5) < '02-06');
export const experience = `${Math.max(years, 0)}+`;
