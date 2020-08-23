import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


// type MapStateToPropsType = {
//     dialogsPage: DialogPageType
//     isAuth: (auth: boolean) => void
// }
// type PropType = {
// store: any
// dispatch: (action: ActionType) => void
// }


let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);