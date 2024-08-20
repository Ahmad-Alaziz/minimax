import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GeistRegular: require("../assets/fonts/Geist-Regular.otf"),
    GeistBold: require("../assets/fonts/Geist-Bold.otf"),
    GeistLight: require("../assets/fonts/Geist-Light.otf"),
    GeistMedium: require("../assets/fonts/Geist-Medium.otf"),
    GeistSemiBold: require("../assets/fonts/Geist-SemiBold.otf"),
    GeistBlack: require("../assets/fonts/Geist-Black.otf"),
    GeistThin: require("../assets/fonts/Geist-Thin.otf"),
    GeistUltraBlack: require("../assets/fonts/Geist-UltraBlack.otf"),
    GeistUltraLight: require("../assets/fonts/Geist-UltraLight.otf"),
    GeistMono: require("../assets/fonts/GeistMono-Regular.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
