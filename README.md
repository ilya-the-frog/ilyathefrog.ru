# ilyathefrog.ru

Моя личная визитка: [ilyathefrog.ru](https://ilyathefrog.ru/).

Это статический сайт на HTML, CSS и JavaScript без сборки и фреймворков. Сначала я просто загрузил его на [Beget](https://beget.com/p2494612) через файловый менеджер, как будто сейчас 2007 год, а потом завел репозиторий и настроил автодеплой: когда изменения попадают в `main`, они отправляются на хостинг.

Для меня это второе возвращение в разработку после [Kirkorov](https://t.me/travelasproduct/73): теперь уже с личным ноутбуком, своим сайтом и AI-инструментами под рукой.

## Что внутри

- `index.php` — front controller для главной: выставляет discovery-заголовки и отдает HTML или Markdown по `Accept`.
- `home.html` — структура страницы, SEO-мета, Open Graph и контентные блоки.
- `index.md` — Markdown-версия главной страницы для агентов.
- `.htaccess` — negotiation для `Accept: text/markdown`, `Link` response headers и заголовки Markdown-ответа.
- `style.css` — стили визитки.
- `js.js` — переключение языка, автоопределение языка браузера, сохранение выбора языка и даты публикаций.
- `avatar.jpeg`, фавиконки и web manifest — визуальные ассеты сайта.
- `robots.txt`, `sitemap.xml`, `llms.txt` — служебные файлы для поисковиков и LLM.
- `.well-known/http-message-signatures-directory` — директория публичных ключей для Web Bot Auth.

## Языки

Сайт поддерживает русский и английский. При первом заходе язык выбирается по языку браузера, затем выбор сохраняется в `localStorage` и cookie. Переключатель RU/EN остается доступен на странице.

## Разработка

Проект можно редактировать локально в любом редакторе. Сейчас основной сетап:

- [VS Code](https://code.visualstudio.com/)
- [Codex](https://openai.com/codex/): сначала как плагин, потом как отдельное приложение

Так как сборки нет, для проверки HTML достаточно открыть `home.html` в браузере. Серверные заголовки проверяются после деплоя.

Markdown-ответ для агентов проверяется на сервере с поддержкой `.htaccess`:

```sh
curl -i https://ilyathefrog.ru/ -H 'Accept: text/markdown'
```

Ожидаемые ключевые заголовки: `Content-Type: text/markdown; charset=UTF-8`, `Vary: Accept`, `Link`, `x-markdown-tokens`.

## Деплой

Продакшен живет на [Beget](https://beget.com/p2494612). Изменения деплоятся автоматически после push в `main`.

## Контекст

О сайте, разработке и путешествиях пишу в канале [«Продакт поехал»](https://t.me/travelasproduct).
