import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return <PageTitle eyebrow="Products & dealerships" title="Products" />;
}
