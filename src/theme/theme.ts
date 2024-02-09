


export const customGrays = {
  grays: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  }
};

export const light = {
  colors: {
    "primary": "rgb(0, 107, 84)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(128, 248, 209)",
    "onPrimaryContainer": "rgb(0, 33, 23)",
    "secondary": "rgb(129, 71, 146)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(250, 215, 255)",
    "onSecondaryContainer": "rgb(51, 0, 68)",
    "tertiary": "rgb(117, 91, 0)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 223, 146)",
    "onTertiaryContainer": "rgb(36, 26, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(251, 253, 249)",
    "onBackground": "rgb(25, 28, 27)",
    "surface": "rgb(251, 253, 249)",
    "onSurface": "rgb(25, 28, 27)",
    "surfaceVariant": "rgb(219, 229, 223)",
    "onSurfaceVariant": "rgb(63, 73, 68)",
    "outline": "rgb(112, 121, 116)",
    "outlineVariant": "rgb(191, 201, 195)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(46, 49, 47)",
    "inverseOnSurface": "rgb(239, 241, 238)",
    "inversePrimary": "rgb(98, 219, 182)",

    "elevation": {
      "level0": "transparent",
      "level1": "rgb(238, 246, 241)",
      "level2": "rgb(231, 241, 236)",
      "level3": "rgb(223, 237, 231)",
      "level4": "rgb(221, 236, 229)",
      "level5": "rgb(216, 233, 226)"
    },
    "surfaceDisabled": "rgba(25, 28, 27, 0.12)",
    "onSurfaceDisabled": "rgba(25, 28, 27, 0.38)",
    "backdrop": "rgba(41, 50, 47, 0.4)"
  },
};

export const dark = {
  "colors": {
    "primary": "rgb(98, 219, 182)",
    "onPrimary": "rgb(0, 56, 42)",
    "primaryContainer": "rgb(0, 81, 62)",
    "onPrimaryContainer": "rgb(128, 248, 209)",
    "secondary": "rgb(240, 176, 255)",
    "onSecondary": "rgb(77, 22, 96)",
    "secondaryContainer": "rgb(102, 47, 120)",
    "onSecondaryContainer": "rgb(250, 215, 255)",
    "tertiary": "rgb(237, 193, 72)",
    "onTertiary": "rgb(62, 46, 0)",
    "tertiaryContainer": "rgb(89, 68, 0)",
    "onTertiaryContainer": "rgb(255, 223, 146)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(25, 28, 27)",
    "onBackground": "rgb(225, 227, 224)",
    "surface": "rgb(25, 28, 27)",
    "onSurface": "rgb(225, 227, 224)",
    "surfaceVariant": "rgb(63, 73, 68)",
    "onSurfaceVariant": "rgb(191, 201, 195)",
    "outline": "rgb(137, 147, 142)",
    "outlineVariant": "rgb(63, 73, 68)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(225, 227, 224)",
    "inverseOnSurface": "rgb(46, 49, 47)",
    "inversePrimary": "rgb(0, 107, 84)",

    "elevation": {
      "level0": "transparent",
      "level1": "rgb(29, 38, 35)",
      "level2": "rgb(31, 43, 39)",
      "level3": "rgb(33, 49, 44)",
      "level4": "rgb(34, 51, 46)",
      "level5": "rgb(35, 55, 49)"
    },
    "surfaceDisabled": "rgba(225, 227, 224, 0.12)",
    "onSurfaceDisabled": "rgba(225, 227, 224, 0.38)",
    "backdrop": "rgba(41, 50, 46, 0.4)"
  }
};
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme, configureFonts } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});




export const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,

  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    ...light.colors,
  },
};
export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    ...dark.colors,
  },
};
