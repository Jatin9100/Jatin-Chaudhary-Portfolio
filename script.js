/* ============================================================
   CONFIG — set this to your own form endpoint (Google Apps
   Script, Formspree, etc) to have the contact form POST there.
   Left blank, the form falls back to opening the visitor's
   mail client with a pre-filled message.
   ============================================================ */
const CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfycbxTkzMB0tnwQQ3BTuwSGV-vEK9zHsnQ9Jw_6kWVMvoRmKuuYleN7mOCraxNi206u4It/exec"; // e.g. "https://script.google.com/macros/s/XXXX/exec"
const CONTACT_EMAIL = "jatinchaudhary910official@gmail.com";

/* ============================================================
   DATA — everything preserved from the original site content.
   Edit here; every section below renders from these objects.
   ============================================================ */
const CORE_FOCUS = [
  { icon: "compass", title: "Product Strategy", desc: "Roadmaps that tie execution to business outcomes." },
  { icon: "settings-2", title: "Process Automation", desc: "Re-engineering workflows for speed and reliability." },
  { icon: "bar-chart-3", title: "Data-Driven Execution", desc: "Decisions grounded in analytics, not assumptions." },
  { icon: "bot", title: "Applied AI", desc: "AI embedded directly into enterprise platforms." },
];

const IMPACT_STATS = [
  { value: 1.65, prefix: "₹", suffix: " Cr+", decimals: 2, label: "Documented annual savings" },
  { display: "30–70%+", label: "TAT reduction range" },
  { value: 78, suffix: "%", decimals: 0, label: "Error / penalty reduction" },
  { value: 11, suffix: "+", decimals: 0, label: "Processes enhanced" },
  { value: 4, suffix: "+", decimals: 0, label: "Years in Product & Process" },
];

const TIMELINE = [
  {
    step: "01", role: "Assistant Product Manager — CTO Office",
    org: "Medi Assist TPA · Bangalore", period: "FEB 2026 — PRESENT",
    summary: "Sole PM for 10+ transformation initiatives across the newly merged CTO Office — owning discovery through delivery, with every initiative tied to a quantified operational or cost outcome.",
    detail: [
      { heading: "Product Ownership & Roadmap", items: [
        "End-to-end PM for 10+ concurrent initiatives spanning Product, Engineering, IT, and Ops post-merger",
        "Defined problem statements, prioritized the roadmap, and drove delivery from discovery through GA",
        "Sole owner of executive-facing delivery visibility and program governance for the CTO Office",
      ]},
      { heading: "Shipped Products & Measured Outcomes", items: [
        "AI-assisted internal PM platform, built to replace Zoho — ₹35L in annual licensing savings",
        "Built and trained an AI claims-query chatbot for end customers — cut specific repeat call-centre query volume by 71%",
        "Redesigned customer onboarding into one unified module — TAT cut from 8–9 days to 2–3 days (about 70%)",
        "Owned Support Module Automation from BRD/PRD through UAT to production — ₹40L in annual savings",
        "Rebuilt Recovery Audit Management as a governed workflow — zero missed cases since launch",
      ]},
      { heading: "Stakeholder Leadership & Vendor Governance", items: [
        "Partnered directly with senior leadership to scope requirements and clear delivery blockers",
        "Ran vendor evaluation, commercial negotiation, and SOW closure for 24+ resources — ~₹70L in annual savings with no drop in delivery quality",
      ]},
    ],
  },
  {
    step: "02", role: "Assistant Manager — Business Process Re-Engineering",
    org: "Paramount Health Services & Insurance TPA · Mumbai", period: "MAR 2024 — FEB 2026",
    summary: "Product owner for an in-house enterprise ticketing platform and a new modular Benefits configuration module — embedding AI/ML query automation and re-architecting benefit mapping for new-age policies.",
    detail: [
      { heading: "Product Ownership & Roadmap", items: [
        "Owned the full lifecycle for both initiatives: discovery, requirement gathering, solution design, roadmap, and launch",
        "Defined and sequenced the feature roadmap against business priority and engineering capacity",
      ]},
      { heading: "Shipped Products & Measured Outcomes", items: [
        "Integrated AI/ML query resolution into the ticketing platform — 82% user adoption within 4 months, 30% reduction in turnaround time, and ₹20L in annual savings",
        "Revamped and launched a modular Benefits configuration module supporting multi-level benefit structures for new-age policies — reduced benefit-mapping-related penalties by 78%",
        "Built leadership-facing performance analytics to track adoption and resolution quality post-launch",
      ]},
      { heading: "Stakeholder Leadership", items: [
        "Aligned Product, Engineering, Operations, and Business on requirements and success metrics upfront",
        "Ran feature-prioritization sessions jointly with stakeholders to keep the roadmap accountable",
      ]},
    ],
  },
  {
    step: "03", role: "Senior Executive — Business Process Re-Engineering",
    org: "Paramount Health Services & Insurance TPA · Mumbai", period: "FEB 2023 — MAR 2024",
    summary: "Diagnosed and redesigned 11+ critical business processes using data-driven bottleneck analysis, delivering an average 21% efficiency gain and a 78% cut in manual processing errors across 18+ technology-enabled initiatives.",
    detail: [
      { heading: "Problem Discovery & Solution Design", items: [
        "Ran bottleneck analysis and process mapping across 11+ business processes to surface root causes",
        "Translated findings into redesigned, technology-enabled workflows rather than one-off fixes",
      ]},
      { heading: "Delivery & Measured Outcomes", items: [
        "Delivered 18+ technology initiatives in partnership with Product, Business, and Engineering",
        "Average 21% improvement in process efficiency, with a 78% reduction in manual processing errors",
        "Raised internal user satisfaction scores from 60% to 89% while cutting turnaround time by 30%",
      ]},
      { heading: "Stakeholder Leadership", items: [
        "Partnered cross-functionally to gather requirements and define functional solutions",
        "Built automation strategies designed for reuse, supporting longer-term organizational scale",
      ]},
    ],
  },
  {
    step: "04", role: "Project Co-Ordinator",
    org: "NexGen Integrated Systems · Mumbai", period: "JUN 2022 — FEB 2023",
    summary: "First taste of end-to-end ownership — coordinated 12 concurrent projects at a 96% efficiency rate and led the bidding process for 10+ new engagements, the foundation for the delivery discipline that followed.",
    detail: [
      { heading: "Delivery Ownership", items: [
        "Coordinated 12 concurrent projects end-to-end at a 96% efficiency rate",
        "Led scoping and bidding for 10+ projects with full SOP compliance and documentation",
      ]},
      { heading: "Team & Stakeholder Leadership", items: [
        "Led a 7-member team through assembly and testing to delivery",
        "Built and maintained client relationships to keep scope and deliverables aligned",
      ]},
    ],
  },
];

