import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { AlertTriangle, Clock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virus & Security News 2026 | TopAntivirusSales.us",
  description:
    "Latest cybersecurity news, virus alerts, data breach reports, and malware advisories — updated regularly by our security research team.",
}

const newsItems = [
  {
    id: 1,
    severity: "high",
    date: "March 1, 2026",
    title: "New Ransomware Strain 'LockBit 4.0' Targets Windows 11 Home Users",
    summary:
      "Security researchers have identified a new LockBit variant specifically engineered to bypass Windows 11 Defender. Users with third-party antivirus (Norton, Bitdefender) are protected; Windows-only users should update immediately.",
    tag: "Ransomware Alert",
  },
  {
    id: 2,
    severity: "medium",
    date: "February 25, 2026",
    title: "Chrome Zero-Day Exploited in Wild — Patch Available",
    summary:
      "Google issued an emergency patch for Chrome CVE-2026-1892. The vulnerability allows attackers to execute code via malicious web pages. Update Chrome to version 122.0.6261.112 immediately.",
    tag: "Browser Security",
  },
  {
    id: 3,
    severity: "high",
    date: "February 20, 2026",
    title: "250 Million Records Exposed in Healthcare Data Breach",
    summary:
      "A major US healthcare provider confirmed a breach exposing names, addresses, SSNs, and medical records. Affected customers should enroll in credit monitoring and run a dark web check via their antivirus.",
    tag: "Data Breach",
  },
  {
    id: 4,
    severity: "low",
    date: "February 15, 2026",
    title: "macOS Malware Detections Up 68% Year-Over-Year — Report",
    summary:
      "A new report by independent lab AV-TEST shows macOS malware samples increased 68% in 2025. Mac users relying solely on XProtect are advised to add a dedicated security layer.",
    tag: "Mac Security",
  },
  {
    id: 5,
    severity: "medium",
    date: "February 10, 2026",
    title: "Phishing Emails Impersonating Norton and McAfee Spike",
    summary:
      "A wave of convincing phishing emails claiming to be renewal notices from Norton and McAfee is circulating. The emails link to credential-harvesting pages. Verify all renewal emails by logging in directly at the vendor site.",
    tag: "Phishing Warning",
  },
  {
    id: 6,
    severity: "low",
    date: "February 5, 2026",
    title: "Android Banking Trojans Disguised as Popular Apps Hit 2M Devices",
    summary:
      "Two Android banking trojans disguised as photo editor apps on third-party stores infected an estimated 2 million devices globally. Only install apps from the official Google Play Store and keep antivirus active.",
    tag: "Mobile Malware",
  },
]

const severityConfig = {
  high: { label: "High Alert", bg: "oklch(0.55 0.22 25 / 0.12)", border: "oklch(0.55 0.22 25 / 0.4)", text: "oklch(0.50 0.22 25)", dot: "oklch(0.55 0.22 25)" },
  medium: { label: "Advisory", bg: "oklch(0.65 0.18 45 / 0.10)", border: "oklch(0.65 0.18 45 / 0.4)", text: "oklch(0.55 0.18 45)", dot: "oklch(0.65 0.18 45)" },
  low: { label: "Info", bg: "oklch(0.35 0.12 250 / 0.08)", border: "oklch(0.35 0.12 250 / 0.3)", text: "oklch(0.35 0.12 250)", dot: "oklch(0.45 0.12 250)" },
}

export default function VirusNewsPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="py-14 md:py-20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border"
              style={{ backgroundColor: "oklch(0.55 0.22 25 / 0.2)", borderColor: "oklch(0.55 0.22 25 / 0.5)", color: "oklch(0.85 0.10 30)" }}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Live Threat Intelligence — Updated March 2026
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Virus & Security News
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Real-time alerts on new malware threats, data breaches, zero-day exploits, and security advisories from our research team.
            </p>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-xl font-extrabold text-foreground"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Latest Alerts
              </h2>
              <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold" style={{ color: "oklch(0.35 0.12 250)" }}>
                All Articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              {newsItems.map((item) => {
                const s = severityConfig[item.severity as keyof typeof severityConfig]
                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border p-6 bg-card"
                    style={{ borderColor: s.border, backgroundColor: s.bg }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold"
                        style={{ backgroundColor: s.dot, color: "white" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                        {s.label}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                        style={{ color: s.text, borderColor: s.border }}
                      >
                        {item.tag}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                        <Clock className="w-3 h-3" /> {item.date}
                      </span>
                    </div>
                    <h3
                      className="font-extrabold text-foreground mb-2 text-balance"
                      style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                  </article>
                )
              })}
            </div>

            <div
              className="mt-12 p-6 rounded-2xl border text-center"
              style={{ borderColor: "oklch(0.62 0.19 44 / 0.4)", backgroundColor: "oklch(0.62 0.19 44 / 0.06)" }}
            >
              <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                Stay Protected in 2026
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A quality antivirus automatically defends against the latest threats listed above. See our expert rankings.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
                style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
              >
                View Top Antivirus Picks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
