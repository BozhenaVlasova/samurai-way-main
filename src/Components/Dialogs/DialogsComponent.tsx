import React from 'react';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    onChangeMessageText: (body: string) => void,
    onClickSendMessage: () => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsComponent = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsComponent;