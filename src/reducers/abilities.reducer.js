import { createAction } from 'redux-actions';

const initState = {
    abilityDetail:{},
}

export default function abilities( state = initState, {type, payload}) {
    switch(type) {
        case "SHOW_ABILITY_DETAIL":{
            console.log(payload)
            return {...state, abilityDetail:payload};
        }
        default:
            return state;
    }
}

export const showAbilitiesDetail = (ability) => createAction("SHOW_ABILITY_DETAIL")(ability);