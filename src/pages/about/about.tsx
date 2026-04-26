import AboutStory from './aboutStory'
import AboutVision from './aboutVision';
import AboutHero from './hero'
import AboutFounders from './aboutFounders';
import AboutAwards from './aboutAwards'
import AboutCareers from './aboutCareers'

const About = () => {
  return (
    <main className="pt-16">
        <AboutHero />
        <AboutVision />
        <AboutStory />
        <AboutFounders />
        <AboutAwards/>
        <AboutCareers/>
    </main>
  )
}

export default About