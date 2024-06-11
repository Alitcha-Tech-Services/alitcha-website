import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import './../../styles/features/footer.css'; 
import logo from './../../assets/logo-alitcha.png'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer">
      <Container fluid className="footerContainer">
        <Row>
          <Col>
          <div className="logo-footer">
            <img src={logo} alt="Company Logo" /> 
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footerNav d-flex justify-content-center">
              <div className="footerNav_Nav d-flex justify-content-between">
                <Nav.Item class="_w-100_"><Nav.Link as={NavLink} to="/Home">Accueil</Nav.Link></Nav.Item>
                <Nav.Item class="_w-100_"><Nav.Link as={NavLink} to="/Solution">Solution</Nav.Link></Nav.Item>
                <Nav.Item class="_w-100_"><Nav.Link as={NavLink} to="/About">A Propos</Nav.Link></Nav.Item>
                <Nav.Item class="_w-100_"><Nav.Link as={NavLink} to="/Blog">Blog</Nav.Link></Nav.Item>
                <Nav.Item class="_w-100_"><Nav.Link as={NavLink} to="/Events">Evènements</Nav.Link></Nav.Item>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="socialIcons">
            <a href="https://www.facebook.com/Alitcha-106586631967294"><FaFacebook /></a>
            <a href="https://www.instagram.com/ali.tcha/"><FaInstagram /></a>
            <a href="https://twitter.com/Alitcha5?t=RlRUgTunK2yOglcP7WbmgQ&s=09!"><FaTwitter /></a>
            <a href="https://www.alitchateam.com/"><FaGlobe /></a>
            </div>
          </Col>
        </Row>
        <Row className="footerBottom">
          <Col>
            <p>
              All Rights, Copyright &copy;2023
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
