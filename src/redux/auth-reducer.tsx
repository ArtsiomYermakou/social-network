import {ActionType} from "./store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

export type setUserDataActionCreatorType = {
    type: typeof SET_USER_DATA
    payload: DataType
}

export type StateProfile = typeof initialState

type DataType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId: null | string, email: null | string, login: null | string, isAuth: boolean): setUserDataActionCreatorType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch: any) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        });
}

export default authReducer;