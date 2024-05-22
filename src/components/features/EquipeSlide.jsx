import '../../styles/features/equipeSlide.css';

import { v4 as uuidv4 } from "uuid";
import CardEquipeSlide from "../commons/CardEquipeSlide";
import CarouselEquipeSlide from "../commons/CarouselEquipeSlide";

import image1 from "./../../assets/notreequipeimage.png";
import image2 from "./../../assets/Samuel.png";
import image3 from "./../../assets/Samuel-.png";
import image4 from "./../../assets/photoThierry1.png";


function EquipeSlide() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <CardEquipeSlide image={image1} role="DATABASE ADMINISTARATOR" name="DENISON DENISON" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardEquipeSlide image={image4} role="DATA SCIENTIST" name="TOHOUEGNON Samuel" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardEquipeSlide image={image3} role="DATA INGENIEER" name="TCHONKLOE Thierry" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardEquipeSlide image={image4} role="DATA ANALYSTE" name="TCHONTY THIERRY" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <CardEquipeSlide image={image2} role="DATABASE ADMINISTARATOR" name="Thierry TCHONKLOE" />
      )
    }
  ];
  return (
      <div className='mb-5'>
          <h1 className='text-center mb-5 text-white'>Notre Equipe</h1>
          <div className="EquipeSlideBody">
              <div>
                  <CarouselEquipeSlide cards={cards} height="500px" width="100%" margin="0 auto" offset={200} showArrows={false} />
              </div>
          </div>
      </div>
  );
}


export default EquipeSlide;
