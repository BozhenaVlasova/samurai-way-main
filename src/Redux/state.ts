import {rerenderEntireTree} from "../render";

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

export const state = {
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
}

export const addPost = () => {
    let newPost: PostsPropsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export default state;