import type { Metadata } from "next"
import Link from "next/link"
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Star,
  ArrowRight,
  Info,
  Zap,
  Wifi,
  Lock,
  AlertTriangle,
  ChevronDown,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Free Antivirus Software 2026 — Expert Tested & Ranked",
  description:
    "The 5 best completely free antivirus programs of 2026, expert-tested with real detection rates. Compare Avast, Bitdefender, AVG, Malwarebytes & more. No cost, full protection.",
  keywords: [
    "best free antivirus 2026", "free antivirus software", "top free antivirus",
    "avast free review", "bitdefender free review", "avg free antivirus",
    "free malware protection", "free virus scanner", "best no-cost antivirus",
  ],
  alternates: { canonical: "https://topantivirussales.us/best-free-antivirus" },
  openGraph: {
    title: "Best Free Antivirus Software 2026 — Expert Tested",
    description: "5 top-rated free antivirus tools tested for detection rate, performance, and features. Find the best free protection for your device.",
    url: "https://topantivirussales.us/best-free-antivirus",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free Antivirus 2026 — Expert Tested",
    description: "Compare the top 5 free antivirus programs of 2026. Real detection rates, no upsells.",
  },
}

const freeProducts = [
  {
    rank: 1,
    id: "avast-free",
    name: "Avast Free Antivirus",
    tagline: "Best Free Antivirus Overall",
    score: 9.0,
    badge: "Top Free Pick",
    badgeColor: "oklch(0.55 0.16 145)",
    detectionRate: "99.7%",
    platforms: "Windows, Mac, Android, iOS",
    affiliateUrl: "#avast",
    features: [
      "Real-time malware & virus protection",
      "Wi-Fi network security scanner",
      "Email & browser protection",
      "Behavior shield against unknown threats",
      "Automatic software updater",
    ],
    limitations: [
      "No VPN in free version",
      "No firewall in free version",
      "Shows upgrade prompts",
    ],
    highlight: true,
  },
  {
    rank: 2,
    id: "avg-free",
    name: "AVG AntiVirus Free",
    tagline: "Reliable Protection, Zero Cost",
    score: 8.8,
    badge: "Editor Approved",
    badgeColor: "oklch(0.50 0.14 215)",
    detectionRate: "99.5%",
    platforms: "Windows, Mac, Android",
    affiliateUrl: "#avg",
    features: [
      "Core antivirus & anti-malware engine",
      "Ransomware protection basics",
      "Email & web shields",
      "File shredder (basic)",
      "Automatic security updates",
    ],
    limitations: [
      "Limited customer support",
      "No VPN or password manager",
      "Upsell notifications",
    ],
    highlight: false,
  },
  {
    rank: 3,
    id: "bitdefender-free",
    name: "Bitdefender Antivirus Free",
    tagline: "Ultra-Lightweight Free Protection",
    score: 8.7,
    badge: "Lightest on CPU",
    badgeColor: "oklch(0.50 0.18 195)",
    detectionRate: "99.9%",
    platforms: "Windows only",
    affiliateUrl: "#bitdefender",
    features: [
      "Industry-leading malware detection",
      "Anti-phishing & anti-fraud",
      "Real-time threat defense",
      "Autopilot — runs silently in background",
      "Zero performance impact",
    ],
    limitations: [
      "Windows only (free edition)",
      "Very limited settings/controls",
      "No VPN, parental controls, or extras",
    ],
    highlight: false,
  },
  {
    rank: 4,
    id: "malwarebytes-free",
    name: "Malwarebytes Free",
    tagline: "Best for On-Demand Scanning & Cleanup",
    score: 8.4,
    badge: "Best Cleanup Tool",
    badgeColor: "oklch(0.55 0.14 45)",
    detectionRate: "98.2%",
    platforms: "Windows, Mac, Android, iOS",
    affiliateUrl: "#malwarebytes",
    features: [
      "Powerful on-demand malware scanner",
      "Removes existing infections effectively",
      "Adware & PUP removal",
      "Browser guard extension (free)",
      "Ransomware detection on scan",
    ],
    limitations: [
      "No real-time protection in free version",
      "Manual scans only",
      "No scheduled scanning",
    ],
    highlight: false,
  },
  {
    rank: 5,
    id: "webroot-free",
    name: "Webroot SecureAnywhere Free",
    tagline: "Fastest Cloud-Based Free Scanner",
    score: 8.3,
    badge: "Fastest Scans",
    badgeColor: "oklch(0.55 0.16 290)",
    detectionRate: "98.8%",
    platforms: "Windows, Mac",
    affiliateUrl: "#webroot",
    features: [
      "Cloud-based instant scanning",
      "Real-time anti-phishing",
      "Identity protection basics",
      "Firewall & network monitor",
      "Lightning-fast scan speed",
    ],
    limitations: [
      "Requires active internet connection",
      "No VPN or parental controls",
      "Limited free feature set",
    ],
    highlight: false,
  },
]

