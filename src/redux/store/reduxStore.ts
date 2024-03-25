import {createStore} from 'redux';
import rideReducer from '@redux/reducer';
import {persistReducer} from 'redux-persist';
import {persistConfig} from '@redux/persist';

// Combine reducers if you have more than one reducer
const rootReducer = rideReducer;

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
const store = createStore(rootReducer);

export default store;
