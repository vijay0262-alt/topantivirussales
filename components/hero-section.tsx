import { Shield, CheckCircle, Star, Lock, Zap, Users } from "lucide-react"
import Link from "next/link"

const trustStats = [
  { icon: Users, value: "2M+", label: "Users Protected" },
  { icon: Shield, value: "50+", label: "Products Tested" },
  { icon: Star, value: "10 Yrs", label: "Expert Experience" },
  { icon: Zap, value: "Daily", label: "Deal Updates" },
]

const quickFeatures = [
  "Real-world malware testing",
  "Price & value comparison",
  "Unbiased expert scores",
  "Exclusive discount codes",
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)",
      }}
    >
      {/* Background shield watermark */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
        <Shield
          className="w-[500px] h-[500px] opacity-[0.04] -mr-24 text-white"
          strokeWidth={0.5}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                backgroundColor: "oklch(0.65 0.18 45 / 0.15)",
                borderColor: "oklch(0.65 0.18 45 / 0.4)",
                color: "oklch(0.85 0.12 45)",
              }}
            >
              <Lock className="w-3.5 h-3.5" />
              Updated March 2026 — Expert-Verified Reviews
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-5 text-balance"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              The Best
              <span className="block" style={{ color: "oklch(0.75 0.18 45)" }}>
                Antivirus Deals
              </span>
              of 2026
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              We independently test and compare the top antivirus software so you get the best
              protection at the lowest price. No fluff — just honest scores and exclusive savings.
            </p>

            {/* Quick features */}
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {quickFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.16 145)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#top-picks"
                className="px-6 py-3 rounded-lg text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: "oklch(0.65 0.18 45)" }}
              >
                See Top Picks
              </Link>
              <Link
                href="#comparison"
                className="px-6 py-3 rounded-lg text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-colors"
              >
                Compare All Antivirus
              </Link>
            </div>
          </div>

          {/* Right: trust stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl p-6 flex flex-col items-center text-center border"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.06)",
                  borderColor: "oklch(1 0 0 / 0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "oklch(0.65 0.18 45 / 0.2)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "oklch(0.75 0.18 45)" }} />
                </div>
                <span
                  className="text-3xl font-extrabold text-white mb-1"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  {value}
                </span>
                <span className="text-sm text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom brand logos row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white/40 text-center mb-5">
            Products We Review &amp; Compare
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {["Norton", "McAfee", "Guardio", "Bitdefender", "AVG", "ESET", "Webroot", "Avast", "Malwarebytes", "Trend Micro", "TotalAV", "Sophos", "Iolo", "Watchdog"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-sm font-semibold text-white/50 hover:text-white/80 transition-colors cursor-default tracking-wide"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
