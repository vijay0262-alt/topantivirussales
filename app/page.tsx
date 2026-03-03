import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TopPicks from "@/components/top-picks"
import AllReviewsSection from "@/components/all-reviews-section"
import ComparisonTable from "@/components/comparison-table"
import DealCards from "@/components/deal-cards"
import HowWeTest from "@/components/how-we-test"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Antivirus Software of 2026 — Expert Reviews & Exclusive Deals",
  description:
    "Compare the #1-ranked antivirus software of 2026. Independently tested Norton, McAfee, Bitdefender, Trend Micro, AVG, ESET, Webroot & 10 more. Up to 70% off today.",
  keywords: [
    "best antivirus 2026", "top antivirus software", "antivirus deals 2026",
    "norton 360 deal", "mcafee discount", "bitdefender sale",
    "best internet security suite", "antivirus comparison chart",
  ],
  alternates: { canonical: "https://topantivirussales.us" },
  openGraph: {
    title: "Best Antivirus Software of 2026 — Expert Reviews & Exclusive Deals",
    description: "Compare 13 top-rated antivirus products with expert scores, feature breakdowns, and exclusive discounts of up to 70% off.",
    url: "https://topantivirussales.us",
    type: "website",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://topantivirussales.us" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best antivirus software in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Norton 360 Deluxe is the best antivirus in 2026, scoring 9.8/10 with a 99.9% detection rate, unlimited VPN, 50GB cloud backup, and dark web monitoring at $29.99/year for 5 devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is free antivirus software good enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free antivirus can handle basic threats but lacks real-time ransomware protection, VPN, dark web monitoring, and identity theft tools. For full protection, a paid suite is strongly recommended.",
      },
    },
    {
      "@type": "Question",
      name: "How much does good antivirus software cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good antivirus software costs $15–$40 per year for the first year with discounts. Norton 360 starts at $29.99/yr, McAfee at $39.99/yr, and Bitdefender at $34.99/yr — all covering 5+ devices.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <TopPicks />
        <AllReviewsSection />
        <ComparisonTable />
        <DealCards />
        <HowWeTest />
        <FaqSection />
        <Footer />
      </main>
    </>
  )
}
