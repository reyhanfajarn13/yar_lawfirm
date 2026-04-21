import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getPracticeAreas } from '../../data/practiceAreas'
import { useTranslation } from 'react-i18next'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function PracticeAreaDetailContentSection({ practiceArea,
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
 }) {
  const { t, i18n } = useTranslation()
  const practiceAreas = useMemo(() => getPracticeAreas(i18n.language), [i18n.language])
  const message = t('practiceArea.detail.whatsappMessage')
  const defaultHelpList = t('practiceArea.detail.defaultHelpList', { returnObjects: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseBrief: '',
    privacyAccepted: false,
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    caseBrief: '',
    privacyAccepted: '',
  })

  const helpItems = practiceArea?.howWeCanHelpYou?.length
    ? practiceArea.howWeCanHelpYou
    : defaultHelpList
   
  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const href = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {
      name: '',
      email: '',
      phone: '',
      caseBrief: '',
      privacyAccepted: '',
    }

    if (!formData.name.trim()) nextErrors.name = t('practiceArea.detail.form.nameRequired')
    if (!formData.email.trim()) nextErrors.email = t('practiceArea.detail.form.emailRequired')
    if (!formData.phone.trim()) nextErrors.phone = t('practiceArea.detail.form.phoneRequired')
    if (!formData.caseBrief.trim()) nextErrors.caseBrief = t('practiceArea.detail.form.caseRequired')
    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted = t('practiceArea.detail.form.privacyRequired')
    }

    setErrors(nextErrors)
    if (
      nextErrors.name ||
      nextErrors.email ||
      nextErrors.phone ||
      nextErrors.caseBrief ||
      nextErrors.privacyAccepted
    ) {
      return
    }

    const whatsappMessage = [
      t('practiceArea.detail.form.whatsappGreeting'),
      t('practiceArea.detail.form.whatsappIntent', {
        practiceArea: practiceArea?.name || t('pages.practiceAreaDetail.notFound'),
      }),
      '',
      t('practiceArea.detail.form.whatsappName', { value: formData.name.trim() }),
      t('practiceArea.detail.form.whatsappEmail', { value: formData.email.trim() }),
      t('practiceArea.detail.form.whatsappPhone', { value: formData.phone.trim() }),
      t('practiceArea.detail.form.whatsappCase', { value: formData.caseBrief.trim() }),
    ].join('\n')

    const submitHref = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(submitHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative z-20 -mt-[6rem] pb-10 md:-mt-[7.5rem] md:pb-12">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[6rem] bg-[#ffffff] md:top-[7.5rem]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-5 md:gap-6">
          <article className="bg-[#F1F4F6] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.1)]">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              {t('practiceArea.detail.storyTitle')}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#434a54]">
              {practiceArea?.excerpt || t('practiceArea.detail.storyFallback')}
            </p>
          </article>

          <article className="bg-[#F1F4F6] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.1)]">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              {t('practiceArea.detail.helpTitle')}
            </h2>

            <ul className="mt-5 space-y-2.5">
              {helpItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#404751] text-sm md:text-[0.95rem]">
                  <span className="mt-1.5 h-[7px] w-[7px] rounded-full bg-[#a00000] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center border border-[#a00000] px-4 py-2 text-[0.68rem] font-semibold tracking-wide text-[#a00000] hover:bg-[#a00000] hover:text-white transition-colors"
            >
              {t('practiceArea.detail.scheduleButton')}
            </a>
          </article>
        </div>

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_0.36fr] gap-5 md:gap-6 items-start">
          <article className="px-1 md:px-0">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              {t('practiceArea.detail.requestTitle')}
            </h2>
            <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-[#434a54]">
              {t('practiceArea.detail.requestDesc')}
            </p>

            <form className="mt-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
                <div className="space-y-3.5">
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">{t('practiceArea.detail.yourName')}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      placeholder={t('practiceArea.detail.form.namePlaceholder')}
                      className={`w-full border bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000] ${
                        errors.name ? 'border-[#b00020]' : 'border-[#cfd6de]'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-[#b00020]">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">{t('practiceArea.detail.email')}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      placeholder={t('practiceArea.detail.form.emailPlaceholder')}
                      className={`w-full border bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000] ${
                        errors.email ? 'border-[#b00020]' : 'border-[#cfd6de]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-[#b00020]">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">{t('practiceArea.detail.phone')}</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      placeholder={t('practiceArea.detail.form.phonePlaceholder')}
                      className={`w-full border bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000] ${
                        errors.phone ? 'border-[#b00020]' : 'border-[#cfd6de]'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-[#b00020]">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">
                    {t('practiceArea.detail.caseBrief')}
                  </label>
                  <textarea
                    rows={8}
                    value={formData.caseBrief}
                    onChange={(e) => handleFieldChange('caseBrief', e.target.value)}
                    placeholder={t('practiceArea.detail.casePlaceholder')}
                    className={`h-full min-h-[11.6rem] w-full border bg-[#f3f5f7] px-3 py-2 text-sm outline-none resize-none focus:border-[#8b0000] ${
                      errors.caseBrief ? 'border-[#b00020]' : 'border-[#cfd6de]'
                    }`}
                  />
                  {errors.caseBrief && <p className="mt-1 text-xs text-[#b00020]">{errors.caseBrief}</p>}
                </div>
              </div>

              <label className="mt-4 inline-flex items-center gap-2 text-sm text-[#2f343c]">
                <input
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={(e) => handleFieldChange('privacyAccepted', e.target.checked)}
                  className="accent-[#8b0000]"
                />
                <span>{t('practiceArea.detail.privacy')}</span>
              </label>
              {errors.privacyAccepted && (
                <p className="mt-1 text-xs text-[#b00020]">{errors.privacyAccepted}</p>
              )}

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#8b0000] bg-transparent px-4 py-2 text-[0.7rem] font-semibold tracking-wide text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-colors"
                >
                  {t('practiceArea.detail.submit')}
                </button>
              </div>
            </form>
          </article>

          <article className="bg-[#08264a] px-5 py-6 md:px-6 md:py-7 text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]">
            <h3 className="text-2xl font-medium">{t('practiceArea.detail.expertiseTitle')}</h3>
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
        </div>
      </div>
    </section>
  )
}
