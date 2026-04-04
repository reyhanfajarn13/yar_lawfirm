import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import 'swiper/css'

import ArrowButton from '../ui/ArrowButton'
import { articles } from '../../data/articles'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=1200&q=80'

function parseArticleDate(value) {
  const parsed = new Date(value)
  const timestamp = parsed.getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function excerptPreview(text, maxChars = 120) {
  if (!text || text.length <= maxChars) return text
  return `${text.slice(0, maxChars).trimEnd()}...`
}

function titlePreview(text, maxChars = 52) {
  if (!text || text.length <= maxChars) return text
  return `${text.slice(0, maxChars).trimEnd()}...`
}

export default function BlogArticlesSection() {
  const swiperRef = useRef(null)

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      const dateDiff = parseArticleDate(b.date) - parseArticleDate(a.date)
      if (dateDiff !== 0) return dateDiff
      return b.id - a.id
    })
  }, [])

  const handlePrev = () => {
    if (!swiperRef.current) return
    swiperRef.current.slidePrev()
    swiperRef.current.autoplay.start()
  }

  const handleNext = () => {
    if (!swiperRef.current) return
    swiperRef.current.slideNext()
    swiperRef.current.autoplay.start()
  }

  return (
    <section className="relative z-20 -mt-[170px] pb-8 md:-mt-[260px] md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="px-6 py-8 md:px-10 md:py-10">
          <div className="mb-6 flex items-center justify-end">
            <div className="flex gap-2">
              <ArrowButton direction="left" onClick={handlePrev} />
              <ArrowButton direction="right" onClick={handleNext} />
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            loop
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 22 },
            }}
          >
            {sortedArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <article className="bg-[#ffffff] border border-[#d7dde5] shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
                  <div className="h-[190px] overflow-hidden">
                    <img
                      src={article.image || FALLBACK_IMAGE}
                      alt={article.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-4 py-4">
                    <div className="flex items-center gap-2 text-[0.72rem] text-[#555b64]">
                      <span>{article.date}</span>
                      <span className="text-[#d10010]">&middot;</span>
                      <span>Admin</span>
                    </div>

                    <h3 className="mt-3 text-[1.05rem] md:text-[1.12rem] font-medium leading-snug text-[#31363f]">
                      {titlePreview(article.title)}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#4b515a] min-h-[68px]">
                      {excerptPreview(article.excerpt)}
                    </p>

                    <Link
                      to={`/blog/${article.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[#2f343c] hover:text-[#8b0000] transition-colors"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>
    </section>
  )
}
