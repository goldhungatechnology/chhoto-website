"use client";

import React from "react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback received! (Simulated)");
  };

  return (
    <section id="contact" className="py-12 scroll-mt-24">
      <div className="max-w-2xl mx-auto bg-card/60 backdrop-blur-xl border border-border/85 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-sm">
            Have questions or need enterprise integrations? Drop us a line.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground animate-none">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 bg-background/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/10 rounded-xl outline-none text-sm transition-all"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-muted-foreground animate-none">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-background/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/10 rounded-xl outline-none text-sm transition-all"
                required
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-muted-foreground animate-none">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full px-4 py-2.5 bg-background/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/10 rounded-xl outline-none text-sm transition-all resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-xl transition-all cursor-pointer text-sm shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
