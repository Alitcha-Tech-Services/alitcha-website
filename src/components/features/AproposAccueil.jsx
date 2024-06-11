// import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

/* eslint-disable react/prop-types */

function AproposAccueil() {

  const apropos = [
      "A Propos",
      "Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.",
      "Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.",
  ];

  return (
      <div>
          <div className="d-flex flex-row justify-content-center">
      <div className="mt-5 mb-5" style={{ width: '70%' }}>
          <h3 className="text-start mb-4 text-color-primary">{apropos[0]}</h3>
          <p className="text-justify">{apropos[1]}</p>
          <p className="text-justify">{apropos[2]}</p>
      </div>
    </div>
          <div className='flex-end justify-content-end d-flex' style={{ width: "85%", 'margin-top': '-40px' }}>
              <Button as={NavLink} to="/About" className='bg-black d-flex flex-row' style={{ width: "150px", border: 'none' }}><span style={{ color: '#aaa' }}>Voir plus </span><span className=''> <GoArrowRight /></span></Button>
          </div>
      </div>
  );
}

export default AproposAccueil;
