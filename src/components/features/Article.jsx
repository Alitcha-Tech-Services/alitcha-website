import './../../styles/features/Article.css'; 
import { FaRegStar } from 'react-icons/fa';
import { GrDownload, GrAdd } from 'react-icons/gr';
import Velo from '../../assets/velo-nature.jpg';

export default function Article() {

    return (
        
        <div className='bloc'>
        <div className="articles">
         <div className="image-container">
            <img src={Velo} alt="Image" className="img-fluid" />
            <div className="circle CerclePlus"><GrAdd /></div>
          </div>
          <div className="text-container">
            <p>Article sur lIA </p>
            <p>Ecrit par Joseph AYI</p>
            <p>Publié le 24/08/1/24 à 16h </p>
          </div> 
        
        <div>
           <FaRegStar />  
           <GrDownload /> 
        </div>
       </div>
    </div>
    )
}

