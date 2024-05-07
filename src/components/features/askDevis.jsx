import { Container} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './../../styles/features/askDevis.css'; 
import CustomButton from  './../commons/button';

function AskDevis() {
    return (
        <Container className='askDevisContainer d-flex justify-content-center'>
            <div className='afterAskDevisContainer'>
            <h4 className='text-white text-center'>Demander un Devis</h4>
            <Form>
                <FloatingLabel controlId="floatingUsername" label="username" className="mt-5 mb-5">
                    <Form.Control type="text" placeholder="Votre Nom et Prenoms" required/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mt-5 mb-5">
                    <Form.Control type="email" placeholder="name@example.com" required/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Details sur la demande" className='mt-5 mb-4'>
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '125px' }} required/>
                </FloatingLabel>
                <div className='d-flex justify-content-center align-items-center'>
                    <CustomButton text=' Envoyer ->' className='text-center' type="submit"></CustomButton>
                </div>
            </Form>
            </div>
        </Container>
    );
}

export default AskDevis;
