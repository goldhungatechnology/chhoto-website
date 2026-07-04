"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PricingPlan, pricingData } from "@/data/pricing-data";

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all ${
        plan.popular
          ? "bg-card border-primary/40 shadow-2xl ring-1 ring-primary/20"
          : "bg-card/60 backdrop-blur-md border-border/80 hover:border-primary/20 shadow-lg"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Sparkles size={10} className="animate-pulse" />
          <span>Most Popular</span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">
            {plan.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1 text-foreground">
          <span className="text-4xl font-extrabold tracking-tight">
            {plan.price}
          </span>
          {plan.price !== "Custom" && (
            <span className="text-sm font-semibold text-muted-foreground">
              /{plan.frequency}
            </span>
          )}
        </div>

        <div className="w-full h-[1px] bg-border/60" />

        <ul className="space-y-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                size={16}
                className="text-primary mt-0.5 shrink-0"
              />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          type="button"
          className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-sm ${
            plan.popular
              ? "bg-primary text-primary-foreground hover:bg-primary/95 shadow-md shadow-primary/10"
              : "bg-muted hover:bg-muted/80 text-foreground border border-border/50"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-medium tracking-wide">
          <span>Flexible Plans</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground">
          Choose the plan that fits your growth. All plans include our global edge redirect engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {pricingData.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
