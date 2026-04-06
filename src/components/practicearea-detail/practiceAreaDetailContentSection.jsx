import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { practiceAreas } from '../../data/practiceAreas'

function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

const DEFAULT_HELP_LIST = [
  'Personalized Legal Strategy',
  'Clear Communication',
  'Skilled Representation',
  'Proven Results',
]

export default function PracticeAreaDetailContentSection({ practiceArea }) {
  const helpItems = practiceArea?.howWeCanHelpYou?.length
    ? practiceArea.howWeCanHelpYou
    : DEFAULT_HELP_LIST

  return (
    <section className="relative z-20 -mt-[6rem] pb-10 md:-mt-[7.5rem] md:pb-12">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[6rem] bg-[#ffffff] md:top-[7.5rem]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-5 md:gap-6">
          <article className="bg-[#F1F4F6] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.1)]">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              Our Story
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#434a54]">
              {practiceArea?.excerpt || 'Practice area details are not available yet.'}
            </p>
          </article>

          <article className="bg-[#F1F4F6] px-6 py-7 md:px-8 md:py-8 shadow-[0_8px_20px_rgba(15,23,42,0.1)]">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              How Can We Help You
            </h2>

            <ul className="mt-5 space-y-2.5">
              {helpItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#404751] text-sm md:text-[0.95rem]">
                  <span className="mt-1.5 h-[7px] w-[7px] rounded-full bg-[#a00000] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center border border-[#a00000] px-4 py-2 text-[0.68rem] font-semibold tracking-wide text-[#a00000] hover:bg-[#a00000] hover:text-white transition-colors"
            >
              SCHEDULE A CONSULTATION
            </button>
          </article>
        </div>

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_0.36fr] gap-5 md:gap-6 items-start">
          <article className="px-1 md:px-0">
            <Dots />
            <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
              Request a Consultation
            </h2>
            <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-[#434a54]">
              Share your legal issue with us and our team will contact you with a clear strategy
              tailored to your business and dispute context.
            </p>

            <form className="mt-5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
                <div className="space-y-3.5">
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border border-[#cfd6de] bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">Email Address</label>
                    <input
                      type="email"
                      placeholder="John Doe"
                      className="w-full border border-[#cfd6de] bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">Phone Number</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border border-[#cfd6de] bg-[#f3f5f7] px-3 py-2 text-sm outline-none focus:border-[#8b0000]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[0.75rem] font-semibold text-[#2f343c]">
                    Brief Description of Your Case
                  </label>
                  <textarea
                    rows={8}
                    placeholder="Brief your legal issue here so we can better understand how to assist you."
                    className="h-full min-h-[11.6rem] w-full border border-[#cfd6de] bg-[#f3f5f7] px-3 py-2 text-sm outline-none resize-none focus:border-[#8b0000]"
                  />
                </div>
              </div>

              <label className="mt-4 inline-flex items-center gap-2 text-sm text-[#2f343c]">
                <input type="checkbox" defaultChecked className="accent-[#8b0000]" />
                <span>I agree to the privacy policy</span>
              </label>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center border border-[#8b0000] bg-transparent px-4 py-2 text-[0.7rem] font-semibold tracking-wide text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-colors"
                >
                  SUBMIT REQUEST
                </button>
              </div>
            </form>
          </article>

          <article className="bg-[#08264a] px-5 py-6 md:px-6 md:py-7 text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)]">
            <h3 className="text-2xl font-medium">Our Expertise</h3>
            <ul className="mt-4 space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="inline-flex items-start gap-2 text-white/90 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-snug">{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

