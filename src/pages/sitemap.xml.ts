import type { APIRoute } from 'astro';
import { getSite } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const { updated } = await getSite();
  const entries = ['./', 'en/'].map(path =>
    `  <url><loc>${new URL(path, site)}</loc><lastmod>${updated}</lastmod></url>`,
  ).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
