import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'

import { attorneys } from '../../data/attorneys'

export default function AttorneySection() {
  const swiperRef = useRef(null)

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-56 bg-[#2f3134]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#f1f2f3] px-5 py-8 md:px-10 md:py-10 after:pointer-events-none after:absolute after:bottom-0 after:left-full after:top-0 after:w-screen after:bg-[#f1f2f3]">
          <div className="mb-8 flex items-center justify-between md:mb-10">
            <h2 className="text-4xl font-medium leading-tight text-[#2e3239] md:text-[3.15rem]">
              Our Expert Attorney
            </h2>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous attorney"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-12 w-12 items-center justify-center border border-[#383d44] text-[#30353c] transition-colors hover:bg-[#30353c] hover:text-white"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                type="button"
                aria-label="Next attorney"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-12 w-12 items-center justify-center border border-[#383d44] text-[#30353c] transition-colors hover:bg-[#30353c] hover:text-white"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>

          <div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              slidesPerView="auto"
              spaceBetween={24}
              speed={650}
              className="!overflow-visible"
            >
              {attorneys.map((attorney) => (
                <SwiperSlide key={attorney.id} className="!w-[305px] md:!w-[360px]">
                  <Link to={`/attorneys/${attorney.slug}`} className="group block">
                    <article className="relative h-[430px] overflow-hidden bg-[#1f2126]">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16171c] via-[#16171cbf] to-[#16171c14]" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <ArrowRight className="mb-4 h-8 w-8 text-white" />
                        <h3 className="text-[1.08rem] font-light leading-relaxed text-white md:text-[1.1rem]">
                          {attorney.name}
                        </h3>
                        <p className="mt-1 text-[1rem] font-light text-[#ff5757]">{attorney.role}</p>
                      </div>
                    </article>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
