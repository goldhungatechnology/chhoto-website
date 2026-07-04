"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureItem, featuresData } from "@/data/features-data";

interface FeatureCardProps {
  item: FeatureItem;
}

function FeatureCard({ item }: FeatureCardProps) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-card hover:bg-card/80 border border-border/80 hover:border-primary/30 p-6 rounded-3xl shadow-md transition-all flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.colorClass}`}>
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-muted-foreground text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <h2 className="text-3xl font-bold">Powerful tools, simple usage</h2>
        <p className="text-muted-foreground">
          Everything you need to direct your web traffic, monitor
          performance, and customize your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((item, idx) => (
          <FeatureCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
