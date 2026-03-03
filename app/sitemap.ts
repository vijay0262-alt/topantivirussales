import type { MetadataRoute } from "next"

const BASE = "https://topantivirussales.us"

const reviewSlugs = [
  "norton", "mcafee", "guardio", "bitdefender", "avg", "eset", "webroot",
  "avast", "malwarebytes", "trend-micro", "iolo", "pc-matic", "vipre",
  "watchdog", "sophos", "total-av",
]

const bestPicksSlugs = ["families", "pc", "mac", "android", "budget"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/best-free-antivirus`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/how-we-test`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/blog/news`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/advertise`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const reviewPages: MetadataRoute.Sitemap = reviewSlugs.map((slug) => ({
    url: `${BASE}/reviews/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.95,
  }))

  const bestPicksPages: MetadataRoute.Sitemap = bestPicksSlugs.map((slug) => ({
    url: `${BASE}/best-picks/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  return [...staticPages, ...reviewPages, ...bestPicksPages]
}
