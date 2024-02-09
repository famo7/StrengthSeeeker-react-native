import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import Input from '../components/Input';
import { createAuthSlice } from "../store/loginStore";
const LoginScreen = () => {
    const theme = useTheme();
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { email, password, login, updateEmail, updatePassword } = createAuthSlice(state => state);

    const handleLogin = () => {
        login({ email, password });
        updateEmail("")
        updatePassword("")
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text} variant='headlineLarge'>Log In</Text>
                <View style={{ marginBottom: 20 }}>
                    <Input value={email} onChange={updateEmail} placeholder="Email" password={false} />
                </View>
                <View>
                    <Input value={password} onChange={updatePassword} placeholder="Password" password={true} />
                </View>
                <Button style={styles.btn} mode='contained' onPress={handleLogin}>Login</Button>
                <Text variant='labelSmall' style={{ marginTop: 25, textAlign: "center", fontFamily: "Lato-Bold" }}>DON'T HAVE AN ACCOUNT? <Text onPress={() => navigation.navigate("SignUp")} style={{ color: theme.colors.primary, fontFamily: "Lato-Bold" }}>REGISTER HERE</Text></Text>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50


    },
    subContainer: {
        width: '100%',
        padding: 20,
        paddingHorizontal: 40,

    },
    text: {
        fontFamily: "Lato-Bold",
        textAlign: "center",
        marginBottom: 15,


    },
    btn: {
        paddingVertical: 5,
        marginTop: 30
    }

})

export default LoginScreen