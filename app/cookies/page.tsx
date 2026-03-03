import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | TopAntivirusSales.us",
  description: "How TopAntivirusSales.us uses cookies and similar tracking technologies.",
}

const sections = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the site owner about how the site is being used.",
  },
  {
    title: "How We Use Cookies",
    body: "We use cookies and similar technologies (such as pixels and local storage) for the following purposes: to operate the site correctly (essential cookies), to analyse site traffic and usage patterns (analytics cookies via Google Analytics), and to track affiliate referrals when you click through to antivirus vendors (affiliate tracking cookies).",
  },
  {
    title: "Types of Cookies We Use",
    body: "Essential cookies: Required for core functionality such as page navigation and security. These cannot be disabled. Analytics cookies: Google Analytics 4 cookies (_ga, _ga_*, _gid) that collect anonymised data about how visitors use our site — pages visited, time on site, and traffic sources. We use this data solely to improve our content. Affiliate tracking cookies: When you click an affiliate link on our site, a cookie may be set by the vendor to track the referral. This is how we earn commissions. These cookies are governed by the vendor's own cookie policy.",
  },
  {
    title: "Third-Party Cookies",
    body: "We embed content and tools from third parties that may set their own cookies, including Google Analytics (analytics), Google Ads (if applicable), and antivirus vendor affiliate networks. We do not control these cookies. Please refer to each third party's privacy and cookie policy for details.",
  },
  {
    title: "Managing Cookies",
    body: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or alert you when cookies are being set. Note that disabling essential cookies may prevent the site from functioning correctly. Disabling analytics cookies will not affect your browsing experience. To opt out of Google Analytics tracking specifically, you can install the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).",
  },
  {
    title: "Consent",
    body: "By continuing to use TopAntivirusSales.us, you consent to our use of cookies as described in this policy. If you do not consent, please adjust your browser cookie settings or discontinue use of the site.",
  },
  {
    title: "Updates to This Policy",
    body: "We may update this Cookie Policy from time to time. The date of the most recent revision appears below. Continued use of the site after any changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact",
    body: "If you have questions about our use of cookies, please email us at info@topantivirussales.us.",
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="py-12 md:py-16"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.09 255) 0%, oklch(0.30 0.12 250) 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className="text-4xl font-extrabold text-white mb-2"
              style={{ fontFamily: "var(--font-heading, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Cookie Policy
            </h1>
            <p className="text-white/60 text-sm">Last updated: March 2026</p>
          </div>
        </section>
        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy explains how TopAntivirusSales.us uses cookies and similar technologies when you visit our website. It should be read alongside our{" "}
              <a href="/privacy" className="underline hover:no-underline" style={{ color: "oklch(0.35 0.12 250)" }}>
                Privacy Policy
              </a>.
            </p>
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
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
