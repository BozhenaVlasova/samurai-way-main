import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3435f0c8-67ec-4233-9844-ac53fb21d53b'
    }
})

export const UsersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(res => res.data)
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId: number) => {
        console.warn('Obsolete method. Please ProfileAPI object.')
        return ProfileAPI.getProfile(userId)
    }
}

export const ProfileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/`+userId)
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/`+userId)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    }
}

export const AuthAPI = {
    getMe() {
        return instance.get('auth/me')
    }
}