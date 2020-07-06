
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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    // likesCount: string
}

/////

// export type ActionType = {
//     type: string
//     newText: string
// }

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType)=> void
    getState: () => RootStateType
    subscribe: (observer: (state:RootStateType) => void) => void
    dispatch: (action: ProfileActionType) => void
}


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first", likesCount: 11},
                {id: 3, message: "BLAbla", likesCount: 423},
                {id: 4, message: "Dada", likesCount: 21},
            ],
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
        // sidebar: {}
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
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}

export type ChangeNewTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type ProfileActionType = AddPostActionCreatorType | ChangeNewTextActionCreatorType

export const addPostActionCreator = (): AddPostActionCreatorType => ({ type: ADD_POST })

export const changeNewTextActionCreator = (text:string): ChangeNewTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default store;
// window.store = store;