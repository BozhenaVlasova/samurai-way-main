import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile, UserProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: UserProfileType,
    userId: number
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void,
    getUserProfile: (userId: number) => void
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfileComponentType

class ProfileContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 27708
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        userId: state.profilePage.profile.userId
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter)
(ProfileContainer)