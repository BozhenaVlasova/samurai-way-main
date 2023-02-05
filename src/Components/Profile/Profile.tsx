import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../Redux/state";

type StateForProfilePropsType = {
    state: ProfilePagePropsType
}

export const Profile: React.FC<StateForProfilePropsType> = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.state}/>
        </div>
    )
}