import { GoDotFill } from "react-icons/go";
import EquipeImage from '../../assets/EquipeImage.jpg';
import question1 from "../../assets/question1.png";
import './About.css';
import HistoryDetailComponent from "../../components/features/HistoryDetailComponent";

function SeeMoreAbout() {
    return (
        <div className="bg-black text-white mt-5 pt-5">
            <div className="d-flex justify-content-center mb-5">
                <div className="d-flex SeeMoreAbout1">
                    <div className="SeeMoreAbout1-1">
                        <h3 className="text-start text-color-primary mb-4 about-left-transition">Qui sommes - nous ?</h3>
                        <div className="">
                            <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                    </div>
                    <div className="SeeMoreAbout1-2 about-ridth-transition">
                        <img src={question1} alt="question1" style={{ 'max-width': '390px', 'max-height': '490px', 'min-width': '190px', 'min-height': '300px' }} />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <HistoryDetailComponent />
            </div>

            <div>
                <div className="d-flex justify-content-center mb-5">
                    <div className="our-mission-objectif">
                        <h3 className="text-center text-color-primary mb-5">Notre mission</h3>
                        <div className="d-flex flex-row">
                            <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                            <p className="text-justify">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget </p>
                        </div>
                        <div className="d-flex flex-row">
                            <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                            <p className="text-justify">condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
                        </div>
                        <div className="d-flex flex-row">
                            <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                            <p className="text-justify">Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-center mb-5">
                        <div className="our-mission-objectif">
                            <h3 className="text-center text-color-primary mb-5">Nos objectifs</h3>
                            <div className="d-flex flex-row">
                                <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                                <p className="text-justify">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget </p>
                            </div>
                            <div className="d-flex flex-row">
                                <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                                <p className="text-justify">condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
                            </div>
                            <div className="d-flex flex-row">
                                <span className="text-color-primary" style={{ "font-size": '20px' }}><GoDotFill /></span>
                                <p className="text-justify">Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-5 w-100'>
                <h3 className="text-color-primary text-center mb-5">Photo de l&apos;equipe</h3>
                <div className='d-flex justify-content-center'>
                    <img src={EquipeImage}  alt="EquipeImage" className="EquipeImage" style={{ "max-height": '620px'}}/>
                </div>
            </div>
        </div>
    );
}

export default SeeMoreAbout;
