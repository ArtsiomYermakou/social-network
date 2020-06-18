import React from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";

type PropType = {
    state: DialogPageType
}


const Dialogs = (props:PropType) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={ d.name} id={d.id} />);
    let messagesElements = props.state.messages.map( m => <Message message={ m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;