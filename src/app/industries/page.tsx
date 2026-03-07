import PageHeader from "@/components/layout/PageHeader";
import Industries from "@/components/sections/Industries";
import Projects from "@/components/sections/Projects";

export const metadata = {
  title: "Industries Served | Commercial Painting | Lydia Painting",
  description: "Lydia Painting provides expert commercial painting services for Multifamily, Healthcare, Retail, Education, and Industrial sectors across DFW.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Industries Served"
        description="Every commercial sector has unique compliance codes, operational schedules, and material requirements. We have the specialized expertise to handle them all."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
      />
      <Industries />
      <Projects />
    </div>
  );
}