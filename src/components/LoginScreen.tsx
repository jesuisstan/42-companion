import { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import 'expo-dev-client';

import { useUser } from '@/contexts/UserContext';
import { C42_GREEN } from '@/style/Colors';
import { ThemedText } from './ui/ThemedText';
import shootAlert from '@/utils/shoot-alert';

const LoginScreen: FC = () => {
  const { setUser } = useUser();
  const [initializing, setInitializing] = useState(true);

  const onButtonPress = async () => {
    try {
      console.log('signing in'); // todo
    } catch (error: any) {
      if (error.code) {
        switch (error.code) {
          default:
            shootAlert('Oops!', 'Error signing in.');
        }
      } else {
        shootAlert('Oops!', 'Unknown error. Try again later.');
      }
    }
  };

  return initializing ? null : (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/favicon.png')}
        style={{ width: 50, height: 50 }}
      />
      <ThemedText type="subtitle">Welcome to</ThemedText>
      <ThemedText type="title">42 Companion</ThemedText>
      <Button onPress={onButtonPress} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C42_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 21
  }
});
