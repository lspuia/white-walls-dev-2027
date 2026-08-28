import Image from "next/image";
import { studio } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[560px] tab:min-h-[720px] desk:min-h-[920px] flex-col items-center justify-center overflow-hidden px-[var(--gutter)] py-[120px]"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] tab:object-center"
        />
        {/*
          Scrim. The Figma gradient alone (0.30 → 0.46 → 0.62) is too light for
          this pale photograph — CLAUDE.md flags the small type over it as
          unreadable, and a flat scrim dark enough to fix the 12.5px brass
          eyebrow would crush the image. So: the designed vertical gradient,
          slightly deepened, plus a soft centre scrim that lifts contrast only
          where the copy block sits. Together they reach ~0.73 behind the type
          while the edges of the photograph stay open. Revisit when the darker
          hero crop lands.
        */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,18,15,0.34)_0%,rgba(20,18,15,0.46)_50%,rgba(20,18,15,0.66)_100%)]" />
      </div>

      <div className="relative flex w-full max-w-[1080px] flex-col items-center gap-[34px] text-center">
        {/* Local scrim, sized to the copy block, so contrast is bought only
            where the type sits rather than across the whole photograph. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-[38%] -inset-y-[22%] tab:-inset-x-[10%] tab:-inset-y-[16%] bg-[radial-gradient(ellipse_at_center,rgba(20,18,15,0.74)_0%,rgba(20,18,15,0.66)_46%,rgba(20,18,15,0.34)_70%,rgba(20,18,15,0)_86%)] blur-[28px]"
        />
        <p className="relative eyebrow tracking-[0.272em] text-cream">
          {studio.city.toUpperCase()}
          {"  ·  "}SINCE {studio.since}
        </p>
        <div aria-hidden className="relative h-px w-[40px] bg-brass" />
        <h1
          id="hero-heading"
          className="relative font-display text-[length:var(--text-display)] font-light italic leading-[1.18] tracking-[-0.011em] text-cream"
        >
          Rooms that hold
          <br />
          their quiet.
        </h1>
        <p className="relative max-w-[640px] text-[length:var(--text-lead)] leading-[1.8] tracking-[0.011em] text-cream">
          Interior design, cabinetry and hardware — one studio, whole rooms, since{" "}
          {studio.since}.
        </p>
      </div>

      <a
        href="#statement"
        className="group absolute bottom-[48px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[14px] tab:flex"
      >
        <span className="text-[length:var(--text-cue)] tracking-[0.218em] text-haze transition-colors group-hover:text-cream">
          SCROLL
        </span>
        <span
          aria-hidden
          className="h-[52px] w-px bg-[#38332d] transition-colors group-hover:bg-brass"
        />
      </a>
    </section>
  );
}
