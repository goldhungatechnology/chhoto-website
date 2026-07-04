"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 select-none pt-20 pb-16">
      {/* Background decoration elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] left-[10%] right-[10%] h-[50%] w-[80%] rounded-full bg-primary/0 dark:bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] h-[40%] w-[45%] rounded-full bg-indigo-500/0 dark:bg-indigo-500/5 blur-[120px]" />
        <div className="absolute top-[80%] -left-[10%] h-[40%] w-[45%] rounded-full bg-violet-500/0 dark:bg-violet-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        <HeroSection />

        <AboutSection />

        <FeaturesSection />

        <PricingSection />

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}
