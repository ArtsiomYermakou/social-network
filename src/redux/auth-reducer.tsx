import {ActionType} from "./store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

type SetUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type SetUserDataActionCreatorType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}

export type GetCaptchaUrlSuccessActionCreatorType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};


const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionCreatorType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionCreatorType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserDataAC(id, email, login, true));
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {

        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
}

export default authReducer;