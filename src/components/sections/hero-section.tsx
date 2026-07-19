"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBanner } from "./hero/hero-banner";
import { ShortenerForm } from "./hero/shortener-form";
import { useShortener } from "./hero/use-shortener";

// Optional: Import LinkList if we need to enable simulated link manager in the future
// import { LinkList } from "./hero/link-list";

export function HeroSection() {
  const {
    inputUrl,
    setInputUrl,
    isShortening,
    handleShorten,
    handlePaste,
  } = useShortener();

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-10 sm:pt-20"
    >
      <HeroBanner />

      {/* Interactive URL Shortener Demo Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-2xl mt-12 bg-card/40 backdrop-blur-xl border border-border/80 rounded-3xl p-6 shadow-2xl relative"
      >
        <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md shadow-primary/20">
          Live Demo
        </div>

        <ShortenerForm
          inputUrl={inputUrl}
          setInputUrl={setInputUrl}
          isShortening={isShortening}
          onSubmit={handleShorten}
          onPaste={handlePaste}
        />
      </motion.div>
    </section>
  );
}
