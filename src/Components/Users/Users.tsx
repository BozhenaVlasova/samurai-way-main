import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../Assets/images/user.png";
import {UserType} from "../../Redux/users-reducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage:number
    users: UserType[]
    onClickPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
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
                    return <span className={props.currentPage === p ? styles.selectedPage : ''} onClick={()=> {props.onClickPageChanged(p)}}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={!user.photos.small ? userPhoto : user.photos.small}
                                     className={styles.userPhoto} alt={user.name}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
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