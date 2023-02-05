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
    posts: PostsPropsType[]
}
type SidebarPropsType = {
    sidebar: {}
}

export type StateType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPagePropsType,
    sidebar: SidebarPropsType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first message!', likesCount: 17}
        ]
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
    sidebar: {}
}

export default state;