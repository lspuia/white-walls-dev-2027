import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return <PageTitle eyebrow="The studio" title="Profile" />;
}
