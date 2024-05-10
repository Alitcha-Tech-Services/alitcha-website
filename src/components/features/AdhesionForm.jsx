import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/features/AdhesionForm.css'
import React, { useRef } from 'react';


export default function AdhesionForm() {
  const fileInputRef = useRef(null);

  const handleTextClick = () => {
    fileInputRef.current.click();
  };

    return(
        <section className='AdhesionFormComponent'>
        <section className='AdhesionFormContainer'>
    <Form className='AdhesionForm'>
      <h5>Formulaire d'admission</h5>
      <p>N B : En tant que stagiaire</p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control type="name" placeholder="Nom" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEName">
          <Form.Control type="name" placeholder="PreNom" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Control type="text" placeholder="Poste visé" />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Control type="number" placeholder="Expérience" />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Qu’est ce qui vous motive aà rejoindre Alitcha pour un stage ?" />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} >
              <Form.Control type="text" placeholder="Cv" onClick={handleTextClick}/>
              <input type="file" style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} ref={fileInputRef} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} >
              <Form.Control type="text" placeholder="Lettre de motivation" onClick={handleTextClick}/>
              <input type="file" style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} ref={fileInputRef} />
            </Form.Group>
          </Row>
      <div className='SubmitContainer'>
        <Button variant="primary" type="submit" className='SubmitAdhesion'>
        Envoyer
      </Button>
      </div>
      
    </Form> 
    </section>
    </section>
)
}