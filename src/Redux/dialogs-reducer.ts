type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageAT = ReturnType<typeof sendMessageAC>
export type DialogsAT = UpdateNewMessageBodyAT | SendMessageAT

export type MessagesType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type InitialStateType = {
    messages: MessagesType[],
    dialogs: DialogsType[],
    newMessageBody: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Yo'}
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Bozhena'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Anya'}
    ] as Array<DialogsType>,
    newMessageBody: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsAT): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let textMessageBody: MessagesType = {
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