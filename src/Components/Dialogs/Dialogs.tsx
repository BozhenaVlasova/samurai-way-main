import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../Redux/state";

type DialogsPropsType = {
    state: DialogsPagePropsType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsData = props.state.dialogs?.map(item =>
        <DialogItem id={item.id} name={item.name}/>
    )

    let messagesData = props.state.messages?.map(item =>
        <Message id={item.id} message={item.message}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesData}
            </div>
            <div/>
        </div>
    );
};

export default Dialogs;