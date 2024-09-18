import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { display: 'none' }, // Hides the bottom navigation bar for all screens
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="themes"
        options={{
          title: 'Themes',
        }}
      />
      <Tabs.Screen
        name="faith"
        options={{
          title: 'Faith',
        }}
      />
      <Tabs.Screen
        name="hope"
        options={{
          title: 'Hope',
        }}
      />
      <Tabs.Screen
        name="love"
        options={{
          title: 'Love',
        }}
      />
      <Tabs.Screen
        name="grace"
        options={{
          title: 'Grace',
        }}
      />
      <Tabs.Screen
        name="oc"
        options={{
          title: 'OC',
        }}
      />
      <Tabs.Screen
        name="linker"
        options={{
          title: 'Linker',
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Quiz',
        }}
      />
      <Tabs.Screen
        name="saver"
        options={{
          title: 'Saver',
        }}
      />
    </Tabs>
  );
}
