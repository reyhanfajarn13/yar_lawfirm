import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getAboutStory } from '../../data/aboutStory'

const STORY_IMAGE =
  'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/aboutus-ourstory-asset.webp'

export default function AboutStorySection() {
  const { i18n } = useTranslation()
  const story = useMemo(() => getAboutStory(i18n.language), [i18n.language])

  return (
    <section className="relative z-20 -mt-[170px] pb-16 md:-mt-[260px] md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
            ))}
          </div>

          <h2 className="mt-5 text-4xl md:text-[3rem] font-medium leading-tight text-[#2c3138]">
            {story.title}
          </h2>

          <div className="mt-7 h-[320px] md:h-[420px] overflow-hidden">
            <img
              src={STORY_IMAGE}
              alt={story.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-start">
            <div
              className="space-y-5 text-primary text-[1.05rem] leading-relaxed"
              style={{ textAlign: 'justify' }}
            >
              {story.leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div
              className="space-y-5 text-primary text-[1.05rem] leading-relaxed"
              style={{ textAlign: 'justify' }}
            >
              {story.rightParagraphs.map((paragraph, index) => (
                <p key={`right-${index}`}>{paragraph}</p>
              ))}
              <ol className="list-decimal pl-6 space-y-1">
                {story.awards.map((award, index) => (
                  <li key={`award-${index}`}>{award}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
