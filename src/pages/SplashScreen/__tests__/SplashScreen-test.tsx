/**
*
* SplashScreen Test
*
*/


import React from 'react';
import renderer from 'react-test-renderer';

import SplashScreen from '../SplashScreen';

test('SplashScreen', () => {
  const tree = renderer
    .create(
      <SplashScreen />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
