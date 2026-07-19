"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function BetaBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small timeout to animate in after load
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 30, x: "-50%", scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/75 backdrop-blur-md p-4.5 shadow-2xl flex items-start gap-4 pr-10">
            {/* Background subtle glowing gradient */}
            <div className="absolute -inset-x-20 -top-40 -z-10 h-60 w-96 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

            <div className="flex-shrink-0 p-2 rounded-xl bg-primary/10 text-primary">
              <Sparkles size={16} className="animate-pulse" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Active Public Beta
              </h4>
              <h3 className="text-sm font-semibold text-foreground">
                Help Us Shape the Future of Chhoto
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chhoto is currently in active development. We are constantly improving our redirect engine and features. Spot a bug or have an idea? We would love to hear your feedback!
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="absolute top-3.5 right-3.5 p-1 rounded-lg border border-border/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer hover:rotate-90 duration-200"
              aria-label="Dismiss banner"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
