import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../../dist/${path}`, import.meta.url), 'utf8');
const ru = read('index.html');
const en = read('en/index.html');
const md = read('index.md');
const llms = read('llms.txt');

test('both language pages contain complete content and crawlable navigation', () => {
  assert.match(ru, /<html lang="ru">/);
  assert.match(en, /<html lang="en">/);
  assert.match(ru, /<main[^>]*>[\s\S]+Работать вместе/);
  assert.match(en, /<main[^>]*>[\s\S]+Work with me/);
  assert.match(ru, /<a[^>]+href="\.\/en\/"[^>]+hreflang="en"/);
  assert.match(en, /<a[^>]+href="\.\.\/"[^>]+hreflang="ru"/);

  for (const [html, path] of [[ru, '/'], [en, '/en/']]) {
    assert.ok(html.includes(`rel="canonical" href="https://ilyathefrog.ru${path}"`));
    assert.match(html, /<link[^>]+type="text\/markdown"[^>]+href="[^"]*index\.md"/);
    assert.doesNotMatch(html, /<script[^>]+src="[^"]*\/(?:_astro\/|js\.js)/);
    if (process.env.GITHUB_SHA) {
      assert.ok(html.includes(`name="build-commit" content="${process.env.GITHUB_SHA}"`));
    }

    for (const [, local] of html.matchAll(/(?:href|src)="(\.\.?\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      const relative = new URL(local, new URL(`https://example.test/preview${path}`)).pathname;
      const file = relative.slice('/preview/'.length) + (relative.endsWith('/') ? 'index.html' : '');
      assert.ok(relative.startsWith('/preview/') && existsSync(new URL(`../../dist/${file}`, import.meta.url)), `Missing local URL ${local} on ${path}`);
    }
  }
});

test('publications and agent files are present in the static build', () => {
  const dates = (html) => Array.from(html.matchAll(/data-pub-date="([^"]+)"/g), ([, date]) => date);
  const sorted = dates(ru);
  assert.ok(sorted.length > 0);
  assert.deepEqual(dates(en), sorted);
  assert.deepEqual(sorted, [...sorted].sort().reverse());
  assert.deepEqual(Array.from(md.matchAll(/^- (\d{4}-\d{2}-\d{2}),/gm), ([, date]) => date), sorted);
  assert.equal(llms.split('## Publications\n\n')[1].split('\n\n')[0].split('\n').length, sorted.length);
  const sitemap = read('sitemap.xml');
  assert.match(sitemap, /<loc>https:\/\/ilyathefrog\.ru\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/ilyathefrog\.ru\/en\/<\/loc>/);
  assert.match(read('robots.txt'), /Sitemap: https:\/\/ilyathefrog\.ru\/sitemap\.xml/);
  assert.doesNotThrow(() => JSON.parse(read('.well-known/http-message-signatures-directory')));
});
