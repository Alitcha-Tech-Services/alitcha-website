import { useState } from 'react';
import {  Button } from 'react-bootstrap';
import { GoArrowRight, GoArrowDown } from 'react-icons/go';
//import { NavLink } from 'react-router-dom';
import './../../styles/features/OurHistory.css';
import SeeMoreAbout from "../../pages/About/SeeMoreAbout";
import a_propos_logo_techs from './../../assets/a_propos_logo_techs.png';


function OurHistory() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="mt-20 text-white pt-5 pb-5 containerHistory">
                <h2 className="text-center text-color-primary">Notre Histoire</h2>
                <div className='d-flex justify-content-around contentHistory'>
                    <div className='about-left-transition'>
                        <img src={a_propos_logo_techs} alt="a_propos_logo_techs"  className='contentHistoryImage'/>
                    </div>
                    <div className='contentHistoryTest'>
                        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    </div>
                </div>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item bg-black">
                        <div className='accordion-header d-flex justify-content-end History_see_more mb-5' style={{ width: "92%" }}>
                            <Button className='bg-black d-flex accordion-button collapsed' style={{ width: "240px", border: 'none' }} onClick={toggleAccordion} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <span style={{ color: '#EF7B20' }}>{isOpen ? 'Voir moins' : 'Voir plus'}</span>
                                <span className='text-color-primary'>{isOpen ? <GoArrowDown /> : <GoArrowRight />}</span>
                            </Button>
                        </div>
                        <div id="flush-collapseOne" className="accordion-collapse collapse bg-black" data-bs-parent="#accordionFlushExample">
                            <SeeMoreAbout />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurHistory;
