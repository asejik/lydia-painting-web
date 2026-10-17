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
      deadline: "Rolling applications (early submission encouraged)"
    },
    isOpen: true
  }
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return openPositions.find((job) => job.slug === slug);
}
