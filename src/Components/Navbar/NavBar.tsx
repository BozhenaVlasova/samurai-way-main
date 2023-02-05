import React from "react";
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a href='/news'>News</a>
            </div>
            <div className={style.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={style.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}