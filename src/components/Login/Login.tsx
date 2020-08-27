import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type LoginPropsType = {
    login: string
    password: string
    checkbox: boolean
}

const LoginForm = (props: InjectedFormProps<LoginPropsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]}
                       component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={Input} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginPropsType>({form: "login"})(LoginForm);

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>login into your account</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;