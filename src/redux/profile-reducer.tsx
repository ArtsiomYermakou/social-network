import {ActionType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


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
export type SavePhotoSuccessCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: any
}

type StateProfile = typeof initialState


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first", likesCount: 11},
        {id: 3, message: "Русские слова", likesCount: 423},
        {id: 4, message: "Dada", likesCount: 21},
    ],
    profile: {
        photos: {}
    },
    status: "Hello"

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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: null): SetUserProfileCreatorType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusCreatorType => ({type: SET_STATUS, status})
export const deletePost = (postId: number): DeletePostCreatorType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: any): SavePhotoSuccessCreatorType => ({type: SAVE_PHOTO_SUCCESS, photos})

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
export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;