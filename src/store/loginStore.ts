import { create } from 'zustand'
import { UserLogin } from '../types/applicationtypes'
import userService from '../services/users'
import { createTokenSlice } from './tokenStore'


type State = {
    email: string
    password: string
}

type Action = {
    updateEmail: (email: State['email']) => void
    updatePassword: (password: State['password']) => void
    login: (userData: UserLogin) => void
}

export const createAuthSlice = create<State & Action>((set, get) => ({
    email: '',
    password: '',

    updateEmail: (email) => set({ email }),
    updatePassword: (password) => set({ password }),

    login: async () => {
        const email = get().email
        const password = get().password
        const response = await userService.login({ email, password })

        createTokenSlice.getState().setToken(response.token)
    }
}))
