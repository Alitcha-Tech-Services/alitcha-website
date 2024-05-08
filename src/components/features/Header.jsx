import React from 'react';
import '../../styles/features/header.css'
function Header() {
  return (
    <div className="App">
        <div className="container">
          <div className="logo">Clitcha</div>
          <nav className="nav">
            <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">A propos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a className='event' href="#">Événements</a></li>
              <li><a className='devis' href="#">Demander un devis</a></li>
              <li><a href="#">Connexion intranet</a></li>
            </ul>
          </nav>
        </div>
    </div>
     

      );
}


export default Header ;
