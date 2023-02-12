import profileReducer, {ProfileAT} from "./profile-reducer";
import dialogsReducer, {DialogsAT} from "./dialogs-reducer";

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
    dispatch: (action: any) => void
}

export type CommonAT = ProfileAT | DialogsAT

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

//@ts-ignore
window.store = store;