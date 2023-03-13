import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../Redux/profile-reducer";

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileComponentType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            console.log(res.data)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);