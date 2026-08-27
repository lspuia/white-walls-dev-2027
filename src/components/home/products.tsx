const PRODUCTS = [
  {
    name: "Hettich",
    caption: "Kitchen & furniture hardware",
    tint: "rgb(197,185,168)",
  },
  {
    name: "Brassage",
    caption: "Custom brass ironmongery",
    tint: "rgb(202,191,174)",
  },
  {
    name: "Crompton",
    caption: "Built-in kitchen appliances",
    tint: "rgb(208,196,179)",
  },
  {
    name: "Yale & Godrej",
    caption: "Locks, safes, door hardware",
    tint: "rgb(213,202,185)",
  },
  {
    name: "Häfele",
    caption: "Appliances, supplied to order",
    tint: "rgb(219,207,190)",
  },
  {
    name: "Fireplaces",
    caption: "Electric, made to order",
    tint: "rgb(224,213,196)",
  },
] as const;

export function Products() {
  return (
    <section aria-labelledby="products-heading" className="band bg-bone">
      <div className="shell flex flex-col gap-[52px] tab:gap-[76px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <p className="eyebrow tracking-[0.208em] text-brass">
            Products &amp; Dealerships
          </p>
          <h2
            id="products-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            The fittings behind the finish
          </h2>
        </div>

        {/* 2×3 mobile · 3×2 tablet · 6-across desktop */}
        <ul className="grid grid-cols-2 gap-x-[20px] gap-y-[40px] tab:grid-cols-3 desk:grid-cols-6">
          {PRODUCTS.map((product) => (
            <li key={product.name} className="flex flex-col gap-[22px]">
              {/* TODO(assets): replace with the product tile photograph. */}
              <div
                aria-hidden
                className="aspect-[211/300] w-full"
                style={{
                  backgroundImage: `linear-gradient(117.85deg, ${product.tint} 0%, rgb(150,143,135) 42.857%, rgb(132,128,122) 71.429%)`,
                }}
              />
              <h3 className="font-display text-[length:var(--text-product)] font-light leading-[1.18] text-ink">
                {product.name}
              </h3>
              <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                {product.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
