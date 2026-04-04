import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need Legal Assistance? Contact Us Today!
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Schedule a free consultation with our experienced attorneys to discuss your legal needs.
        </p>
        <Button variant="outline-white" href="/contact">
          Contact us now
        </Button>
      </div>
    </section>
  )
}
