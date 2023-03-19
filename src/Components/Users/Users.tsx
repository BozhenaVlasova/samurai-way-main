import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../Assets/images/user.png";
import {follow, unfollow, UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../Api/api";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onClickPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}

const Users: React.FC<UsersType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={() => {
                        props.onClickPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'profile/' + user.id}>
                                <img src={!user.photos.small ? userPhoto : user.photos.small}
                                     className={styles.userPhoto} alt={user.name}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id ===user.id)}
                                              onClick={() => UsersAPI.unfollow(user.id)}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id ===user.id)}
                                              onClick={() => UsersAPI.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;