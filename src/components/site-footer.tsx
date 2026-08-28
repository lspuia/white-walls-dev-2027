import Link from "next/link";
import { Logo } from "./logo";
import { Mizo } from "./mizo";
import { SocialButtons } from "./social-buttons";
import { NAV, studio, mizo } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-wash">
      <div className="shell flex flex-col items-center pt-[64px] tab:pt-[90px] pb-[44px]">
        <Link href="/" aria-label="White Walls — home">
          <Logo className="w-[177px] tab:w-[150px] desk:w-[176px]" />
        </Link>

        <p className="mt-[20px] eyebrow text-[length:var(--text-legal)] tracking-[0.117em] text-soft text-center">
          {studio.city.toUpperCase()}
          <Mizo className="mt-[6px] block">{mizo.footerAddress}</Mizo>
        </p>

        <SocialButtons className="mt-[26px] justify-center" />

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
        </nav>

        <hr className="mt-[60px] h-px w-full border-0 bg-rule" />

        <div className="mt-[28px] flex w-full flex-col items-center gap-[12px] text-center text-[length:var(--text-legal)] tracking-[0.117em] text-mute tab:flex-row tab:justify-between tab:text-left">
          <p>
            © {studio.name.toUpperCase()} {new Date().getFullYear()}
          </p>
          <p className="flex items-center gap-[10px]">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-bronze"
            >
              PRIVACY
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="transition-colors hover:text-bronze">
              TERMS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
