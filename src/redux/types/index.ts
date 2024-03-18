// Ride Model
export interface Ride {
  id: string;
  userId: string;
  driverId: string | null;
  pickupLocation: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  status:
    | 'pending'
    | 'accepted'
    | 'declined'
    | 'started'
    | 'picked-up'
    | 'dropped-off';
  pickupTime: Date;
  timestamp: Date;
}

// Redux State
export interface RideState {
  rides: Ride[];
  error: string | null;
  loading: boolean;
}

// Action Types
export enum RideActionTypes {
  ADD_RIDE = 'ADD_RIDE',
  UPDATE_RIDE = 'UPDATE_RIDE',
  REMOVE_RIDE = 'REMOVE_RIDE',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
}

// Action export interfaces
export interface AddRideAction {
  type: RideActionTypes.ADD_RIDE;
  payload: Ride;
}

export interface UpdateRideAction {
  type: RideActionTypes.UPDATE_RIDE;
  payload: Ride;
}

export interface RemoveRideAction {
  type: RideActionTypes.REMOVE_RIDE;
  payload: string; // id of the ride to remove
}

export interface SetErrorAction {
  type: RideActionTypes.SET_ERROR;
  payload: string;
}

export interface SetLoadingAction {
  type: RideActionTypes.SET_LOADING;
  payload: boolean;
}

export type RideAction =
  | AddRideAction
  | UpdateRideAction
  | RemoveRideAction
  | SetErrorAction
  | SetLoadingAction;
