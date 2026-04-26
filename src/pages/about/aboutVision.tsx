import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';

const AboutVision = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-gray-50 px-6 py-24 border-b border-gray-100">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

        <section className="flex flex-col gap-5">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('about_vision.tagline')}</h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl">{t('about_vision.description')}</p>
          </FadeIn>

        </section>
        
      </section>
    </main>
  );
};

export default AboutVision;