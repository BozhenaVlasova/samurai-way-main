import React from 'react';
import {UsersType} from "./UsersComponent";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "./../../Assets/images/user.png"

const Users: React.FC<UsersType> = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
            props.setUsers(res.data.items)
        })
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={!user.photos.small ? userPhoto : user.photos.small} className={styles.userPhoto} alt={user.name}/>
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