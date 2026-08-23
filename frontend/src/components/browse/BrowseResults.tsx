"use client";

import { useMemo, useState } from "react";

import BrowseFilters from "./BrowseFilters";
import BrowseResultsHeader from "./BrowseResultsHeader";
import DistanceSelector from "./DistanceSelector";
import PriceFilter from "./PriceFilter";
import VehicleGrid from "./VehicleGrid";
import { bookings } from "./bookingData";
import { isVehicleAvailable } from "./availability";
import { vehicles } from "./vehicleData";

type BrowseResultsProps = {
  rentalType?: "hourly" | "daily";
  vehicleType: string;
  onVehicleTypeChange: (vehicleType: string) => void;
  radius: number;
  onRadiusChange: (radius: number) => void;

  date?: string;
  startTime?: string;
  endTime?: string;

  pickupDate?: string;
  returnDate?: string;
};

export default function BrowseResults({
  rentalType = "hourly",
  vehicleType,
  onVehicleTypeChange,
  radius,
  onRadiusChange,

  date,
  startTime,
  endTime,

  pickupDate,
  returnDate,
}: BrowseResultsProps) {
    
  const [fuelType, setFuelType] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [availableNow, setAvailableNow] = useState(false);

  const maxAllowedPrice =
    rentalType === "daily" ? 5000 : 1000;

  const [maxPrice, setMaxPrice] =
    useState(maxAllowedPrice);

  const [sort, setSort] = useState("newest");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesRadius =
        vehicle.distance <= radius;

      const matchesVehicleType =
        vehicleType === "all" ||
        vehicle.vehicleType === vehicleType;

      const matchesFuel =
        fuelType === "all" ||
        vehicle.fuel.toLowerCase() === fuelType;

      const matchesTransmission =
        transmission === "all" ||
        vehicle.transmission.toLowerCase() ===
          transmission;

      const matchesAvailability =
        !availableNow || vehicle.availableNow;

      const matchesBookingAvailability =
        isVehicleAvailable(bookings, {
          vehicleId: vehicle.id,
          rentalType,

          date,
          startTime,
          endTime,

          pickupDate,
          returnDate,
        });

      const vehiclePrice =
        rentalType === "daily"
          ? vehicle.pricePerDay
          : vehicle.pricePerHour;

      const matchesPrice =
        vehiclePrice <= maxPrice;

      return (
        matchesRadius &&
        matchesVehicleType &&
        matchesFuel &&
        matchesTransmission &&
        matchesAvailability &&
        matchesBookingAvailability &&
        matchesPrice
      );
    });
  }, [
    radius,
    vehicleType,
    fuelType,
    transmission,
    availableNow,
    maxPrice,
    rentalType,
    date,
    startTime,
    endTime,
    pickupDate,
    returnDate,
  ]);

  const sortedVehicles = useMemo(() => {
    const sorted = [...filteredVehicles];

    if (sort === "newest") {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
    }

    if (sort === "lowest-price") {
      sorted.sort((a, b) => {
        const priceA =
          rentalType === "daily"
            ? a.pricePerDay
            : a.pricePerHour;

        const priceB =
          rentalType === "daily"
            ? b.pricePerDay
            : b.pricePerHour;

        return priceA - priceB;
      });
    }

    if (sort === "highest-price") {
      sorted.sort((a, b) => {
        const priceA =
          rentalType === "daily"
            ? a.pricePerDay
            : a.pricePerHour;

        const priceB =
          rentalType === "daily"
            ? b.pricePerDay
            : b.pricePerHour;

        return priceB - priceA;
      });
    }

    return sorted;
  }, [
    filteredVehicles,
    sort,
    rentalType,
  ]);

  return (
    <div>
      <DistanceSelector
        radius={radius}
        onRadiusChange={onRadiusChange}
      />

      <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <aside>
          <BrowseFilters
            vehicleType={vehicleType}
            fuelType={fuelType}
            transmission={transmission}
            availableNow={availableNow}
            onVehicleTypeChange={onVehicleTypeChange}
            onFuelTypeChange={setFuelType}
            onTransmissionChange={setTransmission}
            onAvailableNowChange={setAvailableNow}
            onClearAll={() => {
              onVehicleTypeChange("all");
              setFuelType("all");
              setTransmission("all");
              setAvailableNow(false);
              setMaxPrice(maxAllowedPrice);
              setSort("newest");
            }}
          />

          <PriceFilter
            rentalType={rentalType}
            value={maxPrice}
            onChange={setMaxPrice}
          />
        </aside>

        <section>
          <BrowseResultsHeader
            resultCount={sortedVehicles.length}
            sort={sort}
            onSortChange={setSort}
          />

          {sortedVehicles.length > 0 ? (
            <VehicleGrid
              vehicles={sortedVehicles}
              rentalType={rentalType}
            />
          ) : (
            <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center">
              <div className="max-w-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--page)] text-[var(--teal)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.5m0 3h.01M10.3 4.6 2.9 18a1.8 1.8 0 0 0 1.55 2.7h15.1A1.8 1.8 0 0 0 21.1 18L13.7 4.6a1.95 1.95 0 0 0-3.4 0Z"
                    />
                  </svg>
                </div>

                <h2 className="text-lg font-semibold text-[var(--ink)]">
                  No rides match your filters
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                  Try increasing your search radius or
                  removing one or more filters to find more
                  vehicles nearby.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onVehicleTypeChange("all");
                    setFuelType("all");
                    setTransmission("all");
                    setAvailableNow(false);
                    setMaxPrice(maxAllowedPrice);
                    setSort("newest");
                  }}
                  className="mt-5 rounded-md bg-[var(--teal)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}