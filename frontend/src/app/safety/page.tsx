"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const trustPillars = [
  {
    number: "01",
    title: "VERIFIED VEHICLES & OWNERS",
    text: "Owners submit the required information and vehicle documents. THE WHEEL DEAL reviews the listing before the vehicle becomes available to renters.",
  },
  {
    number: "02",
    title: "CONFIRMED BOOKINGS",
    text: "A booking request is not automatically confirmed. The owner confirms availability, while THE WHEEL DEAL records and facilitates the booking before the rental proceeds.",
  },
  {
    number: "03",
    title: "CLEAR RENTAL AGREEMENT",
    text: "The rental records the vehicle, rental period, price, security deposit and agreed terms. Both renter and owner have a clear digital record of the transaction.",
  },
];

const paymentStages = [
  ["01", "PAYMENT RECEIVED"],
  ["02", "FUNDS HELD"],
  ["03", "HANDOVER VERIFIED"],
  ["04", "RENTAL ACTIVE"],
  ["05", "VEHICLE RETURNED"],
  ["06", "RETURN CONFIRMED"],
  ["07", "OWNER PAYOUT"],
];

const faqs = [
  {
    question: "How are vehicles and owners verified?",
    answer:
      "Owners submit the required information and vehicle documents. THE WHEEL DEAL reviews the listing before the vehicle becomes available to renters.",
  },
  {
    question: "Is my booking confirmed immediately?",
    answer:
      "No. A booking request is not automatically confirmed. The owner confirms availability, while THE WHEEL DEAL records and facilitates the booking before the rental proceeds.",
  },
  {
    question: "What does the rental agreement record?",
    answer:
      "The rental records the vehicle, rental period, price, security deposit and agreed terms so both renter and owner have a clear digital record of the transaction.",
  },
  {
    question: "Where does my payment go?",
    answer:
      "The rental payment is held by THE WHEEL DEAL through the rental process and follows the required rental milestones before the owner's payout is released.",
  },
  {
    question: "What does the OTP do?",
    answer:
      "The one-time OTP verifies that the physical vehicle handover has taken place. Once verified, the rental starts and rental-time calculation begins. The OTP does not release the owner's payout.",
  },
  {
    question: "What happens when I return the vehicle?",
    answer:
      "The return is recorded and reviewed against the agreed rental terms and available vehicle-condition information. Once the return is confirmed, the settlement process can proceed.",
  },
  {
    question: "What happens if there is a problem with the rental?",
    answer:
      "Either the renter or owner can report an issue with the relevant rental details and supporting evidence. THE WHEEL DEAL can review the available records, evidence and agreed rental terms and coordinate the next step.",
  },
  {
    question: "How is the owner's payout calculated?",
    answer:
      "THE WHEEL DEAL deducts 20% of the total rental fare as its platform commission on each successful rental. The remaining 80% is paid to the owner. The security deposit is separate from this commission.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.setProperty("--reveal-delay", `${delay}ms`);
          element.classList.add("safety-reveal-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`safety-reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionMarker() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto mb-10 h-[2px] w-5 bg-[var(--teal)]"
    />
  );
}

export default function SafetyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-[var(--paper)]">
      {/* 01 — OPENING */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32 lg:py-36">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#b45f26]">
                SAFETY & TRUST
              </p>

              <h1 className="font-display max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.035em] text-[var(--ink)] sm:text-6xl md:text-7xl lg:text-[78px]">
                RENT WITH CONFIDENCE.
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-7 text-[var(--ink-muted)] sm:text-lg">
                Verified vehicles and owners, confirmed bookings, protected
                payments and a structured handover process — all in one rental
                experience.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--teal-deep)]">
                <span>VERIFY</span>
                <span aria-hidden="true">→</span>
                <span>CONFIRM</span>
                <span aria-hidden="true">→</span>
                <span>PROTECT</span>
                <span aria-hidden="true">→</span>
                <span>HANDOVER</span>
                <span aria-hidden="true">→</span>
                <span>RETURN</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/browse"
                  className="safety-button inline-flex items-center justify-center rounded-full bg-[var(--teal)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--teal-deep)] active:translate-y-0"
                >
                  FIND A RIDE
                </Link>

                <Link
                  href="/how-it-works"
                  className="safety-button inline-flex items-center justify-center rounded-full border border-[var(--teal)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--teal-deep)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface)] active:translate-y-0"
                >
                  HOW IT WORKS
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — TRUST PILLARS */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              TRUST PILLARS
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              A CLEARER WAY TO RENT.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 100}>
                <article className="group h-full rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--surface)] hover:shadow-sm">
                  <div className="mb-8 text-sm font-bold text-[#b45f26]">
                    {pillar.number}
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--ink-muted)]">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — PAYMENT PROTECTION */}
      <section className="bg-[var(--teal-deep)] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--amber)]">
              PAYMENT PROTECTION
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              PAYMENT STAYS PROTECTED UNTIL THE RENTAL MILESTONES ARE COMPLETE.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              Funds are held by THE WHEEL DEAL until the required rental
              milestones are completed.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {paymentStages.map(([number, title], index) => (
              <Reveal key={number} delay={index * 70}>
                <div className="rounded-lg border border-white/20 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/40">
                  <span className="block text-[10px] font-bold text-white/60">
                    {number}
                  </span>

                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.04em]">
                    {title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 border-t border-white/20 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                RENTAL COMMISSION
              </p>

              <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-display text-2xl font-black uppercase text-white">
                    80% → OWNER
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
                    THE WHEEL DEAL deducts 20% of the total rental fare as its
                    platform commission on each successful rental. The remaining
                    80% is paid to the owner.
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.04em] text-[var(--amber)]">
                    The security deposit is separate from this commission.
                  </p>
                </div>

                <p className="font-display text-2xl font-black uppercase text-[var(--amber)]">
                  20% → THE WHEEL DEAL
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — VERIFIED HANDOVER */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              VERIFIED HANDOVER
            </p>

            <h2 className="font-display mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              THE RENTAL STARTS WITH A VERIFIED HANDOVER.
            </h2>

            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.07em] text-[var(--teal-deep)]">
              <span>OWNER PROVIDES OTP</span>
              <span>→</span>
              <span>RENTER VERIFIES</span>
              <span>→</span>
              <span>HANDOVER CONFIRMED</span>
              <span>→</span>
              <span>RENTAL STARTS</span>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-[var(--ink-muted)] sm:text-base">
              OTP confirms that the physical vehicle handover has taken place.
              It starts the rental and rental-time calculation.
            </p>

            <div className="mt-6 rounded-lg border border-[var(--border)] bg-[#eee7da] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#b45f26]">
                OTP CONFIRMS HANDOVER — IT DOES NOT RELEASE THE OWNER'S PAYOUT.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — RENTAL & RETURN RECORD */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              RENTAL & RETURN RECORD
            </p>

            <h2 className="font-display mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              IMPORTANT RENTAL EVENTS ARE RECORDED DIGITALLY.
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-[var(--ink-muted)]">
              Important rental events and timestamps are recorded so the rental
              has a clear digital trail from handover through return.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.06em] text-[var(--teal-deep)]">
              <span>HANDOVER</span>
              <span>→</span>
              <span>RENTAL ACTIVE</span>
              <span>→</span>
              <span>RETURN</span>
              <span>→</span>
              <span>RETURN REVIEW</span>
              <span>→</span>
              <span>RETURN CONFIRMED</span>
            </div>

            <p className="mt-7 max-w-4xl text-sm font-semibold leading-6 text-[var(--ink)]">
              The rental record keeps the agreed terms, vehicle condition
              information and key timestamps available if the rental needs to
              be reviewed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 — TRUST FOR BOTH SIDES */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              TRUST FOR BOTH SIDES
            </p>

            <h2 className="font-display mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              TWO SIDES. ONE CLEAR PROCESS.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal delay={0}>
              <article className="h-full rounded-xl bg-[var(--teal-deep)] p-7 text-white transition-transform duration-200 hover:-translate-y-1">
                <h3 className="font-display text-2xl font-black uppercase">
                  RENTER
                </h3>

                <p className="mt-7 text-sm font-semibold leading-6">
                  You're not simply renting from a stranger.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/80">
                  Verified vehicle · Owner details · Confirmed booking · Clear
                  agreement · Protected payment · Verified handover ·
                  Documented return
                </p>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="h-full rounded-xl border border-[var(--border)] bg-[#eee7da] p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--surface)]">
                <h3 className="font-display text-2xl font-black uppercase">
                  OWNER
                </h3>

                <p className="mt-7 text-sm font-semibold leading-6">
                  You're not simply handing your vehicle to a stranger.
                </p>

                <p className="mt-5 text-sm leading-7 text-[var(--ink-muted)]">
                  Renter details · Confirmed booking · Agreed terms · Verified
                  handover · Rental record · Return review · Settlement process
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — ISSUE / DISPUTE PROCESS */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              ISSUE / DISPUTE PROCESS
            </p>

            <h2 className="font-display mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              IF SOMETHING GOES WRONG, THERE IS A PROCESS.
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-[var(--ink-muted)]">
              Relevant evidence can include vehicle condition information,
              photos or videos, rental records and the agreed terms.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "ISSUE REPORTED",
                "Either the renter or owner reports the issue with the relevant rental details and supporting evidence.",
              ],
              [
                "02",
                "EVIDENCE REVIEWED",
                "Vehicle condition information, photos/videos, rental records and agreed terms are reviewed.",
              ],
              [
                "03",
                "THE WHEEL DEAL REVIEW",
                "THE WHEEL DEAL reviews the available records, evidence and agreed rental terms and coordinates the next step.",
              ],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 100}>
                <article
                  className={`h-full rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1 ${
                    index === 2
                      ? "border-[var(--border)] bg-[#eee7da]"
                      : "border-[var(--border)] bg-[var(--paper)]"
                  }`}
                >
                  <span className="text-sm font-bold text-[#b45f26]">
                    {number}
                  </span>

                  <h3 className="font-display mt-7 text-xl font-black uppercase leading-tight">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--ink-muted)]">
                    {text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — SHARED RESPONSIBILITY */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45f26]">
              SHARED RESPONSIBILITY
            </p>

            <h2 className="font-display mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              SAFETY IS A SHARED RESPONSIBILITY.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal delay={0}>
              <article className="h-full rounded-xl bg-[var(--teal-deep)] p-7 text-white transition-transform duration-200 hover:-translate-y-1">
                <h3 className="font-display text-2xl font-black uppercase">
                  RENTER
                </h3>

                <p className="mt-7 text-sm font-bold uppercase leading-7 text-white/85">
                  FOLLOW RENTAL TERMS · USE THE VEHICLE RESPONSIBLY · COMPLETE
                  HANDOVER VERIFICATION · RETURN ON TIME · REPORT ISSUES
                </p>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="h-full rounded-xl border border-[var(--border)] bg-[#eee7da] p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--surface)]">
                <h3 className="font-display text-2xl font-black uppercase">
                  OWNER
                </h3>

                <p className="mt-7 text-sm font-bold uppercase leading-7 text-[var(--teal-deep)]">
                  PROVIDE ACCURATE VEHICLE INFORMATION · KEEP AVAILABILITY
                  ACCURATE · CONFIRM RENTAL TERMS · COMPLETE HANDOVER
                  VERIFICATION · CONFIRM VEHICLE RETURN
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28">
          <SectionMarker />

          <Reveal>
            <h2 className="font-display max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </Reveal>

          <div className="mt-10 space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={faq.question} delay={index * 35}>
                  <div className="overflow-hidden rounded-lg border border-[var(--border)]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors duration-200 hover:bg-[var(--surface)]"
                    >
                      <span className="text-sm font-semibold text-[var(--ink)] sm:text-base">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`shrink-0 text-lg text-[var(--teal)] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-[var(--border)] px-5 pb-5 pt-4">
                          <p className="max-w-3xl text-sm leading-6 text-[var(--ink-muted)]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section className="bg-[var(--teal-deep)] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:gap-0">
            <Reveal className="md:border-r md:border-white/20 md:pr-12">
              <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-4xl">
                READY TO RENT WITH CONFIDENCE?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                Find a vehicle nearby and start your rental request.
              </p>

              <Link
                href="/browse"
                className="safety-button mt-7 inline-flex items-center justify-center rounded-full bg-[#faf6ef] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] !text-[#083f3a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
              >
                FIND A RIDE
              </Link>
            </Reveal>

            <Reveal className="md:pl-12" delay={120}>
              <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-4xl">
                HAVE A VEHICLE TO RENT OUT?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                List your vehicle, complete the required verification and start
                earning from successful rentals.
              </p>

              <Link
                href="/list-your-vehicle"
                className="safety-button mt-7 inline-flex items-center justify-center rounded-full bg-[var(--amber)] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--ink)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
              >
                LIST YOUR VEHICLE
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}