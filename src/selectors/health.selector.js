import get from 'lodash/get';

export const selectHealth = state => get(state, 'health.health');
