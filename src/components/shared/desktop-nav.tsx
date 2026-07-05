"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/data/navbar-data";
import { ActiveIndicator } from "./active-indicator";

interface DesktopNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (name: string) => void;
}

export function DesktopNav({ items, activeTab, onTabChange }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/30">
      {items.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => onTabChange(item.name)}
            className={cn(
              "relative cursor-pointer text-xs font-semibold px-4 py-1.5 rounded-full transition-colors",
              "text-foreground/80 hover:text-primary",
              isActive && "text-primary"
            )}
          >
            <span>{item.name}</span>
            {isActive && <ActiveIndicator />}
          </Link>
        );
      })}
    </nav>
  );
}
