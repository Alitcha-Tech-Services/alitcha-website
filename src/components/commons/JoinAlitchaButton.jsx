import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './../../styles/features/askDevis.css';

function JoinAlitchaButton() {
    return (
        <div className="mt-4 pb-5">
            <div className="mb-4">
                <p className="text-center">Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Button as={NavLink} to='/joindre' className="text-center w-auto join_alitcha_button button-hover" type='button' >Rejoindre Alitcha</Button>
            </div>
        </div>
    );
}

export default JoinAlitchaButton;
