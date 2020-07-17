import {ActionType} from "./store";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type FollowActionCreatorType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowActionCreatorType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersCreatorType = {
    type: typeof SET_USERS
    users: any
}

type StateProfile = typeof initialState

type LocationUserType = {
    city: string
    country: string
}

type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationUserType
}


let initialState = {
    users: [] as Array<UsersType>,
};



const usersReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionCreatorType => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any): SetUsersCreatorType => ({type: SET_USERS, users})

export default usersReducer;