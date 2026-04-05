const STORY_IMAGE =
  'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/aboutus-ourstory-asset.webp'

export default function AboutStorySection() {
  return (
    <section className="relative z-20 -mt-[170px] pb-16 md:-mt-[260px] md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ededee] px-6 py-8 md:px-12 md:py-10 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
            ))}
          </div>

          <h2 className="mt-5 text-4xl md:text-[3rem] font-medium leading-tight text-[#2c3138]">
            Our Story
          </h2>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] gap-6 lg:gap-7 items-start">
            <div className="h-[320px] md:h-[360px] overflow-hidden">
              <img
                src={STORY_IMAGE}
                alt="Law firm office interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 text-[#373d45] text-[1.05rem] leading-relaxed">
              <p>
                Founded in 1998, LawFirmYar has established itself as a trusted name in the legal
                industry. We started as a small practice and have grown into a full-service law firm
                with a team of dedicated attorneys and support staff.
              </p>
              <p>
                Our firm was built on the foundation of providing exceptional legal representation to
                individuals, businesses, and organizations who face complex legal challenges. Over the
                years, we have successfully handled thousands of cases and have earned a reputation for
                our professionalism, integrity, and results-driven approach.
              </p>
              <p>
                Today, we continue to uphold our founding principles while adapting to meet the evolving
                needs of our clients in an increasingly complex legal landscape. Our commitment to
                excellence and client satisfaction remains unwavering as we work tirelessly to protect
                our clients&apos; rights and interests.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
