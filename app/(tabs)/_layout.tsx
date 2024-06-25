import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import * as colors42 from '@/style/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor:
        //  colorScheme === 'dark' ? colors42.C42_TEXT_DARK : colors42.C42_TEXT,
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            colorScheme === 'dark'
              ? colors42.C42_BACKGROUND_DARK
              : colors42.C42_BACKGROUND
        } 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
