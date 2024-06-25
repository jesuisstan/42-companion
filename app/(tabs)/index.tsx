import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { C42_GREEN, C42_GREEN_DARK } from '@/style/Colors';
import Button42 from '@/components/ui/Button42';

// Get the width of the screen
const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: C42_GREEN, dark: C42_GREEN_DARK }}
      headerImage={
        <Image
          source={require('@/assets/images/ecole-42.png')}
          style={styles.ecoleLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">42-companion is helpful to:</ThemedText>
        <Collapsible title="Get 42 students' contacts">
          <View>
            <ThemedText>- login</ThemedText>
            <ThemedText>- email</ThemedText>
            <ThemedText>- mobile</ThemedText>
            <ThemedText>- location</ThemedText>
            <ThemedText>- profile picture</ThemedText>
          </View>
        </Collapsible>
        <Collapsible title="Track 42 students' progress">
          <View>
            <ThemedText>- level</ThemedText>
            <ThemedText>- wallet</ThemedText>
            <ThemedText>- skills</ThemedText>
          </View>
        </Collapsible>
        <Collapsible title="Check 42 students' activity">
          <View>
            <ThemedText>- projects</ThemedText>
            <ThemedText>- evaluations</ThemedText>
          </View>
        </Collapsible>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">To start, please login:</ThemedText>
        <Button42
          title="Login"
          onPress={() => {
            console.log('Login button pressed');
          }}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  ecoleLogo: {
    height: 242,
    width: 242,
    bottom: 0,
    left: screenWidth * 0.09, // Shift to left by XX% of the view width
    position: 'absolute'
  }
});
