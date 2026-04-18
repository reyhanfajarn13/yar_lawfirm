import { useState } from 'react'
import { Plus } from 'lucide-react'
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

export default function PracticeAreaFAQSection() {
  const { t } = useTranslation()
  const [openId, setOpenId] = useState(null)
  const practiceAreaFaqs = t('practiceArea.faq.items', { returnObjects: true })

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="px-6 py-8 md:px-20 md:py-12">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2.15rem] font-medium leading-tight text-[#2f343c]">
            {t('practiceArea.faq.title')}
          </h2>
          <p className="mt-2 text-[#454a52] text-base">
            {t('practiceArea.faq.description')}
          </p>

          <div className="mt-7 border-t border-[#d9dde1]">
            {practiceAreaFaqs.map((faq, idx) => {
              const faqId = idx + 1
              return (
              <div key={faqId} className="border-b border-[#d9dde1]">
                <button
                  type="button"
                  onClick={() => handleToggle(faqId)}
                  aria-expanded={openId === faqId}
                  aria-controls={`practice-area-faq-${faqId}`}
                  className="w-full py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-[0.97rem] text-[#353a42] leading-relaxed">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef3e57] text-white flex-shrink-0">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openId === faqId ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={`practice-area-faq-${faqId}`}
                  className={`grid transition-all duration-300 ${
                    openId === faqId ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[0.94rem] leading-relaxed text-[#4a5059] pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </article>
      </div>
    </section>
  )
}
