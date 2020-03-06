import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let UserData = [
    {id: 1, name: 'Барсик'},
    {id: 2, name: 'Шарик'},
    {id: 3, name: '3'},
    {id: 4, name: '4'}];


const DialogUser = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <NavLink to={path}>
            <div className={classes.Dialogs__user}>
                {props.name}
            </div>
        </NavLink>
    )
};

const Message = (props) => {
    return (
        <div className={classes.Dialogs__message}>
            {props.data}
        </div>
    )
};


const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__users}>
                <DialogUser name='Барсик' id='1'/>
            </div>
            <div className={classes.Dialogs__messages}>
                <Message data="ррррррр"/>
            </div>
        </div>
    )
};

export default Dialogs;