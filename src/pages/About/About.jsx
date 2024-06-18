import Newsletter from "./../../components/features/Newsletter";
import OurHistory from "./../../components/features/OurHistory";
import JoinAlitchaButton from './../../components/commons/JoinAlitchaButton';
import './About.css';
import EquipeSlide from "./../../components/features/EquipeSlide";
//import OurVisionCard from "./../../components/features/OurVisionCard";
import TitleTypeWriter from "./../../components/features/TitleTypeWriter";
import OurFonctionment from "../../components/features/OurFonctionment";



function About(){

    const text = " dolor sit amet, consectetur adipiscing elit.";
    
    return(
        <div>
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
                    <h3 className="text-center text-color-primary mb-5">Comment On Fonctionne</h3>
                    <div>
                        <OurFonctionment />
                    </div>
                </div>
                {/* <div>
                    <OurVisionCard />
                </div> */}
                <div>
                    <EquipeSlide />
                </div>
                <div>
                    <JoinAlitchaButton />
                </div>
                <div>
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}

export default About;