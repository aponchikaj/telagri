import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ka from './locales/ka.json'
import ru from './locales/ru.json'

const supportLanguagess = ['en', 'ka', 'ru']
const browserLanguage = navigator.language.split('-')[0]
const detectedLang = supportLanguagess.includes(browserLanguage) ? browserLanguage : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
    ru: { translation: ru },
  },
  lng: detectedLang,
  fallbackLng: 'en',
})

export default i18n