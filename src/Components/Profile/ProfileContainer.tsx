import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
    userId: string
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfileComponentType

class ProfileContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = '27708'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);