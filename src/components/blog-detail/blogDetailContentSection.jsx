import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { practiceAreas } from '../../data/practiceAreas'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=1400&q=80'
const CONSULTATION_WHATSAPP_NUMBER = '6287877540196'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function BlogDetailContentSection({ article }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: true,
  })
  const [errors, setErrors] = useState({
    name: '',
    message: '',
    privacyAccepted: '',
  })

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmitConsultation = (event) => {
    event.preventDefault()

    const nextErrors = {
      name: '',
      message: '',
      privacyAccepted: '',
    }

    if (!formData.name.trim()) {
      nextErrors.name = 'Your Name is required.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted = 'Please agree to the privacy policy.'
    }

    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.message || nextErrors.privacyAccepted) return

    const whatsappMessage = [
      'Hello YAR Law Firm,',
      `I would like to request a consultation regarding: "${article.title}"`,
      '',
      `Name: ${formData.name.trim()}`,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
      `Message: ${formData.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')

    const waHref = `https://wa.me/${CONSULTATION_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(waHref, '_blank', 'noopener,noreferrer')
  }

  if (!article) {
    return (
      <section className="relative z-20 -mt-[170px] pb-8 md:-mt-[240px] md:pb-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[240px]" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0f1f2] p-8 md:p-12 text-[#2f343c]">Article not found.</div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-20 -mt-[170px] pb-8 md:-mt-[240px] md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[240px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.52fr] gap-6 md:gap-7 items-start">
          <article className="bg-[#f0f1f2] px-6 py-8 md:px-10 md:py-10 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
            <Dots />

            <div className="mt-5 overflow-hidden">
              <img
                src={article.image || FALLBACK_IMAGE}
                alt={article.title}
                className="h-full w-full object-cover max-h-[420px]"
                loading="lazy"
              />
            </div>

            <div className="mt-6 space-y-4 text-[1.03rem] leading-relaxed text-[#373d45]">
              {article.content?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {(article['source-link'] || article.source_link) && (
              <p className="mt-6 text-sm text-[#2f343c]">
                Source:{' '}
                <a
                  href={article['source-link'] || article.source_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b0000] hover:text-[#a00000] font-medium break-all"
                >
                  {article['source-link'] || article.source_link}
                </a>
              </p>
            )}
          </article>

          <aside className="space-y-6">
            <article className="bg-[#f0f1f2] px-5 py-6 md:px-6 md:py-7 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
              <h3 className="text-2xl font-medium text-[#2f343c]">Legal Consultation</h3>
              <p className="mt-2 text-sm text-[#4b515a]">
                Need legal assistance related to this topic? Contact us for a consultation.
              </p>

              <form className="mt-5 space-y-3" onSubmit={handleSubmitConsultation} noValidate>
                <div>
                  <label className="block text-sm font-medium text-[#2f343c] mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className={`w-full border bg-[#f7f8fa] px-3 py-2 text-sm outline-none focus:border-[#8b0000] ${
                      errors.name ? 'border-[#b00020]' : 'border-[#d1d7de]'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#b00020]">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2f343c] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="John Doe"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    className="w-full border border-[#d1d7de] bg-[#f7f8fa] px-3 py-2 text-sm outline-none focus:border-[#8b0000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2f343c] mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    className="w-full border border-[#d1d7de] bg-[#f7f8fa] px-3 py-2 text-sm outline-none focus:border-[#8b0000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2f343c] mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder={`I read your blog post "${article.title}" and would like to discuss this further.`}
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    className={`w-full border bg-[#f7f8fa] px-3 py-2 text-sm outline-none resize-none focus:border-[#8b0000] ${
                      errors.message ? 'border-[#b00020]' : 'border-[#d1d7de]'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-[#b00020]">{errors.message}</p>}
                </div>

                <label className="inline-flex items-center gap-2 text-sm text-[#2f343c]">
                  <input
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) => handleFieldChange('privacyAccepted', e.target.checked)}
                    className="accent-[#8b0000]"
                  />
                  <span>I agree to the privacy policy</span>
                </label>
                {errors.privacyAccepted && (
                  <p className="-mt-1 text-xs text-[#b00020]">{errors.privacyAccepted}</p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#8b0000] text-[#8b0000] px-4 py-2 text-xs font-semibold hover:bg-[#8b0000] hover:text-white transition-colors"
                >
                  SUBMIT REQUEST
                </button>
              </form>
            </article>

            <article className="bg-[#2f3135] px-5 py-6 md:px-6 md:py-7 text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]">
              <h3 className="text-2xl font-medium">Practice Areas</h3>
              <ul className="mt-4 space-y-2.5">
                {practiceAreas.map((area) => (
                  <li key={area.id}>
                    <Link
                      to={`/practice-areas/${area.slug}`}
                      className="inline-flex items-start gap-2 text-white/90 hover:text-white"
                    >
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug">{area.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
