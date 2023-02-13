import {
    DialogsPagePropsType,
    MessagesPropsType
} from "./store";

type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageAT = ReturnType<typeof sendMessageAC>
export type DialogsAT = UpdateNewMessageBodyAT | SendMessageAT

let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Bozhena'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Anya'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogsPagePropsType = initialState, action: DialogsAT): DialogsPagePropsType => {
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