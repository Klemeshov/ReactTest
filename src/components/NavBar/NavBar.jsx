import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const LINKS = [
    {
        src: '/img/Nav/Profile.png',
        name: 'Profile',
        href: '/profile'
    },
    {
        src: '/img/Nav/Messages.png',
        name: 'Dialogs',
        href: '/dialogs'
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
                    <NavLink to={href} className={classes.Navigation__link} activeClassName={classes.Navigation_active_link}>
                        <div className={classes.Navigation__content}>
                            <img className={classes.Navigation__img} src={src} alt=''/>
                            {name}
                        </div>
                    </NavLink>
                )
            })}
        </nav>
    );
};

export default NavBar;