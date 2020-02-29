import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="headerContent">
        <img
          className="headerContent-icon"
          src={'img/Header/logo.png'}
          alt={''}
        />
        <h1>content</h1>
      </div>
    </header>
  );
};

export default Header;
