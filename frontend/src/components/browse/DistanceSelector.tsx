"use client";

type DistanceSelectorProps = {
  radius: number;
  onRadiusChange: (radius: number) => void;
};

const DISTANCE_OPTIONS = [2, 5, 10, 20, 50];

export default function DistanceSelector({
  radius,
  onRadiusChange,
}: DistanceSelectorProps) {
  return (
    <section className="mb-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        Search radius
      </p>

      <div className="flex flex-wrap gap-2">
        {DISTANCE_OPTIONS.map((option) => {
          const isSelected = radius === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onRadiusChange(option)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                isSelected
                  ? "border-[var(--teal)] bg-[var(--teal)] text-white"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--teal)]"
              }`}
            >
              {option} km
            </button>
          );
        })}
      </div>
    </section>
  );
}