import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Cpu,
  Radio,
  Radar,
  Satellite,
  Waves,
  Gauge,
  FileCode2,
  Check,
  Mail,
  Menu,
  X,
  Zap,
  CircuitBoard,
  SlidersHorizontal,
  Workflow,
  ShieldCheck,
  MoveRight,
  Layers3,
  Braces,
  Box,
  ChevronRight,
  Download,
  SignalHigh,
  Network,
  ScanLine,
  Newspaper,
  CalendarDays
} from 'lucide-react';
import './styles.css';

const assets = {
  sdrBoard: '/signalsoft-sdr-black.png',
  sdrBoardAlt: '/signalsoft-sdr-black.png',
  diagramA: 'https://static.tildacdn.com/tild3137-3564-4639-b164-343238623031/Group_4592_2.svg',
  diagramB: 'https://static.tildacdn.com/tild6539-6561-4737-b430-623663356431/Union_3.svg'
};

const navItems = [
  ['IP-ядра', '#ip-cores'],
  ['SDR', '#sdr'],
  ['Компетенции', '#capabilities'],
  ['Применения', '#applications'],
  ['Поставка', '#delivery'],
  ['Новости', '#news'],
  ['Контакты', '#contacts']
];

const capabilities = [
  {
    number: '01',
    icon: Braces,
    title: 'RTL / IP cores',
    text: 'Параметризуемые VHDL/SystemVerilog-блоки, testbench, golden vectors и документация.'
  },
  {
    number: '02',
    icon: Radio,
    title: 'SDR / DFE',
    text: 'DUC/DDC, OFDM, FEC, синхронизация, CFR, DPD и спектральная обработка.'
  },
  {
    number: '03',
    icon: CircuitBoard,
    title: 'FPGA / RFSoC',
    text: 'Zynq UltraScale+, RFSoC, AXI-Stream, JESD204, ADC/DAC и hardware bring-up.'
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Verification',
    text: 'Fixed-point анализ, RTL simulation, timing closure, regression и измерения на стенде.'
  }
];

const ipCores = [
  {
    index: '01',
    title: 'DVB-S2/T2 FEC ENCODERex',
    family: 'FEC / SATCOM',
    metric: 'LDPC + BCH',
    text: 'Высокоскоростное помехоустойчивое кодирование для спутниковых, эфирных и широкополосных каналов.'
  },
  {
    index: '02',
    title: 'VITERBIex-IP',
    family: 'CHANNEL DECODER',
    metric: 'Puncturing',
    text: 'Параметризуемый декодер Витерби для модемов, телеметрии и систем с жестким latency budget.'
  },
  {
    index: '03',
    title: 'OFDMex-IP',
    family: 'OFDM PHY',
    metric: 'до 400 МГц',
    text: 'Модуляция и демодуляция OFDM, циклический префикс и обработка широкополосных потоков.'
  },
  {
    index: '04',
    title: 'FFTex-IP',
    family: 'FFT / SPECTRUM',
    metric: 'до 460 МГц',
    text: 'Пайплайновое БПФ для OFDM, спектрального анализа, радара и измерительных приложений.'
  },
  {
    index: '05',
    title: 'PC-CFRex-IP',
    family: 'PAPR REDUCTION',
    metric: 'Realtime CFR',
    text: 'Снижение пик-фактора и повышение эффективности передающего тракта и усилителя мощности.'
  },
  {
    index: '06',
    title: 'DPDex-IP',
    family: 'DIGITAL PREDISTORTION',
    metric: 'Wideband DPD',
    text: 'Компенсация нелинейности передатчика и улучшение EVM/ACLR в цифровом front-end.'
  }
];

const sdrSpecs = [
  ['RF диапазон', '75 МГц — 6 ГГц'],
  ['Полоса Tx', 'до 450 МГц'],
  ['Полоса Rx', 'до 200 МГц'],
  ['Архитектура', 'Zynq UltraScale+ / ADRV9009'],
  ['Канальность', 'MIMO до 8×8'],
  ['Интерфейсы', 'Ethernet / PCIe / AXI-Stream']
];

