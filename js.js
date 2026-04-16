const LANG_KEY = 'preferred_lang_v1';
const FALLBACK_LANG = 'en';
const SUPPORTED = ['ru', 'en'];
const IT_CAREER_START = { year: 2019, monthIndex: 1, day: 6 };

const translations = {
  ru: {
    'header.title': 'Илья Лягушенко // Ilya Lyagushenko',
    'header.subtitle': 'Продакт в финтехе: retention, churn, рост доходности и CX',
    'about.title': 'Обо мне',
    'about.lead':
      'Я вырос из поддержки и клиентского опыта в продукт, поэтому умею не только смотреть на графики, но и понимать, какая реальная боль клиента стоит за цифрами',
    'about.body.before': 'Работал в Рокетбанке, Яндексе и Т-Банке, сейчас — менеджер продукта в ',
    'about.body.company': 'karta.io',
    'about.body.after':
      '. Специализируюсь на финтехе, кредитных картах, удержании и клиентских сценариях, где результат влияет и на опыт клиента, и на экономику продукта.',
    'about.public.before':
      'О продукте, клиентском опыте и сервисных сценариях я пишу и говорю публично: мои материалы выходили в отраслевых и федеральных СМИ, некоторые тексты публиковались в научных изданиях, а профессиональные результаты были отмечены наградой ',
    'about.public.award': 'Best Business Awards',
    'about.public.after': '.',
    'about.note':
      'Путешествия для меня — не отдельная тема рядом с работой, а источник насмотренности: мне интересно замечать, как сервисы устроены в деталях и почему люди к ним возвращаются или уходят',
    'about.proof.churn.value': '34%',
    'about.proof.churn.label': 'снижение оттока YoY',
    'about.proof.impact.value': '₽400M+',
    'about.proof.impact.label': 'годовой эффект',
    'about.proof.experience.value': '7+',
    'about.proof.experience.label': 'лет в IT',
    'about.proof.team.value': 'до 15',
    'about.proof.team.label': 'человек в команде',
    'about.focus.label': 'Фокус',
    'about.focus.fintech.title': 'Финтех и карты',
    'about.focus.fintech.text':
      'B2C-продукты, кредитные карты, экономика продукта и сервисные сценарии вокруг них',
    'about.focus.retention.title': 'Отток',
    'about.focus.retention.text':
      'Удержание, реактивация, возврат клиентов и проверка гипотез через метрики и эксперименты',
    'about.focus.cx.title': 'Из поддержки в продукт',
    'about.focus.cx.text':
      'Переношу опыт поддержки и клиентского сервиса в продуктовые решения, процессы и интерфейсы',
    'about.focus.leadership.title': 'Собираю команды вокруг решения',
    'about.focus.leadership.text':
      'Соединяю бизнес, аналитику, разработку и клиентский опыт в одно решение. Умею договариваться между функциями и двигать сложные инициативы вперед',
    'about.audience.label': 'Для кого я полезен',
    'about.audience.companies.title': 'Компаниям',
    'about.audience.companies.text':
      'Продукт, удержание, клиентский опыт и сервисные улучшения с ощутимым бизнес-эффектом',
    'about.audience.people.title': 'Людям',
    'about.audience.people.text':
      'Карьерные консультации, менторство по продукту и помощь с переходом в профессию',
    'about.audience.media.title': 'Конференциям и медиа',
    'about.audience.media.text':
      'Выступления, интервью и колонки про продукт, retention, системное мышление и клиентский опыт',

    'contacts.title': 'Контакты',
    'contacts.telegram.title': 'Telegram',
    'contacts.telegram.handle': '@travelasproduct',
    'contacts.linkedin.title': 'LinkedIn',
    'contacts.linkedin.handle': 'Ilya Lyagushenko',
    'contacts.github.title': 'GitHub',
    'contacts.github.handle': 'github.com/ilya-the-frog',
    'contacts.dzen.title': 'Дзен',
    'contacts.dzen.handle': 'dzen.ru/travelasproduct',
    'contacts.twitter.title': 'Twitter',
    'contacts.twitter.handle': 'x.com/ilya_the_frog',
    'contacts.instagram.title': 'Instagram*',
    'contacts.instagram.handle': '@ilya-the-frog*',
    'contacts.instagram.note':
      '* Instagram запрещен в России; принадлежит Meta, признанной экстремистской организацией в РФ.',
    'contacts.email.title': 'Email',
    'contacts.email.handle': 'ilya.the.frog@gmail.com',

    'help.title': 'Чем могу помочь',
    'help.consult.title': 'Консультирую',
    'help.consult.link': 'По поводу карьеры и куда съездить в путешествие',
    'help.mentoring.title': 'Менторство',
    'help.mentoring.link': 'Менторство по продукту',
    'help.content.title': 'Контент',
    'help.content.link': 'Канал «Продакт поехал»',

    'speaker.title': 'Спикер',
    'speaker.sirius.title': 'Сириус',
    'speaker.sirius.link': 'Выступление',
    'speaker.pm.title': 'Product&Marketing — про клиентов',
    'speaker.pm.link': 'Выступление',
    'speaker.jobsearch.title': 'Как увеличить свою заметность на рынке труда',
    'speaker.jobsearch.link': 'Выступление',

    'projects.title': 'Вне работы',
    'projects.intro':
      'Путешествия для меня — не отдых от продукта, а способ смотреть, как сервисы работают в реальной жизни. Я люблю фиксировать маршруты, собирать статистику поездок и превращать наблюдения в контент и side projects',
    'projects.travel.label': 'Путешествия',
    'projects.travel.channel.title': 'Продакт поехал / Travel as Product',
    'projects.travel.channel.text': 'Канал о путешествиях, продуктах и сервисах в реальном мире',
    'projects.travel.nomad.title': 'NomadMania',
    'projects.travel.nomad.text': 'Моя карта поездок и география посещённых мест',
    'projects.travel.nomad.note': 'Что это?',
    'projects.travel.myfr.title': 'MyFR24',
    'projects.travel.myfr.text': 'История моих перелётов и авиационная статистика',
    'projects.meta.github': 'GitHub',
    'projects.side.label': 'Side projects',
    'projects.side.site.title': 'ilyathefrog.ru',
    'projects.side.site.text': 'Этот сайт и его исходный код',
    'projects.side.bot.title': 'Kirkorov',
    'projects.side.bot.text': 'Telegram-бот с 40k+ MAU',

    'publications.title': 'Публикации',
    'publications.comnews.publisher': 'ComNews',
    'publications.comnews':
      'Интерфейс поменять легко — сложнее изменить то, что за ним стоит',
    'publications.habr.publisher': 'Хабр',
    'publications.habr': 'Как руководителю сохранять эффективность в нестабильной среде: инсайты с офлайн-встречи',
    'publications.vc': 'Как вернуть клиентов без новых фич',
    'publications.gopractice': 'От Макдоналдс до продакта',
    'publications.support': 'Как продукту и поддержке наладить коммуникацию',
    'publications.svpressa.publisher': 'Свободная Пресса',
    'publications.svpressa':
      'Я смотрю на системное мышление — может ли человек видеть связь между своей работой и целью бизнеса',
    'publications.elibrary.publisher': 'Финансовый бизнес',
    'publications.elibrary': 'Влияние LLM-ассистентов на снижение операционной нагрузки в контакт-центрах российских банков',
    'publications.innovazia.publisher': 'Инновации и инвестиции',
    'publications.innovazia': 'Стратегии перехода на отечественные операционные системы в ИТ-инфраструктуре банков',
    'publications.aif.publisher': 'Аргументы и Факты',
    'publications.aif': 'Продуктовое чутье. Лягушенко: как за цифрами увидеть потребности клиента',
    'publications.kp.publisher': 'KP.RU',
    'publications.kp': 'Внутренний предприниматель — это не должность, а образ мышления',
    'publications.tj.tourist': 'Туристическая виза в Китай',
    'publications.tj.transit': 'Транзитная виза в Китай',
    'publications.yandex.title': 'Яндекс Недвижимость',
    'publications.yandex': 'Сдаю свою, живу в съёмной: история собственника',
    'publications.tj.japan': 'Туристическая виза в Японию',
    'publications.tj.loans': '«Ни о чем не жалею»: 5 нестандартных целей, чтобы взять кредит',
    'publications.tj.volunteer': 'Добро: плюсы и минусы волонтёрства',
    'publications.tj.laser': 'Лазерная коррекция зрения по купону',
    'publications.tj.title': 'T—Ж',
    'publications.tj.winner': 'Как я выиграл квартиру за вакцинацию в Москве',
    'publications.s7.publisher': 'Gate 7',
    'publications.s7.kamchatka': 'Как съездить на Камчатку на неделю',
    'publications.s7.japan': 'Оседлать хайп: как получить визу в Японию',
    'publications.smm.audience': 'ЦА проще, чем кажется',
    'publications.smm.roles': 'Должности в digital-маркетинге',
    'publications.smm.cosplay': 'Косплееры для пиарщиков и маркетологов',
    'publications.smm.entertainment': 'Индустрия развлечений: TI2016 и финал LCL',
    'publications.smm.myopia': 'Маркетинговая близорукость — что это и чем она грозит фирме',

    'footer.cta': 'Подпишитесь на Telegram-канал!'
  },
  en: {
    'header.title': 'Ilya Lyagushenko // Илья Лягушенко',
    'header.subtitle': 'Fintech Product Manager: retention, churn, profitability growth, and CX',
    'about.title': 'About',
    'about.lead':
      'I moved from customer support and customer experience into product, so I do not just read charts — I understand the customer pain behind the numbers',
    'about.body.before': 'I worked at Rocketbank, Yandex, and T-Bank, and now I am a product manager at ',
    'about.body.company': 'karta.io',
    'about.body.after':
      '. I focus on fintech, credit cards, retention, and customer journeys where the outcome affects both customer experience and product economics.',
    'about.public.before':
      'I write and speak publicly about product, customer experience, and service journeys: my work has appeared in industry and national media, some texts were published in research journals, and my professional results were recognized by ',
    'about.public.award': 'Best Business Awards',
    'about.public.after': '.',
    'about.note':
      'Travel is not a separate theme next to work for me — it sharpens my product sense. I am interested in noticing how services are built in detail and why people come back to them or leave',
    'about.proof.churn.value': '34%',
    'about.proof.churn.label': 'churn reduction YoY',
    'about.proof.impact.value': 'RUB 400M+',
    'about.proof.impact.label': 'annual impact',
    'about.proof.experience.value': '7+',
    'about.proof.experience.label': 'years in IT',
    'about.proof.team.value': 'Up to 15',
    'about.proof.team.label': 'people on a team',
    'about.focus.label': 'Focus',
    'about.focus.fintech.title': 'Fintech & cards',
    'about.focus.fintech.text':
      'B2C products, credit cards, product economics, and the service journeys around them',
    'about.focus.retention.title': 'Retention & churn',
    'about.focus.retention.text':
      'Retention, reactivation, win-back mechanics, and hypothesis validation through metrics and experiments',
    'about.focus.cx.title': 'CX & support to product',
    'about.focus.cx.text':
      'I translate support and customer service experience into product decisions, processes, and interfaces',
    'about.focus.leadership.title': 'Building teams around the solution',
    'about.focus.leadership.text':
      'I bring business, analytics, engineering, and customer experience into one solution. I know how to align functions and move complex initiatives forward',
    'about.audience.label': 'Useful for',
    'about.audience.companies.title': 'Companies',
    'about.audience.companies.text':
      'Product, retention, customer experience, and service improvements with measurable business impact',
    'about.audience.people.title': 'People',
    'about.audience.people.text':
      'Career advice, product mentoring, and help with switching into the profession',
    'about.audience.media.title': 'Conferences & media',
    'about.audience.media.text':
      'Talks, interviews, and columns about product, retention, systems thinking, and customer experience',

    'contacts.title': 'My contacts',
    'contacts.telegram.title': 'Telegram',
    'contacts.telegram.handle': '@travelasproduct',
    'contacts.linkedin.title': 'LinkedIn',
    'contacts.linkedin.handle': 'Ilya Lyagushenko',
    'contacts.github.title': 'GitHub',
    'contacts.github.handle': 'github.com/ilya-the-frog',
    'contacts.dzen.title': 'Zen',
    'contacts.dzen.handle': 'dzen.ru/travelasproduct',
    'contacts.twitter.title': 'Twitter',
    'contacts.twitter.handle': 'x.com/ilya_the_frog',
    'contacts.instagram.title': 'Instagram*',
    'contacts.instagram.handle': '@ilya-the-frog*',
    'contacts.instagram.note':
      '* Instagram is banned in Russia; Meta is recognized as an extremist organization in the Russian Federation.',
    'contacts.email.title': 'Email',
    'contacts.email.handle': 'ilya.the.frog@gmail.com',

    'help.title': 'How can I help',
    'help.consult.title': 'Consulting',
    'help.consult.link': 'Career advice and travel destination recommendations',
    'help.mentoring.title': 'Mentoring',
    'help.mentoring.link': 'Product mentoring',
    'help.content.title': 'Content',
    'help.content.link': 'Travel as Product',

    'speaker.title': 'Speaker',
    'speaker.sirius.title': 'Sirius',
    'speaker.sirius.link': 'Talk',
    'speaker.pm.title': 'Product&Marketing — about customers',
    'speaker.pm.link': 'Talk',
    'speaker.jobsearch.title': 'How to increase your visibility in the job market',
    'speaker.jobsearch.link': 'Talk',

    'projects.title': 'Beyond work',
    'projects.intro':
      'Travel is not separate from product thinking for me. It is one of the ways I study how services work in real life. I like tracking routes, collecting travel stats, and turning observations into content and side projects',
    'projects.travel.label': 'Travel',
    'projects.travel.channel.title': 'Travel as Product',
    'projects.travel.channel.text': 'A channel about travel, products, and real-world service experience',
    'projects.travel.nomad.title': 'NomadMania',
    'projects.travel.nomad.text': 'My travel map and the geography of places I have visited',
    'projects.travel.nomad.note': 'What is it?',
    'projects.travel.myfr.title': 'MyFR24',
    'projects.travel.myfr.text': 'My flight history and aviation stats',
    'projects.meta.github': 'GitHub',
    'projects.side.label': 'Side projects',
    'projects.side.site.title': 'ilyathefrog.ru',
    'projects.side.site.text': 'This site and its source code',
    'projects.side.bot.title': 'Kirkorov',
    'projects.side.bot.text': 'A Telegram bot with 40k+ MAU',

    'publications.title': 'Publications',
    'publications.comnews.publisher': 'ComNews',
    'publications.comnews':
      'It is easy to change the interface; it is harder to change what stands behind it',
    'publications.habr.publisher': 'Habr',
    'publications.habr': 'How leaders can stay effective in an unstable environment: insights from an offline meetup',
    'publications.vc': 'How to win back customers without new features',
    'publications.gopractice': 'From McDonald\'s to Product',
    'publications.support': 'How product and support can build better communication',
    'publications.svpressa.publisher': 'Svobodnaya Pressa',
    'publications.svpressa':
      'I look at systems thinking: can a person see the connection between their work and the business goal?',
    'publications.elibrary.publisher': 'Finance and Business',
    'publications.elibrary': 'The impact of LLM assistants on reducing operational workload in contact centers of Russian banks',
    'publications.innovazia.publisher': 'Innovations and Investments',
    'publications.innovazia': 'Strategies for the transition to domestic operating systems in the IT infrastructure of banks',
    'publications.aif.publisher': 'Arguments and Facts',
    'publications.aif': 'Product intuition. Lyagushenko: how to see customer needs behind the numbers',
    'publications.kp.publisher': 'KP.RU',
    'publications.kp': 'Internal entrepreneur is not a position, but a mindset',
    'publications.tj.tourist': 'China tourist visa',
    'publications.tj.transit': 'China transit visa',
    'publications.yandex.title': 'Yandex Real Estate',
    'publications.yandex': 'Renting out my apartment while living in a rental',
    'publications.tj.japan': 'Japan tourist visa',
    'publications.tj.loans': '"No regrets": 5 unconventional reasons to take out a loan',
    'publications.tj.volunteer': 'Good: volunteering pros and cons',
    'publications.tj.laser': 'Laser vision correction with a coupon',
    'publications.tj.title': 'T-J',
    'publications.tj.winner': 'How I won an apartment for vaccination in Moscow',
    'publications.s7.publisher': 'Gate 7',
    'publications.s7.kamchatka': 'How to spend a week in Kamchatka',
    'publications.s7.japan': 'Ride the hype: how to get a visa to Japan',
    'publications.smm.audience': 'Your target audience is easier to reach than you think',
    'publications.smm.roles': 'Roles in digital marketing',
    'publications.smm.cosplay': 'Cosplayers for PR and marketing professionals',
    'publications.smm.entertainment': 'Entertainment industry: TI2016 and the LoL Continental League final',
    'publications.smm.myopia': 'Marketing myopia — what it is and what it threatens the firm',

    'footer.cta': 'Subscribe to the Telegram channel!'
  }
};

