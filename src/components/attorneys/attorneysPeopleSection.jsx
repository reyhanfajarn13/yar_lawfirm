import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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

export default function AttorneysPeopleSection() {
  return (
    <section className="relative z-20 -mt-[170px] pb-8 md:-mt-[260px] md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#f0f1f2] px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2.1rem] font-medium leading-tight text-[#2f343c]">
            Our Attorneys
          </h2>
          <p className="mt-1 text-[#454a52] text-base">
            Showing {attorneys.length} attorney profile(s).
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {attorneys.map((attorney) => (
              <Link key={attorney.id} to={`/attorneys/${attorney.slug}`} className="group block">
                <article className="relative h-[290px] md:h-[305px] overflow-hidden bg-[#1f2126]">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171c] via-[#16171cbf] to-[#16171c14]" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <ArrowRight className="mb-3 h-7 w-7 text-white" />
                    <h3 className="text-[1.02rem] font-semibold leading-relaxed text-white">
                      {attorney.name}
                    </h3>
                    <p className="mt-2 text-[1.05rem] text-[#ff5757]">{attorney.role}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