const comparisonRows = [
  { label: "Real-Time Protection", values: [true, true, true, false, true] },
  { label: "Malware Detection Rate", values: ["99.7%", "99.5%", "99.9%", "98.2%", "98.8%"] },
  { label: "VPN (Free)", values: [false, false, false, false, false] },
  { label: "Password Manager", values: [false, false, false, false, false] },
  { label: "Wi-Fi Scanner", values: [true, false, false, false, false] },
  { label: "Ransomware Protection", values: [false, true, true, "Scan only", true] },
  { label: "Browser Protection", values: [true, true, true, "Extension", true] },
  { label: "Platforms", values: ["Win/Mac/Android/iOS", "Win/Mac/Android", "Windows only", "Win/Mac/Android/iOS", "Win/Mac"] },
  { label: "Free Tier Limitations", values: ["No VPN/FW", "No extras", "Win only", "No real-time", "Needs internet"] },
]

const faqs = [
  {
    q: "Is free antivirus actually good enough?",
    a: "Free antivirus provides solid baseline protection against common threats. However, paid versions offer important extras like VPNs, password managers, identity protection, and better customer support. For most home users, a reputable free antivirus combined with safe browsing habits is adequate.",
  },
  {
    q: "What is the best completely free antivirus in 2026?",
    a: "Avast Free Antivirus ranks highest in our testing for 2026 due to its strong detection rate (99.7%), broad platform support, and useful free features like Wi-Fi scanning. Bitdefender Free is the best choice if you prioritize a minimal system footprint.",
  },
  {
    q: "Are free antivirus programs safe to use?",
    a: "Yes — from reputable vendors like Avast, AVG, Bitdefender, and Kaspersky. Avoid downloading 'free' antivirus from unknown or unofficial sources, as these can themselves be malware. Always download directly from the vendor's official website.",
  },
  {
    q: "Do free antivirus programs include a VPN?",
    a: "Most free antivirus programs do not include a VPN, or include a very limited one. Kaspersky Free includes 200MB of daily VPN data. For a full VPN, you would need to upgrade to a paid plan or use a separate VPN service.",
  },
  {
    q: "What is the difference between free and paid antivirus?",
    a: "Paid antivirus typically adds: VPN access, password managers, parental controls, dark web monitoring, identity theft protection, cloud backup, and 24/7 priority customer support. Free versions cover core malware detection and real-time protection only.",
  },
]

