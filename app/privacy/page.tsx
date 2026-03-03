import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description: "Read the TopAntivirusSales.us Privacy Policy. We explain what data we collect, how we use affiliate tracking, your rights under GDPR/CCPA, and how to opt out.",
  alternates: { canonical: "https://topantivirussales.us/privacy" },
  robots: { index: true, follow: false },
}

const sections = [
  {
    title: "Information We Collect",
    body: `We collect information you voluntarily provide (such as your name and email address when you contact us), as well as information automatically collected when you visit our site — including IP address, browser type, pages visited, and time spent on pages. We use cookies and similar tracking technologies to improve your experience.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use collected information to respond to inquiries, improve our content and user experience, send optional newsletters (with your consent), and analyse site performance. We do not sell or rent your personal data to third parties.`,
  },
  {
    title: "Affiliate Links & Third-Party Services",
    body: `Our site contains affiliate links to antivirus vendors. When you click these links and make a purchase, we may receive a commission at no extra cost to you. Third-party sites have their own privacy policies, which we encourage you to review. We use Google Analytics for aggregate traffic analysis.`,
  },
  {
    title: "Cookies",
    body: `We use essential cookies to operate the site and optional analytics cookies to understand how visitors use our content. You may disable cookies in your browser settings; some site features may not function correctly without them. See our Cookie Policy for full details.`,
  },
  {
    title: "Data Retention",
    body: `We retain contact form submissions for up to 12 months to follow up on inquiries. Analytics data is retained in accordance with Google Analytics defaults (26 months). You may request deletion of your personal data at any time by contacting us.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws, including the right to access, correct, or delete your personal data. To exercise these rights, contact us at info@topantivirussales.us.`,
  },
  {
    title: "Contact",
    body: `For privacy-related questions or requests, email us at info@topantivirussales.us. We aim to respond within 5 business days.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="py-12 md:py-16"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}>
              Privacy Policy
            </h1>
            <p className="text-white/60 text-sm">Last updated: March 2026</p>
          </div>
        </section>
        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed">
              TopAntivirusSales.us (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy.
              This policy explains what data we collect, how we use it, and your rights regarding it.
            </p>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
                  {s.title}
                </h2>
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
