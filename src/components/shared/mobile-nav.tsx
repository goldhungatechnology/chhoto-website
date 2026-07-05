"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { NavItem } from "@/data/navbar-data";

interface MobileNavProps {
  items: NavItem[];
  activeTab: string;
  isOpen: boolean;
  onTabChange: (name: string) => void;
  onClose: () => void;
}

export function MobileNav({ items, activeTab, isOpen, onTabChange, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/60 shadow-xl md:hidden overflow-hidden flex flex-col p-4 space-y-1 z-40"
        >
          {items.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => {
                  onTabChange(item.name);
                  onClose();
                }}
                className={cn(
                  "w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                <span>{item.name}</span>
                {isActive && <ArrowRight size={14} />}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
