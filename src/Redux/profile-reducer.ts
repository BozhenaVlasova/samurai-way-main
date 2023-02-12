import {
    PostsPropsType,
    ProfilePagePropsType
} from "./state";

type AddPostAT = ReturnType<typeof addPostAC>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type ProfileAT = AddPostAT | UpdateNewPostTextAT

const profileReducer = (state: ProfilePagePropsType, action: ProfileAT): ProfilePagePropsType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsPropsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
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