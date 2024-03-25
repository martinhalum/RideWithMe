/**
*
* RideMap Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import RideMap from '../RideMap';

test('RideMap', () => {
  const tree = renderer
    .create(
      <RideMap />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
