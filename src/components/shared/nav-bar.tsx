"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/data/navbar-data";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavControls } from "./nav-controls";

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (name: string) => setActiveTab(name);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg transition-colors duration-250 h-16 flex items-center",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6">
        <Logo onClick={() => handleTabChange("Home")} />

        <DesktopNav
          items={items}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <NavControls
          isOpen={isOpen}
          onToggle={toggleMenu}
          onCtaClick={() => handleTabChange("Home")}
        />
      </div>

      <MobileNav
        items={items}
        activeTab={activeTab}
        isOpen={isOpen}
        onTabChange={handleTabChange}
        onClose={closeMenu}
      />
    </header>
  );
}

export type { NavItem };
