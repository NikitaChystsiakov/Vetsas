// Контент главной. Всё фактическое — с vetsas.by (главная, баннеры, «О клинике», «Врачи», «Услуги и цены», «Отзывы»)
// и Яндекс Карт, октябрь 2026. Ссылки ведут на существующие страницы vetsas.by.

const VS = 'https://vetsas.by';

export const MAIN_PHONE = { value: '+375 29 685-37-01', tel: '+375296853701' };

export const PHONES = [
  { label: 'Запись на приём', value: '+375 29 685-37-01', tel: '+375296853701' },
  { label: 'Запись на приём', value: '+375 17 235-05-81', tel: '+375172350581' },
  { label: 'Телефон аптеки', value: '+375 29 123-63-34', tel: '+375291236334' },
];
export const EMAIL = 'sas.vetdoc@gmail.com';

export const NAV = [
  { t: 'Услуги и цены', href: `${VS}/services` },
  { t: 'Врачи', href: `${VS}/doctors` },
  { t: 'О клинике', href: `${VS}/o-klinike` },
  { t: 'Отзывы', href: '#reviews' },
  { t: 'База знаний', href: `${VS}/base` },
  { t: 'Контакты', href: '#contacts' },
];

// Режим работы — как на vetsas.by: без выходных 9:00–21:00, каждая среда 11:00–21:00
export const HOURS = [
  ['Без выходных', 'с 9:00 до 21:00'],
  ['Каждая среда', 'с 11:00 до 21:00'],
];

// Текст из окна «Срочная помощь» на vetsas.by
export const URGENT_TEXT = 'Экстренных пациентов мы принимаем вне очереди. Пациентов, которым нужна экстренная помощь из-за тяжести состояния и угрозы гибели, обслуживаем без очереди при наличии ветеринарного врача, не занятого другим пациентом (п. 2.2.1 Правил оказания ветеринарных услуг).';

// План клиники — как табличка-навигация у них на ресепшене
export const BOARD = [
  { icon: 'flask', t: 'Лаборатория', href: `${VS}/services/laboratornyie-issledovaniya` },
  { icon: 'scan', t: 'КТ и МРТ', href: `${VS}/services/diagnostika` },
  { icon: 'scope', t: 'Эндоскопия', href: `${VS}/services/endoskopiya` },
  { icon: 'blade', t: 'Операционная', href: `${VS}/services/hirurgiya` },
  { icon: 'bed', t: 'Стационар', href: `${VS}/services/stacionar` },
  { icon: 'pharm', t: 'Ветаптека', href: '#contacts' },
];

// Баннеры со слайдера главной vetsas.by — тексты дословно
export const BANNERS = [
  { id: 'tbs', t: 'Стоимость протезирования ТБС — 5000 р. вместо 15000 р.', d: 'Только для первых 5 пациентов', href: `${VS}/services/ortopediya/protezirovanie-tbs`, promo: true },
  { id: 'mri', t: 'Высокоточная МРТ-диагностика в нашей клинике', d: 'Исследования головного и спинного мозга, патологий внутренних органов и мягких тканей.', href: `${VS}/services/diagnostika` },
  { id: 'diagnostics', t: 'Полный спектр услуг диагностики', d: 'От анализов крови до эндоскопии и компьютерной томографии', href: `${VS}/services` },
  { id: 'histology', t: 'Гистология', d: 'Гистологическое исследование опухолей с заключением сертифицированных ветеринарных специалистов США', href: `${VS}/services/diagnostika/gistologicheskoe-issledovanie-opuholi` },
  { id: 'ct', t: 'Компьютерная томография', d: 'Исследование — от 160 BYN', href: `${VS}/services/diagnostika/kt-kompyuternaya-tomografiya` },
  { id: 'anesthesia', t: 'Безопасный наркоз', d: 'Используем наркотические препараты для наркоза, газовый наркоз, мониторы пациента. Отдельный анестезиолог сопровождает каждого пациента в наркозе', href: `${VS}/services/anesteziologiya-reanimatsiya/narkoz` },
  { id: 'surgery', t: 'Операции', d: 'Ежедневно выполняем операции любой сложности: от кастрации до лапароскопических и торакальных операций даже пожилым пациентам с хроническими заболеваниями', href: `${VS}/services/hirurgiya` },
  { id: 'center', t: 'Мы в центре Минска', d: 'Со своей большой парковкой и садом', href: '#contacts' },
  { id: 'halva', t: 'Оплата по карте «Халва» и «Карте покупок»', d: 'Рассрочка 2 месяца', href: '#contacts' },
];

