import Link from "next/link";

/** 企业微信二维码：文件 /public/wecom-qr.png 不存在时显示 [待填] 占位。 */
function WecomQr({ size = "footer" }: { size?: "footer" | "hero" }) {
  // 构建时如已上传 wecom-qr.png，把下面的占位换成 <img src="/wecom-qr.png" alt="爱度科技企业微信二维码" width="168" height="168" />。
  return (
    <div className="qr-box" style={size === "footer" ? { width: 120, height: 120 } : undefined}>
      <span className="qr-placeholder">[待填] 企业微信二维码</span>
    </div>
  );
}

export function HeroQr() {
  return (
    <div className="hero-qr">
      <WecomQr size="hero" />
      <p className="qr-caption">扫码加企业微信，直接发产品资料聊</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <span className="logo-mark" aria-hidden="true">
                Ai
              </span>
              爱度科技
            </div>
            <p>
              帮国内中小外贸企业做独立站、CRM / ERP
              和代运营——网站获客、询盘进系统、AI 帮你跟客户，每个月都有交付、有数据。
            </p>
            <div className="footer-qr">
              <WecomQr />
              <p>官方媒体：扫码加企业微信，发产品资料直接聊，咨询不收费。</p>
            </div>
            <p className="footer-meta">
              公司全称：[待填]
              <br />
              统一社会信用代码 / 备案号：[待填]
              <br />
              地址：[待填]
              <br />
              电话：18151772888
              <br />
              主站：<a href="https://7887.cn" target="_blank" rel="noreferrer">7887.cn</a>
            </p>
          </div>
          <div>
            <h4>产品与服务</h4>
            <Link href="/services/website">外贸独立站 / 营销站</Link>
            <Link href="/services/crm">外贸 CRM / ERP</Link>
            <Link href="/services/agency">代运营（SEO / 社媒 / 广告）</Link>
            <Link href="/pricing">定价</Link>
          </div>
          <div>
            <h4>关于我们</h4>
            <Link href="/contact">联系我们</Link>
            <Link href="/cases">案例与样板</Link>
            <Link href="/compare">我们和同行有什么不同</Link>
            <Link href="/quote">获取报价</Link>
            <a href="https://7887.cn" target="_blank" rel="noreferrer">
              爱度科技主站
            </a>
          </div>
          <div>
            <h4>服务与支持</h4>
            <a href="tel:18151772888">电话：18151772888</a>
            <Link href="/#diagnosis">微信咨询：扫码加企业微信</Link>
            <span>邮箱：[待填]</span>
            <span>服务时间：工作日 9:00–18:00</span>
            <p style={{ marginTop: 12 }}>
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
