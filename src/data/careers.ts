export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  locationDetails: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  salary: string;
  employmentType: string;
  department: string;
  shortSummary: string;
  aboutCompany: string;
  jobSummary: string;
  keyResponsibilities: {
    title: string;
    description: string;
  }[];
  scopeOfWork: string[];
  preferredToolsAndSkills: {
    mandatory: string[];
    coreSkills: string[];
    specializedAreas: string[];
    bonus: string[];
  };
  deliverables: string[];
  qualifications: string[];
  whyJoin: string[];
  durationAndReporting: {
    duration: string;
    reportingTo: string;
    collaboratesWith: string;
  };
  howToApply: {
    email: string;
    subject: string;
    requirements: string[];
    deadline: string;
  };
  isOpen: boolean;
}

export const openPositions: JobPosition[] = [
  {
    id: "social-media-communications-manager",
    slug: "social-media-communications-manager",
    title: "Social Media & Communications Manager (Remote)",
    company: "Lydia Painting LLC",
    location: "Fully Remote",
    locationDetails: "Must be based in Nigeria; collaboration with US Central Time teams",
    workplaceType: "Remote",
    salary: "Based on experience",
    employmentType: "Full-Time / Ongoing Contract",
    department: "Marketing & Communications",
    shortSummary: "Drive brand growth, digital storytelling, and B2B engagement across digital channels for a premier commercial painting firm.",
    aboutCompany:
      "Lydia Painting LLC is a licensed commercial and industrial painting company headquartered in Dallas, Texas. Operating across Texas, Kansas, Oklahoma, and surrounding states, we pride ourselves on \"Painting Client’s Envisioned Future\" through innovation, quality, and client-centric project execution. Our services span from full interior/exterior painting and epoxy flooring to industrial coatings and wallcovering.",
    jobSummary:
      "We are seeking a dynamic, creative, and organized social media & communication manager to build and manage Lydia Painting’s brand presence online. The ideal candidate will develop engaging digital content, drive strategic campaigns, and support the company’s visibility across platforms from estimation to project handover.",
    keyResponsibilities: [
      {
        title: "Strategy & Growth",
        description:
          "Develop and execute an integrated social media strategy (LinkedIn, Instagram, Facebook, X, Threads, YouTube) to reach B2B audiences (contractors, property managers, business owners)."
      },
      {
        title: "Content Creation",
        description:
          "Produce engaging posts, reels, stories, and videos highlighting project lifecycles (bids, awards, execution, handovers), team expertise, and industry innovation."
      },
      {
        title: "Community Management",
        description:
          "Respond to comments/messages, foster engagement, and manage reviews across all platforms."
      },
      {
        title: "Analytics & Optimization",
        description:
          "Track KPIs (LinkedIn Analytics, platform insights) to refine strategy and report monthly."
      },
      {
        title: "Cross-Functional Collaboration",
        description:
          "Coordinate with estimators, project managers, and site teams to gather real-time content and align with operational milestones."
      },
      {
        title: "Trend Integration",
        description:
          "Sync content with industry trends, societal topics, and Lydia’s brand voice."
      }
    ],
    scopeOfWork: [
      "Manage all existing and future digital platforms (LinkedIn, Website, Instagram, etc.)",
      "Develop and post visual/audio/video content",
      "Monitor and respond to audience engagement",
      "Align content to Lydia’s brand identity, values, and tone",
      "Reflect real-time activities across business operations",
      "Sync content with societal trends and relevant industry topics",
      "Monitor LinkedIn Analytics and other platform insights",
      "Promote thought leadership, project highlights, and training activities"
    ],
    preferredToolsAndSkills: {
      mandatory: [
        "Canva",
        "Adobe Creative Suite (Premiere Pro, Photoshop, Illustrator, XD)"
      ],
      coreSkills: [
        "Video editing & post-production",
        "Motion graphics",
        "SEO / keyword optimization",
        "UGC (User-Generated Content) strategies",
        "Campaign planning & scheduling",
        "Social listening & trend mining"
      ],
      specializedAreas: [
        "Motion Graphics Design",
        "User-Generated Content Strategy",
        "Social Listening & Trend Mining"
      ],
      bonus: [
        "Influencer collaboration experience",
        "\"Engagement squad\" tactics & grassroots digital outreach"
      ]
    },
    deliverables: [
      "Monthly content calendar + performance reports",
      "3–5 weekly posts/platform (incl. reels/stories)",
      "Campaign assets for milestones (Bidding, contract awards, Implementation, handovers)",
      "Curated asset bank (photos, videos, testimonials)"
    ],
    qualifications: [
      "Bachelor’s degree in Marketing, Communications, or related field.",
      "3+ years in social media management (B2B/construction/industrial experience preferred).",
      "Portfolio showcasing successful campaigns, content design, and storytelling.",
      "Expert verbal and written communication skills.",
      "Proactive, data-driven, and adept at remote collaboration across time zones."
    ],
    whyJoin: [
      "Autonomy to shape a growing brand’s digital future.",
      "Impact-driven role with direct business influence.",
      "Collaborative culture focused on excellence and innovation."
    ],
    durationAndReporting: {
      duration: "Ongoing engagement with monthly reviews",
      reportingTo: "Directly to the Operations Manager and the CEO",
      collaboratesWith: "Project Managers, Estimators, and Site Teams"
    },
    howToApply: {
      email: "Info@lydiapainting.com",
      subject: "Remote Social Media Manager Application",
      requirements: [
        "Resume / CV",
        "Cover letter",
        "Portfolio or links to past work / campaigns"
      ],
      deadline: "Rolling applications (early submission encouraged)"
    },
    isOpen: true
  }
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return openPositions.find((job) => job.slug === slug);
}
