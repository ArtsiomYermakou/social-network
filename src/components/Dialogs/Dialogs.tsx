import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/store";

type PropType = {
    updateNewMessageBody: (onNewMessageChange: any) => void
    sendMessage: () => void
    dialogsPage: DialogPageType
}


const Dialogs = (props: PropType) => {



    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
        // let action = sendMessageCreator();
        // props.dispatch(action)
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // let action = updateNewMessageBodyCreator(body);
        // props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Введите сообщение"/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;