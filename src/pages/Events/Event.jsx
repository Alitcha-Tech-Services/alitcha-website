import './Event.css';
import ConferenceSection from '../../components/features/ConferenceSection';
import AtelierSection from '../../components/features/AtelierSecion';
import ProgrammeSection from '../../components/features/ProgrammeSection';
import FormationSection from '../../components/features/FormationSection';
import Newsletter from '../../components/features/Newsletter';
import RejoindreAlitchaSection from '../../components/commons/RejoindreAlitchaSection';
import HeroHeader from '../../components/commons/HeroHeader';

export default function Event()
{
    return(
        <>
        <HeroHeader />
        <ConferenceSection />
        <AtelierSection />
        <ProgrammeSection />
        <FormationSection />
        <RejoindreAlitchaSection />
        <Newsletter />
        </>
    )
}