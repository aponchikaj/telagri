import SolutionsHero from './hero'
import SolutionAgri from './solutionAgri'
import SolutionFarmers from './solutionFarmers'
import SolutionFinance from './solutionFinance'
import SolutionsClosing from './solutionsClosing'

const Solutions = () => {
    return (
        <main className="pt-16">
            <SolutionsHero/>
            <SolutionFinance/>
            <SolutionAgri/>
            <SolutionFarmers/>
            <SolutionsClosing/>
        </main>
    )
}

export default Solutions