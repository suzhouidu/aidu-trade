import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "案例与样板",
  description:
    "爱度科技外贸服务案例与样板：先看我们自己的站——7887.cn 爱度科技主站与 iDu Tools 出海内容站。客户案例正在积累中。",
};

export default function CasesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">首页 / 案例</p>
          <h1>案例与样板</h1>
          <p>
            外贸服务的客户案例正在积累中。先看我们自己做的两个站——建站、内容与
            SEO 能力都在上面，谈单的时候也可以直接打开给客户看。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <span className="tag">爱度科技主站</span>
              <h3>7887.cn</h3>
              <p>
                爱度科技主站：AI 数字员工、AI 智能客服、GEO 优化、AI
                获客系统等产品线，产品页、解决方案页、留资入口一应俱全。
              </p>
              <p>
                能说明什么：独立站的版式、结构、留资流程，我们按同一套标准做。
              </p>
              <a href="https://7887.cn" target="_blank" rel="noreferrer" className="go">
                访问 7887.cn →
              </a>
            </div>
            <div className="card">
              <span className="tag">出海内容样板</span>
              <h3>iDu Tools</h3>
              <p>
                英文 AI 软件目录站：3,600
                多个工具、10 篇对比评测文章、10 个榜单，覆盖 CRM、ERP、社媒工具、自动化工具等出海企业常用的软件品类。
              </p>
              <p>
                能说明什么：英文内容生产、对比评测写法、SEO 结构、榜单运营，都在上面跑过。
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
              <Link href="/#diagnosis" className="go">
                申请首批合作 →
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="promise-box">
              <strong>说明：</strong>
              本页只展示我们自己的真实项目。客户案例会在有真实客户并经客户同意后陆续上架，不编客户名、不编数据。
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="想成为第一批案例客户？"
        text="前 [待填] 家合作客户享 [待填] 优惠。先聊 15 分钟，免费出方案。"
      />
    </>
  );
}
