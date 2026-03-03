import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShieldCheck, CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

const picks: Record<string, {
  title: string; description: string; intro: string;
  products: { name: string; score: number; reason: string; href: string; price: string; badge?: string }[]
}> = {
  families: {
    title: "Best Antivirus for Families 2026",
    description: "Protect every device in your home — parental controls, identity monitoring, and multi-device coverage.",
    intro: "Choosing the right antivirus for a family is about more than just malware detection. You need parental controls, coverage for every device your kids and partner use, and ideally some identity monitoring to protect against data breaches. We tested every major family-oriented antivirus suite in 2026 to find the products that deliver genuine value for households.",
    products: [
      { name: "McAfee Total Protection", score: 9.4, reason: "Unlimited devices, identity theft protection, and comprehensive parental controls make McAfee the clear family choice. One subscription covers every phone, laptop, and tablet in your home.", href: "/reviews/mcafee", price: "From $39.99/yr", badge: "Best for Families" },
      { name: "Norton 360 Deluxe", score: 9.8, reason: "VPN, dark web monitoring, 50GB cloud backup, and parental controls across 5 devices. Norton's family dashboard gives parents visibility into all protected devices.", href: "/reviews/norton", price: "From $29.99/yr" },
      { name: "Bitdefender Total Security", score: 9.3, reason: "Webcam protection, parental controls, and anti-tracker across 5 devices. Bitdefender's Parental Advisor tracks location and filters content by age.", href: "/reviews/bitdefender", price: "From $34.99/yr" },
    ],
  },
  pc: {
    title: "Best Antivirus for Windows PC 2026",
    description: "Top-rated antivirus for Windows 10 and Windows 11 — fastest scans, lowest system impact.",
    intro: "Windows PCs remain the most targeted platform for malware, ransomware, and phishing attacks. In 2026, Windows 11 users benefit from Microsoft Defender built-in, but third-party antivirus still outperforms it significantly in independent lab tests. Here are the products our team recommends for Windows users in 2026.",
    products: [
      { name: "Norton 360 Deluxe", score: 9.8, reason: "Consistently earns the highest Windows detection rates in AV-Test and AV-Comparatives evaluations. The integrated firewall and VPN add layers that Microsoft Defender cannot match.", href: "/reviews/norton", price: "From $29.99/yr", badge: "Best for Windows" },
      { name: "Bitdefender Total Security", score: 9.3, reason: "Perfect detection scores on Windows with the lowest performance overhead of any product we tested. Ideal for gaming PCs and older hardware.", href: "/reviews/bitdefender", price: "From $34.99/yr" },
      { name: "ESET NOD32", score: 8.9, reason: "UEFI-level scanning detects threats in firmware before Windows even loads. The exploit blocker is uniquely effective against zero-day attacks on Windows systems.", href: "/reviews/eset", price: "From $29.99/yr" },
    ],
  },
  mac: {
    title: "Best Antivirus for Mac 2026",
    description: "Mac-specific malware is rising fast. These products offer the best macOS protection in 2026.",
    intro: "The myth that Macs do not get viruses is dangerously outdated. In 2026, Mac-targeting adware, ransomware, and spyware are at an all-time high. Apple's built-in XProtect and Gatekeeper are a good start, but independent lab tests consistently show that third-party antivirus catches significantly more macOS threats. These are our top picks for Mac users.",
    products: [
      { name: "Norton 360 Deluxe", score: 9.8, reason: "Full Mac feature parity with the Windows version — VPN, identity monitoring, and real-time scanning all work seamlessly on macOS. Best overall for Mac users.", href: "/reviews/norton", price: "From $29.99/yr", badge: "Best for Mac" },
      { name: "Bitdefender Total Security", score: 9.3, reason: "Near-zero Mac performance impact. Bitdefender's Mac version includes the same real-time protection and anti-tracker as Windows, with full Apple Silicon support.", href: "/reviews/bitdefender", price: "From $34.99/yr" },
      { name: "AVG Internet Security", score: 8.8, reason: "Great Mac malware coverage at a budget-friendly price. The web shield blocks malicious Safari and Chrome pages in real time.", href: "/reviews/avg", price: "From $24.99/yr" },
    ],
  },
  android: {
    title: "Best Antivirus for Android 2026",
    description: "Protect your smartphone and tablet from malware, phishing, and privacy threats.",
    intro: "Android is the world's most targeted mobile platform, with millions of malicious apps distributed through third-party stores and even occasionally through the Google Play Store. A good Android antivirus does more than scan for malware — it includes Wi-Fi security checks, anti-phishing, and app permission monitoring. Here are our top picks for 2026.",
    products: [
      { name: "McAfee Total Protection", score: 9.4, reason: "Comprehensive Android app with Wi-Fi security scanner, app lock, and identity monitoring. The mobile interface is clean and easy to use on any screen size.", href: "/reviews/mcafee", price: "From $39.99/yr", badge: "Best for Android" },
      { name: "Norton 360 Deluxe", score: 9.8, reason: "Real-time mobile malware protection plus a full VPN on Android. The App Advisor scans Google Play apps before you install them.", href: "/reviews/norton", price: "From $29.99/yr" },
      { name: "Webroot SecureAnywhere", score: 8.6, reason: "Extremely lightweight Android agent — scans run in the background without draining your battery. Best choice for older Android devices.", href: "/reviews/webroot", price: "From $17.99/yr" },
    ],
  },
  budget: {
    title: "Best Budget Antivirus 2026",
    description: "Solid protection without overspending — all of these options cost under $40 per year.",
    intro: "You do not need to spend a lot of money to get excellent antivirus protection in 2026. The products below offer impressive detection rates, minimal system impact, and good feature sets at prices that beat the mainstream competition. Whether you are protecting one device or an entire household, there is a budget option here for you.",
    products: [
      { name: "Webroot SecureAnywhere", score: 8.6, reason: "At $17.99/year, Webroot is the most affordable paid antivirus we recommend. Cloud-based scanning means blazing speed without sacrificing protection quality.", href: "/reviews/webroot", price: "From $17.99/yr", badge: "Best Budget" },
      { name: "AVG Internet Security", score: 8.8, reason: "Ten devices for under $25/year is extraordinary value. AVG's ransomware shield and behavior monitoring deliver premium-tier protection at a budget price.", href: "/reviews/avg", price: "From $24.99/yr" },
      { name: "ESET NOD32", score: 8.9, reason: "Expert-level protection at an accessible price. ESET's minimal system footprint and advanced detection features are hard to beat in this price range.", href: "/reviews/eset", price: "From $29.99/yr" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(picks).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = picks[slug]
  if (!p) return { title: "Not Found | TopAntivirusSales.us" }
  const url = `https://topantivirussales.us/best-picks/${slug}`
  return {
    title: `${p.title} — Expert-Tested & Ranked`,
    description: `${p.description} Expert-tested rankings with real scores, feature breakdowns, and exclusive discounts for 2026.`,
    keywords: [p.title.toLowerCase(), `best antivirus ${slug} 2026`, "antivirus comparison", "top antivirus picks", "expert antivirus ranking"],
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, type: "article" },
  }
}

export default async function BestPicksPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = picks[slug]

  if (!p) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-24">
          <h1 className="text-3xl font-extrabold text-foreground">Page Not Found</h1>
          <Link href="/" className="text-primary underline">Back to Home</Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <section className="py-14 md:py-20" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "oklch(0.80 0.12 45)" }}>Expert Picks — March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-4" style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>
              {p.title}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">{p.description}</p>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">{p.intro}</p>
            <div className="flex flex-col gap-6">
              {p.products.map((prod, i) => (
                <div key={prod.name} className="flex items-start gap-5 p-6 rounded-2xl border bg-card" style={{ borderColor: i === 0 ? "oklch(0.62 0.19 44)" : "oklch(0.88 0.01 240)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0" style={{ backgroundColor: i === 0 ? "oklch(0.62 0.19 44)" : "oklch(0.35 0.12 250)" }}>
                    #{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h2 className="font-extrabold text-foreground text-lg" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                          {prod.name}
                          {prod.badge && (
                            <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full text-white align-middle" style={{ backgroundColor: "oklch(0.62 0.19 44)" }}>{prod.badge}</span>
                          )}
                        </h2>
                        <p className="text-sm text-muted-foreground">{prod.price}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className={`w-4 h-4 ${si < Math.floor(prod.score / 2) ? "fill-current" : "opacity-30"}`} style={{ color: "oklch(0.65 0.18 45)" }} />
                        ))}
                        <span className="ml-1 text-sm font-bold text-foreground">{prod.score}/10</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 mb-3 leading-relaxed flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.16 145)" }} />
                      {prod.reason}
                    </p>
                    <Link href={prod.href} className="inline-flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: "oklch(0.35 0.12 250)" }}>
                      Read full review <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-xl border text-xs leading-relaxed" style={{ borderColor: "oklch(0.35 0.12 250 / 0.3)", backgroundColor: "oklch(0.35 0.12 250 / 0.05)", color: "oklch(0.45 0.04 250)" }}>
              <strong className="block mb-1 text-foreground">Affiliate Disclosure</strong>
              This page may contain affiliate links. We earn a small commission if you purchase via our links at no extra cost to you. Our recommendations are editorially independent and based on real testing.
            </div>

            <div className="mt-8 text-center">
              <Link href="/#comparison" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white shadow-md transition-all hover:brightness-110" style={{ backgroundColor: "oklch(0.35 0.12 250)" }}>
                Compare All Antivirus <ShieldCheck className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
