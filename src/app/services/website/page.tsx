import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "外贸独立站 / 营销站",
  description:
    "爱度科技外贸独立站：展示型 ¥9,800 起，营销型 ¥19,800，定制站 ¥38,000 起。多语言产品站 + 询盘表单 + SEO 结构，2–6 周交付。",
};

const FAQ: FaqItem[] = [
  {
    q: "展示型、营销型、定制站怎么选？",
    a: "刚起步、预算有限，先做展示型：有个能接询盘的站再说。想靠 Google 拿询盘，选营销型，SEO 结构和内容一起做。要产品库、客户登录询价、和 CRM 打通，选定制站。",
  },
  {
    q: "网站做好之后，询盘去哪了？",
    a: "网站表单提交后直接进你的邮箱，同时可以接进 CRM。选营销型和定制站，询盘自动归集、自动提醒，不用人工抄。",
  },
  {
    q: "能不能在现有网站上改，不重做？",
    a: "可以。先看你现有网站的问题在哪：是结构问题、内容问题还是速度问题。能改的改，改的成本比重做高我们会直接告诉你。",
  },
  {
    q: "包含域名和服务器吗？",
    a: "包含首年域名和服务器费用，写进报价单。次年托管维护 ¥2,600 / 年，包括续费、备份和基础维护。",
  },
];

export default function WebsiteServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 服务 / 外贸独立站</p>
          <h1>外贸独立站 / 营销站</h1>
          <p>
            一个能接询盘的站，而不是一个摆设。海外客户在 Google
            上搜到你，点进来能看懂产品、能留下询盘——这才是站的用处。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">你的痛点</span>
              <h2 className="section-title" style={{ fontSize: 28 }}>
                是不是这些情况？
              </h2>
              <ul className="pain-list">
                <li>没有独立站，只靠阿里国际站和展会接单</li>
                <li>有个站，但几年没更新，客户点进来就走</li>
                <li>站是中文思路翻译的，海外客户看不懂产品</li>
                <li>有询盘进来，靠微信和 Excel 记，经常漏跟</li>
                <li>Google 上搜不到自己，客户搜到的全是同行</li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">我们怎么做</span>
              <h2 className="section-title" style={{ fontSize: 28 }}>
                站是入口，后面是系统
              </h2>
              <ul className="check-list">
                <li>多语言产品站：英文为主，可加小语种</li>
                <li>询盘表单 + 询盘追踪，提交就有记录</li>
                <li>SEO 结构：关键词、产品页、FAQ 一次布好</li>
                <li>GEO 优化：让 AI 搜索也能引用和推荐你的品牌</li>
                <li>产品文案：AI 起草、人工校对，不用机翻</li>
                <li>可接 CRM：询盘自动进系统，不用人工抄</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">DELIVERABLES</span>
            <h2 className="section-title">交付物与周期</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="tag">展示型 · ¥9,800 起</span>
              <h3>先有个能接询盘的站</h3>
              <div className="kv"><span>交付周期</span><b>2–3 周</b></div>
              <div className="kv"><span>语言</span><b>英文（可加小语种）</b></div>
              <div className="kv"><span>包含</span><b>产品站、询盘表单、基础 SEO</b></div>
              <div className="kv"><span>适合</span><b>刚起步、预算有限</b></div>
            </div>
            <div className="card">
              <span className="tag">营销型 · ¥19,800</span>
              <h3>靠 Google 拿询盘的站</h3>
              <div className="kv"><span>交付周期</span><b>4–6 周</b></div>
              <div className="kv"><span>语言</span><b>英文 + 小语种可选</b></div>
              <div className="kv"><span>包含</span><b>展示型全部 + SEO 结构 + GEO + 产品文案</b></div>
              <div className="kv"><span>适合</span><b>想靠搜索获客</b></div>
            </div>
            <div className="card">
              <span className="tag">定制站 · ¥38,000 起</span>
              <h3>B2B 门户，按项目来</h3>
              <div className="kv"><span>交付周期</span><b>按项目排期</b></div>
              <div className="kv"><span>语言</span><b>多语言</b></div>
              <div className="kv"><span>包含</span><b>产品库、客户登录询价、CRM 打通</b></div>
              <div className="kv"><span>适合</span><b>要系统、要门户的企业</b></div>
            </div>
          </div>
          <p className="center mt-4">
            次年托管维护 ¥2,600 / 年（含域名、服务器续费、备份与基础维护）。价格均为“起”，具体以书面报价为准。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PROCESS</span>
            <h2 className="section-title">怎么做：四步上线</h2>
          </div>
          <div className="flow">
            <div className="step">
              <div className="num">1</div>
              <h3>聊需求</h3>
              <p>产品、目标市场、现有网站、预算，15 分钟聊清楚，出方案和书面报价。</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>出结构</h3>
              <p>栏目、产品分类、关键词一次定好，你确认了再动手做页面。</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>做内容</h3>
              <p>产品文案 AI 起草、人工校对；图片处理；表单和追踪一次接好。</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>上线验收</h3>
              <p>按交付清单逐项验收，没问题再收尾款。后续维护和代运营可以接着签。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SAMPLE WORK</span>
            <h2 className="section-title">样板：我们自己的站</h2>
            <p className="section-sub">
              客户案例正在积累中。先看我们自己做的站，版式、结构和留资流程都在上面。
            </p>
          </div>
          <div className="sample-work">
            <div className="card">
              <span className="tag">爱度科技主站</span>
              <h3>7887.cn</h3>
              <p>AI 产品线主站：产品、解决方案、留资入口一应俱全，独立站的版式和结构就是按这套做的。</p>
              <a href="https://7887.cn" target="_blank" rel="noreferrer" className="go">访问 7887.cn →</a>
            </div>
            <div className="card">
              <span className="tag">出海内容样板</span>
              <h3>iDu Tools</h3>
              <p>英文 AI 软件目录站：3,600 多个工具、对比评测和榜单，SEO 结构和内容生产在上面验证过。</p>
              <a href="https://www.idutools.com" target="_blank" rel="noreferrer" className="go">访问 idutools.com →</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="先聊 15 分钟，再决定做不做"
        text="讲清楚你的产品、市场和预算，我们出方案和书面报价。咨询不收费，不做硬推销。"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">常见问题</h2>
          </div>
          <Faq items={FAQ} />
          <p className="center mt-4">
            <Link href="/pricing">查看全部定价 →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
