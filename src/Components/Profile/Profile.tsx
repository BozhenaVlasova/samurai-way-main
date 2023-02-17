import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import store from "../../Redux/redux-store";

type StateForProfilePropsType = {
    store: typeof store
}

export const Profile: React.FC<StateForProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}