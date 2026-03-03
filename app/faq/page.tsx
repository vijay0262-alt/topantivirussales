import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FaqClient from "@/components/faq-client"

export const metadata: Metadata = {
  title: "Antivirus FAQ — 13 Most Asked Questions Answered for 2026",
  description:
    "Get answers to the most common antivirus questions: which is best in 2026, how much it costs, whether free AV is enough, and how our reviews are scored.",
  keywords: [
    "antivirus faq", "antivirus questions answered", "best antivirus questions",
    "do I need antivirus 2026", "antivirus cost 2026", "free antivirus good enough",
    "antivirus slow computer", "how antivirus works",
  ],
  alternates: { canonical: "https://topantivirussales.us/faq" },
  openGraph: {
    title: "Antivirus FAQ — 13 Most Asked Questions Answered",
    description: "Everything you need to know before choosing antivirus software in 2026. Honest, expert answers.",
    url: "https://topantivirussales.us/faq",
    type: "article",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best antivirus software in 2026?", acceptedAnswer: { "@type": "Answer", text: "Norton 360 Deluxe is the best all-around antivirus in 2026 with a 99.9% detection rate, unlimited VPN, dark web monitoring, and 50GB cloud backup at $29.99/year for 5 devices." } },
    { "@type": "Question", name: "How much does a good antivirus cost?", acceptedAnswer: { "@type": "Answer", text: "Good antivirus costs $17–$50/year at promotional prices. Norton 360 starts at $29.99/yr, McAfee at $39.99/yr, and Webroot at $17.99/yr." } },
    { "@type": "Question", name: "Do I really need antivirus software?", acceptedAnswer: { "@type": "Answer", text: "Yes. Windows Defender lags behind third-party solutions in detection rates. A quality antivirus adds VPN, phishing filters, ransomware rollback, and dark web monitoring." } },
    { "@type": "Question", name: "Is free antivirus good enough?", acceptedAnswer: { "@type": "Answer", text: "Free antivirus from Avast, AVG or Bitdefender provides baseline protection but lacks VPNs, identity monitoring, and ransomware protection found in paid plans." } },
    { "@type": "Question", name: "Will antivirus slow down my computer?", acceptedAnswer: { "@type": "Answer", text: "Modern antivirus has minimal impact on current hardware. Bitdefender and ESET score lowest for system impact. Cloud-based Webroot is lightest for older PCs." } },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <section
          className="py-14 md:py-20"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Antivirus FAQ
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Expert answers to the most common antivirus questions — from buying advice to how our independent reviews work.
            </p>
          </div>
        </section>
        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FaqClient />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
