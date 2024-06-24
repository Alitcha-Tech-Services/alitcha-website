import Newsletter from '../../components/features/Newsletter';
import ProjectSection from '../../components/features/ResearchProject';
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";
import JoinAlitchaButton from '../../components/commons/JoinAlitchaButton';
import FilterComponents from '../../components/features/FilterComponents';

export default function Solution()
{

  const text = " dolor sit amet, consectetur adipiscing elit.";


    return(
        <div>
          <div className='d-flex justify-content-between aboutDetailTitle'>
                <h1 className="text-start mb-2 repeating-animation">
                    Forem ipsum <TitleTypeWriter text={text} delay={100} infinite />
                </h1>
                <p className='text-end'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu! Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu </p>
          </div>

          {/* <p className='TitleSolution'>Les solutions</p>
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
          </section> */}

          <div>
              <FilterComponents />
          </div>

          <div>
              <ProjectSection />
          </div>
          <div>
              <JoinAlitchaButton />
          </div>
          <Newsletter />
        </div>
    )
}