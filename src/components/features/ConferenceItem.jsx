import React from 'react';
import Button from '../commons/Button';
import "../../styles/ConferenceItem.css";

function ConferenceItem({ title, description }) {
  return (
    <div className="conference-item" >
      <h3>{title}</h3>
      <p>{description}</p>
      
      <Button title="Souscrire"/>

    </div>
  );
}
export default ConferenceItem ;