import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { C42_GREEN_DARK, C42_TEXT, C42_BACKGROUND } from '@/style/Colors';
import { DarkTheme, LightTheme } from '@/style/themes';
import ButtonTheme from '@/components/ui/ButtonTheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    DMSans: require('../assets/fonts/DMSans-Regular.ttf')
  });
  const [theme, setTheme] = useState(colorScheme);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : LightTheme}>
      <View style={styles.container}>
        {/* Main Content */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Floating Theme Button */}
        <ButtonTheme theme={theme} setTheme={setTheme} />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});

export default RootLayout;
