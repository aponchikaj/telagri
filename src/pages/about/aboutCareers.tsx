import { useTranslation } from 'react-i18next'
import FadeIn from '../../components/fadeIn';

const AboutCareers = () => {
  const { t } = useTranslation()

  return (
    <main className="w-full bg-gray-50 px-6 py-24">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">

        <section className="flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('about_careers.headline')}</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl">{t('about_careers.description')}</p>
          </FadeIn>

          <FadeIn delay={0.2}>

            <section className="flex flex-wrap gap-2">
              {['tag1', 'tag2', 'tag3', 'tag4'].map((key) => (

                <span key={key} className="text-xs font-medium text-gray-600 bg-white border border-gray-100 px-3 py-1.5 rounded-full">{t(`about_careers.tags.${key}`)}</span>
              
              ))}
            </section>
          </FadeIn>

          <FadeIn delay={0.25}>
            
            <a href="mailto:careers@telagri.com" className="self-start px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('about_careers.cta')}</a>
          </FadeIn>
          
        </section>
      </section>
    </main>
  )
}

export default AboutCareers