// «Комплексное лечение» с главной vetsas.by
export const STEPS = [
  { t: 'Диагностика', d: 'Своя лаборатория, рентген, КТ, эндоскопия', img: '/img/step/diagnostics.webp', href: `${VS}/services/diagnostika` },
  { t: 'Лечение', d: 'Берёмся за самых сложных пациентов', img: '/img/step/treatment.webp', href: `${VS}/services` },
  { t: 'Контроль', d: 'Возможность лечения в стационаре', img: '/img/step/control.webp', href: `${VS}/services/stacionar` },
  { t: 'Реабилитация', d: 'Подбираем индивидуальный курс реабилитации для питомца', img: '/img/step/rehab.webp', href: `${VS}/services/reabilitaciya-i-fizioterapiya` },
];

// «Специализация клиники» — список и порядок как на главной vetsas.by; цены «от» — из «Услуги и цены»
export const SPECIALITIES = [
  { t: 'Хирургия', href: `${VS}/services/hirurgiya` },
  { t: 'Стоматология', p: 'приём от 55 BYN', href: `${VS}/services/stomatologiya` },
  { t: 'Репродуктология', href: `${VS}/services/reproduktologiya` },
  { t: 'Ортопедия и травматология', p: 'приём от 55 BYN', href: `${VS}/services/ortopediya` },
  { t: 'Онкология', p: 'приём от 55 BYN', href: `${VS}/services/onkologiya` },
  { t: 'Эндоскопия', href: `${VS}/services/endoskopiya` },
  { t: 'Дерматология', p: 'приём от 40 BYN', href: `${VS}/services/dermatologiya` },
  { t: 'Офтальмология', p: 'приём от 55 BYN', href: `${VS}/services/oftalmologiya` },
  { t: 'Неврология', p: 'приём от 55 BYN', href: `${VS}/services/nevrologiya` },
  { t: 'Диагностика', p: 'УЗИ от 35 BYN', href: `${VS}/services/diagnostika` },
  { t: 'Лабораторные исследования', href: `${VS}/services/laboratornyie-issledovaniya` },
  { t: 'Лапароскопическая хирургия', href: `${VS}/services/laparoskopicheskaya-hirurgiya` },
  { t: 'Анестезиология, реанимация', href: `${VS}/services/anesteziologiya-reanimatsiya` },
  { t: 'Вакцинация', href: `${VS}/services/vaktsinatsiya` },
  { t: 'Нефрология и урология', p: 'приём от 55 BYN', href: `${VS}/services/nefrologiya` },
  { t: 'Эвтаназия и кремация', href: `${VS}/services/evtanaziya-i-kremaciya` },
  { t: 'Гемотрансфузия', href: `${VS}/services/gemotransfuziya` },
  { t: 'Кардиология', href: `${VS}/services/kardialogiya` },
  { t: 'Реабилитация и физиотерапия', href: `${VS}/services/reabilitaciya-i-fizioterapiya` },
  { t: 'Диспансеризация', href: `${VS}/services/dispanserizaciya-domashnih-zhivotnyh` },
  { t: 'Стерилизация и кастрация', href: `${VS}/services/sterilizaciya-i-kastraciya` },
  { t: 'Стационар', href: `${VS}/services/stacionar` },
];

// Из раздела «О клинике»
export const MILESTONES = [
  { y: '2012', t: 'Клинику основал ветеринарный врач Сергей Николаевич Сас' },
  { y: '2013', t: 'Без операции, эндоскопом извлекаем инородные предметы из пищевода, желудка и трахеи' },
  { y: '2014', t: 'Стентирование трахеи при коллапсе у миниатюрных собак — по словам клиники, до сих пор единственные' },
  { y: '2017', t: 'Лапароскопические операции — без разрезов, под контролем камеры' },
];
export const FIRSTS = [
  'Первыми начали проводить эндоскопию: гастро-, трахео-, рино-, колоноскопию и другие исследования',
  'Первыми стали выполнять операции ТПЛО и ТТА при разрыве передней крестообразной связки',
  'Животных, которых раньше отправляли на диагностику в Россию или Литву, обследуют на месте',
];

