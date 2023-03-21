import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getUserData, setUserData} from "../../Redux/auth-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class HeaderContainer extends React.Component<UsersComponentType, AppStateType> {
    componentDidMount() {
        this.props.getUserData()
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
    getUserData: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let AuthRedirectComponent = withAuthRedirect(HeaderContainer)

export type UsersComponentType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserData, getUserData})(AuthRedirectComponent);