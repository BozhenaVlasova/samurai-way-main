type SendMessageAT = ReturnType<typeof sendMessageAC>
export type DialogsAT =  SendMessageAT

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
    // newMessageBody: string
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
    // newMessageBody: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsAT): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let textMessageBody: MessagesType = {
                id: 6,
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, textMessageBody]}
        // case "UPDATE-NEW-MESSAGE-BODY":
        //     return {...state, newMessageBody: action.newMessageBody}
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => ({type: "SEND-MESSAGE", newMessageBody}) as const

export default dialogsReducer;