function detectBrowserLang() {
  const navLang = navigator.language || navigator.userLanguage || '';
  const short = navLang.slice(0, 2).toLowerCase();
  return SUPPORTED.includes(short) ? short : FALLBACK_LANG;
}

function getLangFromCookie() {
  const pattern = new RegExp(`(?:^|;\\s*)${encodeURIComponent(LANG_KEY)}=([^;]*)`);
  const match = document.cookie.match(pattern);
  return match ? decodeURIComponent(match[1]) : null;
}

function setLangCookie(lang) {
  const maxAge = 60 * 60 * 24 * 365;
  const cookieValue = `${encodeURIComponent(LANG_KEY)}=${encodeURIComponent(lang)};max-age=${maxAge};path=/;SameSite=Lax`;
  document.cookie = cookieValue;
}

function getInitialLang() {
  const persistedCookie = getLangFromCookie();
  if (persistedCookie && SUPPORTED.includes(persistedCookie)) return persistedCookie;

  const saved = localStorage.getItem(LANG_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  return detectBrowserLang();
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations[FALLBACK_LANG];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document
    .querySelectorAll('[data-lang-btn]')
    .forEach((btn) => btn.classList.toggle('lang-toggle__btn--active', btn.dataset.langBtn === lang));

  updatePublicationDates(lang);
  updateExperienceCounter();
}

function setLang(lang) {
  const next = SUPPORTED.includes(lang) ? lang : FALLBACK_LANG;
  localStorage.setItem(LANG_KEY, next);
  setLangCookie(next);
  applyTranslations(next);
}

function setupLangSwitcher() {
  const initial = getInitialLang();
  applyTranslations(initial);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
  });
}

