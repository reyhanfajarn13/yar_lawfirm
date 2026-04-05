import { Briefcase, BadgeDollarSign, Scale, Users } from 'lucide-react'

const JOIN_TEAM_IMAGE = {
  src: 'https://ik.imagekit.io/mindwalker/yarlawfirm/attorneys-joinus-asset.png',
  alt: 'Join our team',
}

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[4px] w-[4px] rounded-full bg-white/90" />
      ))}
    </div>
  )
}

export default function AttorneysJoinOurTeamSection() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#2f3135] px-6 py-8 md:px-10 md:py-10 shadow-[0_12px_28px_rgba(15,23,42,0.24)]">
          <Dots />

          <h2 className="mt-4 text-2xl md:text-[2.1rem] font-medium leading-tight text-white">
            Join Our Team
          </h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[0.72fr_1fr] gap-6 md:gap-8 items-start">
            <div className="overflow-hidden">
              <div className="relative w-full h-[16rem] sm:h-[18rem] lg:h-[18rem]">
                <img
                  src={JOIN_TEAM_IMAGE.src}
                  alt={JOIN_TEAM_IMAGE.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <p className="text-white/90 text-[1.03rem] leading-relaxed">
                YAR Law Firm is always looking for talented legal professionals to join our team. We
                offer a collaborative work environment, competitive benefits, and opportunities for
                professional growth and development.
              </p>

              <h3 className="mt-6 text-3xl font-medium text-white">Why Work With Us?</h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-white/95">
                  <Briefcase className="h-4 w-4 text-white" />
                  <span>Professional Development</span>
                </div>
                <div className="flex items-center gap-3 text-white/95">
                  <BadgeDollarSign className="h-4 w-4 text-white" />
                  <span>Competitive Compensation</span>
                </div>
                <div className="flex items-center gap-3 text-white/95">
                  <Scale className="h-4 w-4 text-white" />
                  <span>Work-Life Balance</span>
                </div>
                <div className="flex items-center gap-3 text-white/95">
                  <Users className="h-4 w-4 text-white" />
                  <span>Collaborative Environment</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
