import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/Forms";
import {maxLength, required} from "../../validators/validators";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'

const maxLength20 = maxLength(20);


const LoginForm = reduxForm({form: 'login'})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       className={classes.LoginPage__input}
                       ErrorClassName={classes.LoginPage__input_error}
                       name={"login"}
                       validate={[required, maxLength20]}
                       placeholder={'Login'}
                       type={"login"}/>
            </div>
            <div>
                <Field component={Input}
                       className={classes.LoginPage__input}
                       ErrorClassName={classes.LoginPage__input_error}
                       name={"password"}
                       validate={[required, maxLength20]}
                       placeholder={'Password'}
                       type={"password"}/>
            </div>
            <div className={classes.LoginPage__checkbox}>
                <Field component={"input"}
                       name={"rememberMe"}
                       type={'checkbox'}/>
                Remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button className={classes.LoginPage__button}>
                    Sign in
                </button>
            </div>
        </form>
    )
});


const Auth = (login) => (formData) => {
    login(formData);
};

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={classes.LoginPage}>
            <div className={classes.LoginPage__text}>
                <h1>Login</h1>
            </div>
            <div className={classes.LoginPage__form}>
                <LoginForm onSubmit={Auth(props.login)}/>
            </div>
        </div>
    )
};

export default Login