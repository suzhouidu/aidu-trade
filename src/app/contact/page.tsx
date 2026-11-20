import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系爱度科技跨境外贸服务：先聊 15 分钟，免费获取一套方案。电话 18151772888，主站 7887.cn。",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 联系</p>
          <h1>联系我们</h1>
          <p>
            先聊 15 分钟，免费给你一套方案：做什么站、用什么系统、代运营从哪个渠道先动，讲清楚再决定。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <LeadForm />
            </div>
            <div>
              <div className="card">
                <span className="tag">直接联系</span>
                <h3>电话：18151772888</h3>
                <p>
                  工作日 9:00–18:00 都能打通。着急的话直接打电话，不用等表单回复。
                </p>
                <div className="kv">
                  <span>公司</span>
                  <b>爱度科技</b>
                </div>
                <div className="kv">
                  <span>主站</span>
                  <b>
                    <a href="https://7887.cn" target="_blank" rel="noreferrer">
                      7887.cn
                    </a>
                  </b>
                </div>
                <div className="kv">
                  <span>所在地</span>
                  <b>苏州</b>
                </div>
                <div className="kv">
                  <span>回复时间</span>
                  <b>1 个工作日内</b>
                </div>
              </div>
              <div className="card mt-2">
                <h3>聊之前，你可以先准备</h3>
                <ul className="check-list">
                  <li>主要卖什么产品</li>
                  <li>目标市场是哪些国家</li>
                  <li>现在有没有网站、用的什么系统</li>
                  <li>预算大概在什么范围</li>
                </ul>
                <p className="mb-0">
                  没准备也没关系，聊的时候一起理。咨询不收费，不做硬推销。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
