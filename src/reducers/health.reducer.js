import { createAction } from 'redux-actions';
import { Sigmund as sigmundInfo } from '../constants/Characters';

const initState = {
    maxHealth: sigmundInfo.health,
    health: sigmundInfo.health
}

function heal(currentHealth, hpChange){
     const newHealth = currentHealth + hpChange
     return Math.min(newHealth, initState.maxHealth)
 }

function damage(currentHealth, hpChange, damageResistance = 0){
    const modifiedDamage = Math.max(hpChange - damageResistance, 1)
    return currentHealth - modifiedDamage
}

export default function health( state = initState, {type, payload}) {
    switch(type) {
        case "GAIN_HEALTH":
            return {...state, health:heal(state.health, payload)};
        case "LOSE_HEALTH":
            console.log(payload)
            return {...state, health:damage(state.health, payload, sigmundInfo.damageResistance)};
        case "LOSE_DIRECT_HEALTH":
            console.log(payload)
            return {...state, health:damage(state.health, payload, 0)};
        default:
            return state;
    }
}

export const gainHealth = (healthPoints) => createAction("GAIN_HEALTH")(parseInt(healthPoints));
export const loseHealth = (healthPoints) => createAction("LOSE_HEALTH")(parseInt(healthPoints));
export const loseDirectHealth = (healthPoints) => createAction("LOSE_DIRECT_HEALTH")(parseInt(healthPoints));