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
    longDescription: "Replaced manual scheduling and VA dependency with a resilient automated pipeline that handles social media posting across Twitter and LinkedIn.\n\nHow it works:\n- Google Sheets acts as the central content hub\n- OpenAI enriches and optimizes copy automatically\n- Buffer handles scheduling for both platforms\n- Runs daily on a timed schedule with full error visibility\n\nSimple content operations with complete automation, eliminating the need for manual intervention while maintaining high-quality, consistent posting.",
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
    longDescription: "Complete document intake automation that transforms how legal firms collect and process client documents via WhatsApp.\n\nThe workflow:\n- Clients upload IDs, proof of address, and statements directly through WhatsApp\n- n8n orchestrates Mistral OCR to extract document data\n- System validates document quality automatically\n- Extracts key fields: name, DOB, address, document type, amounts\n- Normalizes data and populates GoHighLevel CRM instantly\n\nBlurry or incomplete documents trigger automatic re-upload prompts, ensuring clean data pipelines and reducing manual review time from hours to minutes.",
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
    longDescription: "AI voice agent that handles customer calls, price inquiries, and appointment bookings automatically for service businesses.\n\nCapabilities:\n- Captures caller context and confirms service details\n- Provides accurate price estimates and ranges\n- Books appointment slots in real-time\n- Pushes call transcripts and structured data to CRM\n- Integrates seamlessly with ServiceTitan\n\nShipped in two variants (GHL+Zapier and Retell+n8n) with swappable CRM and knowledge base. Perfect for plumbing, HVAC, and other service industries needing 24/7 call handling.",
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
    longDescription: "Discover, analyze, and recreate viral content across all major social platforms automatically.\n\nAggregates content from:\n- TikTok, Instagram, YouTube\n- Twitter, LinkedIn, Facebook\n\nSearches by keyword or hashtag, scores performance metrics, and stores actionable insights in Airtable. Automatically generates scripts and creative briefs for rapid content production, turning viral research into executable content strategies.",
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
    longDescription: "Never miss relevant Upwork opportunities with automated job monitoring and instant Discord alerts.\n\nTargets AI video ad editing and related tasks through Upwork API, runs hourly scans, filters out duplicates and irrelevant posts, then delivers clean, ready-to-review job briefs directly to Discord channels. Perfect for freelancers and agencies who want first-mover advantage on high-value projects.",
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
    longDescription: "Eliminate proposal bottlenecks with intelligent automation that creates and sends professional proposals automatically.\n\nDetects Monday CRM stage changes, uses OpenAI to draft tailored, on-brand proposals, then dispatches them via PandaDoc with full tracking enabled. Reduces proposal turnaround time from days to minutes while maintaining consistent quality and improving win rates through faster response times.",
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
    longDescription: "Conversational booking system that understands natural language and manages appointments intelligently.\n\nConnects to Cal.com for real-time availability checking, prevents invalid booking transitions with stateful memory, and integrates seamlessly with CRMs, SMS, and voice channels. Handles bookings, cancellations, and reschedules through simple conversation, eliminating booking errors and providing 24/7 scheduling automation.",
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
    longDescription: "Create professional, branded proposals in minutes with AI-powered automation.\n\nLeverages Lovable AI to generate complete proposals populated with client-specific data, visual assets, and dynamic pricing tables. Outputs to PandaDoc or Google Slides as clean, ready-to-share deliverables. Perfect for agencies and consultants who need to scale proposal creation without sacrificing quality or brand consistency.",
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
    longDescription: "Transform manual inventory tracking into proactive, automated operations through Slack.\n\nAI-powered system monitors stock levels, sends threshold alerts, and generates purchase orders automatically. Staff can request inventory checks and restock orders through simple Slack commands. Maintains a single source of truth for all inventory data and easily scales to WhatsApp or guest-facing channels for expanded functionality.",
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
    longDescription: "Complete suite of GoHighLevel automations covering the entire customer journey.\n\nIncludes:\n- Appointment confirmations and no-show recovery\n- Missed-call text-back automation\n- AI-powered FAQ responses\n- Instagram DM auto-replies\n- Customer reactivation sequences\n- Review request campaigns\n\nReusable, pre-built workflows ready to clone and customize for any client. Covers engagement, recovery, and advocacy stages with proven conversion tactics.",
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
    longDescription: "Calendly-level experience with AI intelligence at its core for natural, conversational booking.\n\nUnderstands booking intent, proposes available time slots, handles reschedules and cancellations automatically, and logs all activity to your existing stack. Extensible to CRM systems, SMS, and voice channels for omnichannel scheduling. Better than traditional booking links because it adapts to conversation flow and handles complex scenarios.",
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
    longDescription: "Streamline your hiring process with automated applicant tracking and communication.\n\nCaptures applications via Typeform, updates ClickUp pipeline stages automatically, sends interview invitations at appropriate stages (Interviewing 1/2), and flags overdue follow-ups. Ensures no candidate slips through the cracks while reducing manual coordination time for hiring managers.",
    tags: ["Hiring", "CRM", "Ops"],
    tools: ["Typeform", "ClickUp", "Email", "n8n/Zapier"],
    video: {
      type: "loom",
      url: "https://www.loom.com/share/26f80efe0c0d483a90faea48c3678b9c",
      fallbackUrl: "https://www.loom.com/share/26f80efe0c0d483a90faea48c3678b9c"
    },
    screenshots: []
  },
  {
    id: "automated-customer-booking",
    title: "Automated Customer Booking System",
    shortSummary: "A 24/7 automated booking system powered by chatbots and calendar integrations. Customers can create, cancel, and reschedule appointments instantly across WhatsApp, Slack, or web chat, eliminating front-desk bottlenecks and scaling operations without extra staff.",
    longDescription: "24/7 automated booking system handling unlimited appointments across multiple channels without human intervention.\n\nKey features:\n- Validates customer details automatically\n- Manages calendars for multiple operators\n- Processes bookings, reschedules, and cancellations\n- Works on WhatsApp, Slack, and web widgets\n- Ensures timezone accuracy\n- Scales infinitely without additional staff\n\nPerfect for service businesses like salons, barbershops, dental clinics, and hotels. Eliminates front-desk bottlenecks and reduces operational costs while improving customer experience.\n\nBuilt from 200+ deployed automation systems. Get the n8n blueprint: https://kidaflow.gumroad.com/l/wygli",
    tags: ["Booking", "Agents", "Automation", "WhatsApp", "Service"],
    tools: ["n8n", "Cal.com", "WhatsApp", "Slack", "OpenAI"],
    video: {
      type: "youtube",
      url: "https://youtu.be/qe38n4yPG5E",
      fallbackUrl: "https://youtu.be/qe38n4yPG5E"
    },
    screenshots: [],
    outcomes: [
      "Automated 24/7 customer bookings with chatbot + calendar",
      "Create, reschedule, and cancel bookings instantly",
      "Works across WhatsApp, Slack, website chat, or voice integrations",
      "Supports timezone syncing and unlimited operators",
      "Built to reduce staffing needs and scale service businesses"
    ],
    featured: true
  },
  {
    id: "cold-email-personalization",
    title: "AI-Powered Cold Email Personalization System",
    shortSummary: "An automation that scrapes real prospect data and generates thousands of personalized cold emails in minutes. Helps agencies, B2B teams, and founders boost reply rates, book more calls, and scale outreach effortlessly.",
    longDescription: "Solve the cold email problem: generic messages get ignored. This system generates thousands of personalized emails using real prospect data automatically.\n\nHow it works:\n- Scrapes data from Instagram, Facebook, TikTok, LinkedIn\n- Generates unique emails with follower counts, ad spend, competitor analysis\n- Tailors messaging with brand-specific insights\n- Runs overnight, fills your inbox with warm leads by morning\n\nResults:\n- Digital marketing agency scaled to 500+ emails/day in 2 weeks\n- Sent 2,000+ emails in 4 days\n- Dramatically improved reply rates and conversions\n\nOutreach that took hours now happens in minutes, letting you focus on closing deals instead of writing emails.",
    tags: ["Email", "Personalization", "Automation", "Lead Gen", "Outreach"],
    tools: ["n8n", "OpenAI", "Instagram API", "Facebook Ads Library", "LinkedIn"],
    video: {
      type: "youtube",
      url: "https://youtu.be/CtWtVXwWytk",
      fallbackUrl: "https://youtu.be/CtWtVXwWytk"
    },
    screenshots: [],
    outcomes: [
      "Scrapes real-time prospect data (Instagram, TikTok, Facebook Ads Library, LinkedIn)",
      "Generates thousands of unique, personalized cold emails instantly",
      "Automates daily outreach schedules (e.g., 2:00 a.m. runs)",
      "Proven to boost reply rates and reduce spam flagging",
      "Scales from 0 to 500+ emails/day with minimal setup"
    ],
    featured: true
  },
  {
    id: "coaching-assistant-automation",
    title: "$10k/m Simple 24/7 Coaching Assistant (Copy This)",
    shortSummary: "A 24/7 AI coaching assistant that turns your playbooks, frameworks, and methods into a digital system. Clients get instant answers in your voice while you scale without burnout.",
    longDescription: "Transform your coaching knowledge into a 24/7 AI assistant that answers client questions in your brand voice.\n\nThe problem:\nCoaches face a bottleneck—clients ask the same 20 questions repeatedly. Scaling from 10 to 1,000+ clients becomes unsustainable without this automation.\n\nHow it works:\n- Slack integration for familiar client experience\n- Airtable handles identity mapping for personalization\n- Supabase stores your proprietary frameworks and playbooks\n- n8n connects everything seamlessly\n\nReal example:\nAntifragile Academy uploaded a 165-page knowledge base. Athletes now get instant, detailed answers about breathing techniques and distraction handling—consistent with the coach's methodology.\n\nBenefits:\n- Save hours weekly on repetitive questions\n- Guarantee consistent, brand-authentic answers 24/7\n- Scale from 10 to 1,000+ clients without quality loss\n- Focus energy on high-value transformation work\n\nThis isn't about replacing coaches—it's about scaling them. Get the workflow: https://kidaflow.gumroad.com/l/jgrmr",
    tags: ["Coaching", "AI", "Automation", "Slack", "Agents"],
    tools: ["n8n", "Slack", "Airtable", "Supabase", "OpenAI"],
    video: {
      type: "youtube",
      url: "https://youtu.be/srg2dLgO8zI",
      fallbackUrl: "https://youtu.be/srg2dLgO8zI"
    },
    screenshots: [],
    outcomes: [
      "24/7 AI coaching assistant built with n8n + Slack",
      "Personalized responses mapped to client identity",
      "Knowledge base loaded with your proprietary methods (Supabase)",
      "Guarantees consistent, brand-authentic answers",
      "Proven for coaches, consultants, and professional programs"
    ],
    featured: true
  }
];

export const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
export const allTools = Array.from(new Set(projects.flatMap(p => p.tools))).sort();
export const featuredProjects = projects.filter(p => p.featured);