/**
 *
 * HomePageLayout
 *
 */

import React from 'react';
import {View, Text} from 'react-native';

import RideMap from '@molecules/RideMap';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';
import ResetButton from '@atoms/ResetButton';
import CardGroup from 'components/organisms/CardGroup';

const HomePageLayout = ({
  userRegion,
  region,
  rides,
  handleGestureChange,
  resetRegion,
  handleCardPress,
}: PropsType) => {
  return (
    <View style={HomePageLayoutStyles.container}>
      <RideMap
        userRegion={userRegion}
        region={region}
        rides={rides}
        handleGestureChange={handleGestureChange}
      />
      <ResetButton onButtonPress={resetRegion}>
        <Text>Center</Text>
      </ResetButton>
      <View style={HomePageLayoutStyles.cardContainer}>
        <CardGroup
          data={rides}
          handleCardPress={handleCardPress}
          ctaLabel="Details"
          ctaPress={() => console.log('Pressed!')}
          showCta
          horizontal
        />
      </View>
    </View>
  );
};

HomePageLayout.defaultProps = {};

export default HomePageLayout;
