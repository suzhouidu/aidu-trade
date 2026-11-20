"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/services/website", label: "独立站" },
  { href: "/services/crm", label: "CRM · ERP" },
  { href: "/services/agency", label: "代运营" },
  { href: "/pricing", label: "定价" },
  { href: "/cases", label: "案例" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">爱</span>
          <span>
            爱度科技
            <small>跨境外贸服务</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="主导航">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link href="/contact" className="btn btn-primary btn-sm">
            免费获取方案
          </Link>
        </div>
      </div>
    </header>
  );
}
