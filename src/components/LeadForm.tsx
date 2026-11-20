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

const BUDGETS = [
  "1 万以内",
  "1–3 万",
  "3–5 万",
  "5–10 万",
  "10 万以上",
  "先聊聊再定",
];

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const mountedAt = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = { kind: "contact" };
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
        <h3>已收到，谢谢！</h3>
        <p>
          你的需求已经提交，我们会在 1 个工作日内联系你，先聊 15
          分钟，免费给你一套方案。
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
        <div className="field">
          <label htmlFor="name">
            姓名 <span className="req">*</span>
          </label>
          <input id="name" name="name" required placeholder="怎么称呼你" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">
            公司 <span className="req">*</span>
          </label>
          <input id="company" name="company" required placeholder="公司全称或简称" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="industry">
            行业 <span className="req">*</span>
          </label>
          <select id="industry" name="industry" required defaultValue="">
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
          <label htmlFor="market">目标市场</label>
          <input id="market" name="market" placeholder="例如：欧美、东南亚、中东" />
        </div>
        <div className="field">
          <label htmlFor="budget">预算范围</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>
              请选择
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="wechat">
            微信 <span className="req">*</span>
          </label>
          <input id="wechat" name="wechat" required placeholder="微信号，方便我们加你" autoComplete="off" />
        </div>
        <div className="field">
          <label htmlFor="phone">电话</label>
          <input id="phone" name="phone" placeholder="手机号（选填）" autoComplete="tel" inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="service">想了解的服务</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              请选择
            </option>
            <option>外贸独立站 / 营销站</option>
            <option>外贸 CRM / ERP</option>
            <option>代运营（SEO / 社媒 / 广告）</option>
            <option>整套都想了解</option>
            <option>还不确定，先聊聊</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">需求描述</label>
          <textarea
            id="message"
            name="message"
            placeholder="简单说说你的情况：现在有没有网站、主要卖什么产品、想先解决哪个问题……"
          />
        </div>
        {/* 蜜罐字段：正常用户看不到也填不到，机器人会填 */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="hp">请勿填写此项</label>
          <input id="hp" name="hp" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="mt-2">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "提交中…" : "提交，免费获取方案"}
        </button>
      </div>
      {status === "error" && <p className="form-error">{error}</p>}
      <p className="form-note">
        提交即表示你同意我们为本次咨询与你联系。你的信息仅用于本次沟通，不会对外分享。
      </p>
    </form>
  );
}
