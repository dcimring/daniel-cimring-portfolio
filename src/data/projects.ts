import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "GazettePulse",
    description:
      "Early warning for offshore law firms and fiduciaries. Watches the official gazettes in Cayman, BVI, Bermuda, Jersey and Guernsey and turns notices into alerts tied to the section of law behind them.",
    href: "https://gazettepulse.com",
    tags: ["AI", "Law", "Compliance"],
    details: [
      "There are three parts to it. An insolvency radar flags liquidations, winding-up petitions and creditor meetings when they’re gazetted, matched against a firm’s clients and counterparties. An IP watch checks new marks against a client’s brands and dates each opposition window. Market analytics show which firms are taking liquidator appointments and where registrations are moving, starting with Cayman and BVI.",
      "Every alert cites the gazette or register it came from and links to the controlling section in the regulatory library, which holds more than 5,000 Acts, Regulations, Rules and guidance documents.",
      "It’s in private pilot now, with a handful of firms per jurisdiction. The regulatory library is already live.",
    ],
  },
  {
    title: "Sentinel58",
    description:
      "Watches crypto markets, centralised and decentralised, for exploits, depegs, sanctions and liquidity shocks, and flags them as they happen.",
    href: "https://www.sentinel58.com",
    tags: ["Crypto", "Risk", "SaaS"],
    details: [
      "It’s built for funds and treasuries holding crypto. You pick the exchanges, custody providers and DeFi protocols you actually use, and those go to the top of your dashboard so you aren’t reading about things that don’t affect you.",
      "It listens to a live stream from X and to security bulletins, and Gemini scans continuously to pick out the real incidents. Every alert links to the tweets and posts behind it so your team can check the evidence, and comes with suggested steps like revoking contract approvals.",
      "There’s also a 0 to 100 threat score for the whole market, and you can see a snapshot of the live board without signing in.",
    ],
  },
  {
    title: "Cayman Cup",
    description:
      "Tournament platform for the Vanta Black Water Cayman Cup, showcasing team rosters, live standings, match results, and bracket play in Grand Cayman.",
    href: "https://caymancup.ky",
    tags: ["HTML", "Sports", "Pickleball"],
    details: [
      "The 2026 Cup ran from 29 to 31 May in Grand Cayman, with four teams and sixteen players. Six round-robin matches led into Sunday’s playoffs and the final, which the Stingrays won 3–1 over the Legends.",
      "The site has rosters, match results, standings, the playoff bracket, statistics, a photo gallery and the full broadcast. Pickleball Cayman presents the tournament.",
    ],
  },
  {
    title: "Schooner",
    description:
      "Matches workers across the Caribbean with jobs in the region and uses AI agents to handle the steps in between. Built for the FutureCaribbean Buildathon.",
    href: "https://caribbean.work",
    tags: ["AI", "Labor", "Infrastructure"],
    details: [
      "It starts with Cayman. Schooner reads more than 65 sources twice a day, including employers’ own careers pages, recruiters, LinkedIn and WORC, the portal where every work-permit vacancy has to be advertised.",
      "You talk to it in a chat thread, on Telegram during the pilot and WhatsApp after that. There’s no account to create. Send your CV or a voice note about your work and it builds a profile for you to confirm.",
      "Each job comes back with a score and the reason for it, including what you’re missing. When you say yes it drafts the application, and nothing gets sent until you’ve read it. It’s in private pilot now, with a waitlist.",
    ],
  },
  {
    title: "Idea Validator",
    description:
      "Platform to manage and validate startup ideas via personalized feedback links and industry insights.",
    href: "https://ideas.danielcimring.com",
    tags: ["React", "Feedback", "SaaS"],
    details: [
      "There are two sides to it. You keep your ideas in an admin dashboard and watch the feedback come in, and each reviewer gets their own link to a page where they evaluate them.",
    ],
  },
  {
    title: "Closing Agent",
    description:
      "One dashboard for a property closing. Keeps buyer, seller, agents and lawyers on the same page with shared documents and deadline tracking.",
    href: "https://closing-agent.pages.dev",
    tags: ["AI", "Python", "Data"],
    details: [
      "The demo follows a condo sale in Cayman through four phases: offer accepted, due diligence, execution and completion. It shows the days left and where each person stands, from buyer and seller to the agents, both attorneys and the bank.",
      "Documents sit in one vault with a status on each, so a missing RL27 filing or a passport about to expire gets flagged. It also works out the closing statement, including stamp duty and strata proration, and has an AI check that compares the numbers against the documents. The deal in the demo is made up.",
    ],
  },
  {
    title: "Corporate League",
    description:
      "WordPress plugin for Pickleball Cayman that turns the league’s Excel sheet into live leaderboards and status reports.",
    href: "https://www.corpleague.xyz/leaderboard",
    tags: ["WP", "Automation", "Discord"],
    details: [
      "The leaderboard covers nine divisions. Each team shows its last five results, games won percentage and points difference, and you can tap a team to see its matches.",
      "Teams are ranked by games won percentage, then points scored. There’s also a button that turns a division’s standings into an image sized for Instagram, WhatsApp or Facebook.",
    ],
  },
  {
    title: "CaymanDink",
    description:
      "Independent tracker of Cayman Islands pickleball ratings. Daily rankings, weekly movers, and the full rating history of every player.",
    href: "https://caymandink.com",
    tags: ["React", "Stats", "Pickleball"],
    details: [
      "It covers every rated player in Cayman, in both doubles and singles, with ratings pulled daily from pickleball.ky and every change recorded since February.",
      "The board shows each player’s rating, how many rounds they’ve played and how far they’ve moved up or down.",
    ],
  },
  {
    title: "Finance AI",
    description:
      "Local-first AI dashboard for bank statements. Instant insights into spending patterns with zero setup.",
    tags: ["AI", "Privacy", "Finance"],
  },
  {
    title: "Trade Pilot",
    description:
      "Portfolio tracking tool with thesis documentation that syncs with brokerages and exchanges.",
    tags: ["Finance", "Portfolio", "SaaS"],
  },
  {
    title: "Alpha Terminal",
    description:
      "Tracks public Twitter handles to detect buy/sell signals and build performance track records over time.",
    href: "https://tweet-alpha.vercel.app",
    tags: ["AI", "Twitter", "Trading"],
    details: [
      "The feed shows each tweet with its ticker, a sentiment label and a link back to the original post.",
    ],
  },
  {
    title: "Cayman Property AI",
    description:
      "Search Cayman property listings in plain English and get a dashboard back. ROI estimates are next.",
    tags: ["AI", "Python", "Data"],
  },
  {
    title: "Ruby Cimring",
    description:
      "Personal site for my daughter Ruby — a photo timeline, adventures, the things she makes, and a guestbook visitors can sign. She runs it herself now.",
    href: "https://rubycimring.com",
    tags: ["HTML", "Family", "Personal Site"],
    page: false,
  },
];
