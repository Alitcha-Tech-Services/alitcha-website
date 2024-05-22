import './RejoindreAlitchaPage.css';
//import Header from '../../components/features/Header'
import HeroHeader from '../../components/commons/HeroHeader';
import ConditionSection from '../../components/features/ConditionSection';
import AdhesionForm from '../../components/features/AdhesionForm'
import Newsletter from '../../components/features/Newsletter';
//import Footer from '../../components/features/Footer';

export default function RejoindreAlitchaPage()
{
    return(
        <div>
          {/* <Header /> */}
          <HeroHeader />
          <ConditionSection />
          <div className='espace'></div>
          <AdhesionForm />
          <Newsletter />
          {/* <Footer /> */}
        </div>
    )
}