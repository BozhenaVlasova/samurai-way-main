import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {PostsType} from "../../../Redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type NewPostFormDataType = {
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {
    let messagesData = props.posts.posts.map((item: PostsType) =>
        <Post key={item.id} id={item.id} message={item.message} likesCount={item.likesCount}/>
    )

    const onClickAddPost = (values: NewPostFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onClickAddPost}/>
            <div className={style.posts}>
                {messagesData}
            </div>
        </div>
    )
};

const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea'></Field>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<NewPostFormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)
