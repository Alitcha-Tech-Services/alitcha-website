// import { useState } from 'react';
// import { Accordion, Button, Form } from 'react-bootstrap';
// import '../../styles/features/filterComponents.css';

// function FilterComponents() {

//   const [selectedFilters, setSelectedFilters] = useState([]);
  
//   const handleFilterChange = (e) => {
//     const { name, checked } = e.target;
//     if (checked) {
//       setSelectedFilters([...selectedFilters, name]);
//     } else {
//       setSelectedFilters(selectedFilters.filter(filter => filter !== name));
//     }
//   };

//   return (
//     <div>
//         <div className="filter-component">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>FILTRES</h3>
//         <Button variant="outline-primary">X</Button>
//       </div>

//       <div className="filter-buttons mb-3">
//         <Button variant="outline-primary">CATÉGORIE PRINCIPALE +</Button>
//         <Button variant="outline-primary">TYPE DE PRODUIT +</Button>
//         <Button variant="outline-primary">TYPE DE CONTENU +</Button>
//         <Button variant="outline-primary">TYPE DE CHEVEUX +</Button>
//       </div>

//       <Accordion defaultActiveKey="0" className="mb-3">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>TYPE DE PEAU</Accordion.Header>
//           <Accordion.Body>
//             <Form>
//               {['Peau sensible', 'Peaux grasses', 'Peaux grasses à imperfections', 'Peaux matures', 'Peaux mixtes', 'Peaux normales', 'Peaux sèches', 'Peaux très sèches'].map((type, index) => (
//                 <Form.Check
//                   key={index}
//                   type="checkbox"
//                   id={`default-checkbox-${index}`}
//                   label={`${type} (${Math.floor(Math.random() * 100)})`}
//                   name={type}
//                   onChange={handleFilterChange}
//                 />
//               ))}
//             </Form>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       <div className="selected-filters mb-3">
//         <h5>FILTRES SELECTIONNÉS</h5>
//         {selectedFilters.map((filter, index) => (
//           <Button key={index} variant="outline-secondary" className="me-2 mb-2">
//             {filter}
//           </Button>
//         ))}
//       </div>

//       <Button variant="primary" className="w-100">APPLIQUER (534)</Button>
//     </div>
//     </div>
//   );
// }

// export default FilterComponents;




// import { IoFilter } from "react-icons/io5";
// import { useState } from 'react';
// import { Accordion, Button, Form } from 'react-bootstrap';


function FilterComponents() {
    return (
        <div>
            
        </div>
    );
}


export default FilterComponents;