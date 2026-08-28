/**
 * Page title band — centred, per the Figma stubs. Deliberately compact: the
 * band is a marker between the header and the page, not a hero.
 */
export function PageTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <section className="bg-bone pt-[34px] pb-[30px] tab:pt-[40px] tab:pb-[36px]">
      <div className="shell flex flex-col items-center gap-[16px] text-center">
        {eyebrow && (
          <p className="eyebrow tracking-[0.208em] text-bronze">{eyebrow}</p>
        )}
        <h1 className="font-display text-[length:var(--text-title)] font-light leading-[1.1] tracking-[-0.008em] text-ink">
          {title}
        </h1>
        <div aria-hidden className="h-px w-[40px] bg-brass" />
      </div>
    </section>
  );
}
