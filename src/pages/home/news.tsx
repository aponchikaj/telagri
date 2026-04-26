import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { newsItems } from '../../data/news'
import FadeIn from '../../components/fadeIn'

const HomeNews = () => {
    const { t } = useTranslation()

    return (
        <main className="w-full bg-gray-50 px-6 py-24 border-t border-gray-100">
            <section className="max-w-5xl mx-auto flex flex-col gap-12">

                <FadeIn>
                    <section className="flex items-end justify-between gap-4 flex-wrap">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('home_news.title')}</h2>
                        <Link to="/news" className="text-sm text-center md:text-start font-semibold text-green-600 hover:text-green-700 underline underline-offset-4 transition-colors shrink-0">{t('home_news.viewAll')}</Link>
                    </section>
                </FadeIn>

                <section className="flex flex-col gap-4">
                    {newsItems.map((item,i)=> (

                        <FadeIn key={item.id} delay={i * 0.1}>
                            <a href={item.url} target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row gap-6 p-7 bg-white border border-gray-100 rounded-2xl hover:border-green-100 hover:shadow-sm transition-all duration-200 group">
                                <section className="flex flex-col gap-3 flex-1 justify-between">
                                    <section className="flex flex-col gap-3">
                                        <span className="text-xs text-gray-400">{item.date}</span>
                                        <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors duration-200">{t(item.titleKey)}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{t(item.summaryKey)}</p>
                                    </section>
                                    <span className="self-start text-xs font-semibold text-green-600 underline underline-offset-4">{t('news_articles.readMore')} →</span>
                                </section>

                                {item.image && (
                                    <section className="shrink-0 w-full sm:w-44 h-32 rounded-xl overflow-hidden border border-gray-100">
                                        <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover"/>
                                    </section>
                                )}
                            </a>
                        </FadeIn>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default HomeNews