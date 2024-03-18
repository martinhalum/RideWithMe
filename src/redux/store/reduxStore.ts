import {createStore, combineReducers} from 'redux';
import rideReducer from '@redux/reducer';

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({
  rides: rideReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
