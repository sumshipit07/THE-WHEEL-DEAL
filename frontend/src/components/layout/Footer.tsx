import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#075B55] text-[#D5E1DD]">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#F2A526] text-[9px] font-bold text-[#F2A526]">
                ●
              </div>

              <span className="text-[13px] font-bold uppercase tracking-[-0.02em] text-[#F8F4EC]">
                THE WHEEL DEAL
              </span>
            </div>

            <p className="mt-4 max-w-[270px] text-[11px] leading-[1.55] text-[#BFD0CA]">
              Your next ride is closer than you think. A hyperlocal marketplace
              for bikes, scooters and cars rented by people around you.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Renters */}
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F2A526]">
                Renters
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  href="/browse"
                  className="text-[11px] text-[#D5E1DD] transition-colors hover:text-white"
                >
                  Browse Vehicles
                </Link>

                <Link
                  href="/how-it-works"
                  className="text-[11px] text-[#D5E1DD] transition-colors hover:text-white"
                >
                  How It Works
                </Link>

                <Link
                  href="/safety"
                  className="text-[11px] text-[#D5E1DD] transition-colors hover:text-white"
                >
                  Safety & Trust
                </Link>
              </div>
            </div>

            {/* Owners */}
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F2A526]">
                Owners
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  href="/list-your-vehicle"
                  className="text-[11px] text-[#D5E1DD] transition-colors hover:text-white"
                >
                  List Your Vehicle
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-3 text-[9px] text-[#9FB5AF] md:flex-row md:items-center md:justify-between">
            <p>© 2026 The Wheel Deal</p>

            <p>
              Bookings are verified by The Wheel Deal before payment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}