const applications = [
  {
    icon: SignalHigh,
    title: 'Системы связи',
    text: 'Прототипирование PHY, OFDM, FEC, DFE и широкополосных модемов.',
    label: 'COMMUNICATIONS'
  },
  {
    icon: Radar,
    title: 'Радар и RF sensing',
    text: 'Генерация, захват и детерминированная обработка широких полос.',
    label: 'RADAR / SENSING'
  },
  {
    icon: Satellite,
    title: 'SatCom и телеметрия',
    text: 'DVB-S2/T2, FEC, синхронизация и устойчивые каналы передачи данных.',
    label: 'SPACE / SATCOM'
  },
  {
    icon: Network,
    title: 'MIMO и beamforming',
    text: 'Многоканальная синхронизация и масштабируемые стенды 2×2, 4×4, 8×8.',
    label: 'MULTI-CHANNEL'
  },
  {
    icon: ScanLine,
    title: 'Спектральный мониторинг',
    text: 'FFT, запись I/Q, классификация сигналов и лабораторный анализ.',
    label: 'SPECTRUM'
  },
  {
    icon: Gauge,
    title: 'Test & measurement',
    text: 'Инженерные стенды, испытания алгоритмов и интеграция с измерительным ПО.',
    label: 'R&D'
  }
];

const delivery = [
  'RTL/IP-core под целевую FPGA или SoC',
  'Testbench, regression и golden vectors',
  'Datasheet и integration guide',
  'Fixed-point модель и оценка ресурсов',
  'Интеграция AXI-Stream / JESD / ADC / DAC',
  'Hardware bring-up и сопровождение испытаний'
];

const companyNews = [
  {
    date: '04.06.2026',
    category: 'Хабр',
    title: 'На Хабре вышла статья об алгоритмах цифрового предыскажения',
    text: 'Опубликовано исследование алгоритмов цифрового предыскажения для LTE-сигналов на SDR-платформе РИТМ SDR USRP.',
    href: 'https://habr.com/ru/companies/etmc_exponenta/articles/1043272/'
  },
  {
    date: '03.06.2026',
    category: 'DPD',
    title: 'Оптимизация структуры DPD-модели по метрике ACLR',
    text: 'Подобрали структуру цифрового предыскажения с минимальной вычислительной сложностью при требуемом качестве линеаризации по ACLR.'
  },
  {
    date: '29.05.2026',
    category: 'SDR',
    title: 'Запустили Quake 1 через радиоканал',
    text: 'Проверили OFDM-радиомодем на собственных IP-ядрах: реальный игровой трафик передавался по радиоканалу и работал в динамике.',
    video: '/video_2026-05-29_17-07-06.mp4'
  }
];

