import FinalCTA from './finalCta'
import Hero from './hero'
import HomeNews from './news'
import SocialProof from './socialProof'
import SolutionsOverview from './solutionsOverview'

const Home = () => {
  return (
    <main className="pt-14">
      <Hero />
      <SolutionsOverview />
      <SocialProof />
      <HomeNews />
      <FinalCTA />
    </main>
  )
}

export default Home