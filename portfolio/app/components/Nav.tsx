"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "../providers";
import { ui } from "../data/content";
import { Sun, Moon } from "lucide-react";

type SectionId = "work" | "about" | "contact";

export function Nav() {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!isHome) {
      setActive(pathname.startsWith("/projects") ? "work" : null);
      return;
    }

    const ids: SectionId[] = ["work", "about", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const compute = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current: SectionId | null = null;
      for (const el of elements) {
        if (el.offsetTop <= y) current = el.id as SectionId;
      }
      // Bottom of page → contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = "contact";
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [isHome, pathname]);

  const linkClass = (id: SectionId) =>
    `px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-colors ${
      active === id ? "bg-fg text-bg" : "hover:bg-bg-alt"
    }`;

  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center pointer-events-none">
      <Link
        href="/"
        className="pointer-events-auto rounded-full bg-card border border-line-strong px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg hover:bg-fg hover:text-bg transition-colors"
      >
        GA / Portfolio
      </Link>

      <nav className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full bg-card border border-line-strong p-1">
        <Link href="/#work" className={linkClass("work")}>
          {ui.nav.work[lang]}
        </Link>
        <Link href="/#about" className={linkClass("about")}>
          {ui.nav.about[lang]}
        </Link>
        <Link href="/#contact" className={linkClass("contact")}>
          {ui.nav.contact[lang]}
        </Link>
      </nav>

      <div className="pointer-events-auto flex items-center gap-2">
        <div className="rounded-full bg-card border border-line-strong p-1 flex">
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full transition-colors ${lang === "en" ? "bg-fg text-bg" : "text-fg-mute hover:text-fg"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("it")}
            className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full transition-colors ${lang === "it" ? "bg-fg text-bg" : "text-fg-mute hover:text-fg"}`}
          >
            IT
          </button>
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full bg-card border border-line-strong p-2.5 hover:bg-bg-alt transition-colors"
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </header>
  );
}
