"use client"

import { useState } from "react"

const radiusOptions = [2, 5, 10, 20, 50]

const ownerPositions = [
  { top: "29%", right: "27%" },
  { top: "24%", right: "31%" },
  { top: "20%", right: "25%" },
  { top: "30%", right: "18%" },
  { top: "17%", right: "34%" },
]

export default function LocalDiscovery() {
  const [selectedRadius, setSelectedRadius] = useState(2)

  const selectedIndex = radiusOptions.indexOf(selectedRadius)

  const ringScale = 0.55 + selectedIndex * 0.12

  const ownerPosition = ownerPositions[selectedIndex]

  return (
    <section className="w-full bg-[#F8F4EC]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-[64px] md:px-10 md:py-[72px] lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12 lg:py-[76px]">
        {/* ========================= */}
        {/* RADIUS VISUALIZATION */}
        {/* ========================= */}

        <div className="flex min-h-[300px] items-center justify-center rounded-[7px] border border-[#DED7CC] bg-white p-8 md:min-h-[340px]">
          <div className="relative flex h-[250px] w-[250px] items-center justify-center md:h-[280px] md:w-[280px]">
            {/* Outer radius */}
            <div
              className="absolute h-full w-full rounded-full border border-[#D7E1DE] bg-[#F4F7F5] transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${ringScale})`,
              }}
            />

            {/* Middle radius */}
            <div
              className="absolute h-[76%] w-[76%] rounded-full border border-[#C9D9D6] bg-[#E8EFED] transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${ringScale})`,
              }}
            />

            {/* Inner radius */}
            <div
              className="absolute h-[52%] w-[52%] rounded-full border border-[#075B55] bg-[#D5E4E1] transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${ringScale})`,
              }}
            />

            {/* ========================= */}
            {/* DETECTED OWNER */}
            {/* ========================= */}

            <div
              className="absolute z-20 transition-all duration-700 ease-out"
              style={{
                top: ownerPosition.top,
                right: ownerPosition.right,
              }}
            >
              {/* Pulse rings */}
              <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#075B55]/40" />

              <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075B55]/15" />

              {/* Owner marker */}
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[#075B55] bg-[#F8F4EC] text-[#075B55] shadow-sm">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M5.5 20C6.2 15.8 8.2 13.5 12 13.5C15.8 13.5 17.8 15.8 18.5 20"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Owner label */}
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#DED7CC] bg-white px-2 py-1 text-[8px] font-medium uppercase tracking-[0.05em] text-[#075B55] shadow-sm">
                Owner nearby
              </div>
            </div>

            {/* ========================= */}
            {/* USER LOCATION */}
            {/* ========================= */}

            <div className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#075B55] text-[#F8F4EC] shadow-sm">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21 3L10.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M21 3L14.5 21L10.5 13.5L3 9.5L21 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CONTENT */}
        {/* ========================= */}

        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#075B55]">
            Local discovery
          </p>

          <h2
            className="max-w-[520px] text-[42px] font-semibold uppercase leading-[0.91] tracking-[-0.02em] text-[#171717] md:text-[50px] lg:text-[54px]"
            style={{
              fontFamily:
                "var(--font-display), 'Arial Narrow', sans-serif",
            }}
          >
            Start at 2 km. Widen only if you need to.
          </h2>

          <p className="mt-5 max-w-[500px] text-[14px] leading-[1.55] text-[#6D675F] md:text-[15px]">
            Distance is part of the decision, not a footnote. Every nearby
            listing shows how far away it is and which area it is picked up
            from, so you know what the rental actually costs you in time.
          </p>

          {/* ========================= */}
          {/* RADIUS TABS */}
          {/* ========================= */}

          <div
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Choose discovery radius"
          >
            {radiusOptions.map((radius) => {
              const isActive = selectedRadius === radius

              return (
                <button
                  key={radius}
                  type="button"
                  onClick={() => setSelectedRadius(radius)}
                  aria-pressed={isActive}
                  className={`rounded-[4px] border px-3 py-1.5 text-[10px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#075B55] focus:ring-offset-2 ${
                    isActive
                      ? "border-[#075B55] bg-[#075B55] text-white"
                      : "border-[#DED7CC] bg-white text-[#6D675F] hover:border-[#075B55] hover:text-[#075B55]"
                  }`}
                >
                  {radius} km
                </button>
              )
            })}
          </div>

          {/* Selected radius */}
          <p
            className="mt-3 text-[10px] text-[#075B55]"
            aria-live="polite"
          >
            Discovery radius: {selectedRadius} km
          </p>
        </div>
      </div>
    </section>
  )
}