import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import maneuver from './reducers/maneuver.reducer';

export default combineReducers({
    maneuver,
    router: routerReducer
});