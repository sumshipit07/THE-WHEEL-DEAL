type TrustStep = {
  title: string
  description: string
  icon: "payment" | "escrow" | "otp" | "return" | "release"
}

const trustSteps: TrustStep[] = [
  {
    title: "Payment received",
    description: "Rental amount and deposit collected",
    icon: "payment",
  },
  {
    title: "Funds held",
    description: "Held by The Wheel Deal, not the owner",
    icon: "escrow",
  },
  {
    title: "OTP verified",
    description: "Handover confirmed, rental starts",
    icon: "otp",
  },
  {
    title: "Return confirmed",
    description: "Owner confirms the vehicle is back",
    icon: "return",
  },
  {
    title: "Funds released",
    description: "Owner earnings paid out, commission shown",
    icon: "release",
  },
]

function TrustIcon({ type }: { type: TrustStep["icon"] }) {
  if (type === "payment") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3 10H21"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M7 14H10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (type === "escrow") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="10"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 10V7.5C8 5.57 9.57 4 11.5 4H12.5C14.43 4 16 5.57 16 7.5V10"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    )
  }

  if (type === "otp") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="8"
          cy="16"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M10.5 13.5L17 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 6L18 4L20 6L18 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === "return") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 7L9.5 17.5L4 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 9L15 12L12 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TrustAndSafety() {
  return (
    <section className="w-full bg-[#07544F]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-[64px] md:px-10 md:py-[72px] lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-[80px]">
        {/* Left side */}
        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#F2A526]">
            Trust & Safety
          </p>

          <h2
            className="max-w-[520px] text-[42px] font-semibold uppercase leading-[0.91] tracking-[-0.02em] text-[#F8F4EC] md:text-[50px] lg:text-[54px]"
            style={{
              fontFamily:
                "var(--font-display), 'Arial Narrow', sans-serif",
            }}
          >
            Your payment stays held until the vehicle is returned
          </h2>

          <p className="mt-5 max-w-[500px] text-[14px] leading-[1.55] text-[#D5E1DD] md:text-[15px]">
            When you pay, your money moves into The Wheel Deal escrow — not
            the owner's account. It is released only after OTP-verified
            handover, the vehicle is returned, and the return is confirmed.
          </p>

          <a
            href="/safety"
            className="mt-6 inline-flex items-center gap-2 rounded-[5px] bg-[#F2A526] px-4 py-3 text-[12px] font-semibold text-[#171717] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#F8F4EC] focus:ring-offset-2 focus:ring-offset-[#07544F]"
          >
            How We Keep It Safe
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Right side */}
        <div className="overflow-hidden rounded-[7px] border border-white/15 bg-white/5">
          {trustSteps.map((step, index) => (
            <div
              key={step.title}
              className={`flex items-center gap-3 px-4 py-4 md:px-5 ${
                index !== trustSteps.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] bg-white/10 text-[#F2A526]">
                <TrustIcon type={step.icon} />
              </div>

              <div className="min-w-0">
                <h3 className="text-[12px] font-semibold text-[#F8F4EC] md:text-[13px]">
                  {step.title}
                </h3>

                <p className="mt-0.5 text-[10px] leading-[1.4] text-[#BFD0CA] md:text-[11px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}