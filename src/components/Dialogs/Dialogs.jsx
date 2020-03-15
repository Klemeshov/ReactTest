import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogUser = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <NavLink to={path} activeClassName={classes.Dialogs__activeUser}>
            <div className={classes.Dialogs__user}>
                {props.name}
            </div>
        </NavLink>
    )
};

const Message = (props) => {
    return (
        <div className={classes.Dialogs__message}>
            {props.message}
        </div>
    )
};


const Dialogs = (props) => {


    let ref = React.createRef();
    let SendMessage = () => {
        props.onSendMessage();
    };
    let ChangeCurrentMessage = () => {
        props.onChangeCurrentMessage(ref.current.value);
    };

    return (
        <div className={classes.Dialogs}>
            <div className={classes.Dialogs__users}>
                {props.data.dialogs.map(user => {
                    const {id, name} = user;
                    return (
                        <DialogUser id={id} name={name}/>
                    )
                })}
            </div>
            <div className={classes.Dialogs__messages}>
                {props.data.messages.map(messageInfo =>
                    <Message message={messageInfo.message}/>
                )}
            </div>
            <div className={classes.Dialogs__input}>
                <textarea ref={ref} className={classes.textArea} onChange={ChangeCurrentMessage}
                          value={props.data.currentMessage}/>
                <button className={classes.Button} onClick={SendMessage}>
                    send
                </button>
            </div>


        </div>
    )
};

export default Dialogs;