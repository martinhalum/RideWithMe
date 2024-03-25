/**
*
* ResetButton Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import ResetButton from '../ResetButton';

test('ResetButton', () => {
  const tree = renderer
    .create(
      <ResetButton />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
