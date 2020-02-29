import React from 'react'

const LINKS = [
    {
        src: '/img/Nav/Profile.png',
        name: 'Profile',
        href: '#'
    },
    {
        src: '/img/Nav/Messages.png',
        name: 'Messages',
        href: '#'
    },
    {
        src: '/img/Nav/News.png',
        name: 'News',
        href: '#'
    },
    {
        src: '/img/Nav/Music.png',
        name: 'Music',
        href: '#'
    },
    {
        src: '/img/Nav/Setting.png',
        name: 'Setting',
        href: '#'
    }
];

const NavBar = () => {
    return (
        <nav className='nav'>
            {LINKS.map(link => {
                const { src, name, href } = link;
                return (
                    <a href={href}>
                        <div>
                            <img src={src} alt=''/>
                            {name}
                        </div>
                    </a>
                )
            })}
        </nav>
    );
};

export default NavBar;