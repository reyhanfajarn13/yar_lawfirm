const ATTORNEY_HERO_BG =
  'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1800&q=80'

export default function PracticeAreaHeroSection() {
  return (
    <section className="relative h-full">
      <img
        src={ATTORNEY_HERO_BG}
        alt="Law firm office exterior"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
    </section>
  )
}
