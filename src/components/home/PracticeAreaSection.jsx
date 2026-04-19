import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { getPracticeAreas } from '../../data/practiceAreas'
import { useTranslation } from 'react-i18next'

export default function PracticeAreaSection() {
  const { t, i18n } = useTranslation()
  const practiceAreas = useMemo(() => getPracticeAreas(i18n.language), [i18n.language])

  return (
    <section className="py-16 md:py-20 bg-[#303030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-light text-white mb-3">{t('home.practiceArea.title')}</h2>
        <p className="text-white max-w-2xl mb-12">
          {t('home.practiceArea.description')}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="border-b-4 border-transparent hover:border-[#8B0000] transition-colors duration-300 pb-3"
            >
              <Link to={`/practice-areas/${area.slug}`} className="group block">
                <h3 className="text-white font-medium text-base mb-2 group-hover:underline">
                  {area.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <Button variant="outline-white" href="/practice-areas">
          {t('home.practiceArea.learnMore')}
        </Button>
      </div>
    </section>
  )
}
