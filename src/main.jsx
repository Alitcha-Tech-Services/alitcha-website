import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/features/Article.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Form>
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
      </Row>
      

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Row>
      <Form.Group as={Col} >
          <Form.Control type="textArea" placeholder="Expérience" />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} >
          <Form.Control type="file" placeholder="Expérience" />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} >
          <Form.Control type="file" placeholder="Expérience" />
      </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form> */}
  </React.StrictMode>,
)
