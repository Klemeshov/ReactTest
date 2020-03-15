import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom"
import profileLogo from '../../assets/img/Nav/Profile.png'
import messagesLogo from '../../assets/img/Nav/Messages.png'
import newsLogo from '../../assets/img/Nav/News.png'
import musicLogo from '../../assets/img/Nav/Music.png'
import usersLogo from '../../assets/img/Nav/Users.png'
import settingLogo from '../../assets/img/Nav/Setting.png'

const LINKS = [
    {
        src: profileLogo,
        name: 'Profile',
        href: '/profile'
    },
    {
        src: messagesLogo,
        name: 'Dialogs',
        href: '/dialogs'
    },
    {
        src: newsLogo,
        name: 'News',
        href: '/news'
    },
    {
        src: musicLogo,
        name: 'Music',
        href: '/music'
    },
    {
        src: usersLogo,
        name: 'All Users',
        href: '/users'
    },
    {
        src: settingLogo,
        name: 'Setting',
        href: '/setting'
    }
];

const NavBar = () => {
    return (
        <nav className={classes.Navigation}>
            {LINKS.map(link => {
                const {src, name, href} = link;
                return (
                    <NavLink to={href} className={classes.Navigation__link}
                             activeClassName={classes.Navigation_active_link}>
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