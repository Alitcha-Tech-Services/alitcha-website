import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Utilisation de NavLink pour les liens de navigation
import logo from './../../assets/_logo-alitcha_.png';
import './../../styles/features/header.css';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" className="bg-black navbarHeaderContainer d-flex flex-row justify-content-center">
        <Container fluid className='headerContainer d-flex flex-row justify-content-between'>
            <Navbar.Brand as={NavLink} to="/Home" className="logo_header">
                <img src={logo} alt="Logo" className="logo_header-img" />
            </Navbar.Brand>

            <Navbar.Toggle className='w-auto _w-auto_' aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse className='_lien_nav_' id="responsive-navbar-nav">
                <Nav className="me-auto mt-2 d-flex justify-content-evenly _me_auto_">
                    <Nav.Link as={NavLink} to="/Home">Accueil</Nav.Link>
                    <Nav.Link as={NavLink} to="/Solution">Solutions</Nav.Link>
                    <Nav.Link as={NavLink} to="/About">A propos</Nav.Link>
                    <Nav.Link as={NavLink} to="/Blog">Blog</Nav.Link>
                    <Nav.Link as={NavLink} to="/Events">Evènements</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse className='_intranet_devis_'>
                <Nav className="ml-auto d-flex justify-content-between header_button_">
                    <Button as={NavLink}  to="/Devis" className='header_button header_button_first'>Demander un devis</Button>
                    <Button as={NavLink}  to="/Intranet" className='header_button header_button_second'>Connexion intranet</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;