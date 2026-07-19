"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/auth-context";

export interface ShortenedLink {
  original: string;
  short: string;
  clicks: number;
}

export function useShortener() {
  const { isLoggedIn, isLoading } = useAuth();
  const autoCopy = true;
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedLink[]>([
    {
      original: "https://github.com/google-deepmind/antigravity",
      short: "chhoto.co/antigravity",
      clicks: 124,
    },
    {
      original: "https://nextjs.org/docs/app/building-your-application",
      short: "chhoto.co/nextjs-docs",
      clicks: 89,
    },
  ]);
  const [isShortening, setIsShortening] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl || isLoading) return;

    setIsShortening(true);
    if (isLoggedIn) {
      window.location.href = "https://app.chhoto.tech/links";
    } else {
      window.location.href = "https://auth.chhoto.tech/register";
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Helper to determine if pasted string is a URL/link-like structure
  const isLink = (text: string): boolean => {
    const trimmed = text.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      return true;
    }
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+(\/[^\s]*)?$/i;
    return pattern.test(trimmed);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text");
    if (isLink(pastedText)) {
      e.preventDefault(); // Cancel standard paste to handle redirect
      if (isLoading) return;
      if (isLoggedIn) {
        window.location.href = "https://app.chhoto.tech/links";
      } else {
        window.location.href = "https://auth.chhoto.tech/register";
      }
    }
  };

  return {
    inputUrl,
    setInputUrl,
    shortenedUrls,
    isShortening,
    isLoading,
    copiedIndex,
    handleShorten,
    handleCopy,
    handlePaste,
  };
}
