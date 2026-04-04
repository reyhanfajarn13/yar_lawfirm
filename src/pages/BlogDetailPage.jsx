import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { articles } from '../data/articles'
import CTASection from '../components/home/CTASection'
import BlogDetailHeroSection from '../components/blog-detail/blogDetailHeroSection'
import BlogDetailContentSection from '../components/blog-detail/blogDetailContentSection'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  return (
    <>
      <Navbar />
      <div className="sticky top-0 z-0 h-screen">
              <BlogDetailHeroSection />
            </div>
      
            <div className="-mt-[135vh] mb-[25vh] h-screen relative z-[5] flex items-end pointer-events-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full pointer-events-auto">
                <p className="text-white/80 mt-4 max-w-2xl text-base md:text-md">
                  Home | Blog | {article ? article.title : 'Article Not Found'}
                </p>
                <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-light leading-tight max-w-7xl">
                  {article ? article.title : 'Article Not Found'}
                </h1>
                <p className="text-white/80 mt-4 max-w-2xl text-base md:text-md">
                  {article ? article.date : 'N/A'} | {article ? article.author : 'Unknown Author'}
                </p>
              </div>
            </div>
      
            <div className="relative z-10 -mt-20 shadow-2xl">
      
              <div className="overflow-visible">
                <BlogDetailContentSection article={article} />
              </div>
      
              <div className="bg-dark">
                <CTASection />
                <Footer />
              </div>
            </div>
    </>
  )
}
