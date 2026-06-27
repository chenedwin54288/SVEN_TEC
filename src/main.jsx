import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const languages = {
  zh: { label: "繁中", htmlLang: "zh-Hant" },
  ja: { label: "日本語", htmlLang: "ja" },
  en: { label: "English", htmlLang: "en" },
};

const routes = ["/", "/product", "/about", "/contact"];
const inquiryRecipient = "contact@sven-tec.example";

const copy = {
  zh: {
    nav: {
      home: "首頁",
      product: "產品服務",
      about: "關於我們",
      contact: "聯絡我們",
      language: "語言",
    },
    home: {
      eyebrow: "半導體光學與設備整合",
      title: "連結日本技術與台灣半導體現場",
      lead:
        "司帆科技有限公司由具備半導體與光學經驗的團隊組成，協助台灣客戶導入日本半導體設備、光學設計與模組整合能力。",
      primaryCta: "查看產品服務",
      secondaryCta: "聯絡團隊",
      stats: [
        { value: "JP-TW", label: "技術溝通平台" },
        { value: "Optics", label: "半導體光學整合" },
        { value: "Local", label: "提升在地自製能力" },
      ],
      introTitle: "為先進製程建立可靠的光學支援",
      intro:
        "在半導體技術持續升級的時期，光學模組、設備整合與跨國技術協作變得更加關鍵。SVEN TEC 專注在把日本的設備與設計經驗轉化為台灣客戶可執行、可溝通、可落地的解決方案。",
      highlights: [
        {
          title: "技術橋接",
          text: "協助台灣與日本團隊釐清需求、規格與工程語言，降低跨國協作成本。",
          icon: "/assets/image2.svg",
        },
        {
          title: "光學模組",
          text: "支援半導體光學模組導入、評估與本地化整合。",
          icon: "/assets/image7.svg",
        },
        {
          title: "穩健落地",
          text: "以一步一腳印的方式，讓技術服務能配合現場節奏持續推進。",
          icon: "/assets/image4.svg",
        },
      ],
    },
    product: {
      eyebrow: "Product & Service",
      title: "產品服務",
      lead:
        "我們以服務導向整合日本半導體設備與光學設計能力，協助客戶處理光學、設備與跨國溝通相關問題。",
      services: [
        {
          title: "日本半導體設備導入",
          text: "協助設備需求整理、供應商溝通、規格確認與導入前評估。",
        },
        {
          title: "半導體光學模組支援",
          text: "針對光學模組設計、選型、整合與自製化需求提供技術協助。",
        },
        {
          title: "光學設計與問題解析",
          text: "支援半導體光學應用中的設計討論、問題拆解與改善方向建議。",
        },
        {
          title: "台日技術溝通平台",
          text: "在需求、規格、技術文件與會議溝通中擔任橋梁，提升合作效率。",
        },
      ],
      processTitle: "合作流程",
      process: ["需求訪談", "技術與規格確認", "日本資源媒合", "導入與持續支援"],
    },
    about: {
      eyebrow: "About SVEN TEC",
      title: "關於司帆科技",
      storyTitle: "我們的故事",
      story:
        "司帆科技由一群具備半導體與光學經驗的人員組成，目標是整合日本光學與半導體設備人才，解決台灣半導體客戶在半導體光學上所面臨的問題，進一步提升台灣半導體光學與設備自製的比率。",
      missionTitle: "任務",
      mission: [
        "成為日本半導體設備、光學設計與台灣產業之間的溝通平台。",
        "提供台灣半導體光學模組自製率提升所需的技術整合服務。",
      ],
      philosophyTitle: "理念",
      philosophy:
        "一步一腳印，為台灣半導體光學產業提供相關技術的整合服務。",
      peopleTitle: "我們的人員",
      people:
        "核心團隊具備半導體、光學與跨國技術協作經驗。參考簡報中列出的代表人員：陳佳麟。",
    },
    contact: {
      eyebrow: "Contact",
      title: "聯絡我們",
      lead:
        "若您正在評估日本半導體設備、光學模組或台日技術合作，歡迎與司帆科技聯繫。",
      cards: [
        { label: "Email", value: "contact@sven-tec.example" },
        { label: "電話", value: "+886-00-0000-0000" },
        { label: "地址", value: "台灣地址待補" },
      ],
      formTitle: "詢問內容",
      fields: {
        name: "姓名",
        company: "公司",
        email: "Email",
        message: "請簡述需求",
        submit: "送出詢問",
      },
      mailSubject: "SVEN TEC 網站詢問",
      mailOpened: "已開啟 Email 草稿。請確認收件地址後送出。",
      note:
        "此表單目前為版面示意。上線前可接入 Email、CRM 或其他詢問流程。",
    },
    footer: {
      tagline: "Taiwan-Japan semiconductor optics integration.",
      rights: "All rights reserved.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      product: "製品・サービス",
      about: "会社情報",
      contact: "お問い合わせ",
      language: "言語",
    },
    home: {
      eyebrow: "半導体光学・装置インテグレーション",
      title: "日本の技術と台湾の半導体現場をつなぐ",
      lead:
        "SVEN TEC は、半導体と光学の経験を持つメンバーにより、日本の半導体装置、光学設計、モジュール統合を台湾のお客様へ橋渡しします。",
      primaryCta: "サービスを見る",
      secondaryCta: "問い合わせる",
      stats: [
        { value: "JP-TW", label: "技術コミュニケーション" },
        { value: "Optics", label: "半導体光学の統合" },
        { value: "Local", label: "台湾での内製化支援" },
      ],
      introTitle: "先端プロセスを支える光学技術の実装",
      intro:
        "半導体技術がさらに高度化する中で、光学モジュール、装置統合、国際的な技術連携の重要性は高まっています。SVEN TEC は日本の装置・設計ノウハウを、台湾の現場で実行可能なソリューションへ変換します。",
      highlights: [
        {
          title: "技術の橋渡し",
          text: "台湾と日本のチーム間で、要求、仕様、技術用語を整理し、協業コストを下げます。",
          icon: "/assets/image2.svg",
        },
        {
          title: "光学モジュール",
          text: "半導体向け光学モジュールの導入、評価、現地統合を支援します。",
          icon: "/assets/image7.svg",
        },
        {
          title: "着実な実行",
          text: "現場の進め方に合わせ、段階的に技術サービスを実装します。",
          icon: "/assets/image4.svg",
        },
      ],
    },
    product: {
      eyebrow: "Product & Service",
      title: "製品・サービス",
      lead:
        "日本の半導体装置と光学設計力をサービスとして統合し、光学、装置、国際技術コミュニケーションに関する課題を支援します。",
      services: [
        {
          title: "日本製半導体装置の導入支援",
          text: "装置ニーズの整理、サプライヤーとの調整、仕様確認、導入前評価を支援します。",
        },
        {
          title: "半導体光学モジュール支援",
          text: "光学モジュールの設計、選定、統合、内製化に向けた技術支援を提供します。",
        },
        {
          title: "光学設計と課題解析",
          text: "半導体光学アプリケーションにおける設計検討、課題整理、改善方針を支援します。",
        },
        {
          title: "台湾・日本 技術コミュニケーション",
          text: "要求、仕様、技術文書、会議でのコミュニケーションを橋渡しし、協業効率を高めます。",
        },
      ],
      processTitle: "連携プロセス",
      process: ["ヒアリング", "技術・仕様確認", "日本リソースのマッチング", "導入・継続支援"],
    },
    about: {
      eyebrow: "About SVEN TEC",
      title: "SVEN TEC について",
      storyTitle: "私たちのストーリー",
      story:
        "SVEN TEC は半導体と光学の経験を持つメンバーにより設立されました。日本の光学・半導体装置の人材と技術を統合し、台湾の半導体顧客が直面する光学関連の課題を解決し、台湾における光学・装置の内製化比率向上に貢献します。",
      missionTitle: "ミッション",
      mission: [
        "日本の半導体装置・光学設計と台湾産業をつなぐコミュニケーションプラットフォームになること。",
        "台湾の半導体光学モジュール内製化を支える技術統合サービスを提供すること。",
      ],
      philosophyTitle: "理念",
      philosophy:
        "一歩ずつ着実に、台湾の半導体光学産業へ技術統合サービスを提供します。",
      peopleTitle: "メンバー",
      people:
        "コアチームは半導体、光学、国際技術連携の経験を持っています。参考資料に記載された代表者：陳佳麟。",
    },
    contact: {
      eyebrow: "Contact",
      title: "お問い合わせ",
      lead:
        "日本の半導体装置、光学モジュール、台湾・日本間の技術連携をご検討中の場合は、SVEN TEC までご連絡ください。",
      cards: [
        { label: "Email", value: "contact@sven-tec.example" },
        { label: "電話", value: "+886-00-0000-0000" },
        { label: "住所", value: "台湾住所 未設定" },
      ],
      formTitle: "お問い合わせ内容",
      fields: {
        name: "お名前",
        company: "会社名",
        email: "Email",
        message: "ご相談内容",
        submit: "送信",
      },
      mailSubject: "SVEN TEC Webサイトお問い合わせ",
      mailOpened: "メールの下書きを開きました。宛先を確認して送信してください。",
      note:
        "このフォームは現在レイアウト用です。公開前に Email、CRM、または問い合わせワークフローへ接続できます。",
    },
    footer: {
      tagline: "Taiwan-Japan semiconductor optics integration.",
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      product: "Product",
      about: "About us",
      contact: "Contact",
      language: "Language",
    },
    home: {
      eyebrow: "Semiconductor optics and equipment integration",
      title: "Connecting Japanese technology with Taiwan's semiconductor field",
      lead:
        "SVEN TEC is formed by professionals with semiconductor and optics experience, helping Taiwan customers adopt Japanese semiconductor equipment, optical design, and module integration capabilities.",
      primaryCta: "View services",
      secondaryCta: "Contact us",
      stats: [
        { value: "JP-TW", label: "Technical communication platform" },
        { value: "Optics", label: "Semiconductor optics integration" },
        { value: "Local", label: "Support for local manufacturing" },
      ],
      introTitle: "Reliable optical support for advanced semiconductor work",
      intro:
        "As semiconductor technology advances, optical modules, equipment integration, and cross-border technical collaboration become increasingly important. SVEN TEC turns Japanese equipment and design know-how into practical solutions Taiwan teams can evaluate, communicate, and implement.",
      highlights: [
        {
          title: "Technical bridge",
          text: "We align needs, specifications, and engineering language between Taiwan and Japan teams to reduce collaboration friction.",
          icon: "/assets/image2.svg",
        },
        {
          title: "Optical modules",
          text: "We support semiconductor optical module introduction, evaluation, and localized integration.",
          icon: "/assets/image7.svg",
        },
        {
          title: "Practical execution",
          text: "We move step by step so technical services fit real engineering schedules and site conditions.",
          icon: "/assets/image4.svg",
        },
      ],
    },
    product: {
      eyebrow: "Product & Service",
      title: "Product and services",
      lead:
        "Our service-led model integrates Japanese semiconductor equipment and optical design capabilities to help customers solve optics, equipment, and cross-border communication challenges.",
      services: [
        {
          title: "Japanese semiconductor equipment introduction",
          text: "Support for equipment needs, supplier communication, specification review, and pre-introduction assessment.",
        },
        {
          title: "Semiconductor optical module support",
          text: "Technical support for optical module design, selection, integration, and localization.",
        },
        {
          title: "Optical design and issue analysis",
          text: "Design discussion, issue breakdown, and improvement direction for semiconductor optics applications.",
        },
        {
          title: "Taiwan-Japan technical communication",
          text: "A bridge for requirements, specifications, technical documents, and engineering meetings.",
        },
      ],
      processTitle: "Engagement process",
      process: ["Discovery", "Technical and specification review", "Japan resource matching", "Introduction and ongoing support"],
    },
    about: {
      eyebrow: "About SVEN TEC",
      title: "About SVEN TEC",
      storyTitle: "Our story",
      story:
        "SVEN TEC was founded by a team with semiconductor and optics experience. Our goal is to integrate Japanese optical and semiconductor equipment expertise, solve optics-related challenges for Taiwan semiconductor customers, and help increase Taiwan's local capability in semiconductor optics and equipment.",
      missionTitle: "Mission",
      mission: [
        "Become a communication platform between Japanese semiconductor equipment and optical design resources and Taiwan's semiconductor industry.",
        "Provide technical integration services that support Taiwan's semiconductor optical module localization.",
      ],
      philosophyTitle: "Philosophy",
      philosophy:
        "Step by step, we provide integrated technical services for Taiwan's semiconductor optics industry.",
      peopleTitle: "Our people",
      people:
        "The core team brings semiconductor, optics, and cross-border technical collaboration experience. Representative person listed in the reference deck: Chia-Lin Chen / 陳佳麟.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      lead:
        "If you are evaluating Japanese semiconductor equipment, optical modules, or Taiwan-Japan technical collaboration, contact SVEN TEC.",
      cards: [
        { label: "Email", value: "contact@sven-tec.example" },
        { label: "Phone", value: "+886-00-0000-0000" },
        { label: "Address", value: "Taiwan address pending" },
      ],
      formTitle: "Inquiry",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Tell us about your needs",
        submit: "Send inquiry",
      },
      mailSubject: "SVEN TEC website inquiry",
      mailOpened: "Email draft opened. Please confirm the recipient address before sending.",
      note:
        "This form is currently a front-end layout. Before launch it can be connected to email, CRM, or another inquiry workflow.",
    },
    footer: {
      tagline: "Taiwan-Japan semiconductor optics integration.",
      rights: "All rights reserved.",
    },
  },
};

