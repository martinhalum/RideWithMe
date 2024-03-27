/**
 *
 * HomePageLayout Styles
 *
 */

import {Dimensions, StyleSheet} from 'react-native';

const HomePageLayoutStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  cardContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    top: Dimensions.get('screen').height * 0.65,
  },
});

export default HomePageLayoutStyles;
