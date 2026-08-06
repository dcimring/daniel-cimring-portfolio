import {
  Terminal,
  Cpu,
  BarChart3,
  Bitcoin,
  Code2,
  Database,
  Globe,
} from "lucide-react";
import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "Python", icon: Terminal },
  { name: "React / TS", icon: Code2 },
  { name: "Bitcoin", icon: Bitcoin },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Architecture", icon: Cpu },
  { name: "AI Coding", icon: Terminal },
  { name: "Supabase", icon: Database },
  { name: "Vite", icon: Globe },
  { name: "System Design", icon: Cpu },
  { name: "Finance", icon: BarChart3 },
  { name: "Node.js", icon: Terminal },
  { name: "Tailwind", icon: Code2 },
  { name: "Cloud Run", icon: Globe },
  { name: "Google Apps Script", icon: Code2 },
  { name: "Vercel", icon: Globe },
  { name: "Convex", icon: Database },
];
