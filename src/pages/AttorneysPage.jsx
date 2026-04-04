import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTASection from '../components/home/CTASection'
import AttorneysHeroSection from '../components/attorneys/attorneysHeroSection'
import AttorneysPeopleSection from '../components/attorneys/attorneysPeopleSection'
import AttorneysJoinOurTeamSection from '../components/attorneys/attorneysJoinOurTeamSection'

export default function AttorneysPage() {
  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <AttorneysHeroSection />
      </div>

      <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            Home | Attorneys
          </p>
          <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-thin tracking-widest leading-tight max-w-2xl">
            Our Attorneys
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            Meet our team of experienced legal professionals dedicated to providing exceptional representation.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">
        <div className="overflow-visible">
          <AttorneysPeopleSection />
        </div>

        <div className="bg-white">
          <AttorneysJoinOurTeamSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
