import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

/** Tile tints, carried over from the Figma strip. */
const TINTS = [
  "rgb(197,185,168)",
  "rgb(202,191,174)",
  "rgb(208,196,179)",
  "rgb(213,202,185)",
  "rgb(219,207,190)",
  "rgb(224,213,196)",
  "rgb(212,200,183)",
  "rgb(206,194,177)",
];

export function Products() {
  return (
    <section aria-labelledby="products-heading" className="band bg-bone">
      <div className="shell flex flex-col gap-[52px] tab:gap-[76px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">
            Retail &amp; Dealerships
          </p>
          <h2
            id="products-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            The brands we stock and sell
          </h2>
          <p className="mt-[4px] max-w-[620px] text-[length:var(--text-body)] leading-[1.82] text-soft">
            Sold direct from the studio, not only into the rooms we design.
          </p>
        </div>

        {/* 2-across mobile · 3 tablet · 4 desktop */}
        <ul className="grid grid-cols-2 gap-x-[20px] gap-y-[40px] tab:grid-cols-3 desk:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-[22px]"
              >
                {/* TODO(assets): replace with the product tile photograph. */}
                <div
                  aria-hidden
                  className="aspect-[211/300] w-full"
                  style={{
                    backgroundImage: `linear-gradient(117.85deg, ${
                      TINTS[i % TINTS.length]
                    } 0%, rgb(150,143,135) 42.857%, rgb(132,128,122) 71.429%)`,
                  }}
                />
                <h3 className="font-display text-[length:var(--text-product)] font-light leading-[1.18] text-ink transition-colors group-hover:text-bronze">
                  {product.name}
                </h3>
                <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                  {product.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
