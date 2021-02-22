import { createAction } from 'redux-actions';

const initState = {
    featDetail:{},
}

export default function feats( state = initState, {type, payload}) {
    switch(type) {
        case "SHOW_FEAT_DETAIL":
            return {...state, featDetail:payload};
        default:
            return state;
    }
}

export const showFeatDetail = (feat) => createAction("SHOW_FEAT_DETAIL")(feat);