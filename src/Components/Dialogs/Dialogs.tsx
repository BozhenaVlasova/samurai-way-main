import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type NewMessageFormDataType = {
    newMessage: string
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsData = props.dialogsPage.dialogs.map(item =>
        <DialogItem id={item.id} name={item.name}/>)
    let messagesData = props.dialogsPage.messages.map(item =>
        <Message id={item.id} message={item.message}/>)

    const addNewMessage = (values: any) => {
        props.onClickSendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                <div>{messagesData}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div/>
        </div>
    );
};

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message...'/>
            <button>Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<NewMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;