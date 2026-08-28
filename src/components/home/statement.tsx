import Link from "next/link";

export function Statement() {
  return (
    <section id="statement" className="band bg-bone">
      <div className="shell flex flex-col items-center gap-[36px] text-center">
        <div aria-hidden className="h-px w-[40px] bg-brass" />
        <p className="max-w-[880px] font-display text-[length:var(--text-statement)] font-light leading-[1.72] text-ink">
          White Walls is an interior design studio in Aizawl, working across
          residential and commercial interiors. We design the whole room — the
          layout, the cabinetry, the hardware and the finish — and supply the
          fittings that hold it together.
        </p>
        <Link
          href="/profile"
          className="eyebrow tracking-[0.176em] text-bronze transition-colors hover:text-ink"
        >
          Read our profile
        </Link>
      </div>
    </section>
  );
}
