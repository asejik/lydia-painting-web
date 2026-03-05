import PageHeader from "@/components/layout/PageHeader";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us | Lydia Painting",
  description: "Get in touch with Lydia Painting for a comprehensive consultation and quote on your next commercial painting project.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Ready to bring your envisioned future to life? Reach out to our team of experts today."
      />
      <Contact />
    </div>
  );
}