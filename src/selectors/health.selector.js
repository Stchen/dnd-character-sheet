import get from 'lodash/get';

export const selectHealth = state => get(state, 'health.health');
export const selectDelayedDamage = state => get(state, 'health.delayedDamage')
