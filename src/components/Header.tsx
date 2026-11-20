"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 首页顶部：透明深色顶栏，与深色 Hero 融为一体；滚动后或内页：白色顶栏。
  const dark = pathname === "/" && !scrolled;

  return (
    <header className={`site-header${dark ? " header-dark" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            Ai
          </span>
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
          <Link href="/pricing" className="btn btn-green btn-sm">
            查看价格
          </Link>
          <Link href="/#diagnosis" className="btn btn-primary btn-sm">
            免费出海诊断
          </Link>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="移动端导航">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
