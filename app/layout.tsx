import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const _poppins = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-heading", display: "swap" })

const BASE_URL = "https://topantivirussales.us"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2744",
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Best Antivirus Software Reviews & Deals 2026 | TopAntivirusSales.us",
    template: "%s | TopAntivirusSales.us",
  },
  description:
    "Independent expert reviews of the best antivirus software of 2026. Compare Norton, McAfee, Bitdefender, Trend Micro, ESET, AVG, Webroot & more. Exclusive deals up to 70% off.",
  keywords: [
    "best antivirus 2026",
    "antivirus software review",
    "antivirus comparison",
    "norton 360 review",
    "mcafee total protection review",
    "bitdefender review",
    "trend micro review",
    "eset nod32 review",
    "avg antivirus review",
    "webroot review",
    "free antivirus 2026",
    "antivirus deals",
    "internet security software",
    "best virus protection",
    "malware protection",
    "ransomware protection",
    "antivirus for windows",
    "antivirus for mac",
    "antivirus for android",
    "cheap antivirus",
  ],
  authors: [{ name: "TopAntivirusSales.us Editorial Team", url: BASE_URL }],
  creator: "TopAntivirusSales.us",
  publisher: "TopAntivirusSales.us",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "TopAntivirusSales.us",
    title: "Best Antivirus Software Reviews & Deals 2026",
    description:
      "Compare the best antivirus software of 2026. Exclusive deals up to 70% off Norton, McAfee, Bitdefender, Trend Micro and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TopAntivirusSales.us — Best Antivirus Reviews 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@topantivirussales",
    creator: "@topantivirussales",
    title: "Best Antivirus Reviews & Deals 2026 | TopAntivirusSales.us",
    description:
      "Expert-tested antivirus comparisons. Up to 70% off Norton, McAfee, Bitdefender & more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "TopAntivirusSales.us",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          "https://twitter.com/topantivirussales",
          "https://facebook.com/topantivirussales",
          "https://youtube.com/@topantivirussales",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "TopAntivirusSales.us",
        description: "Independent expert reviews and comparisons of the best antivirus software of 2026.",
        publisher: { "@id": `${BASE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* DNS prefetch & preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
     <body className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}>
  <div className="min-h-screen w-full overflow-x-hidden">
    {children}
  </div>
</body>
    </html>
  )
}
