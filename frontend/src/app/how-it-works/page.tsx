import Link from "next/link";

const renterSteps = [
    {
        number: "01",
        title: "FIND A VEHICLE",
        description:
            "Browse bikes, scooters and cars near you and choose the vehicle that fits your needs.",
        meta: "DISTANCE · PRICE · AVAILABILITY · VERIFICATION",
    },
    {
        number: "02",
        title: "REQUEST A BOOKING",
        description:
            "Choose your dates and send a booking request to the owner.",
        tag: "REQUEST ≠ CONFIRMED",
    },
    {
        number: "03",
        title: "THE WHEEL DEAL REVIEWS",
        description:
            "THE WHEEL DEAL checks the request and coordinates with the owner to confirm availability and rental terms.",
    },
    {
        number: "04",
        title: "OWNER CONFIRMS",
        description:
            "The owner confirms that the vehicle is available and agrees to the rental terms.",
    },
    {
        number: "05",
        title: "YOU CONFIRM THE TERMS",
        description:
            "THE WHEEL DEAL confirms the agreed details with you before the booking proceeds.",
    },
    {
        number: "06",
        title: "AGREEMENT",
        description:
            "Both renter and owner accept the rental agreement, including the rental duration, security deposit and applicable terms.",
    },
    {
        number: "07",
        title: "PAYMENT & ESCROW",
        description:
            "After the agreement is accepted, you pay the rental amount and applicable security deposit. The funds are held by THE WHEEL DEAL.",
    },
    {
        number: "08",
        title: "OTP HANDOVER",
        description:
            "At pickup, the owner provides a one-time OTP. Once verified, the handover is confirmed and the rental starts.",
        tag: "OTP CONFIRMS HANDOVER — NOT PAYOUT",
    },
    {
        number: "09",
        title: "RETURN & PAYOUT",
        description:
            "Return the vehicle at the agreed time. The owner confirms the return, after which the required settlement process can proceed.",
        tag: "RETURN CONFIRMED → PAYOUT",
    },
];

const paymentSteps = [
    "PAYMENT RECEIVED",
    "HELD BY THE WHEEL DEAL",
    "HANDOVER VERIFIED",
    "RENTAL ACTIVE",
    "VEHICLE RETURNED",
    "RETURN CONFIRMED",
    "OWNER PAYOUT",
];

