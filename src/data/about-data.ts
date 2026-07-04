export interface SLAStat {
  label: string;
  type: "pulse" | "icon";
  highlightColor?: string;
}

export interface EdgeLocation {
  name: string;
  latency: string;
  status: "fast" | "normal" | "slow";
}

export const aboutStats: SLAStat[] = [
  {
    label: "99.99% Uptime SLA",
    type: "pulse",
  },
  {
    label: "<40ms Global Latency",
    type: "icon",
    highlightColor: "text-amber-500",
  },
];

export const edgeLocations: EdgeLocation[] = [
  {
    name: "Tokyo Edge",
    latency: "12ms",
    status: "fast",
  },
  {
    name: "London Edge",
    latency: "22ms",
    status: "fast",
  },
];
