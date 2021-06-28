import React from 'react';
import { HeaderBackButton, createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();

export function AppRoutes(){
  const theme = useTheme();
  
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 17,
        },
        headerBackTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 17,
        },
        headerTintColor: theme.colors.shape,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
        }} 
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Adicione os participantes',
          headerBackTitleVisible: false,
        }} 
      />
    </Stack.Navigator>
  );
}