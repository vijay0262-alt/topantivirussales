import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShieldCheck, Users, Award, FlaskConical, Eye, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — Independent Antivirus Experts Since 2015",
  description:
    "TopAntivirusSales.us is a team of independent cybersecurity researchers who have tested 50+ antivirus products since 2015. Learn our methodology, team, and editorial standards.",
  keywords: ["about topantivirussales", "antivirus review team", "independent antivirus testing", "cybersecurity experts", "antivirus editorial team"],
  alternates: { canonical: "https://topantivirussales.us/about" },
  openGraph: {
    title: "About Us — Independent Antivirus Experts | TopAntivirusSales.us",
    description: "Meet the team behind the most trusted antivirus comparison site. Independent testing since 2015.",
    url: "https://topantivirussales.us/about",
    type: "website",
  },
}

const values = [
  {
    icon: Eye,
    title: "Full Independence",
    description:
      "We are not owned by any antivirus vendor. Our rankings are based solely on test results, not on advertising revenue or sponsorship deals.",
  },
  {
    icon: FlaskConical,
    title: "Lab-Grade Testing",
    description:
      "Every product is run through thousands of live malware samples in an isolated environment, benchmarked for performance, and evaluated feature-by-feature.",
  },
  {
    icon: Heart,
    title: "Reader First",
    description:
      "Our goal is simple — help you find the best protection at the lowest price. We do the research so you don't have to spend hours comparing specs.",
  },
  {
    icon: Award,
    title: "Transparent Scores",
    description:
      "Every score is broken down into sub-categories: detection, performance, features, usability, and value. We show our work so you can trust our results.",
  },
]

const team = [
  {
    name: "Daniel Reeves",
    role: "Founder & Lead Security Analyst",
    bio: "Former corporate cybersecurity consultant with 14+ years in threat analysis. Has personally tested over 200 security products.",
  },
  {
    name: "Rachel Kim",
    role: "Senior Editor & Researcher",
    bio: "Holds a Master's in Information Security. Specialises in consumer-grade antivirus evaluation and privacy software.",
  },
  {
    name: "Marcus Chen",
    role: "Performance & Lab Tester",
    bio: "IT infrastructure expert who runs all benchmark and system-impact testing across Windows, Mac, and Android platforms.",
  },
]

const milestones = [
  { year: "2015", event: "TopAntivirusSales.us launched with reviews of 5 antivirus products." },
  { year: "2018", event: "Expanded to 25+ products and launched our live comparison table." },
  { year: "2020", event: "Reached 500,000 monthly readers; launched our dedicated testing lab." },
  { year: "2023", event: "Introduced real-time deal tracking and exclusive discount partnerships." },
  { year: "2026", event: "Now covering 50+ products with daily-updated scores and deals." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                backgroundColor: "oklch(0.65 0.18 45 / 0.15)",
                borderColor: "oklch(0.65 0.18 45 / 0.4)",
                color: "oklch(0.85 0.12 45)",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Independent Since 2015
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-5"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              About TopAntivirusSales
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We are an independent cybersecurity research and review publication dedicated to helping
              everyday people find trustworthy, affordable antivirus protection — without the marketing noise.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "oklch(0.62 0.19 44)" }}
                >
                  Our Mission
                </span>
                <h2
                  className="text-3xl font-extrabold text-foreground mt-2 mb-4 text-balance"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  Honest Reviews. Real Protection.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The antivirus market is cluttered with misleading ads, fake review sites, and
                  products that overpromise. We started TopAntivirusSales.us to cut through the noise
                  and give readers factual, lab-tested guidance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you use a link on our site to purchase a product, we may earn a small
                  affiliate commission — this is how we fund our research. Importantly, this never
                  influences our scores or rankings. We have declined paid placements that conflict
                  with our editorial standards.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, stat: "2M+", label: "Readers Helped" },
                  { icon: FlaskConical, stat: "50+", label: "Products Tested" },
                  { icon: Award, stat: "10 Yrs", label: "Expert Experience" },
                  { icon: ShieldCheck, stat: "Daily", label: "Deal Updates" },
                ].map(({ icon: Icon, stat, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-5 border text-center"
                    style={{ borderColor: "oklch(0.88 0.01 240)", backgroundColor: "oklch(0.97 0.005 240)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                      style={{ backgroundColor: "oklch(0.62 0.19 44 / 0.12)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "oklch(0.62 0.19 44)" }} />
                    </div>
                    <p
                      className="text-2xl font-extrabold text-foreground"
                      style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                    >
                      {stat}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-extrabold text-foreground text-balance"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    className="p-6 rounded-xl bg-card border"
                    style={{ borderColor: "oklch(0.88 0.01 240)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "oklch(0.35 0.12 250 / 0.1)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "oklch(0.35 0.12 250)" }} />
                    </div>
                    <h3
                      className="font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-extrabold text-foreground text-balance"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Meet Our Team
              </h2>
              <p className="text-muted-foreground mt-2">
                Security professionals with decades of combined real-world experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="p-6 rounded-xl border bg-card text-center"
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-extrabold text-xl"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.35 0.12 250), oklch(0.45 0.14 255))",
                      fontFamily: "var(--font-heading, sans-serif)",
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mt-0.5 mb-3" style={{ color: "oklch(0.62 0.19 44)" }}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16" style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-extrabold text-foreground text-balance"
                style={{ fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Our History
              </h2>
            </div>
            <ol className="relative border-l" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
              {milestones.map((m) => (
                <li key={m.year} className="mb-8 ml-6">
                  <span
                    className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
                  >
                    {m.year.slice(2)}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "oklch(0.62 0.19 44)" }}>
                    {m.year}
                  </p>
                  <p className="text-sm text-foreground/80">{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
