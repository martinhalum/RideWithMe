/**
 *
 * RideMap Styles
 *
 */

import {Dimensions, StyleSheet} from 'react-native';

const RideMapStyles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

export default RideMapStyles;
