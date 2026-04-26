import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';

const checklistItems = ['traders', 'governments', 'chain'];

const SolutionAgri = () => {
    const { t } = useTranslation();

    return (
        <main className="w-full bg-white px-6 py-24">
            <section className="max-w-5xl mx-auto flex flex-col gap-14">

                <FadeIn>
                    <section className="flex flex-col gap-5 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('solution_agri.title')}</h2>
                        <p className="text-gray-400 text-base leading-relaxed">{t('solution_agri.description')}</p>
                    </section>
                </FadeIn>

                <section className="flex flex-col gap-4">
                {checklistItems.map((key, i) => (
                    <FadeIn key={key} delay={i * 0.1}>
                        <section className="flex flex-col sm:flex-row gap-5 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                            <section className="shrink-0 w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </section>
                            <section className="flex flex-col gap-1.5">
                                <h3 className="text-sm font-bold text-gray-900">{t(`solution_agri.items.${key}.title`)}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">{t(`solution_agri.items.${key}.body`)}</p>
                            </section>
                        </section>
                    </FadeIn>
                ))}
                </section>

                <FadeIn delay={0.2}>
                    <section className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-sm text-gray-600 flex-1">{t('solution_agri.cta_text')}</p>
                    
                        <a href="https://calendly.com/liza-telagri/30min?preview_source=et_card" target="_blank" rel="noreferrer" className="shrink-0 w-full sm:w-auto text-center px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('solution_agri.cta')}</a>
                    </section>
                </FadeIn>

            </section>
        </main>
    );
}

export default SolutionAgri;