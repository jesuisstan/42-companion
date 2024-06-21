import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { C42_GREEN, C42_GREEN_DARK } from '@/constants/Colors';

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
        <ThemedText>
          <ThemedText type="defaultSemiBold">42-companion</ThemedText> is
          helpful to:
        </ThemedText>
        <Collapsible title="Track 42 students contacts">
          <ThemedText>
            - login
            <br />
            - email
            <br />
            - mobile
            <br />
            - location
            <br />- profile picture
          </ThemedText>
        </Collapsible>
        <Collapsible title="Track 42 students progress">
          <ThemedText>
            - level
            <br />
            - wallet
            <br />- skills
          </ThemedText>
        </Collapsible>
        <Collapsible title="Track 42 students activity">
          <ThemedText>
            - projects
            <br />- evaluations
          </ThemedText>
        </Collapsible>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>{' '}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>{' '}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>{' '}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
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
    left: 0,
    position: 'absolute'
  }
});
