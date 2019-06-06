import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../../img/logo.png';

const Header = () => (
  <header className='header container__header'>
  <a className="header__logo logo" href="http://csssr.com" title="">
    <img src={logo} alt="@@"/>
  </a>
  <nav className='header__navigation navigation'>
    <ul className='navigation__list'>
      <li className='navigation__item'>
        <Link className='navigation__link' to="/">Главная</Link>
      </li>
      <li>
        <Link className='navigation__link' to="/about/">Обо мне</Link>
      </li>
    </ul>
  </nav>
</header>
);

export default Header;
