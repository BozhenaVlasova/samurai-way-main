import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<UsersComponentType, AppStateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(res => {
            let {id, email, login} = res.data.data
            if (res.data.resultCode === 0) this.props.setUserData(id, email, login)
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export type UsersComponentType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserData})(HeaderContainer);