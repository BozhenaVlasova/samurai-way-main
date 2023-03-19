import {UsersAPI} from "../Api/api";
import {Dispatch} from "redux";

type FollowAT = ReturnType<typeof followSuccess>
type UnfollowAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type SetUsersTotalCountAT = ReturnType<typeof setUsersTotalCount>
type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>
export type UsersAT = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetUsersTotalCountAT | ToggleIsFetchingAT | ToggleFollowingProgressAT

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    },
    uniqueUrlName: string
}

export type InitialStateType = {
    items: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: Array<number>
}

let initialState = {
    items: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state: InitialStateType = initialState, action: UsersAT): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(user => user.id === action.userId ? {...user, followed: true} : user)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(user => user.id === action.userId ? {...user, followed: false} : user)}
        case 'SET-USERS':
            return {...state, items: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-USERS-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-FOLLOWING-PROGRESS":
            return {...state, followingProgress: action.followingProgress
            ? [...state.followingProgress, action.userId]
            : state.followingProgress.filter(id => id !== action.userId)}
        default:
            return state
    }
}

// actions
export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCount = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleFollowingProgress = (followingProgress: boolean, userId: number) => ({type: 'TOGGLE-FOLLOWING-PROGRESS', followingProgress, userId}) as const

// thunks
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    UsersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    })
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    UsersAPI.follow(userId).then(res => {
        if (res.data.resultCode === 0) dispatch(followSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    })
}
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    UsersAPI.unfollow(userId).then(res => {
        if (res.data.resultCode === 0) dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    })
}

export default usersReducer;