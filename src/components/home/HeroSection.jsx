const HERO_BG = 'https://ik.imagekit.io/mindwalker/yarlawfirm/background-asset/home-hero-bg.webp'

export default function HeroSection() {
  return (
    <section className="relative h-full">
      {/* Background Image */}
      <img
        src={HERO_BG}
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover scale-105 blur-[8px] saturate-75 brightness-75"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </section>
  )
}
