import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from './../../assets/_logo-alitcha_.png';
import './../../styles/features/header.css';
import CustomButton from  './../commons/button';

function ResponsiveNav() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-black navbarHeaderContainer d-flex flex-row justify-content-center">
            <Container fluid className='headerContainer d-flex flex-row justify-content-between'>

                <Navbar.Brand href="#home" className="logo_header">
                    <img src={logo} alt="Logo" className="logo_header-img" />
                </Navbar.Brand>

                <Navbar.Toggle className='w-auto _w-auto_' aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className='_lien_nav_' id="responsive-navbar-nav">
                    <Nav className="me-auto mt-2 d-flex justify-content-evenly _me_auto_">
                        <Nav.Link href="#pricing">Accueil</Nav.Link>
                        <Nav.Link href="#pricin">Solutions</Nav.Link>
                        <Nav.Link href="#prici">A propos</Nav.Link>
                        <Nav.Link href="#pric">Blog</Nav.Link>
                        <Nav.Link href="#pri">Evènements</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className='_intranet_devis_'>
                    <Nav className="ml-auto d-flex justify-content-between">
                        <CustomButton className='header_button' text="Demander un devis" href="./#memes"></CustomButton>
                        <CustomButton className='header_button' borderColor="white" textColor="white" text="Connexion intranet" href="./#meme"></CustomButton>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ResponsiveNav;