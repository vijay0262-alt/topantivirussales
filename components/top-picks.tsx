"use client"

import { useState } from "react"
import { Star, CheckCircle, XCircle, ArrowRight, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

interface AntivirusProduct {
  id: string
  rank: number
  name: string
  tagline: string
  score: number
  badge?: string
  badgeColor?: string
  originalPrice: number
  salePrice: number
  discount: number
  devices: number
  features: string[]
  weaknesses: string[]
  affiliateUrl: string
  reviewUrl: string
  highlight?: boolean
}

const products: AntivirusProduct[] = [
  {
    id: "norton",
    rank: 1,
    name: "Norton 360 Deluxe",
    tagline: "Best All-Around Protection 2026",
    score: 9.8,
    badge: "Editor's Choice",
    badgeColor: "oklch(0.65 0.18 45)",
    originalPrice: 99.99,
    salePrice: 29.99,
    discount: 70,
    devices: 5,
    features: ["Real-time threat protection", "VPN included (unlimited data)", "Password manager", "Dark web monitoring", "Cloud backup (50GB)", "Parental controls"],
    weaknesses: ["Renewal prices increase", "Heavy on system resources"],
    affiliateUrl: "https://norton.com",
    reviewUrl: "/reviews/norton",
    highlight: true,
  },
  {
    id: "mcafee",
    rank: 2,
    name: "McAfee Total Protection",
    tagline: "Best for Families & Multiple Devices",
    score: 9.4,
    badge: "Best Value",
    badgeColor: "oklch(0.55 0.16 145)",
    originalPrice: 119.99,
    salePrice: 39.99,
    discount: 67,
    devices: 10,
    features: ["Multi-device coverage (unlimited)", "Identity theft protection", "Password manager", "File shredder", "Home network scan"],
    weaknesses: ["No free tier", "VPN has data cap on basic plan"],
    affiliateUrl: "https://mcafee.com",
    reviewUrl: "/reviews/mcafee",
    highlight: false,
  },
  {
    id: "bitdefender",
    rank: 3,
    name: "Bitdefender Total Security",
    tagline: "Best for Advanced PC Protection",
    score: 9.3,
    badge: "Lightest on PC",
    badgeColor: "oklch(0.50 0.18 195)",
    originalPrice: 89.99,
    salePrice: 34.99,
    discount: 61,
    devices: 5,
    features: ["99.9% malware detection rate", "Anti-tracker & VPN included", "Webcam protection", "Ransomware remediation", "Advanced threat defense"],
    weaknesses: ["Complex interface for beginners", "VPN limited on basic plans"],
    affiliateUrl: "https://bitdefender.com",
    reviewUrl: "/reviews/bitdefender",
    highlight: false,
  },
  {
    id: "trend-micro",
    rank: 4,
    name: "Trend Micro Maximum Security",
    tagline: "Best Parental Controls & Privacy 2026",
    score: 8.9,
    badge: "Top Family Pick",
    badgeColor: "oklch(0.48 0.17 200)",
    originalPrice: 89.95,
    salePrice: 29.95,
    discount: 67,
    devices: 5,
    features: ["99.6% detection rate (AI-powered)", "Social Media Privacy Scanner", "Pay Guard secure banking browser", "Excellent parental controls", "Chromebook supported"],
    weaknesses: ["VPN sold separately", "Interface feels dated"],
    affiliateUrl: "https://trendmicro.com",
    reviewUrl: "/reviews/trend-micro",
    highlight: false,
  },
  {
    id: "guardio",
    rank: 5,
    name: "Guardio",
    tagline: "Best Browser & Online Protection",
    score: 9.1,
    badge: "Fastest Setup",
    badgeColor: "oklch(0.55 0.16 280)",
    originalPrice: 59.88,
    salePrice: 19.99,
    discount: 67,
    devices: 5,
    features: ["Chrome / Edge extension", "Blocks phishing sites instantly", "Malicious ad removal", "Data breach alerts", "Family plan included"],
    weaknesses: ["Browser-only protection", "No offline file scanning"],
    affiliateUrl: "https://guard.io",
    reviewUrl: "/reviews/guardio",
    highlight: false,
  },
  {
    id: "avg",
    rank: 6,
    name: "AVG Internet Security",
    tagline: "Best Budget Full-Featured Protection",
    score: 8.8,
    badge: "Budget Pick",
    badgeColor: "oklch(0.52 0.18 160)",
    originalPrice: 69.99,
    salePrice: 24.99,
    discount: 64,
    devices: 10,
    features: ["Real-time security updates", "Advanced ransomware protection", "Webcam & remote access shield", "Behavior shield & file shield", "Email & spam protection"],
    weaknesses: ["Occasional false positives", "Upsells during installation"],
    affiliateUrl: "https://avg.com",
    reviewUrl: "/reviews/avg",
    highlight: false,
  },
  {
    id: "eset",
    rank: 7,
    name: "ESET NOD32 Antivirus",
    tagline: "Best for Tech-Savvy Power Users",
    score: 8.9,
    badge: "Lowest System Impact",
    badgeColor: "oklch(0.48 0.14 215)",
    originalPrice: 79.99,
    salePrice: 29.99,
    discount: 63,
    devices: 3,
    features: ["UEFI & rootkit detection", "Exploit blocker", "Cloud-powered scanning", "Gamer / presentation mode", "Advanced memory scanner"],
    weaknesses: ["No VPN or password manager", "Limited parental controls"],
    affiliateUrl: "https://eset.com",
    reviewUrl: "/reviews/eset",
    highlight: false,
  },
  {
    id: "webroot",
    rank: 8,
    name: "Webroot SecureAnywhere",
    tagline: "Best Cloud-Based Lightweight AV",
    score: 8.6,
    badge: "Fastest Scans",
    badgeColor: "oklch(0.55 0.16 290)",
    originalPrice: 49.99,
    salePrice: 17.99,
    discount: 64,
    devices: 3,
    features: ["Cloud-based instant scanning", "Identity & privacy protection", "Real-time anti-phishing", "Firewall & network monitor", "Rollback ransomware protection"],
    weaknesses: ["Requires internet connection", "Smaller malware database vs. local AV"],
    affiliateUrl: "https://webroot.com",
    reviewUrl: "/reviews/webroot",
    highlight: false,
  },
  {
    id: "avast",
    rank: 9,
    name: "Avast Premium Security",
    tagline: "Best Free-to-Paid Upgrade 2026",
    score: 8.7,
    badge: "Most Popular",
    badgeColor: "oklch(0.55 0.18 180)",
    originalPrice: 89.99,
    salePrice: 27.99,
    discount: 69,
    devices: 10,
    features: ["Trusted by 400M+ users", "Sandbox for suspicious files", "Real Site anti-DNS hijacking", "Remote Access Shield", "Webcam & Wi-Fi protection"],
    weaknesses: ["Past data privacy controversy", "Aggressive upselling in app"],
    affiliateUrl: "https://avast.com",
    reviewUrl: "/reviews/avast",
    highlight: false,
  },
  {
    id: "malwarebytes",
    rank: 10,
    name: "Malwarebytes Premium",
    tagline: "Best Malware Removal & Remediation",
    score: 8.4,
    badge: "Best Remover",
    badgeColor: "oklch(0.50 0.18 290)",
    originalPrice: 44.99,
    salePrice: 33.74,
    discount: 25,
    devices: 5,
    features: ["World-class malware remediation", "PUP & adware removal", "Ransomware protection", "Browser Guard extension (free)", "Anti-exploit protection"],
    weaknesses: ["No firewall or parental controls", "Lower prevention rate vs. top rivals"],
    affiliateUrl: "https://malwarebytes.com",
    reviewUrl: "/reviews/malwarebytes",
    highlight: false,
  },
]

function StarRating({ score }: { score: number }) {
  const fullStars = Math.floor(score / 2)
  const hasHalf = (score / 2) % 1 >= 0.5
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < fullStars ? "fill-current" : i === fullStars && hasHalf ? "fill-current opacity-60" : "opacity-20"}`} style={{ color: "oklch(0.75 0.18 45)" }} />
      ))}
    </div>
  )
}

export default function TopPicks() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visibleProducts = showAll ? products : products.slice(0, 5)

  return (
    <section id="top-picks" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full" style={{ backgroundColor: "oklch(0.35 0.12 250 / 0.1)", color: "oklch(0.35 0.12 250)" }}>
            <Award className="w-3.5 h-3.5" />
            Expert Rankings — March 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-balance" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
            Top Antivirus Software Picks
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ranked by real-world malware detection, system impact, features &amp; value. All products independently tested by our security team.
          </p>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-5">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl overflow-hidden border transition-all ${product.highlight ? "shadow-2xl" : "shadow-md hover:shadow-lg"}`}
              style={{ borderColor: product.highlight ? "oklch(0.65 0.18 45)" : "oklch(0.88 0.01 240)", outline: product.highlight ? "2px solid oklch(0.65 0.18 45)" : "none", outlineOffset: "-2px" }}
            >
              {product.highlight && (
                <div className="w-full py-2 text-center text-xs font-bold text-white uppercase tracking-widest" style={{ backgroundColor: "oklch(0.65 0.18 45)" }}>
                  <TrendingUp className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                  #1 Recommended — Best Overall 2026
                </div>
              )}

              <div className="bg-card p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  {/* Rank + name */}
                  <div className="flex items-center gap-4 md:w-56 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0" style={{ backgroundColor: product.highlight ? "oklch(0.65 0.18 45)" : "oklch(0.35 0.12 250)" }}>
                      #{product.rank}
                    </div>
                    <div>
                      <div className="font-extrabold text-foreground text-lg leading-tight" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                        {product.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{product.tagline}</div>
                      {product.badge && (
                        <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: product.badgeColor }}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-start md:items-center md:w-28 flex-shrink-0">
                    <div className="text-3xl font-extrabold" style={{ color: "oklch(0.35 0.12 250)", fontFamily: "var(--font-heading, sans-serif)" }}>
                      {product.score}
                    </div>
                    <StarRating score={product.score} />
                    <span className="text-xs text-muted-foreground mt-1">out of 10</span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {product.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-start gap-1.5 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.16 145)" }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex flex-col items-start md:items-end gap-2 md:w-44 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs line-through text-muted-foreground">${product.originalPrice}/yr</span>
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: "oklch(0.55 0.18 25)" }}>-{product.discount}%</span>
                    </div>
                    <div className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                      ${product.salePrice}<span className="text-sm font-normal text-muted-foreground">/yr</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{product.devices} devices</div>
                    {/* Buy Now — real affiliate link */}
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full px-5 py-2.5 rounded-lg text-sm font-bold text-white text-center transition-all hover:scale-105 shadow-md"
                      style={{ backgroundColor: product.highlight ? "oklch(0.65 0.18 45)" : "oklch(0.35 0.12 250)" }}
                    >
                      Buy Now
                    </a>
                    {/* Full review link */}
                    <div className="flex items-center gap-3 w-full justify-end">
                      <button
                        className="text-xs underline underline-offset-2 hover:no-underline text-muted-foreground"
                        onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                      >
                        {expanded === product.id ? "Hide details" : "Show pros/cons"}
                      </button>
                      <Link href={product.reviewUrl} className="text-xs font-semibold flex items-center gap-0.5" style={{ color: "oklch(0.62 0.19 44)" }}>
                        Full Review <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expanded pros/cons */}
                {expanded === product.id && (
                  <div className="mt-5 pt-5 border-t grid md:grid-cols-2 gap-6" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" style={{ color: "oklch(0.55 0.16 145)" }} />
                        Pros
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.16 145)" }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4" style={{ color: "oklch(0.55 0.22 25)" }} />
                        Cons
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {product.weaknesses.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.22 25)" }} />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border text-sm font-semibold transition-all hover:bg-foreground hover:text-background"
            style={{ borderColor: "oklch(0.35 0.12 250)", color: "oklch(0.35 0.12 250)" }}
          >
            {showAll ? "Show fewer picks" : `Show all ${products.length} antivirus picks`}
            <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
