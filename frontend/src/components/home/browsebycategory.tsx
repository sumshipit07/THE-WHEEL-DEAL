import Link from "next/link"

type Category = {
  title: string
  description: string
  href: string
  icon: "scooter" | "bike" | "car"
}

const categories: Category[] = [
  {
    title: "SCOOTERS",
    description: "Easy city hops, from ₹259 a day",
    href: "/scooters",
    icon: "scooter",
  },
  {
    title: "BIKES",
    description: "Weekend rides and longer runs",
    href: "/bikes",
    icon: "bike",
  },
  {
    title: "CARS",
    description: "Family trips, airport runs, road trips",
    href: "/cars",
    icon: "car",
  },
]

function CategoryIcon({ type }: { type: Category["icon"] }) {
  if (type === "car") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 16.5V12.5L7 7H17L19 12.5V16.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7L8 4.5H16L17 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 13H19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="7.5" cy="17" r="1.2" fill="currentColor" />
        <circle cx="16.5" cy="17" r="1.2" fill="currentColor" />
      </svg>
    )
  }

  if (type === "bike") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 15.5C5 12.46 7.46 10 10.5 10C13.54 10 16 12.46 16 15.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8 15.5H16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10.5 10L13 7.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="16.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="17"
        cy="16.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 16.5L9.5 10H13.5L17 16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10L11 7.5H14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BrowseByCategory() {
  return (
    <section className="w-full bg-[#F8F4EC]">
      <div className="mx-auto max-w-[1200px] px-6 py-[64px] md:px-10 md:py-[68px] lg:px-12 lg:py-[72px]">
        {/* Heading */}
        <h2
          className="mb-[30px] text-[38px] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-[#171717] md:text-[42px] lg:text-[46px]"
          style={{
            fontFamily:
              "var(--font-display), 'Arial Narrow', sans-serif",
          }}
        >
          Browse by Category
        </h2>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="
                group
                flex
                min-h-[165px]
                flex-col
                rounded-[9px]
                border
                border-[#DED7CC]
                bg-white
                px-5
                py-5
                transition-all
                duration-200
                hover:border-[#075B55]
                focus:outline-none
                focus:ring-2
                focus:ring-[#075B55]
                focus:ring-offset-2
                md:px-5
                md:py-5
              "
            >
              {/* Icon */}
              <div className="text-[#056C65]">
                <CategoryIcon type={category.icon} />
              </div>

              {/* Bottom content */}
              <div className="mt-auto">
                <h3
                  className="
                    text-[25px]
                    font-semibold
                    uppercase
                    leading-none
                    tracking-[-0.015em]
                    text-[#171717]
                    md:text-[27px]
                  "
                  style={{
                    fontFamily:
                      "var(--font-display), 'Arial Narrow', sans-serif",
                  }}
                >
                  {category.title}
                </h3>

                <p className="mt-[7px] text-[14px] leading-[1.35] text-[#6D675F]">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}