// Руководители отделений — со страницы «Врачи»
export const TEAM = [
  { name: 'Алексей Сас', role: 'Директор ветеринарного центра. Онколог, ортопед-травматолог', img: '/img/team/sas.webp' },
  { name: 'Владимир Савельев', role: 'Руководитель хирургического отделения. Онколог, пластический и реконструктивный хирург', img: '/img/team/savelyev.webp' },
  { name: 'Дмитрий Гулевич', role: 'Руководитель терапевтического отделения. УЗИ, гастроэнтеролог, нефролог', img: '/img/team/gulevich.webp' },
  { name: 'Вероника Цуканова', role: 'Руководитель отделения реанимации и интенсивной терапии', img: '/img/team/tsukanova.webp' },
  { name: 'Александр Одинцов', role: 'Руководитель отделения анестезиологии', img: '/img/team/odintsov.webp' },
  { name: 'Филипп Лапко', role: 'Руководитель стоматологического отделения', img: '/img/team/lapko.webp' },
];
// Слоганы со страницы «Врачи»
export const TEAM_NOTES = [
  { t: 'Узкопрофильные специалисты', d: 'Каждый врач углубляется в своей области, сложные задачи решают командой.' },
  { t: 'Постоянно обучаемся', d: 'Специалисты учатся в Европе и странах ближнего зарубежья.' },
];

export const CLINIC = {
  addr: 'ул. Козлова, 27а',
  route: 'https://yandex.by/maps/org/sas_enimal_servis/232369591305/',
};

// Яндекс Карты, октябрь 2026
export const RATING = { value: '5,0', count: '3 557 оценок', reviews: '1 237 отзывов', href: 'https://yandex.by/maps/org/sas_enimal_servis/232369591305/reviews/' };

// Отзывы с vetsas.by/reviews. Тексты дословно, сокращены многоточием.
export const REVIEWS = [
  { author: 'Елена', pet: 'Кирюша', date: '28.08.2026',
    text: 'Благодарность от нашей семьи Алексею Сас и всей бригаде врачей… Лапа спасена, диагноз поставлен. Профессионализм, внимательность, компетентность, послеоперационная консультация по телефону (мы из другого города), чуткое отношение к хвостику. За годы болезни были во многих клиниках… но САС по уровню на высоте Эвереста)' },
  { author: 'Наталья', pet: 'Чарси', date: '08.09.2026',
    text: 'Хочу выразить огромную благодарность стоматологу-хирургу Красовскому Евгению за умелую и качественно проведённую сложную операцию моей собаке Чарси… Очень признательна за это анестезиологу Одинцову Александру, за точно подобранную анестезию.' },
  { author: 'Ангелина', pet: 'Асти', date: '07.09.2026',
    text: 'У нас была стерилизация у самого лучшего хирурга у Ермолаева Владимира!!!!! На вторые сутки Астюша уже бегала, я очень сильно переживала, но хирург успокоил и провел операцию на самом высшем уровне!' },
  { author: 'Ольга', pet: 'Соня', date: '28.08.2026',
    text: 'Хочу выразить благодарность хирургу Манцевич Елене Сергеевне и ее команде… которая внимательно и тактично все объяснила перед операцией, а затем сделала профессионально стерилизацию собаке.' },
];

export const ARTICLES = [
  { t: 'Как подготовить питомца к МРТ: голодная пауза, анализы, кардиолог и что можно сделать в день исследования', tag: 'Статьи', date: '01.04.2026', img: '/img/art-mri.webp', href: `${VS}/base/stati/kak-podgotovit-pitomca-k-mrt-golodnaya-pauza-analizy-kardiolog-i-chto-mozhno-sdelat-v-den-issledovaniya` },
  { t: 'Срыгивание у щенка', tag: 'Статьи', date: '14.05.2026', img: '/img/art-puppy.webp', href: `${VS}/base/stati/srygivanie-u-shchenka` },
  { t: 'Белорусская ветеринарная конференция PRO PLAN PARTNERS 2026', tag: 'Новости', date: '07.09.2026', img: '/img/art-conf.webp', href: `${VS}/base/novosti/belorusskoj-veterinarnoj-konferencii-pro-plan-partners-2026` },
];

export const LINKS = {
  doctors: `${VS}/doctors`,
  prices: `${VS}/services`,
  base: `${VS}/base`,
  about: `${VS}/o-klinike`,
  certificates: `${VS}/sertifikaty`,
  reviews: `${VS}/reviews`,
  vacancies: `${VS}/vacancies`,
  donor: `${VS}/services/gemotransfuziya/stat-donorom`,
  order: `${VS}/zhizn-kliniki`,
  offer: `${VS}/dogovor-ofertyi`,
  director: `${VS}/base/novosti/lichnyj-priyom-direktora`,
  privacy: `${VS}/politika-po-obrabotke-personalnyh-dannyh`,
};
