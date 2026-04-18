import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import idCommon from './locales/id/common.json'
import enCommon from './locales/en/common.json'

const supportedLanguages = ['id', 'en']

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'id'
  const savedLanguage = window.localStorage.getItem('site-language')
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : 'id'
}

i18n.use(initReactI18next).init({
  resources: {
    id: { common: idCommon },
    en: { common: enCommon },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'id',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
})

if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language
  i18n.on('languageChanged', (language) => {
    window.localStorage.setItem('site-language', language)
    document.documentElement.lang = language
  })
}

export default i18n
