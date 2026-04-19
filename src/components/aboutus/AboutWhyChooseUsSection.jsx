import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getWhyChooseUsContent } from '../../data/whyChooseUs'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-white/90" />
      ))}
    </div>
  )
}

export default function AboutWhyChooseUsSection() {
  const { i18n } = useTranslation()
  const whyChooseUsContent = useMemo(() => getWhyChooseUsContent(i18n.language), [i18n.language])

  return (
    <section className="relative overflow-hidden bg-[#e6eaee] pt-5 md:pt-5">

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="relative bg-[#303030] px-6 py-10 md:px-12 md:py-12 shadow-[0_12px_28px_rgba(15,23,42,0.22)] before:pointer-events-none before:absolute before:bottom-0 before:right-full before:top-0 before:w-screen before:bg-[#303030] before:content-['']">
          <Dots />

          <h2 className="mt-5 text-4xl md:text-[3rem] font-medium leading-tight text-white">
            {whyChooseUsContent.title}
          </h2>
          <p className="mt-3 text-white/80 text-[1.05rem]">
            {whyChooseUsContent.description}
          </p>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUsContent.items.map((item) => (
              <article key={item.id} className="relative min-h-[280px] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000f2] via-[#8b0000bf] to-[#17181f73]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17181f99] via-transparent to-transparent" />

                <div className="relative h-full px-6 py-8 md:px-8 md:py-10 text-white max-w-[72%]">
                  <h3 className="text-2xl md:text-[2rem] font-light leading-tight">{item.title}</h3>
                  <p className="mt-4 text-[1.0rem] md:text-[1rem] font-thin text-white/92">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
