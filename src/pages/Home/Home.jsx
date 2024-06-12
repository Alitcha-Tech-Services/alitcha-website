import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import JoinAlitchaButton from "../../components/commons/JoinAlitchaButton";
import AproposAccueil from "../../components/features/AproposAccueil";
import Newsletter from "../../components/features/Newsletter";
import ProjectSession from "../../components/features/ProjectSection";
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";
import './Home.css'
import SolutionSection from "../../components/features/SolutionSection";


export default function Home(){

    const text = "dolor sit amet, consectetur adipiscing elit.";

    return(
        <div>
            <div className="HomeDetailBackImage">
                <div className='d-flex justify-content-between HomeDetailTitle mt-5 mb-5'>
                    <h1 className="text-start mb-2 repeating-animation">
                        Forem ipsum <TitleTypeWriter text={text} delay={150} infinite />
                    </h1>
                    <p className='text-end'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu </p>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Button as={NavLink} to='/joindre' className="GoArrowRightjoin button-hover"><GoArrowRight /> </Button>
                    <Button as={NavLink} to='/joindre' className="text-center text-color-primary w-auto accueil-join-alitcha-button button-hover" type='button' >Rejoindre Alitcha</Button>
                </div>
            </div>
            <div className="mb-5">
                <AproposAccueil />
            </div>
            <div className="mt-5 mb-5">
                <ProjectSession />
            </div>
            <div className="mt-5 mb-5">
                <SolutionSection />
            </div>
            <div className="mt-5 mb-5">
                <JoinAlitchaButton />
            </div>
            <div className="mt-5 mb-5">
                <Newsletter />
            </div>
        </div>
    );
}