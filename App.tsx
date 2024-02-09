import { PaperProvider } from 'react-native-paper';
import {
  NavigationContainer
} from '@react-navigation/native';
import { CombinedDarkTheme, CombinedDefaultTheme } from './src/theme/theme';
import Main from './Main';
import { PreferencesContext } from './src/PreferencesContext';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App () {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato/Lato-Light.ttf'),
  });



  const [isThemeDark, setIsThemeDark] = useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  if (!fontsLoaded) return null

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

