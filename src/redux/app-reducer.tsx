import {ActionType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type SetInitializedCreatorType = {
    type: typeof INITIALIZED_SUCCESS
}

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = (): SetInitializedCreatorType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => { dispatch(initializedSuccess());
        })
}

export default appReducer;