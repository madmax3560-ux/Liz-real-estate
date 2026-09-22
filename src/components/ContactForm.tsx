"use client";

import { useState } from "react";
import { agent } from "@/data";
import { ArrowIcon } from "./Icons";

const interests = [
  "Buying a home",
  "Selling a home",
  "Investing",
  "Just exploring",
];

export function ContactForm() {
  const [interest, setInterest] = useState(interests[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website inquiry — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `${agent.contact.emailHref}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-forest-200 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-colors focus:border-brass-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brass-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Name
          </span>
          <input name="name" required placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="(000) 000-0000"
            className={field}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Email
        </span>
        <input
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className={field}
        />
      </label>

      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
          I&rsquo;m interested in
        </span>
        <div className="flex flex-wrap gap-2">
          {interests.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setInterest(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                interest === option
                  ? "bg-forest-700 text-cream"
                  : "border border-forest-200 bg-white text-forest-700 hover:border-forest-400"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell Liz a little about what you're looking for…"
          className={`${field} resize-none`}
        />
      </label>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
        <ArrowIcon className="h-4 w-4" />
      </button>
      <p className="text-xs text-ink-soft/70">
        Prefer to talk now? Call or text {agent.contact.cell}.
      </p>
    </form>
  );
}
