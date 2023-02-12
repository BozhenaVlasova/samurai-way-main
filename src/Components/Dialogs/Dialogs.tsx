import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {CommonAT, DialogsPagePropsType, sendMessageAC, updateNewMessageBodyAC} from "../../Redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: CommonAT) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsData = props.dialogsPage.dialogs?.map(item =>
        <DialogItem id={item.id} name={item.name}/>)
    let messagesData = props.dialogsPage.messages?.map(item =>
        <Message id={item.id} message={item.message}/>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    const onClickSendMessage = () => {
        props.dispatch(sendMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                <div>{messagesData}</div>
                <textarea value={props.dialogsPage.newMessageBody} onChange={onChangeMessageText} placeholder={'Enter your message...'}></textarea>
                <button onClick={onClickSendMessage}>Send</button>
            </div>
            <div/>
        </div>
    );
};

export default Dialogs;