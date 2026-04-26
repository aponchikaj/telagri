import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';

const offices = [
  {
    key: 'georgia',
    flag: '🇬🇪',
    mapsUrl: 'https://maps.google.com/?q=Gambashidze+Shalva+St.+4+Tbilisi',
  },
  {
    key: 'uzbekistan',
    flag: '🇺🇿',
    mapsUrl: 'https://maps.google.com/?q=Bekabad+district+Yangihayot+Tashkent',
  },
  {
    key: 'usa',
    flag: '🇺🇸',
    mapsUrl: 'https://maps.google.com/?q=8+McCullough+Dr+New+Castle+DE',
  },
];

const ContactPresence = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-gray-50 px-6 py-24">
      <section className="max-w-5xl mx-auto flex flex-col gap-12">

        <FadeIn>
          <section className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{t('contact_presence.headline')}</h2>
          </section>
        </FadeIn>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {offices.map((office, i) =>(
            <FadeIn key={office.key} delay={i * 0.1}>
              <a href={office.mapsUrl} target="_blank" rel="noreferrer" className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-green-100 hover:shadow-sm transition-all duration-200 group">
                <span className="text-3xl">{office.flag}</span>
                <section className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-gray-900">{t(`contact_presence.offices.${office.key}.country`)}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{t(`contact_presence.offices.${office.key}.address`)}</p>
                </section>
                <span className="self-start text-xs font-semibold text-green-600 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{t('contact_presence.viewMap')}</span>
              </a>

            </FadeIn>
          ))}

        </section>
      </section>
    </main>
  );
};

export default ContactPresence;