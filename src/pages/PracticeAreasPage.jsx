import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import CTASection from '../components/home/CTASection'
import PracticeAreaHeroSection from '../components/practicearea/practiceAreaHeroSection'
import PracticeAreaOccupationSection from '../components/practicearea/practiceAreaOccupationSection'
import PracticeAreaWhyChooseUseSection from '../components/practicearea/practiceAreaWhyChooseUseSection'
import PracticeAreaFAQSection from '../components/practicearea/practiceAreaFAQSection.jsx'

export default function PracticeAreasPage() {
  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <PracticeAreaHeroSection />
      </div>

      <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            Home | Practice Areas
          </p>
          <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-thin tracking-widest leading-tight max-w-2xl">
            Practice Areas
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            Learn more about our firm, our legal philosophy, and the people behind every solution we
            deliver.
          </p>
          <Button variant="outline-white" href="/attorneys" className="mt-6">
            Meet our team
          </Button>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">
        <div className="overflow-visible">
          <PracticeAreaOccupationSection />
          <PracticeAreaWhyChooseUseSection />
        </div>

        <div className="bg-white">
          <PracticeAreaFAQSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
