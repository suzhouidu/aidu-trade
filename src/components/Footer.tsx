import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <span className="logo-mark">爱</span>爱度科技
            </div>
            <p>
              帮国内中小外贸企业做独立站、CRM / ERP
              和代运营——网站获客、询盘进系统、AI 帮你跟客户，每个月都有交付、有数据。
            </p>
            <p>
              电话：18151772888
              <br />
              主站：<a href="https://7887.cn" target="_blank" rel="noreferrer">7887.cn</a>
            </p>
          </div>
          <div>
            <h4>服务</h4>
            <Link href="/services/website">外贸独立站 / 营销站</Link>
            <Link href="/services/crm">外贸 CRM / ERP</Link>
            <Link href="/services/agency">代运营（SEO / 社媒 / 广告）</Link>
            <Link href="/pricing">定价</Link>
          </div>
          <div>
            <h4>了解爱度</h4>
            <Link href="/cases">案例与样板</Link>
            <Link href="/contact">联系我们</Link>
            <Link href="/quote">获取报价</Link>
            <a href="https://7887.cn" target="_blank" rel="noreferrer">
              爱度科技主站
            </a>
          </div>
          <div>
            <h4>承诺口径</h4>
            <p>
              我们只承诺交付物、周期与验收标准，不承诺询盘量、排名、成交额、涨粉数。价格均为“起”，具体以书面报价为准。
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 爱度科技 · 跨境外贸服务</span>
          <span>trade.7887.cn</span>
        </div>
      </div>
    </footer>
  );
}
