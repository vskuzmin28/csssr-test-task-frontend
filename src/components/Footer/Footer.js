import React from 'react';

import './Footer.css';
import iconTwitter from '../../img/icon-twitter.png';
import iconVk from '../../img/icon-vk.png';
import iconFacebook from '../../img/icon-facebook.png';
import iconIn from '../../img/icon-in.png';
import iconSoundcloud from '../../img/icon-soundcloud.png';
import iconYoutube from '../../img/icon-youtube.png';

const Footer = () => (
  <footer className='footer container__footer'>
    <ul className='socials footer__socials'>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconTwitter} alt='@@' />
        </a>
      </li>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconVk} alt='@@' />
        </a>
      </li>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconYoutube} alt='@@' />
        </a>
      </li>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconFacebook} alt='@@' />
        </a>
      </li>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconIn} alt='@@' />
        </a>
      </li>
      <li className='socials__item'>
        <a className='socials__link' href='#'>
          <img className='socials__icon' src={iconSoundcloud} alt='@@' />
        </a>
      </li>
    </ul>
    <div className='github'>
      <p className='github__title'>Ссылка на</p>
      <a className='github__link' href='' title=''>github</a>
    </div>
  </footer>
);

export default Footer;
