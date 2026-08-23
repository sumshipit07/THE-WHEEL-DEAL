"use client";

type PriceFilterProps = {
  rentalType?: "hourly" | "daily";
  value: number;
  onChange: (value: number) => void;
};

export default function PriceFilter({
  rentalType = "hourly",
  value,
  onChange,
}: PriceFilterProps) {
  const isDaily = rentalType === "daily";

  const minPrice = 100;
  const maxPrice = isDaily ? 5000 : 1000;

  return (
    <section className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
          {isDaily ? "Price per day" : "Price per hour"}
        </h3>

        <span className="text-sm font-semibold text-[var(--ink)]">
          ₹{value}
        </span>
      </div>

      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        step={50}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-[var(--teal)]"
      />

      <div className="mt-2 flex justify-between text-xs text-[var(--ink-muted)]">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
    </section>
  );
}