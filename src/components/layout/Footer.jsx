import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import redIconYarlaw from '../../assets/icons/red-icon-yarlaw.png'
import { practiceAreas } from '../../data/practiceAreas'

const quickLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'practiceAreas', path: '/practice-areas' },
  { key: 'attorneys', path: '/attorneys' },
  { key: 'blog', path: '/blog' },
]

const practiceAreaFooterSlugs = [
  'bankruptcy-suspension-debt-payment',
  'business-activity-assistance',
  'commercial-litigation',
  'construction',
  'corporate-crime',
  'employment-dispute',
]

const practiceAreaLinks = practiceAreaFooterSlugs
  .map((slug) => practiceAreas.find((area) => area.slug === slug))
  .filter(Boolean)

export default function Footer({
  phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6287877540196',
}) {
  const { t } = useTranslation()

  const cleanedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const waMessage = t('cta.whatsappMessage')
  const waHref = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(waMessage)}`
  const igHref = 'https://www.instagram.com/yarlawfirm/'

  return (
    <footer className="bg-white text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src={redIconYarlaw}
                alt="YAR Law Firm"
                className="h-12 w-auto -mt-[1rem] object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">{t('footer.companyDescription')}</p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent" />
                <span>
                  Menara Kuningan Floor 8D, Jl. H. R. Rasuna Said No.Kav 5, RT.6/RW.7, Kuningan,
                  Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota
                  Jakarta 12940
                </span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>{t('footer.phoneVolta')}</p>
                  <p>{t('footer.phoneThareq')}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>lawfirmyar@gmail.com</p>
                  <p>yudha_advokat@yahoo.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{t('footer.workHours')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-primary mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {t(`navbar.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-primary mb-4">{t('footer.practiceArea')}</h3>
            <ul className="space-y-3">
              {practiceAreaLinks.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#8B0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-primary">{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <IoLogoWhatsapp className="w-4 h-4 text-[#25D366]" />
            </a>
            <a
              href={igHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <IoLogoInstagram className="w-4 h-4 text-[#E4405F]" />
            </a>
            <a
              href="https://www.linkedin.com/company/yar-law-firm-attorneys-at-law/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="w-4 h-4 text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
