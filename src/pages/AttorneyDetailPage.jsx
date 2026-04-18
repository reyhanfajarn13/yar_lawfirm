import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTASection from '../components/home/CTASection'
import AttorneysDetailHeroSection from '../components/attorneys-detail/attorneysDetailHeroSection'
import AttorneysDetailAboutMeSection from '../components/attorneys-detail/attorneysDetailAboutMeSection'
import AttorneysDetailPracticeAreaContactSection from '../components/attorneys-detail/attorneysDetailPracticeAreaContactSection'
import AttorneysDetailPeopleSection from '../components/attorneys-detail/attorneysDetailPeopleSection'
import { attorneys } from '../data/attorneys'
import { useTranslation } from 'react-i18next'

export default function AttorneyDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const attorney = attorneys.find((item) => item.slug === slug)
  const attorneyName = attorney ? attorney.name : t('pages.attorneyDetail.notFound')

  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <AttorneysDetailHeroSection />
      </div>

      <div className="-mt-[150vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 w-full pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.72fr] xl:grid-cols-[1fr_0.9fr] items-end gap-12">
            <div className="pb-6">
              <p className="text-white/80 mt-4 text-sm md:text-base">
                {t('pages.attorneys.breadcrumb')} | {attorneyName}
              </p>
              <h1 className="mt-3 text-white text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-light leading-tight max-w-3xl">
                {attorneyName}
              </h1>
              <p className="text-white/80 mt-4 text-sm md:text-base">
                {attorney ? attorney.role : t('pages.attorneyDetail.na')}
              </p>
            </div>

            <div className="hidden lg:flex justify-between items-end self-end -mb-[6rem] xl:-mb-[7.5rem]">
              {attorney?.image && (
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="h-[22rem] xl:h-[24rem] w-auto object-contain object-bottom"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">
        <div className="overflow-visible">
          <AttorneysDetailAboutMeSection attorney={attorney} />
          <AttorneysDetailPracticeAreaContactSection attorney={attorney} />
          <AttorneysDetailPeopleSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
