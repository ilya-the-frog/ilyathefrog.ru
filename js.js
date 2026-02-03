const LANG_KEY = 'preferred_lang_v1';
const FALLBACK_LANG = 'en';
const SUPPORTED = ['ru', 'en'];

const translations = {
  ru: {
    'header.title': 'Илья Лягушенко // Ilya Lyagushenko',
    'header.subtitle': 'Продакт-менеджер | Финтех | Путешествия',
    'about.title': 'Обо мне',
    'about.summary.title': 'Кратко о себе',
    'about.summary.text':
      'B2C Product Manager c опытом более 5 лет в финтехе (кредитные карты): отвечаю за снижение churn/рост удержания. Руководил кросс функциональными командами разработчиков и аналитиков до 15 человек (BA/SA/PA). Работал над приоритетными для C-level проектами и с большим количеством stakeholder’ов. Инициативы под моим управлением принесли Т-Банку более 400 миллионов прибыли за год.',
    'about.expertise.title': 'Экспертиза и достижения',
    'about.expertise.text':
      'Обладаю экспертизой в следующих областях: финтех и кредитные карты, удержание пользователей, веб и мобильная разработка, приложения и ЛК для исполнителей, запуск банковских продуктов, проектирование интерфейсов и улучшения клиентского опыта.\nСвоим главным достижением считаю снижение оттока на кредитных карт в T-Банке на 34% по всей воронке YoY.',

    'contacts.title': 'Контакты',
    'contacts.telegram.title': 'Telegram',
    'contacts.telegram.handle': '@travelasproduct',
    'contacts.linkedin.title': 'LinkedIn',
    'contacts.linkedin.handle': 'Ilya Lyagushenko',
    'contacts.github.title': 'GitHub',
    'contacts.github.handle': 'github.com/ilya-the-frog',
    'contacts.twitter.title': 'Twitter',
    'contacts.twitter.handle': 'x.com/ilya_the_frog',
    'contacts.instagram.title': 'Instagram*',
    'contacts.instagram.handle': '@ilya-the-frog*',
    'contacts.email.title': 'Email',
    'contacts.email.handle': 'ilya.the.frog@gmail.com',

    'help.title': 'Чем могу помочь',
    'help.consult.title': 'Консультации',
    'help.consult.link': 'Записаться на консультацию',
    'help.mentoring.title': 'Менторство',
    'help.mentoring.link': 'Менторство по продукту',
    'help.content.title': 'Контент',
    'help.content.link': 'Канал «Путешествия глазами продакта»',

    'speaker.title': 'Спикер',
    'speaker.sirius.title': 'Сириус',
    'speaker.sirius.link': 'Выступление',
    'speaker.pm.title': 'Product&Marketing — про клиентов',
    'speaker.pm.link': 'Выступление',

    'projects.title': 'Проекты в свободное время',
    'projects.channel.title': 'Telegram-канал',
    'projects.channel.link': 'Путешествия глазами продакта',
    'projects.bot.title': 'Бот',
    'projects.bot.link': 'Киркоров (40k+ MAU)',

    'publications.title': 'Публикации',
    'publications.vc': 'Как вернуть клиентов без новых фич',
    'publications.gopractice': 'От Макдоналдс до продакта',
    'publications.support': 'Как продукту и поддержке наладить коммуникацию',
    'publications.aif.publisher': 'Аргументы и Факты',
    'publications.aif': 'Продуктовое чутье. Лягушенко: как за цифрами увидеть потребности клиента',
    'publications.kp.publisher': 'KP.RU',
    'publications.kp': 'Илья Лягушенко: "Внутренний предприниматель - это не должность, а образ мышления"',
    'publications.tj.tourist': 'Туристическая виза в Китай',
    'publications.tj.transit': 'Транзитная виза в Китай',
    'publications.yandex.title': 'Яндекс Недвижимость',
    'publications.yandex': 'Сдаю свою, живу в съёмной: история собственника',
    'publications.tj.japan': 'Туристическая виза в Японию',
    'publications.tj.volunteer': 'Добро: плюсы и минусы волонтёрства',
    'publications.tj.laser': 'Лазерная коррекция зрения по купону',
    'publications.tj.title': 'T—Ж',
    'publications.tj.winner': 'Как я выиграл квартиру за вакцинацию в Москве',
    'publications.smm.audience': 'ЦА проще, чем кажется',
    'publications.smm.roles': 'Должности в digital-маркетинге',
    'publications.smm.cosplay': 'Косплееры для пиарщиков и маркетологов',
    'publications.smm.entertainment': 'Индустрия развлечений: TI2016 и финал LCL',
    'publications.smm.myopia': 'Маркетинговая близорукость — что это и чем она грозит фирме',

    'resume.title': 'Резюме',
    'resume.label': 'Резюме',
    'resume.link': 'HH',

    'skills.hard.title': 'Hard Skills',
    'skills.hard.link': 'GoPractice — SAT Certificate',
    'skills.soft.title': 'Soft Skills',
    'skills.soft.link': 'Менторство/консультации (кейсы по запросу)',
    'skills.note': '*Организация, деятельность которой запрещена на территории РФ',

    'footer.cta': 'Подпишитесь на Telegram-канал!'
  },
  en: {
    'header.title': 'Ilya Lyagushenko // Илья Лягушенко',
    'header.subtitle': 'Product Manager | Fintech | Travel',
    'about.title': 'About',
    'about.summary.title': 'Summary',
    'about.summary.text':
      'B2C Product Manager with 5+ years in fintech (credit cards). I own churn reduction and retention growth. Led cross‑functional teams of engineers and analysts (BA/SA/PA) up to 15 people. Delivered executive-level initiatives and worked with many stakeholders. Initiatives I led generated several million USD in profit for T‑Bank in one year.',
    'about.expertise.title': 'Expertise & achievement',
    'about.expertise.text':
      'Expertise: fintech and credit cards, retention, web and mobile product development, contractor/agent apps and self-service portals, banking product launches, UI/UX, and customer experience improvements.\nKey achievement: reduced T‑Bank credit card churn by 34% YoY across the funnel.',

    'contacts.title': 'My contacts',
    'contacts.telegram.title': 'Telegram',
    'contacts.telegram.handle': '@travelasproduct',
    'contacts.linkedin.title': 'LinkedIn',
    'contacts.linkedin.handle': 'Ilya Lyagushenko',
    'contacts.github.title': 'GitHub',
    'contacts.github.handle': 'github.com/ilya-the-frog',
    'contacts.twitter.title': 'Twitter',
    'contacts.twitter.handle': 'x.com/ilya_the_frog',
    'contacts.instagram.title': 'Instagram*',
    'contacts.instagram.handle': '@ilya-the-frog*',
    'contacts.email.title': 'Email',
    'contacts.email.handle': 'ilya.the.frog@gmail.com',

    'help.title': 'How can I help',
    'help.consult.title': 'Consultations',
    'help.consult.link': 'Book a consultation',
    'help.mentoring.title': 'Mentoring',
    'help.mentoring.link': 'Product mentoring',
    'help.content.title': 'Content',
    'help.content.link': 'Travel through a product manager\'s eyes',

    'speaker.title': 'Speaker',
    'speaker.sirius.title': 'Sirius',
    'speaker.sirius.link': 'Talk',
    'speaker.pm.title': 'Product&Marketing — about customers',
    'speaker.pm.link': 'Talk',

    'projects.title': 'Side projects',
    'projects.channel.title': 'Telegram channel',
    'projects.channel.link': 'Product gone',
    'projects.bot.title': 'Bot',
    'projects.bot.link': 'Kirkorov (40k+ MAU)',

    'publications.title': 'Publications',
    'publications.vc': 'How to win back customers without new features',
    'publications.gopractice': 'From McDonald\'s to Product',
    'publications.support': 'How product and support can build better communication',
    'publications.aif.publisher': 'Arguments and Facts',
    'publications.aif': 'Product intuition. Lyagushenko: how to see customer needs behind the numbers',
    'publications.kp.publisher': 'KP.RU',
    'publications.kp': 'Ilya Lyagushenko: "Internal entrepreneur is not a position, but a mindset"',
    'publications.tj.tourist': 'China tourist visa',
    'publications.tj.transit': 'China transit visa',
    'publications.yandex.title': 'Yandex Real Estate',
    'publications.yandex': 'Renting out my apartment while living in a rental',
    'publications.tj.japan': 'Japan tourist visa',
    'publications.tj.volunteer': 'Good: volunteering pros and cons',
    'publications.tj.laser': 'Laser vision correction with a coupon',
    'publications.tj.title': 'T-J',
    'publications.tj.winner': 'How I won an apartment for vaccination in Moscow',
    'publications.smm.audience': 'Your target audience is easier to reach than you think',
    'publications.smm.roles': 'Roles in digital marketing',
    'publications.smm.cosplay': 'Cosplayers for PR and marketing professionals',
    'publications.smm.entertainment': 'Entertainment industry: TI2016 and the LoL Continental League final',
    'publications.smm.myopia': 'Marketing myopia — what it is and what it threatens the firm',

    'resume.title': 'My resume',
    'resume.label': 'Resume',
    'resume.link': 'HH',

    'skills.hard.title': 'Hard Skills',
    'skills.hard.link': 'GoPractice — SAT Certificate',
    'skills.soft.title': 'Soft Skills',
    'skills.soft.link': 'Mentoring/Consultations (examples & cases on request)',
    'skills.note': '*Organization whose activities are prohibited in the Russian Federation',

    'footer.cta': 'Subscribe to the Telegram channel!'
  }
};

function detectBrowserLang() {
  const navLang = navigator.language || navigator.userLanguage || '';
  const short = navLang.slice(0, 2).toLowerCase();
  return SUPPORTED.includes(short) ? short : FALLBACK_LANG;
}

function getInitialLang() {
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
      node.innerHTML = dict[key].replace(/\n/g, '<br />');
    }
  });

  document
    .querySelectorAll('[data-lang-btn]')
    .forEach((btn) => btn.classList.toggle('lang-toggle__btn--active', btn.dataset.langBtn === lang));

  updatePublicationDates(lang);
}

function setLang(lang) {
  const next = SUPPORTED.includes(lang) ? lang : FALLBACK_LANG;
  localStorage.setItem(LANG_KEY, next);
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

document.addEventListener('DOMContentLoaded', setupLangSwitcher);
