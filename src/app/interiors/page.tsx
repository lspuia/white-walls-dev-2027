import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = { title: "Interiors" };

export default function InteriorsPage() {
  return <PageTitle eyebrow="Selected work" title="Interiors" />;
}
