import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <Link
          href="/"
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
          aria-label="Open menu"
          className="rounded-md border border-[var(--border)] p-2 md:hidden"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}