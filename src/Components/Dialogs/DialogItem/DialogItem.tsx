import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsPropsType} from "../../../Redux/store";


export const DialogItem = (props: DialogsPropsType) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={`${s.dialog} ${s.active}`}>
            {props.name}
        </NavLink>
    );
};