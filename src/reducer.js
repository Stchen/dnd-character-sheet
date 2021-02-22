import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import maneuver from './reducers/maneuver.reducer';
import feats from './reducers/feats.reducer';

export default combineReducers({
    maneuver,
    feats,
    router: routerReducer
});