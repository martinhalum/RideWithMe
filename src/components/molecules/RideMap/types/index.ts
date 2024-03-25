/**
 *
 * RideMap Types
 *
 */

import {Coordinates, Ride} from '@redux/types';

export type PropsType = {
  userRegion?: Coordinates;
  region?: Coordinates;
  rides: Ride[];
  handleGestureChange: (newRegion: Coordinates, isGesture?: boolean) => void;
};
