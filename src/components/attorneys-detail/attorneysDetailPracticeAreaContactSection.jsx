import { Link as LinkIcon, Mail, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getLocalizedAttorneyPracticeAreas } from '../../data/attorneyLocale'

function Dots({ color = '#d10010' }) {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full" style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}

export default function AttorneysDetailPracticeAreaContactSection({ attorney,
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
 }) {
  const { t, i18n } = useTranslation()
  const message = t('attorneyDetail.contact.whatsappMessage')
  if (!attorney) return null
  const localizedPracticeAreas = getLocalizedAttorneyPracticeAreas(attorney['practice-areas'] || [], i18n.language)
  const linkedin = attorney.contact?.linkedin?.trim() || '-'
  const email = attorney.contact?.email?.trim() || '-'

  
  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const href = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="bg-[#f1f4f6] pb-10 md:pb-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.55fr] gap-5 md:gap-6 items-stretch">
          <article className="bg-[#ffffff] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              {t('attorneyDetail.contact.practiceAreasTitle')}
            </h2>

            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {localizedPracticeAreas.map((area) => (
                <li key={area} className="flex items-start gap-2 text-[#3d424a] text-sm md:text-[0.98rem]">
                  <ArrowRight className="h-4 w-4 mt-[2px] text-[#8b0000] flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#08264a] px-6 py-7 md:px-8 md:py-8 text-white shadow-[0_8px_20px_rgba(15,23,42,0.16)]">
            <Dots color="#ffffff" />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight">{t('attorneyDetail.contact.contactTitle')}</h2>

            <div className="mt-5 space-y-3">
              {linkedin === '-' ? (
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <LinkIcon className="h-4 w-4" />
                  <span>-</span>
                </div>
              ) : (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white text-sm break-all"
                >
                  <LinkIcon className="h-4 w-4 flex-shrink-0" />
                  <span>{linkedin}</span>
                </a>
              )}

              {email === '-' ? (
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>-</span>
                </div>
              ) : (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-white/90 hover:text-white text-sm break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>{email}</span>
                </a>
              )}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center border border-white px-4 py-2 text-[0.7rem] font-semibold tracking-wide hover:bg-white hover:text-[#08264a] transition-colors"
            >
              {t('attorneyDetail.contact.scheduleButton')}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
