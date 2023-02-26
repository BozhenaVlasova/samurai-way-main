type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type ProfileAT = AddPostAT | UpdateNewPostTextAT
export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first message!', likesCount: 17}
    ] as Array<PostsType>,
    newPostText: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileAT): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextAC = (newPostText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: newPostText
}) as const

export default profileReducer;