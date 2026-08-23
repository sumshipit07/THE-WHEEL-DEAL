import Button from "@/components/ui/Button";
import HeroSearch from "@/components/home/HeroSearch";

export default function Hero() {
  return (
    <section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 lg:py-24">

        {/* Main Hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Content */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Hyperlocal vehicle rentals · Within 2 km
            </p>

            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Your next ride is closer than you think.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--ink-muted)]">
              Find bikes, scooters and cars rented by people around you.
              Every listing is verified, every booking is confirmed by us,
              and every payment is held until the handover is done.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/browse">
                Find a Ride ↗
              </Button>

              <Button href="/list-your-vehicle" variant="secondary">
                List Your Vehicle +
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-[4/5] bg-[var(--border)]">
              <div className="flex h-full items-center justify-center text-sm text-[var(--ink-muted)]">
                Hero image
              </div>
            </div>

            <div className="absolute bottom-4 left-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink)] shadow-sm">
              ↗ Showing vehicles within 2 km
            </div>
          </div>

        </div>

        {/* Hero Search */}
        <HeroSearch />

      </div>
    </section>
  );
}