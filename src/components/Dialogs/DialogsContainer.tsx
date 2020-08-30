import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


// type MapStateToPropsType = {
//     dialogsPage: DialogPageType
//     isAuth: (auth: boolean) => void
// }
// type PropType = {
// store: any
// dispatch: (action: ActionType) => void
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);