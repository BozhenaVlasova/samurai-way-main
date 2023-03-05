import React from 'react';
import {UsersType} from "./UsersComponent";
import styles from './Users.module.css'

const Users: React.FC<UsersType> = (props) => {
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} className={styles.userPhoto} alt={user.fullName}/>
                            </div>
                            <div>
                                {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;