const HERO_BG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80'

export default function HeroSection() {
  return (
    <section className="relative h-full">
      {/* Background Image */}
      <img
        src={HERO_BG}
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </section>
  )
}
