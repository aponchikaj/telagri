import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import FadeIn from '../../components/fadeIn';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 px-6 bg-white">
        <section className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">{t('final_cta.tagline')}</h2>
            </FadeIn>

            <FadeIn>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">{t('final_cta.description')}</p>
            </FadeIn>

            <FadeIn>
                <Link to="/solutions" className="mt-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('final_cta.button')}</Link>
            </FadeIn>
        </section>
    </section>
  )
}

export default FinalCTA