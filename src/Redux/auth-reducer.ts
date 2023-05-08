import {Dispatch} from "redux";
import {AuthAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

type SetUserDataAT = ReturnType<typeof setUserData>
export type UsersAT = SetUserDataAT

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: UsersAT): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...action.payload}
        default:
            return state
    }
}
// actions
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}}) as const

// thunks
export const getUserData = () => (dispatch: Dispatch) => {
    AuthAPI.getMe().then(res => {
        let {id, email, login} = res.data.data
        if (res.data.resultCode === 0) dispatch(setUserData(id, email, login, true))
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    AuthAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) getUserData()
        else {
            let message = res.data.resultCode > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logout = () => (dispatch: Dispatch) => {
    AuthAPI.logout().then(res => {
        if (res.data.resultCode === 0) dispatch(setUserData(null, null, null, false))
    })
}

export default authReducer;