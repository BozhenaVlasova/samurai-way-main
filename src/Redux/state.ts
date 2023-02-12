export type DialogsPropsType = {
    id: number,
    name: string
}
export type MessagesPropsType = {
    id: number,
    message: string
}
export type PostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogsPagePropsType = {
    messages: MessagesPropsType[],
    dialogs: DialogsPropsType[],
    newMessageBody: string
}
export type ProfilePagePropsType = {
    posts: PostsPropsType[],
    newPostText: string
}
// type SidebarPropsType = {
//     sidebar: {}
// }

export type StateType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPagePropsType,
    // sidebar: SidebarPropsType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: CommonAT) => void
}

type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageAT = ReturnType<typeof sendMessageAC>

export type CommonAT = AddPostAT | UpdateNewPostTextAT | UpdateNewMessageBodyAT | SendMessageAT

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first message!', likesCount: 17}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        // sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('render state')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostsPropsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === "SEND-MESSAGE") {
            let textMessageBody: MessagesPropsType = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(textMessageBody)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newPostText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: newPostText
}) as const

export const sendMessageAC = () => ({type: "SEND-MESSAGE"}) as const
export const updateNewMessageBodyAC = (newMessageText: string) => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    newMessageBody: newMessageText
}) as const

//@ts-ignore
window.store = store;