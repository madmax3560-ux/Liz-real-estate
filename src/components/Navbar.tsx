"use client";

import { useEffect, useState } from "react";
import { agent } from "@/data";
import { PhoneIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#communities", label: "Communities" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(28,46,39,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none">
          <span
            className={`font-serif text-xl tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            Elizabeth Finnegan
          </span>
          <span
            className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-widest2 transition-colors ${
              scrolled ? "text-brass-600" : "text-brass-200"
            }`}
          >
            Houlihan Lawrence · Yorktown
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brass-500 ${
                scrolled ? "text-ink-soft" : "text-cream/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={agent.contact.cellHref} className="btn-brass !px-5 !py-2.5">
            <PhoneIcon className="h-4 w-4" />
            {agent.contact.cell}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-forest-100 bg-cream md:hidden">
          <div className="container-x flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href={agent.contact.cellHref}
              className="btn-brass mt-3"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" />
              Call or Text {agent.contact.cell}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
