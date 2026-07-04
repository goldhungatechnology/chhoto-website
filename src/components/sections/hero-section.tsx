"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

interface ShortenedLink {
  original: string;
  short: string;
  clicks: number;
}

function HeroBanner() {
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

interface ShortenerFormProps {
  inputUrl: string;
  setInputUrl: (url: string) => void;
  isShortening: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

function ShortenerForm({
  inputUrl,
  setInputUrl,
  isShortening,
  onSubmit,
}: ShortenerFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Link2
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />
        <input
          type="text"
          placeholder="Paste your long link here..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 bg-background/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/10 rounded-2xl outline-none text-sm transition-all"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isShortening}
        className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all disabled:opacity-75 cursor-pointer text-sm"
      >
        {isShortening ? (
          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <>
            <span>Shorten</span>
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

interface LinkListProps {
  shortenedUrls: ShortenedLink[];
  copiedIndex: number | null;
  onCopy: (text: string, index: number) => void;
}

function LinkList({ shortenedUrls, copiedIndex, onCopy }: LinkListProps) {
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

export function HeroSection() {
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
    if (!inputUrl) return;

    setIsShortening(true);
    setTimeout(() => {
      const code = Math.random().toString(36).substring(2, 7);
      const newLink = {
        original: inputUrl.startsWith("http")
          ? inputUrl
          : `https://${inputUrl}`,
        short: `chhoto.co/${code}`,
        clicks: 0,
      };

      setShortenedUrls([newLink, ...shortenedUrls]);
      setInputUrl("");
      setIsShortening(false);

      if (autoCopy) {
        navigator.clipboard.writeText(newLink.short);
        setCopiedIndex(0);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
    }, 800);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-10 sm:pt-20"
    >
      <HeroBanner />

      {/* Interactive URL Shortener Demo Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-2xl mt-12 bg-card/40 backdrop-blur-xl border border-border/80 rounded-3xl p-6 shadow-2xl relative"
      >
        <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md shadow-primary/20">
          Live Demo
        </div>

        <ShortenerForm
          inputUrl={inputUrl}
          setInputUrl={setInputUrl}
          isShortening={isShortening}
          onSubmit={handleShorten}
        />

        {/* <LinkList */}
        {/*   shortenedUrls={shortenedUrls} */}
        {/*   copiedIndex={copiedIndex} */}
        {/*   onCopy={handleCopy} */}
        {/* /> */}
      </motion.div>
    </section>
  );
}
