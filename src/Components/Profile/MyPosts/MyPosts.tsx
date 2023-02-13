import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {CommonAT, PostsPropsType, ProfilePagePropsType} from "../../../Redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";


type MyPostStatePropsType = {
    state: ProfilePagePropsType,
    newPostText: string,
    dispatch: (action: CommonAT) => void
}

export const MyPosts = (props: MyPostStatePropsType) => {
    let messagesData = props.state.posts.map((item: PostsPropsType) =>
        <Post id={item.id} message={item.message} likesCount={item.likesCount}/>
    )

    const onClickAddPost = () => {
        props.dispatch(addPostAC())
    }

    const onChangePostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText} onChange={onChangePostText}></textarea>
            </div>
            <button onClick={onClickAddPost}>Add post</button>
            <div className={style.posts}>
                {messagesData}
            </div>
        </div>
    )
};