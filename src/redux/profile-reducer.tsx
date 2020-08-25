import {ActionType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}

export type ChangeNewTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type SetUserProfileCreatorType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export type SetStatusCreatorType = {
    type: typeof SET_STATUS
    status: string
}

type StateProfile = typeof initialState


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first", likesCount: 11},
        {id: 3, message: "Русские слова", likesCount: 423},
        {id: 4, message: "Dada", likesCount: 21},
    ],
    newPostText: "",
    profile: null,
    status: "",
};

const profileReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };

        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionCreatorType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextActionCreatorType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile: null): SetUserProfileCreatorType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusCreatorType => ({type: SET_STATUS, status})

export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}


export default profileReducer;