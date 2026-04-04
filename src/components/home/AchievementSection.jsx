import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import 'swiper/css'

import SectionLabel from '../ui/SectionLabel'
import ArrowButton from '../ui/ArrowButton'
import { achievements } from '../../data/achievements'

const TEXT_W = 280
const IMG_W = 420

export default function AchievementSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // After React re-renders with new slide widths, tell Swiper to recalculate
  useEffect(() => {
    if (!swiperRef.current) return
    requestAnimationFrame(() => {
      swiperRef.current?.update()
    })
  }, [activeIndex])

  return (
    <section className="ml-[20%] py-16 md:py-20 overflow-hidden bg-white">
      {/* Header inside max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Achievement</h2>
          </div>
          <div className="flex gap-2">
            <ArrowButton direction="left" ref={prevRef} />
            <ArrowButton direction="right" ref={nextRef} />
          </div>
        </div>
      </div>

      {/* Carousel — extends beyond container edges (bleed effect) */}
      <Swiper
        onSwiper={(s) => { swiperRef.current = s }}
        modules={[Navigation, Autoplay]}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={8}
        speed={500}
        rewind
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        onInit={(s) => {
          s.params.navigation.prevEl = prevRef.current
          s.params.navigation.nextEl = nextRef.current
          s.navigation.init()
          s.navigation.update()
        }}
        style={{ overflow: 'visible' }}
      >
        {achievements.map((item, idx) => {
          const isActive = idx === activeIndex

          return (
            <SwiperSlide
              key={item.id}
              style={{
                width: isActive ? TEXT_W + IMG_W : TEXT_W,
                transition: 'width 0.5s ease',
                flexShrink: 0,
              }}
            >
              <div className="flex" style={{ height: 420 }}>
                {/* Dark text panel */}
                <div
                  className="flex flex-col justify-between p-8 flex-shrink-0"
                  style={{
                    width: TEXT_W,
                    backgroundColor: '#111827',
                    borderBottom: '4px solid #c0392b',
                  }}
                >
                  <h3 className="text-white font-bold text-base leading-snug">
                    {item.title}
                  </h3>

                  <div>
                    {/* Description — slides in/out */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isActive ? '120px' : '0px',
                        opacity: isActive ? 1 : 0,
                        marginBottom: isActive ? '20px' : '0px',
                      }}
                    >
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow button */}
                    <button className="w-10 h-10 border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Image panel — expands into view when active */}
                <div
                  className="flex-shrink-0 overflow-hidden transition-all duration-500"
                  style={{ width: isActive ? IMG_W : 0 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover"
                    style={{ width: IMG_W }}
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
