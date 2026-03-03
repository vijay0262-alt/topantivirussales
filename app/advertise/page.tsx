import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Users, BarChart2, Globe, ShieldCheck, Mail, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advertise With Us | TopAntivirusSales.us",
  description:
    "Reach millions of antivirus buyers with targeted advertising and partnership opportunities on TopAntivirusSales.us.",
}

const stats = [
  { icon: Users, stat: "2M+", label: "Monthly Readers" },
  { icon: Globe, stat: "Top 3", label: "Antivirus Review Site" },
  { icon: BarChart2, stat: "85%", label: "Purchase Intent Traffic" },
  { icon: ShieldCheck, stat: "10 Yrs", label: "Industry Authority" },
]

const opportunities = [
  {
    title: "Affiliate Partnership",
    description:
      "Join our affiliate program and get your product featured in our rankings, comparison tables, and best-pick roundups. Compensation is performance-based — you pay only for verified conversions.",
    cta: "Apply for Affiliate Program",
  },
  {
    title: "Sponsored Content",
    description:
      "Commission an in-depth, clearly labelled sponsored review or guide from our editorial team. All sponsored content is disclosed in line with FTC and Google Ads guidelines.",
    cta: "Enquire About Sponsored Content",
  },
  {
    title: "Display Advertising",
    description:
      "Premium display ad placements across our high-intent pages — home page, review pages, and comparison tables. CPM and direct booking available.",
    cta: "Request Media Kit",
  },
  {
    title: "Email Newsletter",
    description:
      "Reach our opted-in subscriber list of 80,000+ security-conscious consumers with a dedicated email send or sponsored newsletter mention.",
    cta: "Newsletter Partnership",
  },
]

export default function AdvertisePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="py-14 md:py-20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Advertise With Us
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Partner with the most trusted independent antivirus review platform. Reach millions of high-intent buyers who are actively researching their next security purchase.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-b" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, stat, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "oklch(0.62 0.19 44 / 0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "oklch(0.62 0.19 44)" }} />
                  </div>
                  <p
                    className="text-3xl font-extrabold text-foreground"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    {stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(0.62 0.19 44)" }}>
                  Our Audience
                </span>
                <h2
                  className="text-3xl font-extrabold text-foreground mt-2 mb-4 text-balance"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  High-Intent Buyers, Not Just Browsers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our readers are actively comparing antivirus products and ready to purchase. Over 85% of our traffic arrives through purchase-intent search queries like &ldquo;best antivirus 2026&rdquo; and &ldquo;Norton vs McAfee.&rdquo;
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Demographics skew toward adults 25–54, primarily in the US, UK, Canada, and Australia — the highest-value markets for security software.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "85%+ purchase-intent search traffic",
                  "Average session duration: 4.5 minutes",
                  "Primary markets: US, UK, CA, AU",
                  "80,000+ opted-in email subscribers",
                  "Top 3 ranking for 200+ antivirus keywords",
                  "FTC-compliant editorial standards",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.16 145)" }} />
                    <span className="text-sm text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-extrabold text-foreground text-balance"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Partnership Opportunities
              </h2>
              <p className="text-muted-foreground mt-2">Multiple ways to reach our audience.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {opportunities.map((opp) => (
                <div
                  key={opp.title}
                  className="p-6 rounded-2xl border bg-card flex flex-col gap-3"
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <h3
                    className="font-extrabold text-foreground"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    {opp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{opp.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "oklch(0.35 0.12 250)" }}
                  >
                    {opp.cta} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: "oklch(0.62 0.19 44)" }} />
            <h2
              className="text-2xl font-extrabold text-foreground mb-3"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Ready to Partner?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Email our partnerships team for a media kit, rate card, or to discuss a custom arrangement. We respond within one business day.
            </p>
            <a
              href="mailto:partners@topantivirussales.us"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
              style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
            >
              <Mail className="w-4 h-4" />
              partners@topantivirussales.us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
