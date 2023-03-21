import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile, UserProfileType} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        userId: state.profilePage.profile.userId
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent));