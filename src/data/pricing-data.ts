export interface PricingPlan {
  name: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const pricingData: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    frequency: "forever",
    description: "Perfect for personal projects and testing.",
    features: [
      "100 links per month",
      "Basic click tracking",
      "1-week data retention",
      "Automatic HTTPS SSL",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$0",
    frequency: "per month",
    description: "For creators, developers, and growing brands.",
    features: [
      "Unlimited short links",
      "Real-time detailed analytics",
      "Custom domain support",
      "1-year data retention",
      "API Access (100 req/min)",
      "Priority email support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "billed annually",
    description: "For high-volume traffic and custom team setups.",
    features: [
      "Dedicated edge routing",
      "Advanced security & SSO",
      "Unlimited data retention",
      "Custom API rate limits",
      "99.99% Uptime SLA",
      "24/7 dedicated manager support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
