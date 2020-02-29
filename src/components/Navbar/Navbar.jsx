import React from 'react';
import './Navbar.css';

const LINKS = [
  {
    src: '/img/Nav/Profile.png',
    name: 'Profile',
    href: '/profile',
  },
  {
    src: '/img/Nav/Messages.png',
    name: 'Messages',
    href: '/messages',
  },
  {
    src: '/img/Nav/News.png',
    name: 'News',
    href: '/news',
  },
  {
    src: '/img/Nav/Music.png',
    name: 'Music',
    href: '/music',
  },
  {
    src: '/img/Nav/Setting.png',
    name: 'Settings',
    href: '/settings',
  },
];

const NavBar = props => {
  const { handleRouteChange } = props;

  return (
    <nav className="Nav">
      {LINKS.map(link => {
        const { src, name, href } = link;
        return (
          <a className="Nav__link" onClick={() => handleRouteChange(href)}>
            <div className="Nav__link-container">
              <img src={src} alt="" className="Nav__link-icon" />
              {name}
            </div>
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;
