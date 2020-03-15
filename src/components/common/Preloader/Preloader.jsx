import React from "react";
import Loader from "./../../../assets/img/Loader/Loader.svg"
import classes from "./Preloader.module.css"

let Preloader = () => {
    return (
        <div className={classes.Preloader}>
            <img className={classes.Preloader__img} src = {Loader} alt='Loader'/>
        </div>
    )
};

export default Preloader;