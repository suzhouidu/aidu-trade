import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import DiagnosisForm from "@/components/DiagnosisForm";
import { HeroQr } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "苏州外贸独立站建设与代运营｜爱度科技" },
  description:
    "爱度科技（苏州）为中小外贸工厂和贸易公司做外贸独立站、CRM 与代运营：建站、询盘管理、海外获客一站搞定。",
  alternates: { canonical: "https://trade.7887.cn/" },
};

const PLATFORMS = ["Google 搜索与广告", "LinkedIn", "Facebook", "WhatsApp", "阿里国际站"];

const PLATFORM_TILES = [
  { label: "G", name: "Google", bg: "#4285f4" },
  { label: "in", name: "LinkedIn", bg: "#0a66c2" },
  { label: "f", name: "Facebook", bg: "#1877f2" },
  { label: "W", name: "WhatsApp", bg: "#128c7e" },
  { label: "阿里", name: "阿里国际站", bg: "#ff6a00" },
];

const REASONS = [
  {
    icon: "AI",
    tint: "",
    title: "AI 是主业，不是噱头",
    body: "爱度主业就是 AI 应用：开发信、产品文案、客服应答、线索评分，这些是我们自己每天在用的能力，不是外包出去的卖点。",
  },
  {
    icon: "苏",
    tint: "tint-green",
    title: "苏州本地，跑得勤",
    body: "我们在苏州，电子、精密机械、医疗器械、智能家居、家纺这些产业带就在身边。能跑工厂、能拍探厂视频、能当面聊，沟通成本低。",
  },
  {
    icon: "省",
    tint: "tint-amber",
    title: "系统不按人头收年费",
    body: "CRM / ERP 用开源底座搭，收实施费加年服务费。团队从 5 个人长到 50 个人，不用为多出来的人头再交一份钱。",
  },
];

const SITE_SCENARIOS = [
  {
    icon: "展",
    tint: "",
    title: "产品展示",
    body: "多语言产品页，参数、图片、视频一次放齐，客户不用先加微信就能看明白。",
  },
  {
    icon: "询",
    tint: "tint-sky",
    title: "询盘表单",
    body: "每个产品页都有询盘入口，客户当场留需求，询盘直接进系统，不丢。",
  },
  {
    icon: "搜",
    tint: "tint-green",
    title: "SEO 结构",
    body: "标题、描述、内链按 SEO 的规矩搭好，Google 和 AI 搜索都找得到你。",
  },
  {
    icon: "译",
    tint: "tint-amber",
    title: "多语言",
    body: "中英双语起步，目标市场要哪个语言就加哪个，内容一套口径。",
  },
  {
    icon: "手",
    tint: "tint-violet",
    title: "移动端适配",
    body: "海外客户大多用手机看站，手机上打开一样清楚，按钮一点就通。",
  },
  {
    icon: "数",
    tint: "tint-pink",
    title: "数据统计",
    body: "谁来了、看了哪个产品、从哪来，一张表看完，下月改什么有数。",
  },
];

const CRM_FEATURES = [
  {
    icon: "入",
    tint: "",
    title: "询盘自动入库",
    body: "网站表单、邮件、WhatsApp 的询盘自动进 CRM，不用人工一个个抄，丢不了。",
  },
  {
    icon: "级",
    tint: "tint-sky",
    title: "客户分级",
    body: "按意向和价值给客户分级，业务员每天先跟最值得跟的，不凭感觉排队。",
  },
  {
    icon: "提",
    tint: "tint-green",
    title: "跟进提醒",
    body: "该回报价、该寄样品、该回访了，系统提前提醒你，客户不会凉在半路上。",
  },
];

const CRM_CARDS = [
  {
    title: "询盘管理",
    checks: [
      "网站表单、邮件、WhatsApp 询盘自动入库",
      "客户分级，先跟最值得跟的客户",
      "跟进提醒，到点系统催你，不用靠记性",
    ],
  },
  {
    title: "订单与库存",
    checks: [
      "基础进销存：库存、订单、发货一处管",
      "订单归档，从询盘到成交全程可查",
      "数据在你手里，合作结束完整交还",
    ],
  },
];

