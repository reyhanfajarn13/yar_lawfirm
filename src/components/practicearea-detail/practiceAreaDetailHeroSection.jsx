const PRACTICE_AREA_DETAIL_HERO_BG =
  'https://ik.imagekit.io/mindwalker/yarlawfirm/background-asset/grey-clear-hero-bg.webp'

export default function PracticeAreaDetailHeroSection() {
  return (
    <section className="relative h-full">
      <img
        src={PRACTICE_AREA_DETAIL_HERO_BG}
        alt="Law firm office exterior"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
    </section>
  )
}
