import get from 'lodash/get';

export const selectActivatedManeuvers = state => get(state, 'maneuver.activatedManeuvers');
export const selectManeuverDetail = state => get(state, 'maneuver.maneuverDetail');
