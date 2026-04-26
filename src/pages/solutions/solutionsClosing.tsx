import { useTranslation } from 'react-i18next'
import FadeIn from '../../components/fadeIn';

const SolutionsClosing = () => {
  const { t } = useTranslation()

  return (
    <main className="w-full bg-white px-6 py-24 border-t border-gray-100">
      <section className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <FadeIn>
          <section className="flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('solutions_closing.title')}</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">{t('solutions_closing.description')}</p>
            
            <a href="https://calendly.com/liza-telagri/30min?preview_source=et_card" target="_blank" rel="noreferrer" className="mt-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('solutions_closing.cta')}</a>
          </section>
        </FadeIn>

      </section>
    </main>
  )
}

export default SolutionsClosing;