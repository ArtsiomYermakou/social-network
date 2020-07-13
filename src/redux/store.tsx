import profileReducer, {
    AddPostActionCreatorType,
    ChangeNewTextActionCreatorType
} from "./profile-reducer";
import dialogsReducer, {
    SendMessageCreatorType,
    UpdateNewMessageBodyCreatorType
} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
//
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";



type TypeMessages = {
    id: number
    message: string
}
type TypeDialogs = {
    id: number
    name: string
}
export type TypeMyPosts = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<TypeMyPosts>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<TypeDialogs>
    messages: Array<TypeMessages>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: object
    // likesCount: string
}

/////

// export type ActionType = {
//     type: string
//     newText: string
// }

export type  ActionType = AddPostActionCreatorType | ChangeNewTextActionCreatorType
|  SendMessageCreatorType | UpdateNewMessageBodyCreatorType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType)=> void
    getState: () => RootStateType
    subscribe: (observer: (state:RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}



let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first", likesCount: 11},
                {id: 3, message: "BLAbla", likesCount: 423},
                {id: 4, message: "Dada", likesCount: 21},
            ],
            newPostText: "Artem"
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber (state:RootStateType) {
        console.log("State changed")
    },

    getState(){
        return this._state;
    },

    subscribe(observer:(state: RootStateType) => void){
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);

        // this._callSubscriber(this._state);
        //
        // if(action.type === ADD_POST){
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = "";
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT){
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state);
        // }else if (action.type === SEND_MESSAGE){
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = "";
        //     this._state.dialogsPage.messages.push({id: 6, message: body});
        //
        // }
    }
}




// export type AddPostActionCreatorType = {
//     type: typeof ADD_POST
// }
// export type ChangeNewTextActionCreatorType = {
//     type: typeof UPDATE_NEW_POST_TEXT
//     newText: string
// }
// export type SendMessageCreatorType = {
//     type: typeof SEND_MESSAGE
// }
// export type UpdateNewMessageBodyCreatorType = {
//     type: typeof UPDATE_NEW_MESSAGE_BODY
//     body: string
// }

// export const addPostActionCreator = (): AddPostActionCreatorType => ({ type: ADD_POST })
// export const changeNewTextActionCreator = (text:string): ChangeNewTextActionCreatorType =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text})

///// Добавление сообщения.

// export const sendMessageCreator = ():SendMessageCreatorType => ({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body:string): UpdateNewMessageBodyCreatorType =>
//     ({  type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default store;
// window.store = store;