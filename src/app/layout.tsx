import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://trade.7887.cn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "苏州外贸独立站建设与代运营｜爱度科技",
    template: "%s｜爱度科技",
  },
  description:
    "爱度科技（苏州）为中小外贸工厂和贸易公司做外贸独立站、CRM 与代运营：建站、询盘管理、海外获客一站搞定。",
  keywords: ["外贸独立站", "苏州外贸", "外贸代运营", "外贸CRM", "外贸ERP", "谷歌SEO", "爱度科技"],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: "爱度科技 · 跨境外贸服务",
    title: "苏州外贸独立站建设与代运营｜爱度科技",
    description:
      "爱度科技（苏州）为中小外贸工厂和贸易公司做外贸独立站、CRM 与代运营：建站、询盘管理、海外获客一站搞定。",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "爱度科技 · 苏州外贸独立站建设与代运营" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "苏州外贸独立站建设与代运营｜爱度科技",
    description:
      "爱度科技（苏州）为中小外贸工厂和贸易公司做外贸独立站、CRM 与代运营：建站、询盘管理、海外获客一站搞定。",
    images: [`${SITE_URL}/og.png`],
  },
  icons: { icon: "/favicon.svg" },
};

/** Organization 结构化数据：未知字段用 [待填] 占位，由老板确认后补。 */
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "爱度科技",
  legalName: "[待填]",
  url: SITE_URL,
  telephone: "18151772888",
  description: "苏州爱度科技为国内中小外贸企业提供外贸独立站、CRM/ERP 与代运营服务。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "苏州",
    addressRegion: "江苏",
    addressCountry: "CN",
    streetAddress: "[待填]",
    postalCode: "[待填]",
  },
  sameAs: ["https://7887.cn"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
