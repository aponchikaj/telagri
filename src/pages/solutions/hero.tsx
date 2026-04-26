import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SolutionsHero = () => {
    const { t } = useTranslation();

    return (
        <main className="w-full bg-white px-6 pt-32 pb-20">
            <section className="max-w-5xl mx-auto flex flex-col gap-10">

                <section className="flex flex-col gap-5 max-w-2xl">
                    <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{t('solutions_hero.titleStart')}{' '}{t('solutions_hero.titleHighlight')}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }} className="text-gray-400 text-lg leading-relaxed">{t('solutions_hero.tagline')}</motion.p>
                </section>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.26 }} className="w-full grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                    {['fin', 'agri', 'farmer'].map((key) =>(

                        <section key={key} className="bg-white flex flex-col gap-2 px-7 py-7 hover:bg-gray-50 transition-colors duration-200">
                            <span className="text-sm font-semibold text-gray-900 leading-snug">{t(`solutions_hero.pillars.${key}.title`)}</span>
                            <span className="text-xs text-gray-400 leading-relaxed">{t(`solutions_hero.pillars.${key}.sub`)}</span>
                        </section>
                    ))}

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.34 }} className="flex flex-col sm:flex-row gap-4">
                    <section className="flex-1 flex flex-col gap-2 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <span className="text-2xl font-bold text-gray-900">Satellite</span>
                        <span className="text-xs text-gray-400">Remote sensing & crop monitoring</span>
                    </section>

                    <section className="flex-1 flex flex-col gap-2 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <span className="text-2xl font-bold text-gray-900">Real-time</span>
                        <span className="text-xs text-gray-400">Live farm-level data & alerts</span>
                    </section>

                    <section className="flex-1 flex flex-col gap-2 p-6 rounded-2xl bg-green-600 border border-green-600">
                        <span className="text-2xl font-bold text-white">6+</span>
                        <span className="text-xs text-green-200">Countries across emerging markets</span>
                    </section>
                </motion.div>
            </section>
        </main>
    );
};

export default SolutionsHero;