import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/home/HeroSection'
import Button from '../components/ui/Button'
import AchievementSection from '../components/home/AchievementSection'
import ArticleSection from '../components/home/ArticleSection'
import PracticeAreaSection from '../components/home/PracticeAreaSection'
import AttorneySection from '../components/home/AttorneySection'
import ClientSection from '../components/home/ClientSection'
import CTASection from '../components/home/CTASection'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <>
      {/* Navbar — fixed di atas segalanya */}
      <Navbar />

      {/* Hero — background sticky, tetap diam di belakang saat scroll */}
      <div className="sticky top-0 z-0 h-screen">
        <HeroSection />
      </div>
      {/* Hero Content — normal flow, overlay di atas hero bg, hilang saat di-scroll */}
      <div className="-mt-[130vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl">
            Excellence in Every Legal Step
          </h1>
          <p className="text-white/80 mt-4 max-w-lg text-base md:text-lg">
            A modern and sophisticated website representing a professional law firm with strong
            credibility
          </p>
          <Button variant="outline-white" className="mt-6">
            Learn more
          </Button>
        </div>
      </div>

      {/* Content Wrapper — mengapung naik menutupi hero */}
      <div className="relative z-10 -mt-20 shadow-2xl">
        {/* Section pertama: sudut atas melengkung */}
        <div className="overflow-hidden">
          <AchievementSection />
          <div className="bg-white">
            <ArticleSection />
          </div>
        </div>

        {/* Section dengan bg berbeda */}
        <PracticeAreaSection />

        <div className="bg-white">
          <AttorneySection />
          <ClientSection />
        </div>

        {/* CTA + Footer menyatu (bg dark) */}
        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
