export default function SectionLabel() {
  return (
    <div className="flex gap-1.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-accent" />
      ))}
    </div>
  )
}
