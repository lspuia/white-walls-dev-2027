import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

/* latin-ext, not latin: Mizo needs U+1E6D (ṭ) and U+1E6C (Ṭ), which fall
   outside the default subset and would silently fall back mid-word. */
const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whitewalls.in"),
  title: {
    default: "White Walls — Interior Design Studio, Aizawl",
    template: "%s — White Walls",
  },
  description:
    "Interior design studio in Aizawl, Mizoram. We design the whole room — the layout, the cabinetry, the hardware and the finish — and supply the fittings that hold it together.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "White Walls",
    url: "https://whitewalls.in",
    title: "White Walls — Interior Design Studio, Aizawl",
    description:
      "Interior design, cabinetry and hardware — one studio, whole rooms, since 2017.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
