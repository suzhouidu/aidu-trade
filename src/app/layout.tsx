import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trade.7887.cn"),
  title: {
    default: "爱度科技 · 跨境外贸服务 | 外贸独立站、CRM/ERP、代运营",
    template: "%s | 爱度科技跨境外贸服务",
  },
  description:
    "爱度科技帮国内中小外贸企业做独立站、CRM/ERP 和代运营：网站获客、询盘进系统、AI 帮你跟客户，每个月都有交付、有数据。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "爱度科技跨境外贸服务",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