const AGENCY_CARDS = [
  {
    icon: "搜",
    tint: "",
    title: "SEO 代运营",
    body: "英文文章、产品页优化、GEO 优化，让客户在 Google 和 AI 搜索里找到你。",
  },
  {
    icon: "社",
    tint: "tint-sky",
    title: "社媒运营",
    body: "LinkedIn、Facebook 内容代运营：文案、配图、定时发布，每周有简报。",
  },
  {
    icon: "广",
    tint: "tint-green",
    title: "谷歌广告",
    body: "广告费走你自己的账户，月费加消耗 15% 管理费，花多少你自己看得见。",
  },
  {
    icon: "文",
    tint: "tint-amber",
    title: "英文内容",
    body: "开发信、产品文案、社媒文案、SEO 文章，一套口径写出来，不用每篇从头想。",
  },
  {
    icon: "表",
    tint: "tint-violet",
    title: "数据复盘",
    body: "每月曝光、询盘数、询盘成本一张表看完，下个月改什么、停什么，有数可依。",
  },
];

const TEAM = [
  {
    icon: "聊",
    tint: "",
    title: "售前咨询",
    body: "先聊你的行业和需求，再给书面报价。诊断本身不收费，也不做硬推销。",
  },
  {
    icon: "交",
    tint: "tint-sky",
    title: "项目交付",
    body: "建站和系统实施有交付清单和验收标准，写进合同，未达标顺延。",
  },
  {
    icon: "AI",
    tint: "tint-green",
    title: "AI 技术",
    body: "开发信、产品文案、客服应答、线索评分，都是我们自己在用的 AI 能力。",
  },
  {
    icon: "售",
    tint: "tint-amber",
    title: "售后支持",
    body: "每个客户有专属对接人，微信群每周同步一次进度。急事直接打电话。",
  },
];

