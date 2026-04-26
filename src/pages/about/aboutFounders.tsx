import { useTranslation } from 'react-i18next';
import FadeIn from '../../components/fadeIn';
import irakliChikava from '../../assets/founders/irakli-chikava.jpeg';
import lasha from '../../assets/founders/lasha-prof-improved.jpg'
import valeri from '../../assets/founders/valeri-amiranashvili.jpeg'

type FounderCardProps = {
  image: string;
  name: string;
  lastname: string;
  position: string;
  linkedin: string;
  bio: string;
};

const FounderCard = ({ image, name, lastname, position, linkedin, bio }: FounderCardProps) => {
  return (
    <main className="flex flex-col gap-5 p-6 bg-white border border-gray-100 rounded-2xl transition-all duration-200 w-full">
      <section className="flex items-center gap-4">
        <img src={image} alt={`${name} ${lastname}`} className="w-14 h-14 rounded-full object-cover border border-gray-100 shrink-0"/>
        <section className="flex flex-col gap-0.5">
          <h3 className="text-sm font-bold text-gray-900">{name} {lastname}</h3>
          <span className="text-xs text-green-600 font-medium">{position}</span>
        </section>
        {linkedin && (
          
          <a href={linkedin} target="_blank" rel="noreferrer" className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 hover:scale-105 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" className="text-gray-400">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </section>

      <div className="w-full h-px bg-gray-100" />

      <p className="text-xs text-gray-400 leading-relaxed">{bio}</p>
    </main>
  );
};

const AboutFounders = () => {
  const { t } = useTranslation();

  const founders = [
    {
      image: irakliChikava,
      name: t('about_founders.irakli.name'),
      lastname: t('about_founders.irakli.lastname'),
      position: 'CEO',
      linkedin: 'https://www.linkedin.com/in/iraklichikava/',
      bio: t('about_founders.irakli.bio'),
    },
    {
      image: lasha,
      name: t('about_founders.lasha.name'),
      lastname: t('about_founders.lasha.lastname'),
      position: 'CTO',
      linkedin: 'https://www.linkedin.com/in/lashashonia/',
      bio: t('about_founders.lasha.bio'),
    },
    {
      image: valeri,
      name: t('about_founders.valeri.name'),
      lastname: t('about_founders.valeri.lastname'),
      position: 'CPO',
      linkedin: 'https://www.linkedin.com/in/valeriamiranashvili/',
      bio: t('about_founders.valeri.bio'),
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-6 py-24 border-b border-gray-100">
      <section className="max-w-5xl mx-auto flex flex-col gap-12">

        <FadeIn>
          <section className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t('about_founders.title')}</h2>
          </section>
        </FadeIn>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {founders.map((f,i) =>(
            
            <FadeIn key={f.name + f.lastname} delay={i * 0.1}>
              <FounderCard {...f} />
            </FadeIn>
          ))}
        </section>

      </section>
    </section>
  );
};

export default AboutFounders;