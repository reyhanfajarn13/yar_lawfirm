import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Mail, Menu, X } from 'lucide-react'
import { ID, US } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'
import redIconYarlaw from '../../assets/icons/red-icon-yarlaw.png'
import whiteIconYarlaw from '../../assets/icons/white-icon-yarlaw.png'

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'practiceAreas', path: '/practice-areas' },
  { key: 'attorneys', path: '/attorneys' },
  { key: 'blog', path: '/blog' },
]

const LANGUAGE_OPTIONS = {
  id: { code: 'ID', labelKey: 'navbar.language.indonesia', Flag: ID },
  en: { code: 'EN', labelKey: 'navbar.language.english', Flag: US },
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const languageMenuRef = useRef(null)
  const location = useLocation()

  const language = i18n.language?.startsWith('en') ? 'en' : 'id'
  const isHomePage = location.pathname === '/'
  const logoSrc = isHomePage || scrolled ? redIconYarlaw : whiteIconYarlaw
  const ActiveLanguageFlag = LANGUAGE_OPTIONS[language].Flag

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!languageOpen) return

    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [languageOpen])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="YAR Law Firm"
            className="h-12 w-auto object-contain"
            loading="lazy"
          />
        </Link>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => {
                  setMobileOpen(false)
                  setLanguageOpen(false)
                }}
                className={`pb-1 transition-colors ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'border-b-2 border-[#8B0000] text-primary'
                      : 'border-b-2 border-[#8B0000] text-white'
                    : scrolled
                      ? 'text-secondary hover:text-primary'
                      : 'text-white hover:text-white hover:border-b-2 border-[#8B0000]'
                }`}
              >
                {t(`navbar.links.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
              aria-label={t('navbar.language.select')}
              aria-expanded={languageOpen}
            >
              <span className="flex h-3.5 w-5 overflow-hidden rounded-[2px]" aria-hidden="true">
                <ActiveLanguageFlag className="h-full w-full object-cover" />
              </span>
              <span>{LANGUAGE_OPTIONS[language].code}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${languageOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border border-[#d9dee5] bg-white p-1.5 shadow-lg">
                {Object.entries(LANGUAGE_OPTIONS).map(([key, option]) => {
                  const OptionFlag = option.Flag
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        i18n.changeLanguage(key)
                        setLanguageOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors ${
                        language === key
                          ? 'bg-[#f3f5f7] text-primary'
                          : 'text-[#444b55] hover:bg-[#f3f5f7]'
                      }`}
                    >
                      <span className="flex h-3.5 w-5 overflow-hidden rounded-[2px]" aria-hidden="true">
                        <OptionFlag className="h-full w-full object-cover" />
                      </span>
                      <span>{t(option.labelKey)}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <a
            href="mailto:lawfirmyar@gmail.com"
            aria-label={t('navbar.emailAria')}
            className="hidden sm:block"
          >
            <Mail className={`w-5 h-5 cursor-pointer ${scrolled ? 'text-primary' : 'text-white'}`} />
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden cursor-pointer">
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => {
                    setMobileOpen(false)
                    setLanguageOpen(false)
                  }}
                  className={`block px-6 py-3 text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-primary bg-light-gray'
                      : 'text-secondary hover:bg-light-gray'
                  }`}
                >
                  {t(`navbar.links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
