import { useState } from 'react';
import { MdOutlineFilterList } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";
import { Accordion, Button, Form } from 'react-bootstrap';
import '../../styles/features/filterComponents.css';
import CatResearchProject from './CatResearchProject';

function FilterComponents() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    //const buttons = ['Item 01 ppp p', 'Item 02 ppp p', 'Item 03 ppp p', 'Item 04 ppp p', 'Item 05 ppp p', 'Item 06 ppp p',];

    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setSelectedFilters([...selectedFilters, name]);
        } else {
            setSelectedFilters(selectedFilters.filter(filter => filter !== name));
        }
    };

    // const unSelected = (index) => {
    //     setSelectedFilters(selectedFilters.filter((i) => i !== index));
    // };

    const data = [
        {title: 'CATÉGORIE PRINCIPALE', content: ['Peau sensible', 'Peaux matures', 'Peaux normales', 'Peaux sèches']},
        {title: 'TYPE DE PRODUIT', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches']},
        {title: 'TYPE DE CONTENU', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches']},
        {title: 'TYPE DE PEAU', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches']},
        {title: 'TYPE DE CHEVEUX', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches']},
    ];

    const [activeButton, setActiveButton] = useState(data[0].content[0]);

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
                                        <div className='d-flex flex-row flex-wrap justify-content-between'>
                                            {
                                                data.map((value, index) => (
                                                    <div key={index} className='w-auto'>
                                                    <Accordion defaultActiveKey={`${index+1}`} className="mb-3">
                                                    <Accordion.Item eventKey={`${index+1}`}>
                                                        <Accordion.Header>{value.title}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Form>
                                                                <div>
                                                                    {
                                                                        value.content.map((v,i) => (
                                                                            <Form.Check key={`${index}-${i}`} type="checkbox" id={`default-checkbox-${index}-${i}`} label={`${v} (${Math.floor(Math.random() * 100)})`} name={v} onChange={handleFilterChange} />
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
                                                        {filter} <IoCloseCircle type='button' className='mx-1 w-auto text-color-primary' />
                                                    </Button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='d-fex flex-column justify-content-center background-primary mb-5' style={{ height: '3px' }}></div>
                                    <div className='d-flex flex-row justify-content-center'>
                                        <Button variant="primary" className="w-auto background-primary text-white button-hover border-border-primary mb-5">APPLIQUER (534)</Button>
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













// import { useState } from 'react';
// import { MdOutlineFilterList } from "react-icons/md";
// import Modal from 'react-bootstrap/Modal';
// import { IoCloseCircle } from "react-icons/io5";
// import { Accordion, Button, Form } from 'react-bootstrap';
// import '../../styles/features/filterComponents.css'; // Assurez-vous que le chemin est correct

// function FilterComponents() {

//     const [fullscreen, setFullscreen] = useState(true);
//     const [show, setShow] = useState(false);
//     const [activeButton, setActiveButton] = useState('Item 01 ppp p');
//     const [selectedFilters, setSelectedFilters] = useState([]);

//     const handleShow = () => setShow(true);

//     const handleFilterChange = (e) => {
//         const { name, checked } = e.target;
//         if (checked) {
//             setSelectedFilters([...selectedFilters, name]);
//         } else {
//             setSelectedFilters(selectedFilters.filter(filter => filter !== name));
//         }
//     };

//     const unSelected = (index) => {
//         setSelectedFilters(selectedFilters.filter((_, i) => i !== index));
//     };

//     const data = [
//         { title: 'CATÉGORIE PRINCIPALE', content: ['Peau sensible', 'Peaux matures', 'Peaux normales', 'Peaux sèches'] },
//         { title: 'TYPE DE PRODUIT', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches'] },
//         { title: 'TYPE DE CONTENU', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches'] },
//         { title: 'TYPE DE PEAU', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches'] },
//         { title: 'TYPE DE CHEVEUX', content: ['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches'] },
//     ];

//     return (
//         <div>
//             <div className='mt-5'>
//                 <div>
//                     <div className='d-flex'>
//                         {
//                             data[0].content.map((content, index) => (
//                               <h6 key={index} className="accordion-header">
//                                   <button type="button" className={`border-border-primary text-white ${activeButton === content ? 'bg-primary' : 'button-hover'} w-auto bg-transparent`} style={{ "border-radius": '25px' }} data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded={activeButton === content} aria-controls={`collapse${index + 1}`} onClick={() => setActiveButton(content)} >
//                                       {content}
//                                   </button>
//                               </h6>
//                             ))
//                         }
//                     </div>
//                     <div>
//                         <h6 className="accordion-header d-flex flex-start mx-5 px-5 my-5">
//                             <Button onClick={() => handleShow(true)} className="collapsed border border-0 button-hover w-auto bg-transparent d-flex" style={{ "border-radius": '25px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOther" aria-expanded="false" aria-controls="collapseOther" >
//                                 <MdOutlineFilterList className="text-color-primary text-start" style={{ fontSize: '40px' }} /> <span className="mt-2 mx-3 text-color-primary">Filtre</span>
//                             </Button>
//                         </h6>
//                     </div>
//                 </div>
//             </div>

//             <Modal className='' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//                 <Modal.Header closeButton className='bg-black text-color-primary border border-0 custom-close-button'>
//                     <Modal.Title className='text-center mt-4' style={{ fontSize: '30px' }}>Filtres</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body className='bg-black d-flex flex-row justify-content-center'>
//                     <div className='' style={{ width: '' }}>
//                         <div className="filter-component">
//                             <Accordion defaultActiveKey="1" className="mb-3">
//                                 <Accordion.Item eventKey="1">
//                                     <div className='d-flex flex-row flex-wrap justify-content-between'>
//                                         {data.map((value, index) => (
//                                             <div key={index} className='w-auto'>
//                                                 <Accordion.Header>{value.title}</Accordion.Header>
//                                                 <Accordion.Body>
//                                                     <Form>
//                                                         <div>
//                                                             {value.content.map((v, i) => (
//                                                                 <Form.Check
//                                                                     key={`${index}-${i}`}
//                                                                     type="checkbox"
//                                                                     id={`default-checkbox-${index}-${i}`}
//                                                                     label={`${v} (${Math.floor(Math.random() * 100)})`}
//                                                                     name={v}
//                                                                     onChange={handleFilterChange}
//                                                                 />
//                                                             ))}
//                                                         </div>
//                                                     </Form>
//                                                 </Accordion.Body>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </Accordion.Item>
//                             </Accordion>

//                             <div>
//                                 <div className='d-flex flex-column justify-content-center background-primary mb-5' style={{ height: '3px' }}></div>
//                                 <div className="selected-filters mb-3">
//                                     <h6 className='text-color-primary mb-5 text-center'>FILTRES SELECTIONNÉS</h6>
//                                     <div className='d-flex flex-wrap justify-content-center'>
//                                         {selectedFilters.map((filter, index) => (
//                                             <Button
//                                                 key={index}
//                                                 variant="outline-secondary"
//                                                 className="mx-1 mb-2 w-auto text-color-primary button-hover"
//                                                 style={{ backgroundColor: 'white', fontSize: '20px' }}
//                                             >
//                                                 {filter} <IoCloseCircle type='button' onClick={() => unSelected(index)} className='mx-1 w-auto text-color-primary' />
//                                             </Button>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div className='d-flex flex-column justify-content-center background-primary mb-5' style={{ height: '3px' }}></div>
//                                 <div className='d-flex flex-row justify-content-center'>
//                                     <Button variant="primary" className="w-auto background-primary text-white button-hover border-border-primary mb-5">APPLIQUER (534)</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default FilterComponents;
