import PageHeader from "@/components/layout/PageHeader";
import Capabilities from "@/components/sections/Capabilities";
import TrustIndicators from "@/components/sections/TrustIndicators";

export const metadata = {
  title: "About Us | Lydia Painting",
  description: "Learn about Lydia Painting, a veteran and minority-owned commercial painting company in Texas.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="About Us"
        description="Founded in 2019, we are a veteran and minority-owned gold standard commercial painting company dedicated to diversity, community, and unmatched craftsmanship."
      />
      <TrustIndicators />
      <Capabilities />
    </div>
  );
}