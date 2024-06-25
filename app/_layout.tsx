import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { C42_GREEN_DARK, C42_TEXT, C42_BACKGROUND } from '@/style/Colors';
import { DarkTheme, LightTheme } from '@/style/themes';

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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

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
        <TouchableOpacity style={styles.floatingButton} onPress={toggleTheme}>
          {theme === 'dark' ? <Moon size={21} /> : <Sun size={21} />}
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 28, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: C42_GREEN_DARK, // Default background color
    elevation: 4, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    zIndex: 100, // Ensure it's above other components
    opacity: 0.8 // Make it slightly transparent
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16
  }
});

export default RootLayout;
