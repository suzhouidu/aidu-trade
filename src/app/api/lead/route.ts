import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
  industry?: string;
  market?: string;
  budget?: string;
  wechat?: string;
  phone?: string;
  service?: string;
  message?: string;
};

/**
 * 留资表单接收端（第一版）：
 * 校验必填项后把提交记录到服务端日志，并返回成功。
 * 邮件 / 微信通知后续再接，不虚构已发送。
 */
export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "提交内容无法解析" }, { status: 400 });
  }

  const missing: string[] = [];
  if (!body.name?.trim()) missing.push("姓名");
  if (!body.company?.trim()) missing.push("公司");
  if (!body.industry?.trim()) missing.push("行业");
  if (!body.wechat?.trim()) missing.push("微信");
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `请填写：${missing.join("、")}` },
      { status: 400 },
    );
  }

  console.log(
    "[lead]",
    JSON.stringify({
      at: new Date().toISOString(),
      name: body.name,
      company: body.company,
      industry: body.industry,
      market: body.market || "",
      budget: body.budget || "",
      wechat: body.wechat,
      phone: body.phone || "",
      service: body.service || "",
      message: body.message || "",
    }),
  );

  return NextResponse.json({ ok: true });
}
