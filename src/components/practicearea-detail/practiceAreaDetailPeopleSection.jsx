import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'

import { attorneys } from '../../data/attorneys'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function AttorneysDetailPeopleSection({ currentSlug }) {
  const swiperRef = useRef(null)

  const otherAttorneys = useMemo(() => {
    if (!currentSlug) return attorneys
    return attorneys.filter((item) => item.slug !== currentSlug)
  }, [currentSlug])

  const handlePrev = () => {
    if (!swiperRef.current) return
    swiperRef.current.slidePrev()
  }

  const handleNext = () => {
    if (!swiperRef.current) return
    swiperRef.current.slideNext()
  }

  if (otherAttorneys.length === 0) return null

  return (
    <section className="bg-dark pb-10 md:pb-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="relative bg-[#ffffff] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.08)] after:pointer-events-none after:absolute after:bottom-0 after:left-full after:top-0 after:w-screen after:bg-[#ffffff] after:content-['']">
          <div className="mb-5 flex items-start justify-between gap-6">
            <div>
              <Dots />
              <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
                Meet Other Attorney
              </h2>
              <p className="mt-2 text-sm text-[#4a5059]">
                Our experienced attorneys are ready to help you
              </p>
            </div>

            <div className="hidden md:flex gap-2">
              <button
                type="button"
                aria-label="Previous attorney"
                onClick={handlePrev}
                className="flex h-8 w-8 items-center justify-center border border-[#5a6068] text-[#3b4048] transition-colors hover:bg-[#3b4048] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next attorney"
                onClick={handleNext}
                className="flex h-8 w-8 items-center justify-center border border-[#5a6068] text-[#3b4048] transition-colors hover:bg-[#3b4048] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden pr-[100vw] -mr-[100vw]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView="auto"
            spaceBetween={12}
            speed={600}
            className="!overflow-visible"
          >
            {otherAttorneys.map((attorney) => (
              <SwiperSlide key={attorney.id} className="!w-[255px] md:!w-[290px]">
                <Link to={`/attorneys/${attorney.slug}`} className="group block">
                  <article className="relative h-[238px] md:h-[250px] overflow-hidden bg-[#1f2126]">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="absolute inset-0 h-full w-full object-contain object-top opacity-85 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-[#16171c] via-[#16171cbf] to-transparent" />

                    <div className="absolute bottom-3 left-4 right-4">
                      <ArrowRight className="mb-2 h-6 w-6 text-white" />
                      <h3 className="text-[0.86rem] font-medium leading-relaxed text-white">
                        {attorney.name}
                      </h3>
                      <p className="mt-1 text-[0.9rem] text-[#ff5757]">{attorney.role}</p>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </article>
      </div>
    </section>
  )
}
