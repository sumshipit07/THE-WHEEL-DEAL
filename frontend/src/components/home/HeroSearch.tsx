"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

type RentalType = "hourly" | "daily";

export default function HeroSearch() {
  const router = useRouter();

  const [rentalType, setRentalType] = useState<RentalType>("hourly");

  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    // Basic validation
    if (!location.trim()) {
      setError("Please enter your location.");
      return;
    }

    if (!vehicleType) {
      setError("Please select a vehicle type.");
      return;
    }

    if (rentalType === "hourly") {
      if (!date || !startTime || !endTime) {
        setError("Please select the date, start time and end time.");
        return;
      }

      if (endTime <= startTime) {
        setError("End time must be after start time.");
        return;
      }
    }

    if (rentalType === "daily") {
      if (!pickupDate || !returnDate) {
        setError("Please select pickup and return dates.");
        return;
      }

      if (returnDate < pickupDate) {
        setError("Return date must be after pickup date.");
        return;
      }
    }

    // Build search parameters
    const params = new URLSearchParams();

    params.set("location", location.trim());
    params.set("vehicleType", vehicleType);
    params.set("rentalType", rentalType);

    if (rentalType === "hourly") {
      params.set("date", date);
      params.set("startTime", startTime);
      params.set("endTime", endTime);
    }

    if (rentalType === "daily") {
      params.set("pickupDate", pickupDate);
      params.set("returnDate", returnDate);
    }

    // Navigate to Browse with the search parameters
    router.push(`/browse?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm"
    >
      <div
        className={`grid gap-3 ${
          rentalType === "hourly"
            ? "lg:grid-cols-[1.25fr_1fr_auto_0.9fr_0.8fr_0.8fr_auto]"
            : "lg:grid-cols-[1.25fr_1fr_auto_1fr_1fr_auto]"
        }`}
      >
        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
          >
            Location
          </label>

          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Where are you?"
            className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none transition focus:border-[var(--teal)]"
          />
        </div>

        {/* Vehicle */}
        <div>
          <label
            htmlFor="vehicle-type"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
          >
            Vehicle
          </label>

          <select
            id="vehicle-type"
            value={vehicleType}
            onChange={(event) => setVehicleType(event.target.value)}
            className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
          >
            <option value="" disabled>
              Any vehicle
            </option>
            <option value="scooter">Scooter</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
          </select>
        </div>

        {/* Rental Type */}
        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]">
            Rental
          </span>

          <div className="flex h-11 rounded-md border border-[var(--border)] bg-[var(--paper)] p-1">
            <button
              type="button"
              onClick={() => {
                setRentalType("hourly");
                setError("");
              }}
              className={`rounded px-3 text-sm font-semibold transition ${
                rentalType === "hourly"
                  ? "bg-[var(--teal)] text-white"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              Hourly
            </button>

            <button
              type="button"
              onClick={() => {
                setRentalType("daily");
                setError("");
              }}
              className={`rounded px-3 text-sm font-semibold transition ${
                rentalType === "daily"
                  ? "bg-[var(--teal)] text-white"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              Daily
            </button>
          </div>
        </div>

        {/* Hourly Date */}
        {rentalType === "hourly" && (
          <div>
            <label
              htmlFor="rental-date"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
            >
              Date
            </label>

            <input
              id="rental-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
            />
          </div>
        )}

        {/* Hourly Start */}
        {rentalType === "hourly" && (
          <div>
            <label
              htmlFor="start-time"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
            >
              Start
            </label>

            <input
              id="start-time"
              type="time"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
              className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
            />
          </div>
        )}

        {/* Hourly End */}
        {rentalType === "hourly" && (
          <div>
            <label
              htmlFor="end-time"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
            >
              End
            </label>

            <input
              id="end-time"
              type="time"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
              className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
            />
          </div>
        )}

        {/* Daily Pickup */}
        {rentalType === "daily" && (
          <div>
            <label
              htmlFor="pickup-date"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
            >
              Pickup
            </label>

            <input
              id="pickup-date"
              type="date"
              value={pickupDate}
              onChange={(event) => setPickupDate(event.target.value)}
              className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
            />
          </div>
        )}

        {/* Daily Return */}
        {rentalType === "daily" && (
          <div>
            <label
              htmlFor="return-date"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]"
            >
              Return
            </label>

            <input
              id="return-date"
              type="date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              className="h-11 w-full rounded-md border border-[var(--border)] bg-[var(--paper)] px-3 text-sm outline-none focus:border-[var(--teal)]"
            />
          </div>
        )}

        {/* Search */}
        <div className="flex items-end">
          <Button type="submit" className="h-11 w-full whitespace-nowrap">
            Search Vehicles →
          </Button>
        </div>
      </div>

      {/* Validation Error */}
      {error && (
        <p
          role="alert"
          className="mt-3 rounded-md bg-[#f4e9e7] px-3 py-2 text-sm font-medium text-[#8a3f35]"
        >
          {error}
        </p>
      )}
    </form>
  );
}