import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../Redux/state";

type StateForProfilePropsType = {
    profilePage: ProfilePagePropsType,
    addPost: () => void,
    updateNewPostText: (newPostText: string) => void
}

export const Profile: React.FC<StateForProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.profilePage} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}