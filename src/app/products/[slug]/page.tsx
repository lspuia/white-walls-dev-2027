import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { PRODUCTS, productBySlug } from "@/lib/products";
import { ShopSocial } from "@/components/shop-social";

/** Six slots per listing until the real ranges arrive. */
const LISTING_SLOTS = ["01", "02", "03", "04", "05", "06"] as const;

/** Every product page is known at build time, so all render static. */
/** Slugs with their own bespoke route, which takes precedence over this one.
    They must be excluded here or the two collide at build. */
const BESPOKE = ["hettich", "brassage"];

export function generateStaticParams() {
  return PRODUCTS.filter((product) => !BESPOKE.includes(product.slug)).map(
    (product) => ({ slug: product.slug })
  );
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} — ${product.tagline}. Supplied by White Walls, Aizawl.`,
  };
}

export default async function ProductPage(
  props: PageProps<"/products/[slug]">
) {
  const { slug } = await props.params;
  const product = productBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <PageTitle
        eyebrow={product.kind === "brand" ? "Brand" : "Category"}
        title={product.name}
      />

      {/* Intro */}
      <section className="bg-bone pb-[48px] tab:pb-[56px]">
        <div className="shell flex flex-col items-center gap-[18px] text-center">
          <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
            {product.tagline}
          </p>
          <div className="flex max-w-[820px] flex-col gap-[20px]">
            {product.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[length:var(--text-lead)] leading-[1.8] text-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder only. Each brand and category becomes its own small
          brochure page with its own design — this shared template is a
          holding pattern until those are built, not the intended shape. */}
      <section aria-labelledby="range-heading" className="shell pb-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[12px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">The range</p>
          <h2
            id="range-heading"
            className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink"
          >
            What we supply from {product.name}
          </h2>
          <p className="max-w-[620px] text-[length:var(--text-caption)] leading-[1.68] text-mute">
            This page is still being built. Ask us for what you need in the
            meantime — we will quote, and we ship across Mizoram.
          </p>
        </div>

        <ul className="mt-[48px] flex flex-wrap justify-center gap-x-[34px] gap-y-[44px]">
          {LISTING_SLOTS.map((n) => (
            <li
              key={n}
              className="basis-full tab:basis-[calc((100%-34px)/2)] desk:basis-[calc((100%-68px)/3)]"
            >
              <div className="flex flex-col gap-[16px]">
                <PlaceholderImage ratio="4/3" label={`${product.name} ${n}`} />
                <div className="flex flex-col gap-[6px]">
                  <p className="font-display text-[length:var(--text-product)] font-light leading-[1.18] text-ink">
                    Item {n}
                  </p>
                  <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                    Name, finish and size to come
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </section>

      <ShopSocial />

      <WhatsAppBand
        location={`product-${product.slug}`}
        line={`Ask us about ${product.name}.`}
        prefill={`Hello White Walls — I'd like to ask about ${product.name}. `}
      />
    </>
  );
}
