import { create } from 'zustand'
import { Routine, Workout } from '../types/applicationtypes'
import routineService from '../services/routines'
import { createTokenSlice } from './tokenStore'


type State = {
    routines: Routine[],
    hasError: Boolean,
    loading: Boolean
}

type Action = {
    getRoutines: () => void,
}

export const createRoutineSlice = create<State & Action>((set) => ({
    routines: [],
    hasError: false,
    loading: false,
    getRoutines: async () => {
        const token = createTokenSlice.getState().getToken();

        try {
            const response = await routineService.getAll(token);
            set({ routines: response });
        } catch (error) {
            set({ hasError: true });
        } finally {
            set({ loading: false });
        }
    }
}))
