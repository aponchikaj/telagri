import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const socials = [
    {
        key: 'linkedin',
        url: 'https://linkedin.com/company/telagri',
        icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        ),
    },
    {
        key: 'facebook',
        url: 'https://facebook.com/telagri',
        icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
        ),
    },
    {
        key: 'youtube',
        url: 'https://youtube.com/@telagri',
        icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        ),
    },
]

const NewsHero = () => {
    const { t } = useTranslation();

    return (
        <main className="w-full bg-white px-6 pt-32 pb-16 border-b border-gray-100">
            <section className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">

                <section className="flex flex-col gap-5">

                    <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{t('news_hero.title')}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-gray-400 text-base leading-relaxed max-w-lg">{t('news_hero.tagline')}</motion.p>
                </section>

                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-col gap-3">
                    <p className="text-xs text-gray-400 font-medium">{t('news_hero.follow')}</p>
                    <section className="flex items-center gap-2">
                        {socials.map((s) => (
                        
                            <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-600 hover:border-green-200 transition-all duration-200">{s.icon}</a>
                        ))}
                    </section>
                </motion.div>
            </section>
        </main>
    )
}

export default NewsHero