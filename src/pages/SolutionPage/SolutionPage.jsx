import './SolutionPage.css';
import Header from '../../components/features/Header'
import Footer from '../../components/features/Footer';
import HeroHeader from '../../components/commons/HeroHeader';
import Newsletter from '../../components/features/Newsletter';
import RejoindreAlitchaSection from '../../components/commons/RejoindreAlitchaSection';
import ProjectSection from '../../components/features/ResearchProject';

export default function SolutionPage()
{
    return(
        <div>
          <HeroHeader />
          <p className='TitleSolution'>Les solutions</p>
          <section className='SolutionSection'>
            <div className='DesignColumn'>
              <p className='TitleDesign'>Design</p>
              <div className='SolutionsDesign'>
                <div className='SolutionItem'>
                Bloc blanc
                </div>
                <div className='SolutionItem'>
                Bloc blanc
                </div>
              </div>
            </div>
            <div className='DevColumn'>
              <p className='TitleDev'>Développement web</p>
              <div className='SolutionsDev'>
                <div className='SolutionItem'>
                Bloc blanc
                </div>
                <div className='SolutionItem'>
                Bloc blanc
                </div>
                <div className='SolutionItem'>
                Bloc blanc
                </div>
              </div>
            </div>

          </section>
          <ProjectSection />
          <RejoindreAlitchaSection />
          <Newsletter />
        </div>
    )
}