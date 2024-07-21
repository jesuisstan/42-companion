import 'react-native-reanimated';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as ScreenOrientation from 'expo-screen-orientation';

import Ecole42CompanionApp from '@/components/Ecole42CompanionApp';
import { UserProvider } from '@/contexts/UserContext';
import { NetworkProvider } from '@/contexts/NetworkContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded] = useFonts({
    DMSans: require('../../assets/fonts/DMSans-Regular.ttf')
  });

  useEffect(() => {
    // Set the initial screen orientation to allow all orientations
    ScreenOrientation.unlockAsync();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NetworkProvider>
      <UserProvider>
        <Ecole42CompanionApp />
      </UserProvider>
    </NetworkProvider>
  );
};

export default RootLayout;