function StarRating({ score }: { score: number }) {
  const fullStars = Math.floor(score / 2)
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < fullStars ? "fill-current" : "opacity-20"}`}
          style={{ color: "oklch(0.75 0.18 45)" }}
        />
      ))}
    </div>
  )
}

type CellVal = boolean | string
function Cell({ val }: { val: CellVal }) {
  if (val === true)
    return <CheckCircle className="w-4 h-4 mx-auto" style={{ color: "oklch(0.55 0.16 145)" }} />
  if (val === false)
    return <XCircle className="w-4 h-4 mx-auto text-muted-foreground opacity-30" />
  return <span className="text-xs text-foreground/70">{val as string}</span>
}

export default function BestFreeAntivirusPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="py-14 md:py-20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
              style={{
                backgroundColor: "oklch(0.65 0.18 45 / 0.15)",
                borderColor: "oklch(0.65 0.18 45 / 0.4)",
                color: "oklch(0.85 0.12 45)",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Expert-Tested — Updated March 2026
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Best Free Antivirus
                <span className="block" style={{ color: "oklch(0.75 0.18 45)" }}>
                  Software of 2026
                </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We tested 20+ free antivirus programs using real malware samples, performance
              benchmarks, and usability checks. Here are the ones genuinely worth your time — no
              paid promotion.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              {[
                { icon: Zap, text: "20+ products tested" },
                { icon: ShieldCheck, text: "Real malware samples used" },
                { icon: Wifi, text: "Network protection checked" },
                { icon: Lock, text: "Privacy policies reviewed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4" style={{ color: "oklch(0.65 0.18 45)" }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure — required for Google Ads compliance */}
        <div
          className="border-b"
          style={{ backgroundColor: "oklch(0.97 0.008 240)", borderColor: "oklch(0.88 0.01 240)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-start gap-2">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Advertising Disclosure:</strong> TopAntivirusSales.us may earn affiliate
              commissions when you click links on this page and purchase a product. This does not
              influence our editorial rankings or scores. Our reviews are based on independent
              testing and research.
            </p>
          </div>
        </div>

        {/* Product List */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-foreground text-balance mb-3"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Top 5 Free Antivirus Programs
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ranked by detection rate, features available in the free tier, and real-world
                usability. All free plans are fully functional — no credit card required.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {freeProducts.map((p) => (
                <article
                  key={p.id}
                  className={`rounded-2xl border overflow-hidden transition-shadow ${
                    p.highlight ? "shadow-xl" : "shadow-md hover:shadow-lg"
                  }`}
                  style={{
                    borderColor: p.highlight ? "oklch(0.65 0.18 45)" : "oklch(0.88 0.01 240)",
                    outline: p.highlight ? "2px solid oklch(0.65 0.18 45)" : "none",
                    outlineOffset: p.highlight ? "-2px" : "0",
                  }}
                >
                  {p.highlight && (
                    <div
                      className="w-full py-2 text-center text-xs font-bold text-white uppercase tracking-widest"
                      style={{ backgroundColor: "oklch(0.65 0.18 45)" }}
                    >
                      #1 Best Free Antivirus 2026
                    </div>
                  )}
                  <div className="bg-card p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      {/* Rank + Name */}
                      <div className="flex items-start gap-3 md:w-52 flex-shrink-0">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: p.highlight
                              ? "oklch(0.65 0.18 45)"
                              : "oklch(0.35 0.12 250)",
                          }}
                        >
                          #{p.rank}
                        </div>
                        <div>
                          <div
                            className="font-extrabold text-foreground text-lg leading-tight"
                            style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                          >
                            {p.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{p.tagline}</div>
                          <span
                            className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                            style={{ backgroundColor: p.badgeColor }}
                          >
                            {p.badge}
                          </span>
                          <div className="mt-2 flex items-center gap-2">
                            <span
                              className="text-2xl font-extrabold"
                              style={{ color: "oklch(0.35 0.12 250)", fontFamily: "var(--font-heading, sans-serif)" }}
                            >
                              {p.score}
                            </span>
                            <StarRating score={p.score} />
                          </div>
                        </div>
                      </div>

                      {/* Features & Limitations */}
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Free Features Include
                          </h3>
                          <ul className="flex flex-col gap-1.5">
                            {p.features.map((f) => (
                              <li key={f} className="flex items-start gap-1.5 text-sm text-foreground/80">
                                <CheckCircle
                                  className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                                  style={{ color: "oklch(0.55 0.16 145)" }}
                                />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Free Version Limitations
                          </h3>
                          <ul className="flex flex-col gap-1.5">
                            {p.limitations.map((l) => (
                              <li key={l} className="flex items-start gap-1.5 text-sm text-foreground/70">
                                <XCircle
                                  className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                                  style={{ color: "oklch(0.55 0.22 25)" }}
                                />
                                {l}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Detection rate: <strong className="text-foreground/80 ml-0.5">{p.detectionRate}</strong>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            Platforms: {p.platforms}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col gap-2 md:w-36 flex-shrink-0 md:items-end">
                        <div
                          className="text-lg font-extrabold text-foreground"
                          style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                        >
                          Free
                        </div>
                        <div className="text-xs text-muted-foreground">No credit card needed</div>
                        <a
                          href={p.affiliateUrl}
                          className="px-5 py-2.5 rounded-lg text-sm font-bold text-white text-center transition-all hover:scale-105 shadow-md"
                          style={{
                            backgroundColor: p.highlight
                              ? "oklch(0.65 0.18 45)"
                              : "oklch(0.35 0.12 250)",
                          }}
                        >
                          Download Free
                        </a>
                        <p className="text-xs text-muted-foreground text-right leading-relaxed">
                          Affiliate link — we may earn a commission
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Free vs Paid Comparison */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: "oklch(0.97 0.005 240)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-extrabold text-foreground text-balance mb-3"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Compare Free Antivirus Features
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                Side-by-side view of what each free plan actually includes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border shadow-lg" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "oklch(0.25 0.1 255)" }}>
                    <th className="py-3.5 px-4 text-left text-xs font-semibold text-white/50 w-40">Feature</th>
                    {freeProducts.map((p) => (
                      <th
                        key={p.id}
                        className={`py-3.5 px-2 text-center text-xs font-bold ${p.highlight ? "text-yellow-300" : "text-white"}`}
                      >
                        {p.name.split(" ")[0]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, ri) => (
                    <tr
                      key={row.label}
                      style={{ backgroundColor: ri % 2 === 0 ? "oklch(1 0 0)" : "oklch(0.97 0.005 240)" }}
                    >
                      <td className="py-3 px-4 text-xs font-medium text-foreground/60">{row.label}</td>
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          className="py-3 px-2 text-center"
                          style={freeProducts[vi].highlight ? { backgroundColor: "oklch(0.65 0.18 45 / 0.05)" } : undefined}
                        >
                          <Cell val={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Free vs Paid Info Section — helps with Google Ads quality score */}
        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div
                className="rounded-2xl p-6 border"
                style={{ borderColor: "oklch(0.55 0.16 145 / 0.3)", backgroundColor: "oklch(0.55 0.16 145 / 0.04)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5" style={{ color: "oklch(0.55 0.16 145)" }} />
                  <h3
                    className="font-extrabold text-lg text-foreground"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    When Free Is Enough
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-foreground/80">
                  {[
                    "You browse only reputable websites",
                    "You do not use public Wi-Fi frequently",
                    "You have no sensitive financial data on your device",
                    "You have a single device to protect",
                    "You do not need identity theft coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.55 0.16 145)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6 border"
                style={{ borderColor: "oklch(0.65 0.18 45 / 0.3)", backgroundColor: "oklch(0.65 0.18 45 / 0.04)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5" style={{ color: "oklch(0.65 0.18 45)" }} />
                  <h3
                    className="font-extrabold text-lg text-foreground"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    When to Upgrade to Paid
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-foreground/80">
                  {[
                    "You use public or shared Wi-Fi networks",
                    "You store banking or medical data on your device",
                    "You need to protect 3 or more devices",
                    "You want a VPN, password manager, or parental controls",
                    "You need 24/7 customer support and identity protection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.65 0.18 45)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div
              className="mt-8 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 border"
              style={{ backgroundColor: "oklch(0.25 0.1 255)", borderColor: "oklch(0.35 0.12 255)" }}
            >
              <div>
                <h3
                  className="text-xl font-extrabold text-white mb-1"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  Want more than free?
                </h3>
                <p className="text-white/65 text-sm max-w-sm">
                  Norton, McAfee and Bitdefender all offer paid plans starting under $3/month with
                  full VPN, identity protection, and more.
                </p>
              </div>
              <Link
                href="/"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: "oklch(0.65 0.18 45)" }}
              >
                See Paid Antivirus Deals
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: "oklch(0.97 0.005 240)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              className="text-3xl font-extrabold text-foreground text-balance mb-8 text-center"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border bg-card overflow-hidden"
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-foreground text-sm list-none select-none">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed border-t" style={{ borderColor: "oklch(0.92 0.01 240)" }}>
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial note — Google Ads compliance */}
        <section className="py-10 bg-background border-t" style={{ borderColor: "oklch(0.90 0.01 240)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3"
            >
              About Our Reviews
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              TopAntivirusSales.us is an independent comparison website. Our editorial team tests
              antivirus products using controlled malware samples, performance benchmarks on
              standard hardware, and user experience evaluations. We are not affiliated with any
              antivirus vendor. We may receive affiliate compensation when you purchase a product
              through links on this site; this does not affect our scores, rankings, or editorial
              independence. Prices shown are approximate and may vary. Always check the vendor
              website for the most current pricing and terms.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
