import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { practiceAreas } from '../../data/practiceAreas'

export default function PracticeAreaSection() {
  return (
    <section className="py-16 md:py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Practice Areas</h2>
        <p className="text-secondary max-w-3xl mb-12">
          Lorem ipsum dolor sit amet consectetur. Dignissim placerat lorem vestibulum volutpat lacus
          aenean. Tortor neque a praesent ullamcorper. Egestas aliquam fusce scelerisque dictum
          ridiculus non imperdiet felis mauris.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">
          {practiceAreas.map((area) => (
            <Link
              key={area.id}
              to={`/practice-areas/${area.slug}`}
              className="group"
            >
              <h3 className="text-primary font-medium text-base mb-2 group-hover:underline">
                {area.name}
              </h3>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <Button variant="solid-dark" href="/practice-areas">
          Learn more
        </Button>
      </div>
    </section>
  )
}
