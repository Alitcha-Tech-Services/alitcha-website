import { useState } from 'react';
import { MdOutlineFilterList } from "react-icons/md";
import '../../styles/features/condition.css';
import CondtionsInfos from "../commons/CondtionsInfos";

export default function ConditionSection () {

    const pieces=[
        { title:"stagiaire", pieces1:"Jorem ipsum dolor sit amet, consectetur adipiscing elit", pieces2:"Jorem ipsum dolor sit amet, consectetur adipiscing elit", pieces3:"Jorem ipsum dolor sit amet, consectetur adipiscing elit", pieces4:"Jorem ipsum dolor sit amet, consectetur adipiscing elit" },
    ];

    const [activeButton, setActiveButton] = useState('Item #1 ppp p');

    const buttons = [
        'Item #1 ppp p',
        'Item #2 ppp p',
        'Item #3 ppp p',
        'Item #4 ppp p',
        'Item #5 ppp p',
        'Item #6 ppp p',
    ];

    /*// const handleClick = (btn) => {
    //     setActiveButton(btn);
    // };*/


    return (
        <div>
            <div className='condition-section m-auto'>
                <h3 className='mb-5'>Conditions</h3>
                <div className='condition-container'>
                    <div className='condition-next-container h-100 d-flex justify-content-center'>

                        <div className="accordion condition-section-content" id="accordionExample">
                            <div >
                                <div className='condition-section-content-buttons d-flex'>
                                    <h6 className="accordion-header">
                                        <button type="button" key={buttons[0]} onClick={() => setActiveButton(buttons[0])} className={`border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[0] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={activeButton === buttons[0]} aria-controls="collapseOne">
                                            Item #1 ppp p
                                        </button>
                                    </h6>
                                    <h6 className="accordion-header">
                                        <button key={buttons[1]} onClick={() => setActiveButton(buttons[1])} className={`collapsed border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[1] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded={activeButton === buttons[1]} aria-controls="collapseTwo">
                                            Item #2 ppp p
                                        </button>
                                    </h6>
                                    <h6 className="accordion-header">
                                        <button key={buttons[2]} onClick={() => setActiveButton(buttons[2])} className={`collapsed border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[2] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded={activeButton === buttons[2]} aria-controls="collapseThree">
                                            Item #3 ppp p
                                        </button>
                                    </h6>
                                    <h6 className="accordion-header">
                                        <button key={buttons[3]} onClick={() => setActiveButton(buttons[3])} className={`collapsed border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[3] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded={activeButton === buttons[3]} aria-controls="collapseFour">
                                            Item #4 ppp p
                                        </button>
                                    </h6>
                                </div>
                                <div>
                                    <h6 className="accordion-header d-flex flex-start my-5">
                                        <button className="collapsed border border-0 button-hover w-auto bg-transparent d-flex" style={{ "border-radius": '25px', }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOther" aria-expanded="false" aria-controls="collapseOther">
                                            <MdOutlineFilterList className="text-color-primary text-start" style={{ fontSize: '40px' }} /> <span className="mt-2 mx-3 text-color-primary">Filtre</span>
                                        </button>
                                    </h6>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className="accordion-item bg-transparent border border-0">
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-white">
                                            <div className="">
                                                <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent border border-0">
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-white">
                                            <div className="">
                                                <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent border border-0">
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-white">
                                            <div className="">
                                                <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent border border-0">
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-white">
                                            <div className="">
                                                <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent border border-0">
                                    <div id="collapseOther" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body text-white">
                                            <div id="collapseOther1">
                                                <div className="d-flex mb-5 collapseOther1-1">
                                                    <h6 className="accordion-header">
                                                        <button key={buttons[4]} onClick={() => setActiveButton(buttons[4])} type="button" className={`collapsed border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[4] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded={activeButton === buttons[4]} aria-controls="collapseOne1">
                                                            Item #5 ppp p
                                                        </button>
                                                    </h6>
                                                    <h6 className="accordion-header">
                                                        <button key={buttons[5]} onClick={() => setActiveButton(buttons[5])} type="button" className={`collapsed border-border-primary text-white w-auto bg-transparent ${activeButton === buttons[5] ? 'aActivity' : 'button-hover'}`} style={{ "border-radius": '25px' }} data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded={activeButton === buttons[5]} aria-controls="collapseOne2">
                                                            Item #6 ppp p
                                                        </button>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <div className="accordion-item bg-transparent border border-0">
                                                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#collapseOther1">
                                                            <div className="accordion-body text-white">
                                                                <div className="">
                                                                    <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item bg-transparent border border-0">
                                                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#collapseOther1">
                                                            <div className="accordion-body text-white">
                                                                <div className="">
                                                                    <CondtionsInfos title={pieces[0].title} pieces1={pieces[0].pieces1} pieces2={pieces[0].pieces2} pieces3={pieces[0].pieces3} pieces4={pieces[0].pieces4} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}