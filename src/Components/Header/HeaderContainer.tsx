import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getUserData, setUserData} from "../../Redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component<UsersComponentType, AppStateType> {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    login: string
}
type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
    getUserData: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login
    }
}

export type UsersComponentType = MapStateToPropsType & MapDispatchToPropsType

export default compose<React.ComponentType>(connect(mapStateToProps, {setUserData, getUserData}))
(HeaderContainer);