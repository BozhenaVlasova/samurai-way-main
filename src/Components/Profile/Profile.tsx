import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {CommonAT, ProfilePagePropsType} from "../../Redux/state";

type StateForProfilePropsType = {
    profilePage: ProfilePagePropsType,
    dispatch: (action: CommonAT) => void
}

export const Profile: React.FC<StateForProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.profilePage} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}