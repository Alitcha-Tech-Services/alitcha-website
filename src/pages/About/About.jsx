import Newsletter from "./../../components/features/Newsletter";
import OurHistory from "./../../components/features/OurHistory";
import JoinAlitchaButton from './../../components/commons/JoinAlitchaButton';
import './About.css';
//import { useEffect, useRef } from 'react';
import EquipeSlide from "./../../components/features/EquipeSlide";
import OurVisionCard from "./../../components/features/OurVisionCard";
//import TeamMember from "./../../components/commons/TeamMember";
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";


function About(){

    const text = " dolor sit amet, consectetur adipiscing elit.";
    
    return(
        <>
            <div>
                <div className='d-flex justify-content-between aboutDetailTitle'>
                    <h1 className="text-start mb-2 repeating-animation">
                        Forem ipsum <TitleTypeWriter text={text} delay={100} infinite />
                    </h1>
                    <p className='text-end'>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu </p>
                </div>
                <div>
                    <OurHistory />
                </div>
                <div>
                    <OurVisionCard />
                </div>
                <div>
                    <EquipeSlide />
                </div>
                {/* <div>
                    <TeamMember />
                </div> */}
                <div>
                    <JoinAlitchaButton />
                </div>
                <div>
                    <Newsletter />
                </div>
            </div>
        </>
    );
}

export default About;