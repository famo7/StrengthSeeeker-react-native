import React from 'react'
import { useTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from './src/screens/SettingScreen';
import { RootTabParamList } from './src/types/RootStackParamList';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import { createTokenSlice } from './src/store/tokenStore';
import AuthStack from './src/components/AuthStack';
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Main () {
    const token = createTokenSlice(state => state.token);

    const theme = useTheme();
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'barbell'
                            : 'barbell-outline';
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },

                headerStyle: {
                    backgroundColor: theme.colors.background
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.background
                },
                tabBarLabel: "",
                headerShadowVisible: false,

            })}>
            {token ? (
                <>
                    <Tab.Screen name="Home" children={() => <HomeScreen />} options={{ headerTitle: "" }} />
                    <Tab.Screen name="Setting" options={{
                        headerTitleAlign: "center"
                    }} component={SettingScreen} />
                </>
            ) : (
                <Tab.Screen name="ParentAuth" component={AuthStack} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
            )}


        </Tab.Navigator>

    )
}