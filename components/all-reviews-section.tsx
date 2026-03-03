import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const allProducts = [
  {
    name: "Norton 360 Deluxe",
    slug: "norton",
    score: 9.8,
    badge: "Editor's Choice",
    badgeColor: "oklch(0.58 0.20 35)",
    tagline: "Best All-Around Protection",
  },
  {
    name: "McAfee Total Protection",
    slug: "mcafee",
    score: 9.4,
    badge: "Best for Families",
    badgeColor: "oklch(0.45 0.18 145)",
    tagline: "Best Multi-Device Value",
  },
  {
    name: "Bitdefender Total Security",
    slug: "bitdefender",
    score: 9.3,
    badge: "Lightest on PC",
    badgeColor: "oklch(0.42 0.16 220)",
    tagline: "Best Advanced Protection",
  },
  {
    name: "Trend Micro Maximum",
    slug: "trend-micro",
    score: 8.9,
    badge: "Best Parental Controls",
    badgeColor: "oklch(0.44 0.18 200)",
    tagline: "Best for Families",
  },
  {
    name: "Guardio Browser Security",
    slug: "guardio",
    score: 9.1,
    badge: "Fastest Setup",
    badgeColor: "oklch(0.48 0.18 280)",
    tagline: "Best Browser Protection",
  },
  {
    name: "AVG Internet Security",
    slug: "avg",
    score: 8.8,
    badge: "Budget Pick",
    badgeColor: "oklch(0.44 0.16 155)",
    tagline: "Best Budget Choice",
  },
  {
    name: "ESET NOD32 Antivirus",
    slug: "eset",
    score: 8.9,
    badge: "Lowest Impact",
    badgeColor: "oklch(0.40 0.13 215)",
    tagline: "Best for Power Users",
  },
  {
    name: "Webroot SecureAnywhere",
    slug: "webroot",
    score: 8.6,
    badge: "Fastest Scans",
    badgeColor: "oklch(0.46 0.16 290)",
    tagline: "Best Cloud-Based AV",
  },
  {
    name: "Avast Premium Security",
    slug: "avast",
    score: 8.7,
    badge: "Most Popular",
    badgeColor: "oklch(0.44 0.17 180)",
    tagline: "Best Free-to-Paid Upgrade",
  },
  {
    name: "Malwarebytes Premium",
    slug: "malwarebytes",
    score: 8.4,
    badge: "Best Remover",
    badgeColor: "oklch(0.42 0.17 290)",
    tagline: "Best Malware Removal",
  },
  {
    name: "TotalAV Antivirus Pro",
    slug: "total-av",
    score: 8.3,
    badge: "Easy to Use",
    badgeColor: "oklch(0.50 0.17 30)",
    tagline: "Best for Beginners",
  },
  {
    name: "Sophos Home Premium",
    slug: "sophos",
    score: 8.5,
    badge: "Best for Families",
    badgeColor: "oklch(0.38 0.13 240)",
    tagline: "Best Remote Management",
  },
  {
    name: "Iolo System Mechanic Pro",
    slug: "iolo-system-mechanic",
    score: 8.2,
    badge: "PC Optimizer",
    badgeColor: "oklch(0.42 0.15 165)",
    tagline: "Best PC Tune-Up + AV",
  },
  {
    name: "Iolo Ultimate Defense",
    slug: "iolo-ultimate-defense",
    score: 8.4,
    badge: "All-in-One Bundle",
    badgeColor: "oklch(0.42 0.15 165)",
    tagline: "Best Iolo Value Bundle",
  },
  {
    name: "PC Matic Security",
    slug: "pc-matic",
    score: 8.2,
    badge: "USA-Made",
    badgeColor: "oklch(0.40 0.18 25)",
    tagline: "Best Whitelisting AV",
  },
  {
    name: "Watchdog Anti-Malware",
    slug: "watchdog",
    score: 8.1,
    badge: "Lightweight",
    badgeColor: "oklch(0.38 0.11 220)",
    tagline: "Best Companion Scanner",
  },
]

export default function AllReviewsSection() {
  return (
    <section
      id="all-reviews"
      className="py-16 md:py-20"
      style={{ backgroundColor: "oklch(0.96 0.006 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "oklch(0.35 0.12 250 / 0.1)",
              color: "oklch(0.35 0.12 250)",
            }}
          >
            <Star className="w-3.5 h-3.5" />
            All Expert-Tested Products
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-balance"
            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
          >
            Products We Review &amp; Compare
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every antivirus below has been independently tested using 10,000+ malware samples,
            real phishing attacks, and performance benchmarks. Click any product to read the
            full in-depth review.
          </p>
        </div>

        {/* Product grid — 2 cols mobile / 3 cols tablet / 4 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {allProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/reviews/${product.slug}`}
              className="group flex flex-col gap-3 p-4 rounded-xl border bg-card transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: "oklch(0.88 0.01 240)" }}
            >
              {/* Badge */}
              <span
                className="self-start text-[10px] font-bold text-white px-2 py-0.5 rounded-full leading-5 whitespace-nowrap"
                style={{ backgroundColor: product.badgeColor }}
              >
                {product.badge}
              </span>

              {/* Name & tagline */}
              <div className="flex-1">
                <p
                  className="font-bold text-foreground text-sm leading-snug group-hover:underline"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  {product.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {product.tagline}
                </p>
              </div>

              {/* Score row */}
              <div className="flex items-center gap-1 mt-auto pt-2 border-t" style={{ borderColor: "oklch(0.90 0.01 240)" }}>
                <span
                  className="text-base font-extrabold"
                  style={{ color: "oklch(0.35 0.12 250)", fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  {product.score}
                </span>
                <span className="text-xs text-muted-foreground">/10</span>
                <ArrowRight
                  className="w-3.5 h-3.5 ml-auto text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need a side-by-side breakdown? Our comparison table covers all key features.
          </p>
          <Link
            href="/#comparison"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white shadow transition-all hover:brightness-110"
            style={{ backgroundColor: "oklch(0.35 0.12 250)" }}
          >
            Compare All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
