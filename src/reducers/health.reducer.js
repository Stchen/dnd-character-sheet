import { createAction } from 'redux-actions';
import { Sigmund as sigmundInfo } from '../constants/Characters';

const initState = {
    maxHealth: sigmundInfo.maxHealth,
    health: sigmundInfo.maxHealth,
    delayedDamage: 0
}
const delayedDamageMax = 10
const damageResistance = sigmundInfo.damageResistance

function heal(currentHealth, hpChange){
     const newHealth = currentHealth + hpChange
     return Math.min(newHealth, initState.maxHealth)
}

function healDelayedDamage(currentHealth, delayedDamage, hpChange) {
    const newHealth = currentHealth + hpChange
    if(newHealth > initState.maxHealth){
        const overHealAmount = newHealth - initState.maxHealth
        return Math.max(delayedDamage - overHealAmount, 0)
    } else {
        return delayedDamage
    }
}

function applyDelayedDamage(currentHealth, hpChange){
    return currentHealth - hpChange
}

function damage(currentHealth, hpChange = 0, delayedDamageMax, currentDelayedDamage, damageResistance){
    const delayDamageLeft = delayedDamageMax - currentDelayedDamage
    const modifiedDamage = delayDamageLeft == 0 ?
        Math.max(hpChange - delayDamageLeft - damageResistance, 1) :
        //delayed damage pool absorbed damage so minimum can be 0.
        Math.max(hpChange - delayDamageLeft - damageResistance, 0)
    return currentHealth - modifiedDamage
}
function updateDelayDamagePool(currentDelayedDamage, hpChange = 0, damageResistance) {
    const modifiedDamage = currentDelayedDamage + Math.max(hpChange - damageResistance, 1)
    return Math.min(10, modifiedDamage)
}

export default function health( state = initState, {type, payload}) {
    switch(type) {
        case "GAIN_HEALTH":
            return {
                ...state,
                health:heal(state.health, payload),
                delayedDamage:healDelayedDamage(state.health, state.delayedDamage, payload)
            };
        case "TAKE_DAMAGE":
            return {
                ...state,
                health: damage(state.health, payload, delayedDamageMax, state.delayedDamage, damageResistance),
                delayedDamage: updateDelayDamagePool(state.delayedDamage, payload, damageResistance)
            };
        case "LOSE_DIRECT_HEALTH":
            return {
                ...state,
                health: damage(state.health, payload, delayedDamageMax, state.delayedDamage, 0),
                delayedDamage: updateDelayDamagePool(state.delayedDamage,payload, 0)
            };
        case "APPLY_DELAYED_DAMAGE":
            return {
                ...state,
                health: applyDelayedDamage(state.health, state.delayedDamage),
                delayedDamage: 0
            };
        default:
            return state;
    }
}

export const gainHealth = (healthPoints) => createAction("GAIN_HEALTH")(parseInt(healthPoints));
export const takeDamage = (healthPoints) => createAction("TAKE_DAMAGE")(parseInt(healthPoints));
export const loseDirectHealth = (healthPoints) => createAction("LOSE_DIRECT_HEALTH")(parseInt(healthPoints));
export const resetDelayDamage = () => createAction("APPLY_DELAYED_DAMAGE")();