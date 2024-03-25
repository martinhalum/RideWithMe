/**
 *
 * RideMap
 *
 */

import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View} from 'react-native';

import RideMapStyles from './styles';
import type {PropsType} from './types';

const RideMap = ({
  userRegion,
  region,
  rides,
  handleGestureChange,
}: PropsType) => {
  return (
    <View>
      {userRegion && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={RideMapStyles.map}
          region={region || userRegion}
          onRegionChangeComplete={(newRegion, gesture) => {
            handleGestureChange(newRegion, gesture.isGesture);
          }}>
          <Marker coordinate={userRegion} />
          {rides.map((data, index) => (
            <Marker
              key={index}
              coordinate={data.pickupLocation}
              pinColor="blue"
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

RideMap.defaultProps = {};

export default RideMap;
