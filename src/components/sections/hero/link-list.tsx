"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ExternalLink } from "lucide-react";
import { ShortenedLink } from "./use-shortener";

interface LinkListProps {
  shortenedUrls: ShortenedLink[];
  copiedIndex: number | null;
  onCopy: (text: string, index: number) => void;
}

export function LinkList({ shortenedUrls, copiedIndex, onCopy }: LinkListProps) {
  return (
    <div className="mt-8 text-left space-y-3">
      <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase pl-1">
        Simulated Link Manager
      </div>
      <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {shortenedUrls.map((item, idx) => (
            <motion.div
              key={item.short}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/40 border border-border/60 hover:border-primary/20 rounded-2xl gap-3 transition-colors group"
            >
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground text-sm selection:bg-primary/20 select-text">
                    {item.short}
                  </span>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                    {item.clicks} clicks
                  </span>
                </div>
                <div className="text-xs text-muted-foreground truncate max-w-[280px] sm:max-w-[400px]">
                  {item.original}
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => onCopy(item.short, idx)}
                  className="p-2 hover:bg-background/80 border border-border/50 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"
                  title="Copy Link"
                >
                  {copiedIndex === idx ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
                <a
                  href={item.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-background/80 border border-border/50 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                  title="Open Link"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
