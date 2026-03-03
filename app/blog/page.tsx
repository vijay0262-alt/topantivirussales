import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersecurity Blog — Antivirus Tips, News & Guides 2026",
  description:
    "Expert cybersecurity articles, antivirus buying guides, virus news, and protection tips from the TopAntivirusSales.us team. Updated weekly in 2026.",
  keywords: ["cybersecurity blog", "antivirus news 2026", "computer security tips", "ransomware news", "virus protection guide", "antivirus buying guide"],
  alternates: { canonical: "https://topantivirussales.us/blog" },
  openGraph: {
    title: "Cybersecurity Blog — Tips, News & Guides 2026",
    description: "Expert-written cybersecurity guides and antivirus news. Stay ahead of threats in 2026.",
    url: "https://topantivirussales.us/blog",
    type: "website",
  },
}

const posts = [
  {
    slug: "best-antivirus-2026",
    category: "Reviews",
    title: "Best Antivirus Software of 2026: Our Top Picks Tested & Ranked",
    excerpt:
      "We put 12 leading antivirus suites through 4,000+ live malware samples to find the best protection you can buy in 2026. Norton leads — but the gaps are closer than ever.",
    date: "March 1, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "free-vs-paid-antivirus",
    category: "Guides",
    title: "Free vs Paid Antivirus: Is It Worth Upgrading in 2026?",
    excerpt:
      "Free antivirus has come a long way. But paid plans still offer critical extras. We break down exactly what you lose — and whether the upgrade price is justified.",
    date: "February 22, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "ransomware-protection-guide",
    category: "Guides",
    title: "How to Protect Yourself from Ransomware: A Complete 2026 Guide",
    excerpt:
      "Ransomware attacks hit record highs in 2025. This guide explains how ransomware works, which antivirus features actually stop it, and the backup strategy that can save you.",
    date: "February 15, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "antivirus-for-mac",
    category: "Guides",
    title: "Do Macs Need Antivirus in 2026? The Honest Answer",
    excerpt:
      "Apple's built-in security is solid, but Mac malware is surging. We explain the real risks and which antivirus solutions add genuine value without slowing your Mac down.",
    date: "February 8, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "vpn-antivirus-bundle",
    category: "Tips",
    title: "Antivirus + VPN Bundles: Which Packages Give You the Best Value?",
    excerpt:
      "Many antivirus suites now bundle a VPN. But are they any good? We compared 6 bundled VPNs against standalone options to see which offer genuine privacy.",
    date: "January 30, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "norton-vs-mcafee-2026",
    category: "Comparisons",
    title: "Norton 360 vs McAfee 2026: Head-to-Head Comparison",
    excerpt:
      "Norton or McAfee? Both are top-tier, but they excel in different areas. We compared detection rates, performance impact, features, and pricing so you don't have to.",
    date: "January 22, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "password-manager-importance",
    category: "Tips",
    title: "Why Your Antivirus's Built-In Password Manager Might Not Be Enough",
    excerpt:
      "Most premium antivirus suites include a password manager. We explain when it's sufficient and when you should pair it with a dedicated solution like Bitwarden.",
    date: "January 14, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "antivirus-android",
    category: "Guides",
    title: "Best Antivirus for Android 2026: Real Protection vs Marketing Hype",
    excerpt:
      "Android malware is real — but so is the hype. We separate genuine protection from bloatware and name the mobile security apps worth installing on your phone.",
    date: "January 6, 2026",
    readTime: "6 min read",
    featured: false,
  },
]

const categories = ["All", "Reviews", "Guides", "Tips", "Comparisons", "News"]

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!
  const rest = posts.filter((p) => !p.featured)

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
              Security Blog
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Expert guides, product comparisons, and cybersecurity news from our independent research team. Updated weekly.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <div className="border-b bg-card" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors flex-shrink-0"
                  style={
                    i === 0
                      ? { backgroundColor: "oklch(0.35 0.12 250)", color: "white" }
                      : { color: "oklch(0.5 0.04 240)" }
                  }
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured post */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "oklch(0.62 0.19 44)" }}>
                Featured Article
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden border bg-card hover:shadow-xl transition-shadow"
                style={{ borderColor: "oklch(0.62 0.19 44 / 0.4)" }}
              >
                <div className="grid md:grid-cols-5">
                  <div
                    className="md:col-span-2 h-48 md:h-auto flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255), oklch(0.35 0.14 250))" }}
                  >
                    <img
                      src="https://placehold.co/600x400?text=Best+Antivirus+Software+2026+Expert+Lab+Testing+Shield+Graphic+Blue+Background"
                      alt="Best antivirus software 2026 expert lab testing shield graphic on blue background"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
                      >
                        {featured.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featured.readTime}
                      </span>
                    </div>
                    <h2
                      className="text-2xl font-extrabold text-foreground mb-3 group-hover:underline text-balance"
                      style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{featured.date}</span>
                      <span
                        className="flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "oklch(0.35 0.12 250)" }}
                      >
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Post grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                  style={{ borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <div
                    className="h-40 w-full flex items-center justify-center relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, oklch(0.25 0.08 255), oklch(0.38 0.12 250))" }}
                  >
                    <img
                      src="https://placehold.co/400x200?text=Cybersecurity+Article+Dark+Blue+Technology+Abstract+Background"
                      alt="Cybersecurity article dark blue technology abstract background"
                      className="w-full h-full object-cover opacity-40"
                    />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white flex items-center gap-1"
                      style={{ backgroundColor: "oklch(0.35 0.12 250 / 0.85)" }}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-extrabold text-foreground mb-2 text-balance leading-snug group-hover:underline"
                      style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
