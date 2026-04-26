import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
    const { t } = useTranslation()

    return (
        <main className="w-full min-h-screen bg-white flex items-center justify-center px-6">
            <section className="flex flex-col items-center text-center gap-6 max-w-md">
                <span className="text-8xl font-bold text-gray-600 select-none">404</span>
                <section className="flex flex-col gap-2 -mt-4">
                    <h1 className="text-2xl font-bold text-gray-900">{t('not_found.title')}</h1>
                    <p className="text-sm text-gray-400 leading-relaxed">{t('not_found.description')}</p>
                </section>
                <Link to="/" className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200">{t('not_found.cta')}</Link>
            </section>
        </main>
    )
}

export default PageNotFound