const legalDocs = [
  {
    title: 'Реквизиты оператора',
    items: [
      'Полное наименование: Общество с ограниченной ответственностью "СИГНАЛСОФТ"',
      'Сокращенное наименование: ООО "СИГНАЛСОФТ"',
      'ИНН: 5503283851',
      'ОГРН: 1265500005957',
      'КПП: 550301001',
      'Дата регистрации: 01.06.2026',
      'Юридический адрес: 644122, Омская область, г.о. Город Омск, г. Омск, ул. Орджоникидзе, д. 83 к. 1',
      'Генеральный директор: Кащенко Игорь Евгеньевич',
      'Email для обращений по персональным данным: hello@signalsoft.ru'
    ]
  },
  {
    title: 'Политика обработки персональных данных',
    items: [
      'Обрабатываются данные из формы: имя, компания, email, описание задачи, а также технические данные браузера и сервера.',
      'Цели обработки: ответ на запрос, подготовка консультации или коммерческого предложения, ведение деловой переписки и обеспечение работы сайта.',
      'Правовое основание: согласие пользователя, запрос пользователя до заключения договора и требования Федерального закона N 152-ФЗ.',
      'Специальные категории персональных данных и биометрические данные через сайт не запрашиваются.'
    ]
  },
  {
    title: 'Согласие и права пользователя',
    items: [
      'Отправляя форму, пользователь подтверждает согласие на обработку указанных персональных данных.',
      'Пользователь может запросить доступ, уточнение, блокирование или удаление персональных данных.',
      'Согласие можно отозвать письмом на hello@signalsoft.ru.',
      'Данные хранятся до достижения целей обработки или до отзыва согласия, если закон не требует больший срок.'
    ]
  },
  {
    title: 'Cookies и технические данные',
    items: [
      'Сайт может использовать необходимые cookies, localStorage и серверные журналы для корректной работы интерфейса и защиты сайта.',
      'Маркетинговые cookies и рекламная аналитика не подключены. При добавлении аналитики понадобится отдельное уведомление и настройка согласия.',
      'Продолжая пользоваться сайтом после принятия уведомления, пользователь соглашается с использованием необходимых технических данных.'
    ]
  }
];

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="header-shell">
      <a className="brand" href="#top" aria-label="Signal Soft" onClick={() => setOpen(false)}>
        <img src="/signalsoft-logo.png" alt="Signal Soft" />
      </a>

      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Главное меню">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>

      <a className="contact-pill" href="#contacts">
        Обсудить проект <ArrowRight size={16} />
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Открыть меню">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-label="Визуализация SDR тракта">
      <div className="graphic-grid" />
      <div className="radar radar-one" />
      <div className="radar radar-two" />
      <div className="hero-board">
        <div className="board-glow" />
        <img
          src={assets.sdrBoard}
          alt="Черная SDR-платформа Signal Soft"
          decoding="async"
          onError={(event) => { event.currentTarget.src = '/sdr-fallback.svg'; }}
        />
      </div>
      <div className="graphic-badge badge-a"><span>RF</span><b>75 MHz—6 GHz</b></div>
      <div className="graphic-badge badge-b"><span>DSP</span><b>460 MHz FFT</b></div>
      <div className="graphic-badge badge-c"><span>MIMO</span><b>до 8×8</b></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="micro-label"><span /> IP CORES · SDR · FPGA / RFSoC</div>
        <h1>Цифровые радиотракты от алгоритма до работающего железа.</h1>
        <p>
          Signal Soft разрабатывает IP-ядра, SDR-платформы и FPGA/RFSoC-подсистемы для связи,
          радиолокации, SatCom и спектрального анализа.
        </p>
        <div className="hero-actions">
          <a className="button button-green" href="#ip-cores">Смотреть IP-ядра <ArrowRight size={18} /></a>
          <a className="button button-ghost" href="#contacts">Запросить консультацию</a>
        </div>
      </div>
      <HeroGraphic />
      <div className="hero-bottomline">
        <span>RTL / VHDL / SYSTEMVERILOG</span>
        <span>AXI-STREAM / JESD204</span>
        <span>FIXED-POINT / VERIFICATION</span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-section" id="capabilities">
      <div className="intro-heading">
        <span className="section-label">WHAT WE BUILD</span>
        <h2>Инженерные решения для обработки радиосигналов в реальном времени</h2>
      </div>
      <p className="intro-lead">
        От отдельного DSP-блока до готовой SDR-подсистемы: архитектура, RTL,
        верификация, интеграция с RF-трактом и аппаратная отладка.
      </p>
      <div className="capability-grid">
        {capabilities.map(({ number, icon: Icon, title, text }) => (
          <article className="capability-card" key={title}>
            <div className="capability-top"><span>{number}</span><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contacts">Подробнее <ChevronRight size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function IpCores() {
  return (
    <section className="ip-section" id="ip-cores">
      <div className="section-top dark-section-top">
        <div>
          <span className="section-label">IP CORE PORTFOLIO</span>
          <h2>Ключевые блоки цифрового front-end</h2>
        </div>
        <p>Готовые ядра сокращают путь от модели алгоритма до интеграции в FPGA/SoC и испытаний на целевой аппаратуре.</p>
      </div>

      <div className="ip-grid">
        {ipCores.map((core) => (
          <article className="ip-card" key={core.title}>
            <div className="ip-index">{core.index}</div>
            <div className="ip-family"><FileCode2 size={16} /> {core.family}</div>
            <h3>{core.title}</h3>
            <div className="ip-metric">{core.metric}</div>
            <p>{core.text}</p>
            <a href="#contacts">Запросить datasheet <MoveRight size={18} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function SdrSection() {
  return (
    <section className="sdr-section" id="sdr">
      <div className="sdr-visual">
        <div className="sdr-image-stage">
          <div className="sdr-stage-label">SIGNAL SOFT / SDR REFERENCE PLATFORM</div>
          <img
            src={assets.sdrBoardAlt}
            alt="Черная SDR-платформа Signal Soft"
            loading="lazy"
            decoding="async"
            onError={(event) => { event.currentTarget.src = '/sdr-fallback.svg'; }}
          />
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
        </div>
        <div className="signal-path">
          <div><span>01</span><b>RF FRONT-END</b></div>
          <ArrowRight size={18} />
          <div><span>02</span><b>ADC / DAC</b></div>
          <ArrowRight size={18} />
          <div><span>03</span><b>FPGA / DSP</b></div>
        </div>
      </div>

      <div className="sdr-content">
        <span className="section-label">SDR PLATFORM</span>
        <h2>Широкополосная платформа для прототипирования, MIMO и RF-исследований</h2>
        <p>
          Решение на Zynq UltraScale+ и ADRV9009 поддерживает передачу, прием, запись I/Q,
          спектральный анализ и масштабирование многоканальных систем.
        </p>
        <div className="spec-list">
          {sdrSpecs.map(([name, value], index) => (
            <div className="spec-row" key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{name}</b>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <a className="inline-link" href="#contacts">Обсудить конфигурацию <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

function EngineeringBand() {
  const steps = [
    ['01', 'Алгоритм', 'Математическая модель и требования'],
    ['02', 'Fixed-point', 'Разрядности, динамический диапазон, EVM'],
    ['03', 'RTL', 'Пайплайн, интерфейсы, ресурсы'],
    ['04', 'Verification', 'Testbench и regression'],
    ['05', 'Bring-up', 'Timing closure и измерения']
  ];

  return (
    <section className="engineering-band">
      <div className="engineering-head">
        <span className="section-label">ENGINEERING FLOW</span>
        <h2>Один процесс — от MATLAB-модели до сигнала на анализаторе</h2>
      </div>
      <div className="flow-grid">
        {steps.map(([n, title, text]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section className="applications-section" id="applications">
      <div className="section-top">
        <div>
          <span className="section-label">APPLICATIONS</span>
          <h2>От RF-сигнала к данным и действию</h2>
        </div>
        <p>Архитектура решений адаптируется под полосу, канальность, latency и аппаратную платформу конкретного проекта.</p>
      </div>
      <div className="application-grid">
        {applications.map(({ icon: Icon, title, text, label }, index) => (
          <article className={`application-card app-${index + 1}`} key={title}>
            <div className="application-icon"><Icon size={28} /></div>
            <span>{label}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contacts">Решение для проекта <ArrowRight size={17} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section className="delivery-section" id="delivery">
      <div className="delivery-copy">
        <span className="section-label">DELIVERY PACKAGE</span>
        <h2>Не просто исходный код — комплект для внедрения</h2>
        <p>
          Заказчик получает воспроизводимый инженерный результат: ядро, проверочную инфраструктуру,
          документацию и поддержку интеграции в конечную систему.
        </p>
        <a className="button button-dark" href="#contacts">Запросить состав поставки <ArrowRight size={18} /></a>
      </div>
      <div className="delivery-list">
        {delivery.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
            <Check size={20} />
          </div>
        ))}
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="news-section" id="news">
      <div className="section-top">
        <div>
          <span className="section-label">COMPANY NEWS</span>
          <h2>Новости компании</h2>
        </div>
        <p>Короткие обновления о разработке IP-ядер, SDR-платформ, верификации и инженерных демонстрациях Signal Soft.</p>
      </div>

      <div className="news-grid">
        {companyNews.map((item) => (
          <article className="news-card" key={item.title}>
            {item.video && (
              <video className="news-video" controls preload="metadata">
                <source src={item.video} type="video/mp4" />
              </video>
            )}
            <div className="news-meta">
              <span><CalendarDays size={15} /> {item.date}</span>
              <b>{item.category}</b>
            </div>
            <div className="news-icon"><Newspaper size={25} /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.href || '#contacts'} target={item.href ? '_blank' : undefined} rel={item.href ? 'noreferrer' : undefined}>
              Узнать подробнее <ArrowRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contacts">
      <div className="contact-intro">
        <span className="section-label">START A PROJECT</span>
        <h2>Есть задача по IP-ядру или SDR?</h2>
        <p>Укажите полосу, частоту дискретизации, целевую FPGA/SoC, интерфейсы, latency budget и сроки.</p>
        <a className="email-link" href="mailto:hello@signalsoft.ru?subject=Signal%20Soft%20SDR%20/%20IP-core%20request">
          <Mail size={20} /> hello@signalsoft.ru
        </a>
      </div>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()} aria-label="Форма запроса проекта">
        <div className="field-row">
          <label>Имя<input type="text" name="name" autoComplete="name" placeholder="Ваше имя" /></label>
          <label>Компания<input type="text" name="company" autoComplete="organization" placeholder="Название компании" /></label>
        </div>
        <label>Email<input type="email" name="email" autoComplete="email" placeholder="name@company.com" required /></label>
        <label>Задача<textarea name="project" placeholder="Например: OFDM + FFT для SDR, 250 MS/s, AXI-Stream, Zynq UltraScale+, нужна верификация и bring-up." required /></label>
        <label className="consent-field">
          <input type="checkbox" name="privacyConsent" required />
          <span>
            Согласен на обработку персональных данных и ознакомлен с <a href="#legal">политикой обработки персональных данных</a>.
          </span>
        </label>
        <button className="button button-green" type="submit">Отправить запрос <ArrowRight size={18} /></button>
      </form>
    </section>
  );
}

function LegalSection() {
  return (
    <section className="legal-section" id="legal">
      <div className="legal-intro">
        <span className="section-label">LEGAL INFORMATION</span>
        <h2>Правовая информация</h2>
        <p>
          Раздел подготовлен для раскрытия информации об операторе, правилах обработки персональных данных,
          согласии пользователя и использовании необходимых технических данных сайта.
        </p>
      </div>

      <div className="legal-grid">
        {legalDocs.map((doc) => (
          <article className="legal-card" key={doc.title}>
            <div className="legal-card-top">
              <ShieldCheck size={23} />
              <h3>{doc.title}</h3>
            </div>
            <ul>
              {doc.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="legal-note">
        <b>Источник реквизитов:</b> данные сверены по ОГРН 1265500005957 и ИНН 5503283851. Перед публикацией проверьте
        актуальность адреса и контактного email.
      </div>
    </section>
  );
}

function CookieNotice() {
  const [accepted, setAccepted] = React.useState(() => {
    if (typeof window === 'undefined') return true;
    return window.localStorage.getItem('signalsoft-cookie-consent') === 'accepted';
  });

  if (accepted) return null;

  const acceptCookies = () => {
    window.localStorage.setItem('signalsoft-cookie-consent', 'accepted');
    setAccepted(true);
  };

  return (
    <div className="cookie-notice" role="region" aria-label="Уведомление о cookies">
      <p>
        Сайт использует необходимые технические данные, cookies или localStorage для корректной работы интерфейса.
        Подробнее — в разделе <a href="#legal">правовой информации</a>.
      </p>
      <button className="button button-green" type="button" onClick={acceptCookies}>Понятно</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo"><img src="/signalsoft-logo.png" alt="Signal Soft" /></div>
      <div className="footer-statement">IP CORES / SDR ENGINEERING / FPGA & RFSOC</div>
      <div className="footer-links">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        <a href="#legal">Правовая информация</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Signal Soft</span>
        <a href="mailto:hello@signalsoft.ru">hello@signalsoft.ru</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <IpCores />
        <SdrSection />
        <EngineeringBand />
        <Applications />
        <Delivery />
        <News />
        <Contact />
        <LegalSection />
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
