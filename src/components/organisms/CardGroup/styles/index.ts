/**
 *
 * CardGroup Styles
 *
 */

import {StyleSheet} from 'react-native';

const CardGroupStyles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  card: {
    width: 300,
    height: 250,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default CardGroupStyles;
