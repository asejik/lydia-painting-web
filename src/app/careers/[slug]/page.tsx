import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  CheckCircle2,
  Sparkles,
  Layers,
  Wrench,
  Award,
  Users2,
  ShieldCheck,
  Send,
  Zap,
  Globe
} from "lucide-react";
import { openPositions, getJobBySlug } from "@/data/careers";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import ShareJobButtons from "@/components/careers/ShareJobButtons";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return openPositions.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Position Not Found | Lydia Painting Careers",
    };
  }

  return {
    title: `${job.title} | Lydia Painting Careers`,
    description: job.shortSummary,
    openGraph: {
      title: `${job.title} | Lydia Painting LLC`,
      description: job.shortSummary,
      type: "website",
    },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden border-b border-brand-orange/20">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-orange text-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> Actively Hiring
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-xs">
                <Globe className="w-3.5 h-3.5 text-brand-orange" /> 100% Remote (Nigeria-Based)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-xs">
                <Briefcase className="w-3.5 h-3.5 text-brand-orange" /> {job.department}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              {job.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-6">
              {job.shortSummary}
            </p>

            {/* Key Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-sans pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Fully Remote</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>US CT Collaboration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <DollarSign className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Full Job Description (8 cols) */}
            <div className="lg:col-span-8 space-y-10">

              {/* 1. About Lydia Painting LLC */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-brand-navy">About Lydia Painting LLC</h2>
                    <p className="text-xs text-slate-500 font-sans">Dallas, Texas • Licensed Commercial & Industrial Coatings</p>
                  </div>
                </div>
                <p className="font-sans text-slate-600 leading-relaxed text-sm sm:text-base">
                  {job.aboutCompany}
                </p>
              </div>

              {/* 2. Job Summary */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <Sparkles className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Job Summary</h2>
                </div>
                <p className="font-sans text-slate-600 leading-relaxed text-sm sm:text-base">
                  {job.jobSummary}
                </p>
              </div>

              {/* 3. Key Responsibilities */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Key Responsibilities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.keyResponsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-orange/40 hover:bg-white transition-all shadow-2xs"
                    >
                      <h4 className="font-heading font-bold text-base text-brand-navy mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                        {resp.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Scope of Work */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Scope of Work</h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Preferred Tools & Skills */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Preferred Tools & Skills</h2>
                </div>

                <div className="space-y-6">
                  {/* Core Skills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-orange" />
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.preferredToolsAndSkills.coreSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-navy text-xs sm:text-sm font-medium rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialized Areas */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Specialized Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.preferredToolsAndSkills.specializedAreas.map((area, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-medium rounded-lg"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nice-to-Have Tools */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      Nice-to-Have Tools
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mb-3">
                      None of these are required. Experience with equivalent tools is just as welcome.
                    </p>
                    <dl className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                      {job.preferredToolsAndSkills.niceToHaveTools.map((item, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-[13.5rem_1fr] gap-0.5 sm:gap-4 px-4 py-2.5 bg-white">
                          <dt className="text-xs sm:text-sm font-semibold text-brand-navy">{item.area}</dt>
                          <dd className="text-xs sm:text-sm text-slate-600">{item.tools}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Bonus */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Bonus Experience
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.preferredToolsAndSkills.bonus.map((b, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium rounded-lg"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Deliverables */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy">
                    <Award className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Key Deliverables</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.deliverables.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-sans font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Qualifications */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Qualifications</h2>
                </div>

                <ul className="space-y-3">
                  {job.qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8. Why Join Lydia Painting? */}
              <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-orange">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white">Why Join Lydia Painting?</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {job.whyJoin.map((reason, idx) => (
                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs">
                      <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Duration & Reporting */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-brand-navy">Duration & Reporting Structure</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Engagement</span>
                    <span className="text-sm font-bold text-brand-navy">{job.durationAndReporting.duration}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Direct Reporting</span>
                    <span className="text-sm font-bold text-brand-navy">{job.durationAndReporting.reportingTo}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Collaborates With</span>
                    <span className="text-sm font-bold text-brand-navy">{job.durationAndReporting.collaboratesWith}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Action & Details Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

              {/* At a glance card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-4 border-b border-slate-100 pb-3">
                  Position Overview
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-sans">
                  <div>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Location</span>
                    <span className="font-semibold text-brand-navy">{job.locationDetails}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Workplace Model</span>
                    <span className="font-semibold text-brand-navy">100% Remote</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Compensation</span>
                    <span className="font-semibold text-brand-navy">{job.salary}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Engagement Type</span>
                    <span className="font-semibold text-brand-navy">{job.employmentType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Application Deadline</span>
                    <span className="font-semibold text-brand-orange">{job.howToApply.deadline}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#apply"
                    className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <Send className="w-4 h-4" />
                    Jump to Application
                  </a>
                </div>
              </div>

              {/* Application Component */}
              <JobApplicationForm job={job} />

              {/* Social Sharing */}
              <ShareJobButtons title={job.title} />

              {/* Need assistance */}
              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-center">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Questions about this role?
                </p>
                <p className="text-xs text-slate-600 mb-3">
                  Reach out to our hiring team directly at:
                </p>
                <a
                  href={`mailto:${job.howToApply.email}?subject=Question:%20${encodeURIComponent(job.title)}`}
                  className="text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-orange underline"
                >
                  {job.howToApply.email}
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
