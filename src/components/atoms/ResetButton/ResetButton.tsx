/**
 *
 * ResetButton
 *
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';

import ResetButtonStyles from './styles';
import type {PropsType} from './types';

const ResetButton = ({onButtonPress, children}: PropsType) => {
  return (
    <TouchableOpacity
      style={ResetButtonStyles.resetButton}
      onPress={onButtonPress}>
      {children}
    </TouchableOpacity>
  );
};

ResetButton.defaultProps = {};

export default ResetButton;
