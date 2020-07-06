import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ActionType, StoreType} from "../../redux/state";
import {changeNewTextActionCreator} from "../../redux/profile-reducer";

type PropType = {
    store:StoreType
    dispatch: (action: ActionType) => void
}


const Dialogs = (props:PropType) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={ d.name} id={d.id} />);
    let messagesElements = state.messages.map( m => <Message message={ m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        let action =sendMessageCreator();
        props.dispatch(action)
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.dispatch(action)
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