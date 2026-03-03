"use client"

import { Clock, Tag, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const deals = [
  {
    brand: "Norton 360 Deluxe",
    offer: "70% OFF — First Year",
    originalPrice: "$99.99",
    dealPrice: "$29.99",
    code: "NORTON70",
    expiry: "Expires March 31",
    affiliateUrl: "https://norton.com",
    reviewUrl: "/reviews/norton",
    accentColor: "oklch(0.55 0.22 30)",
    highlight: true,
  },
  {
    brand: "McAfee Total Protection",
    offer: "67% OFF — All Devices",
    originalPrice: "$119.99",
    dealPrice: "$39.99",
    code: "MCAFEE67",
    expiry: "Limited time",
    affiliateUrl: "https://mcafee.com",
    reviewUrl: "/reviews/mcafee",
    accentColor: "oklch(0.45 0.18 220)",
    highlight: false,
  },
  {
    brand: "Guardio Browser Security",
    offer: "67% OFF — Annual Plan",
    originalPrice: "$59.88",
    dealPrice: "$19.99",
    code: "GUARDIO67",
    expiry: "Valid through March",
    affiliateUrl: "https://guard.io",
    reviewUrl: "/reviews/guardio",
    accentColor: "oklch(0.45 0.16 280)",
    highlight: false,
  },
  {
    brand: "Bitdefender Total Security",
    offer: "61% OFF + 3 Months Free",
    originalPrice: "$89.99",
    dealPrice: "$34.99",
    code: "BITDEF61",
    expiry: "Expires soon",
    affiliateUrl: "https://bitdefender.com",
    reviewUrl: "/reviews/bitdefender",
    accentColor: "oklch(0.40 0.18 195)",
    highlight: false,
  },
  {
    brand: "Trend Micro Maximum",
    offer: "67% OFF — 5 Devices",
    originalPrice: "$89.95",
    dealPrice: "$29.95",
    code: "TREND67",
    expiry: "This week only",
    affiliateUrl: "https://trendmicro.com",
    reviewUrl: "/reviews/trend-micro",
    accentColor: "oklch(0.48 0.17 200)",
    highlight: false,
  },
  {
    brand: "Avast Premium Security",
    offer: "69% OFF — 10 Devices",
    originalPrice: "$89.99",
    dealPrice: "$27.99",
    code: "AVAST69",
    expiry: "Ongoing deal",
    affiliateUrl: "https://avast.com",
    reviewUrl: "/reviews/avast",
    accentColor: "oklch(0.48 0.18 150)",
    highlight: false,
  },
]

export default function DealCards() {
  const [copied, setCopied] = useState<string | null>(null)

  function handleCopy(code: string) {
    navigator.clipboard.writeText(code).catch(() => {})
    setCopied(code)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="deals" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "oklch(0.65 0.18 45 / 0.12)", color: "oklch(0.55 0.18 45)" }}
          >
            <Tag className="w-3.5 h-3.5" />
            Exclusive Deals — Updated Daily
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
            {"Today's Best Antivirus Coupons"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We negotiate directly with vendors to bring you deals you {"won't"} find anywhere else.
          </p>
        </div>

        {/* Deal grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal) => (
            <div
              key={deal.brand}
              className="rounded-xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                borderColor: deal.highlight ? deal.accentColor : "oklch(0.88 0.01 240)",
                outline: deal.highlight ? `2px solid ${deal.accentColor}` : "none",
                outlineOffset: "-2px",
              }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: deal.accentColor }} />

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-tight" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                      {deal.brand}
                    </h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: deal.accentColor }}>
                      {deal.offer}
                    </p>
                  </div>
                  {deal.highlight && (
                    <span className="text-xs font-bold text-white px-2 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.65 0.18 45)" }}>
                      Hot Deal
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                    {deal.dealPrice}
                  </span>
                  <span className="text-sm line-through text-muted-foreground">{deal.originalPrice}</span>
                  <span className="text-xs text-muted-foreground">/year</span>
                </div>

                {/* Coupon code */}
                <div
                  className="flex items-center gap-2 mb-4 p-2.5 rounded-lg border border-dashed"
                  style={{ backgroundColor: "oklch(0.97 0.005 240)", borderColor: "oklch(0.78 0.01 240)" }}
                >
                  <Tag className="w-3.5 h-3.5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-sm font-mono font-bold text-foreground tracking-widest">{deal.code}</span>
                  <button className="ml-auto text-xs text-primary underline cursor-pointer hover:no-underline" onClick={() => handleCopy(deal.code)}>
                    {copied === deal.code ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Expiry */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  {deal.expiry}
                </div>

                {/* CTAs */}
                <a
                  href={deal.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 mb-2"
                  style={{ backgroundColor: deal.accentColor }}
                >
                  Claim Deal
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={deal.reviewUrl}
                  className="flex items-center justify-center gap-1 w-full py-1.5 rounded-lg text-xs font-semibold border transition-all hover:bg-foreground/5"
                  style={{ borderColor: "oklch(0.88 0.01 240)", color: "oklch(0.50 0.05 240)" }}
                >
                  Read Full Review
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
          * Prices shown are for first-year subscriptions and may vary. We may earn a commission when you purchase through our links, at no extra cost to you. This helps us maintain our independent reviews.
        </p>
      </div>
    </section>
  )
}
