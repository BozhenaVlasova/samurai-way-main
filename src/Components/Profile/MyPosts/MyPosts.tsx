import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsPropsType, ProfilePagePropsType} from "../../../Redux/state";


type MyPostStatePropsType = {
    state: ProfilePagePropsType
}

export const MyPosts = (props: MyPostStatePropsType) => {
    let messagesData = props.state.posts.map( (item: PostsPropsType)  =>
        <Post id={item.id} message={item.message} likesCount={item.likesCount}/>
    )

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div><textarea/></div>
            <button>Add post</button>
            <div className={style.posts}>
                {messagesData}
            </div>
        </div>
    )
};