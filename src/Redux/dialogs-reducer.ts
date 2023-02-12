import {
    DialogsPagePropsType,
    MessagesPropsType
} from "./state";

type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageAT = ReturnType<typeof sendMessageAC>
export type DialogsAT = UpdateNewMessageBodyAT | SendMessageAT

const dialogsReducer = (state: DialogsPagePropsType, action: DialogsAT): DialogsPagePropsType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let textMessageBody: MessagesPropsType = {
                id: 6,
                message: state.newMessageBody
            }
            state.messages.push(textMessageBody)
            state.newMessageBody = ''
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: "SEND-MESSAGE"}) as const
export const updateNewMessageBodyAC = (newMessageText: string) => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    newMessageBody: newMessageText
}) as const

export default dialogsReducer;