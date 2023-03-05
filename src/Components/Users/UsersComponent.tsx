import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

type MapStateToPropsType = {
    users: UserType[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}
export type UsersType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);