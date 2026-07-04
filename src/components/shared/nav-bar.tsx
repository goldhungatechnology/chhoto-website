"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-provider";
import { Logo } from "./logo";
import { Menu, X, ArrowRight } from "lucide-react";

export interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg transition-colors duration-250 h-16 flex items-center",
      className
    )}>
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6">
        
        {/* Left: Brand Logo */}
        <Logo onClick={() => setActiveTab("Home")} />

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/30">
          {items.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-xs font-semibold px-4 py-1.5 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls & CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <Link
            href="#home"
            onClick={() => setActiveTab("Home")}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl hover:bg-primary/95 active:scale-95 transition-all text-xs shadow-md shadow-primary/10 cursor-pointer shrink-0 animate-none"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none shrink-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Expanding Dropdown Panel */}
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
                    setActiveTab(item.name);
                    setIsOpen(false);
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
    </header>
  );
}
