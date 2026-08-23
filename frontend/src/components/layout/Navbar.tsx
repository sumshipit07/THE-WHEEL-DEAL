"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]">
      <nav className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="font-display text-xl font-bold tracking-tight"
          >
            THE WHEEL DEAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/browse"
              className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--teal)]"
            >
              Browse
            </Link>

            <Link
              href="/how-it-works"
              className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--teal)]"
            >
              How It Works
            </Link>

            <Link
              href="/safety"
              className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--teal)]"
            >
              Safety & Trust
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/list-your-vehicle"
              className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              List Your Vehicle
            </Link>

            <Link
              href="/browse"
              className="rounded-md bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--teal-deep)]"
            >
              Find a Ride
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-md border border-[var(--border)] p-2 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        {menuOpen && (
          <div className="border-t border-[var(--border)] py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/browse"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm text-[var(--ink-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--teal)]"
              >
                Browse
              </Link>

              <Link
                href="/how-it-works"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm text-[var(--ink-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--teal)]"
              >
                How It Works
              </Link>

              <Link
                href="/safety"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm text-[var(--ink-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--teal)]"
              >
                Safety & Trust
              </Link>

              <div className="my-2 border-t border-[var(--border)]" />

              <Link
                href="/list-your-vehicle"
                onClick={closeMenu}
                className="rounded-md border border-[var(--border)] px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-[var(--surface)]"
              >
                List Your Vehicle
              </Link>

              <Link
                href="/browse"
                onClick={closeMenu}
                className="rounded-md bg-[var(--teal)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--teal-deep)]"
              >
                Find a Ride
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}