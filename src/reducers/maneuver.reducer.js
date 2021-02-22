import { createAction } from 'redux-actions';
import { Sigmund as sigmundInfo } from '../constants/Characters';

const startingManeuverAmount = 3

const initState = {
    activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, [], startingManeuverAmount),
    maneuverDetail:{},
}

function activateManeuver( knownManeuvers, activatedManeuvers, numOfWantedManeuvers = 1){
    if(knownManeuvers.length === 0 || numOfWantedManeuvers <= 0) {
        return activatedManeuvers;
    }else if(knownManeuvers.length === activatedManeuvers.length) {
        return activateManeuver(sigmundInfo.maneuvers, [], startingManeuverAmount)
    }
    const unActivatedManeuvers = knownManeuvers.filter(maneuver => !activatedManeuvers.find(x => x.name === maneuver.name));
    const randomIndex = Math.floor(Math.random() * unActivatedManeuvers.length);
    const selectedManeuver = Object.assign({}, unActivatedManeuvers[randomIndex]);
    return activateManeuver(unActivatedManeuvers,  [...activatedManeuvers, selectedManeuver], numOfWantedManeuvers-1)
}

function expendActivateManeuver(activatedManeuvers, expendedManeuver){
    const newArray = activatedManeuvers.map(
        maneuver => {
            if(maneuver.name === expendedManeuver.name){
                maneuver.maneuverExpended = true;
            }
            return maneuver;
        });
    return newArray;
}

export default function maneuver( state = initState, {type, payload}) {
    switch(type) {
        case "ADD_MANEUVER":
            return {...state, maneuverDetail:{}, activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, state.activatedManeuvers)};
        case "RESTART_MANEUVER_LOOP":
            return {...state, maneuverDetail:{}, activatedManeuvers: activateManeuver(sigmundInfo.maneuvers, [], 2)};
        case "SHOW_MANEUVER_DETAIL":
            return {...state, maneuverDetail:payload};
        case "EXPEND_MANEUVER":
            return {...state, activatedManeuvers: expendActivateManeuver(state.activatedManeuvers, payload)}
        default:
            return state;
    }
}

export const newManeuverActivated = () => createAction("ADD_MANEUVER")();
export const showManeuverDetail = (maneuver) => createAction("SHOW_MANEUVER_DETAIL")(maneuver);
export const restartManLoop = () => createAction("RESTART_MANEUVER_LOOP")();
export const expendManeuver = (maneuverDetail) => createAction("EXPEND_MANEUVER")(maneuverDetail);