const HOME_FAQ: FaqItem[] = [
  {
    q: "做一个外贸独立站多少钱？",
    a: "展示型 ¥9,800 起，营销型 ¥19,800，定制站 ¥38,000 起，次年托管维护 ¥2,600 / 年。价格都是“起”，具体以书面报价为准——先聊需求再报价，不先报一个数把你框住。",
  },
  {
    q: "多久能上线？",
    a: "展示型独立站 2–3 周，营销型 4–6 周，定制站按项目排期。CRM / ERP 实施一般 2–4 周。代运营签约后一周内出首月内容计划。",
  },
  {
    q: "你们承诺询盘量吗？",
    a: "不承诺。询盘量、排名、成交额、涨粉数我们都不承诺——这些谁也保证不了。我们承诺的是交付物、周期和验收标准：每月发多少条内容、做了哪些优化、数据怎么样，清单写进合同，未达标顺延。",
  },
  {
    q: "已经有网站了，能不能只做代运营？",
    a: "可以。代运营、SEO、广告投放都可以单独签，不用先重做网站。如果现有网站结构确实影响转化，我们会先告诉你问题在哪，再由你决定改不改。",
  },
  {
    q: "CRM 里的数据在谁手里？",
    a: "在你手里。系统部署在你名下，客户、询盘、跟进记录都是你的数据。我们只做实施和维护，不扣留数据，合作结束数据完整交还。",
  },
  {
    q: "广告费怎么算？",
    a: "广告费走你自己的广告账户，花多少你自己看得见。我们收月费加消耗 15% 的管理费，不从广告费里抽成，也不建议你为了花预算而花预算。",
  },
  {
    q: "能只做一个月试试吗？",
    a: "可以。代运营按月签，先收月费再开工，随时可停。我们不签年约绑你，靠每月交付的数据留客户。",
  },
  {
    q: "你们和别的服务商有什么不同？",
    a: "三点不同：第一，AI 是我们的主业，开发信、文案、客服、评分都是自有能力；第二，CRM / ERP 不按人头收年费；第三，我们在苏州，能跑工厂、能当面服务。想看和具体同行的逐项对比，请看我们的对比页。",
  },
  {
    q: "支持哪些行业？",
    a: "以制造和品牌出海为主：电子信息、精密机械、医疗器械、智能家居、家纺 / 婚纱礼服、汽配等。你的行业不在上面也可以先聊，产品逻辑通就能做。",
  },
  {
    q: "合同怎么签？",
    a: "签服务合同，服务组合、价格、周期、交付清单都写进去。建站和系统实施收首付款再开工，代运营先收月费再开工。",
  },
  {
    q: "怎么续费？",
    a: "到期前 7 天提醒，续费后继续服务。代运营按月续，不续就停，没有违约金。",
  },
  {
    q: "售后找谁？",
    a: "每个客户有专属对接人，微信群里每周同步一次进度。急事直接打电话：18151772888。",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/* 1. Hero：深色左对齐 + 右侧点阵地图 */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">爱度科技 · 苏州 · 跨境外贸服务</span>
            <h1>
              苏州外贸工厂的<span className="hl">出海搭档</span>：独立站、询盘管理、代运营一站搞定
            </h1>
            <p className="hero-sub">
              爱度帮苏州及长三角的中小外贸工厂和贸易公司做独立站、CRM / ERP
              和代运营——网站获客、询盘自动进系统、AI 帮你跟客户，每个月都有交付、有数据。
            </p>
            <div className="hero-cta">
              <Link href="#diagnosis" className="btn btn-primary">
                获取免费出海诊断 →
              </Link>
              <Link href="/pricing" className="btn btn-ghost">
                查看价格 →
              </Link>
            </div>
            <div className="hero-chips">
              {PLATFORMS.map((p) => (
                <span key={p} className="chip">
                  {p}
                </span>
              ))}
            </div>
            <HeroQr />
          </div>
          {/* 点阵地图示意：纯 CSS 点阵 + 浮动标签，不含真实地图数据 */}
          <div className="map-visual" aria-hidden="true">
            <span className="map-dot" style={{ top: "26%", left: "30%" }} />
            <span className="map-dot" style={{ top: "48%", left: "58%" }} />
            <span className="map-dot" style={{ top: "64%", left: "38%" }} />
            <span className="map-tag">
              <i />苏州 · 中国
            </span>
            <span className="map-badge">
              <b>6</b>
              <span>个深耕行业</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. 重叠卡：压在 Hero 底部 */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="overlap-card">
            <h2>外贸获客，效率快人一步！</h2>
            <p>一个内容，多处分发；一个询盘，多处归集。</p>
            <div className="platform-tiles">
              {PLATFORM_TILES.map((t) => (
                <span key={t.name} className="tile-wrap">
                  <span className="platform-tile" style={{ background: t.bg }}>
                    {t.label}
                  </span>
                  <em>{t.name}</em>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 为什么选爱度 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHY AIDU</span>
            <h2 className="section-title">懂技术，懂外贸，所以更专业</h2>
          </div>
          <div className="grid-3">
            {REASONS.map((r) => (
              <div className="card" key={r.title}>
                <span className={`icon ${r.tint}`}>{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 独立站简介 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">产品介绍</span>
            <h2 className="section-title">独立站简介</h2>
            <p className="section-sub">先有个能接询盘的站，再谈获客和转化。</p>
          </div>
          <div className="product-intro">
            <div className="product-copy">
              <h3>先有个能接询盘的站</h3>
              <p>
                多语言产品站，带询盘表单和 SEO
                结构。客户在 Google 上找到你、看完产品、当场留询盘——不用先加微信、不用等展会。
              </p>
              <div className="scenario-list">
                <span className="scenario-chip">
                  展示型 <b>¥9,800 起</b>
                </span>
                <span className="scenario-chip">
                  营销型 <b>¥19,800</b>
                </span>
                <span className="scenario-chip">
                  定制站 <b>¥38,000 起</b>
                </span>
              </div>
              <Link href="/services/website" className="btn btn-primary">
                看独立站详情
              </Link>
            </div>
            <div className="product-visual" aria-hidden="true">
              <div className="mock-browser">
                <div className="mock-bar">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-url">your-site.com（示意）</span>
                </div>
                <div style={{ padding: 18 }}>
                  <div className="skel-hero">多语言独立站首页</div>
                  <div className="skel-line" style={{ width: "82%" }} />
                  <div className="skel-line" style={{ width: "64%" }} />
                  <div className="skel-line" style={{ width: "48%", marginBottom: 0 }} />
                </div>
              </div>
              <p className="mock-caption">网站示意图，不含真实数据</p>
            </div>
          </div>
          <div className="scenario-grid">
            {SITE_SCENARIOS.map((s) => (
              <div className="card" key={s.title}>
                <span className={`icon ${s.tint}`}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRM / ERP 简介 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">产品介绍</span>
            <h2 className="section-title">CRM / ERP 简介</h2>
            <p className="section-sub">询盘多了，靠 Excel 管不过来。</p>
          </div>
          <div className="product-intro">
            <div className="product-copy">
              <h3>询盘自动进系统，跟进不再靠记性</h3>
              <p>
                询盘自动入库、客户分级、跟进提醒、基础进销存，都在一套系统里。
                实施费加年服务费，不按人头收年费，团队长大了不用再交一份钱。
              </p>
              <div className="scenario-list">
                <span className="scenario-chip">询盘自动入库</span>
                <span className="scenario-chip">客户分级</span>
                <span className="scenario-chip">跟进提醒</span>
                <span className="scenario-chip">基础进销存</span>
              </div>
              <Link href="/services/crm" className="btn btn-primary">
                看 CRM / ERP 详情
              </Link>
            </div>
            <div className="product-visual" aria-hidden="true">
              <div className="mock-browser">
                <div className="mock-bar">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-url">CRM · 询盘 pipeline（示意）</span>
                </div>
                <div style={{ padding: 18 }}>
                  <div className="mock-pipe">
                    <div className="mock-pipe-col">
                      <h5>新询盘</h5>
                      <div className="mock-row">网站表单</div>
                      <div className="mock-row">WhatsApp</div>
                    </div>
                    <div className="mock-pipe-col">
                      <h5>跟进中</h5>
                      <div className="mock-row">待回报价</div>
                      <div className="mock-row">样品已寄</div>
                    </div>
                    <div className="mock-pipe-col">
                      <h5>已成交</h5>
                      <div className="mock-row">订单归档</div>
                      <div className="mock-row">复盘记录</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mock-caption">系统示意图，不含真实数据</p>
            </div>
          </div>
          <div className="feature-rows">
            {CRM_FEATURES.map((f) => (
              <div className="feature-row" key={f.title}>
                <span className={`icon ${f.tint}`}>{f.icon}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="big-cards">
            {CRM_CARDS.map((c) => (
              <div className="big-card" key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.checks.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="btn-pair">
            <Link href="/services/crm" className="btn btn-primary">
              查看 CRM 详情 →
            </Link>
            <Link href="#diagnosis" className="btn btn-orange">
              获取书面报价 →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 代运营简介 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">产品介绍</span>
            <h2 className="section-title">代运营简介</h2>
            <p className="section-sub">每个月持续有人帮你获客。</p>
          </div>
          <div className="product-intro">
            <div className="product-copy">
              <h3>每个月持续有人帮你获客</h3>
              <p>
                SEO、社媒、谷歌广告按月做：英文内容、AI
                配图、定时发布、每周数据简报。你只管产品和发货，内容有人持续输出。
              </p>
              <div className="scenario-list">
                <span className="scenario-chip">
                  SEO <b>¥3,980/月起</b>
                </span>
                <span className="scenario-chip">
                  社媒 <b>¥3,999/月起</b>
                </span>
                <span className="scenario-chip">
                  全案 <b>¥9,999/月</b>
                </span>
              </div>
              <Link href="/services/agency" className="btn btn-primary">
                看代运营详情
              </Link>
            </div>
            <div className="product-visual" aria-hidden="true">
              <div className="mock-browser">
                <div className="mock-bar">
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-dot" />
                  <span className="mock-url">代运营 · 内容排期（示意）</span>
                </div>
                <div style={{ padding: 18 }}>
                  <div className="mock-cal">
                    <div>
                      周一<span>SEO 文章</span>
                    </div>
                    <div>
                      周二<span>社媒图文</span>
                    </div>
                    <div>
                      周三<span>产品短视频</span>
                    </div>
                    <div>
                      周四<span>社媒图文</span>
                    </div>
                    <div>
                      周五<span>SEO 文章</span>
                    </div>
                    <div>
                      周六<span>客户案例</span>
                    </div>
                    <div>
                      周日<span>数据简报</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mock-caption">排期示意图，不含真实数据</p>
            </div>
          </div>
          <div className="grid-5" style={{ marginTop: 32 }}>
            {AGENCY_CARDS.map((c) => (
              <div className="card" key={c.title} style={{ padding: 22 }}>
                <span className={`icon ${c.tint}`} style={{ width: 44, height: 44, fontSize: 19 }}>
                  {c.icon}
                </span>
                <h3 style={{ fontSize: 17 }}>{c.title}</h3>
                <p style={{ fontSize: 14 }}>{c.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <div className="price-strip">
              <div className="price-strip-item">
                <h3>展示型独立站</h3>
                <div className="amount">
                  ¥9,800 <small>起</small>
                </div>
                <p>多语言产品站 + 询盘表单，2–3 周交付</p>
              </div>
              <div className="price-strip-item">
                <h3>营销型</h3>
                <div className="amount">¥19,800</div>
                <p>SEO 结构 + GEO 优化 + 产品文案，4–6 周交付</p>
              </div>
              <div className="price-strip-item">
                <h3>定制站</h3>
                <div className="amount">
                  ¥38,000 <small>起</small>
                </div>
                <p>B2B 门户 + 客户询价 + CRM 打通，按项目排期</p>
              </div>
              <div className="price-strip-item">
                <h3>次年托管维护</h3>
                <div className="amount">
                  ¥2,600 <small>/ 年</small>
                </div>
                <p>服务器、备份、安全更新与小改动</p>
              </div>
            </div>
            <p className="price-strip-note">价格均为“起”，以书面报价为准。</p>
            <p className="center mt-2">
              <Link href="/pricing" className="btn btn-primary">
                查看完整定价
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 7. 爱度团队 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR TEAM</span>
            <h2 className="section-title">爱度团队</h2>
            <p className="section-sub">安全可靠的服务，让你专注于业务和产品。</p>
          </div>
          <div className="grid-4">
            {TEAM.map((t) => (
              <div className="card" key={t.title}>
                <span className={`icon ${t.tint}`}>{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 免费出海诊断 */}
      <section className="section" id="diagnosis">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FREE DIAGNOSIS</span>
            <h2 className="section-title">免费出海诊断</h2>
            <p className="section-sub">
              填一张表，我们先看你的网站和行业，再聊 15 分钟，给你一份书面的出海诊断。
            </p>
          </div>
          <div className="diag-wrap">
            <div className="diag-side">
              <h3>诊断会给你什么</h3>
              <ul className="check-list">
                <li>现有网站点评：结构、询盘入口、移动端体验，哪里拖了后腿</li>
                <li>系统建议：询盘现在怎么管，要不要上 CRM / ERP，怎么上</li>
                <li>渠道建议：SEO、社媒、广告，哪个渠道先动、预算怎么分</li>
                <li>书面报价：做什么、多少钱、多久交付，写清楚再决定</li>
              </ul>
              <p className="mt-2">
                诊断本身不收费，也不做硬推销。聊完觉得不合适，直接说一声就行。
              </p>
            </div>
            <DiagnosisForm />
          </div>
        </div>
      </section>

      {/* 9. CTA（对角分割带 + 亮蓝大卡） */}
      <section className="diagonal-band">
        <div className="container">
          <CtaBand />
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">常见问题</h2>
          </div>
          <Faq items={HOME_FAQ} />
          <p className="center mt-4">
            还有问题？<Link href="/contact">直接联系我们 →</Link>
            <br />
            想看和具体同行的逐项对比：<Link href="/compare">我们和孚盟、询盘云有什么不同 →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
