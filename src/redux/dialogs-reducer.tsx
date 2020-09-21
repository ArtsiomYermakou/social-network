import {ActionType} from "./store";

const SEND_MESSAGE = "SEND_MESSAGE";

export type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Ksusha"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valery"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as Array<MessageType>
}

type initialStateType = typeof initialState;

const dialogsReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [ ...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;