"use client"

import { useState } from "react"
import { Mail, MessageSquare, Clock, MapPin, Send, CheckCircle } from "lucide-react"

const contactReasons = ["General Inquiry", "Advertise / Partnership", "Product Review Request", "Corrections & Feedback", "Press & Media", "Other"]

const infoItems = [
  { icon: Mail, title: "Email Us", body: "info@topantivirussales.us", sub: "Best for detailed inquiries" },
  { icon: MessageSquare, title: "Editorial Feedback", body: "editor@topantivirussales.us", sub: "Corrections, updates, tips" },
  { icon: Clock, title: "Response Time", body: "Within 1 business day", sub: "Monday – Friday, 9am – 6pm ET" },
  { icon: MapPin, title: "Based In", body: "United States", sub: "topantivirussales.us" },
]

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: contactReasons[0], message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <aside className="md:col-span-2 flex flex-col gap-6">
            {infoItems.map(({ icon: Icon, title, body, sub }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl border bg-card" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "oklch(0.62 0.19 44 / 0.12)" }}>
                  <Icon className="w-5 h-5" style={{ color: "oklch(0.62 0.19 44)" }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{title}</p>
                  <p className="text-sm text-foreground/80 mt-0.5">{body}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
            <div className="p-4 rounded-xl border text-xs leading-relaxed" style={{ borderColor: "oklch(0.35 0.12 250 / 0.3)", backgroundColor: "oklch(0.35 0.12 250 / 0.05)", color: "oklch(0.45 0.04 250)" }}>
              <strong className="block mb-1 text-foreground">Affiliate Disclosure</strong>
              TopAntivirusSales.us participates in affiliate programs. We may earn a commission if you purchase via our links. This never influences our editorial rankings or scores.
            </div>
          </aside>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border p-10 text-center flex flex-col items-center gap-4" style={{ borderColor: "oklch(0.55 0.16 145 / 0.4)", backgroundColor: "oklch(0.55 0.16 145 / 0.06)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.55 0.16 145 / 0.15)" }}>
                  <CheckCircle className="w-8 h-8" style={{ color: "oklch(0.55 0.16 145)" }} />
                </div>
                <h2 className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-heading, sans-serif)" }}>Message Sent!</h2>
                <p className="text-muted-foreground max-w-sm">Thanks for reaching out, <strong>{form.name}</strong>. We will reply to <strong>{form.email}</strong> within one business day.</p>
                <button className="mt-2 px-5 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: "oklch(0.35 0.12 250)" }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: contactReasons[0], message: "" }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-8 flex flex-col gap-5" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[{ id: "name", label: "Full Name", type: "text", placeholder: "John Smith" }, { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" }].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="flex flex-col gap-1.5">
                      <label htmlFor={id} className="text-sm font-semibold text-foreground">{label} <span style={{ color: "oklch(0.55 0.22 25)" }}>*</span></label>
                      <input id={id} name={id} type={type} required value={form[id as keyof typeof form]} onChange={handleChange} placeholder={placeholder} className="w-full px-4 py-2.5 rounded-lg border text-sm bg-background text-foreground outline-none focus:ring-2" style={{ borderColor: "oklch(0.88 0.01 240)" }} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border text-sm bg-background text-foreground outline-none" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
                    {contactReasons.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message <span style={{ color: "oklch(0.55 0.22 25)" }}>*</span></label>
                  <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." className="w-full px-4 py-2.5 rounded-lg border text-sm bg-background text-foreground outline-none resize-none leading-relaxed" style={{ borderColor: "oklch(0.88 0.01 240)" }} />
                </div>
                <p className="text-xs text-muted-foreground">By submitting you agree to our <a href="/privacy" className="underline hover:no-underline" style={{ color: "oklch(0.35 0.12 250)" }}>Privacy Policy</a>. We never share your data.</p>
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed shadow-md" style={{ backgroundColor: "oklch(0.62 0.19 44)" }}>
                  {loading ? <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending…</> : <><Send className="w-4 h-4" />Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
