import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../Redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogsData = props.dialogsPage.dialogs.map(item =>
        <DialogItem id={item.id} name={item.name}/>)
    let messagesData = props.dialogsPage.messages.map(item =>
        <Message id={item.id} message={item.message}/>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    const onClickSendMessage = () => {
        props.sendMessage()
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