import {ActionType} from "./store";

let initialState = {}

type initialStateType = typeof initialState
const sidebarReducer = (state: initialStateType = initialState, action: ActionType) => {
    return state;
}

export default sidebarReducer;