function normalizePath(pathname) {
  return routes.includes(pathname) ? pathname : "/";
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("sven-language") || "zh");
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const t = copy[language] || copy.zh;

  useEffect(() => {
    document.documentElement.lang = languages[language].htmlLang;
    localStorage.setItem("sven-language", language);
  }, [language]);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(normalizePath(nextPath));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = useMemo(() => {
    if (path === "/product") return <ProductPage t={t} />;
    if (path === "/about") return <AboutPage t={t} />;
    if (path === "/contact") return <ContactPage t={t} />;
    return <HomePage t={t} navigate={navigate} />;
  }, [path, t]);

  return (
    <div className="site-shell">
      <Header t={t} path={path} navigate={navigate} language={language} setLanguage={setLanguage} />
      <main>{page}</main>
      <Footer t={t} navigate={navigate} />
    </div>
  );
}

function Header({ t, path, navigate, language, setLanguage }) {
  const items = [
    ["/", t.nav.home],
    ["/product", t.nav.product],
    ["/about", t.nav.about],
    ["/contact", t.nav.contact],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => handleNav(event, "/", navigate)}>
        <span className="brand-mark">S</span>
        <span>
          <strong>SVEN TEC</strong>
          <small>司帆科技有限公司</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        {items.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className={path === href ? "active" : ""}
            onClick={(event) => handleNav(event, href, navigate)}
          >
            {label}
          </a>
        ))}
      </nav>
      <label className="language-select">
        <span>{t.nav.language}</span>
        <select value={language} onChange={(event) => setLanguage(event.target.value)}>
          {Object.entries(languages).map(([key, item]) => (
            <option key={key} value={key}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}

function HomePage({ t, navigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/assets/image1.jpg" alt="" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="lead">{t.home.lead}</p>
          <div className="hero-actions">
            <a href="/product" className="button primary" onClick={(event) => handleNav(event, "/product", navigate)}>
              {t.home.primaryCta}
            </a>
            <a href="/contact" className="button secondary" onClick={(event) => handleNav(event, "/contact", navigate)}>
              {t.home.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="stat-band" aria-label="SVEN TEC focus areas">
        {t.home.stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">SVEN TEC</p>
          <h2>{t.home.introTitle}</h2>
          <p>{t.home.intro}</p>
        </div>
        <img className="section-photo" src="/assets/image9.jpeg" alt="" />
      </section>

      <section className="content-section">
        <div className="card-grid">
          {t.home.highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductPage({ t }) {
  return (
    <>
      <PageHero eyebrow={t.product.eyebrow} title={t.product.title} lead={t.product.lead} image="/assets/image10.jpeg" />
      <section className="content-section">
        <div className="service-grid">
          {t.product.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="process-section">
        <h2>{t.product.processTitle}</h2>
        <div className="process-list">
          {t.product.process.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage({ t }) {
  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.story} image="/assets/image11.jpeg" />
      <section className="about-grid">
        <article>
          <p className="eyebrow">{t.about.storyTitle}</p>
          <h2>{t.about.storyTitle}</h2>
          <p>{t.about.story}</p>
        </article>
        <article>
          <p className="eyebrow">{t.about.missionTitle}</p>
          <h2>{t.about.missionTitle}</h2>
          <ul>
            {t.about.mission.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <p className="eyebrow">{t.about.philosophyTitle}</p>
          <h2>{t.about.philosophyTitle}</h2>
          <p>{t.about.philosophy}</p>
        </article>
        <article>
          <p className="eyebrow">{t.about.peopleTitle}</p>
          <h2>{t.about.peopleTitle}</h2>
          <p>{t.about.people}</p>
        </article>
      </section>
    </>
  );
}

function ContactPage({ t }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `${t.contact.fields.name}: ${formData.get("name")}`,
      `${t.contact.fields.company}: ${formData.get("company")}`,
      `${t.contact.fields.email}: ${formData.get("email")}`,
      "",
      `${t.contact.fields.message}:`,
      formData.get("message"),
    ];
    const href = `mailto:${inquiryRecipient}?subject=${encodeURIComponent(t.contact.mailSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
    setStatus(t.contact.mailOpened);
  };

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} image="/assets/image9.jpeg" />
      <section className="contact-section">
        <div className="contact-details">
          {t.contact.cards.map((card) => (
            <article key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t.contact.formTitle}</h2>
          <label>
            {t.contact.fields.name}
            <input type="text" name="name" required />
          </label>
          <label>
            {t.contact.fields.company}
            <input type="text" name="company" />
          </label>
          <label>
            {t.contact.fields.email}
            <input type="email" name="email" required />
          </label>
          <label>
            {t.contact.fields.message}
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">{t.contact.fields.submit}</button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
          <p>{t.contact.note}</p>
        </form>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, lead, image }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
      <img src={image} alt="" />
    </section>
  );
}

function Footer({ t, navigate }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>SVEN TEC</strong>
        <p>{t.footer.tagline}</p>
      </div>
      <a href="/contact" onClick={(event) => handleNav(event, "/contact", navigate)}>
        {t.nav.contact}
      </a>
      <small>© {new Date().getFullYear()} SVEN TEC. {t.footer.rights}</small>
    </footer>
  );
}

function handleNav(event, href, navigate) {
  event.preventDefault();
  navigate(href);
}

createRoot(document.getElementById("root")).render(<App />);