const CASE_STUDIES = [
  { id:"ai-pm-platform", category:"ai", catLabel:"AI/Automation", tag:"01",
    title:"AI-Assisted Internal Project Management Platform",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Post-merger, the CTO Office ran on standardized Zoho Sprints tooling that didn't reflect how the team actually planned, escalated, or reported — creating licensing cost with limited executive visibility into delivery.",
    approach:[
      "Ran a build-vs-buy evaluation and made the case to replace Zoho with a purpose-built internal platform",
      "Defined the requirements and workflow logic directly from how the merged team actually planned and escalated work",
      "Integrated AI to automate status capture and generate executive-ready delivery reporting",
    ],
    impact:[
      "₹35L in annual licensing savings",
      "Unified execution tracking and reporting across 10+ initiatives",
      "Single source of truth for CTO Office delivery status",
    ],
    pmSkills:["Build vs. buy analysis","AI/ML integration","Cost optimization","0→1 internal tool design"],
    metrics:[{val:"₹35L",label:"Annual savings"},{val:"10+",label:"Initiatives tracked"}],
  },
  { id:"claims-chatbot", category:"ai", catLabel:"AI/Automation", tag:"02",
    title:"AI Claims-Query Chatbot for End Customers",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Call-centre volume was dominated by a set of recurring claims queries customers could self-serve if answered clearly and consistently — but no automated channel existed to intercept them before they reached an agent.",
    approach:[
      "Analyzed recurring call-centre query patterns and existing claims correspondence to identify high-frequency, self-serviceable queries",
      "Defined the chatbot's scope, conversation flows, and training data directly from that query analysis",
      "Built and trained the chatbot, then validated accuracy against real call-centre queries before rollout",
    ],
    impact:[
      "71% reduction in specific repeat query volume at the call centre",
      "Faster, self-serve resolution for customers on high-frequency claims questions",
      "Reduced load on call-centre agents for repetitive queries",
    ],
    pmSkills:["Conversational AI design","Query pattern analysis","0→1 product design","Customer self-service"],
    metrics:[{val:"71%",label:"Fewer repeat queries"},{val:"0→1",label:"New self-serve channel"}],
  },
  { id:"onboarding-transformation", category:"transformation", catLabel:"Process Transformation", tag:"03",
    title:"Enterprise Customer Onboarding Transformation",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Customer onboarding ran as disconnected handoffs across CRM, Operations, and IT with no shared source of truth — pushing turnaround to 8–9 days and leaving leadership blind to where a case actually stood.",
    approach:[
      "Mapped the onboarding journey end-to-end to pinpoint handoff gaps between CRM, Ops, and IT",
      "Designed one unified onboarding module to replace the three disconnected systems of record",
      "Coordinated the cross-functional rollout and change management across all three teams",
    ],
    impact:[
      "TAT cut from 8–9 days to 2–3 days (about 70% reduction)",
      "Real-time process visibility for leadership and customers",
      "Single system of record replacing three disconnected handoffs",
    ],
    pmSkills:["Cross-functional workflow orchestration","Systems integration","Journey mapping & UX redesign"],
    metrics:[{val:"~70%",label:"TAT reduction"},{val:"2–3d",label:"From 8–9 days"}],
  },
  { id:"support-automation", category:"ai", catLabel:"AI/Automation", tag:"04",
    title:"Support & Operational Workflow Automation",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Support and ticketing workflows still ran on manual triage as case volume grew post-merger — creating data-accuracy risk, slow response, and rising manual effort with no automation safety net.",
    approach:[
      "Led requirement elicitation with support and ops teams to map the manual triage workflow end-to-end",
      "Authored the BRD/PRD and business-logic mapping for the automated workflow",
      "Owned UAT and phased production rollout, closing gaps identified during testing before GA",
    ],
    impact:[
      "₹40L in annual operational savings",
      "Reduced manual effort across support operations",
      "Improved data accuracy post-automation",
    ],
    pmSkills:["End-to-end product lifecycle","Requirement elicitation","UAT management","Process automation"],
    metrics:[{val:"₹40L",label:"Annual savings"},{val:"E2E",label:"Lifecycle ownership"}],
  },
  { id:"recovery-audit", category:"governance", catLabel:"Governance", tag:"05",
    title:"Centralized Recovery Audit Management System",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Recovery tracking ran on a fragile, manual Google Apps Script setup with no audit trail, no access control, and real exposure to missed recoveries and penalties.",
    approach:[
      "Audited the existing script-based process to identify failure points and compliance gaps",
      "Defined requirements for a centralized, access-controlled audit-tracking workflow",
      "Migrated recovery tracking off the legacy script onto the new governed system with zero disruption to active cases",
    ],
    impact:[
      "Zero missed recovery or penalty cases since implementation",
      "Full audit trail and access control on every recovery case",
      "Materially faster recovery-tracking turnaround",
    ],
    pmSkills:["Risk mitigation","Tech-debt reduction","Legacy system migration"],
    metrics:[{val:"Zero",label:"Missed cases"},{val:"↓",label:"Recovery TAT"}],
  },
  { id:"vendor-governance", category:"governance", catLabel:"Governance", tag:"06",
    title:"Vendor & Resource Engagement Governance Framework",
    org:"Medi Assist TPA — CTO Office · 2026",
    problem:"Third-party resourcing across 24+ engineering and operations roles had no consistent evaluation, negotiation, or delivery-governance process — leaving cost and delivery risk largely unmanaged.",
    approach:[
      "Ran structured vendor evaluation and commercial negotiation for every engagement",
      "Standardized SOW finalization and delivery-tracking checkpoints across all vendors",
      "Held vendors to the same delivery-quality bar as negotiated cost targets, engagement by engagement",
    ],
    impact:[
      "₹70L annual reduction in third-party spend",
      "No compromise to delivery quality or timelines across 24+ resources",
    ],
    pmSkills:["Vendor governance","Budget management","Commercial negotiation","Agile resource planning"],
    metrics:[{val:"₹70L",label:"Annual savings"},{val:"24+",label:"Resources negotiated"}],
  },
  { id:"ticketing-platform", category:"ai", catLabel:"AI/Automation", tag:"07",
    title:"AI/ML-Powered Enterprise Ticketing Platform",
    org:"Paramount Health Services & Insurance TPA · 2024–2026",
    problem:"No in-house system existed to track and resolve enterprise queries at scale — resolution relied on manual routing with no analytics layer for leadership to see where time and quality were being lost.",
    approach:[
      "Owned the platform from discovery through roadmap definition and launch",
      "Prioritized AI/ML-based query resolution as the core differentiator over manual routing",
      "Built leadership-facing analytics dashboards to track resolution speed and quality post-launch",
    ],
    impact:[
      "82% user adoption within 4 months of launch",
      "₹20L in annual operational cost savings",
      "30% reduction in turnaround time (TAT)",
    ],
    pmSkills:["Roadmap definition","AI/ML feature prioritization","Analytics dashboarding","User adoption strategy"],
    metrics:[{val:"82%",label:"User adoption"},{val:"₹20L",label:"Annual savings"}],
  },
  { id:"benefit-module-revamp", category:"platform", catLabel:"Core Platform", tag:"08",
    title:"Modular Benefits Configuration Module",
    org:"Paramount Health Services & Insurance TPA · 2024–2026",
    problem:"The legacy benefits engine was built for single-tier policies and couldn't process the modular, multi-level benefit structures new-age policies required — driving benefit-mapping errors and recurring financial penalties.",
    approach:[
      "Mapped the existing benefit-configuration logic end-to-end to isolate where multi-level, modular structures broke the system",
      "Designed and implemented a new Benefits configuration module supporting reusable, multi-level benefit components",
      "Automated end-to-end benefit mapping in place of the manual, error-prone configuration process",
    ],
    impact:[
      "78% reduction in benefit-mapping-related penalties",
      "Modular support for multi-level benefit structures the legacy system couldn't process",
      "End-to-end benefit mapping automated, cutting manual configuration effort",
    ],
    pmSkills:["System/architecture redesign","Complex business-logic mapping","Domain PM (health insurance)"],
    metrics:[{val:"78%",label:"Fewer mapping penalties"},{val:"E2E",label:"Mapping automated"}],
  },
  { id:"process-reengineering-bpr", category:"transformation", catLabel:"Process Transformation", tag:"09",
    title:"Business Process Re-Engineering Across 11+ Workflows",
    org:"Paramount Health Services & Insurance TPA · 2023–2024",
    problem:"11+ business workflows had accumulated inefficiency and manual error over time, with no structured program to diagnose root causes or re-engineer them against measurable outcomes.",
    approach:[
      "Conducted user research and stakeholder interviews across 11+ business workflows to isolate root-cause bottlenecks",
      "Delivered 18+ technology-enabled initiatives with Product and Engineering to redesign the highest-impact workflows",
      "Tracked internal user satisfaction and turnaround time before and after each rollout",
    ],
    impact:[
      "Average 21% improvement in process efficiency across workflows touched",
      "78% reduction in manual processing errors",
      "Internal user satisfaction up from 60% to 89%, with 30% reduction in turnaround time",
    ],
    pmSkills:["Process re-engineering","Root-cause analysis","Stakeholder interviews","Cross-functional delivery"],
    metrics:[{val:"21%",label:"Efficiency gain"},{val:"78%",label:"Fewer errors"}],
  },
];

