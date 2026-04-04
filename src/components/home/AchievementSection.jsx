import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import 'swiper/css'

import SectionLabel from '../ui/SectionLabel'
import ArrowButton from '../ui/ArrowButton'
import { achievements } from '../../data/achievements'

const TEXT_W = 280
const IMG_W = 420

export default function AchievementSection() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
    <section className="ml-[10%] py-16 md:py-20 overflow-hidden bg-white">
      {/* Header inside max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Achievement</h2>
          </div>
          <div className="flex gap-1">
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>
      </div>

      {/* Carousel — extends beyond container edges (bleed effect) */}
      <Swiper
        onSwiper={(s) => {
          swiperRef.current = s
          setActiveIndex(s.realIndex) // sync initial active index
        }}
        modules={[Autoplay]}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={8}
        speed={600}
        loop
        loopAdditionalSlides={2}
        initialSlide={0}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChangeTransitionEnd={(s) => {
          setActiveIndex(s.realIndex)
          s.update()
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
