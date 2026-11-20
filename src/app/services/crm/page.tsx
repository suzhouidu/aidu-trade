import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "外贸 CRM / ERP",
  description:
    "爱度科技外贸 CRM/ERP：客户池、询盘 pipeline、邮件/WhatsApp 询盘自动归集、AI 线索评分。实施费 ¥8,000–18,000，年服务费 ¥9,800 起，不按人头收费。",
};

const FAQ: FaqItem[] = [
  {
    q: "CRM / ERP 和你们代运营是什么关系？",
    a: "CRM / ERP 是管客户的系统，代运营是帮你找客户的服务。两个可以分开买，也可以一起买：代运营拿到的询盘直接进 CRM，业务员在系统里跟进，一个闭环。",
  },
  {
    q: "数据在谁手里？合作结束怎么办？",
    a: "数据在你手里。系统部署在你名下，客户、询盘、跟进记录都是你的。合作结束，数据完整交还，不扣留。",
  },
  {
    q: "和孚盟、小满这些比，你们的优势是什么？",
    a: "一是不按人头收年费，团队从 5 个人长到 50 个人不用加钱；二是 AI 跟进能力是自有的，开发信、评分、提醒都含在服务里；三是我们在苏州，能上门、能当面聊。",
  },
  {
    q: "我们现在用 Excel 管客户，能直接迁过来吗？",
    a: "可以。实施的时候帮你把 Excel 里的客户、询盘记录导进来，分好等级和标签，再开始用。",
  },
];

export default function CrmServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 服务 / CRM · ERP</p>
          <h1>外贸 CRM / ERP</h1>
          <p>
            询盘多了，靠 Excel 和微信管不过来：谁问过价、谁要了样品、谁 7
            天没回——打开系统一眼就清楚。实施费按项目，年服务费 ¥9,800
            起，不按人头收费。
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
                <li>询盘散在邮箱、微信、Excel 里，找起来费劲</li>
                <li>业务员离职，客户跟到哪一步没人知道</li>
                <li>报价、样品、谈判各管一段，丢单不知道丢在哪</li>
                <li>哪个客户最值得跟，全凭感觉</li>
                <li>想上系统，一问价：按人头一年几万块</li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">系统里有什么</span>
              <h2 className="section-title" style={{ fontSize: 28 }}>
                客户、询盘、商机，一套口径
              </h2>
              <ul className="check-list">
                <li>客户池：公司、国家、行业、联系人、等级、标签</li>
                <li>询盘 pipeline：新询盘 → 评估 → 报价 → 样品 → 谈判 → 成交 / 丢单</li>
                <li>询盘自动归集：邮件、WhatsApp、表单询盘自动进 CRM</li>
                <li>7 天未跟进提醒：哪些客户该回了，系统先告诉你</li>
                <li>团队看板：谁跟了谁、哪些商机最可能成交</li>
                <li>AI 跟进：线索评分、开发信草稿、多语言翻译、跟进提醒</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">MODULES</span>
            <h2 className="section-title">CRM 与 ERP，按需选模块</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <span className="tag">外贸 CRM</span>
              <h3>管客户、管询盘、管跟进</h3>
              <ul className="check-list">
                <li>客户与联系人管理</li>
                <li>询盘 pipeline 与商机管理</li>
                <li>邮件 / WhatsApp 跟进记录</li>
                <li>报价与样品管理</li>
                <li>AI 线索评分与开发信</li>
              </ul>
            </div>
            <div className="card">
              <span className="tag">外贸 ERP</span>
              <h3>管经营：销售、采购、库存、财务</h3>
              <ul className="check-list">
                <li>销售订单与采购管理</li>
                <li>库存与多仓管理</li>
                <li>开票与财务对账</li>
                <li>项目与交付管理</li>
                <li>与 CRM 一套口径，不用两边对数</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <div className="promise-box">
              <strong>收费：</strong>
              实施费 ¥8,000–18,000（按定制程度）+ 年服务费 ¥9,800
              起（含维护、功能更新与 AI 跟进功能）。
              <strong>不按人头收费</strong>
              ——团队从 5 个人长到 50 个人，不用为多出来的人头再交一份钱。
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PROCESS</span>
            <h2 className="section-title">实施流程：2–4 周上线</h2>
          </div>
          <div className="flow">
            <div className="step">
              <div className="num">1</div>
              <h3>聊现状</h3>
              <p>现在怎么管客户、多少人用、Excel 里有多少数据，先摸清楚再定模块。</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>搭系统</h3>
              <p>按你的流程配 pipeline、字段和权限，数据从 Excel 导进来，分好等级标签。</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>教团队</h3>
              <p>业务员上手培训：询盘怎么录、跟进怎么写、提醒怎么看，一次讲透。</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>上线维护</h3>
              <p>上线后有人兜底：出问题找我们，功能更新包含在年服务费里。</p>
            </div>
          </div>
          <p className="center mt-4">
            底座用开源系统（Krayin / Odoo Community）搭，实施与服务由爱度负责。
            数据在你名下，合作结束完整交还。
          </p>
        </div>
      </section>

      <CtaBand
        title="先聊聊你现在怎么管客户"
        text="15 分钟讲清楚现状，我们再告诉你上系统要多少钱、多久能用上。不合适就直说，不硬推。"
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
