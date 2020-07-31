import {ActionType} from "./store";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
    users: Array<UsersType>
}
export type SetCurrentPageCreatorType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type setUsersTotalCountCreatorType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export type setIsFetchingCreatorType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type StateProfile = typeof initialState

type LocationUserType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationUserType
}


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId: number): FollowActionCreatorType => ({type: FOLLOW, userId})
export const unFollow = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): SetUsersCreatorType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageCreatorType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): setUsersTotalCountCreatorType  =>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingCreatorType   =>({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;