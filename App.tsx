/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from '@navigation/AppNavigation';
// import store from '@redux/store';

function App(): React.JSX.Element {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    // </Provider>
  );
}

export default App;
