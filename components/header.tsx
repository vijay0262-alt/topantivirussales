"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Tag, ShieldCheck } from "lucide-react"

const navLinks = [
  {
    label: "Antivirus Reviews",
    href: "/reviews/norton",
    children: [
      { label: "Norton 360 Review", href: "/reviews/norton" },
      { label: "McAfee Total Protection", href: "/reviews/mcafee" },
      { label: "Bitdefender Total Security", href: "/reviews/bitdefender" },
      { label: "Trend Micro Maximum", href: "/reviews/trend-micro" },
      { label: "Guardio Browser Security", href: "/reviews/guardio" },
      { label: "AVG Internet Security", href: "/reviews/avg" },
      { label: "ESET NOD32 Review", href: "/reviews/eset" },
      { label: "Webroot SecureAnywhere", href: "/reviews/webroot" },
      { label: "Avast Premium Security", href: "/reviews/avast" },
      { label: "Malwarebytes Premium", href: "/reviews/malwarebytes" },
      { label: "TotalAV Antivirus Pro", href: "/reviews/total-av" },
      { label: "Sophos Home Premium", href: "/reviews/sophos" },
      { label: "Iolo System Mechanic Pro", href: "/reviews/iolo-system-mechanic" },
      { label: "Iolo Ultimate Defense", href: "/reviews/iolo-ultimate-defense" },
      { label: "Watchdog Anti-Malware", href: "/reviews/watchdog" },
    ],
  },
  { label: "Compare", href: "/#comparison" },
  { label: "Best Free Antivirus", href: "/best-free-antivirus" },
  { label: "Best Deals", href: "/#deals" },
  { label: "How We Test", href: "/how-we-test" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileReviewsOpen, setMobileReviewsOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 shadow-md" style={{ backgroundColor: "oklch(0.22 0.09 255)" }}>
      {/* Top promo bar */}
      <div className="w-full py-1.5 text-center text-xs font-medium" style={{ backgroundColor: "oklch(0.15 0.07 255)", color: "oklch(0.85 0.06 240)" }}>
        <span>Independent expert reviews — updated daily for 2026</span>
        <span className="mx-3 opacity-30">|</span>
        <span className="font-bold" style={{ color: "oklch(0.80 0.15 45)" }}>Up to 70% OFF top antivirus deals today!</span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.62 0.19 44)" }}>
            <ShieldCheck className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-white tracking-tight" style={{ fontSize: "16px", letterSpacing: "-0.04em", fontFamily: "var(--font-heading, sans-serif)" }}>
              TopAntivirus<span style={{ color: "oklch(0.80 0.18 44)" }}>Sales</span>
            </span>
            <span className="text-[9px] font-semibold uppercase" style={{ color: "oklch(0.55 0.07 240)", letterSpacing: "0.12em" }}>
              topantivirussales.us
            </span>
          </div>
        </Link>

        {/* Desktop nav — always visible, never hamburger */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  style={{ color: "oklch(0.82 0.05 240)" }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-[620px] rounded-xl shadow-2xl border overflow-hidden z-50"
                    style={{ backgroundColor: "oklch(0.18 0.08 255)", borderColor: "oklch(0.32 0.10 255)" }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="px-3 py-2 border-b text-[10px] uppercase tracking-widest font-semibold" style={{ borderColor: "oklch(0.30 0.09 255)", color: "oklch(0.62 0.19 44)" }}>
                      All Antivirus Reviews
                    </div>
                    <div className="grid grid-cols-3 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                          style={{ color: "oklch(0.75 0.05 240)" }}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(0.62 0.19 44)" }} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap hover:text-white"
                style={{ color: "oklch(0.82 0.05 240)" }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-white" style={{ color: "oklch(0.70 0.05 240)" }}>
            About
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-white" style={{ color: "oklch(0.70 0.05 240)" }}>
            Contact
          </Link>
          <Link
            href="/#deals"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
            style={{ backgroundColor: "oklch(0.62 0.19 44)" }}
          >
            <Tag className="w-3.5 h-3.5" />
            See Deals
          </Link>
        </div>

        {/* Mobile hamburger — ONLY on mobile */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors flex-shrink-0"
          style={{ color: "oklch(0.82 0.05 240)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu — ONLY on mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ backgroundColor: "oklch(0.18 0.08 255)", borderColor: "oklch(0.32 0.10 255)" }}>
          <nav className="flex flex-col px-4 py-3 gap-1">
            <button
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium text-left"
              style={{ color: "oklch(0.82 0.05 240)" }}
              onClick={() => setMobileReviewsOpen(!mobileReviewsOpen)}
            >
              Antivirus Reviews
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileReviewsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileReviewsOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {navLinks[0].children!.map((child) => (
                  <Link key={child.label} href={child.href} className="px-3 py-2 rounded-md text-sm" style={{ color: "oklch(0.68 0.05 240)" }} onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.slice(1).map((link) => (
              <Link key={link.label} href={link.href} className="px-3 py-2.5 rounded-md text-sm font-medium" style={{ color: "oklch(0.82 0.05 240)" }} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/about" className="px-3 py-2.5 rounded-md text-sm font-medium" style={{ color: "oklch(0.82 0.05 240)" }} onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="px-3 py-2.5 rounded-md text-sm font-medium" style={{ color: "oklch(0.82 0.05 240)" }} onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/#deals" className="mt-2 px-4 py-3 rounded-lg text-sm font-bold text-white text-center" style={{ backgroundColor: "oklch(0.62 0.19 44)" }} onClick={() => setMobileOpen(false)}>
              See Best Deals
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
