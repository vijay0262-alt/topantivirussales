import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"

const posts: Record<string, {
  category: string; title: string; excerpt: string; date: string; readTime: string; body: string
}> = {
  "best-antivirus-2026": {
    category: "Reviews", title: "Best Antivirus Software of 2026: Our Top Picks Tested & Ranked",
    excerpt: "We put 12 leading antivirus suites through 4,000+ live malware samples to find the best protection you can buy in 2026.",
    date: "March 1, 2026", readTime: "8 min read",
    body: `Finding the right antivirus can feel overwhelming with dozens of products competing for your attention. In this guide, our independent lab has tested 12 of the most popular antivirus suites using a rigorous methodology including real malware samples, performance benchmarks, and usability scoring.\n\nNorton 360 Deluxe remains our top pick for 2026. Its 99.9% detection rate, unlimited VPN, and comprehensive extras at a competitive price make it the most well-rounded suite available. McAfee Total Protection is a close second for households with many devices.\n\nFor budget buyers, AVG Internet Security and Webroot SecureAnywhere offer solid protection under $25/year. Power users should consider ESET NOD32 for its low system footprint and advanced threat detection capabilities.\n\nOur recommendation: If you only want one product, choose Norton 360 Deluxe. If you are protecting a family on a budget, McAfee Total Protection's unlimited device coverage is unbeatable value.`,
  },
  "free-vs-paid-antivirus": {
    category: "Guides", title: "Free vs Paid Antivirus: Is It Worth Upgrading in 2026?",
    excerpt: "Free antivirus has come a long way. But paid plans still offer critical extras.",
    date: "February 22, 2026", readTime: "6 min read",
    body: `Free antivirus programs from reputable vendors like Avast, AVG, and Bitdefender offer solid core protection — typically achieving detection rates above 99% in independent lab tests. For users who practice safe browsing and keep their operating system updated, a free antivirus may genuinely be sufficient.\n\nHowever, paid plans add features that meaningfully change your security posture. A VPN protects your connection on public Wi-Fi. A password manager reduces credential exposure. Dark web monitoring alerts you to data breaches before criminals can exploit them. Parental controls protect children from inappropriate content and online predators.\n\nOur verdict: If you do any online banking, shopping, or store sensitive files on your devices, a paid antivirus is worth the investment — especially at current sale prices under $30/year. If you are a technically capable user with minimal risk exposure, a reputable free antivirus is a reasonable choice.`,
  },
  "ransomware-protection-guide": {
    category: "Guides", title: "How to Protect Yourself from Ransomware: A Complete 2026 Guide",
    excerpt: "Ransomware attacks hit record highs in 2025. This guide explains how it works and how to stop it.",
    date: "February 15, 2026", readTime: "10 min read",
    body: `Ransomware is a type of malware that encrypts your files and demands payment — typically in cryptocurrency — for the decryption key. Attacks surged 78% in 2025, affecting individuals, businesses, and healthcare providers alike.\n\nThe most effective protection combines three layers: a quality antivirus with dedicated ransomware shields (Norton, Bitdefender, and Malwarebytes all perform well here), a disciplined backup strategy using the 3-2-1 rule (3 copies, 2 different media, 1 offsite), and basic security hygiene such as keeping software updated and being cautious with email attachments.\n\nNever pay the ransom. Payment does not guarantee recovery, funds criminal enterprises, and marks you as a payer — making you a target for repeat attacks.\n\nFor most home users, enabling the ransomware protection feature in your antivirus suite, combined with regular cloud backups, provides adequate protection against the vast majority of ransomware variants.`,
  },
}

const allSlugs = [
  "best-antivirus-2026", "free-vs-paid-antivirus", "ransomware-protection-guide",
  "antivirus-for-mac", "vpn-antivirus-bundle", "norton-vs-mcafee-2026",
  "password-manager-importance", "antivirus-android",
]

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: "Article Not Found | TopAntivirusSales.us" }
  return {
    title: `${post.title} | TopAntivirusSales.us`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  return (
    <>
      <Header />
      <main>
        <section
          className="py-14 md:py-18"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            {post && (
              <>
                <span
                  className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white mb-4"
                  style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
                >
                  {post.category}
                </span>
                <h1
                  className="text-3xl md:text-4xl font-extrabold text-white text-balance mb-4"
                  style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
                >
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                </div>
              </>
            )}
            {!post && (
              <h1 className="text-3xl font-extrabold text-white">Article Not Found</h1>
            )}
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {post ? (
              <>
                <div
                  className="p-4 rounded-xl border text-xs leading-relaxed mb-8"
                  style={{ borderColor: "oklch(0.35 0.12 250 / 0.3)", backgroundColor: "oklch(0.35 0.12 250 / 0.05)", color: "oklch(0.45 0.04 250)" }}
                >
                  <strong className="block mb-1 text-foreground">Affiliate Disclosure</strong>
                  This article may contain affiliate links. If you purchase via our links we may earn a small commission at no extra cost to you. Our editorial opinions are independent.
                </div>
                <article className="prose prose-sm max-w-none">
                  {post.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-base">{para}</p>
                  ))}
                </article>
                <div
                  className="mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  style={{ borderColor: "oklch(0.62 0.19 44 / 0.4)", backgroundColor: "oklch(0.62 0.19 44 / 0.06)" }}
                >
                  <ShieldCheck className="w-8 h-8 flex-shrink-0" style={{ color: "oklch(0.62 0.19 44)" }} />
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-sm" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                      Ready to get protected?
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Compare the top antivirus picks for 2026 — expert-ranked with exclusive discounts.
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="px-5 py-2.5 rounded-lg text-sm font-bold text-white flex-shrink-0 transition-all hover:brightness-110 shadow-md"
                    style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
                  >
                    See Top Picks
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground mb-4">This article is coming soon or does not exist.</p>
                <Link href="/blog" className="text-primary font-semibold underline">Back to Blog</Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
