import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import store from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsComponentPropsType = {
    store: typeof store
}

const DialogsComponent: React.FC<DialogsComponentPropsType> = (props) => {
    let state = props.store.getState().dialogsPage

    const onChangeMessageText = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    const onClickSendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    return (
        <Dialogs dialogsPage={state} updateNewMessageBody={onChangeMessageText} sendMessage={onClickSendMessage}/>
    );
};

export default DialogsComponent;