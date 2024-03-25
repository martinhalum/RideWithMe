import {RideAction, RideActionTypes, RideState} from '@redux/types';

// Initial State
const initialState: RideState = {
  data: [],
  error: null,
  loading: true,
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
        data: [...state.data, action.payload],
      };
    case RideActionTypes.UPDATE_RIDE:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    case RideActionTypes.REMOVE_RIDE:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
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
