import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css"

type PropsType = {
    profile: any
}

const ProfileDataForm: React.FC<InjectedFormProps<{ handleSubmit: any, profile: any, error: any }> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {
            error && <div className={style.formSummaryError}>
                {error}
            </div>
        }
        <div>
            <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professionals
                skills</b>: {createField("My professionals skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {profile.contact && Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<any, any>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;