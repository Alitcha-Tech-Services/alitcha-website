import './../../styles/features/EventItem.css'
import EventImage from './../../assets/EventImage.jpg'
import { MdOutlineDateRange, MdOutlinePlace } from "react-icons/md";
import EventParticipantImg from './../../assets/EventParticipant.jpg'
import { Link } from 'react-router-dom';

export default function EventItem(props){
return(
    <Link to={"/EventPresentation/" + props.id}>
        <div className='EventItemDiv'>
        <div className='DivImgEvent'>
            <img src={props.image} className='ImgEvent'></img>
        </div>
        <p className='TitleEvent'>{props.title} </p>
        <div className='EventDateRow'>
            <div className='EventDate'>    
                <div><MdOutlineDateRange /></div>
                <p>{props.date}</p>
            </div>
            <div className='EventParticipants'>
            <img src={EventParticipantImg}/>
            <img src={EventParticipantImg}/>
            <img src={EventParticipantImg}/>
            </div>
        </div>
        <div className='EventPlaceRow'>
            <div><MdOutlinePlace /></div>
            <p>{props.place}</p>
        </div>
    </div>
    </Link> 
    
)
}