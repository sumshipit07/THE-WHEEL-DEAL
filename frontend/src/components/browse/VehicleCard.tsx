type VehicleCardProps = {
  name: string;
  image: string;
  rating: number;
  distance: number;
  pricePerHour: number;
  pricePerDay: number;
  fuel: string;
  transmission: string;
  verified?: boolean;
  rentalType?: "hourly" | "daily";
};

export default function VehicleCard({
  name,
  image,
  rating,
  distance,
  pricePerHour,
  pricePerDay,
  fuel,
  transmission,
  verified = false,
  rentalType = "hourly",
}: VehicleCardProps) {
  const isDaily = rentalType === "daily";

  return (
    <article className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--border)]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {/* Verified */}
        {verified && (
          <span className="absolute left-3 top-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[10px] font-semibold text-[var(--teal)] shadow-sm">
            ✓ Verified
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* NAME + RATING */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate text-sm font-semibold text-[var(--ink)]">
            {name}
          </h3>

          <span className="shrink-0 text-xs font-semibold text-[var(--ink)]">
            ★ {rating.toFixed(1)}
          </span>
        </div>

        {/* SPECS */}
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--ink-muted)]">
          <span>{fuel}</span>
          <span>·</span>
          <span>{transmission}</span>
          <span>·</span>
          <span>{distance} km away</span>
        </div>

        {/* PRICE */}
        <div className="mt-4">
          <p className="text-base font-bold text-[var(--ink)]">
            ₹{isDaily ? pricePerDay : pricePerHour}
            <span className="ml-1 text-xs font-medium text-[var(--ink-muted)]">
              /{isDaily ? "day" : "hour"}
            </span>
          </p>

          <p className="mt-1 text-[10px] text-[var(--ink-muted)]">
            {isDaily
              ? `₹${pricePerHour}/hour also available`
              : `₹${pricePerDay}/day also available`}
          </p>
        </div>

        {/* ACTION */}
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-[var(--teal)] px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          View Vehicle →
        </button>
      </div>
    </article>
  );
}