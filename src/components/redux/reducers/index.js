// We will combine all reducers here. And then this file will be pass to our store.

import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import isLoggedUserReducer from './isLoggedUser';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:counterReducer,
    isLoggedIn:isLoggedReducer,
    isLoggedUser:isLoggedUserReducer,
});

export default allReducers;     