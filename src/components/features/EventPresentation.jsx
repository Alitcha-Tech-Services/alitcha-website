import EventImage from './../../assets/EventImage.jpg'
import EventImage2 from './../../assets/EventImage2.jpg'
import EventImage3 from './../../assets/EventImage3.jpg'
import EventPresentation1 from './../../assets/EventPresentation.jpg'
import EventItem from './EventItem'
import './../../styles/features/EventSection.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineDateRange, MdOutlinePlace } from "react-icons/md";
import EventParticipantImg from './../../assets/EventParticipant.jpg'
import { GrMapLocation } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom'
import Data from '../../data/Data.js'

export default function EventPresentation()
{
    const { id }=useParams()
    const item = Data().find(element => element.id == id) || {}
    console.log(item)
    return(
        <section>
            <div className='EventPresentationBox'>
                <img src={item.image} className='EventPresentationImg'></img>
                <p className='TitleEvent'>{item.title}</p>
                <div className='VoirPlusLine2'> 
                    <div className='Participants'><p><b>100 k</b> People are joined</p>
                    <div className='EventParticipants2'>
                        <img src={EventParticipantImg}/>
                        <img src={EventParticipantImg}/>
                        <img src={EventParticipantImg}/>
                    </div>
                </div>
                    <div className='VoirPlusButton'><p>Voir plus</p> <GrLinkNext className='FlecheNext'/></div>
                </div>
                <h3>Description</h3>
                <p className='DescriptionParagraph'>{item.desc} <span className='LirePlus'>Lire plus</span></p>
                <div className='EventDateRow'>
                    <div className='EventDate'>    
                        <div><MdOutlineDateRange /></div>
                        <p>{item.date} </p>
                    </div>
                    <div className='EventParticipants'>
                    
                    </div>
                </div>
                <div className='EventPlaceRow2'>
                    <div><MdOutlinePlace /></div>
                    <p>{item.place}</p>
                </div>
                <div className='EventMapRow2'>
                    <div><GrMapLocation /></div>
                    <p>Maps</p>
                </div>
                <div className='divBtnSinscrire'>
                <Button className='BoutonSinscrire' href="#">S'inscrire</Button>
                </div>
            </div>
        </section>
    )
}