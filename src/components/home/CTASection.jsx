import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function CTASection(
  {
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
  message = 'Halo, saya ingin melakukan konsultasi hukum dengan YAR Lawfirm. Mohon informasi lebih lanjut mengenai prosedur dan jadwal konsultasinya. Terima kasih.',
}

) {
  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const href = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-16 md:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          Need Legal Assistance? Contact Us Today!
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Schedule a free consultation with our experienced attorneys to discuss your legal needs.
        </p>
        <Button variant="outline-white" href={href} target="_blank" rel="noopener noreferrer">
          Contact us now
        </Button>
      </div>
    </section>
  )
}
