import React from 'react'
import classes from './Header.module.css'
import logo from './../../assets/img/Header/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.Header}>
            <div className={classes.Header__content}>
                <img className={classes.Header__logo} src={logo} alt={""}/>
                <h1>content</h1>
                <div className={classes.loginBlock}>
                    {!props.isAuth
                        ?<NavLink to={'/login'}>Login</NavLink>
                        :<div>{props.login}</div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;