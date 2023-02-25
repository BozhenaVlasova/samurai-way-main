import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {PostsType} from "../../../Redux/profile-reducer";


export const MyPosts = (props: MyPostsType) => {
    let messagesData = props.posts.posts.map((item: PostsType) =>
        <Post id={item.id} message={item.message} likesCount={item.likesCount}/>
    )

    const onClickAddPost = () => {
        props.addPost()
    }

    const onChangePostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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