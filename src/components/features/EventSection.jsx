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
import Data from '../../data/Data.js'


export default function EventSection()
{
    const data = Data().filter(item=> item.popular==false)
    return(
        <section>
            
            
            <div className='EventSection'>
                {
                    data.map((value, index) => {
                        return(
                        <EventItem key={index} {...value}
                         />    
                        )
                    })
                }
            </div>
            <div className='VoirPlusLine'> 
                <p></p>
                <div className='VoirPlusButton'><p>Voir plus</p> <GrLinkNext className='FlecheNext'/></div>
            </div>
                {/* <div><EventPresentation /></div> */}

            {/* <div className='EventPresentationBox'>
                <img src={EventPresentation1} className='EventPresentationImg'></img>
                <p className='TitleEvent'>Lorem ipsum derller</p>
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
                <p className='DescriptionParagraph'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. <span className='LirePlus'>Lire plus</span></p>
                <div className='EventDateRow'>
                    <div className='EventDate'>    
                        <div><MdOutlineDateRange /></div>
                        <p>24 Mars 2023</p>
                    </div>
                    <div className='EventParticipants'>
                    
                    </div>
                </div>
                <div className='EventPlaceRow2'>
                    <div><MdOutlinePlace /></div>
                    <p>Cotonou</p>
                </div>
                <div className='EventMapRow2'>
                    <div><GrMapLocation /></div>
                    <p>Maps</p>
                </div>
                <div className='divBtnSinscrire'>
                <Button className='BoutonSinscrire' href="#">S'inscrire</Button>
                </div>
            </div> */}
        </section>
    )
}