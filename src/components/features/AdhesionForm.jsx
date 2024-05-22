import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/features/AdhesionForm.css'


export default function AdhesionForm() {

    return(
        <section className='AdhesionFormComponent'>
            <section className='AdhesionFormContainer'>
                <Form className='AdhesionForm'>
                    <h5 className='text-center'>Formulaire d&apos;admission</h5>
                    <p className='mb-5'>N B : En tant que stagiaire</p>

                    <Row className="mb-3 adhesionFormRow">
                        <Form.Group as={Col} controlId="formGridName" className="mb-4">                            <Form.Control type="name" placeholder="Nom" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEName" className="">
                            <Form.Control type="name" placeholder="Prenom" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 adhesionFormRow">
                        <Form.Group as={Col} className="mb-4" >
                            <Form.Control type="text" placeholder="Poste visé" />
                        </Form.Group>
                        <Form.Group as={Col} className="" >
                            <Form.Control type="number" placeholder="Années d'Expérience" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={4} placeholder="Qu’est ce qui vous motive à rejoindre Alitcha pour un stage ?" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label className='text-start'>Votre lettre de motivation</Form.Label>
                            <Form.Control type="file" size="lg" name='motivation' />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label className='text-start'>Votre CV</Form.Label>
                            <Form.Control type="file" name='cv' size="lg" placeholder="Lettre de motivation" />
                        </Form.Group>
                    </Row>
                    <div className='SubmitContainer'>
                        <Button variant="primary" type="submit" className='SubmitAdhesion'>Envoyer</Button>
                    </div>
      
                </Form> 
            </section>
        </section>
    );
}