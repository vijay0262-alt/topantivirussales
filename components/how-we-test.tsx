import { FlaskConical, BarChart3, BadgeCheck, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: FlaskConical,
    step: "01",
    title: "Real-World Malware Testing",
    description:
      "We expose each antivirus to thousands of live malware samples including ransomware, trojans, spyware, and zero-day exploits in an isolated lab environment.",
    color: "oklch(0.55 0.22 30)",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Performance Benchmarking",
    description:
      "CPU and memory impact is measured during full scans, quick scans, and real-time monitoring — on both old and modern hardware.",
    color: "oklch(0.45 0.18 220)",
  },
  {
    icon: BadgeCheck,
    step: "03",
    title: "Feature Verification",
    description:
      "Each advertised feature — VPN, password manager, parental controls — is individually activated, tested, and evaluated for quality and usability.",
    color: "oklch(0.55 0.16 145)",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Support & Value Scoring",
    description:
      "We contact support teams, verify response times, test live chat, and evaluate whether the price justifies the overall protection and features.",
    color: "oklch(0.45 0.16 280)",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    quote:
      "Found the perfect antivirus for my 8 computers. Saved over $200 using the deal on this site!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "IT Professional",
    quote:
      "The comparison table is incredibly detailed. I use it to recommend software to all my clients.",
    rating: 5,
  },
  {
    name: "Linda K.",
    role: "Parent of 3",
    quote:
      "Finally understood the difference between Norton and McAfee. Went with McAfee for the family plan.",
    rating: 5,
  },
]

export default function HowWeTest() {
  return (
    <>
      {/* How We Test */}
      <section
        id="how-we-test"
        className="py-16 md:py-24"
        style={{ backgroundColor: "oklch(0.25 0.1 255)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.1)",
                color: "oklch(0.85 0.12 45)",
              }}
            >
              Our Methodology
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-balance"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              How We Test Antivirus Software
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Every score is earned — not sponsored. {"Here's"} exactly how we evaluate each product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.step}
                  className="relative p-6 rounded-xl border"
                  style={{
                    backgroundColor: "oklch(1 0 0 / 0.05)",
                    borderColor: "oklch(1 0 0 / 0.1)",
                  }}
                >
                  <div
                    className="absolute top-4 right-4 text-4xl font-extrabold opacity-10 text-white"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    {s.step}
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `color-mix(in oklch, ${s.color} 20%, transparent)` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3
                    className="font-bold text-white mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-extrabold text-foreground mb-2"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Trusted by Thousands of Readers
            </h2>
            <p className="text-muted-foreground">
              Real feedback from people who found the right antivirus here.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl border bg-card"
                style={{ borderColor: "oklch(0.88 0.01 240)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.65 0.18 45)" }}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                  {`"${t.quote}"`}
                </p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
