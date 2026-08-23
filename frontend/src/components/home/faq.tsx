"use client"

import { useState } from "react"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Is my booking confirmed as soon as I request it?",
    answer:
      "No. A booking request is not a confirmation. The Wheel Deal team first checks availability and rental terms with the owner, then confirms the details with you before the rental agreement is generated.",
  },
  {
    question: "When is my money actually charged?",
    answer:
      "Once the booking and rental agreement are confirmed, you pay the rental amount and security deposit. Your payment is held in The Wheel Deal escrow rather than being sent directly to the owner.",
  },
  {
    question: "What is the OTP for?",
    answer:
      "The OTP verifies that the vehicle has been handed over to you. Once the handover is verified, the rental officially starts and the rental timer begins.",
  },
  {
    question: "Is the security deposit part of the rental price?",
    answer:
      "No. The security deposit is separate from the rental amount. The applicable deposit is shown before you pay and is handled according to the rental agreement.",
  },
  {
    question: "How do owners get paid?",
    answer:
      "The owner's payout is released after the vehicle is returned and the return is confirmed. The Wheel Deal's commission is deducted from the owner's payout before the earnings reach the owner's wallet.",
  },
  {
    question: "What happens if something goes wrong at return?",
    answer:
      "If there is an issue when the vehicle is returned, the return is not simply settled automatically. The Wheel Deal team can step in to review the situation before the transaction is settled.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="w-full bg-[#F8F4EC]">
      <div className="mx-auto max-w-[1200px] px-6 py-[64px] md:px-10 md:py-[72px] lg:px-12 lg:py-[76px]">
        <h2
          className="mb-7 max-w-[600px] text-[38px] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-[#171717] md:text-[44px] lg:text-[48px]"
          style={{
            fontFamily:
              "var(--font-display), 'Arial Narrow', sans-serif",
          }}
        >
          Questions Before You Ride
        </h2>

        <div className="max-w-[720px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className={`border border-[#DED7CC] bg-white ${
                  index !== 0 ? "mt-2" : ""
                } rounded-[6px]`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-4 py-4 text-left md:px-5 md:py-[17px]"
                >
                  <span className="text-[12px] font-semibold leading-[1.35] text-[#171717] md:text-[13px]">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-[16px] font-normal text-[#075B55] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#DED7CC] px-4 py-4 md:px-5">
                      <p className="max-w-[650px] text-[11px] leading-[1.55] text-[#6D675F] md:text-[12px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}