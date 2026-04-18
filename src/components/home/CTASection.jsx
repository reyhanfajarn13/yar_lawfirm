import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'

export default function CTASection(
  {
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
}

) {
  const { t } = useTranslation()
  const message = t('cta.whatsappMessage')
  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const href = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-16 md:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel />
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          {t('cta.description')}
        </p>
        <Button variant="outline-white" href={href} target="_blank" rel="noopener noreferrer">
          {t('cta.button')}
        </Button>
      </div>
    </section>
  )
}
