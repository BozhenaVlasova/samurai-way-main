import React from 'react';
import style from "./Post.module.css";

export const Post = (props: any) => {
    return (
        <div className={style.item}>
            <img src='https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800'/>
            {props.message}
            <div>
                <span>likes: {props.likesCount}</span>
                {/*<span>dislike</span>*/}
            </div>
        </div>
    )
        ;
};