type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type setUsersTotalCountAT = ReturnType<typeof setUsersTotalCountAC>
export type UsersAT = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | setUsersTotalCountAT

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
    currentPage: number
}

let initialState = {
    items: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
    // newPostText: ''
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
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount}) as const

export default usersReducer;