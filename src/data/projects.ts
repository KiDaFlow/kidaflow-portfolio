export interface Project {
  id: string;
  title: string;
  shortSummary: string;
  longDescription: string;
  tags: string[];
  tools: string[];
  video: {
    type: "loom" | "youtube";
    url: string;
    fallbackUrl?: string;
  } | null;
  screenshots: string[];
  testimonial?: {
    quote: string;
    author?: string;
    roleOrCompany?: string;
  };
  outcomes?: string[];
  date?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "akwaaba-social-automation",
    title: "Akwaaba App – Social Posting Automation",
    shortSummary: "Automated Twitter threads and LinkedIn posts using Google Sheets as the content hub, Buffer for scheduling, and OpenAI for copy tweaks.",
    longDescription: "We replaced manual scheduling and VA dependency with a resilient pipeline: Sheets → OpenAI enrichment → Buffer scheduling for Twitter and LinkedIn. Runs daily on a timed schedule with error visibility and simple content operations.",
    tags: ["Content", "Scheduling", "Social"],
    tools: ["Make", "Buffer", "OpenAI", "Google Sheets"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/ede761e0da314348bb2ea15405cc2a35",
      fallbackUrl: "https://www.loom.com/share/ede761e0da314348bb2ea15405cc2a35"
    },
    screenshots: [],
    testimonial: { quote: "Awesome experience" },
    outcomes: ["Daily hands-off scheduling", "Unified content source of truth", "Faster pipeline with fewer errors"],
    featured: true
  },
  {
    id: "legal-ocr-whatsapp",
    title: "Automate OCR + Whatsapp + GoHighlevel for Legal Firms (Harry AAB)",
    shortSummary: "End-to-end intake: WhatsApp uploads → OCR → structured data → validation → CRM. Reduces manual document reading.",
    longDescription: "Clients upload IDs, proof of address, and statements via WhatsApp. n8n orchestrates Mistral OCR, validates quality, extracts fields (name, DOB, address, doc type, amounts), normalises data, and populates the CRM. Blurry or incomplete docs trigger re-upload prompts for clean pipelines.",
    tags: ["Agents", "Ops", "OCR", "WhatsApp", "CRM"],
    tools: ["n8n", "Mistral OCR", "WhatsApp", "GoHighLevel"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/27f31a035f894258b41e435431216670?sid=612b4ede-7d34-4c49-95a4-97003048c7ff",
      fallbackUrl: "https://drive.google.com/file/d/10my-vKwXjsvkbysmqvUZFtBrsdho7qSE/view"
    },
    screenshots: [],
    testimonial: {
      quote: "They listened, over-delivered, and improved the brief. Communication, delivery, and execution were top tier. 100% recommend."
    },
    outcomes: ["Minutes to structured data", "Lower errors in intake", "Faster case throughput"],
    featured: true
  },
  {
    id: "ai-voice-plumbing",
    title: "AI Voice Agent for Plumbing (ServiceTitan ↔ Zapier ↔ GHL / Retell ↔ n8n)",
    shortSummary: "Booking + price enquiries via AI voice. Two variants shipped: GHL+Zapier and Retell+n8n, integrated with ServiceTitan.",
    longDescription: "An AI voice agent that captures caller context, confirms details, estimates ranges, and books slots. Webhooks push transcripts and structured call data to the CRM/Sheets. Designed for service businesses; swappable CRM and knowledge base.",
    tags: ["AI Voice", "Booking", "CRM", "Service"],
    tools: ["Retell", "n8n", "GoHighLevel", "Zapier", "ServiceTitan", "Google Sheets"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/eeb852c201d142a58f1bde1bdaa20be9",
      fallbackUrl: "https://www.loom.com/share/eeb852c201d142a58f1bde1bdaa20be9"
    },
    screenshots: [],
    testimonial: {
      quote: "Did an amazing job. Clear communication, on-time milestones, rock-solid integrations. Highly recommend."
    },
    outcomes: ["Automated bookings", "Clean CRM data", "Faster response times"]
  },
  {
    id: "viral-content-os",
    title: "AI Viral Content OS",
    shortSummary: "Cross-platform discovery of viral content with structured analysis and Airtable-driven recreation workflows.",
    longDescription: "Aggregates TikTok/Instagram/YouTube/Twitter/LinkedIn/Facebook by keyword or hashtag, scores performance, and stores insights in Airtable to generate scripts and briefs for rapid production.",
    tags: ["Content", "Research", "Automation"],
    tools: ["Airtable", "OpenAI", "APIs"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/778312af88d745c993fd76ee934bca28",
      fallbackUrl: "https://www.loom.com/share/778312af88d745c993fd76ee934bca28"
    },
    screenshots: []
  },
  {
    id: "upwork-discord-alerts",
    title: "Upwork → Discord Job Alerts (AI Video niche)",
    shortSummary: "Hourly Upwork scraping with duplicate filtering and relevance checks; instant Discord notifications for target roles.",
    longDescription: "Targets AI video ad editing tasks via API calls, runs hourly, filters noise, and posts clean, ready-to-review briefs to Discord channels.",
    tags: ["Ops", "Notifications", "Lead Gen"],
    tools: ["Upwork API", "Discord", "n8n/AnyTask"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/8d483d0afdcb47ada737c48848ef8e63",
      fallbackUrl: "https://www.loom.com/share/8d483d0afdcb47ada737c48848ef8e63"
    },
    screenshots: []
  },
  {
    id: "automated-proposals",
    title: "Automated Proposals for Coaches/Consultants/Sales",
    shortSummary: "Monday CRM stages trigger OpenAI-crafted proposals sent via PandaDoc for faster, on-brand closers.",
    longDescription: "Detects stage changes, drafts tailored proposals, and dispatches via PandaDoc with tracking. Reduces turnaround and improves win rate with consistent templates.",
    tags: ["CRM", "Docs", "Sales"],
    tools: ["Monday.com", "OpenAI", "PandaDoc"],
    video: {
      type: "youtube",
      url: "https://youtu.be/psr2tFS1Npw",
      fallbackUrl: "https://youtu.be/psr2tFS1Npw"
    },
    screenshots: []
  },
  {
    id: "ai-booking-system",
    title: "AI Booking System (n8n + Cal.com)",
    shortSummary: "Books, cancels, and reschedules via natural language; prevents user errors and keeps stateful memory.",
    longDescription: "Connects to Cal.com for real-time availability, guards against invalid transitions, and integrates with CRMs/SMS/voice for full-funnel scheduling.",
    tags: ["Booking", "Agents", "Calendars"],
    tools: ["n8n", "Cal.com", "OpenAI"],
    video: {
      type: "youtube",
      url: "https://youtu.be/LgzQkw_y1OU",
      fallbackUrl: "https://youtu.be/LgzQkw_y1OU"
    },
    screenshots: []
  },
  {
    id: "lovable-proposal-automation",
    title: "Lovable × Proposal Automation",
    shortSummary: "Generate branded proposals via Lovable AI and send through PandaDoc/Google Slides with dynamic placeholders.",
    longDescription: "Automates proposal generation with client-specific data, assets, and pricing tables; outputs clean deliverables ready to share.",
    tags: ["Docs", "Sales", "Templates"],
    tools: ["Lovable", "PandaDoc", "Google Slides", "OpenAI"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/ca0ac6989eb649429e4e86d918fad8ea",
      fallbackUrl: "https://www.loom.com/share/ca0ac6989eb649429e4e86d918fad8ea"
    },
    screenshots: []
  },
  {
    id: "slack-inventory-assistant",
    title: "Slack-Powered Inventory Assistant for Hotels",
    shortSummary: "AI monitors stock, alerts on thresholds, and generates purchase orders; centralised data with Slack commands.",
    longDescription: "Turns manual inventory into proactive ops. Staff request checks and restocks in Slack; system maintains a single source of truth and scales to WhatsApp/guest-facing flows.",
    tags: ["Ops", "Slack", "Agents"],
    tools: ["Slack", "Datastore", "APIs", "OpenAI"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/1ceef7e58da54441ac1fa15649dad0ed",
      fallbackUrl: "https://www.loom.com/share/1ceef7e58da54441ac1fa15649dad0ed"
    },
    screenshots: []
  },
  {
    id: "gohighlevel-suite",
    title: "GoHighLevel Funnels, Workflows & Automations",
    shortSummary: "A suite of automations: confirmations, no-show follow-ups, missed-call text-back, FAQ AI replies, IG DM replies, reactivation, and reviews.",
    longDescription: "Reusable GHL assets covering the customer journey—engagement, recovery, and advocacy—ready to clone and adapt per client.",
    tags: ["CRM", "Engagement", "Retention"],
    tools: ["GoHighLevel", "SMS", "Email", "Instagram"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/2b164b25e88849a28676720b8b3157eb",
      fallbackUrl: "https://www.loom.com/share/2b164b25e88849a28676720b8b3157eb"
    },
    screenshots: []
  },
  {
    id: "replace-calendly",
    title: "Replace Calendly with an AI Booking Agent",
    shortSummary: "Conversational bookings via n8n + OpenAI + Cal.com; extensible to CRM/SMS/voice.",
    longDescription: "A Calendly-class experience with AI at the core: understands intent, proposes slots, handles reschedules/cancellations, and logs activity to your stack.",
    tags: ["Booking", "Agents", "Calendars"],
    tools: ["n8n", "Cal.com", "OpenAI"],
    video: {
      type: "youtube",
      url: "https://youtu.be/LgzQkw_y1OU",
      fallbackUrl: "https://youtu.be/LgzQkw_y1OU"
    },
    screenshots: []
  },
  {
    id: "sales-hiring-workflow",
    title: "Automated Sales Hiring Workflow",
    shortSummary: "Typeform → ClickUp pipeline with stage-based interview emails and follow-up guards.",
    longDescription: "Captures applicants, updates ClickUp stages, auto-sends interview invites at Interviewing 1/2, and flags overdue follow-ups—so no candidate slips through.",
    tags: ["Hiring", "CRM", "Ops"],
    tools: ["Typeform", "ClickUp", "Email", "n8n/Zapier"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/26f80efe0c0d483a90faea48c3678b9c",
      fallbackUrl: "https://www.loom.com/share/26f80efe0c0d483a90faea48c3678b9c"
    },
    screenshots: []
  }
];

export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
export const allTools = Array.from(new Set(projects.flatMap(p => p.tools))).sort();
export const featuredProjects = projects.filter(p => p.featured);