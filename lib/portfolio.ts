/* Portfolio — products BalkanBit builds and runs.
   Every fact here is sourced from the product's repo, store listing or live
   site. No invented metrics: numbers are prices, plan limits, product specs
   or research data, never usage claims. Order = display order. */

export type Status = "concept" | "building" | "beta" | "live";

export type Shot = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  /** One line under the name on cards and the case-study hero */
  tagline: string;
  /** Short meta line, e.g. platform + start date */
  meta: string;
  status: Status;
  /** Human status line shown next to the chip on the case study */
  statusNote: string;
  summary: string;
  icon?: string;
  /** Card / hero cover image */
  cover: Shot & { fit?: "cover-top" | "cover-center" };
  /** Phone screenshots (portrait) or wide screenshots */
  screens: Shot[];
  screensLayout: "phones" | "wide";
  links: { label: string; href: string }[];
  facts: { eyebrow: string; value: string; label: string }[];
  problem: string;
  approach: string[];
  features: { title: string; body: string }[];
  /** Optional extra section, e.g. distribution work */
  extra?: { eyebrow: string; title: string; body: string[]; bullets?: string[] };
  stack: { group: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "slashloop",
    name: "slashloop",
    tagline: "Remake viral TikTok slideshows. Get paying customers for your app.",
    meta: "Web app + MCP server · since Jul 2026",
    status: "live",
    statusNote: "Live at slashloop.dev with Free, Creator and Pro plans",
    summary:
      "Viral-content research for indie app builders: track a niche, surface the outlier videos, and turn what worked into hooks, briefs and ready-to-post slideshows.",
    icon: "/portfolio/slashloop/icon.webp",
    cover: { src: "/portfolio/slashloop/cover.webp", alt: "slashloop landing page", fit: "cover-top" },
    screens: [
      { src: "/portfolio/slashloop/cover.webp", alt: "slashloop homepage hero: Remake viral TikTok slideshows" },
      { src: "/portfolio/slashloop/discover.webp", alt: "slashloop Discover: probing hashtags for trackable sources" },
    ],
    screensLayout: "wide",
    links: [
      { label: "Visit slashloop.dev", href: "https://slashloop.dev" },
      { label: "See pricing", href: "https://slashloop.dev/pricing" },
    ],
    facts: [
      { eyebrow: "Started", value: "Jul '26", label: "First commit to production in weeks" },
      { eyebrow: "Plans", value: "$0–79", label: "per month · Free, Creator, Pro" },
      { eyebrow: "Posts to", value: "4", label: "TikTok, Instagram, YouTube Shorts, Threads" },
      { eyebrow: "Interfaces", value: "2", label: "Web app and MCP server, one account" },
    ],
    problem:
      "Indie developers can ship an app in a weekend, then stall on distribution. Short-form video sells apps, but finding what actually works in a niche means hours of scrolling, and follower counts hide which posts truly broke out.",
    approach: [
      "slashloop scores every video against its own creator's median, so a 27x hit from a 4K account outranks a 1.3x post from a 2M account. Those outliers are the signal.",
      "Each outlier is analysed with Gemini to explain why it worked, then turned into hooks, up to twelve variations, a shot-by-shot brief and a script. AI slideshow remakes mean there is nothing to film.",
      "It is agent-first: the same account runs from the web app or from Claude through an MCP server and a Claude Code plugin, so a coding agent can hunt outliers while you build.",
    ],
    features: [
      { title: "Track a niche", body: "Creators, hashtags and keywords on TikTok, Reels and Shorts, refreshed on a schedule." },
      { title: "Outlier score", body: "Views against the creator's own baseline, not raw follower counts." },
      { title: "Why it worked", body: "Video analysis that pulls out the hook, structure and format of each outlier." },
      { title: "Hook tests", body: "Up to twelve variants of a proven hook, or four openings tested against each other." },
      { title: "Slideshow remakes", body: "AI-generated slides for your product, scheduled across four platforms as drafts." },
      { title: "Runs from Claude", body: "Remote MCP server, Claude Code plugin and installable agent skills." },
    ],
    stack: [
      { group: "Backend", items: ["Cloudflare Workers", "D1", "R2", "KV", "Cron Triggers", "Prisma"] },
      { group: "AI", items: ["Gemini video analysis", "Image generation for slides"] },
      { group: "Product", items: ["React", "Vite", "Tailwind", "Supabase Auth", "Stripe"] },
      { group: "Agents", items: ["MCP (Streamable HTTP)", "Claude Code plugin", "Apify scraper actor"] },
    ],
  },
  {
    slug: "axend",
    name: "Axend",
    tagline: "A grooming and self-care plan that tracks what actually changes.",
    meta: "iOS app + axendai.com · since Jun 2026",
    status: "live",
    statusNote: "Live on the App Store as Axend: Grooming & Self-Care",
    summary:
      "Two guided photos become a personal plan across skin, hair, jawline, posture and smile, with daily sessions and a progress snapshot every 14 days. axendai.com is the free front door.",
    icon: "/portfolio/axend/icon.webp",
    cover: { src: "/portfolio/axend/screen-plan.webp", alt: "Axend jawline workout session", fit: "cover-top" },
    screens: [
      { src: "/portfolio/axend/screen-hero.webp", alt: "Axend baseline scan result" },
      { src: "/portfolio/axend/screen-plan.webp", alt: "Axend guided jawline workout" },
      { src: "/portfolio/axend/screen-progress.webp", alt: "Axend progress tracking" },
    ],
    screensLayout: "phones",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/axend-grooming-self-care/id6788362935" },
      { label: "Visit axendai.com", href: "https://axendai.com" },
    ],
    facts: [
      { eyebrow: "Modules", value: "5", label: "Skin, hair, jawline, posture, smile" },
      { eyebrow: "Check-in", value: "14d", label: "Progress snapshot cadence" },
      { eyebrow: "Web scan", value: "478", label: "Facial landmarks, measured on-device" },
      { eyebrow: "Pricing", value: "$49.99", label: "per year, or $4.99 per week" },
    ],
    problem:
      "Self-improvement content is everywhere, but routines rarely stick and nobody can tell if they work. People want a plan built around what they choose to improve, and a private, honest way to see progress.",
    approach: [
      "The app turns a front and profile photo into a baseline, then maps every measured area to a concrete routine or exercise. Scores are cosmetic and personal, never a ranking of worth.",
      "Privacy is a product feature: no account, scans stay on the device, and photos can be deleted in-app. The first App Store submission was rejected under guideline 1.1.1; we reworked the framing and safeguards and shipped.",
      "axendai.com acquires users for free: an attractiveness test that runs entirely in the browser (zero bytes uploaded) plus search-led guides, each pointing to the app.",
    ],
    features: [
      { title: "Guided two-photo scan", body: "Front and profile, with an ambient-light check before you shoot." },
      { title: "Plan across five modules", body: "Step-by-step routines and tutorials for the areas you pick." },
      { title: "Daily sessions", body: "Streaks and check-ins to make the habit stick." },
      { title: "14-day snapshots", body: "Shows what actually moved since your baseline." },
      { title: "Private by design", body: "No sign-in, on-device scans, in-app photo deletion." },
      { title: "Free web scan", body: "MediaPipe face landmarks in the browser, no upload." },
    ],
    stack: [
      { group: "App", items: ["Expo", "React Native", "Reanimated", "expo-camera", "RevenueCat", "AppsFlyer"] },
      { group: "API", items: ["Node / Express", "Vercel serverless", "OpenAI", "Stateless, stores no user data"] },
      { group: "Website", items: ["Astro", "MediaPipe Face Landmarker (WASM)", "Cloudflare Workers"] },
    ],
  },
  {
    slug: "mathly",
    name: "Mathly",
    tagline: "Snap a problem. Learn every step.",
    meta: "iOS + Android app · since Aug 2026",
    status: "beta",
    statusNote: "In TestFlight and Google Play internal testing; store release next",
    summary:
      "An AI math tutor: photograph a problem, printed or handwritten, and get a verified answer, revealed one step at a time, with graphs and follow-up chat.",
    icon: "/portfolio/mathly/icon.webp",
    cover: { src: "/portfolio/mathly/screen-solution.webp", alt: "Mathly step-by-step solution", fit: "cover-top" },
    screens: [
      { src: "/portfolio/mathly/screen-scanner.webp", alt: "Mathly camera scanner" },
      { src: "/portfolio/mathly/screen-solution.webp", alt: "Mathly verified step-by-step solution" },
      { src: "/portfolio/mathly/screen-graph.webp", alt: "Mathly automatic function graph" },
    ],
    screensLayout: "phones",
    links: [{ label: "Mathly support", href: "/mathly/support" }],
    facts: [
      { eyebrow: "Subjects", value: "3", label: "Math from algebra to calculus, physics, chemistry" },
      { eyebrow: "Platforms", value: "2", label: "iOS (with iPad) and Android" },
      { eyebrow: "Top keyword", value: "33.1k", label: "US monthly searches, \"how to complete the square\"" },
      { eyebrow: "Pricing", value: "$39.99", label: "per year with a 3-day trial" },
    ],
    problem:
      "Students don't need another answer machine. Photo solvers hand over a result that is sometimes wrong and rarely understood. Mathly's angle is the opposite: never wrong, and every step earned.",
    approach: [
      "Each solution is checked before it is shown, and steps are revealed one at a time so the student does the thinking. Graphs show what the answer means; chat handles the follow-up questions.",
      "Onboarding asks for subjects, level, goals and preferred explanation style, so explanations fit the student. History stays on the device.",
      "CI builds signed releases for TestFlight and Google Play, and store screenshots and the preview video are generated from the app itself.",
    ],
    features: [
      { title: "Snap to solve", body: "Camera with torch and gallery import; handwriting works too." },
      { title: "Step by step", body: "\"Reveal next step\" teaches the method, not just the answer." },
      { title: "Verified answers", body: "Every solution is checked before it reaches the student." },
      { title: "Auto graphs", body: "Function plots drawn for the problem at hand." },
      { title: "Follow-up chat", body: "Ask why, until it clicks." },
      { title: "Personal onboarding", body: "Level, goals and explanation style shape every answer." },
    ],
    extra: {
      eyebrow: "Distribution",
      title: "Search demand, mapped before launch",
      body: [
        "We researched the Google SERPs for the highest-volume math how-to and practice queries before the app went to the stores. Video, long-form explainers, Q&A threads and downloadable practice sets win these results.",
        "The launch plan publishes worked examples and practice sets in those formats, each pointing to Mathly, with daily rank tracking to double down on whatever reaches the first pages.",
      ],
      bullets: [
        "12 target topics, from completing the square to SAT and ACT practice",
        "Every worked example and answer key verified with SymPy before publishing",
        "Daily rank tracking on the target keywords for six weeks",
      ],
    },
    stack: [
      { group: "App", items: ["Expo", "React Native", "react-native-svg graphs", "RevenueCat"] },
      { group: "Backend", items: ["Vercel serverless", "OpenAI", "Strict JSON solver"] },
      { group: "Delivery", items: ["GitHub Actions", "TestFlight", "Play internal track", "Playwright e2e"] },
    ],
  },
  {
    slug: "calmexam",
    name: "CalmExam",
    tagline: "Exam math practice that's never wrong.",
    meta: "iOS + Android app + calmexam.com · Nov 2026",
    status: "building",
    statusNote: "calmexam.com is live with free practice and a launch waitlist; the app is coming to iOS and Android",
    summary:
      "A calm exam coach for SAT Math, AP Calculus AB and A-Level Maths: a 5-question placement builds a daily plan, and every practice answer is computed by a generator, not predicted by a model.",
    icon: "/portfolio/calmexam/icon.webp",
    cover: { src: "/portfolio/calmexam/screen-today.webp", alt: "CalmExam Today screen with days left and daily goal", fit: "cover-top" },
    screens: [
      { src: "/portfolio/calmexam/screen-plan.webp", alt: "CalmExam plan reveal with projected SAT Math score" },
      { src: "/portfolio/calmexam/screen-answer.webp", alt: "CalmExam verified answer with steps and common pitfalls" },
      { src: "/portfolio/calmexam/screen-explain.webp", alt: "CalmExam explaining a mistake from the verified steps" },
    ],
    screensLayout: "phones",
    links: [
      { label: "Visit calmexam.com", href: "https://calmexam.com" },
      { label: "Try a free practice test", href: "https://calmexam.com/sat-math-practice-test" },
    ],
    facts: [
      { eyebrow: "Exams", value: "3", label: "SAT Math, AP Calculus AB, A-Level Maths" },
      { eyebrow: "Generators", value: "35", label: "Problem templates with computed answers" },
      { eyebrow: "Checked", value: "3,000", label: "Seeds verified per template on every build" },
      { eyebrow: "Free pages", value: "21", label: "Topic practice pages, 10 fresh questions daily" },
    ],
    problem:
      "AI photo solvers predict an answer from a picture. Usually that works, but on exam prep \"usually\" isn't good enough: a misread sign changes the answer, and the tone stays confident either way. They also solve homework rather than plan the weeks before an exam.",
    approach: [
      "Every problem comes from an on-device generator that computes the answer and the steps together, so the app can say \"Verified answer\" plainly. A script generates every template across 3,000 seeds and checks the answers.",
      "AI is used only to explain a mistake, grounded in the verified steps, and it can't change the answer. Students pick their exam and date, take a 5-question placement, and get a short daily plan focused on their weakest topics.",
      "The design is deliberately quiet: no confetti, no red badges, no countdown pressure, one problem at a time.",
    ],
    features: [
      { title: "Exam and date", body: "SAT Math, AP Calculus AB or A-Level Maths, with days left counted for you." },
      { title: "5-question placement", body: "Real questions across the syllabus find the topics that need you most." },
      { title: "Projected plan", body: "Minutes per day, focus topics and where steady practice can take you." },
      { title: "Verified answers", body: "The answer, numbered steps and the pitfalls that catch most students." },
      { title: "Explain my mistake", body: "A coach grounded in the verified steps, never a guessed answer." },
      { title: "Calm daily goal", body: "Today's goal, the week at a glance and days to the exam." },
    ],
    extra: {
      eyebrow: "Distribution",
      title: "The website is the free front door",
      body: [
        "calmexam.com runs on one Cloudflare Worker that serves the marketing site, the practice pages and the API from the same verified problem engine as the app.",
        "Each exam hub and topic page renders ten fresh questions a day server-side, so the site earns search traffic with real practice instead of thin content, and every page invites students onto the launch waitlist.",
      ],
      bullets: [
        "3 exam hubs and 21 topic practice pages, no account needed",
        "A free 3-question SAT set on the homepage, regenerated daily",
        "Waitlist stored in Cloudflare D1, segmented by exam and platform",
      ],
    },
    stack: [
      { group: "App", items: ["Expo", "React Native", "On-device problem engine", "RevenueCat"] },
      { group: "Web + API", items: ["Cloudflare Workers", "D1", "Workers AI (Llama 3.1)", "esbuild"] },
      { group: "Quality", items: ["Engine verifier (3,000 seeds × template)", "Deterministic demo states for screenshots"] },
    ],
  },
  {
    slug: "zeroshots",
    name: "ZeroShots",
    tagline: "Tinder for your screenshots.",
    meta: "iOS app · pre-launch",
    status: "building",
    statusNote: "Not on the App Store yet; the launch waitlist is open at zeroshots.app",
    summary:
      "A swipe-to-triage camera-roll cleaner: left to delete, right to keep, with a recap of the storage you freed. Built to clear 200 screenshots in five minutes.",
    cover: { src: "/gen/zeroshots-tile.webp", alt: "ZeroShots app on iPhone", fit: "cover-center" },
    screens: [{ src: "/gen/zeroshots-tile.webp", alt: "ZeroShots swipe interface" }],
    screensLayout: "phones",
    links: [{ label: "Join the waitlist", href: "https://zeroshots.app" }],
    facts: [
      { eyebrow: "Session", value: "5min", label: "Target time to clear 200 screenshots" },
      { eyebrow: "Gestures", value: "2", label: "Left to delete, right to keep" },
      { eyebrow: "Privacy", value: "Local", label: "Screenshots are detected on the device" },
      { eyebrow: "Platform", value: "iOS", label: "iPhone" },
    ],
    problem:
      "Camera rolls fill up with screenshots nobody looks at again. Cleaning them up is tedious enough that nobody does it.",
    approach: [
      "ZeroShots turns the backlog into a fast swipe session: one decision per screenshot, no folders or labels.",
      "Every swipe shows the megabytes reclaimed, and a session recap keeps score, so cleaning up feels like a win instead of a chore.",
      "It is launching with a waitlist that offers early subscribers free Pro, so the first users arrive on day one.",
    ],
    features: [
      { title: "The Stack", body: "Swipe through screenshots one at a time." },
      { title: "The Vault", body: "Bulk-select a month of junk and delete it in one tap." },
      { title: "Session recap", body: "Storage freed, deleted vs kept, and time spent." },
      { title: "Local scan", body: "Screenshots are told apart from photos on the device." },
    ],
    stack: [{ group: "App", items: ["iOS"] }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
