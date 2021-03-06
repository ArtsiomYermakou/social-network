import profileReducer, {
    AddPostActionCreatorType,
    DeletePostCreatorType,
    SavePhotoSuccessCreatorType,
    SetStatusCreatorType,
    SetUserProfileCreatorType
} from "./profile-reducer";
import dialogsReducer, {SendMessageCreatorActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
    FollowActionCreatorType,
    SetCurrentPageCreatorType, SetIsFetchingCreatorType, SetIsFollowingCreatorType,
    SetUsersCreatorType, SetUsersTotalCountCreatorType,
    UnfollowActionCreatorType
} from "./users-reducer";
import {GetCaptchaUrlSuccessActionCreatorType, SetUserDataActionCreatorType} from "./auth-reducer";
import {SetInitializedCreatorType} from "./app-reducer";

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
    profile: any,
    status: string,
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<TypeDialogs>
    messages: Array<TypeMessages>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: object
}
export type  ActionType =
    AddPostActionCreatorType |
    SendMessageCreatorActionType |
    FollowActionCreatorType |
    UnfollowActionCreatorType |
    SetUsersCreatorType |
    SetCurrentPageCreatorType |
    SetUsersTotalCountCreatorType |
    SetIsFetchingCreatorType |
    SetUserProfileCreatorType |
    SetUserDataActionCreatorType |
    SetIsFollowingCreatorType |
    SetStatusCreatorType |
    SetInitializedCreatorType |
    DeletePostCreatorType |
    SavePhotoSuccessCreatorType |
    GetCaptchaUrlSuccessActionCreatorType;

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType)=> void
    getState: () => RootStateType
    subscribe: (observer: (state:RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first", likesCount: 11},
                {id: 3, message: "BLAbla", likesCount: 423},
                {id: 4, message: "Dada", likesCount: 21},
            ],
            profile: {
                photos: {}
            },
            status: "",
            newPostText: ""

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
            ]
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
    }
}

export default store;