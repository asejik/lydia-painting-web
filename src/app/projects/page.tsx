import PageHeader from "@/components/layout/PageHeader";
import Projects from "@/components/sections/Projects";

export const metadata = {
  title: "Project Portfolio | Lydia Painting",
  description: "View our portfolio of beautifully transformed commercial properties across the Dallas-Fort Worth metroplex and beyond.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Project Portfolio"
        description="A showcase of our masterfully beautified landmarks. We don't just meet expectations; we redefine them."
      />
      <Projects />
    </div>
  );
}