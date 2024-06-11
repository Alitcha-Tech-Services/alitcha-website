import './RejoindreAlitchaPage.css';
import ConditionSection from '../../components/features/ConditionSection.jsx';
import AdhesionForm from '../../components/features/AdhesionForm'
import Newsletter from '../../components/features/Newsletter';
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";

export default function RejoindreAlitchaPage(){

    const text = " dolor sit amet, consectetur adipiscing elit.";

    return(
        <div>
            <div className='d-flex justify-content-between aboutDetailTitle'>
                <h1 className="text-start mb-2 repeating-animation">
                    Forem ipsum <TitleTypeWriter text={text} delay={100} infinite />
                </h1>
                <p className='text-end'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu </p>
            </div>

            <div>
                <ConditionSection />
            </div>

            <div className='mt-5 pt-5'>
                <AdhesionForm />
            </div>
            <div className="mt-4 pt-3">
                <Newsletter />
            </div>
        </div>
    )
}