/* Sourced directly from the four ₹-denominated case studies above —
   these values sum to the ₹1.65 Cr+ headline figure, so the hero chart
   always reflects the real numbers. Sorted by size (not chronology) for
   a clean ascending read, since the initiatives ran concurrently. */
const SAVINGS_TRAJECTORY = [
  { id: "ticketing-platform", label: "AI/ML Ticketing", valueL: 20 },
  { id: "ai-pm-platform", label: "AI PM Platform", valueL: 35 },
  { id: "support-automation", label: "Support Automation", valueL: 40 },
  { id: "vendor-governance", label: "Vendor Governance", valueL: 70 },
];

/* Each role's OWN annual savings — not a running cumulative total.
   2022–23 (NexGen) and 2023–24 (Paramount, Sr. Executive) were
   foundational process/efficiency roles with no ₹-denominated savings
   tracked yet; ₹20L is what the AI/ML ticketing platform delivered
   annually during 2024–26; ₹1.45 Cr (₹35L + ₹40L + ₹70L) is what the
   current CTO Office role delivers annually from 2026 — each figure
   belongs to that role alone. Summed across all four (0+0+20+145=165L),
   they tie out to the ₹1.65 Cr+ "total across career" figure shown
   alongside the chart, which IS the cumulative number — the chart itself
   is deliberately per-role, not running-total.

   keyProjects is read directly off CASE_STUDIES (the "Nine initiatives"
   in the Work section) by each entry's own `org` year-tag, not invented:
   2023–2024 → process-reengineering-bpr (1); 2024–2026 → ticketing-platform,
   benefit-module-revamp (2); 2026 → ai-pm-platform, claims-chatbot,
   onboarding-transformation, support-automation, recovery-audit,
   vendor-governance (6). NexGen (2022–23) predates the case-study set, so
   it's 0. 1+2+6 = 9, matching the Work section's own "Nine initiatives"
   count exactly. */
const YEARLY_GROWTH = [
  { year: "2022–23", role: "Project Co-Ordinator",  annualL: 0,   keyProjects: 0, note: "Project Co-Ordinator, NexGen — 12 projects @ 96% efficiency" },
  { year: "2023–24", role: "Sr. Executive, BPR",    annualL: 0,   keyProjects: 1, note: "Sr. Executive BPR, Paramount — 11+ workflows re-engineered, 78% fewer errors, satisfaction 60%→89%" },
  { year: "2024–26", role: "Asst. Manager, BPR",    annualL: 20,  keyProjects: 2, note: "Asst. Manager BPR, Paramount — AI/ML ticketing platform, modular Benefits configuration module" },
  { year: "2026–",   role: "APM, CTO Office",       annualL: 145, keyProjects: 6, note: "APM, Medi Assist CTO Office — AI PM platform, claims chatbot, onboarding transformation, support automation, recovery audit, vendor governance" },
];

const WORK_FILTERS = [
  { key:"all", label:"All Work" },
  { key:"ai", label:"AI/Automation" },
  { key:"platform", label:"Core Platform" },
  { key:"transformation", label:"Process Transformation" },
  { key:"governance", label:"Governance" },
];

const TOOLKIT = [
  { num:"01", title:"Product & Delivery Management",
    desc:"Roadmapping, sprint execution, and cross-functional delivery governance across engineering, ops, and business.",
    tools:["Jira","Zoho Sprints","Microsoft Project"] },
  { num:"02", title:"Process & Systems Design",
    desc:"Mapping workflows end-to-end and designing prototypes that translate complexity into something a team can act on.",
    tools:["Figma","Microsoft Visio","Mermaid"] },
  { num:"03", title:"Data & Analytics",
    desc:"Turning operational data into decisions — dashboards, query-level analysis, and executive-ready reporting.",
    tools:["Power BI","Tableau","Looker Studio","Advanced Excel","SQL"] },
  { num:"04", title:"AI & Automation",
    desc:"Applying AI tooling directly to product workflows — from query automation to AI-assisted internal platforms.",
    tools:["Claude","ChatGPT","Gemini","Ollama","GitHub Copilot"] },
];

