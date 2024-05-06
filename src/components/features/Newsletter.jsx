import { Formik, Form, Field, ErrorMessage } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import '../../styles/features/newsletter.css'

export default function Newsletter() {

    const initialValues = {
        email: '',
    };
    
    const handleSubmit = (values, { resetForm }) => {
    // Vous pouvez implémenter ici la logique d'envoi du formulaire
        console.log('Formulaire soumis avec succès !', values.email);
        resetForm(); // Réinitialiser le formulaire après soumission
    };
    
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Veuillez entrer votre adresse e-mail';
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Adresse e-mail invalide';
        }

        return errors;
    };

    return (
        <>
            <div id="newsletter" className="p-5 my-5 border-radius">
                <h3>Morem ipsum dolor sit amet</h3>
                <div className='my-5'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione libero architecto quia molestiae itaque? Perspiciatis consequuntur unde accusamus sequi? Dignissimos eum cumque commodi quae. Officia amet quod harum similique in.
                </div>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
                    <Form>
                        <ErrorMessage name="email" component="span" className="text-danger" />

                        <div className='newsletter-input-container'>
                            <div className="input-group mb-2 mt-1">
                                <span className="input-group-text">
                                    <HiOutlineMail size={25}  className='text-color-primary'/>
                                </span>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Entrez votre adresse e-mail"
                                    className="form-control newsletter-input"
                                />
                            </div>
                            <button type="submit" className="background-primary text-white button-hover newsletter-button">
                                Souscrire
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}