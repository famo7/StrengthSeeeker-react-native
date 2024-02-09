import { create } from 'zustand'
import { UserRegister } from '../types/applicationtypes'
import userService from '../services/users'


type State = {
    error: boolean;
    firstName: string;
    lastName: string;
    email: string
    password: string
}

type Action = {
    updatteFirstName: (firstName: State['firstName']) => void
    updateLastName: (lastName: State['lastName']) => void
    updateEmail: (email: State['email']) => void
    updatePassword: (password: State['password']) => void
    signUp: (userData: UserRegister) => void
}

export const createSignUpSlice = create<State & Action>((set, get) => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: false,

    updatteFirstName: (firstName) => set({ firstName }),
    updateLastName: (lastName) => set({ lastName }),
    updateEmail: (email) => set({ email }),
    updatePassword: (password) => set({ password }),

    signUp: async () => {
        const firstName = get().firstName
        const lastName = get().lastName
        const email = get().email
        const password = get().password
        try {
            await userService.signUp({ firstName, lastName, email, password })
        } catch (error) {
            set({ error: true })
        }

    }
}))
