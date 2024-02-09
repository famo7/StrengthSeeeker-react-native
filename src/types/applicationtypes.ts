
export interface ISet {
    reps: number;
    weight: number;
    id: string;
}

export interface Exercise {
    name: string;
    sets: ISet[];
    id: string;
}

export interface Workout {
    name: string;
    start_time: string;
    end_time: string;
    exercises: Exercise[];
    id: string;
}

export interface Routine {
    active: boolean;
    name: string;
    workouts: Workout[];
    id: string;
}

export interface UserToken {
    firstName: string;
    email: string;
    token: string
}

export interface UserLogin {
    email: string;
    password: string
}

export interface UserRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string
}

