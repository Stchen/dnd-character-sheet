import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import maneuver from './reducers/maneuver.reducer';
import abilities from './reducers/abilities.reducer';
import health from './reducers/health.reducer';

export default combineReducers({
    maneuver,
    abilities,
    health,
    router: routerReducer
});