import Link from "next/link";
import { Logo } from "./logo";
import { Mizo } from "./mizo";
import { NAV, SOCIAL, studio, mizo } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-wash">
      <div className="shell flex flex-col items-center pt-[64px] tab:pt-[90px] pb-[44px]">
        <Link href="/" aria-label="White Walls — home">
          <Logo className="w-[177px] tab:w-[150px] desk:w-[176px]" />
        </Link>

        <p className="mt-[16px] eyebrow text-[length:var(--text-legal)] tracking-[0.117em] text-soft text-center">
          {studio.city.toUpperCase()}
          <Mizo className="mt-[6px] block">{mizo.footerAddress}</Mizo>
        </p>

        <nav
          aria-label="Footer"
          className="mt-[52px] flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[16px] text-[length:var(--text-footnav)] text-soft"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-bronze"
            >
              {item.label}
            </Link>
          ))}
          {SOCIAL.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-bronze"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <hr className="mt-[60px] h-px w-full border-0 bg-rule" />

        <div className="mt-[28px] flex w-full flex-col items-center gap-[12px] text-center text-[length:var(--text-legal)] tracking-[0.117em] text-mute tab:flex-row tab:justify-between tab:text-left">
          <p>
            © {studio.name.toUpperCase()} {new Date().getFullYear()}
            {"  ·  "}GSTIN {studio.gstin}
          </p>
          {/* Not yet routed — set as text, as in the Figma frame. */}
          <p>PRIVACY{"  ·  "}TERMS</p>
        </div>
      </div>
    </footer>
  );
}
