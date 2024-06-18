import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, FloatingLabel, Button} from 'react-bootstrap';
import './../../styles/features/askDevis.css'; 

// Schéma de validation avec yup

const validationSchema = yup.object({
    username: yup.string().required("Votre Nom est requis"),
    email: yup.string().email("Email invalide").required("Email est requis"),
    comment: yup.string().required("Votre Motivation est requis"),
});

const IntranetConnect = () => {
    return (
        <div className="transition-container">
            <Container className="askDevisContainer d-flex justify-content-center">
                <div className="afterAskDevisContainer">
                    <h4 className="text-white text-center mb-5">Connexion Intranet</h4>
                    <Formik initialValues={{username: '', email: '', comment: '' }} validationSchema={validationSchema} onSubmit={(values) => {console.log('Formulaire soumis:', values);}}>
                        {({ isSubmitting }) => (
                            <Form>
                                <inputLabel id="floatingUsername" label="Votre Nom et votre Prénom">
                                    <Field name="username" type="text" placeholder="Votre Nom et votre Prénoms" className="form-control" style={{height: '50px'}}/>
                                    <ErrorMessage name="username" component="div" className="text-danger text-start" />
                                </inputLabel>

                                <inputLabel id="floatingEmail" label="Adresse Email" >
                                    <Field name="email" type="email" placeholder="name@example.com" className="form-control mt-5" style={{height: '50px'}}/>
                                    <ErrorMessage name="email" component="div" className="text-danger text-start" />
                                </inputLabel>

                                <FloatingLabel controlId="floatingTextarea2" label="Pourquoi voulez-vous rejoindre le réseau intranet d'Alitcha?" className="mt-5 mb-4">
                                    <Field name="comment" as="textarea" placeholder="Raison pour rejoindre" style={{ height: '140px' }} className="form-control"/>
                                    <ErrorMessage name="comment" component="div" className="text-danger text-start" />
                                </FloatingLabel>

                                <div className="d-flex justify-content-center align-items-center">
                                    <Button className="text-center intranet_button button-hover" type="submit" disabled={isSubmitting}>Envoyez la demande</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </div>
    );
};

export default IntranetConnect;

