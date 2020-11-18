import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import {AppStateType} from '../../redux/redux-store';
import {Button} from "@material-ui/core";

type LoginFormOwnProps = {
	captchaUrl: string | null
}


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
	= ({handleSubmit, error, captchaUrl}) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				{createField<LoginFormValuesTypeKeys>("Email", 'email', [required], Input)}
				{createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
				{/*{createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}*/}

				{captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
				{captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}


				{error && <div className={style.formSummaryError}>
					{error}
                </div>
				}
				<div>
					<Button style={{margin: 16 }} size={"small"} variant={"contained"}
							type={"submit"}>Login</Button>
				</div>
			</form>
		</>

	)
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
	captchaUrl: string | null
	isAuth: boolean
}
type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
	captcha: string
	rememberMe: boolean
	password: string
	email: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
	const onSubmit = (formData: LoginFormValuesType) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"}/>
	}

	return <div>
		<h1 style={{marginLeft: 16}}>Login</h1>
		<h3 style={{backgroundColor: "#C4DFE6", marginLeft: 16}}>Email and password for the test</h3>
		<p style={{
			marginLeft: 16,
			backgroundColor: "#C4DFE6",
			fontWeight: 400,
			lineHeight: 1,
			letterSpacing: "0.00938em"
		}}>Email: artem_ermakov_1999@mail.ru</p>
		<p style={{marginLeft: 16, backgroundColor: "#C4DFE6", fontWeight: 400, lineHeight: 1, letterSpacing: "0.00938em"}}>Password:
			Uzatit1999</p>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
	</div>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);