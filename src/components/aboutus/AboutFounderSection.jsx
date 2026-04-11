import { ShieldCheck, Star } from 'lucide-react'
import { founder } from '../../data/founder'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function AboutFounderSection() {
  return (
    <section className="bg-[#e6eaee] py-8 md:py-10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2rem] font-medium leading-tight text-primary">
            {founder.title}
          </h2>
          

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-9 items-start">
            <div>
              <div className="space-y-5 text-[1rem] leading-relaxed text-[#353a42]">
                {founder.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {founder.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#8b0000]" />
                    <span className="text-[1rem] md:text-[1rem] text-[#2f343c]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden min-h-[260px] md:min-h-[430px]">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <Star className="absolute bottom-5 right-5 h-6 w-6 text-white/90" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
