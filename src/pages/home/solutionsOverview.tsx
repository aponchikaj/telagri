import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FadeIn from '../../components/fadeIn'

const SolutionsOverview = () => {
    const { t } = useTranslation()

    return (
        <main className="w-full bg-gray-50 py-24 px-6">
            <section className="max-w-5xl mx-auto flex flex-col gap-12">

                <FadeIn>
                    <h2 className="text-2xl text-center md:text-start md:text-4xl font-bold text-gray-900 max-w-2xl leading-snug">{t('solutions_overview.title')}</h2>
                </FadeIn>
                
                <FadeIn>
                <section className="flex flex-col lg:flex-row gap-4">
                
                    <section className="flex-[2] bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between gap-8 min-h-[320px]">
                        <section className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-gray-900">{t('solutions_overview.card1.title')}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{t('solutions_overview.card1.tagline')}</p>
                        </section>
                        <Link to="/solutions" className="self-start text-sm font-semibold text-green-600 hover:text-green-700 underline underline-offset-4 transition-colors">{t('solutions_overview.card1.cta')}</Link>
                    </section>

                    <section className="flex-1 flex flex-col gap-4">
                        <section className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between gap-6">
                                <section className="flex flex-col gap-3">
                                    <h3 className="text-lg font-bold text-gray-900">{t('solutions_overview.card2.title')}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{t('solutions_overview.card2.tagline')}</p>
                                </section>
                            <Link to="/solutions" className="self-start text-sm font-semibold text-green-600 hover:text-green-700 underline underline-offset-4 transition-colors">{t('solutions_overview.card2.cta')}</Link></section>

                            <section className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between gap-6">

                                <section className="flex flex-col gap-3">
                            
                                    <h3 className="text-lg font-bold text-gray-900">{t('solutions_overview.card3.title')}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('solutions_overview.card3.tagline')}</p>

                                </section>
                                <Link to="/solutions" className="self-start text-sm font-semibold text-green-600 hover:text-green-700 underline underline-offset-4 transition-colors">{t('solutions_overview.card3.cta')}</Link>
                            </section>

                        </section>
                </section>
                </FadeIn>
            </section>
        </main>
    )
}

export default SolutionsOverview