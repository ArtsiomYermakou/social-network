import {rerenderEntireTree} from "../render";

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
}
export type DialogPageType = {
    dialogs: Array<TypeDialogs>
    messages: Array<TypeMessages>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first", likesCount: 11},
            {id: 3, message: "BLAbla", likesCount: 423},
            {id: 4, message: "Dada", likesCount: 21},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
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
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;