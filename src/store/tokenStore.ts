import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


type State = {
    token: string
    getToken: () => string,
    setToken: (newToken: string) => void
}

export const createTokenSlice = create<State>()(
    persist(
        (set, get) => ({
            token: "",
            getToken: () => {
                return get().token;
            },
            setToken: (newToken: string) => {
                set({ token: newToken })
            },
        }),
        {
            name: 'token-storage',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
)
