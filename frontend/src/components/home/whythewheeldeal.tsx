type WhyPoint = {
  title: string
  description: string
  icon: "local" | "verified" | "pricing" | "people"
}

const whyPoints: WhyPoint[] = [
  {
    title: "Genuinely local",
    description:
      "Discovery starts at 2 km and expands to 5, 10, 20 or 50 km when you need more range.",
    icon: "local",
  },
  {
    title: "Verified before listed",
    description:
      "No vehicle appears publicly until our team has checked its documents and details.",
    icon: "verified",
  },
  {
    title: "Clear pricing",
    description:
      "Rental amount and refundable security deposit are shown separately before you pay.",
    icon: "pricing",
  },
  {
    title: "People, not fleets",
    description:
      "You rent from a nearby owner with a profile, rating and rental history.",
    icon: "people",
  },
]

function WhyIcon({ type }: { type: WhyPoint["icon"] }) {
  if (type === "local") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 18L20 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8 17L5 20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 7L19 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="6"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    )
  }

  if (type === "verified") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L14 4.5L16.5 4.5L17.5 7L20 8.5L19.5 11L20.5 13.5L18.5 15.5L18 18L15.5 18.5L13.5 21L11 20L8.5 21L6.5 18.5L4 18L3.5 15.5L1.5 13.5L2.5 11L2 8.5L4.5 7L5.5 4.5L8 4.5L10 3L12 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M8 12L10.5 14.5L16 9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === "pricing") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="3"
          width="14"
          height="18"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 8H16M8 12H16M8 16H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="17"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 19C4 15.8 5.5 14 8 14C10.5 14 12 15.8 12.5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 14.5C16.5 13.5 19.5 15 20.5 18.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function WhyTheWheelDeal() {
  return (
    <section className="w-full bg-[#F8F4EC]">
      <div className="mx-auto max-w-[1200px] px-6 py-[64px] md:px-10 md:py-[72px] lg:px-12 lg:py-[76px]">
        <h2
          className="mb-7 text-[38px] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-[#171717] md:text-[44px] lg:text-[48px]"
          style={{
            fontFamily:
              "var(--font-display), 'Arial Narrow', sans-serif",
          }}
        >
          Why The Wheel Deal
        </h2>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point) => (
            <article
              key={point.title}
              className="min-h-[136px] rounded-[7px] border border-[#DED7CC] bg-white p-4 md:p-4"
            >
              <div className="text-[#075B55]">
                <WhyIcon type={point.icon} />
              </div>

              <h3 className="mt-4 text-[14px] font-semibold leading-[1.15] text-[#171717]">
                {point.title}
              </h3>

              <p className="mt-3 text-[10px] leading-[1.45] text-[#6D675F] md:text-[11px]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}