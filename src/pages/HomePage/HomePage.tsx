/**
 *
 * HomePage
 *
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {
  MapView,
  Camera,
  UserTrackingMode,
  LocationPuck,
  Images,
  Image,
} from '@rnmapbox/maps';
import Mapbox from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';

import HomePageConfig from './config';

import HomePageStyles from './styles';
import type {PropsType} from './types';

const styles = {matchParent: {flex: 1}};
const HomePage = ({}: PropsType) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  Mapbox.setAccessToken(
    'pk.eyJ1IjoibWhhbHVtMjYxNyIsImEiOiJjbHR3bjJteDgwMWFsMnJxd205OTRhNmh6In0.DZljmyv88MU_be0vXVR7qA',
  );
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
    <SafeAreaView style={styles.matchParent}>
      <MapView style={styles.matchParent}>
        <Images>
          <Image name="topImage">
            <View
              style={{
                borderColor: 'blue',
                borderWidth: 2,
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: 'red',
              }}
            />
          </Image>
        </Images>
        <Camera
          defaultSettings={{
            centerCoordinate: [-77.036086, 38.910233],
            zoomLevel: 14,
          }}
          followUserLocation={true}
          followUserMode={UserTrackingMode.Follow}
          followZoomLevel={14}
        />
        <LocationPuck
          topImage="topImage"
          visible={true}
          scale={['interpolate', ['linear'], ['zoom'], 10, 1.0, 20, 4.0]}
          pulsing={{
            isEnabled: true,
            color: 'teal',
            radius: 50.0,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
};

HomePage.defaultProps = {};

export default HomePage;
