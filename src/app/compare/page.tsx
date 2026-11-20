import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "我们和孚盟、询盘云有什么不同",
  description:
    "爱度科技与孚盟、询盘云的逐项对比：AI 是主业、CRM 不按人头收年费、苏州本地服务。价格来自各家官网，以官网和书面报价为准。",
  alternates: { canonical: "https://trade.7887.cn/compare" },
};

export default function ComparePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 对比</p>
          <h1>我们和孚盟、询盘云有什么不同</h1>
          <p>
            孚盟、询盘云都是很好的公司，规模比我们大、服务城市比我们多。下面的对比只写公开信息，
            帮你判断哪家更适合你这个阶段——我们适合想先小步试、要灵活配合的中小企业。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">THE DIFFERENCE</span>
            <h2 className="section-title">我们的三点不同</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="icon">AI</span>
              <h3>AI 是主业，不是噱头</h3>
              <p>
                爱度主业就是 AI 应用：开发信、产品文案、客服应答、线索评分，
                这些是我们自己每天在用的能力，不是外包出去的卖点。
              </p>
            </div>
            <div className="card">
              <span className="icon tint-green">省</span>
              <h3>CRM 不按人头收年费</h3>
              <p>
                CRM / ERP 用开源底座搭，收实施费加年服务费。
                团队从 5 个人长到 50 个人，不用为多出来的人头再交一份钱。
              </p>
            </div>
            <div className="card">
              <span className="icon tint-amber">苏</span>
              <h3>苏州本地服务</h3>
              <p>
                我们在苏州，电子、精密机械、医疗器械、智能家居、家纺这些产业带就在身边。
                能跑工厂、能拍探厂视频、能当面聊，沟通成本低。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SIDE BY SIDE</span>
            <h2 className="section-title">逐项对比（公开信息）</h2>
            <p className="section-sub">
              价格来自各家官网 2026-11-21 检索，以官网和书面报价为准；未公开标价的项目写明“未公开”。
            </p>
          </div>
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th>项目</th>
                  <th>爱度科技</th>
                  <th>孚盟</th>
                  <th>询盘云</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>主打</td>
                  <td>独立站 + CRM/ERP + 代运营，一套配齐</td>
                  <td>外贸 CRM / ERP，老牌软件（20 多年）</td>
                  <td>Marketing CRM + 精品站 + AI 内容营销</td>
                </tr>
                <tr>
                  <td>CRM 收费方式</td>
                  <td>实施费 ¥8,000–18,000 + 年服务费 ¥9,800 起，不按人头收费</td>
                  <td>营销云 ¥28,800/年起（含 10 用户）；销售云 ¥31,800/年起（含 10 用户）</td>
                  <td>Marketing CRM 未公开标价，预约演示后顾问报价</td>
                </tr>
                <tr>
                  <td>独立站</td>
                  <td>展示型 ¥9,800 起 / 营销型 ¥19,800 / 定制 ¥38,000 起</td>
                  <td>以软件为主，建站不是主打</td>
                  <td>AMP 精品站，价格未公开</td>
                </tr>
                <tr>
                  <td>代运营</td>
                  <td>SEO ¥3,980/月起，社媒 ¥3,999/月起，全案 ¥9,999/月</td>
                  <td>以软件 + 本地服务为主</td>
                  <td>AI 内容营销、GEO：标准版 ¥59,800 / 旗舰版 ¥139,800</td>
                </tr>
                <tr>
                  <td>AI 能力</td>
                  <td>主业：AI 开发信、产品文案、客服接询盘、线索评分</td>
                  <td>有 AI 功能，软件为核心</td>
                  <td>有企业 GPT 与 AI 内容营销</td>
                </tr>
                <tr>
                  <td>本地服务</td>
                  <td>苏州本地，能跑工厂、当面服务</td>
                  <td>全国近 50 城设本地服务机构</td>
                  <td>8 城上门服务</td>
                </tr>
                <tr>
                  <td>适合谁</td>
                  <td>想先小步试、要灵活配合的中小外贸企业</td>
                  <td>想上成熟标准化外贸软件的中大型团队</td>
                  <td>想做品牌内容营销、有预算的中大型企业</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <div className="promise-box">
              <strong>说明：</strong>
              同行的价格与服务以其官网和书面报价为准，这里只做公开信息整理，不做优劣评判。
              如果你已经在用孚盟或询盘云，只想补一块短板（比如只做代运营、只做独立站），也可以单独找我们。
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="还是拿不准？"
        text="先做一次免费出海诊断：填一张表，我们看一眼你的网站和行业，再聊 15 分钟，给你一份书面的出海诊断。"
      />
      <div className="container center" style={{ paddingBottom: 56 }}>
        <Link href="/#diagnosis" className="btn btn-primary">
          获取免费出海诊断
        </Link>
      </div>
    </>
  );
}
