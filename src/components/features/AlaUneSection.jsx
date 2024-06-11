import EventImage from './../../assets/EventImage.jpg'
import EventItem from './EventItem'
import './../../styles/features/AlaUneSection.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrLinkNext } from "react-icons/gr";
import Data from '../../data/Data.js';



export default function AlaUneSection()
{
    const data = Data().filter(item => item.popular)

    return(
        <section>
            <h3>Découvrez d’incroyables evenements</h3>
            <div> 
                <Form inline>
                    <Row className='SearchLine'>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="🔍 Rechercher"
                            className='SearchBar'
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className='VoirPlusLine'>
                <p>A la une</p> 
                <div className='VoirPlusButton'><p>Voir plus</p> <GrLinkNext className='FlecheNext'/></div>
            </div>
            <div className='EventSection'>
                {
                    data.map((value, index) => {
                        return(
                        <EventItem key={index} {...value} />    
                        )
                    })
                }
            </div>
            
        </section>
    )
}