import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";

type PropType = {
    store:StoreType
}


const Dialogs = (props:PropType) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={ d.name} id={d.id} />);
    let messagesElements = state.messages.map( m => <Message message={ m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                        placeholder="Введите сообщение" /></div>
                    <div><button onClick={onSendMessageClick}>Отправить</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;