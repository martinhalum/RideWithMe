/**π
 *
 * SplashScreen
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {AppParamList} from '@navigation/AppNavigation/types';

// import SplashScreenConfig from './config';

// import SplashScreenStyles from './styles';
import type {PropsType} from './types';

const SplashScreen = ({}: PropsType) => {
  const navigation = useNavigation<StackNavigationProp<AppParamList>>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading Data</Text>
    </View>
  );
};

export default SplashScreen;
