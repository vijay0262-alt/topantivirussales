import Header from "@/components/header"
import Footer from "@/components/footer"
import HowWeTest from "@/components/how-we-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How We Test Antivirus Software — Our Independent Methodology",
  description:
    "Discover how TopAntivirusSales.us independently tests antivirus software. We use 10,000+ malware samples, real-world phishing tests, and performance benchmarks to score every product.",
  keywords: ["antivirus testing methodology", "how antivirus is reviewed", "independent antivirus testing", "malware detection testing", "antivirus benchmarks"],
  alternates: { canonical: "https://topantivirussales.us/how-we-test" },
  openGraph: {
    title: "How We Test Antivirus Software — Our Independent Methodology",
    description: "10,000+ malware samples, real-world phishing tests, and performance benchmarks. See exactly how we score every antivirus product.",
    url: "https://topantivirussales.us/how-we-test",
    type: "article",
  },
}

export default function HowWeTestPage() {
  return (
    <>
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
              How We Test Antivirus Software
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Every score on TopAntivirusSales.us is earned through a rigorous, multi-stage testing process — not paid placements.
            </p>
          </div>
        </section>
        <HowWeTest />
      </main>
      <Footer />
    </>
  )
}