const CERTIFICATIONS = [
  { name:"IBM Product Manager Specialization", issuer:"IBM", issued:"Dec 2025", credentialId:"C8HN8ARRILBN",
    skills:"Product Strategy, Go-to-Market Planning, +4 more",
    href:"https://www.coursera.org/account/accomplishments/specialization/C8HN8ARRILBN" },
  { name:"Google Data Analytics Professional Certificate", issuer:"GOOGLE", issued:"May 2025", credentialId:"UT6QJPM848HP",
    skills:"Data-Driven Decision Making, SQL & Data Analysis, +5 more",
    href:"https://www.coursera.org/account/accomplishments/specialization/UT6QJPM848HP" },
  { name:"Google Project Management Certificate", issuer:"COURSERA", issued:"Jan 2023", credentialId:null,
    skills:"Agile Project Management, Stakeholder Management, +4 more",
    href:"https://www.credly.com/badges/af9dd4ee-68e8-4ca6-a983-f703477349de/linked_in_profile" },
  { name:"Google Project Management: Specialization", issuer:"COURSERA", issued:"Jan 2023", credentialId:"7UVJ3QSJS8F7",
    skills:"Agile & Scrum Methodologies, Cross-Functional Leadership, +13 more",
    href:"https://www.coursera.org/account/accomplishments/specialization/certificate/7UVJ3QSJS8F7" },
  { name:"Business Analysis & Process Management", issuer:"COURSERA", issued:"Mar 2023", credentialId:"5XBKMJ598BHB",
    skills:"Requirements Gathering, Process Optimization, +19 more",
    href:"https://www.coursera.org/account/accomplishments/certificate/5XBKMJ598BHB" },
  { name:"Six Sigma Yellow Belt", issuer:"KENNESAW STATE UNIVERSITY", issued:"Jun 2025", credentialId:"JI6M7XKK99HB",
    skills:"Lean Six Sigma, Root Cause Analysis, +1 more",
    href:"https://www.coursera.org/account/accomplishments/specialization/JI6M7XKK99HB" },
  { name:"Generative AI: Business Transformation & Career Growth", issuer:"IBM", issued:"Feb 2025", credentialId:"0TEGQ21B2YOF",
    skills:"Generative AI for Product Strategy, AI-Driven Innovation, +1 more",
    href:"https://www.coursera.org/account/accomplishments/verify/0TEGQ21B2YOF" },
  { name:"Business Intelligence using Power BI", issuer:"SKILL NATION", issued:"Dec 2023", credentialId:"593316",
    skills:"Product Metrics & Dashboarding, Business Intelligence",
    href:"https://excel.jatanshah.in/your-certificate/2D01AEC72A88-2D01AEB8D36E-7A4BBAAC71/" },
  { name:"Basic to Advanced Tableau Dashboard", issuer:"SKILL NATION", issued:"Dec 2023", credentialId:"593314",
    skills:"Data Visualization, Product Analytics Storytelling",
    href:"https://excel.jatanshah.in/your-certificate/2D01AEB8D249-2D01AEB8D310-7A4BBAAC71/" },
  { name:"Basic to Advanced Microsoft Excel", issuer:"SKILL NATION", issued:"Dec 2023", credentialId:"513822",
    skills:"Data Analysis, Product Metrics Modeling",
    href:"https://excel.jatanshah.in/your-certificate/85FB86079B-2D01AEB884EB-7A4BBAAC71/" },
  { name:"Basic to Advanced PowerPoint", issuer:"SKILL NATION", issued:"Jun 2024", credentialId:"593317",
    skills:"Executive Storytelling, Stakeholder Presentations",
    href:"https://excel.jatanshah.in/your-certificate/2D01AEB8D2A6-2D01AEB8D30D-7A4BBAAC71/" },
  { name:"Building Interactive Dashboard", issuer:"SKILL NATION", issued:"Jul 2023", credentialId:null,
    skills:"Interactive Dashboarding, Product Data Storytelling, +7 more",
    href:"https://drive.google.com/file/d/1Ouft331-KcfHx6dVCBy4QKFSQ36F_MW3/view?usp=sharing" },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* One rAF-batched scroll pass for every scroll-driven effect — avoids the
   layout thrash (and visible stutter) of several independent listeners. */
const scrollHandlers = [];
let scrollFrame = 0;
function onScrollBatched(fn){ scrollHandlers.push(fn); }
window.addEventListener("scroll", () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; scrollHandlers.forEach(f => f()); });
}, { passive: true });

/* ============================================================
   RENDER: Core Focus (hero panel)
   All four pillars shown at once as a static list — no carousel,
   no timers, nothing to click through to see the full picture.
   ============================================================ */
(function focusCard(){
  const list = document.getElementById("coreFocusList");
  if (!list) return;
  list.innerHTML = CORE_FOCUS.map(item => `
    <div class="hero-panel-item">
      <div class="hero-panel-icon"><i data-lucide="${item.icon}" class="icon"></i></div>
      <div>
        <div class="hero-panel-title">${item.title}</div>
        <div class="hero-panel-desc">${item.desc}</div>
      </div>
    </div>
  `).join("");
  lucide.createIcons();
})();

/* ============================================================
   RENDER: Savings trajectory chart (hero)
   Real bar-per-initiative + cumulative-total line, built from
   SAVINGS_TRAJECTORY. Each bar is clickable and opens that
   initiative's full case study in the existing modal.
   ============================================================ */
