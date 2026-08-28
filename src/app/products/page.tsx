import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { PRODUCTS, type Product } from "@/lib/products";
import { ShopSocial } from "@/components/shop-social";

export const metadata: Metadata = {
  title: "Products",
  description:
    "White Walls retails kitchen and furniture hardware, brass ironmongery, surfaces, glass installations and electric fireplaces from its studio in Aizawl — sold direct, not only into our own projects.",
};

function ProductGroup({
  id,
  heading,
  blurb,
  items,
}: {
  id: string;
  heading: string;
  blurb: string;
  items: Product[];
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="bg-bone pb-[72px]">
      <div className="shell">
        <div className="flex flex-col items-center gap-[10px] pb-[40px] text-center">
          <h2
            id={`${id}-heading`}
            className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink"
          >
            {heading}
          </h2>
          <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
            {blurb}
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-[34px] gap-y-[52px]">
          {items.map((product) => (
            <li
              key={product.slug}
              className="basis-full tab:basis-[calc((100%-34px)/2)] desk:basis-[calc((100%-68px)/3)]"
            >
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col gap-[18px]"
              >
                {product.logo ? (
                  /* Brand tiles open with a white logo card — pure white is
                     used only here, to sit distinct from the bone ground. */
                  <div className="flex aspect-[3/2] w-full items-center justify-center border border-rule bg-white p-[32px]">
                    <Image
                      src={product.logo.src}
                      alt={`${product.name} logo`}
                      width={product.logo.width}
                      height={product.logo.height}
                      className="max-h-[72px] w-auto max-w-full object-contain"
                    />
                  </div>
                ) : product.photo ? (
                  /* Category tiles carry a real photograph, cover-cropped. */
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand">
                    <Image
                      src={product.photo}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1200px) 33vw, (min-width: 834px) 50vw, calc(100vw - 48px)"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderImage ratio="3/4" label={product.name} />
                )}
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink transition-colors group-hover:text-bronze">
                    {product.name}
                  </h3>
                  <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                    {product.tagline}
                  </p>
                  <p className="mt-[4px] text-[length:var(--text-body)] leading-[1.82] text-soft">
                    {product.teaser}
                  </p>
                  {/* The whole tile is the link, but that is not visible at
                      rest — and on a phone there is no hover to reveal it. */}
                  <span className="eyebrow mt-[10px] inline-flex items-center gap-[8px] text-bronze transition-colors group-hover:text-ink">
                    {/* The rule goes on the words, not the flex row — a
                        text-decoration does not propagate into flex items. */}
                    <span className="underline decoration-dotted decoration-1 underline-offset-[6px]">
                      See more
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-[3px]"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageTitle eyebrow="Retail & dealerships" title="Products" />

      <section className="bg-bone pb-[64px] tab:pb-[72px]">
        <div className="shell flex justify-center">
          <p className="max-w-[820px] text-center text-[length:var(--text-lead)] leading-[1.8] text-soft">
            White Walls is a retailer as well as a design studio. We supply
            the brands and categories below direct — to builders, carpenters
            and anyone building or renovating, as well as into our own
            projects. You do not need to be a design client to buy from us.
          </p>
        </div>
      </section>

      {/* Brands and categories are shown as separate groups; the section
          heading carries the kind, so the cards no longer label it. */}
      <ProductGroup
        id="brands"
        heading="Brands"
        blurb="Brands we supply."
        items={PRODUCTS.filter((product) => product.kind === "brand")}
      />

      <ProductGroup
        id="categories"
        heading="Categories"
        blurb="Categories we supply."
        items={PRODUCTS.filter((product) => product.kind === "category")}
      />

      <ShopSocial />
    </>
  );
}
