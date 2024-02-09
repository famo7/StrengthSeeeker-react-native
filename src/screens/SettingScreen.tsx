import React from 'react';
import { View } from 'react-native'
import { PreferencesContext } from '../PreferencesContext';
import { Switch, useTheme, Text, Button } from 'react-native-paper';
import { createTokenSlice } from '../store/tokenStore';
import SettingLinks from '../components/SettingLinks';
const SettingScreen = () => {
    const theme = useTheme()
    const setToken = createTokenSlice(state => state.setToken);
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>


            <View style={{ marginVertical: 20 }}>
                <Text style={{ fontFamily: "Lato-Bold" }}>Account</Text>
                <SettingLinks iconName='account-outline' text='Profile' onPress={() => console.log("clicked")} />
                <SettingLinks iconName='lock-outline' text='Account' onPress={() => console.log("clicked")} />
            </View>
            <View style={{ marginVertical: 20 }}>
                <Text style={{ fontFamily: "Lato-Bold" }}>Preferences</Text>
                <SettingLinks iconName='dumbbell' text='Weight unit' onPress={() => console.log("clicked")} />
                <SettingLinks iconName='theme-light-dark' text='theme' onPress={() => console.log("clicked")}>
                    <Switch
                        style={{ marginTop: 10 }}
                        value={isThemeDark}
                        onValueChange={toggleTheme}
                    />
                </SettingLinks>
            </View>

            <Button mode='elevated' style={{ borderRadius: 0, marginHorizontal: 10, paddingVertical: 5, marginTop: 30 }}
                labelStyle={{ color: theme.colors.error, }} onPress={() => setToken("")}>Lougout</Button>

        </View>
    )
}

export default SettingScreen