import React from 'react';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: InitialStateType,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    onChangeMessageText: (body: string) => void,
    onClickSendMessage: () => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessageText: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        onClickSendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

let DialogsComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsComponent;