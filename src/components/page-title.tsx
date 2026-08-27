/** Stub page title band. Centred per the Figma stubs; `align="left"` for
    pages that follow the two-column editorial layout. */
export function PageTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) {
  const left = align === "left";
  return (
    <section className={left ? "bg-bone pt-[var(--pad-y)]" : "band bg-bone"}>
      <div
        className={`shell flex flex-col gap-[24px] ${
          left ? "items-start text-left" : "items-center text-center"
        }`}
      >
        {eyebrow && (
          <p className="eyebrow tracking-[0.208em] text-brass">{eyebrow}</p>
        )}
        <h1 className="font-display text-[length:var(--text-title)] font-light leading-[1.16] tracking-[-0.008em] text-ink">
          {title}
        </h1>
        <div aria-hidden className="mt-[12px] h-px w-[40px] bg-brass" />
      </div>
    </section>
  );
}
