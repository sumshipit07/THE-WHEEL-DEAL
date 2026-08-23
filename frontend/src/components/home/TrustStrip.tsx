const trustPoints = [
  {
    title: "Every listing verified before it goes live",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5 19 6v5.2c0 4.4-2.8 7.8-7 9.3-4.2-1.5-7-4.9-7-9.3V6l7-2.5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12 2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Payment held in escrow through the rental",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="9"
          width="14"
          height="11"
          rx="1.5"
        />
        <path
          strokeLinecap="round"
          d="M8 9V7a4 4 0 0 1 8 0v2"
        />
        <path
          strokeLinecap="round"
          d="M12 13v3"
        />
      </svg>
    ),
  },
  {
    title: "OTP-verified vehicle handover",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <circle cx="7.5" cy="16.5" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.8 14.2 8.7-8.7a1.8 1.8 0 0 1 2.5 2.5l-2 2"
        />
        <path
          strokeLinecap="round"
          d="m15.8 10.2 2 2"
        />
      </svg>
    ),
  },
  {
    title: "Bookings coordinated by our team",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10.5a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2h-1v-5h3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 11.5H3.5v4H5"
        />
        <path
          strokeLinecap="round"
          d="M12 19h2.5"
        />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--teal)]">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-10 md:py-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className={[
                "flex items-start gap-3",
                "lg:px-6",
                index === 0 ? "lg:pl-0" : "",
                index === trustPoints.length - 1 ? "lg:pr-0" : "",
              ].join(" ")}
            >
              <span className="mt-0.5 shrink-0 text-[#e2a532]">
                {point.icon}
              </span>

              <p className="max-w-[220px] text-[10px] font-medium leading-[1.35] text-white/95 md:text-xs">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}