(function renderSavingsChart(){
  const svg = document.getElementById("savingsChart");
  if (!svg) return;
  const W = 160, H = 60, padL = 4, padR = 4, padT = 6, padB = 10;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const n = SAVINGS_TRAJECTORY.length;
  const slot = plotW / n;
  const barW = slot * 0.46;
  const maxBar = Math.max(...SAVINGS_TRAJECTORY.map(d => d.valueL));

  let running = 0;
  const cum = SAVINGS_TRAJECTORY.map(d => (running += d.valueL));
  const maxCum = running;

  let bars = "", pts = [], dots = "";
  SAVINGS_TRAJECTORY.forEach((d, i) => {
    const cx = padL + slot * i + slot / 2;
    const barH = (d.valueL / maxBar) * plotH;
    const barY = padT + (plotH - barH);
    bars += `<rect class="chart-bar" tabindex="0" role="button" data-id="${d.id}"
      x="${(cx - barW / 2).toFixed(1)}" y="${barY.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(barH,1).toFixed(1)}" rx="2">
      <title>${d.label} — ₹${d.valueL}L annual savings. Click for the full case study.</title>
    </rect>`;

    const cy = padT + (plotH - (cum[i] / maxCum) * plotH);
    pts.push(`${cx.toFixed(1)},${cy.toFixed(1)}`);
    dots += `<circle class="chart-dot" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2"><title>Cumulative through this initiative: ₹${cum[i]}L</title></circle>`;
  });

  svg.innerHTML = `<polyline class="chart-line" points="${pts.join(" ")}" />${bars}${dots}`;

  svg.querySelectorAll(".chart-bar").forEach(el => {
    const open = () => openCaseModal(el.dataset.id);
    el.addEventListener("click", open);
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
})();

/* ============================================================
   RENDER: 4-year growth chart (metrics section)
   Two real series from YEARLY_GROWTH, sharing an x-axis by role but
   each on its own scale: cumulative documented savings (line + area,
   left/implicit axis) and key initiatives delivered that role — a
   count read straight off CASE_STUDIES (bars, own scale, capped below
   the line's headroom so the two never fight for the same pixels).
   ============================================================ */
(function renderGrowthChart(){
  const svg = document.getElementById("growthChart");
  if (!svg) return;
  const W = 720, H = 220, padL = 34, padR = 16, padT = 20, padB = 34;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const n = YEARLY_GROWTH.length;
  const slot = plotW / (n - 1);
  const maxVal = Math.max(...YEARLY_GROWTH.map(d => d.annualL), 1);
  const maxProj = Math.max(...YEARLY_GROWTH.map(d => d.keyProjects), 1);
  const baseline = padT + plotH;

  /* Two disjoint vertical bands so the two series can never collide,
     whatever the numbers happen to be: bars own a fixed-height footer
     band anchored at the baseline; the savings line is compressed into
     the remaining space above it (plus a clear gap), so even its own
     zero-value points sit above the tallest possible bar. */
  const barBandH = plotH * 0.32;
  const gap = 16;
  const lineTop = padT;
  const lineBottom = baseline - barBandH - gap;

  const xAt = i => padL + slot * i;
  const yAt = v => lineBottom - (v / maxVal) * (lineBottom - lineTop);
  const barHAt = v => Math.max((v / maxProj) * barBandH, 2.5);
  /* rounded-top-only bar path — a full border-radius rect reads as a pill
     at the small heights zero/low counts produce, so only the top corners curve */
  const barPath = (x, y, w, h, r) => {
    r = Math.min(r, h, w / 2);
    return `M${x.toFixed(1)},${(y + h).toFixed(1)} L${x.toFixed(1)},${(y + r).toFixed(1)} `
      + `Q${x.toFixed(1)},${y.toFixed(1)} ${(x + r).toFixed(1)},${y.toFixed(1)} `
      + `L${(x + w - r).toFixed(1)},${y.toFixed(1)} Q${(x + w).toFixed(1)},${y.toFixed(1)} ${(x + w).toFixed(1)},${(y + r).toFixed(1)} `
      + `L${(x + w).toFixed(1)},${(y + h).toFixed(1)} Z`;
  };

  /* horizontal grid lines, 4 bands */
  let gridLines = "";
  for (let g = 0; g <= 4; g++) {
    const gy = padT + (plotH / 4) * g;
    gridLines += `<line class="growth-grid-line" x1="${padL}" y1="${gy.toFixed(1)}" x2="${W - padR}" y2="${gy.toFixed(1)}" />`;
  }

  const pts = YEARLY_GROWTH.map((d, i) => `${xAt(i).toFixed(1)},${yAt(d.annualL).toFixed(1)}`);
  /* extruded shadow ribbon under the value line — reads as depth on the tilted plane */
  const ribbonPts = YEARLY_GROWTH.map((d, i) => `${xAt(i).toFixed(1)},${(yAt(d.annualL) + 9).toFixed(1)}`);
  const areaPts = `${padL.toFixed(1)},${lineBottom.toFixed(1)} ${pts.join(" ")} ${(W - padR).toFixed(1)},${lineBottom.toFixed(1)}`;

  const barW = slot * 0.3;
  let bars = "", dots = "", yearLabels = "", valLabels = "", projLabels = "";
  YEARLY_GROWTH.forEach((d, i) => {
    const cx = xAt(i), cy = yAt(d.annualL);
    const anchor = i === 0 ? "start" : i === n - 1 ? "end" : "middle";
    const barH = barHAt(d.keyProjects);
    const barX = i === 0 ? cx : i === n - 1 ? cx - barW : cx - barW / 2;
    const barY = baseline - barH;
    bars += `<path class="growth-proj-bar" d="${barPath(barX, barY, barW, barH, 3)}">
      <title>${d.role} — ${d.keyProjects} of 8 key initiatives delivered this role (${d.note})</title>
    </path>`;
    /* pinned just above the role-name row (a fixed offset from the
       baseline, not the bar's own top) so it never collides with the
       savings-line labels above it, however the two scales happen to line up */
    projLabels += `<text class="growth-proj-label" x="${(barX + barW / 2).toFixed(1)}" y="${(H - 26).toFixed(1)}" text-anchor="middle">${d.keyProjects}</text>`;

    dots += `<circle class="growth-dot" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="4.5">
      <title>${d.year} — ${d.note}. Annual documented savings this role: ${d.annualL > 0 ? "₹" + d.annualL + "L" : "pre-monetized"}</title>
    </circle>`;
    yearLabels += `<text class="growth-year-label" x="${cx.toFixed(1)}" y="${H - 8}" text-anchor="${anchor}">${d.role}</text>`;
    const valText = d.annualL >= 100 ? `₹${(d.annualL / 100).toFixed(2)}Cr+` : d.annualL > 0 ? `₹${d.annualL}L` : "—";
    valLabels += `<text class="growth-val-label" x="${cx.toFixed(1)}" y="${(cy - 14).toFixed(1)}" text-anchor="${anchor}">${valText}</text>`;
  });

  svg.innerHTML = `
    <defs>
      <linearGradient id="growthLineGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="var(--royal)" />
        <stop offset="38%" stop-color="var(--violet)" />
        <stop offset="70%" stop-color="var(--cyan)" />
        <stop offset="100%" stop-color="var(--neon-lime)" />
      </linearGradient>
      <linearGradient id="growthAreaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--violet)" stop-opacity="0.28" />
        <stop offset="100%" stop-color="var(--violet)" stop-opacity="0" />
      </linearGradient>
    </defs>
    ${gridLines}
    ${bars}
    <polygon class="growth-area" points="${areaPts}" />
    <polyline class="growth-ribbon" points="${ribbonPts.join(" ")}" />
    <polyline class="growth-line" points="${pts.join(" ")}" />
    ${dots}${yearLabels}${valLabels}${projLabels}
  `;
})();

/* ============================================================
   RENDER: Metrics with scroll-triggered count-up
   ============================================================ */
const metricsGrid = document.getElementById("metricsGrid");
IMPACT_STATS.forEach((stat, i) => {
  const card = document.createElement("div");
  card.className = "glass tilt metric-card reveal reveal-delay-" + Math.min(i, 3);
  const glowCycle = ["rgba(139,92,246,.30)", "rgba(34,211,238,.30)"];
  card.style.setProperty("--glow-color", glowCycle[i % glowCycle.length]);
  const numEl = document.createElement("div");
  numEl.className = "metric-num text-gradient";
  numEl.textContent = stat.display ?? formatMetric(0, stat);
  const labelEl = document.createElement("div");
  labelEl.className = "metric-label mono";
  labelEl.textContent = stat.label;
  card.appendChild(numEl);
  card.appendChild(labelEl);
  metricsGrid.appendChild(card);

  if (stat.value !== undefined) {
    observeOnce(card, () => animateCount(numEl, stat));
  }
});

function formatMetric(value, stat) {
  return `${stat.prefix ?? ""}${value.toLocaleString("en-IN", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  })}${stat.suffix ?? ""}`;
}

function animateCount(el, stat) {
  if (prefersReducedMotion) { el.textContent = formatMetric(stat.value, stat); return; }
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatMetric(stat.value * eased, stat);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ============================================================
   RENDER: Journey timeline
   ============================================================ */
const timelineContainer = document.getElementById("timelineContainer");
TIMELINE.forEach((entry, i) => {
  const item = document.createElement("div");
  item.className = "tl-item reveal reveal-delay-" + Math.min(i, 3);
  item.innerHTML = `
    <div class="tl-dot mono">${entry.step}</div>
    <div class="glass tilt tl-content" style="--glow-color: rgba(139,92,246,.22)">
      <div class="tl-head">
        <div>
          <div class="tl-role">${entry.role}</div>
          <div class="tl-org">${entry.org}</div>
          <div class="tl-period">${entry.period}</div>
        </div>
        <span class="tl-toggle">View detailed impact <i data-lucide="chevron-down" class="icon chev"></i></span>
      </div>
      <div class="tl-desc">${entry.summary}</div>
      <div class="tl-detail">
        <div class="tl-detail-inner">
          ${entry.detail.map(group => `
            <div class="tl-detail-group">
              <h5>${group.heading}</h5>
              <ul>${group.items.map(li => `<li>${li}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  timelineContainer.appendChild(item);

  const head = item.querySelector(".tl-head");
  const detail = item.querySelector(".tl-detail");
  head.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    detail.style.height = isOpen ? detail.scrollHeight + "px" : "0px";
    item.querySelector(".tl-toggle").firstChild.textContent = isOpen ? "Hide detail " : "View detailed impact ";
  });
});

/* Highlight whichever role card is currently crossing the "active" line
   so the dot lights up and the line reads as a real progress marker. */
const tlCurrentObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-current", entry.isIntersecting);
  });
}, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
timelineContainer.querySelectorAll(".tl-item").forEach(el => tlCurrentObserver.observe(el));

/* Scroll-driven fill of the connecting line, mirrors the original site's behavior */
function updateTimelineFill() {
  const timelineEl = document.getElementById("timelineContainer");
  const fillEl = document.getElementById("tlFill");
  if (!timelineEl) return;
  const rect = timelineEl.getBoundingClientRect();
  const vh = window.innerHeight;
  const progressPx = Math.min(Math.max(vh * 0.55 - rect.top, 0), rect.height);
  fillEl.style.height = `${(progressPx / rect.height) * 100}%`;
}
onScrollBatched(updateTimelineFill);
window.addEventListener("resize", updateTimelineFill);

/* ============================================================
   RENDER: Work / case studies + filter + modal
   ============================================================ */
const workGrid = document.getElementById("workGrid");
const filterRow = document.getElementById("filterRow");
let activeFilter = "all";

filterRow.innerHTML = WORK_FILTERS.map(f =>
  `<button class="filter-pill mono ${f.key === "all" ? "active" : ""}" data-filter="${f.key}">${f.label}</button>`
).join("");

filterRow.querySelectorAll(".filter-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    filterRow.querySelectorAll(".filter-pill").forEach(b => b.classList.toggle("active", b === btn));
    renderWorkGrid();
  });
});

function renderWorkGrid() {
  const visible = activeFilter === "all" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.category === activeFilter);
  workGrid.innerHTML = visible.map(c => `
    <div class="glass tilt work-card reveal in" data-id="${c.id}" style="--glow-color: rgba(34,211,238,.24)">
      <div class="work-card-top"><span>${c.catLabel}</span><span class="tag">${c.tag}</span></div>
      <h3>${c.title}</h3>
      <div class="org">${c.org}</div>
      <div class="work-metrics">
        ${c.metrics.map(m => `<div class="work-metric"><strong>${m.val}</strong><span>${m.label}</span></div>`).join("")}
      </div>
    </div>
  `).join("");
  attachTilt(workGrid.querySelectorAll(".tilt"));
  workGrid.querySelectorAll(".work-card").forEach(card => {
    card.addEventListener("click", () => openCaseModal(card.dataset.id));
  });
}
renderWorkGrid();

const caseModalOverlay = document.getElementById("caseModalOverlay");
const caseModalBody = document.getElementById("caseModalBody");
function openCaseModal(id) {
  const c = CASE_STUDIES.find(x => x.id === id);
  if (!c) return;
  caseModalBody.innerHTML = `
    <div class="modal-cat mono">${c.catLabel}</div>
    <h3 class="modal-title">${c.title}</h3>
    <div class="modal-org">${c.org}</div>
    <div class="modal-metrics">
      ${c.metrics.map(m => `<div class="modal-metric"><strong>${m.val}</strong><span>${m.label}</span></div>`).join("")}
    </div>
    <div class="modal-block"><h4>The problem</h4><p>${c.problem}</p></div>
    <div class="modal-block"><h4>Approach</h4><ul>${c.approach.map(li => `<li>${li}</li>`).join("")}</ul></div>
    <div class="modal-block"><h4>Impact</h4><ul>${c.impact.map(li => `<li class="accent">${li}</li>`).join("")}</ul></div>
    <div class="modal-block"><h4>PM skills exercised</h4><div class="chip-row">${c.pmSkills.map(s => `<span class="chip mono">${s}</span>`).join("")}</div></div>
  `;
  lucide.createIcons();
  openModal(caseModalOverlay);
}
document.getElementById("caseModalClose").addEventListener("click", () => closeModal(caseModalOverlay));
caseModalOverlay.addEventListener("click", e => { if (e.target === caseModalOverlay) closeModal(caseModalOverlay); });

/* ============================================================
   RENDER: Toolkit
   ============================================================ */
document.getElementById("skillsGrid").innerHTML = TOOLKIT.map(s => `
  <div class="glass tilt skill-card reveal" style="--glow-color: rgba(139,92,246,.22)">
    <span class="skill-num mono">${s.num}</span>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
    <div class="tool-cloud">${s.tools.map(t => `<span class="tool-pill mono">${t}</span>`).join("")}</div>
  </div>
`).join("");

/* ============================================================
   RENDER: Certifications
   ============================================================ */
document.getElementById("certGrid").innerHTML = CERTIFICATIONS.map(c => `
  <a class="glass tilt cert-card reveal" style="--glow-color: rgba(34,211,238,.22)" href="${c.href}" target="_blank" rel="noopener">
    <div class="cert-top">
      <div class="cert-icon"><i data-lucide="graduation-cap" class="icon"></i></div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer mono">${c.issuer}</div>
      </div>
    </div>
    <div class="cert-meta">
      <div class="cert-meta-row"><span class="cert-meta-label">Issued</span><span>${c.issued}</span></div>
      ${c.credentialId ? `<div class="cert-meta-row"><span class="cert-meta-label">Credential ID</span><span class="mono">${c.credentialId}</span></div>` : ""}
    </div>
    <div class="cert-skills"><b>Skills:</b> ${c.skills}</div>
    <div class="cert-footer">Verify <i data-lucide="external-link" class="icon"></i></div>
  </a>
`).join("");

/* ============================================================
   INTERACTION: pointer-tracked 3D tilt + glow (shared across all .tilt cards)
   ============================================================ */
function attachTilt(elements) {
  const maxTilt = 5;
  elements.forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";
    if (prefersReducedMotion) return;
    const cs = getComputedStyle(card);
    const baseRx = parseFloat(cs.getPropertyValue("--rest-rx")) || 0;
    const baseRy = parseFloat(cs.getPropertyValue("--rest-ry")) || 0;
    const baseZ  = parseFloat(cs.getPropertyValue("--rest-z"))  || 0;
    let frame = 0, rx = 0, ry = 0, mx = 50, my = 50, active = false;
    const paint = () => {
      frame = 0;
      /* at rest the card holds its isometric pose; on hover it eases toward the
         viewer and flattens, with the pointer driving the remaining tilt */
      const tx = active ? baseRx * 0.35 + rx : baseRx;
      const ty = active ? baseRy * 0.35 + ry : baseRy;
      const tz = active ? baseZ + 26 : baseZ;
      card.style.transform = `perspective(1100px) rotateX(${tx.toFixed(2)}deg) rotateY(${ty.toFixed(2)}deg) translateZ(${tz.toFixed(1)}px)`;
      card.style.setProperty("--mx", mx.toFixed(1) + "%");
      card.style.setProperty("--my", my.toFixed(1) + "%");
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(paint); };
    card.addEventListener("pointermove", e => {
      if (e.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      const fx = (e.clientX - rect.left) / rect.width;
      const fy = (e.clientY - rect.top) / rect.height;
      mx = fx * 100; my = fy * 100;
      rx = (0.5 - fy) * maxTilt * 2; ry = (fx - 0.5) * maxTilt * 2;
      active = true; queue();
    }, { passive: true });
    card.addEventListener("pointerleave", () => { active = false; queue(); });
    paint(); // establish the rest pose immediately
  });
}
attachTilt(document.querySelectorAll(".tilt"));

/* ============================================================
   INTERACTION: scroll reveal (IntersectionObserver)
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
// newly-rendered work cards (already marked `in` at render time) skip the observer by design

function observeOnce(el, callback) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { callback(); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.4 });
  obs.observe(el);
}

/* ============================================================
   INTERACTION: cursor spotlight glow
   ============================================================ */
let spotFrame = 0, spotX = 0, spotY = 0;
window.addEventListener("pointermove", e => {
  spotX = e.clientX; spotY = e.clientY;
  if (spotFrame) return;
  spotFrame = requestAnimationFrame(() => {
    spotFrame = 0;
    document.documentElement.style.setProperty("--sx", spotX + "px");
    document.documentElement.style.setProperty("--sy", spotY + "px");
  });
}, { passive: true });

/* Shared damped-spring integrator (semi-implicit Euler) — standing in for
   framer-motion's useSpring across both the magic cursor and the liquid
   name-hover effect below. Verified numerically stable and convergent at
   the stiffness/damping/mass values each caller uses, including under
   sudden target jumps and rapid target flips. */
function dampedSpringStep(s, target, stiffness, damping, mass, dt) {
  const force = -stiffness * (s.v - target) - damping * s.vel;
  s.vel += (force / mass) * dt;
  s.v += s.vel * dt;
}

/* ============================================================
   INTERACTION: magic cursor — ported from the requested Framer
   "SmoothCursor" component (framer.com/m/Smoothcursor-o8zdlR.js)
   into vanilla JS, since this site has no React/build step. A
   custom pointer icon chases the real cursor via damped springs on
   position/rotation/scale. Rotation faces the direction of travel
   with wrap-safe accumulation (avoids snapping the "long way" across
   the +-180 degree seam); scale squishes slightly while moving and on
   click. Skipped under prefers-reduced-motion and on touch/narrow/
   portrait devices, mirroring the source component's own mobile guard.
   ============================================================ */
(function magicCursor(){
  if (prefersReducedMotion) return;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const fitsDesktop = window.innerWidth >= 768 && window.innerWidth > window.innerHeight;
  if (isTouch || !fitsDesktop) return;

  const STIFFNESS = 400, DAMPING = 45, MASS = 1;
  const ROT_STIFFNESS = 300, ROT_DAMPING = 60;
  const SCALE_STIFFNESS = 500, SCALE_DAMPING = 35;

  const cursor = document.createElement("div");
  cursor.className = "magic-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `<img src="assets/cursor/rocket-cursor.png" alt="">`;
  document.body.appendChild(cursor);
  document.body.classList.add("magic-cursor-active");

  const posX = { v: -100, vel: 0 }, posY = { v: -100, vel: 0 };
  const rot = { v: 0, vel: 0 }, scl = { v: 1, vel: 0 };
  let targetX = -100, targetY = -100, targetRot = 0, targetScale = 1;

  let lastMouse = { x: 0, y: 0 }, lastMoveTime = performance.now();
  let velocity = { x: 0, y: 0 };
  let previousAngle = 0, accumulatedRotation = 0;
  let isMouseDown = false, squishTimer = null, movePending = false;

  function handleMouseMove(e) {
    if (movePending) return;
    movePending = true;
    requestAnimationFrame(() => {
      movePending = false;
      const now = performance.now();
      const dt = now - lastMoveTime;
      if (dt > 0) {
        velocity.x = (e.clientX - lastMouse.x) / dt;
        velocity.y = (e.clientY - lastMouse.y) / dt;
      }
      lastMoveTime = now;
      lastMouse = { x: e.clientX, y: e.clientY };
      targetX = e.clientX;
      targetY = e.clientY;

      const speed = Math.hypot(velocity.x, velocity.y);
      if (speed > 0.1) {
        const currentAngle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI) + 90;
        let angleDiff = currentAngle - previousAngle;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation += angleDiff;
        targetRot = accumulatedRotation;
        previousAngle = currentAngle;

        if (!isMouseDown) {
          targetScale = 0.95;
          clearTimeout(squishTimer);
          squishTimer = setTimeout(() => { if (!isMouseDown) targetScale = 1; }, 150);
        }
      }
    });
  }
  function handleMouseDown() { isMouseDown = true; targetScale = 0.7; }
  function handleMouseUp() { isMouseDown = false; targetScale = 1; }

  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  window.addEventListener("mousedown", handleMouseDown, { passive: true });
  window.addEventListener("mouseup", handleMouseUp, { passive: true });
  window.addEventListener("mouseleave", handleMouseUp, { passive: true });

  let lastFrameTime = performance.now();
  function frame(now) {
    const dt = Math.min((now - lastFrameTime) / 1000, 1 / 30); // clamp: stable through frame drops
    lastFrameTime = now;
    dampedSpringStep(posX, targetX, STIFFNESS, DAMPING, MASS, dt);
    dampedSpringStep(posY, targetY, STIFFNESS, DAMPING, MASS, dt);
    dampedSpringStep(rot, targetRot, ROT_STIFFNESS, ROT_DAMPING, MASS, dt);
    dampedSpringStep(scl, targetScale, SCALE_STIFFNESS, SCALE_DAMPING, MASS, dt);
    cursor.style.transform =
      `translate(${posX.v.toFixed(2)}px, ${posY.v.toFixed(2)}px) translate(-50%,-50%) rotate(${rot.v.toFixed(2)}deg) scale(${scl.v.toFixed(3)})`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ============================================================
   INTERACTION: liquid name hover — the hero's "Jatin Chaudhary" name
   splits into per-letter spans that elastically stretch/lean toward
   a nearby cursor, then spring back to their crisp rest shape as the
   cursor moves away. Approximates a canvas-shader liquid warp with
   per-letter CSS transforms instead: each letter's scaleY/scaleX/
   translateY/skew is its own damped spring (the same integrator the
   magic cursor uses), driven by proximity to the cursor rather than
   click/velocity state. Rest positions are measured once (and on
   resize) rather than every frame, so the animation itself never
   feeds back into its own distance calculation.
   ============================================================ */
(function liquidName(){
  const nameEl = document.querySelector(".hero .name-highlight");
  if (!nameEl) return;
  if (prefersReducedMotion) return;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const RADIUS = 95;              // px influence radius around each letter
  const STIFFNESS = 320, DAMPING = 28, MASS = 1;

  const fullText = nameEl.textContent;
  nameEl.setAttribute("aria-label", fullText);
  nameEl.textContent = "";
  const letterWrap = document.createElement("span");
  letterWrap.setAttribute("aria-hidden", "true");
  nameEl.appendChild(letterWrap);

  const letters = [];
  for (const ch of fullText) {
    if (ch === " ") { letterWrap.appendChild(document.createTextNode(" ")); continue; }
    const span = document.createElement("span");
    span.className = "name-letter";
    span.textContent = ch;
    letterWrap.appendChild(span);
    letters.push({
      el: span,
      cx: 0, cy: 0, // cached rest-position center, measured on load/resize
      scaleX: { v: 1, vel: 0 }, scaleY: { v: 1, vel: 0 },
      ty: { v: 0, vel: 0 }, skew: { v: 0, vel: 0 },
    });
  }

  function measureRestPositions() {
    for (const L of letters) {
      const r = L.el.getBoundingClientRect();
      L.cx = r.left + r.width / 2;
      L.cy = r.top + r.height / 2;
    }
  }
  measureRestPositions();
  window.addEventListener("resize", measureRestPositions);

  let mouseX = -9999, mouseY = -9999;
  window.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
  window.addEventListener("mouseleave", () => { mouseX = -9999; mouseY = -9999; }, { passive: true });

  let visible = true;
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, { threshold: 0 }).observe(nameEl);

  let lastFrameTime = performance.now();
  function frame(now) {
    const dt = Math.min((now - lastFrameTime) / 1000, 1 / 30);
    lastFrameTime = now;
    if (visible) {
      for (const L of letters) {
        const dx = mouseX - L.cx, dy = mouseY - L.cy;
        const dist = Math.hypot(dx, dy);
        const proximity = Math.max(0, 1 - dist / RADIUS) ** 1.5; // eased falloff, snappier near center

        const targetScaleY = 1 + proximity * 0.55;
        const targetScaleX = 1 - proximity * 0.18;
        const targetTy = -proximity * 12;
        const targetSkew = Math.max(-10, Math.min(10, (dx / RADIUS) * proximity * 10));

        dampedSpringStep(L.scaleY, targetScaleY, STIFFNESS, DAMPING, MASS, dt);
        dampedSpringStep(L.scaleX, targetScaleX, STIFFNESS, DAMPING, MASS, dt);
        dampedSpringStep(L.ty, targetTy, STIFFNESS, DAMPING, MASS, dt);
        dampedSpringStep(L.skew, targetSkew, STIFFNESS, DAMPING, MASS, dt);

        L.el.style.transform =
          `translateY(${L.ty.v.toFixed(2)}px) skewX(${L.skew.v.toFixed(2)}deg) scale(${L.scaleX.v.toFixed(3)}, ${L.scaleY.v.toFixed(3)})`;
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ============================================================
   INTERACTION: modals (shared open/close helpers)
   ============================================================ */
function openModal(overlay) {
  overlay.classList.add("open");
  document.body.classList.add("lock");
}
function closeModal(overlay) {
  overlay.classList.remove("open");
  document.body.classList.remove("lock");
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    [caseModalOverlay, contactOverlay].forEach(o => { if (o.classList.contains("open")) closeModal(o); });
  }
});

/* ============================================================
   INTERACTION: contact modal + form
   ============================================================ */
const contactOverlay = document.getElementById("contactOverlay");
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

function openContactModal() {
  contactForm.reset();
  contactForm.classList.remove("hide");
  contactSuccess.classList.remove("show");
  ["grp-name", "grp-email", "grp-message"].forEach(id => document.getElementById(id).classList.remove("error"));
  openModal(contactOverlay);
}
document.getElementById("contactBtnFooter").addEventListener("click", openContactModal);
document.getElementById("contactModalClose").addEventListener("click", () => closeModal(contactOverlay));
contactOverlay.addEventListener("click", e => { if (e.target === contactOverlay) closeModal(contactOverlay); });

contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("cf-name");
  const email = document.getElementById("cf-email");
  const message = document.getElementById("cf-message");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  toggleFieldError("grp-name", name.value.trim().length < 2, () => valid = false);
  toggleFieldError("grp-email", !emailRe.test(email.value.trim()), () => valid = false);
  toggleFieldError("grp-message", message.value.trim().length < 5, () => valid = false);
  if (!valid) return;

  const submitBtn = contactForm.querySelector(".contact-submit");
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    if (CONTACT_ENDPOINT) {
      await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ name: name.value.trim(), email: email.value.trim(), message: message.value.trim() }),
      });
      contactForm.classList.add("hide");
      contactSuccess.classList.add("show");
    } else {
      const subject = encodeURIComponent(`Portfolio contact from ${name.value.trim()}`);
      const body = encodeURIComponent(`${message.value.trim()}\n\n— ${name.value.trim()} (${email.value.trim()})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      contactForm.classList.add("hide");
      contactSuccess.classList.add("show");
    }
  } catch {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    showToast("Couldn't send — please try again or email me directly.");
  }
});

function toggleFieldError(groupId, isError, onError) {
  const el = document.getElementById(groupId);
  el.classList.toggle("error", isError);
  if (isError) onError();
}

/* ============================================================
   INTERACTION: email copy + toast
   ============================================================ */
document.getElementById("emailCopyBtn").addEventListener("click", () => {
  navigator.clipboard?.writeText(CONTACT_EMAIL)
    .then(() => showToast("Email copied to clipboard!"))
    .catch(() => showToast("Couldn't copy — email is " + CONTACT_EMAIL));
});

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ============================================================
   ICONS — render all Lucide placeholders inserted above
   ============================================================ */
lucide.createIcons();

/* ============================================================
   THEME TOGGLE — persisted, animated, syncs the 3D hero scene
   ============================================================ */
const themeToggle = document.getElementById("themeToggle");
const themeListeners = [];
function setTheme(theme, persist = true) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  if (persist) { try { localStorage.setItem("theme", theme); } catch (e) {} }
  themeListeners.forEach(fn => fn(theme));
}
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(next);
});
// keep aria-pressed correct on load (attribute was set pre-paint in <head>)
themeToggle.setAttribute("aria-pressed", document.documentElement.getAttribute("data-theme") === "light" ? "true" : "false");

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
const scrollProgressEl = document.getElementById("scrollProgress");
function updateScrollProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  scrollProgressEl.style.width = `${Math.min(Math.max(scrolled, 0), 1) * 100}%`;
}
onScrollBatched(updateScrollProgress);
updateScrollProgress();

