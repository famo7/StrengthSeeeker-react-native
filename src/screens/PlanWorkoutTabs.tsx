import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Workouts from './Workouts';
import Plan from './Plan';
import { useTheme } from 'react-native-paper';


const Tab = createMaterialTopTabNavigator();

export function PlanWorkoutTabs () {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: theme.colors.background, elevation: 0, },
            }}
        >
            <Tab.Screen
                name="Workouts"
                children={() => <Workouts />}
                options={{ tabBarLabel: 'Workouts' }}

            />

            <Tab.Screen
                name="Plans"
                children={() => <Plan />}
                options={{ tabBarLabel: 'Plans' }}
            />
        </Tab.Navigator>
    );
}

