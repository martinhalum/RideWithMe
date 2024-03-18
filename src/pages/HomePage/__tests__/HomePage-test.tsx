/**
*
* HomePage Test
*
*/


import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../HomePage';

test('HomePage', () => {
  const tree = renderer
    .create(
      <HomePage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
