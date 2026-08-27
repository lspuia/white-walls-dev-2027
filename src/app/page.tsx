import { Hero } from "@/components/home/hero";
import { Statement } from "@/components/home/statement";
import { Philosophy } from "@/components/home/philosophy";
import { Products } from "@/components/home/products";
import { Services } from "@/components/home/services";
import { Contact } from "@/components/home/contact";

/* Section 04 — Gallery / Selected Interiors — is hidden in the Figma frame
   pending photography and is deliberately not built. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Philosophy />
      <Products />
      <Services />
      <Contact />
    </>
  );
}
