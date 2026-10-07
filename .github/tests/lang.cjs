const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../..');
const source = fs.readFileSync(path.join(root, 'js.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'home.html'), 'utf8');

for (const [cookie, saved, browser, expected] of [
  ['preferred_lang_v1=ru', 'en', 'en-US', 'ru'],
  ['other=1; preferred_lang_v1=en; last=2', null, 'ru-RU', 'en'],
  ['', 'ru', 'en-US', 'ru'],
  ['', null, 'ru-RU', 'ru'],
  ['', null, 'fr-FR', 'en'],
  ['preferred_lang_v1=invalid', 'en', 'ru-RU', 'en'],
  ['other_preferred_lang_v1=ru', null, 'en-US', 'en'],
  ['preferred_lang_v1=rubbish', null, 'en-US', 'en'],
]) {
  const storage = new Map(saved ? [['preferred_lang_v1', saved]] : []);
  const nodes = Array.from(html.matchAll(/data-i18n="([^"]+)"/g), ([, key]) => ({
    getAttribute: () => key,
    textContent: '',
  }));
  const document = {
    cookie, documentElement: {}, addEventListener() {},
    querySelectorAll: (selector) => selector === '[data-i18n]' ? nodes : [],
  };
  const context = vm.createContext({
    document, navigator: { language: browser },
    localStorage: { getItem: (key) => storage.get(key), setItem: (key, value) => storage.set(key, value) },
  });
  vm.runInContext(source, context);
  assert.equal(context.getInitialLang(), expected);
  if (cookie.includes('preferred_lang_v1=' + expected)) {
    assert.equal(storage.get('preferred_lang_v1'), expected);
    assert.match(document.cookie, /max-age=0/);
    document.cookie = '';
    assert.equal(context.getInitialLang(), expected);
  }
  for (const lang of ['ru', 'en']) {
    const previousCookie = document.cookie;
    context.setLang(lang);
    assert.equal(storage.get('preferred_lang_v1'), lang);
    assert.equal(document.cookie, previousCookie);
    assert.equal(document.documentElement.lang, lang);
    assert.ok(nodes.every((node) => node.textContent));
    assert.equal(context.getInitialLang(), lang);
  }
}
console.log('Language selection, cookie migration and RU/EN translations: OK');
