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
    // Nice-to-have only; "or equivalent" tools are welcome
    niceToHaveTools: {
      area: string;
      tools: string;
    }[];
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
    // Labels for the on-page application form
    linkLabel: string;
    linkPlaceholder: string;
    linkHelp: string;
    messagePlaceholder: string;
  };
  isOpen: boolean;
}

export const openPositions: JobPosition[] = [
  {
    id: "social-media-assistant",
    slug: "social-media-assistant",
    title: "Social Media Assistant (Remote)",
    company: "Lydia Painting LLC",
    location: "Fully Remote",
    locationDetails: "Must be based in Nigeria; collaboration with US Central Time teams",
    workplaceType: "Remote",
    salary: "Based on experience",
    employmentType: "Full-Time / Ongoing Contract",
    department: "Marketing",
    shortSummary: "Plan, create and publish content for a commercial painting company across Instagram, LinkedIn, X and TikTok.",
    aboutCompany:
      "Lydia Painting LLC is a licensed commercial and industrial painting company headquartered in Dallas, Texas. Operating across Texas, Kansas, Oklahoma, and surrounding states, we pride ourselves on \"Painting Client’s Envisioned Future\" through innovation, quality, and client-centric project execution. Our services span from full interior/exterior painting and epoxy flooring to industrial coatings and wallcovering.",
    jobSummary:
      "We are looking for a creative, organized Social Media Assistant to run Lydia Painting’s day-to-day social media across Instagram, LinkedIn, X and TikTok. You will plan, create, write and publish content that showcases our commercial painting projects, shares useful industry knowledge and highlights the people behind our work, while tracking how each channel is growing.",
    keyResponsibilities: [
      {
        title: "Content Planning & Publishing",
        description:
          "Plan, create, write and publish content on Instagram, LinkedIn, X and TikTok, keeping to a consistent schedule of about 3 posts per week on each platform."
      },
      {
        title: "Project Showcases",
        description:
          "Turn photos and videos from our project teams into before, in-progress and completed project posts, reels and short videos."
      },
      {
        title: "Educational & Industry Content",
        description:
          "Write educational posts and short articles on commercial painting, coatings and relevant industry topics."
      },
      {
        title: "Employee Spotlights & Culture",
        description:
          "Create Employee Spotlight features and content that shows our team and company culture."
      },
      {
        title: "Growth & Analytics",
        description:
          "Monitor follower growth, engagement and performance on each platform, and track progress over time."
      },
      {
        title: "Working with Project Teams",
        description:
          "Request before, process and completed footage from project teams for new projects, and keep a library of usable content."
      }
    ],
    scopeOfWork: [
      "Manage Lydia Painting’s Instagram, LinkedIn, X and TikTok accounts",
      "Publish about 3 posts per week on each platform",
      "Write captions, posts and short articles",
      "Edit photos and short-form videos from project sites",
      "Keep content focused on commercial painting and in line with our professional brand style",
      "Respond to comments and messages",
      "Track follower growth and engagement on each platform"
    ],
    preferredToolsAndSkills: {
      niceToHaveTools: [
        { area: "Video & reels", tools: "CapCut" },
        { area: "Design", tools: "Canva, Figma or Photoshop" },
        { area: "Scheduling & publishing", tools: "Meta Business Suite, Buffer, Hootsuite, Later or Sprout Social" },
        { area: "Analytics & reporting", tools: "LinkedIn Page Analytics, Meta Insights or TikTok Analytics" },
        { area: "Planning & collaboration", tools: "Google Workspace, Notion, Trello or Asana" },
        { area: "AI assistants", tools: "ChatGPT, Canva or Gemini" }
      ],
      coreSkills: [
        "Copywriting & caption writing",
        "Short-form video editing",
        "Photo editing & simple graphic design",
        "Content planning & scheduling",
        "Basic social media analytics",
        "Community engagement"
      ],
      specializedAreas: [
        "Before / process / completed project storytelling",
        "Employee & company culture content",
        "Educational B2B content"
      ],
      bonus: [
        "Experience creating content for construction, trades or B2B companies",
        "Experience growing a TikTok or Instagram Reels audience"
      ]
    },
    deliverables: [
      "About 3 posts per week on each platform (Instagram, LinkedIn, X and TikTok)",
      "Project showcase content for new and completed projects",
      "Regular educational posts and Employee Spotlight features",
      "Monthly growth and performance updates for each platform"
    ],
    qualifications: [
      "1+ year of experience managing social media for a business or brand (in-house, agency or freelance).",
      "A portfolio of posts, videos or accounts you have created or managed.",
      "Strong written English and copywriting skills.",
      "Comfortable editing photos and short-form video.",
      "Organized and reliable, with the ability to work independently across time zones.",
      "A degree in Marketing, Communications or a related field is a plus."
    ],
    whyJoin: [
      "Run real social media accounts for an established US commercial painting company.",
      "See your work published every week and build a strong portfolio.",
      "A supportive, remote-friendly team that values quality and consistency."
    ],
    durationAndReporting: {
      duration: "Ongoing engagement with monthly reviews",
      reportingTo: "Directly to the Operations Manager and the CEO",
      collaboratesWith: "Project teams, who supply project photos and videos"
    },
    howToApply: {
      email: "Info@lydiapainting.com",
      subject: "Remote Social Media Assistant Application",
      requirements: [
        "Resume / CV",
        "Cover letter",
        "Portfolio or links to accounts / content you have managed"
      ],
      deadline: "Rolling applications (early submission encouraged)",
      linkLabel: "Portfolio or Work Samples Link",
      linkPlaceholder: "https://drive.google.com/... or portfolio link",
      linkHelp: "Provide a publicly accessible link to your portfolio, reels, or Google Drive folder.",
      messagePlaceholder: "Briefly highlight your experience with social media management, content creation, and tools..."
    },
    isOpen: true
  },
  {
    id: "junior-accountant",
    slug: "junior-accountant",
    title: "Junior Accountant (Remote)",
    company: "Lydia Painting LLC",
    location: "Fully Remote",
    locationDetails: "Must be based in Nigeria; flexible hours with reasonable overlap with US Central Time business hours",
    workplaceType: "Remote",
    salary: "Based on experience",
    employmentType: "Full-Time (3-month probation)",
    department: "Finance & Accounting",
    shortSummary: "Own day-to-day accounting for a US commercial painting company: job costing, receivables, payables, reconciliations and cash-flow reporting.",
    aboutCompany:
      "Lydia Painting LLC is a licensed commercial and industrial painting company headquartered in Dallas, Texas. Operating across Texas, Kansas, Oklahoma, and surrounding states, we pride ourselves on \"Painting Client’s Envisioned Future\" through innovation, quality, and client-centric project execution. Our services span from full interior/exterior painting and epoxy flooring to industrial coatings and wallcovering.",
    jobSummary:
      "The Junior Accountant is a hands-on accounting role, not a training-only internship. You will take ownership of project job costing, accounts receivable and collections, accounts payable, reconciliations and weekly cash-flow reporting. You will keep accurate, audit-ready records, meet deadlines, flag issues early and recommend practical improvements. Your work will directly support management decisions and help build the company's long-term accounting structure.",
    keyResponsibilities: [
      {
        title: "Project Profitability & Job Costing",
        description:
          "Track labor, materials, subcontractor and equipment costs by project and cost code, compare actuals with estimates, budgets and change orders, and explain material variances."
      },
      {
        title: "Accounts Receivable & Collections",
        description:
          "Prepare or verify customer invoices, maintain the AR aging report, follow up on payments professionally by email and phone, and prepare a weekly collection forecast."
      },
      {
        title: "Accounts Payable & Vendors",
        description:
          "Review, code and record vendor and subcontractor invoices, maintain the AP aging report, reconcile vendor accounts and prepare payment recommendations for approval."
      },
      {
        title: "Reconciliations & Month-End Close",
        description:
          "Prepare bank, credit-card, customer, vendor and balance-sheet reconciliations on schedule, resolve reconciling items and keep audit-ready support for every entry."
      },
      {
        title: "Cash-Flow & Management Reporting",
        description:
          "Prepare weekly summaries of receivables, collections, payables and cash needs, and support rolling cash-flow forecasts with figures traceable to source records."
      },
      {
        title: "Systems, Records & Process Improvement",
        description:
          "Work accurately in QuickBooks, Excel and company systems, keep electronic files orderly, and propose practical fixes for repeated errors and inefficient workflows."
      }
    ],
    scopeOfWork: [
      "Maintain project-level cost and revenue schedules and support project financial closeout",
      "Work with Operations to resolve missing documentation, miscoded costs and unbilled work",
      "Identify billing disputes, retainage, short payments and payment delays early and escalate them",
      "Investigate duplicate invoices, incorrect charges and missing vendor credits",
      "Support month-end close, financial-statement preparation and year-end requests from tax advisors",
      "Follow strict internal controls and segregation of duties: you prepare transactions, others approve and release funds",
      "Report any suspected errors, fraud or control gaps promptly to the Founder/CEO",
      "Treat all financial, customer and vendor information as confidential"
    ],
    preferredToolsAndSkills: {
      niceToHaveTools: [
        { area: "Accounting software", tools: "QuickBooks Online or QuickBooks Desktop" },
        { area: "Spreadsheets", tools: "Microsoft Excel or Google Sheets" },
        { area: "Files & collaboration", tools: "Google Drive, OneDrive or Dropbox" },
        { area: "Project management", tools: "Construction or project-management software" }
      ],
      coreSkills: [
        "Accounts receivable & collections",
        "Accounts payable",
        "Bank & balance-sheet reconciliations",
        "Month-end close support",
        "Strong Excel / spreadsheet skills",
        "Clear written & verbal communication"
      ],
      specializedAreas: [
        "Job costing & project profitability",
        "Cash-flow forecasting",
        "Variance analysis"
      ],
      bonus: [
        "Construction or contractor accounting experience (job costing, retainage, change orders)",
        "Experience working with US-based companies or customers",
        "ICAN, ACCA or similar certification (completed or in progress)"
      ]
    },
    deliverables: [
      "Current, supported and reconciled AR and AP records",
      "Weekly AR, collections, AP and cash-needs summary",
      "Accurate project cost and profitability reporting, with margin variances flagged promptly",
      "Assigned reconciliations and close tasks completed on schedule with clear supporting schedules"
    ],
    qualifications: [
      "Bachelor’s degree or HND in Accounting, Finance or a related field.",
      "1–2 years of hands-on accounting or bookkeeping experience (AR, AP and reconciliations).",
      "Solid understanding of accounting principles and month-end close.",
      "Strong spreadsheet skills and close attention to detail.",
      "Professional written and spoken English, including confident payment follow-up by phone and email.",
      "Reliable and organized, with high integrity and respect for confidentiality."
    ],
    whyJoin: [
      "A hands-on role with real ownership, not a training-only internship.",
      "Your work directly supports management decisions at a growing US company.",
      "Help build the company's long-term accounting structure and processes.",
      "Remote, results-based role with flexible working hours."
    ],
    durationAndReporting: {
      duration: "Full-time, indefinite term, with a 3-month probationary period",
      reportingTo: "The Founder/CEO, with daily direction and review from the Staff Accountant/Bookkeeper",
      collaboratesWith: "The Operations Manager, for project, customer, vendor and cost information"
    },
    howToApply: {
      email: "Info@lydiapainting.com",
      subject: "Remote Junior Accountant Application",
      requirements: [
        "Resume / CV",
        "Cover letter",
        "A short note on the accounting systems you have used"
      ],
      deadline: "Rolling applications (early submission encouraged)",
      linkLabel: "Resume / CV Link",
      linkPlaceholder: "https://drive.google.com/... or LinkedIn profile",
      linkHelp: "Provide a publicly accessible link to your resume (Google Drive, Dropbox or LinkedIn).",
      messagePlaceholder: "Briefly describe your accounting experience (AR/AP, reconciliations, job costing) and the systems you have used..."
    },
    isOpen: true
  }
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return openPositions.find((job) => job.slug === slug);
}
