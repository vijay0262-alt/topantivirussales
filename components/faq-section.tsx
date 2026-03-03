"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    q: "Which antivirus is the best in 2025?",
    a: "Based on our independent testing, Norton 360 Deluxe is the best overall antivirus in 2025 — offering a 99.9% detection rate, unlimited VPN, password manager, and dark web monitoring at a discounted price of $29.99/year for the first year.",
  },
  {
    q: "Is free antivirus good enough?",
    a: "Free antivirus options like Avast Free or AVG Free offer basic protection but lack crucial features like ransomware protection, VPN, and dark web monitoring. For comprehensive protection, a paid solution is strongly recommended, especially with deals bringing costs under $30/year.",
  },
  {
    q: "What is Guardio and how is it different?",
    a: "Guardio is a browser-based security tool that works as a Chrome/Edge extension rather than a traditional desktop antivirus. It excels at blocking phishing sites, malicious ads, and scam pages in real time. It's a great complement to a full antivirus, but not a complete replacement for offline threats.",
  },
  {
    q: "Do I need antivirus on my Mac?",
    a: "Yes. While macOS has built-in security, Macs are increasingly targeted by malware, adware, and phishing. Products like Bitdefender, Norton, and McAfee all offer excellent Mac protection with minimal system impact.",
  },
  {
    q: "How do antivirus affiliate commissions work?",
    a: "When you click a deal link on this site and make a purchase, we may earn a small commission from the antivirus vendor. This does not increase your price — in fact, our affiliate relationships often let us negotiate exclusive discounts. Our reviews and rankings are completely independent and unaffected by commissions.",
  },
  {
    q: "How often are your reviews and deals updated?",
    a: "Our deal prices are verified and updated daily. Full product reviews and comparison scores are updated quarterly or whenever a major product update is released. The last full review cycle was completed in February 2025.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-16 md:py-20"
      style={{ backgroundColor: "oklch(0.97 0.005 240)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-3"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before choosing an antivirus.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card overflow-hidden transition-shadow hover:shadow-md"
              style={{ borderColor: "oklch(0.88 0.01 240)" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                {open === i ? (
                  <ChevronUp className="w-4 h-4 flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {open === i && (
                <div
                  className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t pt-3"
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
