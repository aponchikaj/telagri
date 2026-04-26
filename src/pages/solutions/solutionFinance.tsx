import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';

const cards = ['sell', 'lend', 'risk'];

const SolutionFinance = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white px-6 py-24">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        <section className="lg:sticky lg:top-28 flex flex-col gap-6 w-full lg:w-[340px] shrink-0">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">{t('solution_finance.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm text-gray-400 leading-relaxed">{t('solution_finance.description')}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            
            <a href="https://calendly.com/liza-telagri/30min?preview_source=et_card" target="_blank" rel="noreferrer" className="self-start px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('solution_finance.cta')}</a>
          </FadeIn>
        </section>

        <section className="flex-1 flex flex-col gap-4 w-full">
          {cards.map((key, i) =>(

            <FadeIn key={key} delay={i * 0.1}>
              <section className="flex gap-5 p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-green-100 transition-all duration-200">
                <span className="w-8 h-8 shrink-0 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-xs font-bold text-green-600">{i + 1}</span>
                <section className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-gray-900">{t(`solution_finance.cards.${key}.title`)}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{t(`solution_finance.cards.${key}.body`)}</p>
                </section>
              </section>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <section className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-sm text-gray-400 flex-1">{t('solution_finance.cta_text')}</p>
              
              <a href="https://calendly.com/liza-telagri/30min?preview_source=et_card" target="_blank" rel="noreferrer"className="shrink-0 w-full sm:w-auto text-center px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('solution_finance.cta')}</a>
            </section>
          </FadeIn>
        </section>
      </section>
    </main>
  );
};

export default SolutionFinance;