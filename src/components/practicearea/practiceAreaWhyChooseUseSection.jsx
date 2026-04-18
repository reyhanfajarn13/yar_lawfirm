import { Scale, ShieldCheck, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const reasonIcons = [Users, Scale, ShieldCheck]

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function PracticeAreaWhyChooseUseSection() {
  const { t } = useTranslation()
  const reasons = t('practiceArea.whyChoose.reasons', { returnObjects: true })

  return (
    <section className="bg-[#e6eaee] py-5 md:py-5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2.15rem] font-medium leading-tight text-[#2f343c]">
            {t('practiceArea.whyChoose.title')}
          </h2>
          <p className="mt-2 text-[#454a52] text-base">
            {t('practiceArea.whyChoose.description')}
          </p>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => {
              const Icon = reasonIcons[idx] || Users

              return (
                <article key={`${reason.title}-${idx}`}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 flex-shrink-0 text-[#8b0000]" />
                    <h3 className="text-[1.03rem] md:text-[1.1rem] font-semibold text-[#8b0000]">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#3f444c]">
                    {reason.description}
                  </p>
                </article>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
