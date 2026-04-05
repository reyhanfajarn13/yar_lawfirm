function Dots() {
  return (
    <div className="flex items-center gap-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
      ))}
    </div>
  )
}

export default function AttorneysDetailAboutMeSection({ attorney }) {
  if (!attorney) {
    return (
      <section className="relative z-20 -mt-[6rem] pb-8 md:-mt-[7.5rem] md:pb-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[6rem] bg-white md:top-[7.5rem]" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-[#ffffff] px-6 py-8 md:px-8 md:py-9 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
            <h2 className="text-2xl font-medium text-[#2f343c]">Attorney not found</h2>
          </article>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-20 -mt-[6rem] pb-8 md:-mt-[7.5rem] md:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[6rem] bg-white md:top-[7.5rem]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-8 md:py-9 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <Dots />

          <h2 className="mt-4 text-2xl md:text-[2rem] font-medium leading-tight text-[#2f343c]">
            About Me
          </h2>

          <p className="mt-4 text-[0.98rem] md:text-[1.03rem] leading-relaxed text-[#3d424a] max-w-6xl">
            {attorney["about-me"]}
          </p>
        </article>
      </div>
    </section>
  )
}
