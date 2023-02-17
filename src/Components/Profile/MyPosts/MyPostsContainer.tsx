import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import store from "../../../Redux/redux-store";


type MyPostStatePropsType = {
    store: typeof store
}

export const MyPostsContainer: React.FC<MyPostStatePropsType> = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const changePostText = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={changePostText}
            statePosts={props.store.getState().profilePage}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    )
};