import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/store";
import {Redirect} from "react-router"
import  {Field, reduxForm} from "redux-form";

type PropType = {
    updateNewMessageBody: (onNewMessageChange: any) => void
    sendMessage: (values?: any) => void
    dialogsPage: DialogPageType
    isAuth: boolean
}


const Dialogs = (props: PropType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "AddMessageForm"})(AddMessageForm);

export default Dialogs;