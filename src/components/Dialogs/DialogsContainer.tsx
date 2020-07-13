import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type PropType = {
    // store: any
    // dispatch: (action: ActionType) => void
}


const DialogsContainer = (props: PropType) => {

    return <StoreContext.Consumer>
        { (store: any) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body: any) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;