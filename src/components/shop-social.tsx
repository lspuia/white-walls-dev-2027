import { SocialButtons } from "./social-buttons";
import { SOCIAL } from "@/lib/site";

/**
 * The retail accounts, shown on the Products pages. The footer carries the
 * studio's own accounts sitewide; these are the shop's.
 */
export function ShopSocial() {
  return (
    <section aria-labelledby="shop-social-heading" className="shell pb-[var(--pad-y)]">
      <div className="flex flex-col items-center gap-[18px] text-center">
        <h2
          id="shop-social-heading"
          className="eyebrow tracking-[0.208em] text-bronze"
        >
          Follow the shop
        </h2>
        <p className="max-w-[560px] text-[length:var(--text-body)] leading-[1.82] text-soft">
          New stock, arrivals and finished installations — posted on the White
          Walls Products pages.
        </p>
        <SocialButtons links={SOCIAL.products} className="mt-[6px] justify-center" />
      </div>
    </section>
  );
}
