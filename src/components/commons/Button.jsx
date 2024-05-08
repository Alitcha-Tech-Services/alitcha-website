import React from 'react';

function Button({ title}) {
  return (
    <div className="button">
      <button className='subscribe-button'>{title}</button>
    </div>
  );
}
export default Button ;