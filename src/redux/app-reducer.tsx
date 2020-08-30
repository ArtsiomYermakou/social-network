import {ActionType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type setInitializedCreatorType = {
    type: typeof INITIALIZED_SUCCESS
}

export type StateProfile = typeof initialState

type DataType = {
    initialized: boolean | string
}

let initialState: DataType = {
    initialized: false
};


const appReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {
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

export const initializedSuccess = (): setInitializedCreatorType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => { dispatch(initializedSuccess());
        })
}


export default appReducer;