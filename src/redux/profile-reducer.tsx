import {ActionType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";


export type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}

export type SetUserProfileCreatorType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export type SetStatusCreatorType = {
    type: typeof SET_STATUS
    status: string
}
export type DeletePostCreatorType = {
    type: typeof DELETE_POST
    postId: number
}

type StateProfile = typeof initialState


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first", likesCount: 11},
        {id: 3, message: "Русские слова", likesCount: 423},
        {id: 4, message: "Dada", likesCount: 21},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: null): SetUserProfileCreatorType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusCreatorType => ({type: SET_STATUS, status})
export const deletePost = (postId: number): DeletePostCreatorType => ({type: DELETE_POST, postId})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;