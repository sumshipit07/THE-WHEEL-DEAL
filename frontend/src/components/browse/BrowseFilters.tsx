"use client";

type FilterOption = {
  label: string;
  value: string;
};

const VEHICLE_TYPES: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Scooter", value: "scooter" },
  { label: "Bike", value: "bike" },
  { label: "Car", value: "car" },
];

const FUEL_TYPES: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Petrol", value: "petrol" },
  { label: "Diesel", value: "diesel" },
  { label: "CNG", value: "cng" },
  { label: "Electric", value: "electric" },
];

const TRANSMISSION_TYPES: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Manual", value: "manual" },
  { label: "Automatic", value: "automatic" },
];

type BrowseFiltersProps = {
  vehicleType: string;
  fuelType: string;
  transmission: string;
  availableNow: boolean;

  onVehicleTypeChange: (value: string) => void;
  onFuelTypeChange: (value: string) => void;
  onTransmissionChange: (value: string) => void;
  onAvailableNowChange: (value: boolean) => void;

  onClearAll: () => void;
};

export default function BrowseFilters({
  vehicleType,
  fuelType,
  transmission,
  availableNow,
  onVehicleTypeChange,
  onFuelTypeChange,
  onTransmissionChange,
  onAvailableNowChange,
  onClearAll,
}: BrowseFiltersProps) {
  return (
    <aside className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink)]">
          Filters
        </h2>

        <button
          type="button"
          onClick={onClearAll}
          className="text-xs font-medium text-[var(--teal)] hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* Vehicle Type */}
      <FilterGroup title="Vehicle Type">
        <FilterButtons
          options={VEHICLE_TYPES}
          selectedValue={vehicleType}
          onChange={onVehicleTypeChange}
        />
      </FilterGroup>

      {/* Fuel */}
      <FilterGroup title="Fuel">
        <FilterButtons
          options={FUEL_TYPES}
          selectedValue={fuelType}
          onChange={onFuelTypeChange}
        />
      </FilterGroup>

      {/* Transmission */}
      <FilterGroup title="Transmission">
        <FilterButtons
          options={TRANSMISSION_TYPES}
          selectedValue={transmission}
          onChange={onTransmissionChange}
        />
      </FilterGroup>

      {/* Availability */}
      <FilterGroup title="Availability">
        <button
          type="button"
          onClick={() => onAvailableNowChange(!availableNow)}
          className={`rounded-md border px-3 py-2 text-xs font-medium transition ${
            availableNow
              ? "border-[var(--teal)] bg-[var(--teal)] text-white"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--teal)]"
          }`}
        >
          Available now
        </button>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        {title}
      </h3>

      {children}
    </div>
  );
}

function FilterButtons({
  options,
  selectedValue,
  onChange,
}: {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-md border px-3 py-2 text-xs font-medium transition ${
              isSelected
                ? "border-[var(--teal)] bg-[var(--teal)] text-white"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--teal)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}