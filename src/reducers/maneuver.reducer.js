import { createAction } from 'redux-actions';
import { Sigmund as sigmundInfo } from '../constants/Characters';

const initState = {
    activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, [], 2),
    maneuverDetail:{},
}

function activateManeuver( knownManeuvers, activatedManeuvers, numOfWantedManeuvers = 1){
    if(knownManeuvers.length === 0 || numOfWantedManeuvers <= 0) {
        return activatedManeuvers;
    }else if(knownManeuvers.length === activatedManeuvers.length) {
        return activateManeuver(sigmundInfo.maneuvers, [], 2)
    }
    const unActivatedManeuvers = knownManeuvers.filter(maneuver => !activatedManeuvers.includes(maneuver));
    const randomIndex = Math.floor(Math.random() * unActivatedManeuvers.length);
    return activateManeuver(unActivatedManeuvers,  [...activatedManeuvers, unActivatedManeuvers[randomIndex]], numOfWantedManeuvers-1)
}

export default function maneuver( state = initState, {type, payload}) {
    switch(type) {
        case "ADD_MANEUVER":
            return {...state, activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, state.activatedManeuvers)};
        case "RESTART_MANEUVER_LOOP":
            return {...state, activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, [], 2)};
        case "SHOW_MANEUVER_DETAIL":
            return {...state, maneuverDetail:payload};
        default:
            return state;
    }
}

export const newManeuverActivated = () => createAction("ADD_MANEUVER")();
export const showManeuverDetail = (maneuver) => createAction("SHOW_MANEUVER_DETAIL")(maneuver);
export const restartManLoop = () => createAction("RESTART_MANEUVER_LOOP")();