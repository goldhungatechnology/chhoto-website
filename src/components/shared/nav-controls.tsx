"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-provider";

interface NavControlsProps {
  isOpen: boolean;
  onToggle: () => void;
  onCtaClick: () => void;
}

export function NavControls({
  isOpen,
  onToggle,
  onCtaClick,
}: NavControlsProps) {
  const REGISTER_ROUTE = "https://auth.chhoto.tech/register";
  const APP_ROUTE = "https://app.chhoto.tech/dashboard";

  const isLoggedIn = false;
  return (
    <div className="flex items-center gap-3">
      <ThemeToggle />

      {isLoggedIn ? (
        <Link
          href={APP_ROUTE}
          onClick={onCtaClick}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl hover:bg-primary/95 active:scale-95 transition-all text-xs shadow-md shadow-primary/10 cursor-pointer shrink-0 animate-none"
        >
          Go to App
        </Link>
      ) : (
        <Link
          href={REGISTER_ROUTE}
          onClick={onCtaClick}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl hover:bg-primary/95 active:scale-95 transition-all text-xs shadow-md shadow-primary/10 cursor-pointer shrink-0 animate-none"
        >
          Get Started
        </Link>
      )}

      <button
        type="button"
        onClick={onToggle}
        className="md:hidden p-2 rounded-xl border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none shrink-0"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>
  );
}
