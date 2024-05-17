// import React from 'react';

/* eslint-disable react/prop-types */

function AproposAccueil() {

  const apropos = [
      "A Propos",
      "Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.",
      "Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.Alitcha est une communauté innovante axée sur le développement de solutions digitales et technologiques, avec une mission dynamique centrée sur l'exploration de projets de recherche novateurs.",
  ];

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="mt-5 mb-5" style={{ width: '70%' }}>
          <h3 className="text-start mb-4">{apropos[0]}</h3>
          <p className="text-justify">{apropos[1]}</p>
          <p className="text-justify">{apropos[2]}</p>
      </div>
    </div>
  );
}

export default AproposAccueil;
