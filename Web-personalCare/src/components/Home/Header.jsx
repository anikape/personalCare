import React from 'react';
import Logo from '../../assets/logo.png'
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div class="header-logo">
        <a href="#" class="logo">
          <img src={Logo} /></a>
      </div>
      <div class="header-navbar">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
