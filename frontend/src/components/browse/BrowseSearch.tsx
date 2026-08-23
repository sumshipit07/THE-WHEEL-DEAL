"use client";

import { FormEvent, useState } from "react";

type BrowseSearchProps = {
  initialLocation?: string;
  vehicleType: string;
  onVehicleTypeChange: (vehicleType: string) => void;
};

const VEHICLE_TYPES = [
  { label: "All", value: "all" },
  { label: "Scooter", value: "scooter" },
  { label: "Bike", value: "bike" },
  { label: "Car", value: "car" },
];

export default function BrowseSearch({
  initialLocation = "",
  vehicleType,
  onVehicleTypeChange,
}: BrowseSearchProps) {
  const [location, setLocation] = useState(initialLocation);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Browse search:", {
      location,
      vehicleType,
    });
  }

  function handleUseMyLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("User coordinates:", {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        console.log("Unable to access your location.");
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <div>
          <label
            htmlFor="browse-location"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]"
          >
            Pickup Area
          </label>

          <input
            id="browse-location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Where are you?"
            className="h-12 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-4 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--teal)]"
          />
        </div>

        <div>
          <label
            htmlFor="browse-vehicle"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]"
          >
            Vehicle Type
          </label>

          <select
            id="browse-vehicle"
            value={vehicleType}
            onChange={(event) =>
              onVehicleTypeChange(event.target.value)
            }
            className="h-12 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-4 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--teal)]"
          >
            {VEHICLE_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleUseMyLocation}
          className="h-12 rounded-md border border-[var(--border)] bg-[var(--paper)] px-4 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
        >
          Use my location
        </button>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-[var(--teal)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Update Search →
        </button>
      </div>
    </form>
  );
}