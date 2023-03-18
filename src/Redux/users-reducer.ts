type FollowAT = ReturnType<typeof follow>
type UnfollowAT = ReturnType<typeof unfollow>
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
    // location: {
    //     country: string,
    //     city: string
    // },
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

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCount = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const
export const toggleFollowingProgress = (followingProgress: boolean, userId: number) => ({type: 'TOGGLE-FOLLOWING-PROGRESS', followingProgress, userId}) as const

export default usersReducer;