import { useState } from 'react';
import { MdOutlineFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";
import { Accordion, Button, Form } from 'react-bootstrap';
import '../../styles/features/filterComponents.css';
import CatResearchProject from './CatResearchProject';

function FilterComponents() {

    const data = [
        {title: 'CATÉGORIE PRINCIPALE', content: ['Peau sensible', 'Peaux matures', 'Peaux normales', 'Peaux sèches']},
        {title: 'TYPE DE PRODUIT', content: ['Peau sensible1', 'Peaux grasses1', 'Peaux grasses à imperfections1', 'Peaux matures1', 'Peaux mixtes1', 'Peaux normales1', 'Peaux sèches1', 'Peaux très sèches1']},
        {title: 'TYPE DE CONTENU', content: ['Peau sensible2', 'Peaux grasses2', 'Peaux grasses à imperfections2', 'Peaux matures2', 'Peaux mixtes2', 'Peaux normales2', 'Peaux sèches2', 'Peaux très sèches2']},
        {title: 'TYPE DE PEAU', content: ['Peau sensible3', 'Peaux grasses3', 'Peaux grasses à imperfections3', 'Peaux matures3', 'Peaux mixtes3', 'Peaux normales3', 'Peaux sèches3', 'Peaux très sèches3']},
        {title: 'TYPE DE CHEVEUX', content: ['Peau sensible4', 'Peaux grasses4', 'Peaux grasses à imperfections4', 'Peaux matures4', 'Peaux mixtes4', 'Peaux normales4', 'Peaux sèches4', 'Peaux très sèches4']},
    ];

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const initializeCheckedState = () => {
        const state = {};
        data.forEach(value => {
            value.content.forEach(item => {
                state[item] = false;
            });
        });
        return state;
    };
    
    const [checkedState, setCheckedState] = useState(initializeCheckedState);
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        setCheckedState({ ...checkedState, [name]: checked });

        if (checked) {
            setSelectedFilters([...selectedFilters, name]);
        } else {
            setSelectedFilters(selectedFilters.filter(filter => filter !== name));
        }
    };


    const unSelected = (name) => {
        setSelectedFilters(selectedFilters.filter((filter) => filter !== name));
        setCheckedState({ ...checkedState, [name]: false });
    };

    const [activeButton, setActiveButton] = useState(data[0].content[0]);


    const [activeKey, setActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <div>
            <div id='' className='mt-5'>
                <div>
                    <div>
                        <div className='d-flex'>
                            
                            {
                            data[0].content.map((content, index) => (
                                <h6 key={index} className="accordion-header">
                                    <button type="button" className={`collapsed border-border-primary text-white ${activeButton === content ? 'background-primary' : 'button-hover bg-transparent'} w-auto`} style={{ "border-radius": '25px' }} data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded={activeButton === content} aria-controls={`collapse${index + 1}`} onClick={() => setActiveButton(content)} >
                                        {content}
                                    </button>
                                </h6>
                            ))
                            }
                        </div>
                        <div>
                            <h6 className="accordion-header d-flex flex-start mx-5 px-5 my-5">
                                <Button onClick={() => handleShow(true)} className="collapsed border border-0 button-hover w-auto bg-transparent d-flex" style={{ "border-radius": '25px', }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOther" aria-expanded="false" aria-controls="collapseOther">
                                    <MdOutlineFilterList className="text-color-primary text-start" style={{ fontSize: '40px' }} /> <span className="mt-2 mx-3 text-color-primary">Filtre</span>
                                </Button>
                            </h6>
                        </div>
                    </div>
                </div>

                {
                    data[0].content.map((content, index) => (
                        <div key='index' className="accordion-item bg-transparent border border-0">
                            <div id={`collapse${index + 1}`} className="accordion-collapse" data-bs-parent="#accordionFilter">
                                <div className="accordion-body text-white d-flex flex-row justify-content-center">
                                    <div className="filter-solution-content">
                                        <CatResearchProject />
                                        <CatResearchProject />
                                        <CatResearchProject />
                                        <CatResearchProject />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Modal className='' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton className='bg-black text-color-primary border border-0'>
                    <Modal.Title className='text-center mt-4' style={{ fontSize: '30px' }}>Filtres</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-black d-flex flex-row justify-content-center'>
                    <div className='' style={{ width: '' }}>

                        <div>
                            <div className="filter-component">
                                        <div className='d-flex flex-row flex-wrap justify-content-between mb-5 mt-4'>
                                            {
                                                data.map((value, index) => (
                                                    <div key={index} className='w-auto'>
                                                    <Accordion className="mb-2">
                                                        <Accordion.Item className='border border-0' eventKey={`${index+1}`.toString()} >
                                                            <Accordion.Header className='custom-accordion-header' onClick={() => toggleActiveKey(index.toString())} style={{ backgroundColor: 'black !important' , color: 'white' }}>
                                                                <div className="filter-components-accordion-header">
                                                                    <p className="m-0">{value.title}</p>
                                                                    {
                                                                        activeKey === index.toString() ? (
                                                                            <FaMinus className="text-color-primary" style={{ fontSize: '30px' }} />
                                                                        ) : (
                                                                            <FaPlus className="text-color-primary" style={{ fontSize: '30px' }} />
                                                                        )
                                                                    }
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Form>
                                                                    <div>
                                                                        {
                                                                            value.content.map((v,i) => (
                                                                                <Form.Check checked={checkedState[v]} key={`${index}-${i}`} type="checkbox" id={`default-checkbox-${index}-${i}`} label={`${v}`} name={v} onChange={handleFilterChange} />
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </Form>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    
                                <div>
                                    <div className='d-fex flex-column justify-content-center background-primary mb-5' style={{ height: '3px' }}></div>
                                    <div className="selected-filters mb-3">
                                        <h6 className='text-color-primary mb-5 text-center'>FILTRES SELECTIONNÉS</h6>
                                        <div className='d-flex flex-wrap justify-content-center'>
                                            {
                                                selectedFilters.map((filter, index) => (
                                                    <Button key={index} variant="outline-secondary" className="mx-1 mb-2 w-auto text-color-primary button-hover" style={{ backgroundColor: 'white', fontSize: '20px' }}>
                                                        {filter} <IoCloseCircle type='button' onClick={() => unSelected(filter)} className='mx-1 w-auto text-color-primary' />
                                                    </Button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='d-fex flex-column justify-content-center background-primary mb-5' style={{ height: '3px' }}></div>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <Button variant="primary" className="w-auto background-primary text-white button-hover border-border-primary mb-5">APPLIQUER</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FilterComponents;
