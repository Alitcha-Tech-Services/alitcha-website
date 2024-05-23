/*import 'bootstrap/dist/css/bootstrap.min.css';
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
}*/


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../styles/features/AdhesionForm.css';

export default function AdhesionForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            firstName: '',
            position: '',
            experience: '',
            motivation: '',
            motivationFile: null,
            cvFile: null,
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Votre Nom est requis'),
            firstName: Yup.string().required('Votre Prénom est requis'),
            position: Yup.string().required('Le Poste visé est requis'),
            experience: Yup.number()
                .typeError("Votre années d'expérience doit être un nombre")
                .required("votre Années d'expérience est requis"),
            motivation: Yup.string().required('Motivation & expérience est requise'),
            motivationFile: Yup.mixed().required('votre Lettre de motivation est requise'),
            cvFile: Yup.mixed().required('votre CV est requis'),
        }),

        onSubmit: values => {
            console.log(values);
        },

    });

    return (
        <section className='AdhesionFormComponent'>
            <section className='AdhesionFormContainer'>
                <Form className='AdhesionForm' onSubmit={formik.handleSubmit}>
                    <h5 className='text-center'>Formulaire d&apos;admission</h5>
                    <p className='mb-5'>N B : En tant que stagiaire</p>

                    <Row className="mb-3 adhesionFormRow">
                        <Form.Group as={Col} controlId="formGridName" className="mb-4">
                            <Form.Control type="text" placeholder="Nom" {...formik.getFieldProps('name')} />
                            {
                                formik.touched.name && formik.errors.name ? (
                                    <div className="text-danger text-start">{formik.errors.name}</div>
                                ) : null
                            }
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEName" className="">
                            <Form.Control type="text" placeholder="Prénom" {...formik.getFieldProps('firstName')} />
                            {
                                formik.touched.firstName && formik.errors.firstName ? (
                                <div className="text-danger text-start">{formik.errors.firstName}</div>
                                ) : null
                            }
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 adhesionFormRow">
                        <Form.Group as={Col} className="mb-4">
                            <Form.Control type="text" placeholder="Poste visé" {...formik.getFieldProps('position')} />
                            {
                                formik.touched.position && formik.errors.position ? (
                                    <div className="text-danger text-start">{formik.errors.position}</div>
                                ) : null
                            }
                        </Form.Group>
                        <Form.Group as={Col} className="">
                            <Form.Control type="number" placeholder="Années d'Expérience" {...formik.getFieldProps('experience')} />
                            {
                                formik.touched.experience && formik.errors.experience ? (
                                    <div className="text-danger text-start">{formik.errors.experience}</div>
                                ) : null
                            }
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={4} placeholder="Qu’est ce qui vous motive à rejoindre Alitcha pour un stage ?" {...formik.getFieldProps('motivation')} />
                            {
                                formik.touched.motivation && formik.errors.motivation ? (
                                    <div className="text-danger text-start">{formik.errors.motivation}</div>
                                ) : null
                            }
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label className='text-start text-start'>Votre lettre de motivation</Form.Label>
                            <Form.Control type="file" name='motivationFile' onChange={(event) => { formik.setFieldValue("motivationFile", event.currentTarget.files[0]); }} />
                            {
                                formik.touched.motivationFile && formik.errors.motivationFile ? (
                                    <div className="text-danger text-start">{formik.errors.motivationFile}</div>
                                ) : null
                            }
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label className='text-start'>Votre CV</Form.Label>
                            <Form.Control type="file" name='cvFile' onChange={(event) => { formik.setFieldValue("cvFile", event.currentTarget.files[0]); }} />
                            {
                                formik.touched.cvFile && formik.errors.cvFile ? (
                                    <div className="text-danger text-start">{formik.errors.cvFile}</div>
                                ) : null
                            }
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
