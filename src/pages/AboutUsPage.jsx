import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import CTASection from '../components/home/CTASection'
import AboutHeroSection from '../components/aboutus/AboutHeroSection'
import AboutStorySection from '../components/aboutus/AboutStorySection'
import AboutValuesSection from '../components/aboutus/AboutValuesSection'
import AboutFounderSection from '../components/aboutus/AboutFounderSection'
import AboutWhyChooseUsSection from '../components/aboutus/AboutWhyChooseUsSection'
import AboutLeadershipSection from '../components/aboutus/AboutLeadershipSection'

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <AboutHeroSection />
      </div>

      <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            Home | About Us
          </p>
          <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-thin tracking-widest leading-tight max-w-2xl">
            About Us
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
          <AboutStorySection />
          <AboutValuesSection />
          <AboutFounderSection />
          <AboutWhyChooseUsSection />
        </div>

        <div className="bg-white">
          <AboutLeadershipSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
