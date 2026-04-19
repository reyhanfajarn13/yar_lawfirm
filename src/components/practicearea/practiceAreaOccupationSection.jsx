import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getPracticeAreas } from '../../data/practiceAreas'
import { useTranslation } from 'react-i18next'

function crop(text, maxChars) {
  if (!text || text.length <= maxChars) return text
  return `${text.slice(0, maxChars).trimEnd()}...`
}

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function PracticeAreaOccupationSection() {
  const { t, i18n } = useTranslation()
  const practiceAreas = useMemo(() => getPracticeAreas(i18n.language), [i18n.language])

  return (
    <section className="relative z-20 -mt-[170px] pb-8 md:-mt-[260px] md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
            {t('practiceArea.occupation.title')}
          </h2>
          <p className="mt-3 text-[#3a4048] text-base md:text-[1.05rem]">
            {t('practiceArea.occupation.description')}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10">
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                to={`/practice-areas/${area.slug}`}
                className="group block"
              >
                <h3 className="text-[1.5rem] md:text-[1.5rem] font-medium leading-tight text-[#30353d]">
                  {crop(area.name, 34)}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-[#464b53] min-h-[98px]">
                  {crop(area.excerpt, 135)}
                </p>
                <ArrowRight className="mt-5 h-8 w-8 text-[#30353d] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
