import './Event.css';
import Header from '../../components/features/Header'
import ConferenceSection from '../../components/features/ConferenceSection';
import AtelierSection from '../../components/features/AtelierSecion';
import ProgrammeSection from '../../components/features/ProgrammeSection';
import FormationSection from '../../components/features/FormationSection';
import Newsletter from '../../components/features/Newsletter';
import Footer from '../../components/features/Footer';
import RejoindreAlitchaSection from '../../components/commons/RejoindreAlitchaSection';
import HeroHeader from '../../components/commons/HeroHeader';

export default function Event()
{
    return(
        <>
        <Header />
        <HeroHeader />
        <ConferenceSection />
        <AtelierSection />
        <ProgrammeSection />
        <FormationSection />
        <RejoindreAlitchaSection />
        <Newsletter />
        <Footer />

        </>
    )
}