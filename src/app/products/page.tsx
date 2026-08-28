import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Brands and categories supplied by White Walls — kitchen and furniture hardware, brass ironmongery, glass installations and electric fireplaces.",
};

export default function ProductsPage() {
  return (
    <>
      <PageTitle eyebrow="Products & dealerships" title="Products" />

      <section className="bg-bone pb-[64px] tab:pb-[72px]">
        <div className="shell flex justify-center">
          <p className="max-w-[820px] text-center text-[length:var(--text-lead)] leading-[1.8] text-soft">
            The fittings behind the finish. We specify and supply the hardware,
            surfaces and fixtures that go into the rooms we design.
          </p>
        </div>
      </section>

      {/* Card grid, matching the Interiors page. */}
      <section aria-label="Products and dealerships" className="bg-bone pb-[var(--pad-y)]">
        <div className="shell">
          <ul className="grid grid-cols-1 gap-x-[34px] gap-y-[52px] tab:grid-cols-2 desk:grid-cols-3">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
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
