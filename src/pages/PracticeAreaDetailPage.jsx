import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTASection from '../components/home/CTASection'
import PracticeAreaDetailHeroSection from '../components/practicearea-detail/practiceAreaDetailHeroSection'
import PracticeAreaDetailContentSection from '../components/practicearea-detail/practiceAreaDetailContentSection'
import PracticeAreaDetailPeopleSection from '../components/practicearea-detail/practiceAreaDetailPeopleSection'
import { practiceAreas } from '../data/practiceAreas'

export default function PracticeAreaDetailPage() {
  const { slug } = useParams()
  const practiceArea = practiceAreas.find((item) => item.slug === slug)

  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <PracticeAreaDetailHeroSection />
      </div>

      <div className="-mt-[150vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 w-full pointer-events-auto">
          <div className="grid grid-cols-1 items-end gap-12">
            <div className="pb-6">
              <p className="text-white/80 mt-4 text-sm md:text-base">
                Home | Practice Areas | {practiceArea ? practiceArea.name : 'Practice Area Not Found'}
              </p>
              <h1 className="mt-3 text-white text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-light leading-tight max-w-4xl">
                {practiceArea ? practiceArea.name : 'Practice Area Not Found'}
              </h1>
              <p className="text-white/80 mt-4 text-sm md:text-base max-w-2xl">
                Expert legal support by our experienced team in {practiceArea ? practiceArea.name : 'this practice area'}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">
        <div className="overflow-visible">
          <PracticeAreaDetailContentSection practiceArea={practiceArea} />
          <PracticeAreaDetailPeopleSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
