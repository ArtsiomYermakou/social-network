import {ActionType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


export type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Ksusha"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valery"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessageBody: ""
}

type StateDialogs = typeof initialState


const dialogsReducer = (state: StateDialogs = initialState, action: ActionType): StateDialogs => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = ():SendMessageCreatorType => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body:string): UpdateNewMessageBodyCreatorType =>
    ({  type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;