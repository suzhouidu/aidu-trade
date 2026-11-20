import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "外贸获客，一套系统就够了",
  description:
    "爱度科技帮国内中小外贸企业做独立站、CRM/ERP 和代运营：网站获客、询盘进系统、AI 帮你跟客户，每个月都有交付、有数据。",
};

const PLATFORMS = [
  "Google SEO",
  "谷歌广告",
  "X",
  "LinkedIn",
  "Instagram",
  "TikTok",
  "YouTube",
  "WhatsApp",
  "阿里国际站",
];

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
    tag: "外贸工厂",
    title: "有产品，没网站，靠展会和老客户接单",
    body: "做一个能接询盘的多语言独立站，再把询盘管进 CRM：谁问过价、谁要了样品、谁 7 天没回，打开系统一眼就清楚。",
    link: "/services/website",
    linkText: "看看独立站 →",
  },
  {
    icon: "店",
    tag: "跨境电商卖家",
    title: "Amazon、TikTok Shop、独立站都有，社媒没人做",
    body: "社媒代运营按月做：英文内容、AI 配图、定时发布、每周数据简报。你只管产品和发货，内容有人持续输出。",
    link: "/services/agency",
    linkText: "看看代运营 →",
  },
  {
    icon: "牌",
    tag: "出海品牌",
    title: "要品牌、要内容、要数据",
    body: "全案代运营 + SEO / GEO + 月度复盘：站、内容、广告、CRM 一套打通，每个月交付清单和数据都摆在你面前。",
    link: "/pricing",
    linkText: "看看全案价格 →",
  },
];

const AI_CARDS = [
  {
    icon: "信",
    title: "AI 开发信",
    body: "线索先评分，再按客户情况写多语言开发信草稿；该跟进的客户，系统提前提醒你。",
  },
  {
    icon: "文",
    title: "AI 产品文案",
    body: "产品描述、多语言翻译、社媒文案、SEO 文章，一套口径写出来，不用每篇都从头想。",
  },
  {
    icon: "答",
    title: "AI 客服接询盘",
    body: "网站和 WhatsApp 上的询盘先由 AI 应答，答不上来的自动转人工，不让客户等到第二天。",
  },
  {
    icon: "分",
    title: "AI 线索评分",
    body: "哪个询盘最可能成交，系统先排好顺序。业务员每天先跟最值得跟的客户。",
  },
  {
    icon: "表",
    title: "AI 数据复盘",
    body: "每月曝光、询盘数、询盘成本一张表看完，下个月改什么、停什么，有数可依。",
  },
];

const SERVICE_TILES = [
  {
    icon: "站",
    title: "建站",
    body: "多语言独立站，2–6 周交付，带询盘表单和 SEO 结构。",
    link: "/services/website",
  },
  {
    icon: "搜",
    title: "SEO / GEO",
    body: "让 Google 和 AI 搜索找到你，品牌内容能被引用和推荐。",
    link: "/services/agency",
  },
  {
    icon: "发",
    title: "社媒代运营",
    body: "5 个平台，60 条内容 / 月起，英文文案 + AI 配图。",
    link: "/services/agency",
  },
  {
    icon: "投",
    title: "广告代投",
    body: "谷歌广告代运营，月费 + 消耗 15%，广告费走你自己的账户。",
    link: "/services/agency",
  },
  {
    icon: "管",
    title: "CRM / ERP",
    body: "询盘 pipeline + 客户池，不按人头收年费。",
    link: "/services/crm",
  },
  {
    icon: "数",
    title: "数据复盘",
    body: "月报 + 下月计划 + 续费提醒，先收月费再继续做。",
    link: "/pricing",
  },
];

const CHANNELS = [
  { name: "Google", note: "搜索与广告" },
  { name: "X", note: "英文内容" },
  { name: "LinkedIn", note: "B2B 获客" },
  { name: "Instagram", note: "品牌视觉" },
  { name: "TikTok", note: "短视频" },
  { name: "YouTube", note: "产品视频" },
  { name: "Facebook", note: "社媒覆盖" },
  { name: "WhatsApp", note: "询盘跟进" },
  { name: "阿里国际站", note: "B2B 平台" },
  { name: "独立站", note: "自己的阵地" },
];

