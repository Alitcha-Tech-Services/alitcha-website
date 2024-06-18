import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoDotFill } from "react-icons/go";
import apropos_logo_save from '../../assets/1234567890.png';


function HistoryDetailComponent() {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <div className="HistoryDetailComponent">
            <div>
                <h3 className="text-start text-color-primary mb-4 about-left-transition">Notre Histoire</h3>
                <div className='d-flex justify-content-evenly HistoryDetailComponent1'>
                    <div className="HistoryDetailComponent1-1">
                        <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit</p>
                        <img className="about-left-transition" src={apropos_logo_save} alt="imgHistory" style={{ 'max-width': '500px', 'max-height': '500px', 'min-width': '270px', 'min-height': '270px' }}/>
                        <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit</p>
                    </div>
                    <div ref={sectionRef} className={`HistoryDetailComponent1-2 about-rid-transition ${isVisible ? 'slide-on' : ''}`}>
                        <div className=''>
                            <div className="d-flex">
                                <span style={{ 'max-width': '71px' }}>
                                    <GoDotFill className="text-color-primary" style={{ 'font-size': '70px' }} />
                                </span>
                                <span className="text-start" style={{ 'width': '90%', 'padding-top': '18px' }}> 2023</span>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className="d-flex flex-row justify-content-center" style={{ 'max-width': '70px' }}>
                                    <span style={{ width: '2px', color: "white", height: 'auto', 'background-color': 'white', 'margin-top': '-18px', 'margin-bottom': '-22px' }}></span>
                                </div>
                                <div>
                                    <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="d-flex">
                                <span style={{ 'max-width': '71px' }}>
                                    <GoDotFill className="text-color-primary" style={{ 'font-size': '80px' }} />
                                </span>
                                <span className="text-start" style={{ 'width': '90%', 'padding-top': '18px' }}> 2024</span>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className="d-flex flex-row justify-content-center" style={{ 'max-width': '70px' }}>
                                    <span style={{ width: '2px', color: "white", height: 'auto', 'background-color': 'white', 'margin-top': '-22px' }}></span>
                                </div>
                                <div>
                                    <p className="text-justify">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryDetailComponent;
