import './Event.css';
import ConferenceSection from '../../components/features/ConferenceSection';
import AtelierSection from '../../components/features/AtelierSecion';
import ProgrammeSection from '../../components/features/ProgrammeSection';
import FormationSection from '../../components/features/FormationSection';
import Newsletter from '../../components/features/Newsletter';
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";
import JoinAlitchaButton from '../../components/commons/JoinAlitchaButton';

export default function Event()
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
            <div className='mt-4 mb-4 pt-3'>
                <ConferenceSection />
            </div>
            <div className='mt-4 mb-4 pt-3'>
                <AtelierSection />
            </div>
            <div className='mt-4 mb-4 pt-3'>
                <ProgrammeSection />
            </div>
            <div className='mt-4 mb-4 pt-3'>
                <FormationSection />
            </div>
            <div>
                <JoinAlitchaButton />
            </div>
            <div className='mt-4 mb-4 pt-3'>
                <Newsletter />
            </div>
        </div>
    )
}