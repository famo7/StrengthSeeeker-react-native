import { create } from 'zustand'
import { Workout } from '../types/applicationtypes'
import routineService from '../services/routines'
import { createTokenSlice } from './tokenStore'


type State = {
    workouts: Workout[],
    error: boolean
}

type Action = {
    getWorkouts: () => void,
}

export const createWorkoutSlice = create<State & Action>((set) => ({
    workouts: [],
    error: false,
    getWorkouts: async () => {
        const token = createTokenSlice.getState().getToken();

        try {
            const response = await routineService.getActive(token);
            set({ workouts: response.workouts });
        } catch (error) {
            set({ error: true });
        }
    }
}))
