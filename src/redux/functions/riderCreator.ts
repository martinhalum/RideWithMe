import {Ride, RideAction, RideActionTypes} from '../types/index';
// Action Creators
export const addRide = (ride: Ride): RideAction => ({
  type: RideActionTypes.ADD_RIDE,
  payload: ride,
});

export const updateRide = (ride: Ride): RideAction => ({
  type: RideActionTypes.UPDATE_RIDE,
  payload: ride,
});

export const removeRide = (id: string): RideAction => ({
  type: RideActionTypes.REMOVE_RIDE,
  payload: id,
});

export const setError = (error: string): RideAction => ({
  type: RideActionTypes.SET_ERROR,
  payload: error,
});

export const setLoading = (loading: boolean): RideAction => ({
  type: RideActionTypes.SET_LOADING,
  payload: loading,
});
