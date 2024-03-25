/**
 *
 * CardGroup
 *
 */

import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

import CardGroupStyles from './styles';
import type {PropsType} from './types';

const CardGroup = ({
  data,
  handleCardPress,
  ctaLabel,
  ctaPress,
  showCta,
  horizontal,
}: PropsType) => {
  return (
    <ScrollView horizontal={horizontal}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={CardGroupStyles.card}
          onPress={() => handleCardPress(item)}>
          <Text>{item.id}</Text>
          {showCta && (
            <TouchableOpacity onPress={ctaPress}>
              <Text>{ctaLabel}</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

CardGroup.defaultProps = {};

export default CardGroup;
