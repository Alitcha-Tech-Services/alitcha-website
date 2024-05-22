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
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGlobe /></a>
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
