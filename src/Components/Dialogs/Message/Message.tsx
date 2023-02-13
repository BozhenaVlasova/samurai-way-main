import React from 'react';
import s from "../Dialogs.module.css";
import {MessagesPropsType} from "../../../Redux/store";

export const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};