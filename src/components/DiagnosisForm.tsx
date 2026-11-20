"use client";

import { useRef, useState } from "react";

const INDUSTRIES = [
  "电子 / 数码配件",
  "精密机械 / 五金",
  "医疗器械",
  "智能家居",
  "家纺 / 婚纱礼服",
  "汽配",
  "其他制造业",
  "跨境电商 / 品牌",
  "其他",
];

const MARKETS = ["欧美", "东南亚", "中东", "日韩", "拉美", "非洲", "全球", "还没确定"];

/** 免费出海诊断表单：提交到 /api/lead（kind=diagnosis），与 /contact 共用后端。 */
export default function DiagnosisForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const mountedAt = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = { kind: "diagnosis" };
    form.forEach((v, k) => {
      payload[k] = String(v);
    });
    payload.ts = String(mountedAt.current);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "提交失败");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "提交失败，请稍后再试或直接电话联系我们。");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success">
        <h3>诊断申请已收到，谢谢！</h3>
        <p>
          我们会在 1 个工作日内加你微信或打电话，先聊 15
          分钟，再给你一份书面的出海诊断：做什么站、用什么系统、代运营从哪个渠道先动。
        </p>
        <p className="mb-0">
          着急的话可以直接打电话：<strong>18151772888</strong>
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field full">
          <label htmlFor="diag-website">
            公司网址 <span className="hint">（可选）</span>
          </label>
          <input
            id="diag-website"
            name="website"
            type="url"
            placeholder="例如：https://www.yourcompany.com，有网站的填一下，我们先看一眼再聊"
            autoComplete="url"
          />
        </div>
        <div className="field">
          <label htmlFor="diag-industry">
            所属行业 <span className="req">*</span>
          </label>
          <select id="diag-industry" name="industry" required defaultValue="">
            <option value="" disabled>
              请选择
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="diag-market">
            目标市场 <span className="req">*</span>
          </label>
          <select id="diag-market" name="market" required defaultValue="">
            <option value="" disabled>
              请选择
            </option>
            {MARKETS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="diag-company">
            公司 <span className="hint">（可选）</span>
          </label>
          <input id="diag-company" name="company" placeholder="公司全称或简称" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="diag-contact">
            微信或手机号 <span className="req">*</span>
          </label>
          <input
            id="diag-contact"
            name="contact"
            required
            placeholder="微信号或手机号，方便我们联系你"
            autoComplete="off"
          />
        </div>
        {/* 蜜罐字段：正常用户看不到也填不到，机器人会填 */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="diag-hp">请勿填写此项</label>
          <input id="diag-hp" name="hp" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="mt-2">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "提交中…" : "提交，获取免费出海诊断"}
        </button>
      </div>
      {status === "error" && <p className="form-error">{error}</p>}
      <p className="form-note">仅用于联系和诊断，不对外提供。提交后 1 个工作日内联系你。</p>
    </form>
  );
}
