import { createStackNavigator } from '@react-navigation/stack';
import { PlanWorkoutTabs } from './PlanWorkoutTabs';
import Exercises from './Exercises';
import { RootTabParamList } from '../types/RootStackParamList';
import { createRoutineSlice } from '../store/routineStore';
import { useEffect } from 'react';
const Stack = createStackNavigator<RootTabParamList>();


export default function HomeScreen () {

    return (
        <Stack.Navigator >
            <Stack.Screen name="Tabs" children={() => <PlanWorkoutTabs />} options={{ headerShown: false }} />
            <Stack.Screen name="Exercises" component={Exercises} />
        </Stack.Navigator>
    );
}
