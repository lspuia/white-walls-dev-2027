const SERVICES = [
  {
    n: "01",
    name: "Interior Design",
    body: "Full-scope residential and commercial design — planning, drawings, cabinetry detailing and site supervision.",
  },
  {
    n: "02",
    name: "Custom Kitchens",
    body: "Our specialism. Kitchens designed around how you actually cook, built with Hettich systems.",
  },
  {
    n: "03",
    name: "Hardware & Supply",
    body: "Authorised dealership for Hettich and Brassage — specified and supplied to the project.",
  },
] as const;

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="band bg-sand">
      <div className="shell flex flex-col gap-[52px] tab:gap-[76px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">What we do</p>
          <h2
            id="services-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            From the first drawing to the final handle
          </h2>
        </div>

        {/* Three columns on desktop; stacked on tablet and mobile. */}
        <ul className="grid gap-[48px] desk:grid-cols-3 desk:gap-[60px]">
          {SERVICES.map((service) => (
            <li key={service.n} className="flex flex-col gap-[18px] pt-[30px]">
              <div aria-hidden className="h-px w-full bg-rule" />
              <p className="mt-[14px] text-[0.813rem] tracking-[0.154em] text-bronze">
                {service.n}
              </p>
              <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                {service.name}
              </h3>
              <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
