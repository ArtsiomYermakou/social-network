import {ActionType, TypeMyPosts} from "./state";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type ChangeNewTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}


let initialState = {
    posts: [] as Array<TypeMyPosts>,
    newPostText: ''
}

type StateProfile = typeof initialState


const profileReducer = (state: StateProfile = initialState, action:ActionType): StateProfile => {

    switch (action.type) {
        case ADD_POST:
            debugger
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = "";
            debugger
            return state;
        case UPDATE_NEW_POST_TEXT:
            debugger
            state.newPostText = action.newText;
            debugger
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionCreatorType => ({ type: ADD_POST })
export const changeNewTextActionCreator = (text:string): ChangeNewTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;