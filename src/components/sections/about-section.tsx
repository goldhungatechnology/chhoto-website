"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";
import { aboutStats, edgeLocations } from "@/data/about-data";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        Designed to be minimalist, engineered for reliability.
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Chhoto was built to make sharing links simple, fast, and professional.
        Instead of offering only URL shortening, it brings together branded
        links, QR codes, analytics, and link management in one clean
        platform—without unnecessary complexity.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        By combining lightning-fast redirects, edge-powered performance, custom
        branding, dynamic QR codes, detailed analytics, and an intuitive control
        hub, Chhoto gives individuals, creators, and businesses complete control
        over how their links are shared, tracked, and experienced.
      </p>
      <div className="flex items-center gap-4 pt-2">
        {aboutStats.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            {idx > 0 && <div className="text-muted-foreground/30">|</div>}
            <div className="flex items-center gap-2">
              {stat.type === "pulse" ? (
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              ) : (
                <Zap
                  size={14}
                  className={stat.highlightColor || "text-muted-foreground"}
                />
              )}
              <span className="text-xs font-semibold text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}

function InfrastructureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 bg-card border border-border/80 rounded-3xl overflow-hidden shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
      <div className="space-y-6">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
          <Globe size={24} />
        </div>
        <h3 className="text-xl font-bold">Global Infrastructure</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Every short link is deployed to multiple edge locations worldwide.
          Your users redirect instantly, no matter where they click from.
        </p>
        {edgeLocations.map((loc) => (
          <div
            key={loc.name}
            className="bg-muted/50 p-4 rounded-xl border border-border/50 flex justify-between text-xs"
          >
            <span className="text-muted-foreground font-mono">{loc.name}</span>
            <span className="text-green-500 font-bold font-mono">
              {loc.latency}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AboutContent />
        <InfrastructureCard />
      </div>
    </section>
  );
}
