import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '@pages/SplashScreen';
// import AuthNavigation from '@navigation/AuthNavigation';
import MainNavigation from '@navigation/MainNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <Stack.Screen name="AuthNav" component={AuthNavigation} /> */}
      <Stack.Screen name="MainNav" component={MainNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
