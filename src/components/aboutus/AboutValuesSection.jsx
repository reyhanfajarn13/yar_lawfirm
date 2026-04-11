import { Scale, ShieldCheck, Star, Users, Handshake } from 'lucide-react'

const missionItems = [
  {
    id: 1,
    title: 'Client Advocacy',
    description:
      "Zealously representing our clients' interests and rights while providing personalized attention to their unique legal needs.",
    icon: Handshake,
  },
  {
    id: 2,
    title: 'Legal Excellence',
    description:
      'Delivering the highest quality legal services through thorough research, strategic thinking, and effective advocacy.',
    icon: Scale,
  },
  {
    id: 3,
    title: 'Community Impact',
    description:
      'Contributing to the betterment of our community through pro bono work and community involvement.',
    icon: Users,
  },
]

const valueItems = [
  {
    id: 1,
    title: 'Integrity',
    description:
      'We adhere to the highest ethical standards in all our dealings, ensuring transparency and honesty in every client relationship.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Respect',
    description:
      'We treat our clients, colleagues, and opponents with dignity and respect, fostering positive professional relationships.',
    icon: Handshake,
  },
  {
    id: 3,
    title: 'Excellence',
    description:
      'We are committed to delivering exceptional legal services and continuously improving our skills and knowledge.',
    icon: Star,
  },
  {
    id: 4,
    title: 'Collaboration',
    description:
      'We work together as a team, leveraging our collective expertise to achieve the best possible outcomes for our clients.',
    icon: Users,
  },
]

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

function ValueItem({ item }) {
  const Icon = item.icon

  return (
    <article className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#9f0000]" />
      <div>
        <h3 className="text-[1rem] md:text-[1.25rem] font-medium text-[#8b0000]">
          {item.title}
        </h3>
        <p className="mt-2 text-[0.8rem] md:text-[1rem] leading-relaxed text-primary">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default function AboutValuesSection() {
  return (
    <section className="bg-[#e6eaee]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.38fr] gap-6 lg:gap-7 items-stretch">
          <article className="bg-[#ffffff] p-8 md:p-12 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
            <Dots />
            <h2 className="mt-5 text-2xl md:text-[2rem] font-medium leading-tight text-primary">
              Our Mission
            </h2>

            <div className="mt-8 space-y-8">
              {missionItems.map((item) => (
                <ValueItem key={item.id} item={item} />
              ))}
            </div>
          </article>

          <article className="bg-[#ffffff] p-8 md:p-12 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
            <Dots />
            <h2 className="mt-5 text-2xl md:text-[2rem] font-medium leading-tight text-primary">
              Our Values
            </h2>

            <div className="mt-8 space-y-7">
              {valueItems.map((item) => (
                <ValueItem key={item.id} item={item} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
