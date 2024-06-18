/* eslint-disable react/prop-types */
import '../../styles/commons/atelier.css'
import { FaHeart } from 'react-icons/fa'
export default function AtelierItem({image, title, like, action}){

    return (
        <>
            <div id="atelier-item">
                <div>
                    <img src={image} alt="" className="image-fluid"/>
                </div>
                <div>
                    <span>{title}</span>
                    <span>{like} <FaHeart size={18} className='text-color-primary' style={{cursor: 'pointer'}} onClick={() => action()}/> </span>
                </div>
            </div>
        </>
    )
}