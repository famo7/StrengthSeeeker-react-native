import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import React from 'react'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { styles as customStyle } from '../styles/style';
const Authscreen = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    return (
        <View style={customStyle.container}>
            <View style={styles.item}>
                <Text style={[styles.topItem, styles.textTitle]} variant='displayMedium'>Welcome!</Text>
                <Text variant='bodyMedium' style={styles.textBody}>We're so excited to have you here.</Text>
            </View>

            <View style={styles.item}>
                <Button onPress={() => navigation.navigate("Login")} mode='contained' style={styles.topItem} contentStyle={customStyle.btn}>Sign in</Button>
                <Button onPress={() => navigation.navigate("SignUp")} mode='contained' contentStyle={customStyle.btn} >Sign up</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: "100%",
    },
    topItem: {
        marginBottom: 15
    },
    textTitle: {
        fontFamily: "Lato-Bold",
        textAlign: "center"
    },
    textBody: {
        fontFamily: "Lato-Regular",
        textAlign: "center"
    }

})
export default Authscreen