import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../Redux/dialogs-reducer";


export const DialogItem = (props: DialogsType) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={`${s.dialog} ${s.active}`}>
            {props.name}
        </NavLink>
    );
};