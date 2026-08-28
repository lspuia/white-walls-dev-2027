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

      {/* One teaser per brand or category, alternating side to side. */}
      <div className="bg-bone pb-[var(--pad-y)]">
        {PRODUCTS.map((product, i) => {
          const flipped = i % 2 === 1;
          return (
            <section
              key={product.slug}
              aria-labelledby={`${product.slug}-heading`}
              className="shell py-[40px] tab:py-[52px]"
            >
              <div className="grid items-center gap-[32px] desk:grid-cols-12 desk:gap-x-[40px]">
                <div
                  className={
                    flipped
                      ? "desk:col-span-5 desk:col-start-8 desk:row-start-1"
                      : "desk:col-span-5"
                  }
                >
                  <PlaceholderImage ratio="4/3" label={product.name} />
                </div>

                <div
                  className={`flex flex-col gap-[18px] ${
                    flipped
                      ? "desk:col-span-5 desk:col-start-1 desk:row-start-1"
                      : "desk:col-span-5 desk:col-start-8"
                  }`}
                >
                  <p className="eyebrow tracking-[0.208em] text-bronze">
                    {product.kind === "brand" ? "Brand" : "Category"}
                  </p>
                  <h2
                    id={`${product.slug}-heading`}
                    className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink"
                  >
                    {product.name}
                  </h2>
                  <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                    {product.tagline}
                  </p>
                  <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
                    {product.teaser}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="eyebrow mt-[6px] tracking-[0.176em] text-bronze transition-colors hover:text-ink"
                  >
                    View {product.name}
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
