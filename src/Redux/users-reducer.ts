type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
export type UsersAT = FollowAT | UnfollowAT | SetUsersAT

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
    items: UserType[]
}

let initialState = {
    items: [
        // {id: 1, followed: false, fullName: 'Katya', status: 'I am a developer', location: {country: 'Belarus', city: 'Brest'}
        // , photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-cat-breeds-burmese-1558556618.jpg?crop=0.655xw:1.00xh;0.304xw,0.00261xh&resize=480:*'},
        // {id: 2, followed: true, fullName: 'Misha', status: 'I am a manager', location: {country: 'Russia', city: 'Novosibirsk'},
        //     photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-cat-breeds-burmese-1558556618.jpg?crop=0.655xw:1.00xh;0.304xw,0.00261xh&resize=480:*'},
        // {id: 3, followed: false, fullName: 'Zhenya', status: 'I am a teacher', location: {country: 'Ukraine', city: 'Kiev'},
        //     photoUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-cat-breeds-burmese-1558556618.jpg?crop=0.655xw:1.00xh;0.304xw,0.00261xh&resize=480:*'}
    ] as Array<UserType>,
    newPostText: ''
}

const usersReducer = (state: InitialStateType = initialState, action: UsersAT): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(user => user.id === action.userId ? {...user, followed: true} : user)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(user => user.id === action.userId ? {...user, followed: false} : user)}
        case 'SET-USERS':
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const

export default usersReducer;