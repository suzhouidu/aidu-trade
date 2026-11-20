import type { Metadata } from "next";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "代运营：SEO / 社媒 / 谷歌广告",
  description:
    "爱度科技外贸代运营：SEO ¥3,980/月起，社媒代运营 ¥3,999/月起，全案 ¥9,999/月。按月签，先收月费再开工，随时可停。",
};

const FAQ: FaqItem[] = [
  {
    q: "代运营每月具体交付什么？",
    a: "写进合同的交付清单：发了多少条内容、在哪些平台、关键词和收录数据怎么样、广告花了多少、带来了多少询盘。周简报加月度复盘，每月一张表看完。",
  },
  {
    q: "内容是谁写的？会不会全是 AI 生成的套话？",
    a: "英文文案由 AI 起草、人工校对和改写，再按你的产品卖点调。发之前你可以先确认，不满意改到满意为止。改稿次数按套餐来，写在合同里。",
  },
  {
    q: "广告费怎么算？",
    a: "广告费走你自己的广告账户，花多少你自己看得见。我们收月费加消耗 15% 的管理费，不从广告费里抽成。",
  },
  {
    q: "做了一个月没效果怎么办？",
    a: "代运营按月签，随时可停。SEO 和内容是慢活，第一个月主要是搭结构和出内容，数据从第二个月开始看。每月复盘会讲清楚下个月改什么，不行就停，不绑你。",
  },
];

export default function AgencyServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 服务 / 代运营</p>
          <h1>代运营：SEO / 社媒 / 谷歌广告</h1>
          <p>
            每个月有人帮你做内容、发社媒、管广告、看数据。按月签，先收月费再开工，随时可停——靠每月交付的数据留客户，不靠年约绑客户。
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
                <li>想招个海外运营，招不到，招到了也留不住</li>
                <li>社媒账号建好了，三个月没更新</li>
                <li>英文内容写不出来，机翻发出去不敢看</li>
                <li>谷歌广告开着，花了钱不知道值不值</li>
                <li>做了一堆事，年底复盘：不知道哪件有用</li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">每月交付什么</span>
              <h2 className="section-title" style={{ fontSize: 28 }}>
                内容、排期、数据，一个不少
              </h2>
              <ul className="check-list">
                <li>每月主题表：先定选题，你确认了再执行</li>
                <li>英文文案：AI 起草、人工校对，不用机翻</li>
                <li>AI 配图：产品图 + AI 生图，不盗图</li>
                <li>定时排期：按平台改文案、尺寸、话题标签</li>
                <li>评论 / 私信维护：工作日回复，重要私信截图给你</li>
                <li>周简报 + 月度复盘：曝光、互动、点击、私信数</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PACKAGES</span>
            <h2 className="section-title">三档套餐，按月收费</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="tag">SEO 代运营 · ¥3,980 / 月起</span>
              <h3>让 Google 找到你</h3>
              <ul className="check-list">
                <li>关键词规划与内容排期</li>
                <li>SEO 文章与产品页优化</li>
                <li>收录与排名月报</li>
                <li>GEO：让 AI 搜索引用你的品牌</li>
              </ul>
            </div>
            <div className="card">
              <span className="tag">社媒代运营 · ¥3,999 / 月起</span>
              <h3>5 个平台，持续有人看</h3>
              <ul className="check-list">
                <li>X / LinkedIn / Instagram / TikTok / YouTube</li>
                <li>60 条内容 / 月（图文为主）</li>
                <li>英文文案 + AI 配图</li>
                <li>每月 4 次免费改稿</li>
                <li>周简报 + 月度复盘会</li>
              </ul>
            </div>
            <div className="card">
              <span className="tag">全案 · ¥9,999 / 月</span>
              <h3>站、内容、广告、数据全包</h3>
              <ul className="check-list">
                <li>全平台 6 个以上</li>
                <li>100 条内容 / 月 + 2 篇 SEO 文章</li>
                <li>谷歌广告代运营（月费 + 消耗 15%）</li>
                <li>热点快速响应 + 季度策划</li>
                <li>专属客户经理 + 实时数据看板</li>
              </ul>
            </div>
          </div>
          <p className="center mt-4">
            广告费、KOL 费、拍摄费另算，走客户账户。价格均为“起”，具体以书面报价为准。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PROCESS</span>
            <h2 className="section-title">每月怎么干：七步</h2>
          </div>
          <div className="flow">
            <div className="step">
              <div className="num">1</div>
              <h3>给资料</h3>
              <p>产品图、卖点、店铺链接、目标国家、禁忌词、竞品链接。</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>出月计划</h3>
              <p>主题加排期表，你确认了再执行。</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>每周出稿</h3>
              <p>文案、配图、视频脚本，在微信里确认。</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>排期发布</h3>
              <p>确认后自动发，每天人工检查一次有没有发失败。</p>
            </div>
          </div>
          <div className="flow mt-2" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="step">
              <div className="num">5</div>
              <h3>每天维护</h3>
              <p>评论和私信有人回，重要私信截图给你。</p>
            </div>
            <div className="step">
              <div className="num">6</div>
              <h3>每周复盘</h3>
              <p>数据简报，改下周选题。</p>
            </div>
            <div className="step">
              <div className="num">7</div>
              <h3>月底结算</h3>
              <p>月报加续费提醒，先收下月费再继续发。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">PROMISE</span>
            <h2 className="section-title">我们承诺什么、不承诺什么</h2>
          </div>
          <div className="two-col">
            <div className="card">
              <h3>承诺的</h3>
              <ul className="check-list">
                <li>每月交付清单：发多少条、在哪些平台</li>
                <li>数据真实可查：曝光、互动、点击、私信数</li>
                <li>周期与验收标准写进合同</li>
                <li>未达标顺延</li>
              </ul>
            </div>
            <div className="card">
              <h3>不承诺的</h3>
              <ul className="pain-list">
                <li>不承诺询盘量</li>
                <li>不承诺排名与收录时间</li>
                <li>不承诺成交额与涨粉数</li>
                <li>不承诺爆款</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="先做一个月试试"
        text="按月签，随时可停。第一个月先把内容计划和数据基线做出来，第二个月开始看效果。"
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
