import { NextResponse} from "next/server";

type LeadPayload = {
kind?: "contact" | "diagnosis";
name?: string;
company?: string;
industry?: string;
market?: string;
budget?: string;
wechat?: string;
phone?: string;
contact?: string; // 诊断表单：微信或手机号（二选一必填）
service?: string;
message?: string;
website?: string; // 诊断表单：公司网址（可选）
hp?: string; // 蜜罐字段：正常用户为空
ts?: string; // 表单加载时间戳（毫秒），防机器人秒填
};

/**
* 留资表单接收端（第二版）：
* - 按 kind 分别校验：contact 沿用原必填项；diagnosis 要求行业、目标市场、微信或手机号。
* - 垃圾提交防护：蜜罐字段、填表最短时长（3 秒）、同 IP 每小时最多 5 次。
* - 邮件通知：配置了 RESEND_API_KEY + LEAD_TO_EMAIL 时用 Resend 发邮件；
* 未配置时只记服务端日志（不虚构已发送）。邮箱地址用环境变量，见 [待填] 清单。
*/

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
const now = Date.now();
const list = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
if (list.length >= RATE_LIMIT_MAX) return true;
list.push(now);
hits.set(ip, list);
return false;
}

function clientIp(req: Request): string {
return (
req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
req.headers.get("x-real-ip") ||
"unknown"
);
}

function esc(s: string): string {
return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function sendMail(subject: string, lines: [string, string][]): Promise<boolean> {
const apiKey = process.env.RESEND_API_KEY;
const to = process.env.LEAD_TO_EMAIL;
if (!apiKey ||!to) return false;
const from = process.env.LEAD_FROM_EMAIL || "爱度科技 <noreply@trade.7887.cn>";
const html = lines.map(([k, v]) => `<p><strong>${esc(k)}：</strong>${esc(v) || "—"}</p>`).join("");
try {
const res = await fetch("https://api.resend.com/emails", {
method: "POST",
headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json"},
body: JSON.stringify({ from, to: [to], subject, html}),
});
if (!res.ok) {
console.error("[lead] mail failed", res.status, await res.text().catch(() => ""));
return false;
}
return true;
} catch (err) {
console.error("[lead] mail error", err);
return false;
}
}

export async function POST(req: Request) {
let body: LeadPayload;
try {
body = (await req.json()) as LeadPayload;
} catch {
return NextResponse.json({ ok: false, error: "提交内容无法解析"}, { status: 400});
}

// 蜜罐：机器人填了隐藏字段时静默丢弃，不透露原因。
if (body.hp?.trim()) {
return NextResponse.json({ ok: true});
}
// 填表过快（< 3 秒）视为机器人。
if (body.ts) {
const started = Number(body.ts);
if (Number.isFinite(started) && Date.now() - started < 3000) {
return NextResponse.json({ ok: false, error: "提交过快，请稍后再试"}, { status: 400});
}
}
// 同 IP 限流。
if (rateLimited(clientIp(req))) {
return NextResponse.json({ ok: false, error: "提交过于频繁，请稍后再试"}, { status: 429});
}

const kind = body.kind === "diagnosis"? "diagnosis": "contact";
const missing: string[] = [];
if (kind === "diagnosis") {
if (!body.industry?.trim()) missing.push("所属行业");
if (!body.market?.trim()) missing.push("目标市场");
if (!body.contact?.trim() &&!body.wechat?.trim() &&!body.phone?.trim()) {
missing.push("微信或手机号");
}
} else {
if (!body.name?.trim()) missing.push("姓名");
if (!body.company?.trim()) missing.push("公司");
if (!body.industry?.trim()) missing.push("行业");
if (!body.wechat?.trim()) missing.push("微信");
}
if (missing.length > 0) {
return NextResponse.json(
{ ok: false, error: `请填写：${missing.join("、")}`},
{ status: 400},
);
}

const contact = body.contact?.trim() || body.wechat?.trim() || body.phone?.trim() || "";
const record = {
kind,
at: new Date().toISOString(),
name: body.name || "",
company: body.company || "",
industry: body.industry || "",
market: body.market || "",
budget: body.budget || "",
contact,
wechat: body.wechat || "",
phone: body.phone || "",
service: body.service || "",
website: body.website || "",
message: body.message || "",
};
console.log("[lead]", JSON.stringify(record));

const mailed = await sendMail(
kind === "diagnosis"? "新留资": "新留资",
[
["类型", kind === "diagnosis"? "免费出海诊断": "联系表单"],
["公司", record.company],
["姓名", record.name],
["行业", record.industry],
["目标市场", record.market],
["预算", record.budget],
["联系方式", contact],
["公司网址", record.website],
["想了解的服务", record.service],
["需求描述", record.message],
],
);
console.log("[lead] mailed:", mailed);

return NextResponse.json({ ok: true});
}
