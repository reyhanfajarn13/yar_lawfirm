import { Plus } from 'lucide-react'
import { practiceAreaFaqs } from '../../data/practiceAreaFAQ.js'

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
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="px-6 py-8 md:px-20 md:py-12">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2.15rem] font-medium leading-tight text-[#2f343c]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-[#454a52] text-base">
            Common questions about our legal services and practice areas
          </p>

          <div className="mt-7 border-t border-[#d9dde1]">
            {practiceAreaFaqs.map((faq) => (
              <button
                key={faq.id}
                type="button"
                className="w-full py-4 border-b border-[#d9dde1] text-left flex items-center justify-between gap-4"
              >
                <span className="text-[0.97rem] text-[#353a42] leading-relaxed">
                  {faq.question}
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef3e57] text-white flex-shrink-0">
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
