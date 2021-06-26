import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import maneuver from './reducers/maneuver.reducer';
import feats from './reducers/feats.reducer';
import health from './reducers/health.reducer';

export default combineReducers({
    maneuver,
    feats,
    health,
    router: routerReducer
});