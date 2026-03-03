import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactClient from "@/components/contact-client"

export const metadata: Metadata = {
  title: "Contact Us — TopAntivirusSales.us Editorial Team",
  description:
    "Get in touch with the TopAntivirusSales.us team. Questions, advertise inquiries, review requests, corrections, or press contacts — we reply within one business day.",
  keywords: ["contact topantivirussales", "antivirus site contact", "advertise antivirus site", "press inquiry antivirus"],
  alternates: { canonical: "https://topantivirussales.us/contact" },
  openGraph: {
    title: "Contact Us | TopAntivirusSales.us",
    description: "Reach our editorial team for questions, partnerships, corrections, or press inquiries.",
    url: "https://topantivirussales.us/contact",
    type: "website",
  },
}

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Have a question, partnership inquiry, or spotted something we should fix? We read every message and typically reply within one business day.
            </p>
          </div>
        </section>
        <ContactClient />
      </main>
      <Footer />
    </>
  )
}
