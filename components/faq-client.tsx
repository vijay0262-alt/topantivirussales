"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ShieldCheck } from "lucide-react"

const faqGroups = [
  {
    group: "Buying & Choosing",
    faqs: [
      { q: "What is the best antivirus software in 2026?", a: "Based on our independent lab testing, Norton 360 Deluxe is the best all-around antivirus in 2026 — achieving 99.9% detection with a full suite of extras including an unlimited VPN, dark web monitoring, and 50GB cloud backup. McAfee Total Protection is the top pick for families needing unlimited device coverage." },
      { q: "How much does a good antivirus cost?", a: "Premium antivirus suites typically cost $20–$50/year at current promotional prices. Norton 360 Deluxe starts at $29.99/yr, McAfee at $39.99/yr, and budget options like Webroot start at $17.99/yr. Prices rise significantly on renewal, so check the current deals on our homepage for up-to-date pricing." },
      { q: "Do I really need antivirus software?", a: "Yes, for most users. Windows Defender has improved significantly but still lags behind third-party solutions in detection rates and extras. A quality antivirus adds VPN protection, phishing filters, ransomware rollback, and dark web monitoring that Windows Defender does not provide. Mac and Android users also face increasing threats." },
      { q: "Is free antivirus good enough?", a: "Free antivirus from reputable vendors like Avast, AVG, or Bitdefender provides solid baseline protection. For users who practice careful browsing habits, it may be sufficient. However, paid plans add critical extras like VPNs, identity monitoring, and dedicated ransomware protection that meaningfully increase your security." },
      { q: "How many devices does antivirus cover?", a: "Coverage varies by plan. Norton 360 Deluxe covers 5 devices, McAfee Total Protection covers unlimited devices, and budget options like ESET and Webroot typically cover 1–3 devices. Always check the device limit before purchasing, especially for family or multi-device households." },
    ],
  },
  {
    group: "Using Antivirus",
    faqs: [
      { q: "Will antivirus slow down my computer?", a: "Modern antivirus has minimal impact on most computers. Bitdefender and ESET are consistently rated lowest for system impact in independent tests. On older PCs with limited RAM, cloud-based antivirus like Webroot is the lightest option as it offloads processing to the cloud." },
      { q: "Can I run two antivirus programs at the same time?", a: "No — running two full antivirus programs simultaneously causes conflicts that can destabilize your system and reduce protection. Use one primary antivirus suite. Browser extensions like Guardio can run alongside a full antivirus as they operate at the browser level rather than the system level." },
      { q: "How often should I run a full scan?", a: "With real-time protection active, scheduled full scans are supplementary. We recommend a full scan once a week or after downloading files from unfamiliar sources. Most antivirus suites let you schedule this automatically during overnight hours to avoid disruption." },
      { q: "What should I do if my antivirus detects a threat?", a: "Follow the recommended action in your antivirus interface — usually 'quarantine' or 'remove'. Do not ignore detections. After removing a threat, run a full scan to confirm the infection is fully cleared. If ransomware has encrypted files, check whether your antivirus offers a rollback feature before paying any ransom." },
    ],
  },
  {
    group: "Our Site & Reviews",
    faqs: [
      { q: "How does TopAntivirusSales.us make money?", a: "We participate in affiliate marketing programs. When you click a product link on our site and make a purchase, we may earn a small commission from the vendor at no additional cost to you. This funding model allows us to provide free, independent content. It does not influence our rankings, scores, or editorial decisions." },
      { q: "How are your antivirus scores calculated?", a: "Each score is a weighted average across five categories: malware detection rate (35%), system performance impact (20%), feature set (20%), usability (15%), and value for money (10%). We use real malware samples, independent lab benchmarks from AV-TEST and AV-Comparatives, and hands-on evaluation in our own testing environment." },
      { q: "How often are your reviews updated?", a: "We review and update all product pages on a quarterly basis, or sooner when a vendor releases a major update, changes pricing, or when new threat intelligence warrants a re-evaluation. Our deal prices are checked and updated daily." },
      { q: "Do antivirus companies pay to be featured on your site?", a: "No. Our rankings are based entirely on our independent testing results. We have declined paid placement requests that would compromise our editorial integrity. The order of products in our rankings reflects their performance scores only." },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded-xl overflow-hidden transition-all" style={{ borderColor: open ? "oklch(0.62 0.19 44 / 0.4)" : "oklch(0.88 0.01 240)" }}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-muted/30 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm leading-snug">{q}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform text-muted-foreground ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-card border-t" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqClient() {
  return (
    <div className="flex flex-col gap-12">
      {faqGroups.map((group) => (
        <div key={group.group}>
          <h2 className="text-lg font-extrabold text-foreground mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>
            <span className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.19 44)" }} />
            {group.group}
          </h2>
          <div className="flex flex-col gap-3">
            {group.faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      ))}
      <div className="mt-4 p-6 rounded-2xl border text-center" style={{ borderColor: "oklch(0.88 0.01 240)", backgroundColor: "oklch(0.97 0.005 240)" }}>
        <ShieldCheck className="w-10 h-10 mx-auto mb-3" style={{ color: "oklch(0.62 0.19 44)" }} />
        <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>Still have questions?</p>
        <p className="text-sm text-muted-foreground mb-4">Our team is happy to help with personalized antivirus recommendations.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white shadow-md transition-all hover:brightness-110" style={{ backgroundColor: "oklch(0.35 0.12 250)" }}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}
