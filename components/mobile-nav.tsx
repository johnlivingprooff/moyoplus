"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About Us", href: "#about-us" },
  { label: "Our Focus Areas", href: "#focus-areas" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Commitment", href: "#commitment" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Stories", href: "#stories" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-ink transition-colors hover:bg-brand-orange focus-visible:outline-2 focus-visible:outline-brand-teal"
      >
        {open ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute top-12 right-0 z-50 w-64 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-xl"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 font-inter text-sm font-medium text-zinc-700 transition-colors hover:bg-brand-orange hover:text-brand-ink focus-visible:bg-brand-orange focus-visible:text-brand-ink focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
