import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsPropsType, ProfilePagePropsType} from "../../../Redux/state";


type MyPostStatePropsType = {
    state: ProfilePagePropsType,
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostStatePropsType) => {
    let messagesData = props.state.posts.map( (item: PostsPropsType)  =>
        <Post id={item.id} message={item.message} likesCount={item.likesCount}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickAddPost = () => {
         props.addPost(newPostElement.current ? newPostElement.current.value : '')
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={onClickAddPost}>Add post</button>
            <div className={style.posts}>
                {messagesData}
            </div>
        </div>
    )
};