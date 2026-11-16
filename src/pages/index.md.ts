import type { APIRoute } from 'astro';
import { experience, getHome } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const { profile, t, link, updated, publications, talks } = await getHome('en');
  const mdLink = (label: string, url: string) =>
    `[${label.replaceAll('[', '\\[').replaceAll(']', '\\]')}](<${url}>)`;
  const contact = (id: string) => {
    const key = `contacts.${id}.handle`;
    return `- ${t(`contacts.${id}.title`)}: ${mdLink(t(key), link(key))}`;
  };
  const cards = (keys: string[]) => keys.map(key => `- **${t(key + '.title')}**: ${t(key + '.text')}`);
  const text = [
    `# ${t('header.title')}`,
    t('header.subtitle'),
    `Page last updated: ${updated}.`,
    `## ${t('work.title')}`,
    t('work.text'),
    ['work.email', 'work.subscribe', 'work.telegram'].map(key => `- ${mdLink(t(key), link(key))}`).join('\n'),
    `## ${t('about.title')}`,
    profile.body?.trim(),
    `## Proof Points\n\n${t('about.proof.note')}`,
    ['churn', 'impact', 'experience', 'team'].map(key => {
      const value = key === 'experience' ? experience : t(`about.proof.${key}.value`);
      return `- ${value} ${t(`about.proof.${key}.label`)}`;
    }).join('\n'),
    `## ${t('about.focus.label')}`,
    cards(['fintech', 'retention', 'cx', 'leadership'].map(key => 'about.focus.' + key)).join('\n'),
    `## ${t('projects.title')}`,
    t('projects.intro'),
    `### ${t('projects.travel.label')}`,
    ['channel', 'nomad', 'myfr'].map(key => {
      const prefix = `projects.travel.${key}`;
      return `- ${mdLink(t(prefix + '.title'), link(prefix + '.title'))}: ${t(prefix + '.text')}`;
    }).join('\n'),
    `### ${t('projects.side.label')}`,
    [`- ${mdLink(t('projects.side.site.title'), link('projects.side.site.repo'))}: ${t('projects.side.site.text')}`,
      `- ${mdLink(t('projects.side.bot.title'), link('projects.side.bot.title'))}: ${t('projects.side.bot.text')} ${mdLink(t('projects.meta.github'), link('projects.side.bot.repo'))}`].join('\n'),
    `## ${t('about.audience.label')}`,
    cards(['companies', 'people', 'media'].map(key => 'about.audience.' + key)).join('\n'),
    `## ${t('contacts.title')}`,
    ['telegram', 'linkedin', 'github', 'scholar', 'dzen', 'twitter', 'instagram', 'email'].map(contact).join('\n'),
    t('contacts.instagram.note'),
    `## ${t('help.title')}`,
    ['consult', 'mentoring', 'content'].map(id => {
      const key = `help.${id}.link`;
      return `- ${mdLink(t(key), link(key))}`;
    }).join('\n'),
    `## ${t('speaker.title')}`,
    talks.map(({ data }) =>
      `- ${data.title.en}: ${data.links.map(item => mdLink(item.label.en, item.url)).join(', ')}`,
    ).join('\n'),
    `## ${t('publications.title')}`,
    publications.map(({ data }) => `- ${data.date}, ${data.publisher.en}: ${mdLink(data.title.en, data.url)}`).join('\n'),
    `[Website](${site}) · [llms.txt](${new URL('llms.txt', site)})`,
  ].filter(Boolean).join('\n\n');
  return new Response(text + '\n', { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
