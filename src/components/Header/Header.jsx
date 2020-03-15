import React from 'react'
import classes from './Header.module.css'
import logo from './../../assets/img/Header/logo.png'

const Header = () =>{
    return(
        <header className={classes.Header}>
            <div className={classes.Header__content}>
                <img className={classes.Header__logo} src={logo} alt={""}/>
                <h1>content</h1>
            </div>
        </header>
    );
};

export default Header;