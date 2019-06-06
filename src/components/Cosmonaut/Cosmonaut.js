import React from 'react';

import './Cosmonaut.css';
import cosmonautImage from '../../img/cosmonaut.png';

const Cosmonaut = (className) => (
  <div className={className.className}>
    <img className='cosmonaut__image' src={cosmonautImage} alt='@@'/>
    <p className='cosmonaut__desc'>Товарищ, заполни карточку поиска и нажми «<strong>поехали</strong>»</p>
  </div>
);

export default Cosmonaut;
