import { Scale, ShieldCheck, Users } from 'lucide-react'

const reasons = [
  {
    id: 1,
    title: 'Experienced Attorneys',
    description:
      'Our team consists of highly skilled attorneys with extensive experience in their respective practice areas, ensuring expert handling of your legal matters.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Tailored Legal Solutions',
    description:
      "We understand that each client's situation is unique, and we develop customized strategies to address your specific legal needs and objectives.",
    icon: Scale,
  },
  {
    id: 3,
    title: 'Client-Centered Approach',
    description:
      "We prioritize our clients' interests and maintain open communication throughout the legal process, ensuring you're informed and involved every step of the way.",
    icon: ShieldCheck,
  },
]

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function PracticeAreaWhyChooseUseSection() {
  return (
    <section className="bg-[#e6eaee] py-5 md:py-5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
          <Dots />

          <h2 className="mt-5 text-2xl md:text-[2.15rem] font-medium leading-tight text-[#2f343c]">
            Why Choose Our Legal Service
          </h2>
          <p className="mt-2 text-[#454a52] text-base">
            We are dedicated to providing exceptional legal representation
          </p>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon

              return (
                <article key={reason.id}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 flex-shrink-0 text-[#8b0000]" />
                    <h3 className="text-[1.03rem] md:text-[1.1rem] font-semibold text-[#8b0000]">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#3f444c]">
                    {reason.description}
                  </p>
                </article>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
