import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '@pages/HomePage';

const Stack = createStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="HomePage">
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);

export default MainNavigation;
