import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

const buttons = [
    { title: 'home', to: '/' },
    { title: 'solutions', to: '/solutions' },
    { title: 'about', to: '/about' },
    { title: 'news', to: '/news' },
    { title: 'contact', to: '/contact' },
]

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="w-full bg-gray-950 text-gray-400 mt-auto">
            <main className="max-w-6xl mx-auto px-6 py-14">
                
                <section className="flex flex-col md:flex-row items-start justify-between gap-10">
                
                    <section className="flex flex-col gap-4 max-w-sm">
                        <img src={Logo} alt="Telagri" className="w-[40px] md:w-[60px]" />
                        <p className="text-sm text-gray-400 leading-relaxed">{t('footer.tagline')}</p>
                    </section>

                    <section className="flex flex-col gap-3">
                        <p className="text-xs uppercase tracking-widest text-gray-600">{t('footer.pages')}</p>
                        <ul className="flex flex-col gap-2">
                        {
                            buttons.map((b) => (
                                <li key={b.title}><Link to={b.to} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{t(`navbar.${b.title}`)}</Link></li>
                            ))
                        }
                        </ul>
                    </section>

                    <section className="flex flex-col gap-3">
                        <p className="text-xs uppercase tracking-widest text-gray-600">{t('footer.followUs')}</p>
                        <section className="flex flex-col gap-2">
                        
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                                Facebook
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>

                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                YouTube
                            </a>

                        </section>
                    </section>

                </section>

                <section className="mt-12 pt-6 border-t border-gray-800">
                    <p className="text-xs text-gray-600 text-center">{new Date().getFullYear()} Telagri. {t('footer.rightsReserved')}</p>
                </section>
            </main>
        </footer>
    )
}

export default Footer