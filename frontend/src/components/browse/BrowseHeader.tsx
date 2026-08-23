type BrowseHeaderProps = {
  location?: string;
  radius?: number;
};

export default function BrowseHeader({
  location = "Your location",
  radius = 5,
}: BrowseHeaderProps) {
  return (
    <header className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
        Browse nearby
      </p>

      <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-[var(--ink)] sm:text-6xl">
        Rides near you
      </h1>

      <div className="mt-3 flex items-center gap-2 text-sm text-[var(--ink-muted)]">
        <span className="text-[var(--teal)]">●</span>

        <span>{location}</span>

        <span>·</span>

        <span>Within {radius} km</span>
      </div>
    </header>
  );
}