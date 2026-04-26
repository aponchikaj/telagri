import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';

const AboutStory = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white px-6 py-24 border-b border-gray-100">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <section className="flex flex-col gap-6">
          
          <FadeIn delay={0.1} className='w-full flex justify-end'>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('about_story.headline')}</h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-gray-400 text-base leading-relaxed">{t('about_story.p1')}</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <blockquote className="border-l-2 border-green-500 pl-5">
              <p className="text-gray-900 text-base font-medium leading-relaxed">{t('about_story.quote')}</p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-gray-400 text-base leading-relaxed">{t('about_story.p2')}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-gray-400 text-base leading-relaxed">{t('about_story.p3')}</p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-gray-400 text-base leading-relaxed">{t('about_story.p4')}</p>
          </FadeIn>

        </section>
      </section>
    </main>
  );
};

export default AboutStory;