/* ============================================================
   NAV SCROLL-SPY — highlight the section currently in view
   ============================================================ */
const navLinkEls = Array.from(document.querySelectorAll("#navLinks a"));
const spySections = navLinkEls.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
function updateNavSpy() {
  let current = null;
  const line = window.innerHeight * 0.35;
  spySections.forEach(sec => {
    if (sec.getBoundingClientRect().top <= line) current = sec;
  });
  navLinkEls.forEach(a => a.classList.toggle("active", current && a.getAttribute("href") === `#${current.id}`));
}
onScrollBatched(updateNavSpy);
updateNavSpy();

/* ============================================================
   3D-INTERACTIVE BACKGROUND — one continuous rAF loop with a damped
   (critically-eased) pointer follow: the target moves instantly, the
   rendered value eases toward it every frame, so nothing snaps or
   stutters. Three layers read the same eased position at different
   rates — the hero card's perspective tilt, each 3D orb's depth
   parallax, and the page-wide ambient glow drift — which is what
   reads as depth rather than a flat pan. The loop parks itself when
   the pointer settles and wakes on the next move.
   ============================================================ */
(function interactiveBackground(){
  if (prefersReducedMotion) return;
  const scene = document.getElementById("hsScene");
  const orbLayers = Array.from(document.querySelectorAll(".blob-depth"));
  const glowField = document.getElementById("glowField");
  const isNarrow = () => window.matchMedia("(max-width:1000px)").matches;

  const EASE = 0.075;            // per-frame approach rate — lower is smoother/slower
  let tx = 0, ty = 0;            // pointer target, normalised −1…1
  let cx = 0, cy = 0;            // eased current position
  let running = false;

  function frame(){
    cx += (tx - cx) * EASE;
    cy += (ty - cy) * EASE;

    const narrow = isNarrow();
    if (scene && !narrow) {
      scene.style.setProperty("--hs-ry", (-9 + cx * 7).toFixed(3) + "deg");
      scene.style.setProperty("--hs-rx", (5 - cy * 5).toFixed(3) + "deg");
    }
    if (!narrow) {
      for (const layer of orbLayers) {
        const d = parseFloat(layer.dataset.depth) || 24;
        /* horizontal travel is damped hard — the gutter orbs must never
           drift far enough inward to reach the text column */
        layer.style.transform =
          `translate3d(${(cx * d * 0.32).toFixed(2)}px, ${(cy * d).toFixed(2)}px, 0) scale(${(1 + Math.abs(cy) * 0.014).toFixed(4)})`;
      }
    }
    if (glowField) {
      glowField.style.transform = `translate3d(${(cx * 26).toFixed(2)}px, ${(cy * 20).toFixed(2)}px, 0)`;
    }

    if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  window.addEventListener("pointermove", e => {
    tx = (e.clientX / window.innerWidth) * 2 - 1;
    ty = (e.clientY / window.innerHeight) * 2 - 1;
    if (!running) { running = true; requestAnimationFrame(frame); }
  }, { passive: true });
})();

