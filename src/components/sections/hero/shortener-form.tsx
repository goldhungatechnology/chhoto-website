"use client";

import React from "react";
import { Link2, ArrowRight } from "lucide-react";

interface ShortenerFormProps {
  inputUrl: string;
  setInputUrl: (url: string) => void;
  isShortening: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

export function ShortenerForm({
  inputUrl,
  setInputUrl,
  isShortening,
  onSubmit,
  onPaste,
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
          onPaste={onPaste}
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
