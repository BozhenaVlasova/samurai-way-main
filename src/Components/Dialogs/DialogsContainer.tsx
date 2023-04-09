import React from 'react';
import {InitialStateType, sendMessageAC} from '../../Redux/dialogs-reducer';
import {AppStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType = {
    onClickSendMessage: (newMessageBody: string) => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);