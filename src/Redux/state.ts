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
    dispatch: (action: CommonAT) => void
}

type AddPostAT = {
    type: "ADD-POST"
}
type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}

export type CommonAT = AddPostAT | UpdateNewPostTextAT

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
    _callSubscriber(state: StateType) {
        console.log('render state')
    },
    addPost() {
        let newPost: PostsPropsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
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
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }
}
//@ts-ignore
window.store = store;