import { View, StyleSheet } from 'react-native'
import { Button, Icon, IconButton, MD3Colors, useTheme } from 'react-native-paper'
import { customGrays } from '../theme/theme';
import React from 'react';
import { PreferencesContext } from '../PreferencesContext';

const SettingLinks = ({ iconName, onPress, text, children }: { iconName: string, onPress: () => void, text: string, children?: React.ReactNode }) => {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    return (
        <View style={styles.container}>
            <View>
                <Button icon={() => (
                    <Icon source={iconName} size={30} color={!isThemeDark ? customGrays.grays[700] : customGrays.grays[200]} />
                )} labelStyle={{ color: !isThemeDark ? customGrays.grays[700] : customGrays.grays[200] }} mode="text" onPress={onPress}>
                    {text}
                </Button>
            </View>
            <View>
                {children ? children : <IconButton
                    icon="chevron-right"
                    size={30}
                    iconColor={!isThemeDark ? customGrays.grays[700] : customGrays.grays[200]}
                    onPress={onPress}
                />}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    }
})
export default SettingLinks