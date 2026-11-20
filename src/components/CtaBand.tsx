import Link from "next/link";

export default function CtaBand({
  title = "不知道从哪开始？",
  text = "先聊 15 分钟，免费给你一套方案：做什么站、用什么系统、代运营从哪个渠道先动，讲清楚再决定。",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href="/contact" className="btn btn-white">
            免费获取方案
          </Link>
          <Link href="/pricing" className="btn btn-ghost" style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
            先看看价格
          </Link>
          <p className="cta-note">电话咨询：18151772888 · 咨询不收费，不做硬推销</p>
        </div>
      </div>
    </section>
  );
}
