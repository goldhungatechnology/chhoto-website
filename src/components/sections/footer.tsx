"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="pt-8 pb-16 text-center text-xs text-muted-foreground border-t border-border/50">
      <p>
        © {new Date().getFullYear()} Chhoto Technology. All rights reserved.
      </p>
    </footer>
  );
}
