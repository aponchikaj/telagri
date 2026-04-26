import { Link, useLocation } from 'react-router-dom'
import Label from '../assets/label.png'
import Logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import './navbar.css'

const Navbar = ()=>{

    const { t, i18n } = useTranslation()
    const location = useLocation()

    const buttons = [
        { title: "home", to: "/" },
        { title: "solutions", to: "/solutions" },
        { title: "about", to: "/about" },
        { title: "news", to: "/news" },
        { title: "contact", to: "/contact" },
    ]

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ka', label: 'KA' },
        { code: 'ru', label: 'RU' },
    ]

    const [MenuMode,setMenuMode] = useState(false)

    if(MenuMode == false){
        return(
            <nav className="w-full flex items-center justify-around h-[8vh] md:h-[10vh] navbar fixed top-0 left-0 w-full z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">

                <section>
                    <Link to="/">
                        <img src={Label} alt="Telagri" className="hidden lg:block h-8 w-auto" />
                        <img src={Logo} alt="Telagri" className="block lg:hidden h-8 w-auto" />
                    </Link>
                </section>

                <section>
                    <ul className="hidden md:flex items-center gap-1">
                        {buttons.map((b) => {
                                    const isActive = location.pathname == b.to
                                    return (
                                        <li key={b.title}><Link to={b.to} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200  ${isActive ? 'text-green-700': 'text-gray-600 hover:text-green-700'}`}>{t(`navbar.${b.title}`)}</Link></li>
                                    )
                                }
                            )
                        }
                    </ul>
                </section>

                <section className="hidden invisible md:flex md:visible items-center gap-1 bg-gray-100 rounded-lg p-1">
                    {languages.map((lang) => {
                        const isActive = i18n.language == lang.code
                        return (
                                    <button key={lang.code} onClick={() => i18n.changeLanguage(lang.code)} className={` cursor-pointer px-3 py-1 rounded-md text-xs font-semibold transition-all  duration-200 ${isActive ? 'bg-white text-green-700 shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}>{lang.label}</button>
                                )
                            }   
                        )
                    }
                </section>

                <section className='flex md:hidden items-center justify-center'>
                    <button onClick={()=>setMenuMode(true)} className='w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-md hover:bg-gray-100 transition-all duration-200'>
                        <span className='block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300' />
                        <span className='block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300' />
                        <span className='block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300' />
                    </button>
                </section>

            </nav>
        )
    }

    return(
        <aside className='fixed top-0 left-0 w-[75%] max-w-[280px] h-screen bg-white z-50 flex flex-col shadow-lg md:hidden sidebar'>

            <header className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
                <img src={Logo} alt="Logo" className='h-8 w-auto' />
                <button onClick={() => setMenuMode(false)} className='w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 50 50">
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                    </svg>
                </button>
            </header>

            <main className='flex-1 px-3 py-5 overflow-y-auto'>
                <ul className='flex flex-col gap-0.5'>
                    {buttons.map((b) => {
                        const isActive = location.pathname === b.to
                        return (
                            <Link key={b.title} to={b.to} onClick={() => setMenuMode(false)} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}`}>
                                <button>{t(`navbar.${b.title}`)}</button>
                            </Link>
                        )
                    })}
                </ul>

                <section className='mt-6 px-1'>
                    <p className='text-[11px] uppercase tracking-widest text-gray-300 mb-2 px-3'>Language</p>
                    <section className='flex gap-1.5'>
                    {languages.map((lang) => (
                        <button key={lang.code} onClick={() => i18n.changeLanguage(lang.code)} className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${i18n.language === lang.code ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'}`}>
                            {lang.label}
                        </button>
                    ))}
                    </section>
                </section>
            </main>

            <footer className='px-5 py-4 border-t border-gray-100 flex items-center justify-center text-center'>
                <p className='text-[11px] text-gray-300'>{new Date().getFullYear()} Telagri. All rights reserved.</p>
            </footer>
        </aside>
    )
}

export default Navbar