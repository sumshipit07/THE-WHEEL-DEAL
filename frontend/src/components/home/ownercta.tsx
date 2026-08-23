type OwnerStep = {
  number: string
  title: string
  description: string
}

const ownerSteps: OwnerStep[] = [
  {
    number: "01",
    title: "List your vehicle",
    description:
      "Guided steps for specs, pricing, availability, photos and documents.",
  },
  {
    number: "02",
    title: "Get verified",
    description:
      "We review documents and listing accuracy before it goes live.",
  },
  {
    number: "03",
    title: "Confirm availability",
    description:
      "Confirm the vehicle's availability and agreed rental price when our team contacts you about a request.",
  },
  {
    number: "04",
    title: "Get paid",
    description:
      "Earnings land in your wallet after the return is confirmed.",
  },
]

export default function OwnerCTA() {
  return (
    <section className="w-full bg-[#F2A526]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-[64px] md:px-10 md:py-[72px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-[76px]">
        {/* Left side */}
        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#075B55]">
            For vehicle owners
          </p>

          <h2
            className="max-w-[470px] text-[42px] font-semibold uppercase leading-[0.91] tracking-[-0.02em] text-[#171717] md:text-[50px] lg:text-[54px]"
            style={{
              fontFamily:
                "var(--font-display), 'Arial Narrow', sans-serif",
            }}
          >
            Turn your unused vehicle into income
          </h2>

          <p className="mt-5 max-w-[470px] text-[14px] leading-[1.55] text-[#3F3A32] md:text-[15px]">
            List your bike, scooter or car, get it verified by our team, and
            decide when it is available. You see every booking request, every
            rental status and every rupee in your wallet.
          </p>

          <a
            href="/list-your-vehicle"
            className="mt-6 inline-flex items-center gap-2 rounded-[5px] bg-[#075B55] px-4 py-3 text-[12px] font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#075B55] focus:ring-offset-2 focus:ring-offset-[#F2A526]"
          >
            List Your Vehicle
            <span aria-hidden="true">+</span>
          </a>
        </div>

        {/* Right side */}
        <div className="overflow-hidden rounded-[7px] border border-[#D8C18F] bg-white">
          {ownerSteps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-[42px_1fr] gap-2 px-4 py-4 md:px-5 md:py-4 ${
                index !== ownerSteps.length - 1
                  ? "border-b border-[#DED7CC]"
                  : ""
              }`}
            >
              <div className="text-[14px] font-semibold leading-none text-[#075B55] md:text-[15px]">
                {step.number}
              </div>

              <div>
                <h3 className="text-[12px] font-semibold leading-[1.2] text-[#171717] md:text-[13px]">
                  {step.title}
                </h3>

                <p className="mt-1 text-[10px] leading-[1.4] text-[#6D675F] md:text-[11px]">
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