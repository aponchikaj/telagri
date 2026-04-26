import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import teamPicture from '../../assets/team.jpg'

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white px-6 pt-32 pb-20 border-b border-gray-100">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <section className="flex-1 flex flex-col gap-6">

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{t('about_hero.title')}</motion.h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-gray-400 text-lg leading-relaxed max-w-lg">{t('about_hero.tagline')}</motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex items-center gap-6 pt-2">
                
                {['stat1', 'stat2', 'stat3'].map((key) =>(

                    <section key={key} className="flex flex-col gap-0.5">
                        <span className="text-xl font-bold text-gray-900">{t(`about_hero.stats.${key}.value`)}</span>
                        <span className="text-xs text-gray-400">{t(`about_hero.stats.${key}.label`)}</span>
                    </section>
                ))}
            </motion.div>
        </section>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full hover:scale-110 transition-all hover:shadow-2xl lg:w-[420px] shrink-0 h-[300px] lg:h-[380px] rounded-2xl overflow-hidden border border-gray-100">
            <img src={teamPicture} alt="Telagri team" className="w-full h-full object-cover"/>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutHero;