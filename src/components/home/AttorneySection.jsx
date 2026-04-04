import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import 'swiper/css'

import SectionLabel from '../ui/SectionLabel'
import ArrowButton from '../ui/ArrowButton'
import { attorneys } from '../../data/attorneys'

export default function AttorneySection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionLabel />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Expert Attorney</h2>
            <p className="text-secondary mt-2">
              Our experienced attorneys are ready to help you
            </p>
          </div>
          <div className="flex gap-2">
            <ArrowButton direction="left" ref={prevRef} />
            <ArrowButton direction="right" ref={nextRef} />
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          {attorneys.map((attorney) => (
            <SwiperSlide key={attorney.id}>
              <Link to={`/attorneys/${attorney.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-primary leading-snug">
                  {attorney.name}
                </h3>
                <p className="text-sm text-accent mt-1">{attorney.role}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
