"use client"

import { ShieldCheck, Mail, Twitter, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

const topReviews = [
  { label: "Norton 360 Review", href: "/reviews/norton" },
  { label: "McAfee Total Protection", href: "/reviews/mcafee" },
  { label: "Bitdefender Review", href: "/reviews/bitdefender" },
  { label: "Trend Micro Maximum", href: "/reviews/trend-micro" },
  { label: "Guardio Browser Security", href: "/reviews/guardio" },
  { label: "AVG Internet Security", href: "/reviews/avg" },
  { label: "ESET NOD32 Review", href: "/reviews/eset" },
]

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Best Picks": [
    { label: "Best Free Antivirus", href: "/best-free-antivirus" },
    { label: "Best for Families", href: "/best-picks/families" },
    { label: "Best for PC", href: "/best-picks/pc" },
    { label: "Best for Mac", href: "/best-picks/mac" },
    { label: "Best for Android", href: "/best-picks/android" },
    { label: "Best Budget Antivirus", href: "/best-picks/budget" },
  ],
  Resources: [
    { label: "How We Test", href: "/how-we-test" },
    { label: "Today's Deals", href: "/#deals" },
    { label: "Security Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Virus News", href: "/blog/news" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Advertise With Us", href: "/advertise" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.13 0.04 255)" }}>
      {/* CTA Banner */}
      <div className="py-10" style={{ backgroundColor: "oklch(0.62 0.19 44)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3
              className="text-xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-heading, sans-serif)" }}
            >
              Ready to protect your devices in 2026?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Get up to 70% off antivirus — exclusive deals updated daily.
            </p>
          </div>
          <Link
            href="/#deals"
            className="px-6 py-3 rounded-lg bg-white font-bold text-sm transition-all hover:bg-gray-100 flex-shrink-0 shadow-md"
            style={{ color: "oklch(0.22 0.09 255)" }}
          >
            See Best Deals
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 md:row-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.62 0.19 44)" }}
              >
                <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-black text-white tracking-tight"
                  style={{
                    fontSize: "15px",
                    letterSpacing: "-0.04em",
                    fontFamily: "var(--font-heading, sans-serif)",
                  }}
                >
                  TopAntivirus
                  <span style={{ color: "oklch(0.80 0.18 44)" }}>Sales</span>
                </span>
                <span
                  className="text-[9px] font-semibold uppercase"
                  style={{ color: "oklch(0.42 0.05 240)", letterSpacing: "0.12em" }}
                >
                  topantivirussales.us
                </span>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.45 0.04 240)" }}
            >
              Independent antivirus reviews and exclusive deals. We help you find the best
              protection at the best price.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:info@topantivirussales.us",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "oklch(1 0 0 / 0.08)" }}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: "oklch(0.60 0.05 240)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Top Reviews column — capped to 7 + view all */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.62 0.19 44)" }}
            >
              Top Reviews
            </h4>
            <ul className="flex flex-col gap-2.5">
              {topReviews.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#all-reviews"
                  className="text-sm font-semibold transition-colors hover:text-white flex items-center gap-1"
                  style={{ color: "oklch(0.62 0.19 44)" }}
                >
                  View all reviews &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Other columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.62 0.19 44)" }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "oklch(0.55 0.04 240)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-5" style={{ borderColor: "oklch(1 0 0 / 0.07)" }}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "oklch(0.38 0.04 240)" }}
        >
          <p>&copy; {new Date().getFullYear()} TopAntivirusSales.us — All rights reserved.</p>
          <p className="text-center max-w-xl">
            Disclosure: We may earn affiliate commissions when you purchase through links on
            this site. This does not affect our editorial integrity or rankings.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
