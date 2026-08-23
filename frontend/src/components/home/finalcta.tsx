export default function FinalCTA() {
  return (
    <section className="w-full bg-[#075B55]">
      <div className="mx-auto max-w-[1200px] px-6 py-[72px] md:px-10 md:py-[88px] lg:px-12 lg:py-[96px]">
        <div className="max-w-[650px]">
          <h2
            className="text-[46px] font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-[#F8F4EC] md:text-[58px] lg:text-[64px]"
            style={{
              fontFamily:
                "var(--font-display), 'Arial Narrow', sans-serif",
            }}
          >
            Your next ride could be just a few meters away.
          </h2>

          <p className="mt-6 max-w-[430px] text-[14px] leading-[1.55] text-[#D5E1DD] md:text-[15px]">
            Find one nearby, or start earning from one already parked
            outside.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/browse"
              className="inline-flex items-center gap-2 rounded-[5px] bg-[#F2A526] px-4 py-3 text-[12px] font-semibold text-[#171717] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#F8F4EC] focus:ring-offset-2 focus:ring-offset-[#075B55]"
            >
              Find a Ride
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/list-your-vehicle"
              className="inline-flex items-center gap-2 rounded-[5px] bg-[#F8F4EC] px-4 py-3 text-[12px] font-semibold text-[#171717] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#F8F4EC] focus:ring-offset-2 focus:ring-offset-[#075B55]"
            >
              List Your Vehicle
              <span aria-hidden="true">+</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}