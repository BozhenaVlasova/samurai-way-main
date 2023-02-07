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
    dialogs: DialogsPropsType[]
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
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
}

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
            ]
        },
        // sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber (state: StateType) {
        console.log('render state')
    },
    addPost () {
        let newPost: PostsPropsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    }
}

// window.store = store;