/** Stub page title band — header, title, footer, per the Figma stubs. */
export function PageTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <section className="band bg-bone">
      <div className="shell flex flex-col items-center gap-[24px] text-center">
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
