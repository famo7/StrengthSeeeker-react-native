import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RootTabParamList } from '../types/RootStackParamList';
import Authscreen from '../screens/Authscreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator<RootTabParamList>();

const AuthStack = () => {
    const theme = useTheme()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: theme.colors.background },
            title: "",
            headerTitleAlign: "center",
            headerTintColor: theme.colors.primary,
            headerTitleStyle: { color: 'black' },
            headerShadowVisible: false,



        }}>
            <Stack.Screen name="Auth" component={Authscreen} options={{ title: "" }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack