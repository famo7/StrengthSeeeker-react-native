import { View, StyleSheet } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createSignUpSlice } from '../store/registerStore';
import Input from '../components/Input';
const SignUp = () => {
    const { error, firstName, updatteFirstName, lastName, updateLastName, email, password, updateEmail, updatePassword, signUp } = createSignUpSlice(state => state)
    const theme = useTheme();
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const handleSignUp = () => {
        signUp({ firstName, lastName, email, password });
        if (!error) {
            updatteFirstName("")
            updateLastName("")
            updateEmail("")
            updatePassword("")
            navigation.navigate("Login")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text} variant='headlineLarge'>Sign Up</Text>
                <View style={{ marginBottom: 20 }}>
                    <Input value={firstName} onChange={updatteFirstName} placeholder="firstname" password={false} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input value={lastName} onChange={updateLastName} placeholder="lastname" password={false} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input value={email} onChange={updateEmail} placeholder="Email" password={false} />
                </View>
                <View>
                    <Input value={password} onChange={updatePassword} placeholder="Password" password={true} />
                </View>
                <Button style={styles.btn} mode='contained' onPress={handleSignUp}>SignUp</Button>
                <Text variant='labelSmall' style={{ marginTop: 25, textAlign: "center", fontFamily: "Lato-Bold" }}>ALREADY HAVE AN ACCOUNT? <Text onPress={() => navigation.navigate("Login")} style={{ color: theme.colors.primary, fontFamily: "Lato-Bold" }}>SIGN IN</Text></Text>
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


export default SignUp