import { useTranslation } from 'react-i18next';
import { newsItems } from '../../data/news';
import FadeIn from '../../components/fadeIn';

const NewsArticles = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white px-6 py-20">
      <section className="max-w-5xl mx-auto flex flex-col gap-6">
        {newsItems.map((item,i) =>(

          <FadeIn key={item.id} delay={i * 0.1}>
            
            <a href={item.url} target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row gap-6 p-7 bg-gray-50 border border-gray-100 rounded-2xl hover:border-green-100 transition-all duration-200 group">
              <section className="flex flex-col gap-4 flex-1">
                <span className="text-xs text-gray-400">{item.date}</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors duration-200">{t(item.titleKey)}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t(item.summaryKey)}</p>
                <span className="self-start text-xs font-semibold text-green-600 underline underline-offset-4">{t('news_articles.readMore')}</span>
              </section>

              <section className="shrink-0 w-full sm:w-48 h-36 rounded-xl bg-gray-100 border border-gray-100 overflow-hidden">
                {item.image ? (

                  <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover"/>
                ) : (
                  <section className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </section>
                )}
              </section>
            </a>
          </FadeIn>
        ))}
        
      </section>
    </main>
  );
};

export default NewsArticles;