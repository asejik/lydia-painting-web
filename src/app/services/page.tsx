import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services";

export const metadata = {
  title: "Our Services | Lydia Painting",
  description: "Explore our comprehensive commercial painting solutions including epoxy floors, wallcoverings, and eco-friendly paint applications.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Our Services"
        description="From full-service interior and exterior painting to specialized industrial coatings, we possess the expertise to handle projects of any scale and complexity."
      />
      <Services />
    </div>
  );
}