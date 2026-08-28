import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "White Walls retails kitchen and furniture hardware, brass ironmongery, surfaces, glass installations and electric fireplaces from its studio in Aizawl — sold direct, not only into our own projects.",
};

export default function ProductsPage() {
  return (
    <>
      <PageTitle eyebrow="Retail & dealerships" title="Products" />

      <section className="bg-bone pb-[64px] tab:pb-[72px]">
        <div className="shell flex justify-center">
          <p className="max-w-[820px] text-center text-[length:var(--text-lead)] leading-[1.8] text-soft">
            White Walls is a retailer as well as a design studio. We stock and
            sell the brands below direct — to builders, carpenters and anyone
            building or renovating, as well as into our own projects. You do
            not need to be a design client to buy from us.
          </p>
        </div>
      </section>

      {/* Card grid, matching the Interiors page. */}
      <section aria-label="Products and dealerships" className="bg-bone pb-[var(--pad-y)]">
        <div className="shell">
          {/* flex-wrap rather than grid: with 8 cards the last row holds 2, and
              justify-center centres them. Full rows still fill exactly. */}
          <ul className="flex flex-wrap justify-center gap-x-[34px] gap-y-[52px]">
            {PRODUCTS.map((product) => (
              <li
                key={product.slug}
                className="basis-full tab:basis-[calc((100%-34px)/2)] desk:basis-[calc((100%-68px)/3)]"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col gap-[18px]"
                >
                  <PlaceholderImage ratio="3/4" label={product.name} />
                  <div className="flex flex-col gap-[10px]">
                    <p className="eyebrow tracking-[0.208em] text-bronze">
                      {product.kind === "brand" ? "Brand" : "Category"}
                    </p>
                    <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink transition-colors group-hover:text-bronze">
                      {product.name}
                    </h2>
                    <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                      {product.tagline}
                    </p>
                    <p className="mt-[4px] text-[length:var(--text-body)] leading-[1.82] text-soft">
                      {product.teaser}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
