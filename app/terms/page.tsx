import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use — TopAntivirusSales.us",
  description: "Terms of Use for TopAntivirusSales.us. Read our rules on content use, affiliate disclosures, disclaimers, and liability limitations.",
  alternates: { canonical: "https://topantivirussales.us/terms" },
  robots: { index: true, follow: false },
}

const sections = [
  { title: "Acceptance of Terms", body: "By accessing or using TopAntivirusSales.us you agree to be bound by these Terms of Use. If you do not agree, please do not use this site." },
  { title: "Intellectual Property", body: "All content on this site — including text, rankings, methodology, graphics, and code — is owned by TopAntivirusSales.us or its licensors and is protected by copyright law. You may not reproduce, distribute, or create derivative works without our written permission." },
  { title: "Affiliate Disclosure", body: "This site participates in affiliate marketing programs. We earn commissions when you purchase products through our links. This does not increase the price you pay and does not influence our editorial rankings or scores, which are based solely on independent testing." },
  { title: "Accuracy of Information", body: "We strive to keep all product information, pricing, and scores accurate and up to date. However, antivirus pricing and features change frequently. We recommend verifying current pricing directly with the vendor before purchase. We are not liable for discrepancies." },
  { title: "Third-Party Links", body: "Our site contains links to third-party websites including antivirus vendor sites. We are not responsible for the content, privacy practices, or terms of those sites." },
  { title: "Limitation of Liability", body: "TopAntivirusSales.us provides information on an 'as is' basis. We are not liable for any damages arising from your use of this site, your reliance on our reviews, or products purchased through our affiliate links." },
  { title: "Changes to Terms", body: "We reserve the right to update these Terms at any time. Continued use of the site after changes constitutes acceptance of the updated Terms." },
  { title: "Contact", body: "Questions about these Terms? Email us at info@topantivirussales.us." },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>Terms of Use</h1>
            <p className="text-white/60 text-sm">Last updated: March 2026</p>
          </div>
        </section>
        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
