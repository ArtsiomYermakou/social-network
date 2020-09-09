import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router"
import style from "../common/FormsControls/FormsControls.module.css"


type LoginPropsType = {
    login: string
    password: string
    checkbox: boolean
    captchaUrl: string | null
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm = (props: InjectedFormProps<LoginPropsType, LoginFormOwnProps> & LoginFormOwnProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email", [required], Input, props)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {props.captchaUrl && <img src={props.captchaUrl}  alt={"captcha"}/>}
            {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {} ) }

            {
                props.error ? <div className={style.formSummaryError}>{props.error}</div> : ""
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginPropsType, LoginFormOwnProps>({form: "login"})(LoginForm);


const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>login into your account</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login})(Login);