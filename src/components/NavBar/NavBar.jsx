import React from 'react'
import classes from './NavBar.module.css'

const LINKS = [
    {
        src: '/img/Nav/Profile.png',
        name: 'Profile',
        href: '/profile'
    },
    {
        src: '/img/Nav/Messages.png',
        name: 'Messages',
        href: '/messages'
    },
    {
        src: '/img/Nav/News.png',
        name: 'News',
        href: '/news'
    },
    {
        src: '/img/Nav/Music.png',
        name: 'Music',
        href: '/music'
    },
    {
        src: '/img/Nav/Setting.png',
        name: 'Setting',
        href: '/setting'
    }
];

const NavBar = () => {
    return (
        <nav className={classes.Navigation}>
            {LINKS.map(link => {
                const { src, name, href } = link;
                return (
                    <a href={href} className={classes.Navigation__link}>
                        <div className={classes.Navigation__content}>
                            <img className={classes.Navigation__img} src={src} alt=''/>
                            {name}
                        </div>
                    </a>
                )
            })}
        </nav>
    );
};

export default NavBar;