import {ActionType} from "./store";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

export type setUserDataActionCreatorType = {
    type: typeof SET_USER_DATA
    data: DataType
}

export type StateProfile = typeof initialState

type DataType = {
    userId: null | string
    email:  null | string
    login:  null | string
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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId:  null | string, email:  null | string, login:  null | string, isAuth: boolean): setUserDataActionCreatorType => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, isAuth));
            }
        });
}

export default authReducer;