export default function HowItWorksPage() {
    return (
        <main className="bg-[var(--paper)] text-[var(--ink)]">
            {/* Opening */}
            <section className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
                <div className="max-w-[1050px]">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                        HOW IT WORKS
                    </p>

                    <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                        RENTING A RIDE SHOULD BE SIMPLE.
                    </h1>

                    <p className="mt-7 max-w-3xl text-lg leading-7 text-[var(--ink-muted)] md:text-xl">
                        From finding a vehicle nearby to returning it safely, THE WHEEL
                        DEAL keeps every step clear.
                    </p>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--teal-deep)]">
                        DISCOVER <span className="mx-2">→</span> REQUEST{" "}
                        <span className="mx-2">→</span> CONFIRM{" "}
                        <span className="mx-2">→</span> RIDE{" "}
                        <span className="mx-2">→</span> RETURN
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/browse"
                            className="inline-flex items-center justify-center rounded-full bg-[var(--teal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[var(--teal-deep)]"
                        >
                            FIND A RIDE
                        </Link>

                        <Link
                            href="/list-your-vehicle"
                            className="inline-flex items-center justify-center rounded-full border border-[var(--teal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--teal-deep)] transition-colors hover:bg-[var(--surface)]"
                        >
                            LIST YOUR VEHICLE
                        </Link>
                    </div>
                </div>
            </section>

            {/* Renter Journey */}
            <section className="border-t border-[var(--border)]">
                <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                            THE RENTAL JOURNEY
                        </p>

                        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none md:text-6xl">
                            FROM FINDING A RIDE TO GETTING BACK HOME.
                        </h2>

                        <p className="mt-5 text-base leading-6 text-[var(--ink-muted)] md:text-lg">
                            A clear process built around verification, protected payments
                            and transparent handover.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {renterSteps.map((step) => (
                            <article
                                key={step.number}
                                className="flex min-h-[190px] flex-col rounded-xl border border-[var(--border)] bg-[var(--paper)] p-5"
                            >
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--teal)] text-xs font-bold text-white">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 font-display text-xl font-bold uppercase leading-none">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-5 text-[var(--ink-muted)]">
                                    {step.description}
                                </p>

                                {step.meta && (
                                    <p className="mt-auto pt-5 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--teal-deep)]">
                                        {step.meta}
                                    </p>
                                )}

                                {step.tag && (
                                    <div className="mt-auto pt-5">
                                        <span className="inline-flex rounded-sm bg-[var(--amber)]/20 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-[var(--ink)]">
                                            {step.tag}
                                        </span>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safe Payments */}
            <section className="bg-[var(--teal-deep)] text-[var(--paper)]">
                <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                            SAFE PAYMENTS
                        </p>

                        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none md:text-6xl">
                            YOUR MONEY STAYS PROTECTED.
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-6 text-white/70 md:text-lg">
                            Once the agreement is accepted, your rental payment and
                            applicable security deposit are held by THE WHEEL DEAL during
                            the rental process.
                        </p>
                    </div>

                    {/* Payment lifecycle */}
                    <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        {paymentSteps.map((step, index) => (
                            <div
                                key={step}
                                className="rounded-md border border-white/20 px-4 py-4"
                            >
                                <span className="block text-[10px] font-bold text-white/60">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.05em]">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Commission */}
                    <div className="mt-10 border-t border-white/20 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                            RENTAL COMMISSION
                        </p>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="font-display text-2xl font-bold uppercase">
                                80% → OWNER
                            </p>

                            <p className="font-display text-2xl font-bold uppercase text-[var(--amber)]">
                                20% → THE WHEEL DEAL
                            </p>
                        </div>

                        <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70">
                            THE WHEEL DEAL retains a 20% platform commission from the total
                            rental fare on each successful rental. The security deposit is
                            separate from this commission.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/browse"
                            className="inline-flex items-center justify-center rounded-full bg-[#faf6ef] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] !text-[#083f3a] transition-colors hover:bg-white"
                        >
                            FIND A RIDE
                        </Link>
                    </div>
                </div>
            </section>

            {/* Vehicle Owners */}
            <section className="border-b border-[var(--border)] bg-[var(--paper)]">
                <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
                    <div className="max-w-4xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                            FOR VEHICLE OWNERS
                        </p>

                        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none md:text-6xl">
                            TURN YOUR VEHICLE INTO INCOME.
                        </h2>

                        <p className="mt-5 max-w-3xl text-base leading-6 text-[var(--ink-muted)] md:text-lg">
                            List your vehicle, complete verification, respond to booking
                            requests and earn from successful rentals.
                        </p>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--teal-deep)]">
                            LIST <span className="mx-2">→</span> VERIFY{" "}
                            <span className="mx-2">→</span> GET REQUESTS{" "}
                            <span className="mx-2">→</span> CONFIRM AVAILABILITY{" "}
                            <span className="mx-2">→</span> HANDOVER{" "}
                            <span className="mx-2">→</span> RETURN{" "}
                            <span className="mx-2">→</span> GET PAID
                        </p>

                        <p className="mt-5 max-w-3xl text-sm leading-6 text-[var(--ink-muted)]">
                            After a successful rental, THE WHEEL DEAL deducts its 20%
                            platform commission from the total rental fare before paying the
                            remaining amount to the owner.
                        </p>

                        <div className="mt-8">
                            <Link
                                href="/list-your-vehicle"
                                className="inline-flex items-center justify-center rounded-full bg-[var(--teal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[var(--teal-deep)]"
                            >
                                LIST YOUR VEHICLE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}