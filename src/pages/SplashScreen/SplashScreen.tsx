/**π
 *
 * SplashScreen
 *
 */

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {AppParamList} from '@navigation/AppNavigation/types';
import {RideState} from '@redux/types';
import {useFetchAll} from '../../storage';
import uuid from 'react-native-uuid';
// import SplashScreenConfig from './config';

import SplashScreenStyles from './styles';

import type {PropsType} from './types';
const SplashScreen = ({}: PropsType) => {
  const navigation = useNavigation<StackNavigationProp<AppParamList>>();
  const loading = useSelector((state: RideState) => state.loading);
  const fetchDoc = useFetchAll('Rides');

  useEffect(() => {
    if (!loading) {
      console.log(uuid.v4());
      navigation.navigate('MainNav', {data: fetchDoc});
    }
  });

  return (
    <View style={SplashScreenStyles.container}>
      <Text>Fetching Data</Text>
    </View>
  );
};

export default SplashScreen;
