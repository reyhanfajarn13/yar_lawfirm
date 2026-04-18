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
import AboutAwardsSection from '../components/aboutus/AboutAwardsSection'
import { useTranslation } from 'react-i18next'

export default function AboutUsPage() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <AboutHeroSection />
      </div>

      <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            {t('pages.about.breadcrumb')}
          </p>
          <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-thin tracking-widest leading-tight max-w-2xl">
            {t('pages.about.title')}
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            {t('pages.about.description')}
          </p>
          <Button variant="outline-white" href="/attorneys" className="mt-6">
            {t('pages.about.meetTeam')}
          </Button>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">
        <div className="overflow-visible">
          <AboutStorySection />
          <AboutAwardsSection />
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
