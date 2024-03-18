/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: {
        coords: {
          latitude: React.SetStateAction<null>;
          longitude: React.SetStateAction<null>;
        };
      }) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error: any) => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Your current location:</Text>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};

export default App;
