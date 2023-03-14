import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={style.header}>
            <img
                src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Why_Logo_Design_Is_So_Important_For_A_Business_1.png?v=1662043338"/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}