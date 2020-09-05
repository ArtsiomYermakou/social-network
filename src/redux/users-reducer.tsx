import {ActionType} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
export type setIsFollowingCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
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
    isFetching: false,
    followingInProgress: [] as Array<any>
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number): FollowActionCreatorType => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId: number): UnfollowActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): SetUsersCreatorType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageCreatorType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount: number): setUsersTotalCountCreatorType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingCreatorType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): setIsFollowingCreatorType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: (userId: number) => void) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
    dispatch(toggleIsFetching(false));
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess);
    }
}

export default usersReducer;