import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  JobsNearBy,
  PopularJobs,
  ScreenHeaderBtn,
  WelcomeScreen,
} from "../components";
import { COLORS, icons, images, SIZES } from "../constants";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Stack
    screenOptions={{
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.lightWhite },
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={icons.menu}
          dimension={30}
          handlePress={() => {}}
        />
      ),
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={images.profile}
          dimension={40}
          handlePress={() => {}}
        />
      ),
      headerTitle: "",
    }}
  />
);
}
