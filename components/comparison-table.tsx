"use client"

import { useState } from "react"
import { Check, Minus, ChevronUp, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"

const features = [
  "Malware Detection Rate",
  "Real-Time Protection",
  "VPN Included",
  "Password Manager",
  "Parental Controls",
  "Dark Web Monitoring",
  "Ransomware Protection",
  "Webcam Protection",
  "Cloud Backup",
  "Identity Theft Protect.",
  "Firewall",
  "System Optimizer",
  "Customer Support",
  "Platforms",
  "Devices Covered",
  "Price / Year",
  "Our Score",
]

type FeatureValue = boolean | string

const tableData: {
  id: string
  name: string
  shortName: string
  score: number
  data: FeatureValue[]
  affiliateUrl: string
  reviewUrl: string
  highlight?: boolean
}[] = [
  {
    id: "norton",
    name: "Norton 360 Deluxe",
    shortName: "Norton",
    score: 9.8,
    highlight: true,
    affiliateUrl: "https://norton.com",
    reviewUrl: "/reviews/norton",
    data: [
      "99.9%", true, "Unlimited", true, true, true, true, false,
      "50GB", false, true, true, "24/7 Chat & Phone",
      "Win/Mac/iOS/Android", "5 devices", "$29.99", "9.8/10",
    ],
  },
  {
    id: "mcafee",
    name: "McAfee Total Protection",
    shortName: "McAfee",
    score: 9.4,
    affiliateUrl: "https://mcafee.com",
    reviewUrl: "/reviews/mcafee",
    data: [
      "99.7%", true, "Limited", true, true, true, true, false,
      false, true, true, false, "24/7 Chat",
      "Win/Mac/iOS/Android", "Unlimited", "$39.99", "9.4/10",
    ],
  },
  {
    id: "guardio",
    name: "Guardio",
    shortName: "Guardio",
    score: 9.1,
    affiliateUrl: "https://guard.io",
    reviewUrl: "/reviews/guardio",
    data: [
      "98.5%", true, false, false, true, true, true, false,
      false, false, false, false, "Email & Chat",
      "Chrome / Edge", "5 devices", "$19.99", "9.1/10",
    ],
  },
  {
    id: "bitdefender",
    name: "Bitdefender Total Security",
    shortName: "Bitdefender",
    score: 9.3,
    affiliateUrl: "https://bitdefender.com",
    reviewUrl: "/reviews/bitdefender",
    data: [
      "99.9%", true, "Limited", true, true, false, true, true,
      false, false, true, true, "24/7 Chat",
      "Win/Mac/iOS/Android", "5 devices", "$34.99", "9.3/10",
    ],
  },
  {
    id: "avg",
    name: "AVG Internet Security",
    shortName: "AVG",
    score: 8.8,
    affiliateUrl: "https://avg.com",
    reviewUrl: "/reviews/avg",
    data: [
      "99.2%", true, false, false, false, false, true, true,
      false, false, true, false, "Email & Chat",
      "Win/Mac/Android", "10 devices", "$24.99", "8.8/10",
    ],
  },
  {
    id: "eset",
    name: "ESET NOD32",
    shortName: "ESET",
    score: 8.9,
    affiliateUrl: "https://eset.com",
    reviewUrl: "/reviews/eset",
    data: [
      "99.5%", true, false, false, false, false, true, false,
      false, false, true, true, "Email & Live Chat",
      "Win/Mac/Linux", "3 devices", "$29.99", "8.9/10",
    ],
  },
  {
    id: "webroot",
    name: "Webroot SecureAnywhere",
    shortName: "Webroot",
    score: 8.6,
    affiliateUrl: "https://webroot.com",
    reviewUrl: "/reviews/webroot",
    data: [
      "98.8%", true, false, false, false, false, true, false,
      false, true, true, false, "Phone & Chat",
      "Win/Mac/iOS/Android", "3 devices", "$17.99", "8.6/10",
    ],
  },
]

function CellValue({ val }: { val: FeatureValue }) {
  if (val === true)
    return <Check className="w-5 h-5 mx-auto" style={{ color: "oklch(0.55 0.16 145)" }} />
  if (val === false)
    return <Minus className="w-5 h-5 mx-auto text-muted-foreground opacity-40" />
  return <span className="text-sm text-foreground/80 leading-tight">{val as string}</span>
}

export default function ComparisonTable() {
  const [showAll, setShowAll] = useState(false)
  const visibleFeatures = showAll ? features : features.slice(0, 9)

  return (
    <section id="comparison" className="py-16 md:py-24" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "oklch(0.35 0.12 250 / 0.1)", color: "oklch(0.35 0.12 250)" }}
          >
            Side-by-Side Comparison
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            Compare Antivirus Features
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All the key features at a glance — updated monthly based on our live testing lab.
          </p>
        </div>

        {/* Table */}
        <div
          className="overflow-x-auto rounded-2xl border shadow-lg"
          style={{ borderColor: "oklch(0.88 0.01 240)" }}
        >
          <table className="w-full min-w-[750px] border-collapse text-sm">
            <thead>
              <tr style={{ backgroundColor: "oklch(0.25 0.1 255)" }}>
                <th className="py-4 px-4 text-left font-semibold text-white/60 w-44">Feature</th>
                {tableData.map((p) => (
                  <th
                    key={p.id}
                    className={`py-4 px-3 text-center font-bold ${
                      p.highlight ? "text-yellow-300" : "text-white"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                        {p.shortName}
                      </span>
                      {p.highlight && (
                        <span
                          className="text-xs font-medium px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "oklch(0.65 0.18 45)", color: "white" }}
                        >
                          #1 Pick
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visibleFeatures.map((feature, fi) => (
                <tr
                  key={feature}
                  style={{
                    backgroundColor:
                      fi % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.97 0.005 240)",
                  }}
                >
                  <td className="py-3 px-4 font-medium text-foreground/70 text-xs">
                    {feature}
                  </td>
                  {tableData.map((p) => (
                    <td
                      key={p.id}
                      className={`py-3 px-3 text-center ${p.highlight ? "font-medium" : ""}`}
                      style={
                        p.highlight
                          ? { backgroundColor: "oklch(0.65 0.18 45 / 0.06)" }
                          : undefined
                      }
                    >
                      <CellValue val={p.data[fi]} />
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA row */}
              <tr style={{ backgroundColor: "oklch(0.95 0.01 240)" }}>
                <td className="py-4 px-4 font-semibold text-foreground/60 text-xs">Get Deal</td>
                {tableData.map((p) => (
                  <td key={p.id} className="py-4 px-3 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold text-white transition-all hover:scale-105"
                        style={{ backgroundColor: p.highlight ? "oklch(0.65 0.18 45)" : "oklch(0.35 0.12 250)" }}
                      >
                        Buy Now
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link href={p.reviewUrl} className="text-xs underline underline-offset-2 text-muted-foreground hover:no-underline">
                        Review
                      </Link>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Toggle rows */}
        <div className="text-center mt-5">
          <button
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" /> Show fewer features
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> Show all {features.length} features
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
