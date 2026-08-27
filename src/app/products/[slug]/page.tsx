import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { Logo } from "@/components/logo";
import { PRODUCTS, productBySlug } from "@/lib/products";

/** Every product page is known at build time, so all render static. */
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
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

      <section className="shell pb-[var(--pad-y)]">
        <div className="grid gap-[48px] desk:grid-cols-12 desk:gap-x-[40px]">
          <div className="desk:col-span-6">
            <PlaceholderImage ratio="4/3" label={product.name} />
          </div>

          <div className="flex flex-col gap-[22px] desk:col-span-5 desk:col-start-8">
            <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
              {product.tagline}
            </p>
            {product.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[length:var(--text-body)] leading-[1.82] text-soft"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/products"
              className="eyebrow mt-[8px] tracking-[0.176em] text-bronze transition-colors hover:text-ink"
            >
              All products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-near">
        <div className="shell flex flex-col items-center gap-[30px] py-[100px] text-center">
          <Logo reversed className="w-[176px]" />
          <p className="max-w-[620px] font-display text-[length:var(--text-statement)] font-light italic leading-[1.5] text-cream">
            Ask us about {product.name}.
          </p>
          <WhatsAppLink
            location={`product-${product.slug}`}
            prefill={`Hello White Walls — I'd like to ask about ${product.name}. `}
            className="eyebrow tracking-[0.176em] text-brass transition-colors hover:text-cream"
          >
            WhatsApp the studio
          </WhatsAppLink>
        </div>
      </section>
    </>
  );
}
