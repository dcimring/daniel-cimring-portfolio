import {
  BarChart3,
  Bitcoin,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Terminal,
  Workflow,
} from "lucide-react";
import type { Skill } from "../types";

/**
 * 16 badges = exact rows at every breakpoint (2 and 4 columns). Keep the count
 * a multiple of 4, strongest skills first.
 */
export const skills: Skill[] = [
  { name: "AI Coding Agents", icon: Bot },
  { name: "Python", icon: Terminal },
  { name: "React / TS", icon: Code2 },
  { name: "Node.js", icon: Terminal },
  { name: "Supabase", icon: Database },
  { name: "Convex", icon: Database },
  { name: "Tailwind", icon: Code2 },
  { name: "Cloud Run", icon: Cloud },
  { name: "Vercel", icon: Globe },
  { name: "Cloudflare", icon: Globe },
  { name: "Google Apps Script", icon: Code2 },
  { name: "Automation", icon: Workflow },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Finance", icon: BarChart3 },
  { name: "Bitcoin", icon: Bitcoin },
  { name: "System Design", icon: Cpu },
];
