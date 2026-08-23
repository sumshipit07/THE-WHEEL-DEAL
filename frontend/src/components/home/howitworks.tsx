import React from "react"

type BookingStatus =
    | "request"
    | "admin_review"
    | "owner_confirmation"
    | "renter_confirmation"
    | "agreement"
    | "payment"
    | "escrow"
    | "handover"
    | "active_rental"
    | "return"
    | "release"
    | "completed"

type StatusItem = {
    key: BookingStatus
    label: string
}

const bookingStatuses: StatusItem[] = [
    { key: "request", label: "REQUEST" },
    { key: "admin_review", label: "ADMIN REVIEW" },
    { key: "owner_confirmation", label: "OWNER CONFIRMATION" },
    { key: "renter_confirmation", label: "RENTER CONFIRMATION" },
    { key: "agreement", label: "AGREEMENT" },
    { key: "payment", label: "PAYMENT" },
    { key: "escrow", label: "ESCROW" },
    { key: "handover", label: "HANDOVER" },
    { key: "active_rental", label: "ACTIVE RENTAL" },
    { key: "return", label: "RETURN" },
    { key: "release", label: "RELEASE" },
    { key: "completed", label: "COMPLETED" },
]

const steps = [
    {
        number: "01",
        title: "Find what is nearby",
        description:
            "Share your location or pick an area, then browse verified vehicles within 2 km — expandable up to 50 km.",
    },
    {
        number: "02",
        title: "Request a booking",
        description:
            "Pick your dates and send a request. Nothing is confirmed yet.",
    },
    {
        number: "03",
        title: "We confirm the booking",
        description:
            "Our team confirms availability and rental terms with the owner, then confirms the details with you.",
    },
    {
        number: "04",
        title: "Both sides agree",
        description:
            "The rental agreement is generated with the owner, renter, vehicle and deposit details. It becomes active once both sides accept.",
    },
    {
        number: "05",
        title: "Pay into escrow",
        description:
            "You pay the rental amount and deposit. The money is held in escrow by The Wheel Deal, not sent to the owner yet.",
    },
    {
        number: "06",
        title: "Verify handover with OTP",
        description:
            "At pickup, the owner shares a one-time code. Entering it confirms the handover and starts your rental.",
    },
    {
        number: "07",
        title: "Ride & return",
        description:
            "Track your active rental, return the vehicle at the agreed time, and keep your rental details and support in one place.",
    },
    {
        number: "08",
        title: "Return confirmed",
        description:
            "The owner confirms the vehicle is back. If something is off, our team steps in before anything is settled.",
    },
    {
        number: "09",
        title: "Payout released",
        description:
            "Escrow releases the payment and the owner earns 80%, with our commission shown clearly.",
    },
]

function BookingStatusMap({
    currentStatus = "completed",
}: {
    currentStatus?: BookingStatus
}) {
    const currentIndex = bookingStatuses.findIndex(
        (status) => status.key === currentStatus
    )

    return (
        <div className="border border-[#DED7CC] bg-[#F8F4EC] px-4 py-4 md:px-5 md:py-5">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#171717]">
                Every booking has a visible status
            </p>

            <div className="flex flex-wrap gap-1.5 lg:flex-nowrap lg:gap-1">
                {bookingStatuses.map((status, index) => {
                    const isCompleted = index < currentIndex
                    const isCurrent = index === currentIndex

                    let statusClass =
                        "border-[#DED7CC] bg-white text-[#6D675F]"

                    if (isCurrent) {
                        statusClass = "border-[#075B55] bg-[#075B55] text-white"
                    } else if (isCompleted) {
                        statusClass = "border-[#075B55]/30 bg-[#E5F0ED] text-[#075B55]"
                    }

                    return (
                        <span
                            key={status.key}
                            className={`inline-flex min-h-[20px] items-cente rounded-full border px-2 py-1 text-[8px] font-medium uppercase tracking-[0.04em] ${statusClass}`}
                        >
                            {isCompleted && (
                                <span className="mr-1" aria-hidden="true">
                                    ✓
                                </span>
                            )}

                            {status.label}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section className="w-full bg-[#F8F4EC]">
            <div className="mx-auto max-w-[1200px] px-6 py-[64px] md:px-10 md:py-[72px] lg:px-12 lg:py-[80px]">
                <div className="max-w-[720px]">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#075B55]">
                        How renting works
                    </p>

                    <h2
                        className="max-w-[650px] text-[40px] font-semibold uppercase leading-[0.94] tracking-[-0.02em] text-[#171717] md:text-[48px] lg:text-[52px]"
                        style={{
                            fontFamily:
                                "var(--font-display), 'Arial Narrow', sans-serif",
                        }}
                    >
                        A booking that gets checked before you pay
                    </h2>

                    <p className="mt-4 max-w-[600px] text-[14px] leading-[1.55] text-[#6D675F] md:text-[15px]">
                        We do not drop you into an instant checkout. Our team confirms
                        availability and rental terms with the owner and with you before
                        an agreement is generated.
                    </p>
                </div>

                <div className="mt-8 overflow-hidden rounded-[8px] border border-[#DED7CC] bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => {
                            const row = Math.floor(index / 3)
                            const isLastRow = row === 2

                            return (
                                <div
                                    key={step.number}
                                    className={`min-h-[142px] border-[#DED7CC] p-5 md:min-h-[150px] ${!isLastRow ? "border-b" : ""
                                        } ${index % 3 !== 2 ? "lg:border-r" : ""}`}
                                >
                                    <div className="text-[20px] font-semibold leading-none text-[#E59A22]">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-3 text-[14px] font-semibold leading-[1.15] text-[#171717]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 max-w-[280px] text-[10px] leading-[1.45] text-[#6D675F]">
                                        {step.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-6">
                    <BookingStatusMap currentStatus="completed" />
                </div>
            </div>
        </section>
    )
}