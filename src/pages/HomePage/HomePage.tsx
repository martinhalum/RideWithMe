/**
 *
 * HomePage
 *
 */

import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import HomePageLayout from '@layouts/HomePageLayout';

import {Coordinates, RideState} from '@redux/types';

import {LATITUDE_DELTA, LONGITUDE_DELTA} from './config';

const HomePage = () => {
  const [userRegion, setUserRegion] = useState<Coordinates | undefined>(
    undefined,
  );
  const [region, setRegion] = useState<Coordinates | undefined>(undefined);

  const data = useSelector((state: RideState) => state.data);

  const resetRegion = () => {
    setRegion(userRegion);
  };

  const handleCardPress = (coords: Coordinates) => {
    setRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const handleRegionChange = (newRegion: Coordinates, isGesture?: boolean) => {
    isGesture && setRegion(newRegion);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: {
        coords: {
          latitude: React.SetStateAction<null>;
          longitude: React.SetStateAction<null>;
        };
      }) => {
        setUserRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00145,
          longitudeDelta: 0.0189,
        });
      },
      (error: any) => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View>
      <HomePageLayout
        userRegion={userRegion}
        region={region}
        rides={data}
        handleCardPress={handleCardPress}
        resetRegion={resetRegion}
        handleGestureChange={handleRegionChange}
      />
    </View>
  );
};

HomePage.defaultProps = {};

export default HomePage;
