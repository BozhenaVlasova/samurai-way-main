import React from 'react';
import s from "../Dialogs.module.css";
import {MessagesPropsType} from "../../../Redux/state";

export const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};