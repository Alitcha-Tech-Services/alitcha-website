import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './../../styles/features/CarrouselMembres.css'; 

/* eslint-disable react/prop-types */

const CarrouselMembres = ({ membres }) => {
  return (
    <Carousel>
      {membres.map((membre, index) => (
        <div key={index}>
          <img src={membre.photo} alt={membre.nom} />
          <p>{membre.nom}</p>
          <p>{membre.titre}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarrouselMembres;