const REASONS = [
  {
    icon: "AI",
    title: "AI 是主业，不是噱头",
    body: "爱度主业就是 AI 应用：开发信、产品文案、客服应答、线索评分，这些是我们自己每天在用的能力，不是外包出去的卖点。",
  },
  {
    icon: "苏",
    title: "苏州本地，跑得勤",
    body: "我们在苏州，电子、精密机械、医疗器械、智能家居、家纺这些产业带就在身边。能跑工厂、能拍探厂视频、能当面聊，沟通成本低。",
  },
  {
    icon: "省",
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
    q: "你们和孚盟、询盘云有什么不同？",
    a: "三点不同：第一，AI 是我们的主业，开发信、文案、客服、评分都是自有能力；第二，CRM / ERP 不按人头收年费；第三，我们在苏州，能跑工厂、能当面服务。孚盟、询盘云都是很好的公司，规模比我们大；我们适合想先小步试、要灵活配合的中小企业。",
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

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">爱度科技 · 跨境外贸服务</span>
          <h1>
            外贸获客，<span className="hl">一套系统</span>就够了
          </h1>
          <p className="hero-sub">
            爱度帮中小外贸企业做独立站、CRM / ERP
            和代运营——网站获客、询盘进系统、AI 帮你跟客户，每个月都有交付、有数据。
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              免费获取方案
            </Link>
            <Link href="/pricing" className="btn btn-ghost">
              看看价格
            </Link>
          </div>
          <div className="hero-chips">
            {PLATFORMS.map((p) => (
              <span key={p} className="chip">
                {p}
              </span>
            ))}
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

      {/* 3. 你是哪一类客户 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHO IS IT FOR</span>
            <h2 className="section-title">看看你是哪一类</h2>
            <p className="section-sub">三类客户，三种打法。对号入座，不用从头讲起。</p>
          </div>
          <div className="grid-3">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.tag}>
                <span className="icon">{a.icon}</span>
                <span className="tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <Link href={a.link} className="go">
                  {a.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 服务流程 */}
      <section className="section section-soft">
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

      {/* 5. AI 能力墙 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">AI CAPABILITIES</span>
            <h2 className="section-title">AI 能力墙</h2>
            <p className="section-sub">
              AI 是我们的主业。下面的能力不是外包的卖点，是我们每天在用的工具。
            </p>
          </div>
          <div className="grid-5" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {AI_CARDS.map((c) => (
              <div className="card" key={c.title} style={{ padding: 22 }}>
                <span className="icon" style={{ width: 44, height: 44, fontSize: 19 }}>
                  {c.icon}
                </span>
                <h3 style={{ fontSize: 17 }}>{c.title}</h3>
                <p style={{ fontSize: 14 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 服务能力六宫格 */}
      <section className="section section-blue">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHAT WE DO</span>
            <h2 className="section-title">六项服务，一次配齐</h2>
            <p className="section-sub">可以单买一项，也可以整套打包。先解决最痛的，再慢慢补齐。</p>
          </div>
          <div className="grid-6">
            {SERVICE_TILES.map((t) => (
              <div className="card" key={t.title}>
                <span className="icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
                <Link href={t.link} className="go">
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 覆盖的市场与平台 */}
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

      {/* 8. 样板作品（真实项目，不编案例） */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SAMPLE WORK</span>
            <h2 className="section-title">先看我们自己做的站</h2>
            <p className="section-sub">
              客户案例正在积累中。先看我们自己的两个站——建站和内容能力都在上面。
            </p>
          </div>
          <div className="sample-work">
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
          </div>
        </div>
      </section>

      {/* 9. 为什么选爱度 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">WHY AIDU</span>
            <h2 className="section-title">为什么选爱度</h2>
          </div>
          <div className="grid-3">
            {REASONS.map((r) => (
              <div className="card" key={r.title}>
                <span className="icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <CtaBand />

      {/* 11. FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">常见问题</h2>
          </div>
          <Faq items={HOME_FAQ} />
          <p className="center mt-4">
            还有问题？<Link href="/contact">直接联系我们 →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
