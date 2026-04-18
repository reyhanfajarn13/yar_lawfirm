import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CTASection from '../components/home/CTASection'
import BlogHeroSection from '../components/blog/blogHeroSection'
import BlogArticlesSection from '../components/blog/blogArticlesSection'
import { useTranslation } from 'react-i18next'

export default function BlogPage() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      <div className="sticky top-0 z-0 h-screen">
        <BlogHeroSection />
      </div>

      <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            {t('pages.blog.breadcrumb')}
          </p>
          <h1 className="text-white text-7xl md:text-6xl lg:text-7xl font-thin tracking-widest leading-tight max-w-2xl">
            {t('pages.blog.title')}
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg">
            {t('pages.blog.description')}
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-20 shadow-2xl">

        <div className="bg-white">
          <BlogArticlesSection />
        </div>

        <div className="bg-dark">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
