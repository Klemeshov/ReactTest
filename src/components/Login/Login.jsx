import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/Forms";
import {maxLength, required} from "../../validators/validators";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLength(20);


const LoginForm = reduxForm({form: 'login'})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} validate={[required,maxLength20]} placeholder={'Login'} type={"login"}/>
            </div>
            <div>
                <Field component={Input} name={"password"} validate={[required,maxLength20]} placeholder={'Password'} type={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={'checkbox'}/>
                Remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
});


const Auth = (login) => (formData) => {
    login(formData);
};

const Login = (props) => {

    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={Auth(props.login)}/>
            <div>{props.message}</div>
        </div>
    )
};

export default Login