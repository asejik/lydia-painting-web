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
        bgImage="https://images.unsplash.com/photo-1510094766536-0cfbb7fea908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D?q=80&w=2000&auto=format&fit=crop"
      />
      <TrustIndicators />
      <Capabilities />
    </div>
  );
}