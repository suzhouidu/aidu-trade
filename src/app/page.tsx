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

const INDUSTRIES = [
  "电子信息",
  "精密机械",
  "医疗器械",
  "智能家居",
  "家纺 / 婚纱礼服",
  "汽配",
];

const AUDIENCES = [
  {
    icon: "工",
    tint: "",
    tag: "外贸工厂",
    title: "有产品，没网站，靠展会和老客户接单",
    body: "做一个能接询盘的多语言独立站，再把询盘管进 CRM：谁问过价、谁要了样品、谁 7 天没回，打开系统一眼就清楚。",
    link: "/services/website",
    linkText: "看看独立站 →",
  },
  {
    icon: "贸",
    tint: "tint-green",
    tag: "外贸贸易公司",
    title: "询盘散在微信和邮箱，跟到哪一步没人知道",
    body: "询盘自动入库、客户分级、跟进提醒、基础进销存：谁问过价、谁该回访了、哪单快丢了，打开系统一眼就清楚。",
    link: "/services/crm",
    linkText: "看看 CRM / ERP →",
  },
];

const AI_CARDS = [
  {
    icon: "信",
    tint: "",
    title: "AI 开发信",
    body: "线索先评分，再按客户情况写多语言开发信草稿；该跟进的客户，系统提前提醒你。",
  },
  {
    icon: "文",
    tint: "tint-sky",
    title: "AI 产品文案",
    body: "产品描述、多语言翻译、社媒文案、SEO 文章，一套口径写出来，不用每篇都从头想。",
  },
  {
    icon: "答",
    tint: "tint-green",
    title: "AI 客服接询盘",
    body: "网站和 WhatsApp 上的询盘先由 AI 应答，答不上来的自动转人工，不让客户等到第二天。",
  },
  {
    icon: "分",
    tint: "tint-amber",
    title: "AI 线索评分",
    body: "哪个询盘最可能成交，系统先排好顺序。业务员每天先跟最值得跟的客户。",
  },
  {
    icon: "表",
    tint: "tint-violet",
    title: "AI 数据复盘",
    body: "每月曝光、询盘数、询盘成本一张表看完，下个月改什么、停什么，有数可依。",
  },
];

