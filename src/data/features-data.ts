import { Zap, Shield, Lock, LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

export const featuresData: FeatureItem[] = [
  {
    title: "Real-time Analytics",
    description: "Track visits, click sources, referrers, and locations immediately as they happen.",
    icon: Zap,
    colorClass: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "SSL & DDoS Shield",
    description: "Every link generated comes automatically with HTTPS. Guarded against spam queries.",
    icon: Shield,
    colorClass: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "GDPR Compliant",
    description: "Respect your user's privacy. We collect click data without caching sensitive personal info.",
    icon: Lock,
    colorClass: "bg-violet-500/10 text-violet-500",
  },
];
