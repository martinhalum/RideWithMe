import {RideAction, RideActionTypes, RideState} from '@redux/types';

// Initial State
const initialState: RideState = {
  rides: [],
  error: null,
  loading: false,
};

// Reducer Function
const rideReducer = (
  state: RideState = initialState,
  action: RideAction,
): RideState => {
  switch (action.type) {
    case RideActionTypes.ADD_RIDE:
      return {
        ...state,
        rides: [...state.rides, action.payload],
      };
    case RideActionTypes.UPDATE_RIDE:
      return {
        ...state,
        rides: state.rides.map(ride =>
          ride.id === action.payload.id ? action.payload : ride,
        ),
      };
    case RideActionTypes.REMOVE_RIDE:
      return {
        ...state,
        rides: state.rides.filter(ride => ride.id !== action.payload),
      };
    case RideActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RideActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default rideReducer;
