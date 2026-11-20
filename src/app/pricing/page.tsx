import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "定价",
  description:
    "爱度科技外贸服务定价：独立站 ¥9,800 起，代运营 ¥3,980/月起，CRM/ERP 年服务费 ¥9,800 起。价格均为“起”，具体以书面报价为准。",
};

const PRICING_FAQ: FaqItem[] = [
  {
    q: "价格表上的“起”是什么意思？",
    a: "是这一档的最低价。不同产品数量、语言版本、定制程度，价格会不一样。先聊需求，我们再出书面报价，报价单上的数就是最终数。",
  },
  {
    q: "代运营能不能先做一个月试试？",
    a: "可以。代运营按月签，先收月费再开工，随时可停，不签年约。",
  },
  {
    q: "广告费、KOL 费包在月费里吗？",
    a: "不包。广告费走你自己的广告账户，KOL 报价另算，我们只收对接和管理费。产品实拍、工厂拍摄的差旅和拍摄费也另算。",
  },
  {
    q: "CRM / ERP 的年服务费包含什么？",
    a: "包含系统维护、功能更新和 AI 跟进功能的使用。实施费按项目另算。团队人多了不用加钱，我们不按人头收年费。",
  },
  {
    q: "可以只买其中一项吗？",
    a: "可以。独立站、CRM / ERP、代运营都能单独签。整套打包有协同效应，但不强制。",
  },
  {
    q: "付款方式是怎样的？",
    a: "建站和系统实施：签合同后收首付款再开工，验收后收尾款。代运营：先收月费再开工，按月续费。",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 定价</p>
          <h1>定价：先看档，再聊需求</h1>
          <p>
            三条线、四张卡，价格都写在明面上。没有藏着的费用，广告费、KOL
            费、拍摄费另算，写清楚再签。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="price-grid">
            <div className="price-card">
              <h3>外贸独立站</h3>
              <p className="for">适合：想先有个能接询盘的站</p>
              <div className="price">
                ¥9,800 <small>起 / 一次性</small>
              </div>
              <p className="price-note">展示型 ¥9,800 起 · 营销型 ¥19,800 · 定制 ¥38,000 起</p>
              <ul>
                <li>多语言产品站 + 询盘表单</li>
                <li>SEO 基础结构（营销型起）</li>
                <li>产品文案与图片处理</li>
                <li>询盘追踪与数据统计</li>
                <li>2–6 周交付</li>
                <li>次年托管维护 ¥2,600 / 年</li>
                <li className="no">不含广告费与内容代运营</li>
              </ul>
              <Link href="/services/website" className="btn btn-ghost">
                看独立站详情
              </Link>
            </div>

            <div className="price-card popular">
              <span className="pop-badge">最受欢迎</span>
              <h3>代运营</h3>
              <p className="for">适合：想每个月持续有人获客</p>
              <div className="price">
                ¥3,980 <small>/ 月起</small>
              </div>
              <p className="price-note">SEO ¥3,980/月起 · 社媒 ¥3,999/月起 · 全案 ¥9,999/月</p>
              <ul>
                <li>SEO 代运营：关键词 + 内容 + 月报</li>
                <li>社媒代运营：5 平台，60 条内容 / 月起</li>
                <li>英文文案 + AI 配图</li>
                <li>谷歌广告代运营：月费 + 消耗 15%</li>
                <li>周简报 + 月度复盘</li>
                <li>按月签，随时可停</li>
                <li className="no">广告费、KOL 费走客户账户，另算</li>
              </ul>
              <Link href="/services/agency" className="btn btn-primary">
                看代运营详情
              </Link>
            </div>

            <div className="price-card">
              <h3>CRM / ERP</h3>
              <p className="for">适合：询盘多了，靠 Excel 管不过来</p>
              <div className="price">
                ¥9,800 <small>/ 年起</small>
              </div>
              <p className="price-note">年服务费 ¥9,800 起 · 实施费 ¥8,000–18,000 按项目</p>
              <ul>
                <li>客户池 + 询盘 pipeline</li>
                <li>邮件 / WhatsApp / 表单询盘自动归集</li>
                <li>7 天未跟进提醒 + 团队看板</li>
                <li>AI 线索评分 + 开发信草稿</li>
                <li>实施周期 2–4 周</li>
                <li>不按人头收年费</li>
                <li className="no">不含硬件与第三方软件授权费</li>
              </ul>
              <Link href="/services/crm" className="btn btn-ghost">
                看 CRM / ERP 详情
              </Link>
            </div>

            <div className="price-card">
              <h3>整套定制</h3>
              <p className="for">适合：站 + 系统 + 代运营一次配齐</p>
              <div className="price">
                按项目 <small>报价</small>
              </div>
              <p className="price-note">先聊 15 分钟，再出书面方案与报价</p>
              <ul>
                <li>独立站 + CRM / ERP + 代运营打包</li>
                <li>专属方案与排期</li>
                <li>AI 开发信 + AI 客服接询盘</li>
                <li>月度数据复盘会</li>
                <li>专属对接人</li>
                <li>交付清单写进合同</li>
                <li className="no">不承诺询盘量、排名、成交额</li>
              </ul>
              <Link href="/contact" className="btn btn-ghost">
                免费获取方案
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <div className="promise-box">
              <strong>承诺口径：</strong>
              我们只承诺交付物、周期与验收标准，未达标顺延；不承诺询盘量、排名、成交额、涨粉数。价格均为“起”，具体以书面报价为准。
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">COMPARE</span>
            <h2 className="section-title">三条线对比</h2>
          </div>
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th>项目</th>
                  <th>独立站</th>
                  <th>代运营（按月）</th>
                  <th>CRM / ERP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>收费方式</td>
                  <td>一次性 + 次年维护 ¥2,600/年</td>
                  <td>按月，先收月费再开工</td>
                  <td>实施费 + 年服务费 ¥9,800 起</td>
                </tr>
                <tr>
                  <td>交付周期</td>
                  <td>2–6 周</td>
                  <td>签约后 1 周出首月计划</td>
                  <td>2–4 周</td>
                </tr>
                <tr>
                  <td>包含内容</td>
                  <td>多语言站、询盘表单、SEO 结构</td>
                  <td>内容、排期、广告管理、月报</td>
                  <td>客户池、询盘 pipeline、AI 跟进</td>
                </tr>
                <tr>
                  <td>适合谁</td>
                  <td>没站、站太旧、接不到询盘</td>
                  <td>有站缺内容、缺人做海外营销</td>
                  <td>询盘多、靠 Excel 管不过来</td>
                </tr>
                <tr>
                  <td>能不能只做一个月</td>
                  <td>一次性项目，按验收结算</td>
                  <td>可以，按月签，随时可停</td>
                  <td>年服务费按年，实施按项目</td>
                </tr>
                <tr>
                  <td>不包含</td>
                  <td>广告费、内容代运营</td>
                  <td>广告费、KOL 费、拍摄费</td>
                  <td>硬件与第三方软件授权费</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand
        title="拿不准选哪一档？"
        text="先聊 15 分钟，讲清楚你的产品、市场和预算，我们再给你一套方案和书面报价。咨询不收费。"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">定价常见问题</h2>
          </div>
          <Faq items={PRICING_FAQ} />
        </div>
      </section>
    </>
  );
}
