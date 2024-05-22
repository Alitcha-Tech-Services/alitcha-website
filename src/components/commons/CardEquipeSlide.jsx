import { useState } from "react";
import { useSpring, animated } from "react-spring";

/* eslint-disable react/prop-types */

function CardEquipeSlide({ image, role, name }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <div className="card_team-member">
        <div>
          <animated.div className="card" style={props3} onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)} >
              <div className="_image-container">
                  <img src={image} alt={`${name} - ${role}`} className="img_image-container" />
              </div>
              <div className="info-container_card">
                  <p className="text-center mb-3 mt-4 text-white">{name}</p>
                  <p className="text-center team-role text-white">{role}</p>
              </div>
          </animated.div>
        </div>
    </div>
  );
}


export default CardEquipeSlide;
