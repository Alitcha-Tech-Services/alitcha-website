import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, FloatingLabel, Button } from 'react-bootstrap';
import './../../styles/features/askDevis.css';


const validationSchema = yup.object({
    username: yup.string().required("Votre Nom est requis"),
    email: yup.string().email("Email invalide").required("Email est requis"),
    comment: yup.string().required("Votre Motivation est requise"),
});

const AskDevis = () => {
    return (
        <div className="transition-container">
            <Container className='askDevisContainer d-flex justify-content-center'>
                <div className='afterAskDevisContainer'>
                    <h4 className='text-white text-center mb-5'>Demander un Devis</h4>
                    <Formik initialValues={{ username: '', email: '', comment: '' }} validationSchema={validationSchema} onSubmit={(values, { setSubmitting }) => { console.log('Formulaire soumis:', values); setSubmitting(false); }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <inputLabel id="floatingUsername" label="Votre Nom et Prénom" className="mt-5 mb-5">
                                    <Field name="username" type="text" placeholder="Votre Nom et Prénoms" className="form-control" style={{height: '50px'}}/>
                                    <ErrorMessage name="username" component="div" className="text-danger text-start" />
                                </inputLabel>

                                <inputLabel id="floatingEmail" label="Adresse Email">
                                    <Field name="email" type="email" placeholder="name@example.com" className="form-control mt-5" style={{height: '50px'}} />
                                    <ErrorMessage name="email" component="div" className="text-danger text-start" />
                                </inputLabel>

                                <FloatingLabel controlId="floatingTextarea2" label="Détails sur la demande" className='mt-5 mb-4'>
                                    <Field name="comment" as="textarea" placeholder="Décrivez votre demande" style={{ height: '125px' }} className="form-control" />
                                    <ErrorMessage name="comment" component="div" className="text-danger text-start" />
                                </FloatingLabel>

                                <div className="d-flex justify-content-center align-items-center">
                                    <Button className="text-center intranet_button mb-3" type="submit" disabled={isSubmitting}>Envoyez la demande</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </div>
    );
};

export default AskDevis;