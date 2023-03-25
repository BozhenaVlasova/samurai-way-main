import {Dispatch} from "redux";
import {ProfileAPI, UsersAPI} from "../Api/api";

type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileAT = ReturnType<typeof setUserProfile>
type setUserStatusAT = ReturnType<typeof setUserStatus>
export type ProfileAT = AddPostAT | UpdateNewPostTextAT | SetUserProfileAT | setUserStatusAT

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType
    status: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string, website: string, vk: string, twitter: string, instagram: string,
        github: string,
        mainLink: string,
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first message!', likesCount: 17}
    ] as Array<PostsType>,
    newPostText: '',
    profile: {} as UserProfileType,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileAT): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

// actions
export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newPostText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: newPostText
}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile: profile}) as const
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status}) as const

// thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    UsersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data))
    })
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId).then(res => {
        dispatch(setUserStatus(res.data))
    })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
        dispatch(setUserStatus(res.data))
        }
    })
}

export default profileReducer;