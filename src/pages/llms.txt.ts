import type { APIRoute } from 'astro';
import { getHome } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const { profile, t, updated, publications, talks, link } = await getHome('en');
  const text = [
    '# Ilya Lyagushenko',
    `> ${profile.data.description}`,
    `Primary language: Russian. Secondary language: English. Last updated: ${updated}.`,
    '## Important Pages',
    [
      `- [Russian homepage](${site})`,
      `- [English homepage](${new URL('en/', site)})`,
      `- [Full profile in Markdown](${new URL('index.md', site)})`,
      `- [Sitemap](${new URL('sitemap.xml', site)})`,
    ].join('\n'),
    '## Work With Me',
    t('work.text'),
    ['work.email', 'work.subscribe', 'work.telegram'].map(key => `- [${t(key)}](${link(key)})`).join('\n'),
    '## Publications',
    publications.map(({ data }) => `- [${data.publisher.en} – ${data.title.en}](${data.url})`).join('\n'),
    '## Speaking',
    talks.flatMap(({ data }) =>
      data.links.map(item => `- [${data.title.en} – ${item.label.en}](${item.url})`),
    ).join('\n'),
  ].join('\n\n');
  return new Response(text + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
