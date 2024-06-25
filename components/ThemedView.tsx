import React, { ReactNode } from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  children?: ReactNode;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  children,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  // Function to wrap text nodes in a Text component
  const wrapTextNodes = (nodes: ReactNode): ReactNode => {
    return React.Children.map(nodes, (child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return <Text>{child}</Text>;
      }
      return child;
    });
  };

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps}>
      {wrapTextNodes(children)}
    </View>
  );
}
