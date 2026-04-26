import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../../components/fadeIn'

const stats = [
    { key: 'farms' },
    { key: 'dataPoints' },
    { key: 'countries' },
]

const Hero = () => {
    const { t } = useTranslation()

    return (
        <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-24">
            <section className="max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-8">
                <FadeIn>
                    <h1 className=" text-3xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight max-w-3xl">{t('hero.titleStart')}{' '}<span className="">{t('hero.titleHighlight')}</span></h1>
                </FadeIn>

                <FadeIn>
                    <p className=" text-gray-400 text-sm md:text-md max-w-xl leading-relaxed text-center">{t('hero.tagline')}</p>
                </FadeIn>

                <FadeIn>
                    <section className="flex  flex-col sm:flex-row gap-3">
                        <Link to="/solutions" className="px-7 py-3 bg-green-600 text-white text-sm font-semibold rounded-xl hover:shadow-2xl hover:bg-green-700 hover:scale-105 transition-all">{t('hero.cta1')}</Link>
                        <Link to="/contact" className="px-7 py-3 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:shadow-2xl hover:bg-gray-200 hover:scale-105 transition-all">{t('hero.cta2')}</Link>
                    </section>
                </FadeIn>

                <FadeIn className='w-full flex justify-center'>
                    <section className=" mt-8 w-full max-w-2xl flex flex-col md:flex-row divide-gray-100 rounded-2xl gap-3 overflow-hidden items-center justify-center w-full">
                        {stats.map((s) => (

                            <section key={s.key} className="flex flex-col items-center gap-1 py-6 px-4 bg-gray-50 rounded-2xl transition-all hover:border hover:border-gray-100">
                                <span className="text-2xl font-bold text-gray-900">{t(`hero.stats.${s.key}.value`)}</span>
                                <span className="text-xs text-gray-400 text-center">{t(`hero.stats.${s.key}.label`)}</span>
                            </section>
                        ))}
                    </section>
                </FadeIn>
            </section>
        </section>
    )
}

export default Hero