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
}
/////
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: any
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer:any) => void
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
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log("State changed")
    },
    addPost (){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText:string){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer:any){
        this._callSubscriber = observer;
    }
}

//////
// let state:RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 12},
//             {id: 2, message: "It's my first", likesCount: 11},
//             {id: 3, message: "BLAbla", likesCount: 423},
//             {id: 4, message: "Dada", likesCount: 21},
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Dimych"},
//             {id: 2, name: "Andrey"},
//             {id: 3, name: "Ksusha"},
//             {id: 4, name: "Sasha"},
//             {id: 5, name: "Victor"},
//             {id: 6, name: "Valery"},
//         ],
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How is your It?"},
//             {id: 3, message: "Yo"},
//             {id: 4, message: "Yo"},
//             {id: 5, message: "Yo"},
//         ]
//     },
//     // sidebar: {}
// }

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer:any) =>{
//     rerenderEntireTree = observer;
// }

export default store;
// window.store = store;