"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-medium tracking-wide">
        <Sparkles size={14} className="animate-pulse" />
        <span>Introducing Chhoto v1.0</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
        Make your links{" "}
        <span className="underline decoration-primary/40 decoration-wavy">
          Chhoto
        </span>
        , smart, and swift
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Chhoto (meaning <span className="italic">small</span>) transforms long
        URLs into short, trackable links that load in milliseconds and look
        premium.
      </p>
    </motion.div>
  );
}
