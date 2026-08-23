type NearbyVehicle = {
  id: number;
  name: string;
  type: "SCOOTER" | "BIKE" | "CAR";
  distance: string;
  rating: string;
  price: string;
  deposit: string;
  image: string;
};

const nearbyVehicles: NearbyVehicle[] = [
  {
    id: 1,
    name: "Ather 450X",
    type: "SCOOTER",
    distance: "0.6 km away",
    rating: "4.9",
    price: "₹349/day",
    deposit: "₹1,200",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Royal Enfield Hunter 350",
    type: "BIKE",
    distance: "0.8 km away",
    rating: "4.8",
    price: "₹499/day",
    deposit: "₹1,500",
    image:
      "https://images.unsplash.com/photo-1558980394-0c7d5f2a7e0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "TVS Jupiter 125",
    type: "SCOOTER",
    distance: "1.1 km away",
    rating: "4.4",
    price: "₹259/day",
    deposit: "₹1,000",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Honda Activa 6G",
    type: "SCOOTER",
    distance: "1.2 km away",
    rating: "4.7",
    price: "₹279/day",
    deposit: "₹1,000",
    image:
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Maruti Swift VXi",
    type: "CAR",
    distance: "1.6 km away",
    rating: "4.6",
    price: "₹1,490/day",
    deposit: "₹5,000",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Bajaj Pulsar N160",
    type: "BIKE",
    distance: "1.9 km away",
    rating: "4.6",
    price: "₹459/day",
    deposit: "₹1,500",
    image:
      "https://images.unsplash.com/photo-1558980664-10ea0a7e5f3e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function NearbyVehicles() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--page)] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--teal)] md:text-xs">
              Nearby right now
            </p>

            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Vehicles a few streets away
            </h2>
          </div>

          {/* Visual-only CTA */}
          <span className="hidden shrink-0 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-medium text-[var(--ink)] sm:inline-flex sm:items-center sm:gap-2">
            See All Nearby
            <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]"
            >
              {/* Image */}
              <div className="relative aspect-[1.65/1] overflow-hidden bg-[#e5ddcf]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-cover"
                />

                {/* Available badge */}
                <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-medium text-[var(--teal)] shadow-sm">
                  ✓ Available
                </span>

                {/* Verified badge */}
                <span className="absolute right-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-medium text-[var(--teal)] shadow-sm">
                  ◉ Verified
                </span>
              </div>

              {/* Vehicle information */}
              <div className="p-3.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-[var(--ink)]">
                    {vehicle.name}
                  </h3>

                  <span className="shrink-0 text-[10px] font-medium text-[var(--ink)]">
                    <span className="text-[#d89b24]">☆</span>{" "}
                    {vehicle.rating}
                  </span>
                </div>

                {/* Type + distance */}
                <div className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  <span>{vehicle.type}</span>

                  <span aria-hidden="true">•</span>

                  <span>{vehicle.distance}</span>
                </div>

                <div className="my-3 border-t border-[var(--border)]" />

                {/* Price */}
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-[var(--ink)]">
                      {vehicle.price}
                    </p>

                    <p className="mt-1 text-[9px] text-[var(--ink-muted)]">
                      Deposit {vehicle.deposit}
                    </p>
                  </div>

                  {/* Visual-only vehicle CTA */}
                  <span className="shrink-0 text-[9px] font-medium text-[var(--teal)]">
                    View Vehicle →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "See All Nearby" */}
        <div className="mt-6 flex justify-center sm:hidden">
          <span className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-medium text-[var(--ink)]">
            See All Nearby
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </section>
  );
}