"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { HEADER_NAV } from "@/lib/site";

function navClass(active: boolean) {
  return `navlabel transition-colors ${
    active ? "text-bronze" : "text-nav hover:text-bronze"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock the page behind the overlay while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const left = HEADER_NAV.slice(0, 2);
  const right = HEADER_NAV.slice(2);

  return (
    <header className="border-b border-rule bg-bone">
      {/* Tablet and desktop: one row — nav, logo, nav. The logo is home. */}
      <nav
        aria-label="Primary"
        className="shell hidden tab:grid grid-cols-[1fr_auto_1fr] items-center gap-[32px] py-[44px]"
      >
        <div className="flex items-center justify-center gap-[40px] desk:gap-[56px]">
          {left.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={navClass(pathname === item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          aria-label="White Walls — home"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <Logo priority className="w-[200px] desk:w-[260px]" />
        </Link>

        <div className="flex items-center justify-center gap-[40px] desk:gap-[56px]">
          {right.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={navClass(pathname === item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile: centred logo, hamburger, no visible nav. */}
      <div className="shell relative flex items-center justify-center py-[30px] tab:hidden">
        <Link href="/" aria-label="White Walls — home">
          <Logo priority className="w-[166px]" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="absolute right-[var(--gutter)] top-1/2 flex -translate-y-1/2 flex-col justify-center gap-[6px] p-2"
        >
          <span className="block h-px w-[22px] bg-ink" />
          <span className="block h-px w-[22px] bg-ink" />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-[40px] bg-bone tab:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-[var(--gutter)] top-[36px] p-2"
          >
            <span className="block h-px w-[22px] translate-y-[0.5px] rotate-45 bg-ink" />
            <span className="block h-px w-[22px] -translate-y-[0.5px] -rotate-45 bg-ink" />
          </button>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="White Walls — home"
            className="mb-[12px]"
          >
            <Logo className="w-[166px]" />
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-col items-center gap-[36px]"
          >
            {HEADER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={navClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