const CHANNELS = [
  { name: "Google 搜索与广告", note: "搜索与投放" },
  { name: "LinkedIn", note: "B2B 获客" },
  { name: "Facebook", note: "社媒覆盖" },
  { name: "WhatsApp", note: "询盘跟进" },
  { name: "阿里国际站", note: "B2B 平台" },
  /*
   * TODO（老板确认实际能交付后再放开）：
   * 以下渠道目前不在首屏展示，待确认交付能力后再加入：
   * X（英文内容）、Instagram（品牌视觉）、TikTok（短视频）、
   * YouTube（产品视频）、独立站（自己的阵地）。
   */
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
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
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
              获取免费出海诊断
            </Link>
            <Link href="/pricing" className="btn btn-ghost">
              查看价格
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
          {/* 系统示意：纯 CSS 看板，不含任何真实数据 */}
          <div className="hero-visual" aria-hidden="true">
            <div className="mock-browser">
              <div className="mock-bar">
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-url">trade.7887.cn · 询盘管理看板（示意）</span>
              </div>
              <div className="mock-body">
                <div className="mock-col">
                  <h4>
                    新询盘 <span>自动入库</span>
                  </h4>
                  <div className="mock-row">
                    网站表单询盘<small>已自动归集到客户池</small>
                  </div>
                  <div className="mock-row">
                    WhatsApp 询盘<small>已自动归集到客户池</small>
                  </div>
                  <div className="mock-row">
                    邮件询盘<small>已自动归集到客户池</small>
                  </div>
                </div>
                <div className="mock-col">
                  <h4>
                    跟进中 <span>AI 提醒</span>
                  </h4>
                  <div className="mock-row">
                    待回报价<small>AI 已起草回复，等你确认</small>
                  </div>
                  <div className="mock-row">
                    样品已寄出<small>7 天未回，系统提醒跟进</small>
                  </div>
                  <div className="mock-row">
                    谈判中<small>下次跟进时间已排好</small>
                  </div>
                </div>
              </div>
            </div>
            <p className="mock-caption">系统示意图，不含真实数据</p>
          </div>
        </div>
      </section>

      {/* 2. 服务行业 */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">我们熟悉的行业</span>
            <h2 className="section-title">先从苏州产业带做起</h2>
            <p className="section-sub">
              电子、精密机械、医疗器械、智能家居、家纺——这些工厂就在我们身边，跑得勤、聊得透。
            </p>
          </div>
          <div className="strip">
            {INDUSTRIES.map((i) => (
              <span key={i} className="strip-item">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 为什么选爱度 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHY AIDU</span>
            <h2 className="section-title">为什么选爱度</h2>
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

      {/* 4. 你是哪一类客户 */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHO IS IT FOR</span>
            <h2 className="section-title">看看你是哪一类</h2>
            <p className="section-sub">两类客户，两种打法。对号入座，不用从头讲起。</p>
          </div>
          <div className="grid-2">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.tag}>
                <span className={`icon ${a.tint}`}>{a.icon}</span>
                <span className="tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <Link href={a.link} className="go">
                  {a.linkText}
                </Link>
              </div>
            ))}
          </div>
          <p className="audience-note">
            也可承接：跨境电商社媒代运营、品牌出海全案。
          </p>
        </div>
      </section>

      {/* 5. 服务流程 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2 className="section-title">四步跑通：获客 → 询盘 → 跟进 → 成交</h2>
            <p className="section-sub">
              网站只是入口，后面是一套系统：询盘自动进 CRM，AI 写跟进草稿，人确认了再发出去。
            </p>
          </div>
          <div className="flow">
            <div className="step">
              <div className="num">1</div>
              <h3>获客</h3>
              <p>多语言独立站 + SEO / GEO + 社媒内容，让海外客户在 Google 和 AI 搜索里找到你。</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>询盘进系统</h3>
              <p>网站表单、邮件、WhatsApp 的询盘自动进 CRM，不用人工一个个抄，丢不了。</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>AI 跟进</h3>
              <p>线索先评分，开发信和回复草稿由 AI 起草，报价和承诺发出去之前必须人工确认。</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>成交与复盘</h3>
              <p>从询盘到成交全程可看，每月一张数据表：曝光、询盘数、询盘成本，下月改什么有数。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 产品介绍 */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PRODUCTS</span>
            <h2 className="section-title">产品介绍</h2>
            <p className="section-sub">三条业务线，可以单买一项，也可以整套打包。先解决最痛的，再慢慢补齐。</p>
          </div>

          {/* 独立站 */}
          <div className="product-block">
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
            <div className="product-copy">
              <span className="eyebrow">外贸独立站 / 营销站</span>
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
                <span className="scenario-chip">询盘表单</span>
                <span className="scenario-chip">SEO 结构</span>
              </div>
              <Link href="/services/website" className="btn btn-primary">
                看独立站详情
              </Link>
            </div>
          </div>

          {/* CRM / ERP */}
          <div className="product-block flip">
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
            <div className="product-copy">
              <span className="eyebrow">外贸 CRM / ERP</span>
              <h3>询盘多了，靠 Excel 管不过来</h3>
              <p>
                询盘自动入库、客户分级、跟进提醒、基础进销存，都在一套系统里。
                实施费加年服务费，不按人头收年费，团队长大了不用再交一份钱。
              </p>
              <div className="scenario-list">
                <span className="scenario-chip">询盘自动入库</span>
                <span className="scenario-chip">客户分级</span>
                <span className="scenario-chip">跟进提醒</span>
                <span className="scenario-chip">基础进销存</span>
                <span className="scenario-chip">
                  年服务费 <b>¥9,800 起</b>
                </span>
              </div>
              <Link href="/services/crm" className="btn btn-primary">
                看 CRM / ERP 详情
              </Link>
            </div>
          </div>

          {/* 代运营 */}
          <div className="product-block">
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
            <div className="product-copy">
              <span className="eyebrow">代运营</span>
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
                <span className="scenario-chip">英文文案 + AI 配图</span>
                <span className="scenario-chip">周简报 + 月度复盘</span>
              </div>
              <Link href="/services/agency" className="btn btn-primary">
                看代运营详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI 能力墙 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">AI CAPABILITIES</span>
            <h2 className="section-title">AI 能力墙</h2>
            <p className="section-sub">
              AI 是我们的主业。下面的能力不是外包的卖点，是我们每天在用的工具。
            </p>
          </div>
          <div className="grid-5">
            {AI_CARDS.map((c) => (
              <div className="card" key={c.title} style={{ padding: 22 }}>
                <span className={`icon ${c.tint}`} style={{ width: 44, height: 44, fontSize: 19 }}>
                  {c.icon}
                </span>
                <h3 style={{ fontSize: 17 }}>
                  {c.title}
                  <span className="status-tag">[待填状态]</span>
                </h3>
                <p style={{ fontSize: 14 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 价格条 */}
      <section className="section section-soft" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PRICING</span>
            <h2 className="section-title">建站价格，先看个大概</h2>
          </div>
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
          <p className="price-strip-note">
            价格均为“起”，以书面报价为准。
          </p>
          <p className="center mt-2">
            <Link href="/pricing" className="btn btn-primary">
              查看完整定价
            </Link>
          </p>
        </div>
      </section>

      {/* 9. 覆盖的市场与平台 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">CHANNELS</span>
            <h2 className="section-title">覆盖的市场与平台</h2>
            <p className="section-sub">一个内容，多处分发；一个询盘，多处归集。</p>
          </div>
          <div className="platform-grid">
            {CHANNELS.map((c) => (
              <div className="platform" key={c.name}>
                {c.name}
                <span>{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 样板作品（真实项目，不编案例） */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SAMPLE WORK</span>
            <h2 className="section-title">先看我们自己做的站</h2>
            <p className="section-sub">
              客户案例正在积累中。先看我们自己的两个站——建站和内容能力都在上面。
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="tag">爱度科技主站</span>
              <h3>7887.cn</h3>
              <p>
                爱度科技主站：AI 数字员工、AI 智能客服、GEO 优化、AI
                获客系统等产品线都在上面跑，独立站的版式、结构和留资流程就是按这套做的。
              </p>
              <a href="https://7887.cn" target="_blank" rel="noreferrer" className="go">
                访问 7887.cn →
              </a>
            </div>
            <div className="card">
              <span className="tag">出海内容样板</span>
              <h3>iDu Tools</h3>
              <p>
                英文 AI 软件目录站：3,600 多个工具、对比评测文章和榜单，SEO
                结构、内容生产和数据复盘都在上面验证过。出海内容怎么做，照这个路子来。
              </p>
              <a href="https://www.idutools.com" target="_blank" rel="noreferrer" className="go">
                访问 idutools.com →
              </a>
            </div>
            <div className="card" style={{ border: "2px dashed var(--blue-200)" }}>
              <span className="tag">首批合作客户招募</span>
              <h3>成为第一批案例客户</h3>
              <p>
                前 [待填] 家合作客户享 [待填] 优惠。你的站和系统跑起来后，经你同意，我们会把你的项目写成案例放在这里。
              </p>
              <Link href="#diagnosis" className="go">
                申请首批合作 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 免费出海诊断 */}
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

      {/* 12. CTA */}
      <CtaBand />

      {/* 13. FAQ */}
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