function formatDate(iso, lang) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const yearShort = String(date.getUTCFullYear()).slice(-2);

  if (lang === 'ru') {
    return `${day}.${month}.${yearShort}`;
  }

  return `${month}/${day}/${yearShort}`;
}

function updatePublicationDates(lang) {
  document.querySelectorAll('.links__link[data-pub-date]').forEach((item) => {
    const iso = item.getAttribute('data-pub-date');
    const dateNode = item.querySelector('.links__date');
    if (!dateNode) return;

    const formatted = formatDate(iso, lang);
    dateNode.textContent = formatted || '';
    dateNode.style.display = formatted ? 'inline-flex' : 'none';
  });
}

function getYearsInIT() {
  const now = new Date();
  let years = now.getFullYear() - IT_CAREER_START.year;

  const anniversaryPassed =
    now.getMonth() > IT_CAREER_START.monthIndex ||
    (now.getMonth() === IT_CAREER_START.monthIndex && now.getDate() >= IT_CAREER_START.day);

  if (!anniversaryPassed) {
    years -= 1;
  }

  return `${Math.max(years, 0)}+`;
}

function updateExperienceCounter() {
  const years = getYearsInIT();
  document.querySelectorAll('[data-it-years]').forEach((node) => {
    node.textContent = years;
  });
}

document.addEventListener('DOMContentLoaded', setupLangSwitcher);
