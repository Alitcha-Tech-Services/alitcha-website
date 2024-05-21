import { GrAdd } from 'react-icons/gr';
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */

export default function Article({image, articleTitle, nomAuteur, datePublished }) {

    return (
        <div className='_bloc'>
            <div className='_article'>
                <div className="articles">
                    <div className="image-container">
                        <img src={image} alt="lmage" className="img-fluid" />
                    </div>
                    <div className="circle">
                        <Button as={NavLink} to='/Detail-Article' className='CerclePlus' type='button'><GrAdd /></Button>
                    </div>
                </div>
                <div className="text-container">
                    <p>{articleTitle}</p>
                    <p>Ecrit par {nomAuteur}</p>
                    <p>Publié le {datePublished} </p>
                </div> 
            </div>
        
            <div className='w-100 d-flex flex-row-reverse'>
                <span className='d-flex justify-content-end flex-end' style={{ width: '120px' }}>
                    <FaRegStar className='d-inline-block m-2 text-color-primary' size={20} />  
                    <FaDownload className='d-inline-block m-2 text-color-primary' size={20} /> 
                </span>
            </div>
        </div>
    )
}

