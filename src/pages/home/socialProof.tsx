import { useTranslation } from 'react-i18next';
import BankOfGeorgia from '../../assets/logos/bog.png';
import FAO from '../../assets/logos/fao.svg';
import Hectar from '../../assets/logos/hectar.webp';
import AgriTechMurcia from '../../assets/logos/AgriTechMurcia.jpeg';
import FadeIn from '../../components/fadeIn';

const SocialProof = () => {

    const logos = [
        { src: BankOfGeorgia, alt: 'bank of georgia' },
        { src: FAO, alt: 'food and agriculture organization of the united nations' },
        { src: Hectar, alt: 'hectar accelerator' },
        { src: AgriTechMurcia, alt: 'agri tech murcia' },
    ]

    const { t } = useTranslation()

    return (
        <main className="w-full py-20 px-6 bg-white">
            <section className="max-w-5xl mx-auto flex flex-col items-center gap-12">
                
                <FadeIn>
                    <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest">{t('social_proof.headline')}</p>
                </FadeIn>

                <FadeIn>
                    <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {logos.map((logo) => (
                            <section key={logo.alt} className="flex items-center justify-center px-4 py-3">
                                <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"/>
                            </section>
                        ))}
                    </section>
                </FadeIn>
            </section>
        </main>
    );
};

export default SocialProof