import React from 'react';
import { Pressable, Text, StyleSheet, useColorScheme } from 'react-native';
import { C42_GREEN, C42_GREEN_DARK } from '@/style/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button42: React.FC<ButtonProps> = ({ title, onPress }) => {
  const colorScheme = useColorScheme();
  const buttonColor = colorScheme === 'dark' ? C42_GREEN_DARK : C42_GREEN;

  return (
    <Pressable
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  }
});

export default Button42;
