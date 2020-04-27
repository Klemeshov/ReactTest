import React from "react";
import classes from "./Forms.module.css"

export const TextArea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {isError ? <span className={classes.error}>
                {meta.error}
            </span> : <></>}
        </div>
    )
};
export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input className={isError?classes.errorForm:""} {...input} {...props}/>
            </div>
            {isError ? <span className={classes.error}>
                {meta.error}
            </span> : <></>}
        </div>
    )
};
