import {Dispatch} from "redux";
import {AuthAPI} from "../Api/api";

type SetUserDataAT = ReturnType<typeof setUserData>
export type UsersAT = SetUserDataAT

export type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: UsersAT): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...action.data, isAuth: true}
        default:
            return state
    }
}
// actions
export const setUserData = (id: number, email: string, login: string) => ({type: 'SET-USER-DATA', data: {id, email, login}}) as const

// thunks
export const getUserData = () => (dispatch: Dispatch) => {
    AuthAPI.getMe().then(res => {
        let {id, email, login} = res.data.data
        if (res.data.resultCode === 0) dispatch(setUserData(id, email, login))
    })
}

export default authReducer;