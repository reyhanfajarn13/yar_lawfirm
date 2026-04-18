import { Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function FloatingWhatsAppButton({
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
}) {
  const { t } = useTranslation()
  const message = t('floatingWhatsapp.message')
  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const href = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('floatingWhatsapp.ariaLabel')}
      className="fixed bottom-6 right-6 z-[90] block h-[84px] w-[84px] rounded-full bg-[#25D366] p-[6px] shadow-[0_8px_20px_rgba(15,23,42,0.3)] transition-transform duration-200 hover:scale-105"
    >
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white">
        <span className="absolute bottom-2 left-3 h-4 w-4 rotate-45 bg-white" />
        <Phone className="relative z-10 h-8 w-8 text-[#25D366]" strokeWidth={3} />
      </div>
    </a>
  )
}
