import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn'

const awards = [
  {
    key: 'swc',
    url: 'https://eu4business.ge/en/news/m4eg-in-georgia-eu-supported-contest-sends-its-winner-to-startup-world-cup/',
  },
  {
    key: 'eban',
    url: 'https://cbw.ge/startup/axel-and-agronnect-shine-at-eban-2023-congress-a-big-win-for-the-georgian-startup-ecosystem',
  },
  {
    key: 'gita',
    url: 'https://old.business-partner.ge/biznesi/gita-s-istoriashi-pirvelad-sainvestitsio-komitetis-khutive-tsevri-agronnect-shi-investirebas-ganakhortsielebs',
  },
]

const AboutAwards = () => {
  const { t } = useTranslation()

  return (
    <main className="w-full bg-white px-6 py-24 border-b border-gray-100">
      <section className="max-w-5xl mx-auto flex flex-col gap-12">

        <FadeIn>

          <section className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('about_awards.headline')}</h2>
          </section>
        </FadeIn>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          { 
          awards.map((award,i)=> (

            <FadeIn key={award.key} delay={i * 0.1}>
              <section className="h-full flex flex-col justify-between gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                
                <section className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-widest">{t(`about_awards.items.${award.key}.label`)}</span>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">{t(`about_awards.items.${award.key}.title`)}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{t(`about_awards.items.${award.key}.description`)}</p>
                </section>

                {award.url && (
                  <a href={award.url} target="_blank" rel="noreferrer" className="self-start text-xs font-semibold text-green-600 hover:text-green-700 underline underline-offset-4 transition-colors">{t('about_awards.readMore')}</a>
                )}
              </section>
            </FadeIn>
          ))}
          
        </section>
      </section>
    </main>
  );
}

export default AboutAwards